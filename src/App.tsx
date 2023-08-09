import React from 'react';
import './App.css';
import {Home} from "./components/Home/Home";
import {Messages} from "./components/Messages/Messages";
import {Header} from "./components/Header/Header";
import {Navigate} from "./components/Navigate/Navigate";

export type DataOneType = {
	image: string
	button: string
}

export type DataTwoObjType = {
	id: number
	name: string
	message: string
}

function App() {
	const data1 = {
		image: "The image should be here",
		button: "The name of the button"
	}

	const data2: DataTwoObjType[] = [
		{id: 1, name: 'Alex', message: "Hi."},
		{id: 2, name: 'Anna', message: "Hello."},
		{id: 3, name: 'Roma', message: "I'm sorry, I'm busy!"},
		{id: 4, name: 'Irina', message: "How r u?"},
		{id: 5, name: 'Dmitry', message: "Well done!"},
		{id: 6, name: 'Kate', message: "Well, it was my bad."},
	]

	return (
		<div className="App">
			{/*Samurai will help!!!*/}
			{/*<Home data1={data1}/>*/}
			{/*<Messages data2={data2}/>*/}
			<div>
				<Header/>
				<div className={"container"}>
					<Navigate/>
					<Home data1={data1}/>
					<Messages data2={data2}/>
				</div>
			</div>
		</div>
	);
}

export default App;
