import styles from "./page.module.css";

export default function Home() {
  return (
	<div className={styles.body}>
		<center>
			<video controls preload="none">
				<source src="/lv_0_20250217210902.mp4" type="video/mp4"/>
			</video>
	  	</center>
	</div>	
  );
}
