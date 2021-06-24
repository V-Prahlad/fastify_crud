import * as React from "react";
import { Redirect, Route, Switch, BrowserRouter } from "react-router-dom";
import ProductList from "../Containers/ProductList/index";

export const AppRoute = {
  ProcuctList: "/products",
  ProductCreate: "/product-create",
  ProductUpdate: "/procust-update/:id",
  ProductItem: "/product/:id",
};

export class AppRoutingModule extends React.Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Switch>
            <Route path={AppRoute.ProcuctList} exact component={ProductList} />
            <Redirect to={AppRoute.ProcuctList} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default AppRoutingModule;
