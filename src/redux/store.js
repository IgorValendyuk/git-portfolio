import dialogsReducer from "./dialogs-reducer";
import navReducer from "./nav-reducer";
import profileReducer from "./profile-reducer";

let store = {
	_state: {
		profilePage: {
			postData: [
				{ id: 1, message: 'Hi, how are you7', likesCount: 12 },
				{ id: 2, message: 'Hi, it is my post', likesCount: 11 },
				{ id: 3, message: 'Hi, it is my post', likesCount: 11 },
				{ id: 4, message: 'Hi, it is my post', likesCount: 11 },
				{ id: 5, message: 'Hi, it is my post', likesCount: 11 },
				{ id: 6, message: 'Hi, it is my post', likesCount: 11 },
				{ id: 7, message: 'Hi, it is my post', likesCount: 11 },
			],
			newPostText: '',
		},

		dialogsPage: {
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
			newMessageText: 'dfkthf',
		},

		sidebar: {

			friendsData: [
				{ id: 1, name: 'Vitalya' },
				{ id: 2, name: 'Valera' },
				{ id: 3, name: 'Nastya' },
			],
		}
	},
	_callSubscriber() {
	},


	getState() {
		return this._state;
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	},


	dispatch(action) {
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
		this._state.sidebar = navReducer(this._state.sidebar, action);

		this._callSubscriber(this._state);

	}
}

export default store;
window.store = store;