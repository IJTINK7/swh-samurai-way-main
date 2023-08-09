import React from 'react';
import "./Navigate.css"

export const Navigate = () => {
	return (
		<div className={"navigateContainer"}>
			<div className={"item"}>Home</div>
			<div className={"item"}>Messages</div>
			<div className={"item"}>Music</div>
			<div className={"item"}>Videos</div>
			<div className={"item"}>Settings</div>
		</div>
	);
};