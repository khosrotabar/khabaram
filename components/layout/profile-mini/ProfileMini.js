import Link from "next/link";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

import styles from "./ProfileMini.module.css";

import { openProfileHandler } from "../../../redux/openProfile";

function ProfileMini(props) {
  const userName = props.userName;

  const router = useRouter();

  const dispatch = useDispatch();
  const openProfile = useSelector((state) => state.openProfile[0]);

  function logoutHandler() {
    dispatch(openProfileHandler(false));

    Cookies.remove("customer");
    router.push("/user/login");
  }

  return (
    <div
      className={
        openProfile
          ? `${styles.profile_container} ${styles.openProfile}`
          : styles.profile_container
      }
    >
      <Link href="/profile" target="_blank">
        <div className={styles.profile_info}>
          <div className={styles.profile_image}>
            <Image
              alt=""
              width="48"
              height="48"
              src="/images/panels/icons8-user-64.png"
              draggable="false"
            />
          </div>
          <div className={styles.profile_info_container}>
            <div>{userName}</div>
            <div>
              <p>خوش آمدی</p>
              <svg
                width="7"
                height="12"
                viewBox="0 0 7 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.292893 6.70711C-0.0976314 6.31658 -0.0976314 5.68342 0.292893 5.29289L5.29289 0.292893C5.68342 -0.0976317 6.31658 -0.0976317 6.70711 0.292893C7.09763 0.683417 7.09763 1.31658 6.70711 1.70711L2.41421 6L6.70711 10.2929C7.09763 10.6834 7.09763 11.3166 6.70711 11.7071C6.31658 12.0976 5.68342 12.0976 5.29289 11.7071L0.292893 6.70711Z"
                  fill="#FDFDFD"
                />
              </svg>
            </div>
          </div>
        </div>
      </Link>
      <Link href="/profile/orders" target="_blank">
        <div className={styles.profile_orders}>
          <svg
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.7999 20.5003H16.9056M10.457 20.5003H10.5627H10.457Z"
              stroke="#FDFDFD"
              strokeWidth="3.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 2.00032H4.32571C4.57008 1.99434 4.80897 2.07324 5.00172 2.22358C5.19446 2.37392 5.32915 2.58641 5.38285 2.82489L8.15256 14.9186C8.20627 15.1571 8.34096 15.3696 8.5337 15.5199C8.72645 15.6702 8.96534 15.7491 9.20971 15.7432H18.1108C18.3523 15.7502 18.5889 15.6743 18.7813 15.5281C18.9736 15.3819 19.1101 15.1743 19.168 14.9397L21.0286 7.28603"
              stroke="#FDFDFD"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p>سفارش هاش شما</p>
        </div>
      </Link>
      <Link href="/profile/favorites" target="_blank">
        <div className={styles.profile_favorites}>
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
              d="M18.0813 18.7596C17.7931 18.9284 17.466 19.0111 17.1358 18.9988C16.8056 18.9864 16.485 18.8795 16.2092 18.6896C16.1465 18.6465 16.0893 18.5953 16.0388 18.5374L9.98397 11.5869L3.96248 18.5356C3.91146 18.5944 3.8535 18.6463 3.78997 18.69C3.51925 18.876 3.20542 18.9823 2.88161 18.9977C2.55779 19.013 2.23602 18.9368 1.95027 18.7772C1.66451 18.6175 1.42538 18.3802 1.25812 18.0905C1.19086 17.9739 1.16345 17.8676 1.15661 17.841L1.15621 17.8395C1.14514 17.7967 1.13845 17.7598 1.13463 17.7369C1.12682 17.69 1.12181 17.6446 1.11846 17.6102C1.11146 17.5383 1.1058 17.4518 1.10093 17.3607C1.09104 17.1753 1.08216 16.9263 1.07412 16.6406C1.05798 16.0669 1.04446 15.3176 1.03359 14.5717C1.01184 13.0792 1.00046 11.5835 1.00002 11.4957L0.999999 11.4909L1.00001 2.8784C1.00001 2.38022 1.18965 1.90244 1.52721 1.55017C1.86477 1.1979 2.3226 1 2.79998 1L17.1997 1C17.6771 1 18.1349 1.1979 18.4725 1.55017C18.81 1.90244 18.9997 2.38022 18.9997 2.8784L18.9997 11.4533L18.9997 11.4533C19.0019 11.7092 18.9927 13.1471 18.9747 14.5385C18.965 15.2857 18.9526 16.0361 18.9374 16.6109C18.9298 16.8973 18.9214 17.1465 18.912 17.3321C18.9073 17.4234 18.9019 17.5097 18.8953 17.581C18.8921 17.6153 18.8874 17.6596 18.8801 17.7052C18.8766 17.7275 18.8704 17.7629 18.8604 17.8038C18.8603 17.8043 18.8602 17.8047 18.8601 17.8052C18.8538 17.8308 18.8293 17.9307 18.7694 18.0419C18.6075 18.3425 18.3694 18.5908 18.0813 18.7596ZM11.2829 10.2855L17.1248 16.9916C17.1294 16.8668 17.1338 16.7215 17.1381 16.5591C17.1529 15.9977 17.1653 15.2577 17.1749 14.5131C17.1845 13.7694 17.1915 13.0247 17.1956 12.4553C17.1977 12.1705 17.1991 11.9302 17.1998 11.7561C17.2003 11.6104 17.2003 11.5282 17.2003 11.4988C17.2003 11.4898 17.2002 11.4858 17.2003 11.4864C17.1999 11.4754 17.1997 11.4643 17.1997 11.4533L17.1997 2.8784L2.79998 2.8784L2.79998 11.4883C2.80055 11.5916 2.81187 13.0688 2.83335 14.5432C2.84419 15.2868 2.85755 16.0254 2.87331 16.5855C2.8774 16.7307 2.8816 16.8622 2.88589 16.9774L8.83734 10.1096C8.88836 10.0507 8.94633 9.99878 9.00986 9.95512C9.30376 9.75314 9.64794 9.64549 9.99984 9.64549C10.3517 9.64549 10.6959 9.75314 10.9898 9.95512C11.1161 10.0419 11.2146 10.1562 11.2829 10.2855Z"
              fill="#FDFDFD"
              stroke="#FDFDFD"
              strokeWidth="0.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p>لیست علاقه مندی</p>
        </div>
      </Link>
      <button className={styles.profile_logout} onClick={logoutHandler}>
        <p>خروج از حساب</p>
        <svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.5 10C6.5 9.44772 6.94772 9 7.5 9H19.5C20.0523 9 20.5 9.44772 20.5 10C20.5 10.5523 20.0523 11 19.5 11H7.5C6.94772 11 6.5 10.5523 6.5 10Z"
            fill="#FDFDFD"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.2071 5.29289C12.5976 5.68342 12.5976 6.31658 12.2071 6.70711L8.91421 10L12.2071 13.2929C12.5976 13.6834 12.5976 14.3166 12.2071 14.7071C11.8166 15.0976 11.1834 15.0976 10.7929 14.7071L6.79289 10.7071C6.40237 10.3166 6.40237 9.68342 6.79289 9.29289L10.7929 5.29289C11.1834 4.90237 11.8166 4.90237 12.2071 5.29289Z"
            fill="#FDFDFD"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.5 2C6.08172 2 2.5 5.58172 2.5 10C2.5 14.4183 6.08172 18 10.5 18C14.9183 18 18.5 14.4183 18.5 10C18.5 5.58172 14.9183 2 10.5 2ZM0.5 10C0.5 4.47715 4.97715 0 10.5 0C16.0228 0 20.5 4.47715 20.5 10C20.5 15.5228 16.0228 20 10.5 20C4.97715 20 0.5 15.5228 0.5 10Z"
            fill="#FDFDFD"
          />
        </svg>
      </button>
    </div>
  );
}

export default ProfileMini;
