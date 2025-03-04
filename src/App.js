import { HashRouter, Switch, Route } from "react-router-dom";
import Navigation from './common/NavigationBar';
import TeamsTable from './features/TeamsTable';

function App() {
    return(
        <HashRouter>
            <Navigation />
            <Switch>
                <Route path="/teams">
                    <TeamsTable />
                </Route>
            </Switch>
        </HashRouter>
    )
}

export default App;
