import { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import Admin from "./admin";
import Client from "./client";
import AppContext from "./context/AppContext";
import Login from "./login";
import ProtectedRoute from "./ProtectedRoute";

const NotFound = () => {
  const { isAdmin } = useContext(AppContext);
  console.log(isAdmin);
  return <div>Page not found</div>;
};

const Routes = () => {
  return (
    <Switch>
      <ProtectedRoute admin="true" path="/admin" component={Admin} />
      <Route path="/login" component={Login} />
      <Route exact path="/" component={Client} />
      <Route path="**" component={NotFound} />
    </Switch>
  );
};

export default Routes;
