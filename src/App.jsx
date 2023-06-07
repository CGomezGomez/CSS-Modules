import Button from "./components/Button/Button";
import Card from "./components/Card/Card";

const App = () => {

	return (
		<div class="container">
			<Card 
				src='/icon-sedans.svg'
				alt='Sedans'
				color='orange'
				name='SEDANS'
				text='Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.'
				bcolor='buttonorange'
			/>
			<Card 
				src='/icon-suvs.svg'
				alt='Suvs'
				color='blue'
				name='SUVS'
				text='Take an SUV for its spacious interior ,power m and versality. Perfect for your next family vacation and off-road adventures.'
				bcolor='buttonblue'
			/>
			<Card 
				src='/icon-luxury.svg'
				alt='Luxury'
				color='green'
				name='LUXURY'
				text='Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.'
				bcolor='buttongreen'
			/>

		</div>

	)

};

export default App;
