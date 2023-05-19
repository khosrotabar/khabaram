import styles from "./ProfileRightPanelDown.module.css";

function ProfileRightPanelDown() {
  const commensBigSvg = (
    <svg
      width="227"
      height="163"
      viewBox="0 0 227 163"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.22796 47.0567L190.845 2.14603C195.329 1.04314 199.641 2.89982 200.476 6.29303L225.355 107.458C226.19 110.851 223.231 114.496 218.746 115.599L36.1293 160.51C31.6447 161.613 27.3328 159.756 26.4983 156.363L1.61888 55.1976C0.784391 51.8044 3.74337 48.1596 8.22796 47.0567Z"
        fill="#A698CF"
      />
      <path
        d="M29.8738 112.885L202.601 70.4065C204.997 69.8173 207.417 71.2819 208.006 73.6777L213.885 97.5833C214.475 99.9792 213.01 102.399 210.614 102.988L37.8866 145.467C35.4907 146.056 33.0708 144.591 32.4816 142.196L26.6026 118.29C26.0133 115.894 27.4779 113.474 29.8738 112.885Z"
        fill="#FDFDFD"
      />
      <path
        d="M19.5555 70.9258L192.283 28.4472C194.679 27.858 197.099 29.3225 197.688 31.7184L203.567 55.624C204.156 58.0199 202.692 60.4397 200.296 61.029L27.5682 103.508C25.1724 104.097 22.7525 102.632 22.1633 100.236L16.2842 76.3307C15.695 73.9349 17.1596 71.515 19.5555 70.9258Z"
        fill="#4B416A"
      />
      <path
        d="M142.242 46.757L189.052 35.2451C190.261 34.9478 191.482 35.6868 191.78 36.8957C192.077 38.1045 191.338 39.3255 190.129 39.6228L143.319 51.1347C142.11 51.4319 140.889 50.693 140.592 49.4841C140.295 48.2753 141.034 47.0543 142.242 46.757Z"
        fill="white"
      />
      <path
        d="M108.498 77.9164L196.543 56.2637C196.615 56.246 196.677 56.2006 196.715 56.1373C196.753 56.0741 196.765 55.9982 196.747 55.9264C196.73 55.8547 196.684 55.7928 196.621 55.7546C196.558 55.7163 196.482 55.7047 196.41 55.7224L108.365 77.3751C108.293 77.3928 108.231 77.4382 108.193 77.5014C108.155 77.5647 108.143 77.6405 108.161 77.7123C108.179 77.7841 108.224 77.8459 108.287 77.8842C108.351 77.9225 108.426 77.9341 108.498 77.9164Z"
        fill="white"
      />
      <path
        d="M28.0511 91.6005L195.128 50.5115C195.2 50.4939 195.262 50.4484 195.3 50.3852C195.338 50.322 195.35 50.2461 195.332 50.1743C195.315 50.1025 195.269 50.0407 195.206 50.0024C195.143 49.9641 195.067 49.9526 194.995 49.9702L27.9179 91.0592C27.8462 91.0768 27.7843 91.1223 27.7461 91.1855C27.7078 91.2488 27.6962 91.3246 27.7138 91.3964C27.7315 91.4682 27.777 91.53 27.8402 91.5683C27.9034 91.6066 27.9793 91.6182 28.0511 91.6005Z"
        fill="white"
      />
      <path
        d="M26.637 85.8483L193.714 44.7593C193.786 44.7417 193.848 44.6962 193.886 44.633C193.924 44.5697 193.936 44.4939 193.918 44.4221C193.9 44.3503 193.855 44.2885 193.792 44.2502C193.729 44.2119 193.653 44.2003 193.581 44.218L26.5039 85.307C26.4321 85.3246 26.3703 85.3701 26.332 85.4333C26.2937 85.4965 26.2821 85.5724 26.2998 85.6442C26.3174 85.716 26.3629 85.7778 26.4261 85.8161C26.4894 85.8543 26.5652 85.8659 26.637 85.8483Z"
        fill="white"
      />
      <path
        d="M1.99663 57.0418L4.00602 65.2124L202.854 16.3101L200.845 8.13945C200.315 5.98596 198.952 4.13106 197.054 2.9828C195.157 1.83454 192.881 1.48698 190.728 2.01659L8.11948 46.9252C5.966 47.4548 4.11109 48.8182 2.96283 50.7154C1.81458 52.6126 1.46703 54.8883 1.99663 57.0418Z"
        fill="#4B416A"
      />
    </svg>
  );

  return (
    <div className={styles.profile_right_downside_container}>
      <p className={styles.profile_right_downside_title}>نظرات شما</p>
      <div className={styles.profile_right_downside_empty_comments}>
        {commensBigSvg}
        <div className={styles.profile_right_downside_empty_comments_texts}>
          <div></div>
          <p>خرید کنید و اولین نظر خود را ثبت کنید</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileRightPanelDown;