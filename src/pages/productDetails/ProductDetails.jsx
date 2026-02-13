import React from "react";
import useData from "./../../hooks/Hooks";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  // receive products from hooks
  const { products } = useData();

  // receive product id from url params and find the product with the id
  const { id } = useParams();
  const fondProduct = products.find((product) => product.id === parseInt(id));

  return (
    <div>
      <h1>{fondProduct?.title}</h1>
    </div>
  );
};

export default ProductDetails;
