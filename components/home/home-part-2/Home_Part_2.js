import { HomePart2Svgs } from "../../../datas/home/home-part-2/images";
import styles from "./Home_Part_2.module.css";

function HomePart2() {
  return (
    <div className={styles.home_part_2}>
      <div className={styles.home_part_2_right}>
        {HomePart2Svgs.map((svg) => {
          return (
            svg.id < 3 && (
              <div key={svg.id} className={styles["home_part_2_svg_" + svg.id]}>
                {svg.svg}
                <p>{svg.alt}</p>
              </div>
            )
          );
        })}
      </div>
      <div className={styles.home_part_2_left}>
        {HomePart2Svgs.map((svg) => {
          return (
            svg.id > 2 && (
              <div key={svg.id} className={styles["home_part_2_svg_" + svg.id]}>
                {svg.svg}
                <p>{svg.alt}</p>
              </div>
            )
          );
        })}
      </div>
    </div>
  );
}

export default HomePart2;
