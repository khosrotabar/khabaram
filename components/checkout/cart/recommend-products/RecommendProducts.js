import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";

import styles from "./RecommendProducts.module.css";

function RecommendProducts() {
  const shoppingCartProducts = useSelector((state) => state.shoppingCart[0]);
  const [showLoadingSkeleton, setShowLoadingSkeleton] = useState(true);
  const [recommendProducts, setRecommendProducts] = useState([]);
  const tomanSvg = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23" fill="none">
      <path
        d="M12.1827 20.5186C12.5221 20.5186 12.8233 20.5058 13.0864 20.4803C13.3536 20.459 13.5891 20.4249 13.7927 20.378C14.0006 20.3354 14.1809 20.2779 14.3336 20.2054C14.4906 20.1372 14.6264 20.0541 14.7409 19.9561C14.9191 19.8112 15.0527 19.6429 15.1418 19.4511C15.2351 19.2593 15.2903 19.0015 15.3073 18.6777H14.3273C14.1151 18.6777 13.8988 18.6606 13.6782 18.6265C13.4576 18.5924 13.2454 18.5349 13.0418 18.4539C12.8382 18.3687 12.6451 18.26 12.4627 18.1279C12.2845 17.9958 12.1276 17.8339 11.9918 17.6421C11.8603 17.4461 11.7542 17.216 11.6736 16.9517C11.5973 16.6875 11.5591 16.385 11.5591 16.044C11.5591 15.75 11.5845 15.49 11.6354 15.2642C11.6864 15.0341 11.75 14.8316 11.8264 14.6569C11.907 14.4822 11.9961 14.3309 12.0936 14.2031C12.1912 14.071 12.2845 13.9559 12.3736 13.8579C12.6282 13.6022 12.9167 13.4062 13.2391 13.2698C13.5615 13.1292 13.9094 13.0588 14.2827 13.0588C14.7451 13.0588 15.1397 13.1398 15.4664 13.3017C15.7973 13.4594 16.0667 13.6789 16.2745 13.9602C16.4867 14.2414 16.6415 14.5759 16.7391 14.9637C16.8367 15.3473 16.8854 15.7649 16.8854 16.2166V17.086H17.9673V18.6777H16.8791C16.8621 19.2615 16.7582 19.7537 16.5673 20.1543C16.3806 20.5548 16.1006 20.9043 15.7273 21.2026C15.5321 21.356 15.32 21.4881 15.0909 21.5989C14.8618 21.714 14.6051 21.8099 14.3209 21.8866C14.0367 21.9633 13.7185 22.0187 13.3664 22.0528C13.0185 22.0911 12.6239 22.1103 12.1827 22.1103V20.5186ZM14.2827 14.6505C13.9221 14.6505 13.6357 14.7634 13.4236 14.9893C13.2115 15.2152 13.1054 15.5667 13.1054 16.044C13.1054 16.2315 13.1415 16.3913 13.2136 16.5235C13.29 16.6556 13.3854 16.7642 13.5 16.8495C13.6188 16.9304 13.7503 16.9901 13.8945 17.0284C14.0388 17.0668 14.183 17.086 14.3273 17.086H15.3073V16.2166C15.3073 15.9737 15.2882 15.767 15.25 15.5966C15.2118 15.4219 15.1609 15.277 15.0973 15.1619C15.0379 15.0468 14.9679 14.9552 14.8873 14.887C14.8109 14.8188 14.7345 14.7677 14.6582 14.7336C14.5861 14.6995 14.5161 14.6782 14.4482 14.6697C14.3803 14.6569 14.3251 14.6505 14.2827 14.6505Z"
        fill="#585858"
      />
      <path
        d="M22.3836 13.3081C22.3921 13.338 22.4091 13.4083 22.4345 13.5191C22.4642 13.6299 22.4961 13.7663 22.53 13.9282C22.5639 14.0859 22.5979 14.2627 22.6318 14.4587C22.67 14.6548 22.7039 14.8529 22.7336 15.0532C22.7676 15.2493 22.793 15.441 22.81 15.6285C22.8312 15.816 22.8418 15.9801 22.8418 16.1207C22.8418 16.5597 22.7697 16.9411 22.6254 17.265C22.4812 17.5846 22.2924 17.8488 22.0591 18.0576C21.8257 18.2664 21.5627 18.422 21.27 18.5242C20.9815 18.6265 20.6909 18.6777 20.3982 18.6777H17.6554V17.086H20.4427C20.4936 17.086 20.5657 17.0796 20.6591 17.0668C20.7567 17.0498 20.8521 17.0093 20.9454 16.9453C21.043 16.8814 21.1279 16.7855 21.2 16.6577C21.2721 16.5256 21.3082 16.3466 21.3082 16.1207C21.3082 16.027 21.2997 15.9141 21.2827 15.7819C21.27 15.6456 21.2509 15.5007 21.2254 15.3473C21.2 15.1939 21.1703 15.0383 21.1364 14.8806C21.1067 14.7187 21.077 14.5674 21.0473 14.4268C21.0176 14.2819 20.9879 14.1519 20.9582 14.0369C20.9285 13.9175 20.9051 13.8259 20.8882 13.762L22.3836 13.3081ZM21.7854 12.0616L20.7164 10.975L21.7727 9.87549L22.8673 10.975L21.7854 12.0616ZM19.1191 12.068L18.05 10.9814L19.1 9.88188L20.1945 10.9814L19.1191 12.068Z"
        fill="#585858"
      />
      <path
        d="M3.09273 18.6777C2.62606 18.6777 2.22515 18.6479 1.89 18.5883C1.55485 18.5329 1.27273 18.4498 1.04364 18.339C0.814546 18.2239 0.63 18.079 0.49 17.9043C0.354242 17.7296 0.250303 17.525 0.178182 17.2906C0.10606 17.0562 0.0572727 16.792 0.0318182 16.498C0.0106061 16.1997 0 15.8715 0 15.5136V9.46008H1.58455V15.5136C1.58455 15.8545 1.59515 16.1272 1.61636 16.3318C1.64182 16.5363 1.70333 16.6961 1.80091 16.8112C1.90273 16.922 2.05333 16.9966 2.25273 17.0349C2.45636 17.069 2.73636 17.0861 3.09273 17.0861V18.6777Z"
        fill="#585858"
      />
      <path
        d="M7.55985 17.4696C7.59803 17.4696 7.65743 17.4632 7.73803 17.4504C7.82288 17.4334 7.90773 17.3865 7.99258 17.3098C8.07743 17.2331 8.15167 17.1159 8.21531 16.9582C8.28318 16.7963 8.31712 16.5704 8.31712 16.2806C8.31712 16.1698 8.29591 16.0292 8.25349 15.8588C8.21531 15.684 8.14531 15.5157 8.04349 15.3538C7.94591 15.1876 7.81227 15.0469 7.64258 14.9319C7.47712 14.8125 7.26712 14.7529 7.01258 14.7529C6.79197 14.7529 6.61167 14.8189 6.47167 14.951C6.33167 15.0832 6.21288 15.2472 6.11531 15.4433C6.02197 15.6393 5.94137 15.8524 5.87349 16.0825C5.80985 16.3083 5.73985 16.515 5.66349 16.7025C5.82046 16.792 5.98591 16.8836 6.15985 16.9774C6.33803 17.0669 6.51197 17.1479 6.68167 17.2203C6.85137 17.2927 7.01046 17.3524 7.15894 17.3993C7.31167 17.4462 7.4453 17.4696 7.55985 17.4696ZM7.01258 13.1676C7.45803 13.1676 7.84621 13.2507 8.17712 13.4169C8.51228 13.5831 8.78803 13.8068 9.0044 14.0881C9.225 14.3651 9.38834 14.6868 9.4944 15.0533C9.6047 15.4198 9.65985 15.8033 9.65985 16.2039C9.65985 16.6471 9.62167 17.0243 9.54531 17.3354C9.46894 17.6465 9.36712 17.9043 9.23985 18.1088C9.11682 18.3134 8.9747 18.4732 8.81349 18.5883C8.65652 18.7076 8.49743 18.7949 8.33621 18.8503C8.17924 18.91 8.02652 18.9462 7.87803 18.959C7.72955 18.976 7.60227 18.9846 7.49621 18.9846C7.28409 18.9846 7.08258 18.9633 6.89167 18.9206C6.70076 18.8823 6.50561 18.8248 6.30621 18.7481C6.11106 18.6756 5.90743 18.5861 5.69531 18.4796C5.48318 18.3688 5.25197 18.2452 5.00167 18.1088C4.81076 18.3134 4.605 18.4604 4.3844 18.5499C4.16803 18.6351 3.91349 18.6777 3.62076 18.6777H2.83803L2.82531 17.0861H3.62076C3.71409 17.0861 3.7947 17.0584 3.86258 17.003C3.9347 16.9476 3.99834 16.8709 4.05349 16.7728C4.11288 16.6706 4.16591 16.5491 4.21258 16.4085C4.26349 16.2636 4.3144 16.1038 4.36531 15.9291C4.45015 15.6222 4.55197 15.3069 4.67076 14.983C4.78955 14.6549 4.94652 14.3566 5.14167 14.0881C5.34106 13.8196 5.59137 13.6001 5.89258 13.4297C6.19379 13.255 6.56712 13.1676 7.01258 13.1676Z"
        fill="#585858"
      />
      <path
        d="M8.40619 10.0627C8.06679 10.0627 7.74013 10.0222 7.42619 9.94124C7.11225 9.86028 6.81528 9.74522 6.53528 9.59606C6.25952 9.44691 6.00285 9.26366 5.76528 9.04633C5.53194 8.82899 5.32831 8.58395 5.15437 8.31121C4.95073 7.97882 4.79376 7.60806 4.68346 7.19896C4.57316 6.79411 4.51801 6.37009 4.51801 5.92689C4.51801 5.64563 4.53498 5.3729 4.56891 5.10868C4.60285 4.84447 4.65588 4.57386 4.72801 4.29687C4.80437 4.01987 4.90194 3.73008 5.02073 3.42752C5.14376 3.12495 5.29225 2.79255 5.46619 2.43032L6.89801 3.11429C6.74528 3.42538 6.61801 3.70451 6.51619 3.95168C6.41437 4.19885 6.33164 4.43323 6.26801 4.65483C6.20437 4.87217 6.1577 5.08312 6.12801 5.28767C6.10255 5.48796 6.08982 5.6989 6.08982 5.9205C6.08982 6.21029 6.12588 6.48728 6.19801 6.7515C6.27013 7.01997 6.36982 7.26075 6.4971 7.47383C6.70073 7.77639 6.96801 8.01717 7.29891 8.19615C7.63407 8.3794 8.00316 8.47102 8.40619 8.47102H9.69801C10.1477 8.47102 10.5126 8.42414 10.7926 8.33039C11.0768 8.23664 11.2974 8.1024 11.4544 7.92768C11.6113 7.75722 11.7174 7.55053 11.7726 7.30763C11.8319 7.06472 11.8616 6.79624 11.8616 6.5022V2.2002H13.4462V6.5022C13.4462 7.69116 13.1322 8.58182 12.5044 9.17417C11.8807 9.76652 10.9453 10.0627 9.69801 10.0627H8.40619ZM8.27891 1.7016L9.42437 0.538208L10.5953 1.71439L9.4371 2.87778L8.27891 1.7016Z"
        fill="#585858"
      />
    </svg>
  );

  async function getRecommendProducts() {
    if (shoppingCartProducts.length !== 0) {
      const response = await fetch("/api/recommendProducts", {
        method: "POST",
        body: JSON.stringify({ shoppingCartProducts }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();
      setRecommendProducts(result);
      setShowLoadingSkeleton(false);
    }
  }

  useEffect(() => {
    getRecommendProducts();
  }, [shoppingCartProducts]);

  return (
    <div className={styles.recommend_products_container}>
      <div className={styles.recommend_products_upSide}>
        <p>این محصولات هم توصیه می کنیم</p>
      </div>
      <div
        className={styles.card_loading_container}
        style={showLoadingSkeleton ? { display: "grid" } : { display: "none" }}
      >
        <div className={styles.card_loading}>
          <div className={styles.image}></div>
          <div className={styles.flex_container}>
            <div className={styles.title}></div>
          </div>
          <div className={styles.price}></div>
        </div>
        <div className={styles.card_loading}>
          <div className={styles.image}></div>
          <div className={styles.flex_container}>
            <div className={styles.title}></div>
          </div>
          <div className={styles.price}></div>
        </div>
        <div className={styles.card_loading}>
          <div className={styles.image}></div>
          <div className={styles.flex_container}>
            <div className={styles.title}></div>
          </div>
          <div className={styles.price}></div>
        </div>
        <div className={styles.card_loading}>
          <div className={styles.image}></div>
          <div className={styles.flex_container}>
            <div className={styles.title}></div>
          </div>
          <div className={styles.price}></div>
        </div>
      </div>
      <div className={styles.recommend_products_downSide}>
        <Swiper
          slidesPerView={4}
          spaceBetween={0}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper-nav-mode"
        >
          {recommendProducts.map((product) => {
            return (
              <SwiperSlide key={product.id} className={styles.SwiperSlide}>
                <Link href="#" target="_blank">
                  <div
                    className={
                      styles.recommend_products_downSide_image_container
                    }
                  >
                    <div className={styles.recommend_products_downSide_image}>
                      <Image
                        alt="most sell products"
                        layout="fill"
                        src={product.src}
                      />
                    </div>
                  </div>
                </Link>
                <Link href="#" target="_blank">
                  <p
                    className={styles.recommend_products_downSide_product_title}
                  >
                    {product.title}
                  </p>
                </Link>
                <div
                  className={styles.recommend_products_downSide_product_price}
                >
                  <p>
                    {product.price
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, "٬")}
                  </p>
                  {tomanSvg}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default RecommendProducts;
