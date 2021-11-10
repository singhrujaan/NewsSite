import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Router>
        <Navbar title="practise 1" />
        <Switch>
          <Route exact path="/">
            <News category="general" country="in" key="general"   pageSize={5}/>
          </Route>
          <Route exact path="/entertainment">
            <News category="entertainment" country="in" key="entertainment"  pageSize={5}/>
          </Route>
          <Route exact path="/sports">
            <News category="sports" country="in" key="sports" pageSize={5}/>
          </Route>
          <Route exact path="/science">
            <News category="science" country="in" key="science" pageSize={5} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
