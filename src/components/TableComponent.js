import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Button,
} from "@mui/material";
import { Edit, Delete, Visibility, Add } from "@mui/icons-material";

const TableComponent = ({ data, onEdit, onDelete, onView, onCreate }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>
                <IconButton onClick={() => onEdit(item)}>
                  <Edit />
                </IconButton>
                <IconButton onClick={() => onDelete(item.id)}>
                  <Delete />
                </IconButton>
                <IconButton onClick={() => onView(item)}>
                  <Visibility />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button variant="contained" color="primary" onClick={onCreate}>
        <Add /> Create
      </Button>
    </TableContainer>
  );
};

export default TableComponent;
