import { useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";

import styles from "./SettingsLeftPanel.module.css";

function SettingsLeftPanel(props) {
  const userName = props.user.name;
  const userMobile = props.user.mobileNumber;
  const userEmail = props.user.email;
  const [userNameInput, setUserNameInput] = useState(userName);
  const [userMobileInput, setUserMobileInput] = useState(userMobile);
  const [userEmailInput, setUserEmailInput] = useState(userEmail);
  const [showEditBtn, setShowEditBtn] = useState(false);
  const [editInputs, setEditInputs] = useState(false);
  const [sendingApi, setSendingApi] = useState(false);
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

  async function saveChangesHandler() {
    setSendingApi(true);

    const newUserData = {
      userName: userNameInput,
      userMobile: userMobileInput,
      userEmail: userEmailInput,
    };

    const response = await fetch("/api/settingsChanges", {
      method: "POST",
      body: JSON.stringify(newUserData),
      Headers: {
        "Content-Type": "application/json",
      },
    });

    const results = await response.json();

    console.log(results);
    setSendingApi(false);
    setEditInputs(false);
  }

  return (
    <div className={styles.settings_left_panel_container}>
      <div
        className={
          showEditBtn
            ? `${styles.settings_main_title} ${styles.show_edit_btn}`
            : styles.settings_main_title
        }
      >
        <p>اطلاعات پروفایل</p>
        <div
          onClick={() =>
            showEditBtn ? setShowEditBtn(false) : setShowEditBtn(true)
          }
        >
          {editSvg}
        </div>
        <div
          onClick={() => {
            setShowEditBtn(false);
            setEditInputs(true);
          }}
        >
          <p>ویرایش</p>
        </div>
      </div>
      <div className={styles.settings_left_panel_middle}>
        <div>
          <label className={styles.settings_input_container}>
            نام و نام خانوادگی
            <input
              type={"text"}
              value={userNameInput}
              onChange={(event) => setUserNameInput(event.target.value)}
              disabled={userName !== "" && !editInputs ? true : false}
            />
          </label>
          <label className={styles.settings_input_container}>
            شماره موبایل
            <input
              type={"tel"}
              value={userMobileInput}
              onChange={(event) => setUserMobileInput(event.target.value)}
              disabled
            />
          </label>
        </div>
        <div>
          <label className={styles.settings_input_container}>
            آدرس ایمیل
            <input
              type={"tel"}
              value={userEmailInput}
              onChange={(event) => setUserEmailInput(event.target.value)}
              disabled={userEmail !== "" && !editInputs ? true : false}
            />
          </label>
        </div>
      </div>
      <button
        className={
          editInputs
            ? `${styles.show_save_changes_btn} ${styles.save_changes_btn}`
            : styles.save_changes_btn
        }
        onClick={saveChangesHandler}
      >
        {sendingApi ? undefined : <p>ذخیره اطلاعات</p>}
        <BeatLoader
          color="#fff"
          loading={sendingApi}
          margin={2}
          size={13}
          speedMultiplier={1}
        />
      </button>
    </div>
  );
}

export default SettingsLeftPanel;
