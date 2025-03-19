import { useApi } from '../../API/useAPI';
import { Section, SectionColumn } from '../../common/Container';
import Loading from '../../common/Loading';
import Error from '../../common/Error';
import { deleteItem } from './useDeleteItem';
import { List, ListItem, Title, Button, ListInternalItem, Caption } from './styled';

const ManageDate = () => {
    const { teams, loading, error } = useApi();

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <Error />
    }

    return (
        <SectionColumn>
            <Title>Zarzadzaj istniejącymi drużynami</Title>
            <Section>
                {teams ? (
                    [...new Set(teams.map(team => team.team))].map((uniqueGrupa, index) => {
                        return (
                            <List key={index}>
                                <Caption>Grupa: {uniqueGrupa}</Caption>
                                {teams
                                    .filter(team => team.team === uniqueGrupa)
                                    .map((team) => {
                                        return (
                                            <ListItem>
                                                {team.team === uniqueGrupa ? team.country : null}
                                                <List>
                                                    <ListInternalItem>
                                                        <Button>Edytuj</Button>
                                                        <Button onClick={() => deleteItem(team.id)}>Usuń</Button>
                                                    </ListInternalItem>
                                                </List>
                                            </ListItem>
                                        )
                                    })
                                }
                            </List>
                        )
                    })
                ) : null}
            </Section>
        </SectionColumn>
    );
};


export default ManageDate