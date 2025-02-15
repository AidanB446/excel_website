import styles from "./page.module.css";
import invsq from "./public/invsq.png";
import shootAlien from "./public/shootalien.webp";

export default function Home() {
  return (
	<div>
		<title>Math</title>
	  	<div className={styles.body}>
			<center><h1>Our Math Research</h1></center>
			
			<div className={styles.invsqrt}>
				<center>
					<p>In order to design a game we needed to study what formulas were used in other games, and how forumlas affected the quality of games. After doing some research we found one of the most popular and influential algorithms in gaming was the Fast Inverse Sqaure algorithm used in the first person shooter quake. This algorithm utilizes bit shifting in order to calculate values representing the inverse sqaure law in physics, a law that demonstrates light levels based upon distance. By quake utilizing this algorithm it made their game more graphically advanced.</p> 
					<br/><br/><br/>
	  				<div><img src={invsq.src}></img></div>
					<br/>	
					<br/>	
					<br/>	
					<br/>	
					<h2>How our Research Influenced our Game</h2>	
					<p>From this algorithm we can derive 1/sqrt(x) as the value they are calculating for. We can utilize this function as inspiration for a exponential point counting system for the player. We created a shooter game attraction where you are the player fighting off an alien invasion. The point system we designed will drop points rapidly when the player is hit, and will slowly increase as the player eliminates the alien threats. Creating a challenging memoriable player experience.</p>

	  				<div><img src={shootAlien.src}></img></div>
	  			</center>

	  		</div>
	  	</div>		
	</div>	
  );
}
