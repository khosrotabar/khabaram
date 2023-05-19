import Link from "next/link";
import Image from "next/image";

import styles from "./Home_Part_9.module.css";

function HomePart9() {
  return (
    <div className={styles.home_part_9}>
      <div className={styles.home_part_9_up}>
        <p>آخرین مطالب وبلاگ</p>
        <Link href="#">
          <button>همه مطالب</button>
        </Link>
      </div>
      <div className={styles.home_part_9_down}>
        <div className={styles.home_part_9_down_right}>
          <div className={styles.last_blog_post_image_small}>
            <Image
              alt="last blog post images"
              layout="fill"
              src="/images/home/home-part-9/last-blog-post-img-1.png"
              draggable={false}
            />
          </div>
          <p className={styles.last_blog_post_title}>روش های شستن تشک طبی</p>
          <Link href="#">
            <div className={styles.last_blog_post_link}>
              <p>ادامه مطلب</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="10"
                viewBox="0 0 14 10"
                fill="none"
              >
                <g opacity="0.5">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.5 5.00019C0.5 5.42502 0.840373 5.76942 1.26024 5.76942L12.816 5.76942C13.2358 5.76942 13.5762 5.42502 13.5762 5.00019C13.5762 4.57535 13.2358 4.23096 12.816 4.23096L1.26024 4.23096C0.840373 4.23096 0.5 4.57535 0.5 5.00019Z"
                    fill="#4B416A"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.722326 4.46431C0.425891 4.76017 0.425891 5.23984 0.722325 5.53569L4.9731 9.77811C5.26953 10.074 5.75015 10.074 6.04658 9.77811C6.34302 9.48226 6.34302 9.00259 6.04658 8.70674L2.33255 5L6.04658 1.29326C6.34302 0.997412 6.34302 0.517741 6.04658 0.221889C5.75015 -0.0739626 5.26953 -0.0739626 4.9731 0.221889L0.722326 4.46431Z"
                    fill="#4B416A"
                  />
                </g>
              </svg>
            </div>
          </Link>
        </div>
        <div className={styles.home_part_9_down_middle}>
          <div className={styles.last_blog_post_image_small}>
            <Image
              alt="last blog post images"
              layout="fill"
              src="/images/home/home-part-9/last-blog-post-img-2.png"
              draggable={false}
            />
          </div>
          <p className={styles.last_blog_post_title}>
            ایده های بازیافتی در دکور خانه
          </p>
          <Link href="#">
            <div className={styles.last_blog_post_link}>
              <p>ادامه مطلب</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="10"
                viewBox="0 0 14 10"
                fill="none"
              >
                <g opacity="0.5">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.5 5.00019C0.5 5.42502 0.840373 5.76942 1.26024 5.76942L12.816 5.76942C13.2358 5.76942 13.5762 5.42502 13.5762 5.00019C13.5762 4.57535 13.2358 4.23096 12.816 4.23096L1.26024 4.23096C0.840373 4.23096 0.5 4.57535 0.5 5.00019Z"
                    fill="#4B416A"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.722326 4.46431C0.425891 4.76017 0.425891 5.23984 0.722325 5.53569L4.9731 9.77811C5.26953 10.074 5.75015 10.074 6.04658 9.77811C6.34302 9.48226 6.34302 9.00259 6.04658 8.70674L2.33255 5L6.04658 1.29326C6.34302 0.997412 6.34302 0.517741 6.04658 0.221889C5.75015 -0.0739626 5.26953 -0.0739626 4.9731 0.221889L0.722326 4.46431Z"
                    fill="#4B416A"
                  />
                </g>
              </svg>
            </div>
          </Link>
        </div>
        <div className={styles.home_part_9_down_left}>
          <div className={styles.home_part_9_down_left_part_1}>
            <p>چگونه با پولیش مبلمان خود را براق کنیم؟</p>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.
            </p>
            <Link href="#">
              <div className={styles.last_blog_post_link_2}>
                <p>ادامه مطلب</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="10"
                  viewBox="0 0 14 10"
                  fill="none"
                >
                  <g opacity="1">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.5 5.00019C0.5 5.42502 0.840373 5.76942 1.26024 5.76942L12.816 5.76942C13.2358 5.76942 13.5762 5.42502 13.5762 5.00019C13.5762 4.57535 13.2358 4.23096 12.816 4.23096L1.26024 4.23096C0.840373 4.23096 0.5 4.57535 0.5 5.00019Z"
                      fill="#4B416A"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.722326 4.46431C0.425891 4.76017 0.425891 5.23984 0.722325 5.53569L4.9731 9.77811C5.26953 10.074 5.75015 10.074 6.04658 9.77811C6.34302 9.48226 6.34302 9.00259 6.04658 8.70674L2.33255 5L6.04658 1.29326C6.34302 0.997412 6.34302 0.517741 6.04658 0.221889C5.75015 -0.0739626 5.26953 -0.0739626 4.9731 0.221889L0.722326 4.46431Z"
                      fill="#4B416A"
                    />
                  </g>
                </svg>
              </div>
            </Link>
          </div>
          <div className={styles.home_part_9_down_left_part_2}>
            <Image
              alt="last blog post images"
              layout="fill"
              src="/images/home/home-part-9/last-blog-post-img-3.png"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePart9;
