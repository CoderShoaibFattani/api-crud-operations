import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import MUITable from "../components/MUITable";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [usersData, setUsersData] = useState([]);
  //   console.log(usersData);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((response) => setUsersData(response.data));
  }, []);
  return (
    <>
      <h1 style={{ display: "inline-block" }}>Users Data</h1>
      <Button
        variant="contained"
        sx={{ float: "right", marginTop: "25px" }}
        onClick={() => navigate("/create")}
      >
        Create New User
      </Button>
      <MUITable data={usersData} />
    </>
  );
};

export default Home;
