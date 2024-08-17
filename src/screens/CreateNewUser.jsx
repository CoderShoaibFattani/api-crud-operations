import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

const CreateNewUser = () => {
  const [createdUser, setCreatedUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/users", createdUser)
      .then(()=> {
        Swal.fire({
          title: 'Success!',
          text: 'User Created Successfully ',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
      })
      .catch((error) => console.log(error));

    navigate("/");
  };
  return (
    <Paper
      elevation={22}
      sx={{ width: "50%", margin: "30px auto", padding: "20px" }}
    >
      <Box>
        <Typography sx={{ mb: "20px", textAlign: "center" }}>
          Create a new user
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            type="text"
            label="Name"
            fullWidth
            required
            sx={{ mb: "20px" }}
            onChange={(e) =>
              setCreatedUser({ ...createdUser, name: e.target.value })
            }
          />
          <TextField
            type="text"
            label="User Name"
            fullWidth
            required
            sx={{ mb: "20px" }}
            onChange={(e) =>
              setCreatedUser({ ...createdUser, username: e.target.value })
            }
          />
          <TextField
            type="email"
            label="Email"
            fullWidth
            required
            sx={{ mb: "20px" }}
            onChange={(e) =>
              setCreatedUser({ ...createdUser, email: e.target.value })
            }
          />
          <TextField
            type="text"
            label="Phone"
            fullWidth
            required
            sx={{ mb: "20px" }}
            onChange={(e) =>
              setCreatedUser({ ...createdUser, phone: e.target.value })
            }
          />
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </form>
      </Box>
    </Paper>
  );
};

export default CreateNewUser;