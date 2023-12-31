import styled from "styled-components"
import { mobile } from "../responsive";

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
    width: 40%;
    padding: 20px;
    background-color: white;
    ${mobile({ width: "75%" })}
`;
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`;
const Title = styled.h1`
    font-size: 25px;
    font-weight: 400px;
`;
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`;
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`;
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
            <Input placeholder = "firstname"/>
            <Input placeholder = "lastname"/>
            <Input placeholder = "username"/>
            <Input placeholder = "email"/>
            <Input placeholder = "password"/>
            <Input placeholder = "confirm password"/>
            <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
            </Agreement>
            <Button>CREATE ACCOUNT</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register;
