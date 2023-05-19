import styles from "./FavoritesRightPanel.module.css";
import FavoritesRightPanelDown from "./FavoritesRightPanelDown";
import FavoritesRightPanelUp from "./FavoritesRightPanelUp";

function FavoritesRightPanel(props) {
  return (
    <div className={styles.favorites_right_panel_container}>
      <FavoritesRightPanelUp
        userMobile={props.userMobile}
        userName={props.userName}
      />
      <FavoritesRightPanelDown />
    </div>
  );
}

export default FavoritesRightPanel;
