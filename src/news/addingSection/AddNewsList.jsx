import React, { useState } from 'react'
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, TextareaAutosize, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';


const AddNewsList = () => {
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
                {mode === 'add' ? 'Add News List' : 'Edit News List'}
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
                        id="category"
                        label="Category"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        sx={{ mt: 2 }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
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
                    <TextField
                        id="date"
                        label="Date&Time"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        sx={{ mt: 2 }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        id="link"
                        label="Link"
                        variant="outlined"
                        fullWidth
                        margin="normal"
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

export default AddNewsList