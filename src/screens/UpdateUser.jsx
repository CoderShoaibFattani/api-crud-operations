import { useParams, useNavigate } from "react-router-dom";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import Swal from 'sweetalert2'

const UpdateUser = () => {
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/${id}`)
      .then((res) => setUpdatedUser(res.data))
      .catch((err) => console.log(err));
  },[]);

  const [updatedUser, setUpdatedUser] = useState([]);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3000/users/${id}`, updatedUser)
    .then(()=> {
      Swal.fire({
        title: 'Success!',
        text: 'User Updated Successfully ',
        icon: 'success',
        confirmButtonText: 'Ok'
      })
      navigate("/");
    })
    .catch((err) => console.log(err));
  };

  return (
    <Paper
      elevation={22}
      sx={{ width: "50%", margin: "30px auto", padding: "20px" }}
    >
      <Box>
        <Typography sx={{ mb: "20px", textAlign: "center" }}>
          Update Existing User
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            type="text"
            fullWidth
            value={updatedUser.name}
            required
            sx={{ mb: "20px" }}
            onChange={(e) =>
              setUpdatedUser({ ...updatedUser, name: e.target.value })
            }
          />
          <TextField
            type="text"
            fullWidth
            value={updatedUser.username}
            required
            sx={{ mb: "20px" }}
            onChange={(e) =>
              setUpdatedUser({ ...updatedUser, username: e.target.value })
            }
          />
          <TextField
            type="email"
            fullWidth
            value={updatedUser.email}
            required
            sx={{ mb: "20px" }}
            onChange={(e) =>
              setUpdatedUser({ ...updatedUser, email: e.target.value })
            }
          />
          <TextField
            type="text"
            fullWidth
            value={updatedUser.phone}
            required
            sx={{ mb: "20px" }}
            onChange={(e) =>
              setUpdatedUser({ ...updatedUser, phone: e.target.value })
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

export default UpdateUser;

