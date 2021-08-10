import React from "react"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import { QuotePage } from "./Pages/QuotePage";
import {QuotesListPage} from "./Pages/QuotesListPage"
function App() {
  return (
    <Router>
        <Switch>
            <Route exact path="/">
                <QuotePage/>
            </Route>
            <Route path="/quote/:author">
              <QuotesListPage/>
            </Route>
        </Switch>
    </Router>
  )
}

export default App;
