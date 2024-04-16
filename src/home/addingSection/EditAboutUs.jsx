import React, { useEffect, useState } from 'react';
import { Box, Button, Typography, Dialog, DialogTitle, DialogContent, DialogActions, TextField, TextareaAutosize, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DropzoneImage from '../../components/shared/DropzoneImage';
import { useSnackbar } from 'notistack';
import { useDispatch } from "react-redux";
import { fetchHomeAbout, updateHomeAbout } from '../../action/homeAction';

const EditAboutUs = ({ closeModal, mode, card }) => {
    const dispatch = useDispatch();
    const [previewImage1, setPreviewImage1] = useState(null);
    const [previewImage2, setPreviewImage2] = useState(null);
    const [open, setOpen] = useState(false);
    const [data, setData] = useState({});
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        if (mode === 'edit') {
            setData(card);
            setPreviewImage1(card?.image);
            setPreviewImage2(card?.image1);
        }
    }, [card, mode]);

    const handleClose = () => {
        setOpen(false);
        closeModal();
    };

    const onFieldChange = (key, value) => {
        setData({ ...data, [key]: value });
    }

    const handleFileChange = (e, imageIndex) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            if (imageIndex === 1) {
                setPreviewImage1(reader.result);
            } else if (imageIndex === 2) {
                setPreviewImage2(reader.result);
            }
        };
        reader.readAsDataURL(file);
        setData({ ...data, [`image${imageIndex}`]: file });
    }

    const handleSave = () => {
        const formData = new FormData();
        formData.append('image', data.image);
        formData.append('image1', data.image1);
        formData.append('description1', data.description);
        formData.append('description1', data.description1);
        formData.append('heading', data.heading);
        formData.append('heading1', data.heading1);

        dispatch(updateHomeAbout(formData, card._id))
            .then((response) => {
                if (response.data.success) {
                    enqueueSnackbar(response.data.message, { variant: 'success', anchorOrigin: { vertical: 'top', horizontal: 'right' } });
                    setOpen(false);
                    dispatch(fetchHomeAbout());
                }
            })
            .catch((error) => {
                console.error('Error updating AboutUs:', error);
            });
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
                    Edit About Us
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
                    <div className='flex gap-3'>
                        <DropzoneImage
                            onChange={(e) => handleFileChange(e, 1)}
                            image={previewImage1}
                        />
                        <DropzoneImage
                            onChange={(e) => handleFileChange(e, 2)}
                            image={previewImage2}
                        />
                    </div>

                    <TextField
                        id="heading"
                        label="Heading"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={data.heading}
                        onChange={(e) => onFieldChange("heading", e.target.value)}
                        sx={{ mt: 2 }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextareaAutosize
                        id="description"
                        placeholder="Description"
                        rows={6}
                        value={data.description}
                        onChange={(e) => onFieldChange("description", e.target.value)}
                        style={{ width: "100%", border: "1px solid #ccc", borderRadius: "5px", padding: "8px", marginBottom: "10px" }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        id="heading1"
                        label="Heading1"
                        variant="outlined"
                        placeholder="Heading1"
                        fullWidth
                        value={data.heading1}
                        onChange={(e) => onFieldChange("heading1", e.target.value)}
                        margin="normal"
                        sx={{ mt: 2 }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextareaAutosize
                        id="description2"
                        placeholder="Description2"
                        value={data.description1}
                        onChange={(e) => onFieldChange("description1", e.target.value)}
                        rows={6}
                        style={{ width: "100%", border: "1px solid #ccc", borderRadius: "5px", padding: "8px", marginBottom: "10px" }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button color="primary" className="px-4 py-1 text-white rounded-lg" onClick={handleSave}>
                        Save
                    </Button>
                    <Button color="primary" className="px-2 py-1 text-white rounded-lg" onClick={handleClose}>
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>

        </div>
    );
};

export default EditAboutUs;
