import {
  STORE_KEY as PRODUCTS_STORE_KEY,
  STORE_CONFIG as productsConfig,
} from "./products";
import { register, createReduxStore } from "@wordpress/data";

const store = createReduxStore(PRODUCTS_STORE_KEY, productsConfig);
register(store);
