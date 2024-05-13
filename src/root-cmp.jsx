import { Home } from "./pages/home";
import ReactGA from "react-ga4";

function App() {
  ReactGA.initialize('G-6069HFH3HY')
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });

  return (
    <Home />
  )
}

export default App;
