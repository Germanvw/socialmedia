import { Modal, styled, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../Hooks/useRedux';
import { authActions } from '../../Redux/Slices/authSlice';
import { ChangePasswordForm } from '../Forms/ChangePasswordForm';
import { ChangeProfileForm } from '../Forms/ChangeProfileForm';
import { PostCreateForm } from '../Forms/PostCreateForm';

const StyledModal = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const DynamicModal = ({
  title,
  type,
  classN,
  svg = null,
}: {
  title: string;
  type: string;
  classN: string;
  svg?: any;
}) => {
  const { darkTheme } = useAppSelector((state) => state.ui);
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  return (
    <>
      <button className={`${classN}`} onClick={() => setOpen(true)}>
        {svg && svg}
        {!svg && title}
      </button>
      <StyledModal
        open={open}
        onClose={() => {
          dispatch(authActions.removeError());
          setOpen(false);
        }}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box
          width={400}
          bgcolor={darkTheme ? '#000' : '#ffffff'}
          p={3}
          color={darkTheme ? '#fff' : '#000'}
          borderRadius={5}
        >
          <Typography
            id='modal-modal-title'
            color={darkTheme ? '#fff' : '#000'}
            variant='h6'
            component='h2'
            textAlign='center'
          >
            {title}
          </Typography>
          {type === 'Profile' ? (
            <ChangeProfileForm setOpen={setOpen} />
          ) : type === 'Password' ? (
            <ChangePasswordForm setOpen={setOpen} />
          ) : (
            type === 'Post' && <PostCreateForm setOpen={setOpen} />
          )}
        </Box>
      </StyledModal>
    </>
  );
};
