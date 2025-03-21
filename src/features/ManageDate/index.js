import { useApi } from '../../API/useAPI';
import { Section, SectionColumn } from '../../common/Container';
import Loading from '../../common/Loading';
import Error from '../../common/Error';
import { Title, List, Caption, ListItem, Button, ListInternalItem } from "./styled"
import { FixedComponentUpdated, useUpdateClick } from "./FixedComponents/useUpdateClick";
import { FixedComponentDeleted, useDeleteClick } from "./FixedComponents/useDeleteClick";

const ManageDate = () => {
    const { teams, loading, error } = useApi();

    const { 
        showConfirm,
        setShowConfirm,
        deletedCountry,
        deletedCountryId,
        handleDeleteClick,
    } = useDeleteClick();

    const {
        showUpdatedConfirm,
        setShowUpdatedConfirm,
        updatedCountry,
        updatedCountryId,
        handleUpdatedClick,
    } = useUpdateClick();

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
                        setShowConfirm={setShowConfirm}
                    />
                )}
                {showUpdatedConfirm && updatedCountry && (
                    <FixedComponentUpdated
                        id={updatedCountryId}
                        name={updatedCountry}
                        setShowUpdatedConfirm={setShowUpdatedConfirm}
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
                                                        <Button onClick={() => handleUpdatedClick(team.id,team.country)}>Edytuj</Button>
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
