import { Box, Typography } from '@mui/material';
import Modal from '@mui/material/Modal';
import { useState } from 'react';

export const BasicModal = ({ title }: { title: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box>
        <Typography id='modal-modal-title' variant='h6' component='h2'>
          {title}
        </Typography>
        <Typography id='modal-modal-description' sx={{ mt: 2 }}></Typography>
      </Box>
    </Modal>
  );
};
