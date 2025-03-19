import { HashRouter, Switch, Route } from "react-router-dom";
import Navigation from './common/NavigationBar';
import TeamsTable from './features/TeamsTable';
import AddedTeams from "./features/AddedTeams";
import MatchesTables from "./features/MatchesTables";
import ManageDate from "./features/ManageDate";
import { Container, Section, SectionColumn } from "./common/Container";

function App() {
    return (
        <Container>
            <HashRouter>
                <Navigation />
                <Switch>
                    <Route path="/teams">
                        <TeamsTable />
                    </Route>
                    <Route path="/manage">
                        <SectionColumn>
                            <AddedTeams />
                            <ManageDate />
                        </SectionColumn>
                    </Route>
                    <Route path="/matches">
                        <MatchesTables />
                    </Route>
                </Switch>
            </HashRouter>
        </Container>
    )
}

export default App;
