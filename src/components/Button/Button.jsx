import style from './button.module.css';

const Button = () => {

	return <button className={ `${style.button} ${style.padding}`}>Soy un boton</button>;
	
};

export default Button;