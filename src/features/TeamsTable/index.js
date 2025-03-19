import { Table, TableTd, TableTr, TableCaption, TableTdRight } from '../../common/TableStyle';
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

    let counter = 0;

    return (
        <Section>
            {teams ? (
                [...new Set(teams.map(team => team.team))].map((uniqueGrupa, index) => {
                    counter = 0;
                    return (
                        <Table key={index}>
                            <TableCaption>Grupa: {uniqueGrupa}</TableCaption>
                            {teams
                                .filter(team => team.team === uniqueGrupa)
                                .map((team) => {
                                    counter++;
                                    return (
                                        <TableTr>
                                            <TableTd>{counter}</TableTd>
                                            <TableTd>{team.team === uniqueGrupa ? team.country : null}</TableTd>
                                            <TableTdRight>{team.team === uniqueGrupa ? team.points : null}</TableTdRight>
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