import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import Cookies from "js-cookie";

import { changeCond } from "../../../../redux/showAddAddressForm";
import { storeAddress } from "../../../../redux/addresses";

import styles from "./AddressesLeftPanelUp.module.css";

function AddressesLeftPanelUp() {
  const addresses = useSelector((state) => state.addresses[0]);
  const [locationInputValue, setLocationInputValue] = useState("");
  const [postalCodeInputValue, setPostalCodeInputValue] = useState("");
  const [phoneInputValue, setPhoneInputValue] = useState("");
  const [recieverInputValue, setRecieverInputValue] = useState("");
  const [postalCodeIndex, setPostalCodeIndex] = useState("");
  const [phoneIndex, setPhoneIndex] = useState("");
  const [recieverIndex, setRecieverIndex] = useState("");
  const [locationIndex, setLocationIndex] = useState("");
  const [addressIndex, setAddressIndex] = useState("");
  const [addressEditIndex, setAddressEditIndex] = useState("");
  const [currentIndex, setCurrentIndex] = useState("");
  const [changeSaved, setChangeSaved] = useState(false);
  const [removingAddress, setRemovingAddress] = useState(false);
  const locationRef = useRef(null);
  const postalCodeRef = useRef(null);
  const phoneRef = useRef(null);
  const recieverRef = useRef(null);
  const userMobileNumber = Cookies.get("customer");
  const dispatch = useDispatch();

  const plusSvg = (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.5 0C8.01777 0 8.4375 0.419733 8.4375 0.9375V6.5625H14.0625C14.5803 6.5625 15 6.98223 15 7.5C15 8.01777 14.5803 8.4375 14.0625 8.4375H8.4375V14.0625C8.4375 14.5803 8.01777 15 7.5 15C6.98223 15 6.5625 14.5803 6.5625 14.0625V8.4375H0.9375C0.419733 8.4375 0 8.01777 0 7.5C0 6.98223 0.419733 6.5625 0.9375 6.5625H6.5625V0.9375C6.5625 0.419733 6.98223 0 7.5 0Z"
        fill="#B5B5B5"
      />
    </svg>
  );
  const postalCodeSvg = (
    <svg
      width="20"
      height="16"
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.21795 4.37684C4.56212 3.9449 5.19127 3.87375 5.62321 4.21792L10 7.70539L14.3769 4.21792C14.8088 3.87375 15.438 3.9449 15.7821 4.37684C16.1263 4.80877 16.0551 5.43793 15.6232 5.78209L11.24 9.27462C10.887 9.55363 10.4501 9.70541 10 9.70541C9.55001 9.70541 9.11313 9.55363 8.76004 9.27461L8.75686 9.2721L4.37687 5.78209C3.94493 5.43793 3.87378 4.80877 4.21795 4.37684Z"
        fill="#B5B5B5"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 2C0 0.89543 0.89543 0 2 0H18C19.1046 0 20 0.89543 20 2V14C20 15.1046 19.1046 16 18 16H2C0.89543 16 0 15.1046 0 14V2ZM18 2H2V14H18V2Z"
        fill="#B5B5B5"
      />
    </svg>
  );
  const phoneSvg = (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.42365 2.03866C4.25812 1.99626 4.08559 1.98864 3.91695 2.01627C3.74832 2.04391 3.58726 2.1062 3.44393 2.1992L3.42649 2.21027L2.30844 2.90337L1.78155 2.05343L2.18405 2.96885C2.11852 2.99766 2.0651 3.04837 2.03292 3.11223C2.00175 3.17411 1.99239 3.24461 2.00624 3.31236C2.32405 4.5885 2.82267 5.81085 3.48562 6.94278L5.59302 5.4773C5.84089 5.29252 6.01058 5.02149 6.06841 4.71761C6.12568 4.41676 6.06912 4.10559 5.91014 3.84433C5.6458 3.46331 5.41549 3.04811 5.20385 2.64729C5.12304 2.49811 5.01236 2.36715 4.87869 2.26257C4.74413 2.1573 4.58919 2.08105 4.42365 2.03866ZM1.30608 1.17162C0.848677 1.39203 0.475944 1.75755 0.246811 2.21234C0.00560892 2.69108 -0.0614116 3.23885 0.0572646 3.76162L0.0618595 3.78097C0.51824 5.62105 1.30277 7.36375 2.37777 8.92541C2.52862 9.14454 2.76057 9.29454 3.0223 9.34221C3.28404 9.38987 3.55398 9.33128 3.7724 9.17939L6.74642 7.11128C6.75313 7.10661 6.75978 7.10186 6.76638 7.09703C7.42727 6.61298 7.87998 5.8963 8.03315 5.09155C8.18631 4.2868 8.02851 3.45393 7.5916 2.76097C7.58303 2.74736 7.57412 2.73396 7.5649 2.72079C7.36744 2.43874 7.17868 2.10416 6.97041 1.70959L6.97044 1.70958L6.96664 1.70252C6.75467 1.30864 6.46334 0.96298 6.11105 0.687364C5.75876 0.411749 5.35316 0.212159 4.91985 0.101186C4.48654 -0.00978696 4.03492 -0.029735 3.59352 0.0426011C3.15582 0.114329 2.73758 0.275253 2.36474 0.515341L1.30608 1.17162ZM14.0933 12.1771C13.8289 12.0109 13.5113 11.9509 13.2044 12.0093C12.9002 12.0672 12.629 12.2371 12.4442 12.4851L11.0185 14.5294C12.1618 15.1859 13.3951 15.6757 14.6811 15.9823L14.4491 16.955L14.709 15.9894C14.7807 16.0087 14.8569 16.0015 14.9237 15.9691C14.9905 15.9366 15.0433 15.8812 15.0725 15.813C15.0953 15.7595 15.1228 15.7082 15.1546 15.6595L15.8349 14.6172C15.9172 14.4744 15.9702 14.3164 15.9905 14.1527C16.0116 13.9832 15.9973 13.8111 15.9486 13.6474C15.8998 13.4837 15.8176 13.3318 15.7071 13.2015C15.5967 13.0711 15.4604 12.965 15.3069 12.89C15.2866 12.8801 15.2667 12.8695 15.2471 12.8582C15.1843 12.8221 15.1198 12.7851 15.0539 12.7474C14.7493 12.5731 14.4161 12.3824 14.0933 12.1771ZM14.2049 17.9248C12.359 17.4831 10.6081 16.7118 9.03625 15.648C8.81459 15.498 8.66232 15.2654 8.61351 15.0022C8.56469 14.7391 8.6234 14.4673 8.77651 14.2478L10.8114 11.3301L10.8249 11.3111C11.309 10.6503 12.0258 10.1977 12.8305 10.0446C13.6353 9.89147 14.4682 10.0492 15.1612 10.486L15.1648 10.4883C15.445 10.6666 15.7297 10.8296 16.0329 11.0033C16.0939 11.0382 16.1556 11.0735 16.2182 11.1095C16.6066 11.3049 16.9519 11.5767 17.2331 11.9087C17.5223 12.25 17.7376 12.6476 17.8653 13.0764C17.9931 13.5051 18.0305 13.9557 17.9752 14.3997C17.92 14.8437 17.7733 15.2713 17.5444 15.6557C17.5373 15.6675 17.5301 15.6791 17.5226 15.6906L16.8704 16.6898C16.6453 17.1594 16.2674 17.54 15.7971 17.7683C15.3019 18.0087 14.7371 18.0641 14.2049 17.9248Z"
        fill="#B5B5B5"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.46255 7.15679C2.92824 6.85989 3.54644 6.99673 3.84334 7.46242C4.69647 8.8006 5.70158 10.0356 6.83861 11.1427C6.84498 11.1489 6.85127 11.1551 6.85747 11.1615C7.96457 12.2986 9.19953 13.3037 10.5377 14.1568C11.0034 14.4537 11.1402 15.0719 10.8433 15.5376C10.5464 16.0033 9.92824 16.1401 9.46255 15.8432C7.99803 14.9095 6.64618 13.81 5.43383 12.5663C4.19018 11.3539 3.09059 10.0021 2.15691 8.53758C1.86002 8.07189 1.99685 7.45369 2.46255 7.15679Z"
        fill="#B5B5B5"
      />
    </svg>
  );
  const recieverSvg = (
    <svg
      width="18"
      height="20"
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 12C6.4087 12 4.88258 12.6321 3.75736 13.7574C2.63214 14.8826 2 16.4087 2 18H16C16 16.4087 15.3679 14.8826 14.2426 13.7574C13.1174 12.6321 11.5913 12 10 12H8ZM8 10C5.87827 10 3.84344 10.8429 2.34315 12.3431C0.842855 13.8434 0 15.8783 0 18C0 18.5304 0.210714 19.0391 0.585787 19.4142C0.960861 19.7893 1.46957 20 2 20H16C16.5304 20 17.0391 19.7893 17.4142 19.4142C17.7893 19.0391 18 18.5304 18 18C18 15.8783 17.1571 13.8434 15.6569 12.3431C14.1566 10.8429 12.1217 10 10 10H8Z"
        fill="#B5B5B5"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 2C6.79086 2 5 3.79086 5 6C5 8.20914 6.79086 10 9 10C11.2091 10 13 8.20914 13 6C13 3.79086 11.2091 2 9 2ZM3 6C3 2.68629 5.68629 0 9 0C12.3137 0 15 2.68629 15 6C15 9.31371 12.3137 12 9 12C5.68629 12 3 9.31371 3 6Z"
        fill="#B5B5B5"
      />
    </svg>
  );
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

  function limitInputsValLength(event) {
    if (event.target.value.length > event.target.maxLength)
      event.target.value = event.target.value.slice(0, event.target.maxLength);
  }

  async function saveChangesHandler(index) {
    setChangeSaved(true);
    const newAddress = {
      location: locationRef.current.value,
      postalCode: postalCodeRef.current.value,
      phone: phoneRef.current.value,
      reciever: recieverRef.current.value,
    };

    const response = await fetch("/api/updateAddresses", {
      method: "POST",
      body: JSON.stringify({ userMobileNumber, newAddress, index }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const results = await response.json();

    dispatch(storeAddress(results));
    setAddressIndex("");
    setAddressEditIndex("");
    setLocationIndex("");
    setPostalCodeIndex("");
    setPhoneIndex("");
    setRecieverIndex("");

    setChangeSaved(false);
  }

  async function removeAddressHandler() {
    setRemovingAddress(true);
    const response = await fetch("/api/removeUserAddress", {
      method: "POST",
      body: JSON.stringify({ currentIndex, userMobileNumber }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const results = await response.json();
    dispatch(storeAddress(results));
    setCurrentIndex("");
    setAddressEditIndex("");
    setRemovingAddress(true);
  }

  return (
    <div className={styles.addresses_left_panel_upside_container}>
      <div></div>
      <div className={styles.addresses_left_panel_upside_title}>
        <p>لیست آدرس ها</p>
        <div onClick={() => dispatch(changeCond(true))}>
          {plusSvg}
          <p>آدرس جدید</p>
        </div>
      </div>
      {addresses
        ? addresses.map((item, index) => {
            return (
              <div
                className={styles.addresses_left_panel_upside_address_container}
                key={index}
              >
                <div
                  className={styles.address_edit_btn}
                  onClick={() =>
                    addressEditIndex === "" || addressEditIndex !== index
                      ? setAddressEditIndex(index)
                      : setAddressEditIndex("")
                  }
                >
                  {editSvg}
                </div>
                <div
                  className={
                    addressEditIndex === index
                      ? `${styles.address_edit_btn_details} ${styles.address_edit_btn_details_show}`
                      : styles.address_edit_btn_details
                  }
                >
                  <div
                    onClick={() => {
                      setAddressIndex(index);
                      setAddressEditIndex("");
                      setLocationIndex("");
                      setPostalCodeIndex("");
                      setPhoneIndex("");
                      setRecieverIndex("");
                    }}
                  >
                    <p>ویرایش</p>
                  </div>
                  <div onClick={() => setCurrentIndex(index)}>
                    <p>حذف</p>
                  </div>
                </div>
                <input
                  type={"text"}
                  value={
                    locationIndex === index ? locationInputValue : item.location
                  }
                  disabled={addressIndex === index ? false : true}
                  onChange={(event) => {
                    setLocationInputValue(event.target.value);
                    setLocationIndex(index);
                  }}
                  ref={addressIndex === index ? locationRef : undefined}
                  style={
                    addressIndex === index
                      ? {
                          backgroundColor: "#fff",
                          paddingRight: "10px",
                        }
                      : {}
                  }
                />
                <div
                  className={
                    styles.addresses_left_panel_upside_address_details_container
                  }
                >
                  <div
                    className={
                      styles.addresses_left_panel_upside_address_details_right_side
                    }
                  >
                    <div>
                      {postalCodeSvg}
                      <p>کد پستی</p>
                      <input
                        type={"number"}
                        value={
                          postalCodeIndex === index
                            ? postalCodeInputValue
                            : item.postalCode
                        }
                        onChange={(event) => {
                          setPostalCodeInputValue(event.target.value);
                          setPostalCodeIndex(index);
                        }}
                        maxLength="10"
                        onInput={(event) => limitInputsValLength(event)}
                        disabled={addressIndex === index ? false : true}
                        ref={addressIndex === index ? postalCodeRef : undefined}
                        style={
                          addressIndex === index
                            ? {
                                backgroundColor: "#fff",
                                paddingRight: "10px",
                              }
                            : {}
                        }
                      />
                    </div>
                    <div>
                      {phoneSvg}
                      <p>شماره تلفن</p>
                      <input
                        type={"tel"}
                        value={
                          phoneIndex === index ? phoneInputValue : item.phone
                        }
                        onChange={(event) => {
                          setPhoneInputValue(event.target.value);
                          setPhoneIndex(index);
                        }}
                        maxLength="11"
                        onInput={(event) => limitInputsValLength(event)}
                        disabled={addressIndex === index ? false : true}
                        ref={addressIndex === index ? phoneRef : undefined}
                        style={
                          addressIndex === index
                            ? {
                                backgroundColor: "#fff",
                                paddingRight: "10px",
                              }
                            : {}
                        }
                      />
                    </div>
                    <div>
                      {recieverSvg}
                      <p>گیرنده</p>
                      <input
                        type={"text"}
                        value={
                          recieverIndex === index
                            ? recieverInputValue
                            : item.reciever
                        }
                        onChange={(event) => {
                          setRecieverInputValue(event.target.value);
                          setRecieverIndex(index);
                        }}
                        disabled={addressIndex === index ? false : true}
                        ref={addressIndex === index ? recieverRef : undefined}
                        style={
                          addressIndex === index
                            ? {
                                backgroundColor: "#fff",
                                paddingRight: "10px",
                              }
                            : {}
                        }
                      />
                    </div>
                  </div>
                  <div
                    className={
                      styles.addresses_left_panel_upside_address_details_left_side
                    }
                  ></div>
                </div>
                <div
                  className={
                    addressIndex === index
                      ? `${styles.edit_address_apply_container} ${styles.edit_address_apply_container_show}`
                      : styles.edit_address_apply_container
                  }
                >
                  <button onClick={() => saveChangesHandler(index)}>
                    {changeSaved ? (
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
                      "ذخیره"
                    )}
                  </button>
                  <button
                    onClick={() => {
                      setAddressIndex("");
                      setLocationIndex("");
                      setPostalCodeIndex("");
                      setPhoneIndex("");
                      setRecieverIndex("");
                    }}
                  >
                    انصراف
                  </button>
                </div>
              </div>
            );
          })
        : []}
      <div
        className={
          currentIndex !== ""
            ? `${styles.delete_dialog_container} ${styles.delete_dialog_container_show}`
            : styles.delete_dialog_container
        }
      >
        <div
          className={
            currentIndex !== ""
              ? `${styles.delete_dialog_form} ${styles.delete_dialog_form_show}`
              : styles.delete_dialog_form
          }
        >
          <div
            className={styles.delete_dialog_close}
            onClick={() => setCurrentIndex("")}
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
            <p>حذف آدرس</p>
          </div>
          <div className={styles.delete_dialog_form_down_side}>
            <p>آیا از حذف این آدرس اطمینان دارید؟</p>
            <div>
              <button onClick={removeAddressHandler}>
                {removingAddress ? (
                  <div className={styles.address_loading_2}>
                    <Image
                      alt=""
                      layout="responsive"
                      width="1"
                      height="1"
                      src="/images/loading/removeLoading2.gif"
                    />
                  </div>
                ) : (
                  "حذف"
                )}
              </button>
              <button onClick={() => setCurrentIndex("")}>انصراف</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddressesLeftPanelUp;
