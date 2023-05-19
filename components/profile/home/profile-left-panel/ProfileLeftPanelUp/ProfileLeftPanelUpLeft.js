import styles from "./ProfileLeftPanelUpLeft.module.css";

function ProfileLeftPanelUpLeft(props) {
  const purchases = props.purchases;

  var currentOrdersCounter = 0;
  var returnedOrdersCounter = 0;
  var deliveredOrdersCounter = 0;

  for (var i = 0; i < purchases.length; i++) {
    if (!purchases[i].delivered) {
      currentOrdersCounter += 1;
    } else if (purchases[i].delivered) {
      deliveredOrdersCounter += 1;
    }

    if (purchases[i].returned) {
      returnedOrdersCounter += 1;
    }
  }

  const currentOrderSvg = (
    <svg
      width="30"
      height="21"
      viewBox="0 0 30 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 10.5C0 9.67157 0.671573 9 1.5 9H28.5C29.3284 9 30 9.67157 30 10.5C30 11.3284 29.3284 12 28.5 12H1.5C0.671573 12 0 11.3284 0 10.5Z"
        fill="#FDFDFD"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 1.5C0 0.671573 0.671573 0 1.5 0H19.5C20.3284 0 21 0.671573 21 1.5C21 2.32843 20.3284 3 19.5 3H1.5C0.671573 3 0 2.32843 0 1.5ZM9 19.5C9 18.6716 9.67157 18 10.5 18H28.5C29.3284 18 30 18.6716 30 19.5C30 20.3284 29.3284 21 28.5 21H10.5C9.67157 21 9 20.3284 9 19.5Z"
        fill="#FDFDFD"
      />
    </svg>
  );
  const returnedOrderSvg = (
    <svg
      width="27"
      height="31"
      viewBox="0 0 27 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.5905 5.86767C15.4705 4.98891 13.1196 4.83451 10.9028 5.42843C8.68599 6.02235 6.72721 7.33138 5.33044 9.15236C3.93367 10.9733 3.17701 13.2045 3.17791 15.4994C3.17823 16.3217 2.5119 16.9886 1.68963 16.9889C0.867359 16.9892 0.200517 16.3229 0.200196 15.5006C0.199048 12.5499 1.17189 9.68134 2.96773 7.34007C4.76358 4.9988 7.28201 3.31577 10.1322 2.55216C12.9824 1.78855 16.0049 1.98706 18.7307 3.1169C21.4565 4.24674 23.7332 6.24471 25.2074 8.80075C25.6182 9.51304 25.3738 10.4235 24.6615 10.8343C23.9492 11.2451 23.0388 11.0007 22.628 10.2884C21.4814 8.30041 19.7106 6.74644 17.5905 5.86767Z"
        fill="#FDFDFD"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.5101 14.0112C26.3324 14.0108 26.9992 14.6772 26.9996 15.4994C27.0007 18.4501 26.0279 21.3187 24.232 23.66C22.4362 26.0012 19.9177 27.6843 17.0676 28.4479C14.2174 29.2115 11.1949 29.013 8.46903 27.8831C5.74322 26.7533 3.46655 24.7553 1.99235 22.1993C1.58154 21.487 1.82593 20.5765 2.53823 20.1657C3.25052 19.7549 4.16098 19.9993 4.5718 20.7116C5.7184 22.6996 7.48914 24.2536 9.60921 25.1324C11.7293 26.0111 14.0802 26.1655 16.297 25.5716C18.5138 24.9777 20.4725 23.6687 21.8693 21.8477C23.2661 20.0267 24.0227 17.7956 24.0218 15.5006C24.0215 14.6783 24.6878 14.0115 25.5101 14.0112Z"
        fill="#FDFDFD"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.022 0.61145C24.8443 0.61145 25.5109 1.27803 25.5109 2.10031V9.54458C25.5109 10.3669 24.8443 11.0334 24.022 11.0334H16.5777C15.7555 11.0334 15.0889 10.3669 15.0889 9.54458C15.0889 8.72231 15.7555 8.05573 16.5777 8.05573H22.5331V2.10031C22.5331 1.27803 23.1997 0.61145 24.022 0.61145Z"
        fill="#FDFDFD"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.69043 21.4554C1.69043 20.6332 2.35701 19.9666 3.17929 19.9666H10.6236C11.4458 19.9666 12.1124 20.6332 12.1124 21.4554C12.1124 22.2777 11.4458 22.9443 10.6236 22.9443H4.66814V28.8997C4.66814 29.722 4.00156 30.3886 3.17929 30.3886C2.35701 30.3886 1.69043 29.722 1.69043 28.8997V21.4554Z"
        fill="#FDFDFD"
      />
    </svg>
  );
  const deliverySvg = (
    <svg
      width="30"
      height="25"
      viewBox="0 0 30 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.87868 1.37868C1.44129 0.816071 2.20435 0.5 3 0.5H21C21.8284 0.5 22.5 1.17157 22.5 2C22.5 2.82843 21.8284 3.5 21 3.5L3 3.5V21.5H21V20C21 19.1716 21.6716 18.5 22.5 18.5C23.3284 18.5 24 19.1716 24 20V21.5C24 22.2956 23.6839 23.0587 23.1213 23.6213C22.5587 24.1839 21.7956 24.5 21 24.5H3C2.20435 24.5 1.44129 24.1839 0.87868 23.6213C0.316069 23.0587 0 22.2956 0 21.5V3.5C0 2.70435 0.316071 1.94129 0.87868 1.37868Z"
        fill="#FDFDFD"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.5 2C7.5 1.17157 8.17157 0.5 9 0.5H15C15.8284 0.5 16.5 1.17157 16.5 2V11C16.5 11.5199 16.2308 12.0027 15.7886 12.276C15.3464 12.5493 14.7942 12.5741 14.3292 12.3416L12 11.1771L9.67082 12.3416C9.20584 12.5741 8.65363 12.5493 8.2114 12.276C7.76918 12.0027 7.5 11.5199 7.5 11V2ZM10.5 3.5V8.57295L11.3292 8.15836C11.7515 7.94721 12.2485 7.94721 12.6708 8.15836L13.5 8.57295V3.5H10.5ZM21 8C21 7.17157 21.6716 6.5 22.5 6.5H28.5C29.3284 6.5 30 7.17157 30 8C30 8.82843 29.3284 9.5 28.5 9.5H22.5C21.6716 9.5 21 8.82843 21 8ZM19.5 14C19.5 13.1716 20.1716 12.5 21 12.5H28.5C29.3284 12.5 30 13.1716 30 14C30 14.8284 29.3284 15.5 28.5 15.5H21C20.1716 15.5 19.5 14.8284 19.5 14Z"
        fill="#FDFDFD"
      />
    </svg>
  );

  return (
    <div className={styles.profile_left_panel_upside_left_container}>
      <p className={styles.profile_left_panel_upside_left_title}>
        آمار کلی سفارشات
      </p>
      <div className={styles.profile_left_panel_upside_left_current_orders}>
        {currentOrderSvg}
        <p>{currentOrdersCounter}</p>
        <p>سفارش جاری</p>
      </div>
      <div className={styles.profile_left_panel_upside_left_returned_orders}>
        {returnedOrderSvg}
        <p>{returnedOrdersCounter}</p>
        <p>مرجوعی کالا</p>
      </div>
      <div className={styles.profile_left_panel_upside_left_delivery}>
        {deliverySvg}
        <p>{deliveredOrdersCounter}</p>
        <p>تحویل کالا</p>
      </div>
    </div>
  );
}

export default ProfileLeftPanelUpLeft;
