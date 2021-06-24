import React, { useEffect, useState } from "react";
import { updateProductService } from "../../Services/ProductService";

export default function ProductDetails(props) {
  const [productName, setProductName] = useState("");

  useEffect(() => {
    setProductName(props.productName);
  }, [props.productName]);
  const updateProduct = () => {
    const data = {
      id: props.productId,
      name: productName,
    };
    updateProductService(props.productId, data).then((response) => {
      props.productUpdated(true);
    });
  };
  const productNameChange = (event) => {
    setProductName(event.target.value);
  };

  return (
    <div>
      <input onChange={productNameChange} value={productName}></input>
      <button onClick={updateProduct}>Update</button>
    </div>
  );
}
