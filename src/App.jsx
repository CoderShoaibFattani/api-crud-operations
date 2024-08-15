import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import CreateNewUser from "./screens/CreateNewUser";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/create" element={<CreateNewUser />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
