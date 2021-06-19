const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
	messagesData: [
		{ id: 1, message: 'Hi' },
		{ id: 2, message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry' },
		{ id: 3, message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry' },
		{
			id: 5, message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
		},
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