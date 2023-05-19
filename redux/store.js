import { configureStore } from "@reduxjs/toolkit";

import categoryFilterReducer from "./categoryFilter";
import mongodbStoreReducer from "./mongodbStore";
import shoppingCartReducer from "./shoppingCart";
import shoppingCartBtnReducer from "./shoppingCartBtn";
import addAddressReducer from "./addAddress";
import shoppingPageHoverReducer from "./shoppingPageHover";
import showAddAddressFormReducer from "./showAddAddressForm";
import addressesReducer from "./addresses";
import openMenuReducer from "./openMenu";
import openProfileReducer from "./openProfile";

const store = configureStore({
  reducer: {
    categoryFilter: categoryFilterReducer,
    mongodbStore: mongodbStoreReducer,
    shoppingCart: shoppingCartReducer,
    shoppingCartBtn: shoppingCartBtnReducer,
    addAddress: addAddressReducer,
    shoppingPageHover: shoppingPageHoverReducer,
    showAddAddressForm: showAddAddressFormReducer,
    addresses: addressesReducer,
    openMenu: openMenuReducer,
    openProfile: openProfileReducer,
  },
});

export default store;
