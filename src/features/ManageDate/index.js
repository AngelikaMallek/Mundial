import { useApi } from '../../API/useAPI';
import { Container } from '../../common/Container';
import Loading from '../../common/Loading';
import Error from '../../common/Error';

const ManageDate = () => {
    const { teams, loading, error } = useApi();

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <Error />
    }

    return (
        <Container>
            {teams ? (
                [...new Set(teams.map(team => team.team))].map((uniqueGrupa, index) => {
                    return (
                        <ol key={index}>
                            <p>Grupa: {uniqueGrupa}</p>
                            {teams
                                .filter(team => team.team === uniqueGrupa)
                                .map((team) => {
                                    return (
                                        <li>
                                            {team.team === uniqueGrupa ? team.country : null}
                                            <button>Edytuj</button>
                                            <button>Usuń</button>
                                        </li>
                                    )
                                })
                            }
                        </ol>
                    )
                })
            ) : null}
        </Container>
    );
};


export default ManageDate