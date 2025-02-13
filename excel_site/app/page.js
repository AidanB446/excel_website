import styles from "./page.module.css";
import alienImg from "../public/alien.jpg"
import Link from "next/link";

export default function Home() {
  return (

	<div>
		<div className={styles.overview}>
			<title>Sci-World</title>
			<div style={{"backgroundColor": "white"}}>
				insert theme park overview
			</div>
			<div>
				<img src={alienImg.src}></img>
			</div>	
		</div>
		<div className={styles.directory}>
			<div><Link href="/research_data">Our Research And Data</Link></div>		
			<div><Link href="/math">Math Exhibit</Link></div>		
			<div><Link href="/science">Our Science Exhibit</Link></div>		
			<div><Link href="/english">Our English Attraction</Link></div>		
			<div><Link href="/social_studies">Our Social Studies Attraction</Link></div>		
			<div><Link href="/map">Our Map</Link></div>		
			<div><Link href="/ride_model">Our Ride Model</Link></div>		
			<div><Link href="/commercial">Our Commercial</Link></div>		
	  	</div>		

		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
	</div>	

  );
}
