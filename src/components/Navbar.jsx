import { Badge, Button } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import {mobile} from "../responsive";
import { Link} from "react-router-dom";


const Container = styled.div`
  height: 60px;
  background-color: lightblue;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
 
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  border-radius: 1rem;
  display: flex;
  margin-left: 10px;
  height: 2rem;
  padding: 1px;
  width: 70%;
  justify-content: space-between;
  background-color: white;
`;

const Input = styled.input`
  border: none;
  border-radius: 1rem;
  flex: 8;
  padding-left: 20px;
  ${mobile({ width: "10px" })}
`;

const Center = styled.div`
  flex: 1;
  textAlign: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({fontSize: "18px"})}
  
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({flex: 2, justifyContent: "center"})}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({fontSize: "12px", marginLeft: "10px"})}
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
        <Logo>URBANTROVE</Logo>
        </Left>
        <Center>
        <SearchContainer >  
            <Input placeholder="Search for products, brands and more"/>
            <Search style={{ color: "blue", fontSize: 25, marginRight: "1rem",marginTop: "0.3rem" }} />
          </SearchContainer>
        </Center>
        <Right>
          <MenuItem><Link to = "/Register">REGISTER</Link></MenuItem>
          <MenuItem><Link to = "/Login">SIGN IN</Link></MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <Link to = "/Cart">
              <ShoppingCartOutlined/>
               </Link>
      
            
              
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;