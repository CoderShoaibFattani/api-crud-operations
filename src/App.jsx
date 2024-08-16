import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import CreateNewUser from "./screens/CreateNewUser";
import UpdateUser from "./screens/UpdateUser";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/create" element={<CreateNewUser />} />
        <Route path="/update/:id" element={<UpdateUser />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
