import React, { useState } from 'react'
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, TextareaAutosize, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';


const AddFeatures = () => {
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
                startIcon={<AddIcon />}
            >
                Add
            </Button>
            
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                {mode === 'add' ? 'Add Features' : 'Edit Features'}
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
                        id="heading1"
                        label="Heading1"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        sx={{ mt: 2 }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextareaAutosize
                        id="description"
                        label="Description"
                        placeholder='Description'
                        variant="outlined"
                        rows={6}
                        style={{ width: "100%", border: "1px solid #ccc", borderRadius: "5px", padding: "8px", marginBottom: "10px" }}
                        sx={{ mt: 2 }}
                        InputLabelProps={{
                            shrink: true,
                        }}

                    />
                </DialogContent>
                <DialogActions>
                    <Button color="primary" className="px-4 py-1 text-white rounded-lg" onClick={() => { }}>
                        Save
                    </Button>
                    <Button color="primary" className="px-2 py-1 text-white rounded-lg" onClick={() => { }}>
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>

        </div>
    )
}

export default AddFeatures