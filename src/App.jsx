import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ApplicationViews } from "../src/views/ApplicationViews";

export const App = () => {
  return (
    <Routes>
      <Route path="*" element={<ApplicationViews />}></Route>
    </Routes>
  );
};

export default App;
