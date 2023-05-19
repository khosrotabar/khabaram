import { useEffect } from "react";
import { useDispatch } from "react-redux";

import ProductDetail from "../../components/product/ProductDetail";

import { addProduct } from "../../redux/shoppingCart";
import { changeNumber, saveProductCode } from "../../redux/shoppingCartBtn";

function Product(props) {
  const product = props.product;
  const dispatch = useDispatch();

  function shoppingCartHandler() {
    dispatch(saveProductCode(product[0].code));
    dispatch(addProduct(props.cart));

    if (props.checkProductInCart) {
      dispatch(changeNumber(props.productInCart.number));
    }
  }

  useEffect(() => {
    shoppingCartHandler();
  }, []);

  return (
    <div className="body-home">
      <ProductDetail
        product={product[0]}
        shoppingCartChange={props.shoppingCartChange}
        runAddToCartFunc={props.runAddToCartFunc}
      />
    </div>
  );
}

export async function getServerSideProps(context) {
  const slug = context.params.product;
  const userMobile = context.req.cookies["customer"];

  let results = [];

  let shoppingCartChange = false;

  let runAddToCartFunc = false;

  let checkProductInCart = false;

  let productInCart = true;

  const response = await fetch("http://localhost:3000/api/product", {
    method: "POST",
    body: JSON.stringify({ url: slug }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const product = await response.json();

  if (userMobile) {
    const response = await fetch("http:localhost:3000/api/getAllShoppingCart", {
      method: "POST",
      body: JSON.stringify({ userMobile }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    results = await response.json();

    productInCart = results.find((item) => item.code === product[0].code);

    if (productInCart === undefined) {
      productInCart = false;
    }

    if (productInCart) {
      shoppingCartChange = true;
      checkProductInCart = true;
    } else {
      runAddToCartFunc = true;
    }
  } else {
    runAddToCartFunc = true;
  }

  return {
    props: {
      product: product,
      cart: results,
      shoppingCartChange: shoppingCartChange,
      runAddToCartFunc: runAddToCartFunc,
      checkProductInCart: checkProductInCart,
      productInCart: productInCart,
    },
  };
}

export default Product;
