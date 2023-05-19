import { useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import BeatLoader from "react-spinners/BeatLoader";
import Cookies from "js-cookie";

import styles from "./ProductCommentForm.module.css";

function ProductCommentForm(props) {
  const router = useRouter();
  const cookieVal = Cookies.get("customer");
  const [commentTitleVal, setCommentTitleVal] = useState("");
  const [commentTextVal, setCommentTextVal] = useState("");
  const [runAddCommentApi, setRunAddCommentApi] = useState(false);
  const [scoreInput1, setScoreInput1] = useState(true);
  const [scoreInput2, setScoreInput2] = useState(true);
  const [scoreInput3, setScoreInput3] = useState(false);
  const [scoreInput4, setScoreInput4] = useState(false);
  const [scoreInput5, setScoreInput5] = useState(false);
  const [scoreVal, setScoreVal] = useState(2);

  const heartSvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      className={styles.checkmark}
    >
      <path d="M20.205 4.791a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412L12 21.414l8.207-8.207c2.354-2.353 2.355-6.049-.002-8.416z"></path>
    </svg>
  );

  const notifySuccess = () =>
    toast.success(
      "نظر شما با موفقیت ثبت شد و بعد از تایید مدیر سایت نمایش داده می شود.",
      {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: "toaster-custom-css",
        style: {
          color: "#4B416A",
          fontSize: "14px",
          fontWeight: "normal",
        },
      }
    );

  const notifyError = () =>
    toast.error("متاسفانه خطایی در سرور رخ داده است!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className: "toaster-custom-css",
      style: {
        color: "#4B416A",
      },
    });
  const notifyErrorEmptyfields = () =>
    toast.error("متن یا تیتر نباید خالی باشد!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className: "toaster-custom-css",
      style: {
        color: "#4B416A",
      },
    });
  const notifyErrorScore = () =>
    toast.warn("به خاطر خطای سرور امتیاز ثبت نشد!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className: "toaster-custom-css",
      style: {
        color: "#4B416A",
      },
    });

  async function addCommenthandler() {
    if (cookieVal) {
      setRunAddCommentApi(true);
      const userMobile = cookieVal;
      const tzString = "Asia/Tehran";
      const comment = {
        user: userMobile,
        product: props.code,
        imageUrl: props.imageUrl,
        title: commentTitleVal,
        text: commentTextVal,
        date: new Date().toLocaleDateString("fa-IR", { timeZone: tzString }),
        active: 1,
        isCustomer: 0,
        like: 0,
        userLiked: [],
      };

      const response = await fetch("/api/addComment", {
        method: "POST",
        body: JSON.stringify({ userMobile, comment, scoreVal }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();

      if (result === "addCommentSuccess") {
        notifySuccess();
      } else if (result == "addCommentFailed") {
        notifyError();
      } else if (result == "emptyFields") {
        notifyErrorEmptyfields();
      }

      if (result == "updateScoreFailed") {
        notifyErrorScore();
      }
      setRunAddCommentApi(false);
    } else {
      router.push("/user/login");
    }
  }

  function scoreHandler(num) {
    setScoreInput1(false);
    setScoreInput2(false);
    setScoreInput3(false);
    setScoreInput4(false);
    setScoreInput5(false);
    if (num == 1) {
      setScoreInput1(true);
      setScoreVal(1);
    } else if (num == 2) {
      setScoreInput1(true);
      setScoreInput2(true);
      setScoreVal(2);
    } else if (num == 3) {
      setScoreInput1(true);
      setScoreInput2(true);
      setScoreInput3(true);
      setScoreVal(3);
    } else if (num == 4) {
      setScoreInput1(true);
      setScoreInput2(true);
      setScoreInput3(true);
      setScoreInput4(true);
      setScoreVal(4);
    } else if (num == 5) {
      setScoreInput1(true);
      setScoreInput2(true);
      setScoreInput3(true);
      setScoreInput4(true);
      setScoreInput5(true);
      setScoreVal(5);
    }
  }

  return (
    <div className={styles.form_container}>
      <p className={styles.form_title}>ثبت نظر</p>
      <div className={styles.form_input_1}>
        <input
          placeholder="تیتر"
          type={"text"}
          onChange={(event) => setCommentTitleVal(event.target.value)}
        />
        <div className={styles.form_input_1_score}>
          <label className={styles.container}>
            <input
              type="checkbox"
              onClick={() => scoreHandler(5)}
              checked={scoreInput5}
            />
            {heartSvg}
          </label>
          <label className={styles.container}>
            <input
              type="checkbox"
              onClick={() => scoreHandler(4)}
              checked={scoreInput4}
            />
            {heartSvg}
          </label>
          <label className={styles.container}>
            <input
              type="checkbox"
              onClick={() => scoreHandler(3)}
              checked={scoreInput3}
            />
            {heartSvg}
          </label>
          <label className={styles.container}>
            <input
              type="checkbox"
              onClick={() => scoreHandler(2)}
              checked={scoreInput2}
            />
            {heartSvg}
          </label>
          <label className={styles.container}>
            <input
              type="checkbox"
              onClick={() => scoreHandler(1)}
              checked={scoreInput1}
            />
            {heartSvg}
          </label>
        </div>
        <button onClick={addCommenthandler}>
          <BeatLoader
            color="#fff"
            loading={runAddCommentApi}
            margin={2}
            size={13}
            speedMultiplier={1}
          />
          {runAddCommentApi ? undefined : <p>نظرمو ثبت کن</p>}
        </button>
      </div>
      <textarea
        placeholder="متن نظر"
        onChange={(event) => setCommentTextVal(event.target.value)}
      ></textarea>
    </div>
  );
}

export default ProductCommentForm;
