import { HashRouter, Switch, Route } from "react-router-dom";
import Navigation from './common/NavigationBar';
import TeamsTable from './features/TeamsTable';
import AddedTeams from "./features/AddedTeams";
import MatchesTables from "./features/MatchesTables";
import ManageDate from "./features/ManageDate";

function App() {
    return(
        <HashRouter>
            <Navigation />
            <Switch>
                <Route path="/teams">
                    <TeamsTable />
                </Route>
                <Route path="/manage">
                    <AddedTeams />
                    <ManageDate />
                </Route>
                <Route path="/matches">
                    <MatchesTables />
                </Route>
            </Switch>
        </HashRouter>
    )
}

export default App;
