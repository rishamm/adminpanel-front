import React, { useEffect, useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, IconButton, Grid } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import DropzoneImage from '../../components/shared/DropzoneImage';
import { useDispatch } from "react-redux";
import { FaEdit } from 'react-icons/fa';
import { useSnackbar } from 'notistack';
import { fetchSocialData, postFooterData, updateFooterData } from '../../action/sharedAction';


const AddSocialCard = ({ closeModal, mode, card }) => {
  const dispatch = useDispatch();
  const [previewImage, setPreviewImage] = useState(null);
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({});
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (mode === 'edit') {
      setData(card);
      setPreviewImage(card?.icon);
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
    formData.append('link', data.link);
    formData.append('name', data.name);
    if (mode === 'add') {
      postFooterData(formData)
        .then((response) => {
          if (response.data.success) {
            enqueueSnackbar(response.data.message, { variant: 'success', anchorOrigin: { vertical: 'top', horizontal: 'right' } });
            setOpen(false);
            dispatch(fetchSocialData());
            setData({})
            setPreviewImage(null)
          }
        })
        .catch((error) => {
          console.error('Error posting Social Cards:', error);
        });
    } else {

      updateFooterData(formData, card._id)
        .then((response) => {
          if (response.data.success) {
            enqueueSnackbar(response.data.message, { variant: 'success', anchorOrigin: { vertical: 'top', horizontal: 'right' } });
            setOpen(false);
            dispatch(fetchSocialData());

          }
        })
    }

  };

  return (
    <div>
      {mode === 'add' ? (
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => setOpen(true)}
                    startIcon={<AddIcon />}
                >
                    Add
                </Button>
            ) : (
                <div className="flex items-center justify-end gap-2">
                        <button onClick={() => setOpen(true)} className="text-navy-700"><FaEdit
                            className="w-5 h-6 text-navy-700 " /></button>
                    </div>
            )}

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
                id="name"
                label="Name"
                variant="outlined"
                fullWidth
                margin="normal"
                value={data.name}
                onChange={(e) => onFieldChange("name", e.target.value)}
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
                value={data.link}
                onChange={(e) => onFieldChange("link", e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
          </Grid>
          <DropzoneImage
            onChange={(e) => onFileChange(e)}
            image={previewImage}
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
}

export default AddSocialCard;


