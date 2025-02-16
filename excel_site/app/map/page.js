import styles from "./page.module.css";
import mapImg from "./public/map.jpg";

export default function Home() {
  return (
	<div>
		<center>
			<div className={styles.imgCont}>
				<img src={mapImg.src} style={{"transform": "rotate(270deg)"}}></img>
			</div>
	  	</center>
	</div>	
  );
}
