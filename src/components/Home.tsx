import {DataOneType} from "../App";

type HomePropsType = {
	data1: DataOneType
}

export const Home = (props: HomePropsType) => {
	return (
		<div>
			<h1>Home</h1>
			<div>{props.data1.image}</div>
			<button>{props.data1.button}</button>
		</div>
	);
}
