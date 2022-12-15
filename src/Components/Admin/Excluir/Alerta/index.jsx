import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';

export const Alerta = ({opentrue}) => {

  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Deja excluir esta noticia?"}
        </DialogTitle>
        <DialogActions>
          <Button
            onClick={handleClose}
            sx={{

              background: "#5e5e5e",
              '&:hover': {
                backgroundColor: '#808080'
              },
            }}
            size="small"
            variant="contained"
          > Cancelar </Button>
          <Button
            onClick={handleClose}
            sx={{

              background: "#ca0000",
              '&:hover': {
                backgroundColor: '#6b0000'
              },
            }}
            size="small"
            variant="contained"
          > Excluir </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
