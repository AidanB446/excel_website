import styles from "./page.module.css";
import scifi from "./public/scifi.jpeg";
import alienAbduction from "./public/0223_637080330633863653.jpg";

export default function Home() {
  return (
	<div>
		<title>English</title>
		<div className={styles.body}>
			<div className={styles.scifiIntro}>
				<div>
	  				<h1>Alien Abduction Ride</h1>
					<p>We wanted a truly immersive experience that not only offers thrills but also offers a story for the guest to live through. We created a story ride that takes the guest through a experience of what it is like to be abducted.<br/><br/> But in order to make this a good experience for the guest, we needed to study english in order to understand what makes a good Sci-Fi story.</p>
	  			</div>
				<div><img src={scifi.src}></img></div>
	  		</div>
			<br/>				
			<div>
				<center>



	  			<h1>Our Story Research</h1>		
				<p>To understand what makes a good story we took a look at popular SciFi author HG Wells. After analyzing his writing styles we came up with the following conclusions. In order to write an effective engaging story we need to follow the standard story structure of containing a main conflict, rising action, climax, falling action resolution. We also need to personally engage the reader by allowing room in the story for them to make their own inferences and discoveries about the science fiction topic that we are exploring. By forcing the guest to make their own inferences and hypothesis, we draw them in to want to stay engaged with story to see if their ideas were correct. By using these tactics it allowed us to make an engaging story for our guests.</p>	
	  			</center>	
	  		</div>
			<br/>	
			<br/>	

	  	</div>
	</div>	
  );
}
