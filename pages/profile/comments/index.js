import { useState } from "react";
import Link from "next/link";
import CommentsComponent from "../../../components/profile/comments/CommentsComponent";

function Comments(props) {
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
      <CommentsComponent
        userComments={props.data.comments}
        userName={props.data.user[0].name}
        userMobile={props.data.user[0].mobileNumber}
      />
    </div>
  );
}

export async function getServerSideProps(context) {
  const userMobile = context.req.cookies["customer"];

  const response = await fetch("http://localhost:3000/api/getUserComments", {
    method: "POST",
    body: JSON.stringify({ userMobile }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const results = await response.json();

  return {
    props: {
      data: results,
    },
  };
}

export default Comments;
