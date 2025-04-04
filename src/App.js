import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import Navigation from './common/NavigationBar';
import TeamsTable from './features/TeamsTable';
import AddedTeams from "./features/AddedTeamsForm";
import MatchesTables from "./features/MatchesTables";
import ManageDate from "./features/ManageDate";
import { Container, SectionColumn } from "./common/Container";
import CountryTile from "./features/CountryTile";

function App() {
    return (
        <Container>
            <HashRouter>
                <Navigation />
                <Switch>
                    <Route path="/matches/:id">
                        <CountryTile />
                    </Route>
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
                    <Route path="/">
                        <Redirect to="/teams" />
                    </Route>
                </Switch>
            </HashRouter>
        </Container>
    )
}

export default App;
