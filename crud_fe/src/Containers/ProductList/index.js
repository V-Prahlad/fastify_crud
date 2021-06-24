import React, { useEffect, useState } from "react";
import "./ProductList.css";
import {
  deleteProductService,
  getAllProductService,
} from "../../Services/ProductService";
import swal from "sweetalert";
import CreateProduct from "../ProductCreate";
import ProductDetails from "../ProductDetails";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const [isCreateProduct, setIsCreateProduct] = useState(false);
  const [isProductDetails, setIsProductDetails] = useState(false);

  useEffect(() => {
    getProductList();
  }, []);

  const getProductList = () => {
    getAllProductService().then((response) => {
      console.log(response);
      setProducts(response);
    });
  };

  const openDeleteProductModal = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this item!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        deleteProduct(id);
      } else {
        swal("Your item is safe!");
      }
    });
  };

  const deleteProduct = (productId) => {
    if (productId !== "") {
      deleteProductService(productId).then((response) => {
        let remaingProduct = products.filter((p) => p.id !== productId);
        setProducts(remaingProduct);
        swal("Poof! Your item has been deleted!", {
          icon: "success",
        });
      });
    }
  };
  const createProduct = () => {
    setIsCreateProduct(true);
    setIsProductDetails(false);
  };

  const productCreated = (isCreated) => {
    if (isCreated) {
      getProductList();
      setIsCreateProduct(false);
    }
  };

  const productDetails = (product) => {
    setIsCreateProduct(false);
    setIsProductDetails(true);
    setProduct(product);
  };

  const productUpdated = (isUpdated) => {
    if (isUpdated) {
      getProductList();
      setIsProductDetails(false);
    }
  };
  return (
    <div className="Item">
      <div className="container">
        <button className="header" onClick={createProduct}>
          Create Product
        </button>
        {products.map((product) => {
          return (
            <div key={product.id} className="product-listing">
              <div>{"   " + product.name}</div>
              <div>
                <button
                  className="edit"
                  onClick={() => productDetails(product)}
                >
                  Edit
                </button>
                <button
                  className="delete"
                  onClick={() => openDeleteProductModal(product.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="secondcontainer">
        {isCreateProduct ? (
          <CreateProduct productCreated={productCreated} />
        ) : null}

        {isProductDetails ? (
          <ProductDetails
            productId={product.id}
            productName={product.name}
            productUpdated={productUpdated}
          />
        ) : null}
      </div>
    </div>
  );
}
