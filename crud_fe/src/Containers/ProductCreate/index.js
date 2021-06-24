import React, { useState } from "react";
import { createService } from "../../Services/ProductService";

export default function CreateProduct(props) {
  const [productName, setProductName] = useState("");

  const productNameChange = (event) => {
    setProductName(event.target.value);
  };
  const submitProduct = () => {
    if (productName !== "") {
      createService(productName)
        .then((response) => {
          props.productCreated(true);
        })
        .catch((error) => {
          props.productCreated(false);
        });
    }
  };
  return (
    <div>
      <input onChange={productNameChange} />
      <button onClick={submitProduct}>Create</button>
    </div>
  );
}
