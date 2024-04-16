import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, TextareaAutosize, IconButton, Grid } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import DropzoneImage from '../../components/shared/DropzoneImage';

const AddProfTest = () => {
    const [open, setOpen] = React.useState(false);
    const [mode, setMode] = useState('add');

    const handleOpen = (mode) => {
        setMode(mode);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
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
          postProfessionalData(formData)
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
    
          updateProfessionalData(formData, card._id)
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
        style={{width:'100%'}}
    >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
            {mode === 'add' ? 'Add Testimonials' : 'Edit Testimonials'}
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
                        id="authorName"
                        label="Author"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        id="position"
                        label="Position"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextareaAutosize
                        id="testimonialContent"
                        label="Testimonial Content"
                        placeholder='Testimonial Content'
                        variant="outlined"
                        rows={4}
                        style={{ width: "100%", border: "1px solid #ccc", borderRadius: "5px", padding: "8px", marginTop: "10px" }}
                    />
                </Grid>
            </Grid>
            <DropzoneImage
                onChange={(e) => { console.log(e) }}
                image={null}
            />

        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center' }}>
            <Button color="primary" className="px-4 py-1 text-white rounded-lg" onClick={handleClose}>
                Confirm
            </Button>
            <Button color="primary" className="px-2 py-1 text-white rounded-lg" onClick={handleClose}>
                Cancel
            </Button>
        </DialogActions>
    </Dialog>
</div>
)
}

export default AddProfTest
