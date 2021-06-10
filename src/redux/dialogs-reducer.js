const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
	messagesData: [
		{ id: 1, message: 'Hi' },
		{ id: 2, message: 'How are you7' },
		{ id: 3, message: 'Hi, you Valerii7' },
		{ id: 5, message: 'Hi, I suck dick.' },
		{ id: 6, message: 'Hi' },
		{ id: 7, message: 'Hi' },
	],

	dialogsData: [
		{ id: 1, name: 'Vitalya' },
		{ id: 2, name: 'Valera' },
		{ id: 3, name: 'Nastya' },
		{ id: 5, name: 'Ruslan' },
		{ id: 6, name: 'Galya' },
		{ id: 7, name: 'Vitalii' },
	],

};


const dialogsReducer = (state = initialState, action) => {
	let stateCopy = {
		...state
	};
	if (action.type === SEND_MESSAGE) {
		let body = action.newMessageText;
		stateCopy.messagesData.push({ id: 8, message: body });
	}

	return stateCopy;
}

export const sendMessageCreator = (newMessageText) => {
	return {
		type: SEND_MESSAGE,
		newMessageText,
	}
}


export default dialogsReducer;