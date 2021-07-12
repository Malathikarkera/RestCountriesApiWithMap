import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dasboard from "./components/dashboard";
import CountryContextProvider from "./context/globalState";
import useTheme from "./customHooks/useTheme";
import { useLoadScript } from "@react-google-maps/api";
import { Map } from "./components/Map.js";

const CountryDetails = React.lazy(() =>
  import("../CountryDetails/CountryDetails")
);

const App = () => {
  const [themeValue, setThemeValue] = useTheme();
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "" // Add your API key
  });
  React.useLayoutEffect(() => {
    window.localStorage.setItem("theme", JSON.stringify(themeValue));
  }, [themeValue]);

  return (
    <Router>
      <Switch>
        <>
          <Switch>
            <CountryContextProvider>
              <Route
                exact
                path={`/`}
                render={(props) => (
                  <Dasboard
                    {...props}
                    themeValue={themeValue}
                    handleThemeChange={setThemeValue}
                  />
                )}
              />
              <React.Suspense fallback={<h1>loading countryDetails</h1>}>
                <Route
                  path={`/:code`}
                  render={(props) => (
                    // <CountryDetails
                    //   {...props}
                    //   themeValue={themeValue}
                    //   handleThemeChange={setThemeValue}
                    // />
                    <Map />
                  )}
                />
              </React.Suspense>
            </CountryContextProvider>
            <Route
              path={"/"}
              render={() => <div>404 page not found</div>}
            ></Route>
          </Switch>
        </>
      </Switch>
    </Router>
  );
};
// export default App({
//   apiKey: "AIzaSyAPndsrmv0vkj5CCi6oZjYaBxIddGOkcF4"
// });
export default App;
