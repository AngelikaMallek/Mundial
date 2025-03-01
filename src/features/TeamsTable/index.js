import { Table,TableTd, TableTr, TableCaption, TableTdRight } from './styled';
import { useApi } from '../../API/useAPI';
import { Container } from '../../common/Container';

const TeamsTable = () => {
    const { teams } = useApi();

    return (
        <Container>
            {teams ? (
                [...new Set(teams.map(team => team.grupa))].map((uniqueGrupa, index) => (
                    <Table key={index}>
                        <TableCaption>Grupa: {uniqueGrupa}</TableCaption>
                        {teams
                            .filter(team => team.grupa === uniqueGrupa)
                            .map((team) => (
                                <TableTr>
                                    <TableTd>{team.grupa === uniqueGrupa ? team.druzyna : null}</TableTd>
                                    <TableTdRight>{team.grupa === uniqueGrupa ? team.punkty : null}</TableTdRight>
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