
import styled from "styled-components";
import {mobile} from "../responsive";
const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),url("https://img.freepik.com/free-photo/abstract-paper-background-concept_23-2148812686.jpg?w=996&t=st=1688209305~exp=1688209905~hmac=3c0b5117530ae1d75080dd16b5f8224abdef7158647d1184c4adb660e0ecf3b1")
    center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    

`;
const Wrapper= styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;
    ${mobile({ width: "75%" })}
`;
const Form = styled.form`
    display: flex;
    flex-direction: column;
    
`;
const Title = styled.h1`
    font-size: 25px;
    font-weight: 400px;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`;
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
    <Wrapper>
      <Title>SIGN IN</Title>
      <Form>
          <Input placeholder = "username"/>
          <Input placeholder = "password"/>
          <Button>LOGIN IN</Button>
          <Link>Don't remember the password?</Link>
          <Link to = "/Register">CREATE AN NEW ACCOUNT</Link>
      </Form>
    </Wrapper>
  </Container>
  )
}

export default Login
