import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

function Product() {
  const [data , setData] = useState([])
  const params = useParams();
  const id = params.id;
  return <Box>
       {id} page.....
  </Box>
}

export default Product;
