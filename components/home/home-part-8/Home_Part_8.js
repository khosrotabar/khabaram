import Image from "next/image";
import Link from "next/link";

import { Part_8_Category_Imgs } from "../../../datas/home/home-part-8/part_8_category_imgs";
import styles from "./Home_Part_8.module.css";

function HomePart8() {
  const BoldStyle = {
    fontWeight: 800,
  };

  const NomalStyle = {
    fontWeight: "bold",
  };

  const BackGroundColor = {
    backgroundColor: "#f4f4f4",
  };

  const BackGroundColorDay = {
    backgroundColor: "#A698CF",
    boxShadow: "0px 7px 31px -8px rgba(166, 152, 207, 0.4)",
    marginTop: "-13px",
  };

  return (
    <div className={styles.home_part_8_container}>
      <p className={styles.home_part_8_title}>دسته بندی محصولات</p>
      <div className={styles.home_part_8}>
        {Part_8_Category_Imgs.map((item) => {
          return (
            <Link href="#" key={item.id}>
              <div
                className={styles.home_part_8_items}
                style={item.id == 4 ? BackGroundColorDay : BackGroundColor}
              >
                <div className={styles["home_part_8_items_image_" + item.id]}>
                  <Image
                    alt="category home part 8"
                    layout="fill"
                    src={item.src}
                  />
                </div>
                <p
                  style={item.id == 2 || item.id == 3 ? NomalStyle : BoldStyle}
                  className={item.id == 4 ? styles.item_4_except : undefined}
                >
                  {item.title}
                  {item.id !== 1 && item.id !== 3 && (
                    <apan style={NomalStyle}>و</apan>
                  )}
                  <br />
                  <span style={item.id == 1 ? NomalStyle : BoldStyle}>
                    {item.text}
                  </span>
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default HomePart8;
