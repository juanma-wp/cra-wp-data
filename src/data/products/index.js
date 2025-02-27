import * as selectors from "./selectors";
import * as actions from "./actions";
import reducer from "./reducer";
import * as resolvers from "./resolvers";
import { STORE_KEY } from "./constants";

export { STORE_KEY };

export const STORE_CONFIG = {
  selectors,
  actions,
  reducer,
  resolvers,
  initialState: {
    products: [],
  },
};
