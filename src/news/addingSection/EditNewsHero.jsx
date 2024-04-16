import React from "react";
import { Button } from "@mui/material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";


const EditNewsHero = () => {
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setOpen(true)}
        startIcon={<ModeEditIcon />}
      >
        Edit
      </Button>
    </div>
  );
};

export default EditNewsHero;
