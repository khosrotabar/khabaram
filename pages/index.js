import { useEffect } from "react";
import { useDispatch } from "react-redux";

import HomePart1 from "../components/home/home-part-1/Home_Part_1";
import HomePart2 from "../components/home/home-part-2/Home_Part_2";
import HomePart3 from "../components/home/home-part-3/Home_Part_3";
import HomePart4 from "../components/home/home-part-4/Home_Part_4";
import HomePart5 from "../components/home/home-part-5/Home_Part_5";
import HomePart6 from "../components/home/home-part-6/Home_Part_6";
import HomePart7 from "../components/home/home-part-7/Home_Part_7";
import HomePart8 from "../components/home/home-part-8/Home_Part_8";
import HomePart9 from "../components/home/home-part-9/Home_Part_9";

import { addProduct } from "../redux/shoppingCart";

function Home(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addProduct(props.cart));
  }, []);

  return (
    <div className="body-home">
      <HomePart1 />
      <HomePart2 />
      <HomePart3 />
      <HomePart4 />
      <HomePart5 />
      <HomePart6 />
      <HomePart7 />
      <HomePart8 />
      <HomePart9 />
    </div>
  );
}

export async function getServerSideProps(context) {
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
      cart: results,
    },
  };
}

export default Home;
