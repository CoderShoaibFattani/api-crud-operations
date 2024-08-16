import { useParams, useNavigate } from "react-router-dom";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";

const UpdateUser = () => {
  const { id } = useParams();
  console.log(id);
  const [updatedUser, setUpdatedUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3000/users/${id}`, updatedUser);
    navigate("/");
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
            label="Name"
            fullWidth
            required
            sx={{ mb: "20px" }}
            onChange={(e) =>
              setUpdatedUser({ ...updatedUser, name: e.target.value })
            }
          />
          <TextField
            type="text"
            label="User Name"
            fullWidth
            required
            sx={{ mb: "20px" }}
            onChange={(e) =>
              setUpdatedUser({ ...updatedUser, username: e.target.value })
            }
          />
          <TextField
            type="email"
            label="Email"
            fullWidth
            required
            sx={{ mb: "20px" }}
            onChange={(e) =>
              setUpdatedUser({ ...updatedUser, email: e.target.value })
            }
          />
          <TextField
            type="text"
            label="Phone"
            fullWidth
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
