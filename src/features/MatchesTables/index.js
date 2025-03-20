import { Table, TableTd, TableTr, TableCaption } from '../../common/TableStyle';
import { useApi } from '../../API/useAPI';
import { Section } from '../../common/Container';
import Loading from '../../common/Loading';
import Error from '../../common/Error';

const TeamsTable = () => {
    const { teams, loading, error } = useApi();

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <Error />
    }

    return (
        <Section>
            {teams ? (
                [...new Set(teams.map(team => team.team))].map((uniqueGrupa, index) => {
                    return (
                        <Table key={index}>
                            <TableCaption>Grupa: {uniqueGrupa}</TableCaption>
                            {teams
                                .filter(team => team.team === uniqueGrupa)
                                .map((team) => {
                                    return (
                                        <TableTr>
                                            <TableTd>{team.team === uniqueGrupa ? team.country : null}</TableTd>
                                            <TableTd>{team.team === uniqueGrupa ? team.country : null}</TableTd>
                                        </TableTr>
                                    )
                                })
                            }
                        </Table>
                    )
                })
            ) : null}
        </Section>
    );
};


export default TeamsTable