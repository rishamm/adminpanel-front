import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, TextareaAutosize,  IconButton, Grid } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import DropzoneImage from '../../../components/shared/DropzoneImage';


const AddComingCourse = () => {
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
                className='w-full'
                style={{ width: '100%' }}
            >
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    {mode === 'add' ? 'Add Social Card' : 'Edit Social Card'}
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
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                id="heading"
                                label="Heading"
                                variant="outlined"
                                fullWidth
                                margin="normal"
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
                            <TextField
                                id="link"
                                label="Link"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>
                    </Grid>
                    <DropzoneImage
                        onChange={(e) => { console.log(e) }}
                        image={null}
                    />

                </DialogContent>
                <DialogActions>
                    <Button color="primary" className="px-4 py-1 text-white rounded-lg" onClick={() => handleClose()}>
                        Save
                    </Button>
                    <Button color="primary" className="px-2 py-1 text-white rounded-lg" onClick={() => handleClose()}>
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default AddComingCourse;


