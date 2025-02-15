import {FLIGHT_HEADERS} from "next/dist/client/components/app-router-headers";
import styles from "./page.module.css";
import gforce from "./public/Tolerance-to-G-z-Acceleration.png";

export default function Home() {
  return (

	<div>
		<title>Science</title>

	  	<div className={styles.body}>
			<center>
				<h1>Anatomy RollerCoaster, Spiral Out</h1>
				<p>A staple of all theme parks is a RollerCoaster. So what is better than a RollerCoaster with a track modeled after human skeletal Anatomy. As presented in our model, this RollerCoaster takes the guest on a thrilling ride. <br/><br/> In order to make this ride possible we needed to study the effects of GForces on the Human Body.
	  Most coasters are pulled by motorized chain tracks and are designed to manage 	G-force on the human body. Most human bodies can handle 1-5 G’s tracks are designed to manage the G-force on the body. G force is the measure of acceleration felt by the human body through gravity. </p>
				
	  			<div style={{"width": "33%"}}><img src={gforce.src}></img></div>
				<br/>
				<br/>
	  			<p>With this research in mind we made sure to keep our coaster under 2.3 Gz to ensure safety of our riders. </p>	

	  		</center>
			


	  	</div>	




	</div>	

  );
}
