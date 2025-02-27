import apiFetch from "@wordpress/api-fetch";
import { hydrate } from "./actions";
import { getResourcePath } from "./utils";

export const getProducts =
  () =>
  async ({ dispatch }) => {
    try {
      const products = await apiFetch({
        path: getResourcePath(),
      });
      dispatch(hydrate(products));
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
