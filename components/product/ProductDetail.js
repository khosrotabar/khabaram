import { useState } from "react";
import Link from "next/link";
import styles from "./ProductDetail.module.css";

import ProductDetailPart1 from "./ProductDetailPart1";
import ProductDetailPart2 from "./ProductDetailPart2";
import ProductDetailPart3 from "./ProductDetailPart3";
import ProductDetailPart4 from "./ProductDetailPart4";

function ProductDetail(props) {
  const [showLoading, setShowLoading] = useState(false);
  const {
    src,
    title,
    price,
    score,
    code,
    stock,
    discount,
    final_price,
    dimensions,
    mainComment,
    mass,
    otherComments,
    type,
    category,
    colors,
    guarantee,
    categoryEn,
  } = props.product;

  return (
    <div className={styles.product}>
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
        <Link href={`/search/${categoryEn}`}>
          <p onClick={() => setShowLoading(true)}>{category}</p>
        </Link>
        &nbsp;/&nbsp;
        <Link href={`/product/${title}`}>
          <p onClick={() => setShowLoading(true)}>{title}</p>
        </Link>
      </div>
      <ProductDetailPart1
        imageUrl={src}
        title={title}
        price={price}
        score={score}
        colors={colors}
        guarantee={guarantee}
        code={code}
        stock={stock}
        finalPrice={final_price}
        category={categoryEn}
        shoppingCartChange={props.shoppingCartChange}
        runAddToCartFunc={props.runAddToCartFunc}
      />
      <ProductDetailPart2 mainComment={mainComment} />
      <ProductDetailPart3
        dimensions={dimensions}
        mass={mass}
        type={type}
        otherComments={otherComments}
        code={code}
        imageUrl={src}
      />
      <ProductDetailPart4 code={code} />
    </div>
  );
}

export default ProductDetail;
