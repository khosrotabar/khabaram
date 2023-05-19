import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import required modules
import { Pagination, Autoplay } from "swiper";

import styles from "./Home_Part_1.module.css";
import Link from "next/link";
import { CarouselItems } from "../../../datas/home/home-part-1/carousel_items";

function HomePart1() {
  return (
    <div className={styles.home_part_1}>
      <div className={styles.home_part_1_right}>
        <p className={styles.home_part_1_right_title}>
          فروشگاه بزرگ سرویس خواب و لوازم خانگی
        </p>
        <p className={styles.home_part_1_right_text}>
          بهترین کیفیت، بهترین قیمت، بهترین برند ها
        </p>
        <Link href="#">
          <button>
            <p>خرید آسان</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="12"
              viewBox="0 0 27 12"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.200878 6.40782C0.249678 6.52577 0.322016 6.63627 0.417893 6.73215L4.54289 10.8571C4.93342 11.2477 5.56658 11.2477 5.95711 10.8571C6.34763 10.4666 6.34763 9.83346 5.95711 9.44293L3.53921 7.02504L25.875 7.02504C26.4273 7.02504 26.875 6.57732 26.875 6.02504C26.875 5.47275 26.4273 5.02504 25.875 5.02504L3.53921 5.02504L5.95711 2.60715C6.34763 2.21662 6.34763 1.58346 5.95711 1.19293C5.56658 0.802408 4.93342 0.802408 4.54289 1.19293L0.417892 5.31793C0.224978 5.51085 0.127361 5.76297 0.125042 6.01581M0.200878 6.40782C0.153096 6.2926 0.126237 6.1665 0.125042 6.03427L0.200878 6.40782Z"
                fill="#FDFDFD"
              />
            </svg>
          </button>
        </Link>
      </div>
      <div className={styles.home_part_1_left}>
        <div className={styles.home_part_1_left_const_image}>
          <Image
            alt=""
            layout="fill"
            src="/images/home/home-part-1/home-part-1-left-img.png"
            draggable={false}
          />
        </div>
        {/* vertical carousel */}
        <Swiper
          direction={"vertical"}
          pagination={{
            clickable: true,
            type: "bullets",
          }}
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            waitForTransition: true,
          }}
          longSwipes={true}
          longSwipesMs={500}
          loop={true}
          className="mySwiper"
        >
          {CarouselItems.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <Link href="#">
                  <div className={styles["carousel_image_" + item.id]}>
                    <Image
                      alt="most sells products"
                      src={item.src}
                      layout="fill"
                    />
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default HomePart1;
