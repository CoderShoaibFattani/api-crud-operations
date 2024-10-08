import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import propType from "prop-types";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const MUITable = ({ data, onDelete }) => {
  const navigate = useNavigate();
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Name</StyledTableCell>
            <StyledTableCell align="center">User Name</StyledTableCell>
            <StyledTableCell align="center">Email</StyledTableCell>
            <StyledTableCell align="center">Phone #</StyledTableCell>
            <StyledTableCell align="center">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((element, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell align="center">{element.name}</StyledTableCell>
              <StyledTableCell align="center">
                {element.username}
              </StyledTableCell>
              <StyledTableCell align="center">{element.email}</StyledTableCell>
              <StyledTableCell align="center">{element.phone}</StyledTableCell>
              <StyledTableCell align="center">
                <DeleteIcon
                  sx={{ color: "red", paddingRight: "10px" }}
                  onClick={() => {
                    onDelete(element.id);
                  }}
                />
                <EditIcon
                  sx={{ color: "blue" }}
                  onClick={() => navigate(`/update/${element.id}`)}
                />
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

MUITable.propTypes = {
  data: propType.arrayOf(
    propType.shape({
      id: propType.number.isRequired,
      name: propType.string.isRequired,
      username: propType.string.isRequired,
      email: propType.string.isRequired,
      phone: propType.string.isRequired,
    })
  ).isRequired,
  onDelete: propType.func.isRequired,
};

export default MUITable;
