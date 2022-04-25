import { Modal, styled, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import { IoIosAddCircle } from 'react-icons/io';
import { useAppSelector } from '../../Hooks/useRedux';
import { PostCreateForm } from '../Forms/PostCreateForm';

const StyledModal = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const AddPostBtn = () => {
  const { darkTheme } = useAppSelector((state) => state.ui);

  const [open, setOpen] = useState(false);
  return (
    <>
      <button className='btn-open-modal-post' onClick={() => setOpen(true)}>
        <IoIosAddCircle />
      </button>
      <StyledModal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box
          width={400}
          height={280}
          bgcolor={darkTheme ? '#000' : '#ffffff'}
          p={3}
          color={darkTheme ? '#fff' : '#000'}
          borderRadius={5}
        >
          <Typography
            id='modal-modal-title'
            variant='h6'
            component='h2'
            textAlign='center'
          >
            Create Post
          </Typography>
          <Box width={340} height={250}>
            <PostCreateForm setOpen={setOpen} />
          </Box>
        </Box>
      </StyledModal>
    </>
  );
};
