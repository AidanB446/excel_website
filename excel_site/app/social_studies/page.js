import styles from "./page.module.css";
import anarchy from "./public/anarchy.jpeg";

export default function Home() {
  return (
	<div>
		<title>Social Studies</title>	

	  	<div className={styles.body}>
			<center><h1>Social Studies, a look into anarchy.</h1></center>		
			
			<div className={styles.social_studies}>
	  			<div>
					<h1>Haunted Maze</h1>
					<p>We believe one of the most fascinating parts of human nature is the draw towards chaos and disorder within humans. So we created a haunted house attraction based upon the embodiment of anarchy. Where actors will chase guests through the home without the limitations of government or law.<br/><br/> We wanted to make this attraction realistic so we needed to study instances of anarchy. From our research we found that there have been many cases of anarchy in small rural towns in the United States. And anarchy exists because of a inner hatred for authority within people.</p>

	  			</div>	
	  			<div><img src={anarchy.src}></img></div>	
	 		</div>	


	  	</div>


	</div>	
  );
}
