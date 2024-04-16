
import React, { useEffect, useState } from 'react'
import { Box, Button, Typography, Dialog, DialogTitle, DialogContent, DialogActions, TextField, TextareaAutosize, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DropzoneImage from '../../components/shared/DropzoneImage';
import { useSnackbar } from 'notistack';
import { useDispatch } from "react-redux";
import { fetchOurCommunity, updateOurCommunity } from '../../action/communityAction';

const EditOurCommunity = ({card, closeModal, mode}) => {
    const dispatch = useDispatch();
    const [previewImage, setPreviewImage] = useState(null);
    const [open, setOpen] = useState(false);
    const [data, setData] = useState({});
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        if (mode === 'edit') {
            setData(card);
            setPreviewImage(card?.image);
        }
    }, [card, mode]);

    const handleClose = () => {
        setOpen(false);
        closeModal();
    };

    const onFieldChange = (key, value) => {
        setData({ ...data, [key]: value });
    }

    const onFileChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreviewImage(reader.result);
        };
        reader.readAsDataURL(file);
        setData({ ...data, image: file });
      }

    const handleSave = () => {
        const formData = new FormData();
        formData.append('image', data.image);
        formData.append('description1', data.description);
        formData.append('heading', data.heading);
        formData.append('heading1', data.heading1);

        dispatch(updateOurCommunity(formData, card._id))
            .then((response) => {
                if (response.data.success) {
                    enqueueSnackbar(response.data.message, { variant: 'success', anchorOrigin: { vertical: 'top', horizontal: 'right' } });
                    setOpen(false);
                    dispatch(fetchOurCommunity());
                }
            })
            .catch((error) => {
                console.error('Error updating Our Community:', error);
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
                    Edit Our Community
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
            onChange={(e) => onFileChange(e)}
            image={previewImage}
          />
                    <TextareaAutosize
                        id="description"
                        placeholder="Description"
                        value={data.description}
                    onChange={(e) => onFieldChange("description", e.target.value)}
                        rows={6}
                        style={{ width: "100%", border: "1px solid #ccc", borderRadius: "5px", padding: "8px", marginBottom: "10px" }}
                        InputLabelProps={{
                            shrink: true,
                        }}

                    />
                    <TextField
                        id="Button Link"
                        label="Button Link"
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
                    <Button color="primary" className="px-4 py-1 text-white rounded-lg" onClick={handleSave}>
                        Save
                    </Button>
                    <Button color="primary" className="px-2 py-1 text-white rounded-lg" onClick={() => handleClose()}>
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>

        </div>
    );
};

export default EditOurCommunity;
