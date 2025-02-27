import './App.css';
import TableTile from './common/TableTile';
import { useApi } from './API/useAPI';
import { Container } from './common/Container';

function App() {

    const { teams } = useApi();

    return (
        <Container >
            {teams ? teams.map((team) => (
                <TableTile
                    test={team.druzyna}
                />
            )) : ""}
        </Container>
    )
    
}

export default App;
