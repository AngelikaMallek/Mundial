import { Table,TableTd, TableTr, TableCaption, TableTdRight } from './styled';
import { useApi } from '../../API/useAPI';
import { Container } from '../../common/Container';
import Loading from '../../common/Loading';
import Error from '../../common/Error';

const TeamsTable = () => {
    const { teams, loading, error } = useApi();

    if(loading) {
        return <Loading />
    }

    if(error) {
        return <Error />
    }

    return (
        <Container>
            {teams ? (
                [...new Set(teams.map(team => team.team))].map((uniqueGrupa, index) => (
                    <Table key={index}>
                        <TableCaption>Grupa: {uniqueGrupa}</TableCaption>
                        {teams
                            .filter(team => team.team === uniqueGrupa)
                            .map((team) => (
                                <TableTr>
                                    <TableTd>{team.team === uniqueGrupa ? team.country : null}</TableTd>
                                    <TableTdRight>{team.team === uniqueGrupa ? team.points : null}</TableTdRight>
                                </TableTr>
                            ))
                        }
                    </Table>
                ))
            ) : null }
        </Container>
    );
};


export default TeamsTable