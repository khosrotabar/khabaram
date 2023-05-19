import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

import styles from "./ProductDetailPart4.module.css";

function ProductDetailPart4(props) {
  const router = useRouter();
  const cookieVal = Cookies.get("customer");
  const [showLoading, setShowLoading] = useState(true);
  const [runLikeCommentApi, setRunLikeCommentApi] = useState(false);
  const [comments, setComments] = useState([]);

  async function getAllComments() {
    const response = await fetch("/api/getAllComments", {
      method: "POST",
      body: JSON.stringify({ code: props.code }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    setComments(result);
    setShowLoading(false);
  }

  async function likeCommentHandler(userLiked, commentId, productCode) {
    if (cookieVal) {
      setRunLikeCommentApi(true);
      const userMobile = cookieVal;
      const response = await fetch("/api/likeComment", {
        method: "POST",
        body: JSON.stringify({
          commentId,
          userLiked,
          userMobile,
          productCode,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();
      setComments(result);
      setRunLikeCommentApi(false);
    } else {
      router.push("/user/login");
    }
  }

  useEffect(() => {
    getAllComments();
  }, []);

  return (
    <div className={styles.comments_container}>
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
      <p className={styles.comments_main_title}>نظرات کاربران درباره محصول</p>
      {comments.map((comment, index) => {
        return comment.active == 1 ? (
          <div key={index} className={styles.uniq_comment_container}>
            <div className={styles.uniq_comment_upside}>
              <div className={styles.uniq_comment_title_score}>
                <div
                  className={styles.comment_score}
                  onClick={() =>
                    runLikeCommentApi
                      ? undefined
                      : likeCommentHandler(
                          comment.userLiked,
                          comment._id,
                          comment.product
                        )
                  }
                  style={{
                    backgroundColor: comment.userLiked.find(
                      (item) => item == cookieVal
                    )
                      ? "#F45858"
                      : "#fdfdfd",
                  }}
                >
                  <p
                    style={{
                      color: comment.userLiked.find((item) => item == cookieVal)
                        ? "#fdfdfd"
                        : "#b5b5b5",
                    }}
                  >
                    {comment.like}
                  </p>
                  {runLikeCommentApi ? (
                    <box-icon
                      name="heart"
                      type="solid"
                      color={
                        comment.userLiked.find((item) => item == cookieVal)
                          ? "#FDFDFD"
                          : "#B5B5B5"
                      }
                      animation="flashing"
                      style={{ marginRight: "5px" }}
                    ></box-icon>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill={
                        comment.userLiked.find((item) => item == cookieVal)
                          ? "#fdfdfd"
                          : "#b5b5b5"
                      }
                    >
                      <path d="M20.205 4.791a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412L12 21.414l8.207-8.207c2.354-2.353 2.355-6.049-.002-8.416z"></path>
                    </svg>
                  )}
                </div>
                <p>{comment.title}</p>
              </div>
              <div className={styles.uniq_comment_upside_left}>
                <p>{comment.isCustomer == 0 ? "کاربر سایت" : "خریدار"}</p>
                <div></div>
                <p>{comment.date}</p>
              </div>
            </div>
            <div className={styles.uniq_comment_downside}>
              <p>{comment.text}</p>
            </div>
            <div className={styles.comments_spacer}></div>
          </div>
        ) : undefined;
      })}
    </div>
  );
}

export default ProductDetailPart4;
