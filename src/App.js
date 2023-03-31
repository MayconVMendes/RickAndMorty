import { Outlet } from "react-router-dom";
import Header from "./components/header/header";
import "./app.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
