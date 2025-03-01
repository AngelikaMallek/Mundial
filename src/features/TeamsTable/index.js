import { Table,TableTd, TableTr } from './styled';
import { useApi } from '../../API/useAPI';
import { Container } from '../../common/Container';

const TeamsTable = () => {
    const { teams } = useApi();

    return (
        <Container>
            {teams ? (
                [...new Set(teams.map(team => team.grupa))].map((uniqueGrupa, index) => (
                    <Table key={index}>
                        <caption>{uniqueGrupa}</caption>
                        {teams
                            .filter(team => team.grupa === uniqueGrupa)
                            .map((team, teamIndex) => (
                                <TableTr>
                                    <TableTd>{team.grupa === uniqueGrupa ? team.druzyna : null}</TableTd>
                                    <TableTd>{team.grupa === uniqueGrupa ? team.punkty : null}</TableTd>
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