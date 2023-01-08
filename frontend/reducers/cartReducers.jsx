import React from "react";
import {
  CART_ADD_ITEM,
  CART_ADD_ITEM_FAIL,
  CART_EMPTY,
  CART_REMOVE_ITEM,
  CART_SAVE_PAYMENT_METHOD,
  CART_SAVE_SHIPPING_ADDRESS,
} from "./cartConstants.jsx";

export const cartReducers = (state = { cartItems: [] }, action) => {
  if (action.type === "CART_ADD_ITEM") {
    const item = action.payload;
    const existItem = state.cartItems.find((a) => a.product === item.product);
    if (existItem) {
      return {
        ...state,
        error: "",
        cartItems: state.cartItems.map((a) =>
          a.product === existItem.product ? item : x
        ),
      };
    } else {
      return {
        ...state,
        error: "",
        cartItems: [...state.cartItems, item],
      };
    }
  }

  if (action.type === "CART_REMOVE_ITEM") {
    return {
      ...state,
      error: "",
      cartItems: state.cartItems.filter((b) => b.product !== action.payload),
    };
  }

  if (action.type === "CART_SAVE_SHIPPING_ADDRESS") {
    return {
      ...state,
      shippingAddress: action.payload,
    };
  }

  if (action.type === "CART_SAVE_PAYMENT_METHOD") {
    return { ...state, paymentMethod: action.payload };
  }

  if (action.type === "CART_ADD_ITEM_FAIL") {
    return { ...state, error: action.payload };
  }

  if (action.type === "CART_EMPTY") {
    return { ...state, error: "", cartItems: [] };
  }
  return state;
};
