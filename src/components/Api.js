import React, { useState, useEffect } from "react";
import axios from "axios";
import TableComponent from "./TableComponent";
import ModalComponent from "./ModalComponent";

function Api() {
  const [data, setData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalAction, setModalAction] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://64e31042bac46e480e781cda.mockapi.io/api/v1/doctor"
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleEdit = (item) => {
    setSelectedItem(item);
    setModalAction("edit");
    setModalOpen(true);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://64e31042bac46e480e781cda.mockapi.io/api/v1/doctor/${id}`
      );
      fetchData();
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };
  const handleCreate = () => {
    setModalAction("create");
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedItem(null);
    setModalAction("");
  };

  const handleModalAction = async (updatedData) => {
    try {
      if (modalAction === "edit") {
        // Perform edit operation using axios
      } else if (modalAction === "delete") {
        // Perform delete operation using axios
      }
      fetchData();
      handleCloseModal();
    } catch (error) {
      console.error("Error performing modal action:", error);
    }
  };

  return (
    <div>
      <TableComponent
        data={data}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onCreate={handleCreate}
      />{" "}
      <ModalComponent
        open={modalOpen}
        onClose={handleCloseModal}
        selectedItem={selectedItem}
        modalAction={modalAction}
        onModalAction={handleModalAction}
      />
    </div>
  );
}

export default Api;
