import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import MUITable from "../components/MUITable";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

const Home = () => {
  const [usersData, setUsersData] = useState([]);
  //   console.log(usersData);

  const navigate = useNavigate();

  const fetchUsersData = () => {
    axios
      .get("http://localhost:3000/users")
      .then((response) => setUsersData(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchUsersData();
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/users/${id}`)
      .then(() => {
        Swal.fire({
          title: 'Success!',
          text: 'User Deleted Successfully ',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
        fetchUsersData();
      })
      .catch((error) => console.log(error));
  };
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
      <MUITable data={usersData} onDelete={handleDelete} />
    </>
  );
};

export default Home;