import React, { useState } from 'react'
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, TextareaAutosize, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';


const AddQuerieTable = () => {
    const [open, setOpen] = React.useState(false);
    const [mode, setMode] = useState('add');

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
                onClick={() => handleOpen('add')}    
            >
                Add
            </Button>
            
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                {mode === 'add' ? 'Add Querie List' : 'Edit Querie List'}
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={() => setOpen(false)}
                    sx={{
                        position: 'absolute',
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
                    <TextField
                        id="mobile"
                        label="Mobile No"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        sx={{ mt: 2 }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        id="mailId"
                        label="Mail ID"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        sx={{ mt: 2 }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        id="subject"
                        label="Subject"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        sx={{ mt: 2 }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </DialogContent>
                <DialogActions sx={{ justifyContent: 'center' }}>
                    <Button color="primary" className="px-4 py-1 text-white rounded-lg hover:bg-blue-800" onClick={handleClose}>
                        Confirm
                    </Button>
                    <Button color="primary" className="px-2 py-1 text-white rounded-lg hover:bg-blue-800" onClick={handleClose}>
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>

        </div>
  )
}

export default AddQuerieTable;

