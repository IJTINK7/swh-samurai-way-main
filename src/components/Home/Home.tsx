import {DataOneType} from "../../App";
import "./Home.css"

type HomePropsType = {
	data1: DataOneType
}

export const Home = (props: HomePropsType) => {
	return (
		<div className={'home'}>
			<h1>Home</h1>
			<div>{props.data1.image}</div>
			<button>{props.data1.button}</button>
		</div>
	);
}
