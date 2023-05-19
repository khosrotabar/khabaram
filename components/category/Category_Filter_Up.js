import { useState } from "react";
import { useDispatch } from "react-redux";
import { upSideFilter } from "../../redux/categoryFilter";

import styles from "./Category_Filter_Up.module.css";

function CategoryFilterUp() {
  const dispatch = useDispatch();
  const [Category_Up_Filter_Active, setCategory_Up_filter_active] = useState(5);

  function Category_Up_Filter_Handler(item, filter) {
    setCategory_Up_filter_active(item);
    dispatch(upSideFilter({ upSideFilter: filter }));
  }

  return (
    <div className={styles.category_up}>
      <div className={styles.category_up_title}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 23" fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.27018 1.85072e-06L2.27162 0L17.7298 9.59635e-07C18.1666 0.000560975 18.5941 0.12847 18.9609 0.368424C19.3278 0.608376 19.6185 0.950208 19.7984 1.35301C19.9782 1.75581 20.0396 2.20252 19.9751 2.63969C19.9106 3.07672 19.723 3.4857 19.4349 3.81771C19.4348 3.81781 19.4349 3.81761 19.4349 3.81771L13.4096 10.7822V19.55C13.4096 19.9856 13.1664 20.3838 12.7813 20.5786L8.23522 22.8786C7.88291 23.0568 7.46451 23.0378 7.12944 22.8282C6.79437 22.6187 6.59042 22.2486 6.59042 21.85V10.7822L0.565389 3.818C0.565131 3.8177 0.564874 3.81741 0.564616 3.81711C0.276746 3.4852 0.0893855 3.07645 0.0249282 2.63969C-0.039587 2.20253 0.0217549 1.75581 0.201612 1.35301C0.381469 0.950209 0.672223 0.608377 1.03908 0.368424C1.40593 0.128471 1.83335 0.000560975 2.27018 1.85072e-06ZM1.41924 3.05898L2.27438 2.30153L8.5821 9.59253C8.76349 9.80219 8.86347 10.0714 8.86347 10.35V19.9893L11.1365 18.8393V10.35C11.1365 10.0714 11.2365 9.80219 11.4179 9.59253L17.7269 2.3L2.27306 2.3L1.41924 3.05898Z"
            fill="#4B416A"
          />
        </svg>
        <p>فیلتر نمایش بر اساس:</p>
      </div>
      <ul>
        <li
          // onClick={() => Category_Up_Filter_Handler(1)}
          className={Category_Up_Filter_Active == 1 ? styles.active : undefined}
        >
          <p>پر فروش ترین</p>
        </li>
        <li
          onClick={() => Category_Up_Filter_Handler(2, "lowPrice")}
          className={Category_Up_Filter_Active == 2 ? styles.active : undefined}
        >
          <p>ارزان ترین</p>
        </li>
        <li
          onClick={() => Category_Up_Filter_Handler(3, "highPrice")}
          className={Category_Up_Filter_Active == 3 ? styles.active : undefined}
        >
          <p>گران ترین</p>
        </li>
        <li
          // onClick={() => Category_Up_Filter_Handler(4)}
          className={Category_Up_Filter_Active == 4 ? styles.active : undefined}
        >
          <p>پیشنهاد خرید</p>
        </li>
        <li
          onClick={() => Category_Up_Filter_Handler(5, "newer")}
          className={Category_Up_Filter_Active == 5 ? styles.active : undefined}
        >
          <p>جدید ترین</p>
        </li>
        <li
          // onClick={() => Category_Up_Filter_Handler(6)}
          className={Category_Up_Filter_Active == 6 ? styles.active : undefined}
        >
          <p>مرتبط ترین</p>
        </li>
      </ul>
    </div>
  );
}

export default CategoryFilterUp;
