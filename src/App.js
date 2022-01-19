import logo from "./logo.svg";
import "./App.css";
import List from "./components/List/view/list/list";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import ShowHistory from "./components/List/view/history";
import ListDetails from "./components/List/view/listDetails/list-details";
import User from "./components/List/view/user";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<User />} exact />
        <Route path="/list" element={<List />} />
        <Route path="/list-details/:id" element={<ListDetails />} />
        <Route path="/history" element={<ShowHistory />} />
        <Route component={Error} />
      </Routes>
    </div>
  );
}

export default App;
