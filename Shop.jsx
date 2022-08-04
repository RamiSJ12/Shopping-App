import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";


fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(console.log);

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
