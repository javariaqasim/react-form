import "./App.css";
import AppRouter from "./config/router";
import PersistentDrawerLeft from "./components/drawer";


function App() {
  return (
    <div className="App">
      {/* <PersistentDrawerLeft /> */}
      <AppRouter />

    </div>
  );
}

export default App;
