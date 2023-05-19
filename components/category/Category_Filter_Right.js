import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import {
  changeBrand,
  changePrice,
  changeStock,
} from "../../redux/categoryFilter";

import styles from "./Category_Filter_Right.module.css";

function CategoryFilterRight() {
  const [Brand_Filter_Active, setBrand_Filter_Active] = useState(2);
  const priceFilterVlauesObject = useSelector(
    (state) => state.categoryFilter[1]
  );
  const priceFilterVlauesArray = [
    priceFilterVlauesObject.priceFrom,
    priceFilterVlauesObject.priceTo,
  ];
  const [SupplyValue, setSupplyValue] = useState(1);
  const [KindFilterActive, setKindFilterActive] = useState(0);
  const [ColorFilterActive, setColorFilterActive] = useState(0);
  const [BrandFilterActive, setBrandFilterActive] = useState(1);
  const [PriceFilterActive, setPriceFilterActive] = useState(1);
  const dispatch = useDispatch();

  const TomanSvg = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 22" fill="none">
      <path
        d="M12.1827 19.9804C12.5221 19.9804 12.8233 19.9676 13.0864 19.9421C13.3536 19.9208 13.5891 19.8867 13.7927 19.8398C14.0006 19.7972 14.1809 19.7397 14.3336 19.6672C14.4906 19.599 14.6264 19.5159 14.7409 19.4179C14.9191 19.273 15.0527 19.1047 15.1418 18.9129C15.2351 18.7212 15.2903 18.4633 15.3073 18.1395H14.3273C14.1151 18.1395 13.8988 18.1224 13.6782 18.0883C13.4576 18.0542 13.2454 17.9967 13.0418 17.9157C12.8382 17.8305 12.6451 17.7218 12.4627 17.5897C12.2845 17.4576 12.1276 17.2957 11.9918 17.1039C11.8603 16.9079 11.7542 16.6778 11.6736 16.4135C11.5973 16.1493 11.5591 15.8468 11.5591 15.5058C11.5591 15.2118 11.5845 14.9518 11.6354 14.726C11.6864 14.4959 11.75 14.2934 11.8264 14.1187C11.907 13.944 11.9961 13.7927 12.0936 13.6649C12.1912 13.5328 12.2845 13.4177 12.3736 13.3197C12.6282 13.064 12.9167 12.868 13.2391 12.7316C13.5615 12.591 13.9094 12.5206 14.2827 12.5206C14.7451 12.5206 15.1397 12.6016 15.4664 12.7636C15.7973 12.9212 16.0667 13.1407 16.2745 13.422C16.4867 13.7032 16.6415 14.0377 16.7391 14.4255C16.8367 14.8091 16.8854 15.2267 16.8854 15.6784V16.5478H17.9673V18.1395H16.8791C16.8621 18.7233 16.7582 19.2155 16.5673 19.6161C16.3806 20.0167 16.1006 20.3661 15.7273 20.6644C15.5321 20.8178 15.32 20.9499 15.0909 21.0607C14.8618 21.1758 14.6051 21.2717 14.3209 21.3484C14.0367 21.4251 13.7185 21.4805 13.3664 21.5146C13.0185 21.5529 12.6239 21.5721 12.1827 21.5721V19.9804ZM14.2827 14.1123C13.9221 14.1123 13.6357 14.2253 13.4236 14.4511C13.2115 14.677 13.1054 15.0286 13.1054 15.5058C13.1054 15.6933 13.1415 15.8532 13.2136 15.9853C13.29 16.1174 13.3854 16.226 13.5 16.3113C13.6188 16.3922 13.7503 16.4519 13.8945 16.4903C14.0388 16.5286 14.183 16.5478 14.3273 16.5478H15.3073V15.6784C15.3073 15.4355 15.2882 15.2288 15.25 15.0584C15.2118 14.8837 15.1609 14.7388 15.0973 14.6237C15.0379 14.5086 14.9679 14.417 14.8873 14.3488C14.8109 14.2807 14.7345 14.2295 14.6582 14.1954C14.5861 14.1613 14.5161 14.14 14.4482 14.1315C14.3803 14.1187 14.3251 14.1123 14.2827 14.1123Z"
        fill="#585858"
      />
      <path
        d="M22.3836 12.7699C22.3921 12.7998 22.4091 12.8701 22.4345 12.9809C22.4642 13.0917 22.4961 13.2281 22.53 13.39C22.5639 13.5477 22.5979 13.7245 22.6318 13.9206C22.67 14.1166 22.7039 14.3147 22.7336 14.515C22.7676 14.7111 22.793 14.9028 22.81 15.0903C22.8312 15.2778 22.8418 15.4419 22.8418 15.5825C22.8418 16.0215 22.7697 16.4029 22.6254 16.7268C22.4812 17.0464 22.2924 17.3106 22.0591 17.5194C21.8257 17.7282 21.5627 17.8838 21.27 17.986C20.9815 18.0883 20.6909 18.1395 20.3982 18.1395H17.6554V16.5478H20.4427C20.4936 16.5478 20.5657 16.5414 20.6591 16.5286C20.7567 16.5116 20.8521 16.4711 20.9454 16.4072C21.043 16.3432 21.1279 16.2473 21.2 16.1195C21.2721 15.9874 21.3082 15.8084 21.3082 15.5825C21.3082 15.4888 21.2997 15.3759 21.2827 15.2438C21.27 15.1074 21.2509 14.9625 21.2254 14.8091C21.2 14.6557 21.1703 14.5001 21.1364 14.3424C21.1067 14.1805 21.077 14.0292 21.0473 13.8886C21.0176 13.7437 20.9879 13.6137 20.9582 13.4987C20.9285 13.3793 20.9051 13.2877 20.8882 13.2238L22.3836 12.7699ZM21.7854 11.5235L20.7164 10.4368L21.7727 9.3373L22.8673 10.4368L21.7854 11.5235ZM19.1191 11.5298L18.05 10.4432L19.1 9.34369L20.1945 10.4432L19.1191 11.5298Z"
        fill="#585858"
      />
      <path
        d="M3.09273 18.1395C2.62606 18.1395 2.22515 18.1097 1.89 18.05C1.55485 17.9946 1.27273 17.9115 1.04364 17.8007C0.814546 17.6857 0.63 17.5408 0.49 17.3661C0.354242 17.1913 0.250303 16.9868 0.178182 16.7524C0.10606 16.518 0.0572727 16.2538 0.0318182 15.9598C0.0106061 15.6614 0 15.3333 0 14.9753V8.92186H1.58455V14.9753C1.58455 15.3163 1.59515 15.589 1.61636 15.7936C1.64182 15.9981 1.70333 16.1579 1.80091 16.273C1.90273 16.3838 2.05333 16.4584 2.25273 16.4967C2.45636 16.5308 2.73636 16.5478 3.09273 16.5478V18.1395Z"
        fill="#585858"
      />
      <path
        d="M7.55985 16.9314C7.59803 16.9314 7.65743 16.925 7.73803 16.9122C7.82288 16.8952 7.90773 16.8483 7.99258 16.7716C8.07743 16.6949 8.15167 16.5777 8.21531 16.42C8.28318 16.2581 8.31712 16.0322 8.31712 15.7424C8.31712 15.6316 8.29591 15.491 8.25349 15.3205C8.21531 15.1458 8.14531 14.9775 8.04349 14.8155C7.94591 14.6493 7.81227 14.5087 7.64258 14.3936C7.47712 14.2743 7.26712 14.2147 7.01258 14.2147C6.79197 14.2147 6.61167 14.2807 6.47167 14.4128C6.33167 14.5449 6.21288 14.709 6.11531 14.905C6.02197 15.1011 5.94137 15.3141 5.87349 15.5443C5.80985 15.7701 5.73985 15.9768 5.66349 16.1643C5.82046 16.2538 5.98591 16.3454 6.15985 16.4392C6.33803 16.5287 6.51197 16.6096 6.68167 16.6821C6.85137 16.7545 7.01046 16.8142 7.15894 16.8611C7.31167 16.9079 7.4453 16.9314 7.55985 16.9314ZM7.01258 12.6294C7.45803 12.6294 7.84621 12.7125 8.17712 12.8787C8.51228 13.0449 8.78803 13.2686 9.0044 13.5499C9.225 13.8269 9.38834 14.1486 9.4944 14.5151C9.6047 14.8816 9.65985 15.2651 9.65985 15.6657C9.65985 16.1089 9.62167 16.4861 9.54531 16.7971C9.46894 17.1082 9.36712 17.3661 9.23985 17.5706C9.11682 17.7752 8.9747 17.935 8.81349 18.05C8.65652 18.1694 8.49743 18.2567 8.33621 18.3121C8.17924 18.3718 8.02652 18.408 7.87803 18.4208C7.72955 18.4378 7.60227 18.4464 7.49621 18.4464C7.28409 18.4464 7.08258 18.425 6.89167 18.3824C6.70076 18.3441 6.50561 18.2865 6.30621 18.2098C6.11106 18.1374 5.90743 18.0479 5.69531 17.9414C5.48318 17.8306 5.25197 17.707 5.00167 17.5706C4.81076 17.7752 4.605 17.9222 4.3844 18.0117C4.16803 18.0969 3.91349 18.1395 3.62076 18.1395H2.83803L2.82531 16.5478H3.62076C3.71409 16.5478 3.7947 16.5201 3.86258 16.4647C3.9347 16.4093 3.99834 16.3326 4.05349 16.2346C4.11288 16.1323 4.16591 16.0109 4.21258 15.8703C4.26349 15.7254 4.3144 15.5656 4.36531 15.3908C4.45015 15.084 4.55197 14.7687 4.67076 14.4448C4.78955 14.1166 4.94652 13.8183 5.14167 13.5499C5.34106 13.2814 5.59137 13.0619 5.89258 12.8915C6.19379 12.7167 6.56712 12.6294 7.01258 12.6294Z"
        fill="#585858"
      />
      <path
        d="M8.40625 9.52449C8.06685 9.52449 7.74019 9.484 7.42625 9.40304C7.11231 9.32207 6.81534 9.20701 6.53534 9.05785C6.25958 8.9087 6.00291 8.72546 5.76534 8.50812C5.53201 8.29078 5.32837 8.04574 5.15443 7.77301C4.95079 7.44061 4.79382 7.06986 4.68352 6.66075C4.57322 6.25591 4.51807 5.83188 4.51807 5.38869C4.51807 5.10743 4.53504 4.83469 4.56898 4.57048C4.60291 4.30626 4.65595 4.03566 4.72807 3.75866C4.80443 3.48166 4.90201 3.19188 5.02079 2.88931C5.14382 2.58674 5.29231 2.25434 5.46625 1.89211L6.89807 2.57609C6.74534 2.88718 6.61807 3.16631 6.51625 3.41348C6.41443 3.66064 6.3317 3.89503 6.26807 4.11662C6.20443 4.33396 6.15776 4.54491 6.12807 4.74946C6.10261 4.94975 6.08988 5.1607 6.08988 5.3823C6.08988 5.67208 6.12595 5.94908 6.19807 6.21329C6.27019 6.48177 6.36988 6.72254 6.49716 6.93562C6.70079 7.23819 6.96807 7.47896 7.29898 7.65795C7.63413 7.84119 8.00322 7.93281 8.40625 7.93281H9.69807C10.1478 7.93281 10.5126 7.88594 10.7926 7.79218C11.0769 7.69843 11.2975 7.56419 11.4544 7.38947C11.6114 7.21901 11.7175 7.01232 11.7726 6.76942C11.832 6.52651 11.8617 6.25804 11.8617 5.96399V1.66199H13.4462V5.96399C13.4462 7.15295 13.1323 8.04361 12.5044 8.63596C11.8808 9.22831 10.9453 9.52449 9.69807 9.52449H8.40625ZM8.27898 1.16339L9.42443 0L10.5953 1.17618L9.43716 2.33957L8.27898 1.16339Z"
        fill="#585858"
      />
    </svg>
  );

  const ChavronIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 9" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.94281 8.62342C8.42211 9.12553 7.57789 9.12552 7.05719 8.62342L0.390525 2.19485C-0.130176 1.69275 -0.130176 0.878678 0.390525 0.376576C0.911223 -0.125527 1.75544 -0.125527 2.27614 0.376576L8 5.89601L13.7239 0.376577C14.2446 -0.125526 15.0888 -0.125526 15.6095 0.376577C16.1302 0.878679 16.1302 1.69275 15.6095 2.19485L8.94281 8.62342Z"
        fill="#B5B5B5"
      />
    </svg>
  );

  function Brand_Filter_Handler(item, brand) {
    setBrand_Filter_Active(item);
    dispatch(changeBrand({ brand: brand }));
  }

  function onSliderChange(value) {
    dispatch(changePrice({ priceFrom: value[0], priceTo: value[1] }));
  }

  function SupplyHandler(value) {
    setSupplyValue(value);
    dispatch(changeStock({ stock: value }));
  }

  function KindFilterHandler(value) {
    setKindFilterActive(value);
  }

  function ColorFilterHandler(value) {
    setColorFilterActive(value);
  }

  function BrandFilterHandler(value) {
    setBrandFilterActive(value);
  }

  function PriceFilterHandler(value) {
    setPriceFilterActive(value);
  }

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "٬");
  }

  return (
    <div className={styles.category_right}>
      <p className={styles.category_right_title}>فیلتر ها</p>
      <div
        className={`${styles.category_right_brand_title} ${
          BrandFilterActive == 0 ? styles.hide_brand_title : undefined
        }`}
        onClick={() => BrandFilterHandler(BrandFilterActive == 1 ? 0 : 1)}
      >
        <p>برند محصول</p>
        {ChavronIcon}
      </div>
      <div
        className={`${styles.category_right_brands_container} ${
          BrandFilterActive == 0 ? styles.hide_brands : undefined
        }`}
      >
        <div className={styles.category_right_brand_1}>
          <button
            onClick={() => Brand_Filter_Handler(1, "tanaram")}
            className={Brand_Filter_Active == 1 ? styles.active : undefined}
          >
            تن آرام
          </button>
          <button
            onClick={() => Brand_Filter_Handler(2, "asayesh")}
            className={Brand_Filter_Active == 2 ? styles.active : undefined}
          >
            آسایش
          </button>
        </div>
        <div className={styles.category_right_brand_2}>
          <button
            onClick={() => Brand_Filter_Handler(3, "khoshkhab")}
            className={Brand_Filter_Active == 3 ? styles.active : undefined}
          >
            خوشخواب
          </button>
          <button
            onClick={() => Brand_Filter_Handler(4, "test")}
            className={Brand_Filter_Active == 4 ? styles.active : undefined}
          >
            تست
          </button>
        </div>
      </div>
      <div
        className={`${styles.category_right_price_title} ${
          PriceFilterActive == 0 ? styles.hide_price_title : undefined
        }`}
        onClick={() => PriceFilterHandler(PriceFilterActive == 1 ? 0 : 1)}
      >
        <p>بازه قیمت</p>
        {ChavronIcon}
      </div>
      <div
        className={`${styles.category_right_price_container} ${
          PriceFilterActive == 0 ? styles.hide_price : undefined
        }`}
      >
        <div className={styles.category_right_price}>
          <Slider
            range
            step={100000}
            allowCross={false}
            value={priceFilterVlauesArray}
            min={0}
            max={50000000}
            onChange={onSliderChange}
            dotStyle="rc-slider-dots"
          />
        </div>
        <div className={styles.category_right_price_texts}>
          <div className={styles.category_right_price_texts_from}>
            <p>
              از : <span>{numberWithCommas(priceFilterVlauesArray[0])}</span>
            </p>
            {TomanSvg}
          </div>
          <div className={styles.category_right_price_texts_to}>
            <p>
              تا : <span>{numberWithCommas(priceFilterVlauesArray[1])}</span>
            </p>
            {TomanSvg}
          </div>
        </div>
      </div>
      <div
        className={`${styles.category_right_kind_title} ${
          KindFilterActive == 1 ? styles.active_kind_title : undefined
        }`}
        onClick={() => KindFilterHandler(KindFilterActive == 0 ? 1 : 0)}
      >
        <p>نوع</p>
        {ChavronIcon}
      </div>
      <div
        className={`${styles.category_right_kind} ${
          KindFilterActive == 1 ? styles.active_kind : undefined
        }`}
      >
        <label className={styles.input_container}>
          <input type="checkbox" />
          <span className={styles.checkmark}></span>
          متن تستی نوع اول
        </label>
        <label className={styles.input_container}>
          <input type="checkbox" />
          <span className={styles.checkmark}></span>
          متن تستی نوع دوم
        </label>
        <label className={styles.input_container}>
          <input type="checkbox" />
          <span className={styles.checkmark}></span>
          متن تستی نوع سوم
        </label>
        <label className={styles.input_container}>
          <input type="checkbox" />
          <span className={styles.checkmark}></span>
          متن تستی نوع چهارم
        </label>
      </div>
      <div
        className={`${styles.category_right_color_title} ${
          ColorFilterActive == 1 ? styles.active_color_title : undefined
        }`}
        onClick={() => ColorFilterHandler(ColorFilterActive == 0 ? 1 : 0)}
      >
        <p>رنگ بندی</p>
        {ChavronIcon}
      </div>
      <div
        className={`${styles.category_right_stock} ${
          SupplyValue == 0 ? styles.disabled : undefined
        }`}
        onClick={() => SupplyHandler(SupplyValue == 1 ? 0 : 1)}
      >
        <p>فقط کالا های موجود</p>
        <div>
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default CategoryFilterRight;
