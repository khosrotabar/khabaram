import Image from "next/image";
import Link from "next/link";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper";

import styles from "./Home_Part_7.module.css";
import { MostViewedProducts } from "../../../datas/home/home-part-7/most_viewed_products";

function HomePart7() {
  return (
    <div className={styles.home_part_7}>
      <div className={styles.home_part_7_up}>
        <p>پر بازدید ترین های هفته</p>
      </div>
      <div>
        <Swiper
          initialSlide={1}
          slidesPerView={3.2}
          navigation={true}
          pagination={{
            clickable: true,
            type: "bullets",
          }}
          longSwipes={true}
          longSwipesMs={500}
          modules={[Navigation, Pagination]}
          className="mySwiper-nav-mode second-mySwiper-nav-mode"
        >
          {MostViewedProducts.map((product) => {
            return (
              <SwiperSlide key={product.id}>
                <Link href="#">
                  <div className={styles.swiper_children_container}>
                    <div
                      className={styles["swiper_children_titles_" + product.id]}
                    >
                      <p>#{product.id}</p>
                      <p>{product.title}</p>
                    </div>
                    <div
                      className={styles["swiper_children_image_" + product.id]}
                    >
                      <Image
                        alt="most viewd products"
                        layout="fill"
                        src={product.src}
                      />
                    </div>
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

export default HomePart7;
