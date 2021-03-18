import { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navbar from "./components/Common/Navbar";
import Spinner from "./components/Common/Spinner";
import Home from "./components/Home";

const Collections = lazy(() => import("./components/Collections"));
const Info = lazy(() => import("./components/Info"));
const AuthForm = lazy(() => import("./components/AuthForm"));

const App = () => {
  const isAuthenticated = false;

  const ProtectedRoute = ({ children, ...rest }) => {
    return (
      <Route
        {...rest}
        render={() =>
          isAuthenticated ? children : <Redirect to="/authForm" />
        }
      />
    );
  };

  return (
    <div className="app">
      <Router>
        <Navbar />
        <Switch>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={Home} />
            <Route exact path="/authForm" component={AuthForm} />
            <Route exact path="/info" component={Info} />
            <ProtectedRoute path="/collection">
              <Collections />
            </ProtectedRoute>
          </Suspense>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
