import React from 'react';
import {DataTwoObjType} from "../App";

type MessagesPropsType = {
	data2: DataTwoObjType[]
}
export const Messages = (props: MessagesPropsType) => {
	return (
		<>
			<h1>Messages</h1>
			<div className={"messagesContainer"}>
				<div>
					<ul>
						{props.data2.map((el) => {
							return (
								<li>{el.name}</li>
							)
						})}
					</ul>
				</div>

				<div>
					<ul>
						{props.data2.map((el) => {
							return (
								<li>{el.message}</li>
							)
						})}
					</ul>
				</div>
			</div>
		</>
	);
};
