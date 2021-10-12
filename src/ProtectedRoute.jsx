import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, auth, ...rest }) => {
  let getUser = JSON.parse(localStorage.getItem("user"));
  return (
    <Route
      {...rest}
      render={(props) =>
        getUser ? <Component {...props} /> : <Redirect to="/login" />
      }
    ></Route>
  );
};

export default ProtectedRoute;
