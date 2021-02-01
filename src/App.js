import "./App.css";
import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter
    // forceRefresh={false}
    // basename={process.env.PUBLIC_URL}
    >
      <Routes />
    </BrowserRouter>
  );
}

export default App;
