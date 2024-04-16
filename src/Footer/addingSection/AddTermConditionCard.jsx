import React, { useEffect, useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, IconButton, Grid } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import { useSnackbar } from 'notistack';
import { fetchTermData, postTermData, updateTermData } from '../../action/sharedAction';
import { useDispatch } from "react-redux";
import { FaEdit } from 'react-icons/fa';


const AddTermConditionCard = ({ closeModal, mode, card }) => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [data, setData] = useState(card || {});
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        if (mode === 'edit') {
            setData(card);
        }
    }, [card, mode]);

    const handleClose = () => {
        setOpen(false);
        closeModal();
    };

    const onFieldChange = (key, value) => {
        setData(prevData => ({
            ...prevData,
            [key]: value
        }));
    }

    const handleSave = () => {
        const jsonData = {
            question: data.question,
            answer: data.answer
        };

        if (mode === 'add') {
            postTermData(jsonData)
                .then((response) => {
                    if (response.data.success) {
                        enqueueSnackbar(response.data.message, { variant: 'success', anchorOrigin: { vertical: 'top', horizontal: 'right' } });
                        setOpen(false);
                        dispatch(fetchTermData());
                        setData({})
                    }
                })
                .catch((error) => {
                    console.error('Error posting term:', error);
                });
        }
        else {
            updateTermData(jsonData, card._id)
                .then((response) => {
                    if (response.data.success) {
                        enqueueSnackbar(response.data.message, { variant: 'success', anchorOrigin: { vertical: 'top', horizontal: 'right' } });
                        setOpen(false);
                        dispatch(fetchTermData());
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
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
                className='w-full'
                style={{ width: '100%' }}
            >
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    {mode === 'add' ? 'Add Terms & Condition' : 'Edit Terms & Condition'}
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
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
                                id="question"
                                label="question"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                value={data.question}
                                onChange={(e) => onFieldChange("question", e.target.value)}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                id="answer"
                                label="answer"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                value={data.answer}
                                onChange={(e) => onFieldChange("answer", e.target.value)}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>
                    </Grid>

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

export default AddTermConditionCard;
