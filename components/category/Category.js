import { useState } from "react";
import Link from "next/link";
import Category_Filter_Right from "./Category_Filter_Right";
import Category_Filter_Up from "./Category_Filter_Up";
import Category_Main from "./Category_Main";

import styles from "./Category.module.css";

function Category(props) {
  const [showLoading, setShowLoading] = useState(false);
  let categoryFa;

  if (props.slug === "products-bed-services") {
    categoryFa = "سرویس خواب";
  }

  return (
    <div className={styles.category}>
      {/* loading hover */}
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
      {/* loading hover */}
      <div className="header-links-container">
        <Link href="/">
          <p onClick={() => setShowLoading(true)}>
            فروشگاه سرویس خواب و لوازم خانگی
          </p>
        </Link>
        &nbsp;/&nbsp;
        <Link href={`/search/${props.slug}`}>
          <p onClick={() => setShowLoading(true)}>{categoryFa}</p>
        </Link>
      </div>
      <div className={styles.category_container}>
        <Category_Filter_Right />
        <div>
          <Category_Filter_Up />
          <Category_Main slug={props.slug} />
        </div>
      </div>
    </div>
  );
}

export default Category;
