import { useApi } from '../../API/useAPI';
import { Section } from '../../common/Container';
import Loading from '../../common/Loading';
import Error from '../../common/Error';
import { useParams } from 'react-router-dom';
import { Title, ToggleButton } from './styled';
import { Table, TableCaption, TableTd, TableTr } from '../../common/TableStyle';

const CountryTile = () => {
    const { id } = useParams();
    const countryId = Number(id);

    const { teams, loading, error } = useApi();

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <Error />;
    }

    const selectedTeam = teams.find(team => team.id === countryId);
    const mainCountry = teams.find(team => team.id === countryId);

    return (
        <Section>
            <Title>{mainCountry.country}</Title>
            <Table key={mainCountry.id}>
            <TableCaption>Mecze: {mainCountry.country}</TableCaption>
                {teams
                    .filter(team => team.team === selectedTeam.team && team.id !== mainCountry.id)
                    .map((team) => {
                        return (
                            <TableTr>
                                <TableTd>{selectedTeam.country}</TableTd>
                                <TableTd>{team.country}</TableTd>
                                <TableTd><ToggleButton>Dodaj wynik</ToggleButton></TableTd>
                            </TableTr>
                        );
                    })
                }
            </Table>
        </Section>
    );
}

export default CountryTile;
