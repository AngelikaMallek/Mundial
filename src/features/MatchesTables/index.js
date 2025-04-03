import { Table, TableTd, TableTr, TableCaption, TableTdRight, ToggleLink } from '../../common/TableStyle';
import { useApi } from '../../API/useAPI';
import { Section } from '../../common/Container';
import Loading from '../../common/Loading';
import Error from '../../common/Error';
import { useApiToMatch } from '../../API/useAPIToMatch';

const MatchesTable = () => {
    const { teams, loading, error } = useApi();
    const { matchResults } = useApiToMatch();

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
                            {matches.map((match, matchIndex) => {
                                const matchResult = matchResults && Array.isArray(matchResults)
                                    ? matchResults.find(result =>
                                        (result.country_1 === match[0].id && result.country_2 === match[1].id) ||
                                        (result.country_1 === match[1].id && result.country_2 === match[0].id)
                                    )
                                    : null;

                                const points1 = matchResult && matchResult.country_2 === match[0].id ? matchResult.points_2 : 0;
                                const points2 = matchResult && matchResult.country_1 === match[1].id ? matchResult.points_1 : 0;

                                const points3 = matchResult && matchResult.country_1 === match[0].id ? matchResult.points_1 : 0;
                                const points4 = matchResult && matchResult.country_2 === match[1].id ? matchResult.points_2 : 0;


                                return (
                                    <TableTr key={matchIndex}>
                                        <TableTd><ToggleLink to={`/matches/${match[0].id}`}>{match[0].country}</ToggleLink></TableTd>
                                        <TableTd><ToggleLink to={`/matches/${match[1].id}`}>{match[1].country}</ToggleLink></TableTd>
                                        <TableTdRight>
                                            {(points1 === 0 && points2 === 0) ? `${points3}-${points4}` :
                                            (points3 === 0 && points4 === 0) ? `${points1}-${points2}` :
                                            `${points1}-${points2} ${points3}-${points4}`}
                                        </TableTdRight>
                                    </TableTr>
                                );
                            })}
                        </Table>
                    );
                })
            ) : null}
        </Section>
    );
};

export default MatchesTable;
