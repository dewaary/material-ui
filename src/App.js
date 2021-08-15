import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
import Typo from './pages/Typo';
import Buttom from './pages/Buttom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Notes />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
        <Route path="/typo">
          <Typo />
        </Route>
        <Route path="/button">
          <Buttom />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
