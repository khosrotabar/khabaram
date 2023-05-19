import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";

import ShoppingChild from "../../../components/checkout/shopping/Shopping";

import { addProduct } from "../../../redux/shoppingCart";
import { storeAddressess } from "../../../redux/addAddress";

import styles from "./Shopping.module.css";

function Shopping(props) {
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
    dispatch(addProduct(props.cart));
    dispatch(storeAddressess(props.userAddress));

    if (!props.userLogedIn) {
      router.push("/user/login");
    }
  }

  useEffect(() => {
    changeRouter();
  }, []);

  return (
    <div className={`body-home ${styles.shopping_container}`}>
      <div className={styles.cart_title}>
        <p>خلاصه سبد خرید شما</p>
        {shoppingCartCounter !== 0 ? (
          <div>
            {shoppingCartCounterSvg}
            <p>{shoppingCartCounter} کالا</p>
          </div>
        ) : undefined}
      </div>
      <ShoppingChild
        user={props.user}
        price={props.price}
        cartProductLoadCond={props.cartProductLoadCond}
        runAddFuncAddress={props.runAddFuncAddress}
      />
    </div>
  );
}

export async function getServerSideProps(context) {
  const userMobile = context.req.cookies["customer"];

  let userResult;

  let cartResults = [];

  let price = 0;

  let cartProductLoadCond = false;

  let userAddress = [];

  let runAddFuncAddress = false;

  let userLogedIn = true;

  if (userMobile) {
    const response1 = await fetch(
      "http://localhost:3000/api/getAllShoppingCart",
      {
        method: "POST",
        body: JSON.stringify({ userMobile }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    cartResults = await response1.json();

    for (var i = 0; i < cartResults.length; i++) {
      price += parseInt(cartResults[i].finalPrice);
    }
    cartProductLoadCond = true;

    const response2 = await fetch("http://localhost:3000/api/getUser", {
      method: "POST",
      body: JSON.stringify({ userMobile }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    userResult = await response2.json();

    userAddress = userResult[0].address;
    if (userAddress.length === 0) {
      runAddFuncAddress = true;
    } else {
      runAddFuncAddress = false;
    }
  } else {
    userLogedIn = false;
  }

  return {
    props: {
      user: userResult !== undefined ? userResult : [{ address: "" }],
      cart: cartResults,
      price: price,
      cartProductLoadCond: cartProductLoadCond,
      userAddress: userAddress,
      runAddFuncAddress: runAddFuncAddress,
      userLogedIn: userLogedIn,
    },
  };
}

export default Shopping;
