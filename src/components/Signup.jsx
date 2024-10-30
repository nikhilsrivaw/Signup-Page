import React from 'react';
import styled, { keyframes } from 'styled-components';
import RobotImage from '../assets/robot.png';

const glow = keyframes`
  0% { box-shadow: 0 0 10px #00f, 0 0 20px #00f, 0 0 30px #0ff; }
  50% { box-shadow: 0 0 20px #f0f, 0 0 40px #0ff, 0 0 60px #00f; }
  100% { box-shadow: 0 0 10px #00f, 0 0 20px #f0f, 0 0 30px #0ff; }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  overflow: hidden;
  position: relative;
  color: #ffffff;

  /* Full-Screen Robot Background */
  background: url(${RobotImage}) center/cover no-repeat, linear-gradient(135deg, #0f2027, #203a43, #2c5364);
  background-blend-mode: overlay; /* Ensures gradient blends with the image */
`;

const FormWrapper = styled.div`
  position: relative;
  z-index: 10;
  background: rgba(0, 0, 0, 0.6); /* Dark overlay for contrast */
  padding: 3rem;
  border-radius: 12px;
  backdrop-filter: blur(8px);
  animation: ${glow} 2s ease-in-out infinite alternate;
  text-align: center;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.6); /* Shadow for form pop */
`;

const Title = styled.h1`
  font-size: 2.2rem;
  font-weight: 600;
  color: #00ffff;
  margin-bottom: 2rem;
  text-shadow: 0 0 10px #00ffff;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  margin: 0.8rem 0;
  border: none;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.1);
  color: #00ffff;
  outline: none;
  box-shadow: 0 0 5px #00ffff inset;
  &:focus {
    box-shadow: 0 0 8px #00ffff;
  }
`;

const Button = styled.button`
  padding: 1rem 3rem;
  margin-top: 1.5rem;
  border: none;
  border-radius: 5px;
  background: #00ffff;
  color: #0f2027;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease-in-out, color 0.3s ease-in-out;
  &:hover {
    background: #203a43;
    color: #00ffff;
  }
`;

function Signup() {
  return (
    <Container>
      <FormWrapper>
        <Title>Sign Up</Title>
        <form>
          <Input type="text" placeholder="Username" />
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Button type="submit">Create Account</Button>
        </form>
      </FormWrapper>
    </Container>
  );
}

export default Signup;
