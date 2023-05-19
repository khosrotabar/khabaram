import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Category from "../../components/category/Category";
import { addProduct } from "../../redux/shoppingCart";

function CategoryPage(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addProduct(props.cart));
  }, []);

  return (
    <div className="body-home">
      <Category slug={props.slug} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const slug = context.params.category;

  const userMobile = context.req.cookies["customer"];

  let results = [];

  if (userMobile) {
    const response = await fetch("http:localhost:3000/api/getAllShoppingCart", {
      method: "POST",
      body: JSON.stringify({ userMobile }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    results = await response.json();
  }

  return {
    props: {
      slug: slug,
      cart: results,
    },
  };
}

export default CategoryPage;
