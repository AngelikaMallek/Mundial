import { HashRouter, Switch, Route } from "react-router-dom";
import Navigation from './common/NavigationBar';
import TeamsTable from './features/TeamsTable';
import AddedTeams from "./features/AddedTeams";

function App() {
    return(
        <HashRouter>
            <Navigation />
            <Switch>
                <Route path="/teams">
                    <TeamsTable />
                </Route>
                <Route path="/added">
                    <AddedTeams />
                </Route>
            </Switch>
        </HashRouter>
    )
}

export default App;
