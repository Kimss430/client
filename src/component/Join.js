import React, { useRef } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Join() {
  const emailRef = useRef();
  const pwdRef = useRef();
  const confirmPwdRef = useRef();
  const navigate = useNavigate();

  async function fnJoin(){
    const email = emailRef.current.value;
    const pwd = pwdRef.current.value;
    const confirmPwd = confirmPwdRef.current.value;
    if(pwd != confirmPwd){
      alert("비밀번호 다름");
      return;
    }
    try {
      const res = await axios.post("http://localhost:3100/user/insert", {
        email, pwd
      }); // {email : eamil, pwd : pwd}

      if(res.data.success){
        navigate("/login");
      } else {
        alert("회원가입 실패!");
      }


    } catch (error) {
      console.log("서버 호출 중 오류 발생");
    }
  }

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
        <TextField inputRef={emailRef} label="이메일" variant="outlined" fullWidth margin="normal" />
        <TextField inputRef={pwdRef} label="비밀번호" variant="outlined" type="password" fullWidth margin="normal" />
        <TextField inputRef={confirmPwdRef} label="비밀번호 확인" variant="outlined" type="password" fullWidth margin="normal" />
        <Button onClick={fnJoin} variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
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
