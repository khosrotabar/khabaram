import Image from "next/image";
import Link from "next/link";

import styles from "./Home_Part_6.module.css";

function HomePart6() {
  return (
    <div className={styles.home_part_6}>
      <div className={styles.home_part_6_right}>
        <Link href="#">
          <div>
            <Image
              alt="high quality products"
              layout="fill"
              src="/images/home/home-part-6/high-quality-product-1.png"
              draggable={false}
            />
          </div>
        </Link>
      </div>
      <div className={styles.home_part_6_middle}>
        <div className={styles.home_part_6_middle_up}>
          <Link href="#">
            <div>
              <Image
                alt="high quality products"
                layout="fill"
                src="/images/home/home-part-6/high-quality-product-2.png"
                draggable={false}
              />
            </div>
          </Link>
        </div>
        <div className={styles.home_part_6_middle_down}>
          <div className={styles.home_part_6_middle_down_right}>
            <Link href="#">
              <div>
                <Image
                  alt="high quality products"
                  layout="fill"
                  src="/images/home/home-part-6/high-quality-product-3.png"
                  draggable={false}
                />
              </div>
            </Link>
          </div>
          <div className={styles.home_part_6_middle_down_left}>
            <Link href="#">
              <div>
                <Image
                  alt="high quality products"
                  layout="fill"
                  src="/images/home/home-part-6/high-quality-product-4.png"
                  draggable={false}
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.home_part_6_left}>
        <p>با کیفیت ترین محصولات</p>
        <p>به همراه تخفیفات و قرعه کشی هفتگی!</p>
        <Link href="#">
          <button>مشاهده تخفیفات</button>
        </Link>
      </div>
    </div>
  );
}

export default HomePart6;
