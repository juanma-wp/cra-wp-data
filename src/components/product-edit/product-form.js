import React from "react";
import { __ } from "@wordpress/i18n";
import { FormInput } from "../general";
import { useState } from "@wordpress/element";
import { v4 as uuidv4 } from "uuid";

const ProductForm = ({
  product = {
    id: uuidv4(),
    name: "",
    description: "",
    price: "",
  },
  onProductUpdate = () => null,
}) => {
  const [updatedProduct, setUpdatedProduct] = useState(product);
  const { name, description, price, id } = updatedProduct;
  const isNew =
    product.name === "" && product.description === "" && product.price === "";
  const submitLabel = isNew ? __("Create Product") : __("Update Product");

  const onChange = (property) => (event) => {
    const newProduct = {
      ...updatedProduct,
      [property]: event.target.value,
    };
    setUpdatedProduct(newProduct);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onProductUpdate(updatedProduct, isNew);
  };

  return (
    <div className={"product-form"}>
      <form onSubmit={handleSubmit} id={`product-${id}`}>
        <FormInput
          onChange={onChange("name")}
          as={"text"}
          value={name}
          label={__("Product Name: ")}
        />
        <FormInput
          as={"textarea"}
          value={description}
          label={__("Product Description: ")}
          onChange={onChange("description")}
        />
        <FormInput
          as={"text"}
          value={price}
          label={__("Product Price: ")}
          onChange={onChange("price")}
        />
        <button className={"btn btn-primary"} type={"submit"}>
          {submitLabel}
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
