import { useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import Image from "next/image";

import styles from "./CommentsLeftPanel.module.css";

function CommentsLeftPanel(props) {
  const [comments, setComments] = useState(props.userComments);
  const [showRemoveDialog, setShowRemoveDialog] = useState(false);
  const [removingComments, setRemovingComments] = useState(false);
  const [removingOneComments, setRemovingOneComments] = useState(false);
  const [applyingChange, setApplyingChange] = useState(false);
  const [showRemoveBtn, setShowRemoveBtn] = useState(false);
  const [commentInputValue, setCommentInputValue] = useState("");
  const [currentIndex, setCurrentIndex] = useState("");
  const editSvg = (
    <svg
      width="23"
      height="6"
      viewBox="0 0 23 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="19.9999"
        cy="2.99999"
        r="2.44444"
        transform="rotate(90 19.9999 2.99999)"
        fill="#B5B5B5"
      />
      <circle
        cx="11.4442"
        cy="2.99999"
        r="2.44444"
        transform="rotate(90 11.4442 2.99999)"
        fill="#B5B5B5"
      />
      <circle
        cx="2.88856"
        cy="2.99999"
        r="2.44444"
        transform="rotate(90 2.88856 2.99999)"
        fill="#B5B5B5"
      />
    </svg>
  );
  const editPenSvg = (
    <svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.89759 0.855954C10.4491 0.307721 11.1951 0 11.9728 0C12.7504 0 13.4964 0.307721 14.048 0.855954L14.0511 0.859041L16.1441 2.95204C16.6923 3.50355 17 4.24959 17 5.02723C17 5.80486 16.6923 6.5509 16.144 7.10241L16.1369 7.10956L6.59991 16.573C6.31772 16.853 5.93426 17.0069 5.53679 16.9998L1.44529 16.9262C0.64291 16.9117 0 16.2572 0 15.4547V11.3632C0 10.9728 0.15506 10.5985 0.431069 10.3225L9.89449 0.859046L9.89759 0.855954ZM2.94352 11.9728V14.0091L4.968 14.0455L14.0565 5.02721L11.9728 2.94352L2.94352 11.9728Z"
        fill="#A698CF"
      />
    </svg>
  );

  const comment_status_active = {
    backgroundColor: "#9FDB8B",
  };
  const comments_status_waiting = {
    backgroundColor: "#FFC107",
    width: "89px",
  };
  const comments_status_failed = {
    backgroundColor: "#DC3545",
  };

  async function removeAllCommentsHandler() {
    setRemovingComments(true);
    const userMobile = props.userMobile;
    const response = await fetch("/api/removeAllComments", {
      method: "POST",
      body: JSON.stringify({ userMobile }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const results = await response.json();

    setComments(results);
    setRemovingComments(false);
    setShowRemoveDialog(false);
  }

  async function applyChangeHandler(commentId) {
    setApplyingChange(true);
    const userMobile = props.userMobile;
    const response = await fetch("/api/applyCommentChange", {
      method: "POST",
      body: JSON.stringify({ commentId, commentInputValue, userMobile }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const results = await response.json();

    setComments(results);
    setApplyingChange(false);
    setCurrentIndex("");
  }

  async function removeOneCommentHandler(commentId) {
    setRemovingOneComments(true);
    const userMobile = props.userMobile;
    const response = await fetch("/api/removeOneComment", {
      method: "POST",
      body: JSON.stringify({ commentId, userMobile }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const results = await response.json();

    setComments(results);
    setRemovingOneComments(false);
    setCurrentIndex("");
  }

  return (
    <div className={styles.comments_left_panel_container}>
      <div
        className={
          showRemoveBtn
            ? `${styles.comments_main_title} ${styles.show_remove_btn}`
            : styles.comments_main_title
        }
      >
        <p>نظرات شما</p>
        <div
          onClick={() =>
            showRemoveBtn ? setShowRemoveBtn(false) : setShowRemoveBtn(true)
          }
        >
          {editSvg}
        </div>
        <div
          onClick={() => {
            setShowRemoveDialog(true);
            setShowRemoveBtn(false);
            currentIndex !== "" ? setCurrentIndex("") : undefined;
          }}
        >
          <p>حذف همه</p>
        </div>
      </div>

      {comments.map((item, index) => {
        return (
          <div key={index} className={styles.comments_container}>
            <div className={styles.comments_right_side}>
              <div className={styles.comments_product_image}>
                <div>
                  <Image
                    alt=""
                    layout="responsive"
                    width="1"
                    height="1"
                    src={item.imageUrl}
                    draggable={false}
                  />
                </div>
              </div>
              <div className={styles.comments_like_number}>
                {item.like}
                <box-icon
                  name="heart"
                  type="solid"
                  color="#ffffff"
                  style={{ marginRight: "5px" }}
                ></box-icon>
              </div>
              <div className={styles.comments_text}>
                <input
                  className={styles.comments_text_input}
                  onChange={(event) => setCommentInputValue(event.target.value)}
                  value={currentIndex === index ? commentInputValue : item.text}
                  disabled={currentIndex === index ? false : true}
                />
                <div
                  style={
                    currentIndex === index
                      ? { display: "block", paddingTop: "7px" }
                      : { display: "none" }
                  }
                  onClick={() => setCurrentIndex("")}
                >
                  <box-icon name="x" color="#585858"></box-icon>
                </div>
                <div
                  style={currentIndex === index ? { display: "none" } : {}}
                  onClick={() => {
                    applyingChange || removingOneComments
                      ? undefined
                      : setCurrentIndex(index);
                    applyingChange || removingOneComments
                      ? undefined
                      : setCommentInputValue(item.text);
                  }}
                >
                  {editPenSvg}
                  <p>ویرایش نظر</p>
                </div>
              </div>
            </div>
            <div className={styles.comments_status}>
              <button
                className={
                  currentIndex === index
                    ? `${styles.comments_btn_remove} ${styles.comments_btn_show}`
                    : styles.comments_btn_remove
                }
                onClick={() => removeOneCommentHandler(item._id)}
              >
                {removingOneComments ? undefined : "حذف نظر"}
                <BeatLoader
                  color="#fff"
                  loading={removingOneComments}
                  margin={2}
                  size={13}
                  speedMultiplier={1}
                  cssOverride={{ marginTop: "10px" }}
                />
              </button>
              <button
                className={
                  currentIndex === index
                    ? `${styles.comments_btn_apply} ${styles.comments_btn_show}`
                    : styles.comments_btn_apply
                }
                onClick={() => applyChangeHandler(item._id)}
              >
                {applyingChange ? undefined : "ذخیره"}
                <BeatLoader
                  color="#fff"
                  loading={applyingChange}
                  margin={2}
                  size={13}
                  speedMultiplier={1}
                  cssOverride={{ marginTop: "10px" }}
                />
              </button>
              <button
                style={
                  item.active == 1
                    ? comment_status_active
                    : item.active == 0
                    ? comments_status_waiting
                    : item.active == -1
                    ? comments_status_failed
                    : undefined
                }
                className={
                  currentIndex === index
                    ? styles.comments_btn_hide
                    : styles.comments_btn_status
                }
              >
                {item.active == 1
                  ? "تایید شده"
                  : item.active == 0
                  ? "منتظر تایید"
                  : item.active == -1
                  ? "رد شده"
                  : undefined}
              </button>
            </div>
          </div>
        );
      })}

      <div
        className={
          showRemoveDialog
            ? `${styles.delete_dialog_container} ${styles.delete_dialog_container_show}`
            : styles.delete_dialog_container
        }
      >
        <div
          className={
            showRemoveDialog
              ? `${styles.delete_dialog_form} ${styles.delete_dialog_form_show}`
              : styles.delete_dialog_form
          }
        >
          <div
            className={styles.delete_dialog_close}
            onClick={() => setShowRemoveDialog(false)}
          >
            <Image
              alt=""
              width="1"
              height="1"
              layout="responsive"
              src="/images/trash/icons8-close-50.png"
            />
          </div>
          <div className={styles.delete_dialog_form_up_side}>
            <div className={styles.delete_dialog_icon}>
              <Image
                alt=""
                width="1"
                height="1"
                layout="responsive"
                src="/images/trash/icons8-recycle-bin-64.png"
                draggable={false}
              />
            </div>
            <p>حذف نظرات</p>
          </div>
          <div className={styles.delete_dialog_form_down_side}>
            <p>آیا از حذف همه نظرات اطمینان دارید؟</p>
            <div>
              <button
                onClick={
                  removingComments ? undefined : removeAllCommentsHandler
                }
              >
                {removingComments ? undefined : "حذف"}
                <BeatLoader
                  color="#fff"
                  loading={removingComments}
                  margin={2}
                  size={13}
                  speedMultiplier={1}
                  cssOverride={{ marginTop: "10px" }}
                />
              </button>
              <button onClick={() => setShowRemoveDialog(false)}>انصراف</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentsLeftPanel;
