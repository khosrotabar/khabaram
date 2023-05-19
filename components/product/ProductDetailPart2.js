import styles from "./ProductDetailPart2.module.css";

function ProductDetailPart2(props) {
  return (
    <div className={styles.product_part_2}>
      <p>معرفی محصول</p>
      <p>{props.mainComment}</p>
    </div>
  );
}

export default ProductDetailPart2;
