import styles from "./page.module.css";
import alienImg from "../public/alien.jpg";
import scienceImg from "../public/istockphoto-1399246824-612x612.jpg";
import mathImg from "../public/360_F_205762306_KCw2syVz457NVnZNQCgFdeWW0MRKqlt0.jpg";
import englishImg from "../public/images.jpeg";
import socialImg from "../public/illustration-of-study-vector.jpg";
import researchImg from "../public/search-for-a-job-or-do-research-in-marketing-find-new-solutions-brand-researching-information-businessman-looking-for-a-job-with-a-magnifying-glass-vector.jpg";

import Link from "next/link";


export default function Home() {
  return (

	<div>
		<div className={styles.overview}>
			<title>Sci-World</title>
			<div style={{"color": "white", "backgroundColor": "black"}}>
				<h1>Welcome to Sci-World</h1>	
				<p>Sci-World is a Sci-Fi Theme Park, where we will scare you almost as 
	  			much as we will educate you! Here at Sci-World we utilize only the most 
	  			recent technology in order to be innovative and original.</p><br/>
	  			<h2>Horror and Fun All In One!</h2>
			</div>
			<div>
				<img src={alienImg.src}></img>
			</div>	
		</div>
		<div className={styles.directory}>
			<div>
	  			<Link href="/research_data">
	  				<img src={researchImg.src}></img>
			    </Link>
				<h2>Research and Data</h2>	
	  		</div>		
			<div>
	  			<Link href="/math">
					<img src={mathImg.src}></img>
	  			</Link>
				<h2>Math</h2>	
	  		</div>		
			<div>
	  			<Link href="/science">
					<img src={scienceImg.src}></img>
	  			</Link>
				<h2>Science</h2>	
	  		</div>		
			<div>
	  			<Link href="/english">
					<img src={englishImg.src}></img>
	  			</Link>
				<h2>English</h2>	
	  		</div>		
			<div>
	  			<Link href="/social_studies">
					<img src={socialImg.src}></img>
	  			</Link>
				<h2>Social Studies</h2>	
	  		</div>		
			<div>
	  			<Link href="/map">Our Map</Link>
			</div>		
			<div>
	  			<Link href="/ride_model">Our Ride Model</Link>
	  		</div>		
			<div>
	  			<Link href="/commercial">Our Commercial</Link>
	  		</div>		
	  	</div>		

		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
	</div>	

  );
}
