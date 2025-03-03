import { Table,TableTd, TableTr, TableCaption, TableTdRight } from './styled';
import { useApi } from '../../API/useAPI';
import { Container } from '../../common/Container';

const TeamsTable = () => {
    const { teams } = useApi();

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