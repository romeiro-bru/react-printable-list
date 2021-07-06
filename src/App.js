import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./Components/Header/Header";
import { Form } from "./Components/Form/Form";
import { FoodSup } from "./Components/FoodSup/FoodSup";
import { Fragment } from "react";

const MainPage = () => (
  <Fragment>
    <Header />
    <Form />
  </Fragment>
);

const SuppliesPage = () => (
  <Fragment>
    <Header />
    <FoodSup />
  </Fragment>
);

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="suppliespage" component={SuppliesPage} />
        </Switch>
      </Router>
    </div>
  );
}
