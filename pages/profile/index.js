import { useState } from "react";
import Link from "next/link";
import Profile from "../../components/profile/home/Profile";

function ProfileHomePage(props) {
  const [showLoading, setShowLoading] = useState(false);

  return (
    <div className="body-home">
      {/* loading hover */}
      <div
        className="loading-container"
        style={showLoading ? undefined : { display: "none" }}
      >
        <div className="loading-for-scale">
          <div className="loading-sub-container">
            <div className="row">
              <div className="purple-box"></div>
              <div className="white-box"></div>
            </div>
            <div className="row">
              <div className="white-box"></div>
              <div className="purple-box"></div>
            </div>
          </div>
        </div>
      </div>
      {/* loading hover */}
      <div className="header-links-container">
        <Link href="/">
          <p onClick={() => setShowLoading(true)}>
            فروشگاه سرویس خواب و لوازم خانگی
          </p>
        </Link>
        &nbsp;/&nbsp;
        <Link href="/profile">
          <p onClick={() => setShowLoading(true)}>حساب کاربری</p>
        </Link>
      </div>
      <Profile user={props.user} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const userMobile = context.req.cookies["customer"];

  let response;

  if (userMobile) {
    response = await fetch("https://khabaram.vercel.app/api/getUser", {
      method: "POST",
      body: JSON.stringify({ userMobile }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } else {
    return {
      redirect: {
        permanent: false,
        destination: "/user/login",
      },
    };
  }

  const user = await response.json();

  return {
    props: {
      user: user,
    },
  };
}

export default ProfileHomePage;
