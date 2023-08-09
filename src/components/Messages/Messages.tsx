import React from 'react';
import {DataTwoObjType} from "../../App";
// import "./Messages.css"
import styles from "./Messages.module.css"


type MessagesPropsType = {
	data2: DataTwoObjType[]
}
export const Messages = (props: MessagesPropsType) => {
	return (
		<div className={styles.messages}>
			<h1>Messages</h1>
			<div className={styles.messagesContainer}>
				<div className={styles.item}>
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
		</div>
	);
};
