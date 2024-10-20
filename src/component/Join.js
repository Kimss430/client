import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

const Join = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      sx={{ backgroundColor: '#e0f7fa', padding: 3 }}
    >
      <Box 
        sx={{ 
          width: '100%', 
          maxWidth: '400px', 
          padding: '20px',  
          backgroundColor: '#fff', 
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', 
          borderRadius: '8px'  
        }}
      >
        <Typography variant="h4" mb={3} align="center">
          회원가입
        </Typography>
        <TextField label="이메일" variant="outlined" fullWidth margin="normal" />
        <TextField label="비밀번호" variant="outlined" type="password" fullWidth margin="normal" />
        <TextField label="비밀번호 확인" variant="outlined" type="password" fullWidth margin="normal" />
        <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          회원가입
        </Button>
        <Typography mt={2} align="center">
          이미 계정이 있으신가요? <a href="/login">로그인</a>
        </Typography>
      </Box>
    </Box>
  );
};

export default Join;
