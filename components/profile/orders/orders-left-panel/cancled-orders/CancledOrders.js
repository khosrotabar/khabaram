import styles from "./CancledOrders.module.css";

function CancledOrders(props) {
  const active = props.active;

  return (
    <div
      style={active ? undefined : { display: "none" }}
      className={styles.cancled_orders_container}
    >
      <div>
        <p>هیچ کالای لغو شده ای وجود ندارد!</p>
      </div>
    </div>
  );
}

export default CancledOrders;
