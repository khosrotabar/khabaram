import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import Image from "next/image";

import styles from "./CartChild.module.css";

import { addProduct } from "../../../redux/shoppingCart";
import RecommendProducts from "./recommend-products/RecommendProducts";

function CartChild(props) {
  const cookieVal = Cookies.get("customer");
  const router = useRouter();
  const dispatch = useDispatch();
  const shoppingCartProducts = useSelector((state) => state.shoppingCart[0]);
  const [showLoading, setShowLoading] = useState(false);
  const [productCode, setProductCode] = useState("");
  const [showPlusLoading, setShowPlusLoading] = useState("");
  const [showMinusLoading, setShowMinusLoading] = useState("");
  const [showTrashForm, setShowTrashForm] = useState("");
  const [circleColor, setCircleColor] = useState("#25ac9e");
  const [showLoadinIoSvg, setShowLoadinIoSvg] = useState(false);
  const finalPrice = props.price;
  const cartProductLoad = props.cartProductLoadCond;

  const guaranteeSvg = (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.434 3.24347C18.8518 3.60464 18.8977 4.23614 18.5365 4.65396L10.7565 13.654C10.5667 13.8736 10.2907 13.9999 10.0004 14C9.71008 14.0001 9.43404 13.874 9.244 13.6545L5.244 9.03454C4.8825 8.61701 4.92792 7.98547 5.34546 7.62397C5.76299 7.26247 6.39453 7.30789 6.75603 7.72543L9.99942 11.4715L17.0235 3.34602C17.3847 2.9282 18.0162 2.88229 18.434 3.24347Z"
        fill="#4B416A"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 2C8.41775 2 6.87104 2.46919 5.55544 3.34824C4.23985 4.22729 3.21447 5.47672 2.60897 6.93853C2.00347 8.40034 1.84504 10.0089 2.15372 11.5607C2.4624 13.1126 3.22433 14.538 4.34315 15.6569C5.46197 16.7757 6.88743 17.5376 8.43928 17.8463C9.99113 18.155 11.5997 17.9965 13.0615 17.391C14.5233 16.7855 15.7727 15.7602 16.6518 14.4446C17.5308 13.129 18 11.5823 18 10C18 9.44771 18.4477 9 19 9C19.5523 9 20 9.44771 20 10C20 11.9778 19.4135 13.9112 18.3147 15.5557C17.2159 17.2002 15.6541 18.4819 13.8268 19.2388C11.9996 19.9957 9.98891 20.1937 8.0491 19.8079C6.10929 19.422 4.32746 18.4696 2.92894 17.0711C1.53041 15.6725 0.578004 13.8907 0.192152 11.9509C-0.1937 10.0111 0.00433278 8.00043 0.761209 6.17317C1.51809 4.3459 2.79981 2.78412 4.4443 1.6853C6.08879 0.58649 8.02219 0 10 0C10.5523 0 11 0.447715 11 1C11 1.55228 10.5523 2 10 2Z"
        fill="#4B416A"
      />
    </svg>
  );
  const whiteToman = (
    <svg
      width="23"
      height="23"
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.1827 20.4164C12.5221 20.4164 12.8233 20.4036 13.0864 20.3781C13.3536 20.3568 13.5891 20.3227 13.7927 20.2758C14.0006 20.2332 14.1809 20.1757 14.3336 20.1032C14.4906 20.035 14.6264 19.9519 14.7409 19.8539C14.9191 19.709 15.0527 19.5407 15.1418 19.3489C15.2351 19.1572 15.2903 18.8993 15.3073 18.5755H14.3273C14.1151 18.5755 13.8988 18.5584 13.6782 18.5243C13.4576 18.4902 13.2454 18.4327 13.0418 18.3517C12.8382 18.2665 12.6451 18.1578 12.4627 18.0257C12.2845 17.8936 12.1276 17.7317 11.9918 17.5399C11.8603 17.3439 11.7542 17.1138 11.6736 16.8495C11.5973 16.5853 11.5591 16.2828 11.5591 15.9418C11.5591 15.6478 11.5845 15.3878 11.6354 15.162C11.6864 14.9319 11.75 14.7294 11.8264 14.5547C11.907 14.38 11.9961 14.2287 12.0936 14.1009C12.1912 13.9688 12.2845 13.8537 12.3736 13.7557C12.6282 13.5 12.9167 13.304 13.2391 13.1676C13.5615 13.027 13.9094 12.9566 14.2827 12.9566C14.7451 12.9566 15.1397 13.0376 15.4664 13.1996C15.7973 13.3572 16.0667 13.5767 16.2745 13.858C16.4867 14.1392 16.6415 14.4737 16.7391 14.8615C16.8367 15.2451 16.8854 15.6627 16.8854 16.1144V16.9838H17.9673V18.5755H16.8791C16.8621 19.1593 16.7582 19.6515 16.5673 20.0521C16.3806 20.4527 16.1006 20.8021 15.7273 21.1004C15.5321 21.2538 15.32 21.3859 15.0909 21.4967C14.8618 21.6118 14.6051 21.7077 14.3209 21.7844C14.0367 21.8611 13.7185 21.9165 13.3664 21.9506C13.0185 21.9889 12.6239 22.0081 12.1827 22.0081V20.4164ZM14.2827 14.5483C13.9221 14.5483 13.6357 14.6613 13.4236 14.8871C13.2115 15.113 13.1054 15.4646 13.1054 15.9418C13.1054 16.1293 13.1415 16.2892 13.2136 16.4213C13.29 16.5534 13.3854 16.662 13.5 16.7473C13.6188 16.8282 13.7503 16.8879 13.8945 16.9262C14.0388 16.9646 14.183 16.9838 14.3273 16.9838H15.3073V16.1144C15.3073 15.8715 15.2882 15.6648 15.25 15.4944C15.2118 15.3197 15.1609 15.1748 15.0973 15.0597C15.0379 14.9446 14.9679 14.853 14.8873 14.7848C14.8109 14.7167 14.7345 14.6655 14.6582 14.6314C14.5861 14.5973 14.5161 14.576 14.4482 14.5675C14.3803 14.5547 14.3251 14.5483 14.2827 14.5483Z"
        fill="#FDFDFD"
      />
      <path
        d="M22.3836 13.2059C22.3921 13.2358 22.4091 13.3061 22.4345 13.4169C22.4642 13.5277 22.4961 13.6641 22.53 13.826C22.5639 13.9837 22.5979 14.1605 22.6318 14.3566C22.67 14.5526 22.7039 14.7507 22.7336 14.951C22.7676 15.1471 22.793 15.3388 22.81 15.5263C22.8312 15.7138 22.8418 15.8779 22.8418 16.0185C22.8418 16.4575 22.7697 16.8389 22.6254 17.1628C22.4812 17.4824 22.2924 17.7466 22.0591 17.9554C21.8257 18.1642 21.5627 18.3198 21.27 18.422C20.9815 18.5243 20.6909 18.5755 20.3982 18.5755H17.6554V16.9838H20.4427C20.4936 16.9838 20.5657 16.9774 20.6591 16.9646C20.7567 16.9476 20.8521 16.9071 20.9454 16.8432C21.043 16.7792 21.1279 16.6833 21.2 16.5555C21.2721 16.4234 21.3082 16.2444 21.3082 16.0185C21.3082 15.9248 21.2997 15.8119 21.2827 15.6798C21.27 15.5434 21.2509 15.3985 21.2254 15.2451C21.2 15.0917 21.1703 14.9361 21.1364 14.7784C21.1067 14.6165 21.077 14.4652 21.0473 14.3246C21.0176 14.1797 20.9879 14.0497 20.9582 13.9347C20.9285 13.8153 20.9051 13.7237 20.8882 13.6598L22.3836 13.2059ZM21.7854 11.9595L20.7164 10.8728L21.7727 9.77329L22.8673 10.8728L21.7854 11.9595ZM19.1191 11.9658L18.05 10.8792L19.1 9.77969L20.1945 10.8792L19.1191 11.9658Z"
        fill="#FDFDFD"
      />
      <path
        d="M3.09273 18.5755C2.62606 18.5755 2.22515 18.5457 1.89 18.486C1.55485 18.4306 1.27273 18.3475 1.04364 18.2367C0.814546 18.1217 0.63 17.9768 0.49 17.8021C0.354242 17.6273 0.250303 17.4228 0.178182 17.1884C0.10606 16.954 0.0572727 16.6898 0.0318182 16.3958C0.0106061 16.0974 0 15.7693 0 15.4113V9.35786H1.58455V15.4113C1.58455 15.7523 1.59515 16.025 1.61636 16.2296C1.64182 16.4341 1.70333 16.5939 1.80091 16.709C1.90273 16.8198 2.05333 16.8944 2.25273 16.9327C2.45636 16.9668 2.73636 16.9838 3.09273 16.9838V18.5755Z"
        fill="#FDFDFD"
      />
      <path
        d="M7.55985 17.3674C7.59803 17.3674 7.65743 17.361 7.73803 17.3482C7.82288 17.3312 7.90773 17.2843 7.99258 17.2076C8.07743 17.1309 8.15167 17.0137 8.21531 16.856C8.28318 16.6941 8.31712 16.4682 8.31712 16.1784C8.31712 16.0676 8.29591 15.927 8.25349 15.7565C8.21531 15.5818 8.14531 15.4135 8.04349 15.2515C7.94591 15.0853 7.81227 14.9447 7.64258 14.8296C7.47712 14.7103 7.26712 14.6507 7.01258 14.6507C6.79197 14.6507 6.61167 14.7167 6.47167 14.8488C6.33167 14.9809 6.21288 15.145 6.11531 15.341C6.02197 15.5371 5.94137 15.7501 5.87349 15.9803C5.80985 16.2061 5.73985 16.4128 5.66349 16.6003C5.82046 16.6898 5.98591 16.7814 6.15985 16.8752C6.33803 16.9647 6.51197 17.0456 6.68167 17.1181C6.85137 17.1905 7.01046 17.2502 7.15894 17.2971C7.31167 17.3439 7.4453 17.3674 7.55985 17.3674ZM7.01258 13.0654C7.45803 13.0654 7.84621 13.1485 8.17712 13.3147C8.51228 13.4809 8.78803 13.7046 9.0044 13.9859C9.225 14.2629 9.38834 14.5846 9.4944 14.9511C9.6047 15.3176 9.65985 15.7011 9.65985 16.1017C9.65985 16.5449 9.62167 16.922 9.54531 17.2331C9.46894 17.5442 9.36712 17.8021 9.23985 18.0066C9.11682 18.2112 8.9747 18.371 8.81349 18.486C8.65652 18.6053 8.49743 18.6927 8.33621 18.7481C8.17924 18.8078 8.02652 18.844 7.87803 18.8568C7.72955 18.8738 7.60227 18.8823 7.49621 18.8823C7.28409 18.8823 7.08258 18.861 6.89167 18.8184C6.70076 18.7801 6.50561 18.7225 6.30621 18.6458C6.11106 18.5734 5.90743 18.4839 5.69531 18.3774C5.48318 18.2666 5.25197 18.143 5.00167 18.0066C4.81076 18.2112 4.605 18.3582 4.3844 18.4477C4.16803 18.5329 3.91349 18.5755 3.62076 18.5755H2.83803L2.82531 16.9838H3.62076C3.71409 16.9838 3.7947 16.9561 3.86258 16.9007C3.9347 16.8453 3.99834 16.7686 4.05349 16.6706C4.11288 16.5683 4.16591 16.4469 4.21258 16.3063C4.26349 16.1614 4.3144 16.0016 4.36531 15.8268C4.45015 15.52 4.55197 15.2047 4.67076 14.8808C4.78955 14.5526 4.94652 14.2543 5.14167 13.9859C5.34106 13.7174 5.59137 13.4979 5.89258 13.3275C6.19379 13.1527 6.56712 13.0654 7.01258 13.0654Z"
        fill="#FDFDFD"
      />
      <path
        d="M8.40625 9.96049C8.06685 9.96049 7.74019 9.92001 7.42625 9.83904C7.11231 9.75807 6.81534 9.64301 6.53534 9.49386C6.25958 9.34471 6.00291 9.16146 5.76534 8.94412C5.53201 8.72678 5.32837 8.48175 5.15443 8.20901C4.95079 7.87661 4.79382 7.50586 4.68352 7.09676C4.57322 6.69191 4.51807 6.26789 4.51807 5.82469C4.51807 5.54343 4.53504 5.27069 4.56898 5.00648C4.60291 4.74227 4.65595 4.47166 4.72807 4.19466C4.80443 3.91766 4.90201 3.62788 5.02079 3.32531C5.14382 3.02275 5.29231 2.69035 5.46625 2.32812L6.89807 3.01209C6.74534 3.32318 6.61807 3.60231 6.51625 3.84948C6.41443 4.09665 6.3317 4.33103 6.26807 4.55263C6.20443 4.76997 6.15776 4.98091 6.12807 5.18547C6.10261 5.38576 6.08988 5.5967 6.08988 5.8183C6.08988 6.10808 6.12595 6.38508 6.19807 6.64929C6.27019 6.91777 6.36988 7.15855 6.49716 7.37162C6.70079 7.67419 6.96807 7.91497 7.29898 8.09395C7.63413 8.2772 8.00322 8.36882 8.40625 8.36882H9.69807C10.1478 8.36882 10.5126 8.32194 10.7926 8.22819C11.0769 8.13443 11.2975 8.0002 11.4544 7.82547C11.6114 7.65501 11.7175 7.44833 11.7726 7.20542C11.832 6.96252 11.8617 6.69404 11.8617 6.4V2.098H13.4462V6.4C13.4462 7.58896 13.1323 8.47962 12.5044 9.07197C11.8808 9.66432 10.9453 9.96049 9.69807 9.96049H8.40625ZM8.27898 1.5994L9.42443 0.436005L10.5953 1.61218L9.43716 2.77558L8.27898 1.5994Z"
        fill="#FDFDFD"
      />
    </svg>
  );
  const tomanSvg = (
    <svg
      width="23"
      height="22"
      viewBox="0 0 23 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.1827 20.0164C12.5221 20.0164 12.8233 20.0037 13.0864 19.9781C13.3536 19.9568 13.5891 19.9227 13.7927 19.8758C14.0006 19.8332 14.1809 19.7757 14.3336 19.7032C14.4906 19.635 14.6264 19.5519 14.7409 19.4539C14.9191 19.309 15.0527 19.1407 15.1418 18.9489C15.2351 18.7572 15.2903 18.4993 15.3073 18.1755H14.3273C14.1151 18.1755 13.8988 18.1584 13.6782 18.1243C13.4576 18.0902 13.2454 18.0327 13.0418 17.9517C12.8382 17.8665 12.6451 17.7578 12.4627 17.6257C12.2845 17.4936 12.1276 17.3317 11.9918 17.1399C11.8603 16.9439 11.7542 16.7138 11.6736 16.4495C11.5973 16.1853 11.5591 15.8828 11.5591 15.5418C11.5591 15.2478 11.5845 14.9878 11.6354 14.762C11.6864 14.5319 11.75 14.3294 11.8264 14.1547C11.907 13.98 11.9961 13.8287 12.0936 13.7009C12.1912 13.5688 12.2845 13.4537 12.3736 13.3557C12.6282 13.1 12.9167 12.904 13.2391 12.7676C13.5615 12.627 13.9094 12.5567 14.2827 12.5567C14.7451 12.5567 15.1397 12.6376 15.4664 12.7996C15.7973 12.9572 16.0667 13.1767 16.2745 13.458C16.4867 13.7392 16.6415 14.0738 16.7391 14.4615C16.8367 14.8451 16.8854 15.2627 16.8854 15.7144V16.5838H17.9673V18.1755H16.8791C16.8621 18.7593 16.7582 19.2515 16.5673 19.6521C16.3806 20.0527 16.1006 20.4021 15.7273 20.7004C15.5321 20.8538 15.32 20.9859 15.0909 21.0967C14.8618 21.2118 14.6051 21.3077 14.3209 21.3844C14.0367 21.4611 13.7185 21.5165 13.3664 21.5506C13.0185 21.5889 12.6239 21.6081 12.1827 21.6081V20.0164ZM14.2827 14.1483C13.9221 14.1483 13.6357 14.2613 13.4236 14.4871C13.2115 14.713 13.1054 15.0646 13.1054 15.5418C13.1054 15.7294 13.1415 15.8892 13.2136 16.0213C13.29 16.1534 13.3854 16.262 13.5 16.3473C13.6188 16.4282 13.7503 16.4879 13.8945 16.5263C14.0388 16.5646 14.183 16.5838 14.3273 16.5838H15.3073V15.7144C15.3073 15.4715 15.2882 15.2648 15.25 15.0944C15.2118 14.9197 15.1609 14.7748 15.0973 14.6597C15.0379 14.5446 14.9679 14.453 14.8873 14.3848C14.8109 14.3167 14.7345 14.2655 14.6582 14.2314C14.5861 14.1973 14.5161 14.176 14.4482 14.1675C14.3803 14.1547 14.3251 14.1483 14.2827 14.1483Z"
        fill="#585858"
      />
      <path
        d="M22.3836 12.806C22.3921 12.8358 22.4091 12.9061 22.4345 13.0169C22.4642 13.1277 22.4961 13.2641 22.53 13.426C22.5639 13.5837 22.5979 13.7605 22.6318 13.9566C22.67 14.1526 22.7039 14.3507 22.7336 14.551C22.7676 14.7471 22.793 14.9388 22.81 15.1263C22.8312 15.3139 22.8418 15.4779 22.8418 15.6186C22.8418 16.0575 22.7697 16.4389 22.6254 16.7628C22.4812 17.0824 22.2924 17.3466 22.0591 17.5554C21.8257 17.7642 21.5627 17.9198 21.27 18.022C20.9815 18.1243 20.6909 18.1755 20.3982 18.1755H17.6554V16.5838H20.4427C20.4936 16.5838 20.5657 16.5774 20.6591 16.5646C20.7567 16.5476 20.8521 16.5071 20.9454 16.4432C21.043 16.3792 21.1279 16.2833 21.2 16.1555C21.2721 16.0234 21.3082 15.8444 21.3082 15.6186C21.3082 15.5248 21.2997 15.4119 21.2827 15.2798C21.27 15.1434 21.2509 14.9985 21.2254 14.8451C21.2 14.6917 21.1703 14.5361 21.1364 14.3784C21.1067 14.2165 21.077 14.0652 21.0473 13.9246C21.0176 13.7797 20.9879 13.6497 20.9582 13.5347C20.9285 13.4153 20.9051 13.3237 20.8882 13.2598L22.3836 12.806ZM21.7854 11.5595L20.7164 10.4728L21.7727 9.3733L22.8673 10.4728L21.7854 11.5595ZM19.1191 11.5658L18.05 10.4792L19.1 9.37969L20.1945 10.4792L19.1191 11.5658Z"
        fill="#585858"
      />
      <path
        d="M3.09273 18.1755C2.62606 18.1755 2.22515 18.1457 1.89 18.086C1.55485 18.0306 1.27273 17.9475 1.04364 17.8367C0.814545 17.7217 0.63 17.5768 0.49 17.4021C0.354242 17.2273 0.250303 17.0228 0.178182 16.7884C0.10606 16.554 0.0572727 16.2898 0.0318182 15.9958C0.0106061 15.6975 0 15.3693 0 15.0113V8.95786H1.58455V15.0113C1.58455 15.3523 1.59515 15.625 1.61636 15.8296C1.64182 16.0341 1.70333 16.1939 1.80091 16.309C1.90273 16.4198 2.05333 16.4944 2.25273 16.5327C2.45636 16.5668 2.73636 16.5838 3.09273 16.5838V18.1755Z"
        fill="#585858"
      />
      <path
        d="M7.55985 16.9674C7.59803 16.9674 7.65743 16.961 7.73803 16.9482C7.82288 16.9312 7.90773 16.8843 7.99258 16.8076C8.07743 16.7309 8.15167 16.6137 8.21531 16.456C8.28318 16.2941 8.31712 16.0682 8.31712 15.7784C8.31712 15.6676 8.29591 15.527 8.25349 15.3565C8.2153 15.1818 8.14531 15.0135 8.04349 14.8515C7.94591 14.6853 7.81227 14.5447 7.64258 14.4296C7.47712 14.3103 7.26712 14.2507 7.01258 14.2507C6.79197 14.2507 6.61167 14.3167 6.47167 14.4488C6.33167 14.5809 6.21288 14.745 6.11531 14.941C6.02197 15.1371 5.94137 15.3501 5.87349 15.5803C5.80985 15.8061 5.73985 16.0128 5.66349 16.2003C5.82046 16.2898 5.98591 16.3814 6.15985 16.4752C6.33803 16.5647 6.51197 16.6456 6.68167 16.7181C6.85137 16.7905 7.01046 16.8502 7.15894 16.8971C7.31167 16.9439 7.44531 16.9674 7.55985 16.9674ZM7.01258 12.6654C7.45803 12.6654 7.84621 12.7485 8.17712 12.9147C8.51228 13.0809 8.78803 13.3046 9.0044 13.5859C9.225 13.8629 9.38834 14.1846 9.4944 14.5511C9.6047 14.9176 9.65985 15.3011 9.65985 15.7017C9.65985 16.1449 9.62167 16.5221 9.54531 16.8331C9.46894 17.1442 9.36712 17.4021 9.23985 17.6066C9.11682 17.8112 8.9747 17.971 8.81349 18.086C8.65652 18.2054 8.49743 18.2927 8.33621 18.3481C8.17924 18.4078 8.02652 18.444 7.87803 18.4568C7.72955 18.4738 7.60227 18.4824 7.49621 18.4824C7.28409 18.4824 7.08258 18.461 6.89167 18.4184C6.70076 18.3801 6.50561 18.3225 6.30621 18.2458C6.11106 18.1734 5.90743 18.0839 5.69531 17.9774C5.48318 17.8666 5.25197 17.743 5.00167 17.6066C4.81076 17.8112 4.605 17.9582 4.3844 18.0477C4.16803 18.1329 3.91349 18.1755 3.62076 18.1755H2.83803L2.82531 16.5838H3.62076C3.71409 16.5838 3.7947 16.5561 3.86258 16.5007C3.9347 16.4453 3.99834 16.3686 4.05349 16.2706C4.11288 16.1683 4.16591 16.0469 4.21258 15.9063C4.26349 15.7614 4.3144 15.6016 4.36531 15.4268C4.45015 15.12 4.55197 14.8047 4.67076 14.4808C4.78955 14.1527 4.94652 13.8543 5.14167 13.5859C5.34106 13.3174 5.59137 13.0979 5.89258 12.9275C6.19379 12.7527 6.56712 12.6654 7.01258 12.6654Z"
        fill="#585858"
      />
      <path
        d="M8.40625 9.5605C8.06685 9.5605 7.74019 9.52002 7.42625 9.43905C7.11231 9.35808 6.81534 9.24302 6.53534 9.09386C6.25958 8.94471 6.00291 8.76147 5.76534 8.54413C5.53201 8.32679 5.32837 8.08175 5.15443 7.80902C4.95079 7.47662 4.79382 7.10587 4.68352 6.69676C4.57322 6.29192 4.51807 5.86789 4.51807 5.4247C4.51807 5.14344 4.53504 4.8707 4.56898 4.60649C4.60291 4.34227 4.65595 4.07167 4.72807 3.79467C4.80443 3.51767 4.90201 3.22789 5.02079 2.92532C5.14382 2.62275 5.29231 2.29035 5.46625 1.92812L6.89807 2.6121C6.74534 2.92319 6.61807 3.20232 6.51625 3.44949C6.41443 3.69665 6.3317 3.93104 6.26807 4.15263C6.20443 4.36997 6.15776 4.58092 6.12807 4.78547C6.10261 4.98576 6.08988 5.19671 6.08988 5.41831C6.08988 5.70809 6.12595 5.98509 6.19807 6.2493C6.27019 6.51778 6.36988 6.75855 6.49716 6.97163C6.70079 7.2742 6.96807 7.51497 7.29898 7.69396C7.63413 7.8772 8.00322 7.96882 8.40625 7.96882H9.69807C10.1478 7.96882 10.5126 7.92195 10.7926 7.82819C11.0769 7.73444 11.2975 7.6002 11.4544 7.42548C11.6114 7.25502 11.7175 7.04834 11.7726 6.80543C11.832 6.56252 11.8617 6.29405 11.8617 6V1.698H13.4462V6C13.4462 7.18897 13.1323 8.07962 12.5044 8.67197C11.8808 9.26433 10.9453 9.5605 9.69807 9.5605H8.40625ZM8.27898 1.1994L9.42443 0.0360107L10.5953 1.21219L9.43716 2.37558L8.27898 1.1994Z"
        fill="#585858"
      />
    </svg>
  );
  const plusSvg = (
    <svg
      width="21"
      height="19"
      viewBox="0 0 21 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.5 0.5C11.2249 0.5 11.8125 1.08763 11.8125 1.8125V9.6875H19.6875C20.4124 9.6875 21 10.2751 21 11C21 11.7249 20.4124 12.3125 19.6875 12.3125H11.8125V20.1875C11.8125 20.9124 11.2249 21.5 10.5 21.5C9.77513 21.5 9.1875 20.9124 9.1875 20.1875V12.3125H1.3125C0.587626 12.3125 0 11.7249 0 11C0 10.2751 0.587626 9.6875 1.3125 9.6875H9.1875V1.8125C9.1875 1.08763 9.77513 0.5 10.5 0.5Z"
        fill="#A698CF"
      />
    </svg>
  );
  const minusSvg = (
    <svg
      width="21"
      height="4"
      viewBox="0 0 21 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 2.04999C0 1.35963 0.559644 0.799988 1.25 0.799988H19.25C19.9404 0.799988 20.5 1.35963 20.5 2.04999C20.5 2.74034 19.9404 3.29999 19.25 3.29999H1.25C0.559644 3.29999 0 2.74034 0 2.04999Z"
        fill="#A698CF"
      />
    </svg>
  );
  const trashSvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      style={{ fill: "rgba(244, 88, 88, 1)" }}
    >
      <path d="M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z"></path>
      <path d="M9 10h2v8H9zm4 0h2v8h-2z"></path>
    </svg>
  );
  const circleLoadingPlusSvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: "absolute",
        margin: "auto",
        background: "transparent",
        display: "block",
        shapeRendering: "auto",
        top: 5,
        right: 4,
      }}
      width="30px"
      height="30px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <circle
        cx="50"
        cy="50"
        r="32"
        strokeWidth="8"
        stroke="#a698cf"
        strokeDasharray="50.26548245743669 50.26548245743669"
        fill="none"
        strokeLinecap="round"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          repeatCount="indefinite"
          dur="1s"
          keyTimes="0;1"
          values="0 50 50;360 50 50"
        />
      </circle>
    </svg>
  );
  const circleLoadingMinusSvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: "absolute",
        margin: "auto",
        background: "transparent",
        display: "block",
        shapeRendering: "auto",
        top: 5,
        left: 4,
      }}
      width="30px"
      height="30px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <circle
        cx="50"
        cy="50"
        r="32"
        strokeWidth="8"
        stroke="#a698cf"
        strokeDasharray="50.26548245743669 50.26548245743669"
        fill="none"
        strokeLinecap="round"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          repeatCount="indefinite"
          dur="1s"
          keyTimes="0;1"
          values="0 50 50;360 50 50"
        />
      </circle>
    </svg>
  );
  const loadingIoSvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{
        background: "transparent",
        display: "block",
        shapeRendering: "auto",
        animationPlayState: "running",
        animationDelay: "0s",
        paddingTop: "50px",
        marginTop: "-50px",
        position: "absolute",
        top: 0,
        left: -30,
      }}
      width="200px"
      height="110px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <circle
        cx="84"
        cy="50"
        r="10"
        fill={circleColor}
        style={{ animationPlayState: "running", animationDelay: "0s" }}
      >
        <animate
          attributeName="r"
          repeatCount="indefinite"
          dur="0.25s"
          calcMode="spline"
          keyTimes="0;1"
          values="10;0"
          keySplines="0 0.5 0.5 1"
          begin="0s"
          style={{ animationPlayState: "running", animationDelay: "0s" }}
        />
        <animate
          attributeName="fill"
          repeatCount="indefinite"
          dur="1s"
          calcMode="discrete"
          keyTimes="0;0.25;0.5;0.75;1"
          values={`${circleColor};${circleColor};${circleColor};${circleColor};${circleColor}`}
          begin="0s"
          style={{ animationPlayState: "running", animationDelay: "0s" }}
        />
      </circle>
      <circle
        cx="16"
        cy="50"
        r="10"
        fill={circleColor}
        style={{ animationPlayState: "running", animationDelay: "0s" }}
      >
        <animate
          attributeName="r"
          repeatCount="indefinite"
          dur="1s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="0;0;10;10;10"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="0s"
          style={{ animationPlayState: "running", animationDelay: "0s" }}
        />
        <animate
          attributeName="cx"
          repeatCount="indefinite"
          dur="1s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="16;16;16;50;84"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="0s"
          style={{ animationPlayState: "running", animationDelay: "0s" }}
        />
      </circle>
      <circle
        cx="50"
        cy="50"
        r="10"
        fill={circleColor}
        style={{ animationPlayState: "running", animationDelay: "0s" }}
      >
        <animate
          attributeName="r"
          repeatCount="indefinite"
          dur="1s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="0;0;10;10;10"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-0.25s"
          style={{ animationPlayState: "running", animationDelay: "0s" }}
        />
        <animate
          attributeName="cx"
          repeatCount="indefinite"
          dur="1s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="16;16;16;50;84"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-0.25s"
          style={{ animationPlayState: "running", animationDelay: "0s" }}
        />
      </circle>
      <circle
        cx="84"
        cy="50"
        r="10"
        fill={circleColor}
        style={{ animationPlayState: "running", animationDelay: "0s" }}
      >
        <animate
          attributeName="r"
          repeatCount="indefinite"
          dur="1s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="0;0;10;10;10"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-0.5s"
          style={{ animationPlayState: "running", animationDelay: "0s" }}
        />
        <animate
          attributeName="cx"
          repeatCount="indefinite"
          dur="1s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="16;16;16;50;84"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-0.5s"
          style={{ animationPlayState: "running", animationDelay: "0s" }}
        />
      </circle>
      <circle
        cx="16"
        cy="50"
        r="10"
        fill={circleColor}
        style={{ animationPlayState: "running", animationDelay: "0s" }}
      >
        <animate
          attributeName="r"
          repeatCount="indefinite"
          dur="1s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="0;0;10;10;10"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-0.75s"
          style={{ animationPlayState: "running", animationDelay: "0s" }}
        />
        <animate
          attributeName="cx"
          repeatCount="indefinite"
          dur="1s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="16;16;16;50;84"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-0.75s"
          style={{ animationPlayState: "running", animationDelay: "0s" }}
        />
      </circle>
    </svg>
  );
  const triangleSvg = (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="9.52295"
        width="13.537"
        height="13.4676"
        transform="rotate(45 9.52295 0)"
        fill="#A698CF"
      />
    </svg>
  );

  async function shoppingCartPlusHandler(code) {
    if (cookieVal) {
      setShowPlusLoading(code);
      const userMobile = cookieVal;
      const response = await fetch("/api/shoppingCartPlus", {
        method: "POST",
        body: JSON.stringify({ userMobile, code }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();
      dispatch(addProduct(result));
      setShowPlusLoading("");
    } else {
      router.push("/user/login");
    }
  }

  async function shoppingCartMinusHandler(code) {
    if (cookieVal) {
      setShowMinusLoading(code);
      const userMobile = cookieVal;
      const response = await fetch("/api/shoppingCartMinus", {
        method: "POST",
        body: JSON.stringify({ userMobile, code }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();
      dispatch(addProduct(result));
      setShowMinusLoading("");
    } else {
      router.push("/user/login");
    }
  }

  async function shoppingCartRemoveHandler() {
    if (cookieVal) {
      setShowLoadinIoSvg(true);
      const userMobile = cookieVal;
      const code = showTrashForm;
      const response = await fetch("/api/removeFromCart", {
        method: "POST",
        body: JSON.stringify({ userMobile, code }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();
      dispatch(addProduct(result));
      setShowLoadinIoSvg(false);
      setShowTrashForm("");
    } else {
      router.push("/user/login");
    }
  }

  function redirectToShoppingPageHandler() {
    setShowLoading(true);
    router.push("/checkout/shopping");
  }

  return (
    <div className={styles.cart_child_container}>
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
      <div className={styles.cart_child}>
        <div className={styles.cart_product_right_side_container}>
          {shoppingCartProducts.length !== 0 ? (
            shoppingCartProducts.map((item) => {
              return (
                <div
                  key={item.id}
                  className={styles.cart_child_product_container}
                  onMouseOver={() => setProductCode(item.code)}
                  onMouseOut={() => setProductCode("")}
                >
                  <div className={styles.cart_child_product_image_container}>
                    <div>
                      <Image
                        alt=""
                        layout="responsive"
                        width="100"
                        height="100"
                        src={item.src}
                        draggable={false}
                      />
                    </div>
                  </div>
                  <div>
                    <p className={styles.cart_product_title}>{item.title}</p>
                    <div className={styles.cart_product_guarantee}>
                      {guaranteeSvg}
                      <p>{item.guarantee}</p>
                    </div>
                    <div className={styles.cart_product_color}>
                      <div>
                        <span
                          style={{
                            backgroundColor: item.colors.hex,
                            border:
                              item.colors.hex == "#FDFDFD"
                                ? "1px solid rgba(180, 180, 180, 0.6)"
                                : "none",
                          }}
                        ></span>
                      </div>
                      <p>رنگ {item.colors.color}</p>
                    </div>
                    <div className={styles.cart_product_price}>
                      <p>
                        {item.finalPrice
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, "٬")}
                      </p>
                      {tomanSvg}
                    </div>
                  </div>
                  <div className={styles.cart_product_numbers_part}>
                    <button
                      className={
                        productCode == item.code
                          ? `${styles.trash_btn} ${styles.show}`
                          : styles.trash_btn
                      }
                      onClick={() => setShowTrashForm(item.code)}
                    >
                      {trashSvg}
                    </button>
                    <div>
                      <button
                        onClick={() =>
                          showPlusLoading !== "" || item.stock == item.number
                            ? undefined
                            : shoppingCartPlusHandler(item.code)
                        }
                      >
                        {showPlusLoading == item.code
                          ? circleLoadingPlusSvg
                          : plusSvg}
                      </button>
                      <p>{item.number}</p>
                      <button
                        onClick={() =>
                          showMinusLoading !== "" || item.number == 1
                            ? undefined
                            : shoppingCartMinusHandler(item.code)
                        }
                      >
                        {showMinusLoading == item.code
                          ? circleLoadingMinusSvg
                          : minusSvg}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className={styles.zero_cart_container}>
              <div>
                <Image
                  alt=""
                  layout="responsive"
                  width="100"
                  height="100"
                  src="/images/cart/zero-cart.png"
                />
              </div>
              <div>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="9.52344"
                    width="13.537"
                    height="13.4676"
                    transform="rotate(45 9.52344 0)"
                    fill="#A698CF"
                  />
                </svg>
                <p>اولین سفارش خود را ثبت کنید</p>
              </div>
            </div>
          )}
        </div>
        <div className={styles.cart_product_left_side_container}>
          <div className={styles.cart_product_left_side}>
            <div className={styles.cart_product_left_side_part1}>
              <p>جمع قیمت کالاها</p>
              <div>
                <p>
                  {finalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "٬")}
                </p>
                {tomanSvg}
              </div>
            </div>
            <div className={styles.cart_product_left_side_part2}>
              <p>هزینه ارسال</p>
              <div>
                <p>23٬500</p>
                {tomanSvg}
              </div>
            </div>
            <div className={styles.cart_product_left_side_part3}>
              <p>قیمت نهایی</p>
              <div>
                <p>
                  {(finalPrice + 23500)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, "٬")}
                </p>
                {whiteToman}
              </div>
            </div>
            <div
              className={styles.cart_product_left_side_part4}
              onClick={() =>
                cartProductLoad ? redirectToShoppingPageHandler() : undefined
              }
            >
              <p>ادامه پرداخت</p>
            </div>
          </div>
          <div className={styles.cart_product_left_side_importants}>
            <p className={styles.cart_product_left_side_importants_title}>
              قبل از پرداخت، به نکات زیر دقت کنید:
            </p>
            <div>
              {triangleSvg}
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از.
              </p>
            </div>
            <div>
              {triangleSvg}
              <p>لورم ایپسوم متن ساختگی با تولید سادگی</p>
            </div>
            <div>
              {triangleSvg}
              <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از</p>
            </div>
            <div>
              {triangleSvg}
              <p>لورم ایپسوم متن ساختگی با تولید</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          showTrashForm !== ""
            ? `${styles.trash_form_container} ${styles.show_trash_form}`
            : styles.trash_form_container
        }
      >
        <div
          className={
            showTrashForm !== ""
              ? `${styles.trash_form} ${styles.show_trash_form}`
              : styles.trash_form
          }
        >
          <div>
            <div>
              <Image
                alt=""
                layout="responsive"
                width="100"
                height="100"
                src="/images/cart/icons8-trash-96.png?q=100"
              />
            </div>
          </div>
          <p>آیا از حذف این محصول اطمینان دارید؟</p>
          <div>
            <button onClick={() => setShowTrashForm("")}>لغو</button>
            <button
              onClick={() => shoppingCartRemoveHandler()}
              onMouseOver={() => setCircleColor("#ffffff")}
              onMouseOut={() => setCircleColor("#25ac9e")}
            >
              {showLoadinIoSvg ? loadingIoSvg : "بله حذف کن"}
            </button>
          </div>
        </div>
      </div>
      <RecommendProducts />
    </div>
  );
}

export default CartChild;
