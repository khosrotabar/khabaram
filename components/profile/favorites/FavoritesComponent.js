import FavoritesLeftPanel from "./favorites-left-panel/FavortitesLeftPanel";
import FavoritesRightPanel from "./favorites-right-panel/FavoritesRightPanel";

import styles from "./FavoritesComponent.module.css";

function FavoritesComponent(props) {
  return (
    <div className={styles.favorites_container}>
      <FavoritesRightPanel
        userName={props.userName}
        userMobile={props.userMobile}
      />
      <FavoritesLeftPanel
        userFavorites={props.userFavorites}
        userMobile={props.userMobile}
      />
    </div>
  );
}

export default FavoritesComponent;
