import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  TextareaAutosize,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import CloseIcon from "@mui/icons-material/Close";
import DropzoneImage from "../../../components/shared/DropzoneImage";

const EditKnwAbout = () => {
  const [open, setOpen] = React.useState(false);
  const [mode, setMode] = useState("add");

  const handleOpen = (mode) => {
    setMode(mode);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => handleOpen("edit")}
        startIcon={<ModeEditIcon />}
      >
        Edit
      </Button>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          {mode === "add" ? "Add Course List" : "Edit Course List"}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={() => setOpen(false)}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <TextField
            id="name"
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            sx={{ mt: 2 }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextareaAutosize
            id="description1"
            label="Text"
            placeholder="Text"
            rows={6}
            style={{
              width: "100%",
              border: "1px solid #ccc",
              borderRadius: "5px",
              padding: "8px",
              marginBottom: "10px",
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <DropzoneImage
            onChange={(e) => {
              console.log(e);
            }}
            image={null}
          />
          <DropzoneImage
            onChange={(e) => {
              console.log(e);
            }}
            image={null}
          />
          <DropzoneImage
            onChange={(e) => {
              console.log(e);
            }}
            image={null}
          />
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center" }}>
          <Button
            color="primary"
            className="px-4 py-1 text-white rounded-lg hover:bg-blue-800"
            onClick={handleClose}
          >
            Confirm
          </Button>
          <Button
            color="primary"
            className="px-2 py-1 text-white rounded-lg hover:bg-blue-800"
            onClick={handleClose}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EditKnwAbout;
