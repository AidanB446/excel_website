import styles from "./page.module.css";
import ufoImg from "./public/ufo.jpeg";


export default function Home() {
  return (
	<div>
		<title>Our Research</title>
		<div className={styles.body}>
			<div className={styles.overview}>
	  			<center>
					<h1>Our Research and Data</h1><br/><br/>	
					<p>With best interest in mind for our stakeholders and investors, we studied theme parks in order for our theme park to have maxium profits. We learned that what consumers value is a experience that you can only get in certain places, something more unusual that they wont be able to recieve in their day to day lives. This was evident by people enjoying thrilling rides at Busch Gardens such as Shriekra, Falcons Fury, and other thrill rides. With that inspiration in mind, we designed a once in a lifetime experience that we guarantee you will never forget! 
	  				</p>
	  			</center>	
				<br/>				
				<br/>				
				<div className={styles.alienInvasion}>
					<div>
						<h2>Utilizing the Alien Invasion</h2>
						<p>Throughout the past years, UFO sightings have gone up. The government even released documents proving their existence. Now it is no secret that the people of the United States are too weak minded to have the idea of an alien invasion on their minds. So we made a deal with the governemnt to "take care" of the alien invasion for them!</p>

	  				</div>				
					<div>
						<img src={ufoImg.src}></img>
	  				</div>

	  			</div>
				<br/>
						
				<div className={styles.sciworld}>
					<center>
						<h2>Introduction to Sci-World</h2>
						<p>With these factors in place we decided to utilize the alien invasion by taking these consenting aliens and providing shelter for them in exchange that they work in our Park. Guests will also see them for the first time and be amazed and entertained. These aliens work alongside regular humans as to provide support to the job market. We ensure our park is profitable by analyzing and tracking how much money is needed to make profit.</p>

	  				</center>
	  			</div>
				<br/>
				<br/>
				<br/>
				<br/>

	  			<div className={styles.data}>
	  					
					<div>
						<h2>Our Costs, and Profits</h2>
						<p>We found the costs by analyzing other theme parks such as Bush Gardens, in order to figure out approximately how much we would need to be spending in order to make profit. Due to the help from the government in return for dealing with the alien invasion, they are funding us with 6.3 million dollars a year. The initial costs for building the park are one time payments of 6.5 million dollars each for land and park attractions. Annual costs for utilities, advertising, food and Merchandise, and worker wages are 22.98 Million dollars USD. with our calculated net profits based on statistics from other theme parks, we can estimate our parks net income will be 11.6 Million dollars annually. Making our park very profitable and viable form of business. </p>
	  				</div>			
					
	 				<div>
						<table className={styles.datatable}>
							<thead>
								<tr>
	  								<th scope="col">Component</th>	
	  								<th scope="col">Cost</th>	
	  							</tr>	  						
								<tr>
	  								<td scope="col">Land Cost</td>	
	  								<td scope="col">6.5 Million USD</td>	
	  							</tr>
	  							<tr>
	  								<td scope="col">Building Ride Cost</td>	
	  								<td scope="col">6.5 Million USD</td>	
	  							</tr>
		  						<tr>
	  								<td scope="col">Employee Pay</td>	
	  								<td scope="col">480,000 USD Annual</td>	
	  							</tr>
			  					<tr>
	  								<td scope="col">Utilities</td>	
	  								<td scope="col">5 Million USD Annually</td>	
	  							</tr>										
			  					<tr>
	  								<td scope="col">Advertising</td>	
	  								<td scope="col">500,000 USD Annually</td>	
	  							</tr>									
			  					<tr>
	  								<td scope="col">Food and Beverage</td>	
	  								<td scope="col">4 Million USD a year</td>	
	  							</tr>
								<tr>
	  								<td scope="col">Total Initial Cost</td>	
	  								<td scope="col">13 Million USD</td>	
	  							</tr>
								<tr>
	  								<td scope="col">Total Annual Cost</td>	
	  								<td scope="col">22.98 Million USD</td>	
	  							</tr>

	  						</thead>	
						

	  					</table>	
						<br/>
						<br/>
					
						<table className={styles.datatable2}>
							<thead>
								<tr>
									<th scope="col">Component</th>	
									<th scope="col">Profit</th>	
								</tr>
								<tr>
									<td scope="col">Tickets</td>
									<td scope="col">$100 each, 328 visitors a day, 12 Million USD</td>
								</tr>								
								<tr>
									<td scope="col">Food and Merchandise</td>
									<td scope="col">Expected 6.3 Million USD</td>
	  							</tr>							
								<tr>
									<td scope="col">Government Funding</td>
									<td scope="col">6.3 Million USD</td>
	  							</tr>
								<tr>
									<td scope="col">Gross Income</td>
									<td scope="col">24.6 Million dollars Annually</td>
	  							</tr>						
								<tr>
									<td scope="col">Net Income</td>
									<td scope="col">11.6 Million dollars Annually</td>
	  							</tr>						

							</thead>
						</table>

	  				</div>		

	  			</div>

	  		</div>			


	  </div>
	</div>	
  );
}





