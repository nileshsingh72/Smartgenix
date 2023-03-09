import React from "react";
import { useParams } from "react-router-dom";

function SingleProduct() {
  const params = useParams();
  const id = params.id;

  return <div>SingleProduct page.. {id}</div>;
}

export default SingleProduct;
