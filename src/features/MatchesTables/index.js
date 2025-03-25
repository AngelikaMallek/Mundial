import { Table, TableTd, TableTr, TableCaption, TableTdRight } from '../../common/TableStyle';
import { useApi } from '../../API/useAPI';
import { Section } from '../../common/Container';
import Loading from '../../common/Loading';
import Error from '../../common/Error';

const TeamsTable = () => {
    const { teams, loading, error } = useApi();

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <Error />;
    }

    return (
        <Section>
            {teams ? (
                [...new Set(teams.map(team => team.team))].map((uniqueGrupa, index) => {
                    const grupaTeams = teams.filter(team => team.team === uniqueGrupa);

                    const matches = [];
                    for (let i = 0; i < grupaTeams.length; i++) {
                        for (let j = i + 1; j < grupaTeams.length; j++) {
                            matches.push([grupaTeams[i], grupaTeams[j]]);
                        }
                    }

                    return (
                        <Table key={index}>
                            <TableCaption>Grupa: {uniqueGrupa}</TableCaption>
                            {matches.map((match, matchIndex) => (
                                <TableTr key={matchIndex}>
                                    <TableTd>{match[0].country}</TableTd>
                                    <TableTd>{match[1].country}</TableTd>
                                    <TableTdRight>
                                        {match[0].points}-{match[1].points}
                                    </TableTdRight>
                                </TableTr>
                            ))}
                        </Table>
                    );
                })
            ) : null}
        </Section>
    );
};

export default TeamsTable;
