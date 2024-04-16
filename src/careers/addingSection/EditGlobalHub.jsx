import * as React from 'react';
import {  Button,  Dialog, DialogTitle, DialogContent, DialogActions, TextField, TextareaAutosize, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DropzoneImage from '../../components/shared/DropzoneImage';

const EditGlobalHub = () => {
    const [previewImage, setPreviewImage] = React.useState(null);
    const [open, setOpen] = React.useState(false);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };


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
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    Edit Global Hub
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
                    <DropzoneImage
                        onChange={(e) => { console.log(e) }}
                        image={null}
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
                    <TextareaAutosize
                        id="description1"
                        placeholder="Description"
                        rows={6}
                        style={{ width: "100%", border: "1px solid #ccc", borderRadius: "5px", padding: "8px", marginBottom: "10px" }}
                        InputLabelProps={{
                            shrink: true,
                        }}

                    />
                    <TextareaAutosize
                        id="description2"
                        placeholder="Description2"
                        rows={6}
                        style={{ width: "100%", border: "1px solid #ccc", borderRadius: "5px", padding: "8px", marginBottom: "10px" }}
                        InputLabelProps={{
                            shrink: true,
                        }}

                    />
                    <TextareaAutosize
                        id="description3"
                        placeholder="Description3"
                        rows={6}
                        style={{ width: "100%", border: "1px solid #ccc", borderRadius: "5px", padding: "8px", marginBottom: "10px" }}
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
    );
};

export default EditGlobalHub;