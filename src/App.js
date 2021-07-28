import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./Components/Header/Header";
import { Form } from "./Components/Form/Form";
import { List } from "./Components/List/List";
import { Fragment } from "react";

const MainPage = () => (
  <Fragment>
    <Header />
    <Form />
  </Fragment>
);

const ListPage = () => (
  <Fragment>
    <Header />
    <List />
  </Fragment>
);

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/listpage" component={ListPage} />
        </Switch>
      </Router>
    </div>
  );
}
