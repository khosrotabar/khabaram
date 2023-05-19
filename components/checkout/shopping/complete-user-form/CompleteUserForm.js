import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import BeatLoader from "react-spinners/BeatLoader";

import styles from "./CompleteUserForm.module.css";

import { storeAddress, removeAddress } from "../../../../redux/addresses";
import { storeAddressess } from "../../../../redux/addAddress";
import { changeCond } from "../../../../redux/shoppingPageHover";

function CompleteUserForm(props) {
  const router = useRouter();
  const dispatch = useDispatch();
  const [addressInputVal, setAddressInputVal] = useState("");
  const [showLoadingIo, setShowLoadingIo] = useState(false);
  const [name, setName] = useState(props.user[0].name);
  const mobile = props.user[0].mobileNumber;
  const [email, setEmail] = useState(props.user[0].email);
  const [postalCode, setPostalCode] = useState("");
  const shoppingHoverCond = useSelector((state) => state.shoppingPageHover[0]);
  const shoppingCartFormAddresses = useSelector((state) => state.addresses);
  const closeSvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      className={styles.close_svg}
    >
      <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
    </svg>
  );
  const notify = () =>
    toast.warn("آدرس نباید خالی باشد!", {
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

  function addAddressHandler() {
    if (addressInputVal !== "") {
      const newAddress = {
        location: addressInputVal,
        postalCode: postalCode,
        phone: props.cookieVal,
        reciever: name,
      };
      dispatch(storeAddress(newAddress));
      setAddressInputVal("");
      setPostalCode("");
    }
  }

  function removeAddressHandler(id) {
    dispatch(removeAddress(id));
  }

  async function updateUserAddressesHandler() {
    if (
      props.cookieVal &&
      shoppingCartFormAddresses.length !== 0 &&
      name !== "" &&
      email !== ""
    ) {
      setShowLoadingIo(true);
      const oldAddress = props.addresses;
      const newAddress = {
        name: name,
        email: email,
        address: shoppingCartFormAddresses,
      };
      const userMobile = props.cookieVal;
      const response = await fetch("/api/updateUser", {
        method: "POST",
        body: JSON.stringify({ userMobile, newAddress, oldAddress }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();
      setShowLoadingIo(false);
      dispatch(changeCond(false));
      dispatch(storeAddressess(result));
    } else if (!props.cookieVal) {
      router.push("/user/login");
    } else if (shoppingCartFormAddresses.length === 0) {
      notify();
    }
  }

  return (
    <div
      className={
        shoppingHoverCond
          ? `${styles.form_container} ${styles.show_hover}`
          : styles.form_container
      }
    >
      <div
        className={
          shoppingHoverCond
            ? `${styles.form} ${styles.show_hover_form}`
            : styles.form
        }
      >
        <p className={styles.form_title}>اطلاعات پروفایل</p>
        <div>
          <label>
            <p>
              نام و نام خانوادگی <span style={{ color: "#F45858" }}>*</span>
            </p>
            <input
              type={"text"}
              value={name}
              onChange={(event) => setName(event.target.value)}
              className={
                props.user[0].name !== "" ? styles.input_new_style : undefined
              }
              disabled={props.user[0].name !== "" ? true : false}
            />
          </label>
          <label>
            <p>
              شماره موبایل <span style={{ color: "#F45858" }}>*</span>
            </p>
            <input
              type={"number"}
              value={mobile}
              className={
                props.user[0].mobileNumber !== ""
                  ? styles.input_new_style
                  : undefined
              }
              disabled={props.user[0].mobileNumber !== "" ? true : false}
            />
          </label>
        </div>
        <div>
          <label>
            <p>
              آدرس ایمیل <span style={{ color: "#F45858" }}>*</span>
            </p>
            <input
              type={"email"}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className={
                props.user[0].email !== "" ? styles.input_new_style : undefined
              }
              disabled={props.user[0].email !== "" ? true : false}
            />
          </label>
          <label>
            <p>کد پستی</p>
            <input
              type={"number"}
              value={postalCode}
              onChange={(event) => setPostalCode(event.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            <p>
              آدرس{" "}
              {shoppingCartFormAddresses.length === 0 && (
                <span style={{ color: "#F45858" }}>*</span>
              )}
            </p>
            <input
              type={"text"}
              value={addressInputVal}
              onChange={(event) => setAddressInputVal(event.target.value)}
            />
          </label>
          <button
            className={styles.add_address_btn}
            onClick={addAddressHandler}
          >
            افزودن
          </button>
        </div>
        {shoppingCartFormAddresses.map((item, index) => {
          return (
            <div key={index} className={styles.form_saved_address}>
              <p>{item.location}</p>
              <p onClick={() => removeAddressHandler(item.location)}>حذف</p>
            </div>
          );
        })}
        <button
          className={styles.form_submit_btn}
          onClick={updateUserAddressesHandler}
        >
          {showLoadingIo ? undefined : "ذخیره"}
          {
            <BeatLoader
              color="#fff"
              loading={showLoadingIo}
              margin={2}
              size={13}
              speedMultiplier={1}
              cssOverride={{ marginTop: "0px" }}
            />
          }
        </button>
        <div
          className={styles.close_hover_btn}
          onClick={() => dispatch(changeCond(false))}
        >
          {closeSvg}
        </div>
      </div>
    </div>
  );
}

export default CompleteUserForm;
