import { useState } from "react";
import { useApi } from '../../API/useAPI';
import { Section, SectionColumn } from '../../common/Container';
import Loading from '../../common/Loading';
import Error from '../../common/Error';
import { deleteItem } from './useDeleteItem';
import { List, ListItem, Title, Button, ListInternalItem, Caption } from './styled';
import { DeletedFixed, FixedButton, Parahraph } from "./FixedComponents";

const FixedComponentDeleted = ({id, name}) => (
    <DeletedFixed>
        <Parahraph>Czy napewno chcesz usunąć kraj:<br/> {name} ?</Parahraph>
        <List>
            <ListInternalItem>
                <FixedButton onClick={() => deleteItem(id)}>Tak</FixedButton>
                <FixedButton>Nie</FixedButton>
            </ListInternalItem>
        </List>
    </DeletedFixed>
)

const ManageDate = () => {
    const { teams, loading, error } = useApi();

    const [showConfirm, setShowConfirm] = useState(false);
    const [deletedCountry, setDeletedCountry] = useState(null);
    const [deletedCountryId, setDeletedCountryId] = useState(null);

    const handleDeleteClick = (id, team) => {
        setShowConfirm(true);
        setDeletedCountry(team);
        setDeletedCountryId(id);
    };

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <Error />;
    }

    return (
        <SectionColumn>
            <Title>Zarządzaj istniejącymi drużynami</Title>
            <Section>
                {showConfirm && deletedCountry && (
                    <FixedComponentDeleted 
                        id={deletedCountryId}
                        name={deletedCountry}
                    />
                )}
                {teams ? (
                    [...new Set(teams.map(team => team.team))].map((uniqueGrupa, index) => {
                        return (
                            <List key={index}>
                                <Caption>Grupa: {uniqueGrupa}</Caption>
                                {teams
                                    .filter(team => team.team === uniqueGrupa)
                                    .map((team) => {
                                        return (
                                            <ListItem key={team.country}>
                                                {team.team === uniqueGrupa ? team.country : null}
                                                <List>
                                                    <ListInternalItem>
                                                        <Button>Edytuj</Button>
                                                        <Button onClick={() => handleDeleteClick(team.id,team.country)}>Usuń</Button>
                                                    </ListInternalItem>
                                                </List>
                                            </ListItem>
                                        );
                                    })
                                }
                            </List>
                        );
                    })
                ) : null}
            </Section>
        </SectionColumn>
    );
};

export default ManageDate;
