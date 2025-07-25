import { useState } from "react";
import { useForm } from "react-hook-form";
import { useGetAllUsers } from "../../hooks/useGetAllUsers";
import { useCreateUser } from "../../hooks/createUser";
import { Typography, Box, Button, Modal, TextField } from "@mui/material";
import type { UserTypes } from "../../types/interfaces";
import { useDeleteUser } from "../../hooks/useDeleteUser";
import { useUpdateUser } from "../../hooks/useUpdateUser";

const Users = () => {
  const [isOpen, setOpen] = useState(false);
  const [isUpdate, setUpdate] = useState(false);

  const { data: users, isLoading, error } = useGetAllUsers();
  const { mutate } = useCreateUser();
  const { mutate: deleteMutate } = useDeleteUser();
  const { mutate: updateMutate } = useUpdateUser();

  const { handleSubmit, register, reset, setValue } = useForm<UserTypes>();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onSubmit = (data: UserTypes) => {
    if (isUpdate) {
      updateMutate(data);
    } else {
      mutate(data);
    }
    handleClose();
    reset();
  };

  const handleDelete = (id: number | string) => {
    deleteMutate(id);
  };

  const handleEdit = (user: UserTypes) => {
    setOpen(true);
    setUpdate(true);

    setValue("id", user.id);
    setValue("name", user.name);
    setValue("email", user.email);
    setValue("avatar", user.avatar);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong!</div>;

  return (
    <>
      <Typography variant="h4" textAlign="center" mb={2}>
        Users
      </Typography>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginRight: "140px",
        }}
      >
        <Button variant="contained" onClick={handleOpen}>
          Add
        </Button>
      </div>

      <Modal open={isOpen} onClose={handleClose}>
        <Box
          sx={{
            bgcolor: "background.paper",
            p: 4,
            borderRadius: 2,
            boxShadow: 24,
            width: 400,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 auto",
            marginTop: "300px",
          }}
        >
          <Typography variant="h6" mb={2}>
            Add User
          </Typography>

          <form
            onSubmit={handleSubmit(onSubmit)}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              width: "100%",
            }}
          >
            <TextField label="Name" {...register("name")} required />
            <TextField
              label="Email"
              type="email"
              {...register("email")}
              required
            />
            <TextField label="Avatar URL" {...register("avatar")} required />
            <Button type="submit" variant="contained">
              {isUpdate ? "Update" : "Add"}
            </Button>
          </form>
        </Box>
      </Modal>

      {/* Grid container qoladi */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
          marginTop: "20px",
          padding: "0 40px",
        }}
      >
        {users?.map((user) => (
          <div
            key={user.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "12px",
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={user.avatar}
              alt={user.name}
              style={{
                width: "200px",
                height: "200px",
                objectFit: "cover",
              }}
            />
            <Typography variant="h6" mt={1}>
              {user.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {user.email}
            </Typography>
            <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
              <Button
                size="small"
                variant="contained"
                onClick={() => handleEdit(user)}
              >
                Edit
              </Button>
              <Button
                size="small"
                style={{ background: "red", color: "white" }}
                onClick={() => handleDelete(user.id)}
              >
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Users;
