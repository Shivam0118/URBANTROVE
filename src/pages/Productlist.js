import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";

const Container = styled.div``;
const Title = styled.h1`
    margin: 20px;
`;
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Filter = styled.div`
    margin: 20px;
    ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.div`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const Productlist = () => {
  return (
    <Container>
        <Announcement/>
        <Navbar/>
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter><FilterText>Filter Products:</FilterText>
            <Select>
                <Option disabled selected>
                    Color
                </Option>
                <Option>Red</Option>
                <Option>Black</Option>
                <Option>White</Option>
                <Option>Blue</Option>
                <Option>Yellow</Option>
                <Option>Green</Option>
            </Select>
            <Select>
                <Option disabled selected>
                    Size
                </Option>
                <Option>S</Option>
                <Option>M</Option>
                <Option>L</Option>
                <Option>XL</Option>
                <Option>XXL</Option>
                <Option>XS</Option>
            </Select>
            </Filter>
            <Filter><FilterText>Sort Products:</FilterText>
            <Select>
                <Option disabled selected>
                    Newest
                </Option>
                <Option>A to Z</Option>
                <Option>Z to A</Option>
            </Select>
            </Filter>
        </FilterContainer>
        <Products/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Productlist;
