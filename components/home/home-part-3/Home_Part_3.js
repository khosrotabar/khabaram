import Image from "next/image";
import Link from "next/link";

import styles from "./Home_Part_3.module.css";

function HomePart3() {
  return (
    <div className={styles.home_part_3}>
      <div className={styles.home_part_3_right}>
        <div className={styles.home_part_3_right_image}>
          <Image
            alt="chair"
            layout="fill"
            src="/images/home/home-part-3/chair.png"
            draggable={false}
          />
        </div>
        <div className={styles.home_part_3_right_texts}>
          <p>بهترین های</p>
          <p>مبلمان</p>
          <Link href="#">
            <button>یه نگاه بنداز</button>
          </Link>
        </div>
      </div>
      <div className={styles.home_part_3_left}>
        <div className={styles.home_part_3_left_images}>
          <div>
            <Image
              alt="lampshade"
              layout="fill"
              src="/images/home/home-part-3/lampshade.png"
              draggable={false}
            />
          </div>
          <div>
            <Image
              alt="lampshade"
              layout="fill"
              src="/images/home/home-part-3/lampshade.png"
              draggable={false}
            />
          </div>
        </div>
        <div className={styles.home_part_3_left_texts}>
          <p>پر فروشترین های</p>
          <p>روشنایی!</p>
          <Link href="#">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 38 30"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.0817 0L21.9174 14.3151H15.9505L18.7582 3.83661H7.55546L0.699997 29.4216H11.9027L13.893 21.9937H23.9749L26.0027 29.5616H37.2668L35.2389 21.9936H24.2993L22.2416 14.5658H33.2486L29.3458 0H18.0817Z"
                  fill="#FDFDFD"
                />
              </svg>
            </div>
          </Link>
        </div>
        <span className={styles.home_part_3_left_hover}></span>
      </div>
    </div>
  );
}

export default HomePart3;
