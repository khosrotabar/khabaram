import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";

import CartChild from "../../../components/checkout/cart/CartChild";
import { addProduct } from "../../../redux/shoppingCart";

import styles from "./Cart.module.css";

function Cart(props) {
  const dispatch = useDispatch();
  const router = useRouter();
  const shoppingCartProducts = useSelector((state) => state.shoppingCart[0]);
  const shoppingCartCounter = shoppingCartProducts.length;
  const shoppingCartCounterSvg = (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 6V18C19 18.2652 18.8946 18.5196 18.7071 18.7071C18.5196 18.8946 18.2652 19 18 19H2C1.73478 19 1.48043 18.8946 1.29289 18.7071C1.10536 18.5196 1 18.2652 1 18V6"
        stroke="#B5B5B5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 6L5.71 1.29C5.89626 1.10526 6.14766 1.0011 6.41 1H13.59C13.8523 1.0011 14.1037 1.10526 14.29 1.29L19 6H1Z"
        stroke="#B5B5B5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  function changeRouter() {
    if (typeof props.cart === "object") dispatch(addProduct(props.cart));

    if (!props.userLogedIn) {
      router.push("/user/login");
    }
  }

  useEffect(() => {
    changeRouter();
  }, []);

  return (
    <div className={`body-home ${styles.cart_container}`}>
      <div className={styles.cart_title}>
        <p>خلاصه سبد خرید شما</p>
        {shoppingCartCounter !== 0 ? (
          <div>
            {shoppingCartCounterSvg}
            <p>{shoppingCartCounter} کالا</p>
          </div>
        ) : undefined}
      </div>
      <CartChild
        price={props.price}
        cartProductLoadCond={props.cartProductLoadCond}
      />
    </div>
  );
}

export async function getServerSideProps(context) {
  const userMobile = context.req.cookies["customer"];

  let results;

  let price = 0;

  let cartProductLoadCond = false;

  let userLogedIn = true;

  if (userMobile) {
    const response = await fetch("http:localhost:3000/api/getAllShoppingCart", {
      method: "POST",
      body: JSON.stringify({ userMobile }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    results = await response.json();

    for (var i = 0; i < results.length; i++) {
      price += parseInt(results[i].finalPrice);
    }
    cartProductLoadCond = true;
  } else {
    userLogedIn = false;
  }

  return {
    props: {
      cart: results,
      price: price,
      cartProductLoadCond: cartProductLoadCond,
      userLogedIn: userLogedIn,
    },
  };
}

export default Cart;
