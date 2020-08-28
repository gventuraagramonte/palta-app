import React from "react";
import { Divider } from "semantic-ui-react";
import Layout from "components/Layout/Layout";
import CartItemList from "components/CartItemList/CartItemList";
import { useCartMutations, useCart } from "../store/Cart";
import CartSummary from "components/CartSummary/CartSummary";

const CartPage = () => {
  const { items, count } = useCart();
  const { removeFromCart } = useCartMutations();

  return (
    <Layout>
      <CartItemList items={items} removeFromCart={removeFromCart} />
      <Divider />
      <CartSummary totalAmount={count} />
    </Layout>
  );
};

export default CartPage;
