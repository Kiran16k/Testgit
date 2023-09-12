import React, { useState, useEffect } from "react";
import { Modal, Paper, Typography, TextField, Button } from "@mui/material";

const ModalComponent = ({
  open,
  onClose,
  selectedItem,
  modalAction,
  onModalAction,
}) => {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    setFormData(selectedItem || {});
  }, [selectedItem]);

  const handleFormChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onModalAction(formData);
  };

  const handleDelete = () => {
    onModalAction(selectedItem); // Perform delete operation
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Paper>
        <Typography variant="h6" component="div">
          {modalAction === "create"
            ? "Create Item"
            : modalAction === "edit"
            ? "Edit Item"
            : "View Item"}
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            name="name"
            value={formData.name || ""}
            onChange={handleFormChange}
            fullWidth
          />
          <TextField
            label="Email"
            name="email"
            value={formData.email || ""}
            onChange={handleFormChange}
            fullWidth
          />
          <Button type="submit" variant="contained" color="primary">
            {modalAction === "edit" ? "Save Changes" : "Create"}
          </Button>
          {modalAction === "edit" && (
            <Button
              variant="contained"
              color="secondary"
              onClick={handleDelete}
            >
              Delete
            </Button>
          )}
          <Button variant="contained" onClick={onClose}>
            Close
          </Button>
        </form>
      </Paper>
    </Modal>
  );
};

export default ModalComponent;
