import { useApi } from '../../API/useAPI';
import { SectionCountryTile } from '../../common/Container';
import Loading from '../../common/Loading';
import Error from '../../common/Error';
import { useParams } from 'react-router-dom';
import { Title, ToggleButton, Image, Wrapper } from './styled';
import { Table, TableCaption, TableTd, TableTr, ToggleLink } from '../../common/TableStyle';
import { useCountryApi } from "../../API/useCountryApi";

const CountryTile = () => {
    const { id } = useParams();
    const countryId = Number(id);
    const { flags, loading, error } = useCountryApi(countryId);

    const { teams } = useApi();

    if (loading || !teams) {
        return <Loading />;
    }

    if (error) {
        return <Error />;
    }

    const selectedTeam = teams.find(team => team.id === countryId);
    const mainCountry = teams.find(team => team.id === countryId);

    return (
        <SectionCountryTile>
            <Title>{mainCountry.country}</Title>
                {flags
                    .filter(flag => flag.translations.pol.common === selectedTeam.country)
                    .map((flag) => {
                        return (
                            <Wrapper>
                                <Image src={flag.flags.png} alt={flag.flags.alt}></Image>
                                <Image src={flag.coatOfArms.png} alt="coatOfArms"></Image>
                            </Wrapper>
                        )
                    })
                        
                }
            <Table key={mainCountry.id}>
            <TableCaption>Mecze: {mainCountry.country}</TableCaption>
                {teams
                    .filter(team => team.team === selectedTeam.team && team.id !== mainCountry.id)
                    .map((team) => {
                        return (
                            <TableTr>
                                <TableTd><ToggleLink to={`/matches/${selectedTeam.id}`}>{selectedTeam.country}</ToggleLink></TableTd>
                                <TableTd><ToggleLink to={`/matches/${team.id}`}>{team.country}</ToggleLink></TableTd>
                                <TableTd><ToggleButton>Dodaj wynik</ToggleButton></TableTd>
                            </TableTr>
                        );
                    })
                }
            </Table>
        </SectionCountryTile>
    );
}

export default CountryTile;
