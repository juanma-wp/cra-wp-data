import { getResourcePath } from "./utils";
import apiFetch from "@wordpress/api-fetch";
import TYPES from "./action-types";
import { STORE_KEY } from "./constants";

const { UPDATE, CREATE, DELETE, HYDRATE } = TYPES;

export const createProduct =
  (product) =>
  async ({ dispatch }) => {
    try {
      const result = await apiFetch({
        path: getResourcePath(),
        method: "POST",
        data: product,
      });
      dispatch({
        type: CREATE,
        product: result,
      });
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

export const updateProduct =
  (product) =>
  async ({ select, dispatch }) => {
    try {
      const canonicalProduct = select(STORE_KEY).getProduct(product.id);
      await apiFetch({
        path: getResourcePath(canonicalProduct._id),
        method: "PUT",
        data: product,
      });
      dispatch({
        type: UPDATE,
        product,
      });
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

export const deleteProduct =
  (productId) =>
  async ({ select, dispatch }) => {
    try {
      const product = select(STORE_KEY).getProduct(productId);
      await apiFetch({
        path: getResourcePath(product._id),
        method: "DELETE",
      });
      dispatch({
        type: DELETE,
        productId,
      });
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

export const hydrate = (products) => ({
  type: HYDRATE,
  products,
});
