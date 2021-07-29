import '../styles/App.css';
import { Redirect, Switch, Route } from 'react-router-dom';

//components
import LinkList from './LinkList';
import CreateLink from './CreateLink';
import Header from './Header';
import Login from './Login';
import Search from './Search';

function App() {
  return (
    <div className="center w85">
      <Header />
      <div className="ph3 pv1 background-gray">
        <Switch>
          <Route exact path="/" component={LinkList}></Route>
          <Route exact path="/create" component={CreateLink}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/search" component={Search}></Route>
          <Route exact path="/top" component={LinkList}></Route>
          <Route exact path="/new/:page" component={LinkList}></Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
