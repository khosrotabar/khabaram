import { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import Cookies from "js-cookie";

import { changeCond } from "../../../../redux/showAddAddressForm";
import { storeAddress } from "../../../../redux/addresses";

import styles from "./AddressesLeftPanelDown.module.css";

function AddressesLeftPanelDown(props) {
  const [addingAddress, setAddingAddress] = useState(false);
  const [recieverIsMe, setRecieverIsMe] = useState(false);
  const [locationInput, setLocationInput] = useState("");
  const [postalCodeInput, setPostalCodeInput] = useState("");
  const [recieverInput, setRecieverInput] = useState("");
  const [mobileNumberInput, setMobileNumberInput] = useState("");
  const condition = useSelector((state) => state.showAddAddressForm[0]);
  const dispatch = useDispatch();
  const locationRef = useRef(null);
  const postalCodeRef = useRef(null);
  const phoneRef = useRef(null);
  const recieverRef = useRef(null);
  const userMobileNumber = Cookies.get("customer");

  const closeSvg = (
    <svg
      width="23"
      height="23"
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => dispatch(changeCond(false))}
    >
      <g opacity="0.5">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.23722 7.23682C7.68632 6.78772 8.41446 6.78772 8.86356 7.23682L15.7636 14.1368C16.2127 14.5859 16.2127 15.3141 15.7636 15.7632C15.3145 16.2123 14.5863 16.2123 14.1372 15.7632L7.23722 8.86317C6.78811 8.41406 6.78811 7.68592 7.23722 7.23682Z"
          fill="#B5B5B5"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.7636 7.23682C16.2127 7.68592 16.2127 8.41406 15.7636 8.86317L8.86356 15.7632C8.41446 16.2123 7.68632 16.2123 7.23722 15.7632C6.78811 15.3141 6.78811 14.5859 7.23722 14.1368L14.1372 7.23682C14.5863 6.78772 15.3145 6.78772 15.7636 7.23682Z"
          fill="#B5B5B5"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.5 2.3C6.41898 2.3 2.3 6.41898 2.3 11.5C2.3 16.581 6.41898 20.7 11.5 20.7C16.581 20.7 20.7 16.581 20.7 11.5C20.7 6.41898 16.581 2.3 11.5 2.3ZM0 11.5C0 5.14873 5.14873 0 11.5 0C17.8513 0 23 5.14873 23 11.5C23 17.8513 17.8513 23 11.5 23C5.14873 23 0 17.8513 0 11.5Z"
          fill="#B5B5B5"
        />
      </g>
    </svg>
  );

  function handleChange(event) {
    if (event.target.checked) {
      setRecieverIsMe(true);
    } else {
      setRecieverIsMe(false);
    }
  }

  async function addAddressHandler() {
    setAddingAddress(true);
    const newAddress = {
      location: locationRef.current.value,
      postalCode: postalCodeRef.current.value,
      phone: phoneRef.current.value,
      reciever: recieverRef.current.value,
    };

    const response = await fetch("/api/addToAdresses", {
      method: "POST",
      body: JSON.stringify({ userMobileNumber, newAddress }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const resluts = await response.json();
    dispatch(storeAddress(resluts));
    setAddingAddress(false);
    dispatch(changeCond(false));
    setRecieverIsMe(false);
    setRecieverInput("");
    setMobileNumberInput("");
    setLocationInput("");
    setPostalCodeInput("");
  }

  return (
    <div
      className={
        condition
          ? `${styles.add_address_form} ${styles.add_address_form_show}`
          : styles.add_address_form
      }
    >
      <div className={styles.add_address_form_title}>
        <p>آدرس جدید</p>
        {closeSvg}
      </div>
      <div className={styles.add_address_form_inputs_part_1}>
        <input
          type={"text"}
          placeholder="آدرس کامل را وارد کنید"
          value={locationInput}
          ref={locationRef}
          onChange={(event) => setLocationInput(event.target.value)}
        />
        <input
          type={"number"}
          placeholder="کد پستی"
          ref={postalCodeRef}
          value={postalCodeInput}
          onChange={(event) => setPostalCodeInput(event.target.value)}
        />
      </div>
      <div className={styles.add_address_form_inputs_part_2}>
        <input
          type={"tel"}
          placeholder="شماره تلفن"
          value={recieverIsMe ? props.mobileNumber : mobileNumberInput}
          onChange={(event) =>
            recieverIsMe ? undefined : setMobileNumberInput(event.target.value)
          }
          ref={phoneRef}
        />
        <input
          type={"text"}
          placeholder="نام گیرنده"
          value={recieverIsMe ? props.name : recieverInput}
          onChange={(event) =>
            recieverIsMe ? undefined : setRecieverInput(event.target.value)
          }
          ref={recieverRef}
        />
        <label className={styles.container}>
          <input type={"checkbox"} onChange={handleChange} />
          <span className={styles.checkmark}></span>
          گیرنده سفارش خودم هستم
        </label>
      </div>
      <button onClick={addAddressHandler}>
        {addingAddress ? (
          <div className={styles.address_loading}>
            <Image
              alt=""
              layout="responsive"
              width="1"
              height="1"
              src="/images/loading/addressloading.gif"
            />
          </div>
        ) : (
          <p>ثبت آدرس</p>
        )}
      </button>
    </div>
  );
}

export default AddressesLeftPanelDown;
