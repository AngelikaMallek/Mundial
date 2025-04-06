import { useApiToSelectCountrys } from '../../API/useApiToSelectCountrys';
import { SectionCountryTile } from '../../common/Container';
import Loading from '../../common/Loading';
import Error from '../../common/Error';
import { useParams } from 'react-router-dom';
import { Title, ToggleButton, Image, Wrapper } from './styled';
import { Table, TableCaption, TableTd, TableTr, ToggleLink } from '../../common/TableStyle';
import { useCountryApi } from "../../API/useCountryApi";
import { useApiToMatch } from '../../API/useAPIToMatch';
import { useAddedMatch, FixedComponentUpdatedMatch } from "./FixedComponentMatch/useAddedMatch"

const CountryTile = () => {
    const { id } = useParams();
    const countryId = Number(id);
    const { flags, loading, error } = useCountryApi(countryId);

    const { teams } = useApiToSelectCountrys();

    const { matchResults } = useApiToMatch();

    const { 
        handleUpdatedClick, 
        showUpdatedConfirm, 
        setShowUpdatedConfirm, 
        country_1, 
        country_2,
        countryId_1,
        countryId_2,
    } = useAddedMatch();

    if (loading || !teams || !matchResults) {
        return <Loading />;
    }

    if (error) {
        return <Error />;
    }

    const selectedTeam = teams.find(team => team.id === countryId);
    const mainCountry = teams.find(team => team.id === countryId);

    return (
        <SectionCountryTile>
            {showUpdatedConfirm && (
                <FixedComponentUpdatedMatch 
                    name1={country_1}
                    name2={country_2}
                    setShowUpdatedConfirm={setShowUpdatedConfirm}
                    id1={countryId_1}
                    id2={countryId_2}
                />
            )}
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

                        const match = matchResults.find(result => 
                            (result.country_1 === selectedTeam.id && result.country_2 === team.id)
                        );

                        const matchTwo = matchResults.find(result => 
                            (result.country_1 === team.id && result.country_2 === selectedTeam.id)
                        );

                        return (
                            <TableTr>
                                <TableTd><ToggleLink to={`/matches/${selectedTeam.id}`}>{selectedTeam.country}</ToggleLink></TableTd>
                                <TableTd><ToggleLink to={`/matches/${team.id}`}>{team.country}</ToggleLink></TableTd>
                                <TableTd>
                                    {match ? (
                                        <span>{match.points_1} - {match.points_2}</span>
                                    ) : 
                                    matchTwo ? (
                                        <span>{matchTwo.points_2} - {matchTwo.points_1}</span>
                                    ):(
                                        <ToggleButton onClick={() => handleUpdatedClick(selectedTeam.country, team.country, selectedTeam.id, team.id)}>Dodaj wynik</ToggleButton>
                                    )}
                                </TableTd>
                                <TableTd>
                                    <ToggleButton>Edytuj wynik</ToggleButton>
                                </TableTd>
                            </TableTr>
                        );
                    })
                }
            </Table>
        </SectionCountryTile>
    );
}

export default CountryTile;
