import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';


let initialState = {
	postData: [
		{
			id: 1, message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry', likesCount: 12
		},
		{ id: 2, message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', likesCount: 12 },
		{ id: 3, message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s', likesCount: 13 },
		{ id: 4, message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s', likesCount: 15 },
		{ id: 5, message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s', likesCount: 16 },
		{ id: 6, message: 'Hi, it is my post', likesCount: 11 },
		{ id: 7, message: 'Hi, it is my post', likesCount: 18 },

	],

	profile: null,
	status: '',
}

const profileReducer = (state = initialState, action) => {

	switch (action.type) {
		case ADD_POST: {
			let newPost = {
				id: 8,
				message: action.newPostText,
				likesCount: 0,
			};
			let stateCopy = { ...state }
			stateCopy.postData = [...state.postData];
			stateCopy.postData.unshift(newPost);
			stateCopy.newPostText = '';
			return stateCopy;
		}

		case SET_USER_PROFILE: {
			return {
				...state,
				profile: action.profile,
			}
		}
		case SET_STATUS: {
			return {
				...state,
				status: action.status,
			}
		}
		case SAVE_PHOTO_SUCCESS: {
			return {
				...state,
				profile: { ...state.profile, photos: action.photos }
			}
		}
		default:
			return state;
	}
}

export const addPostActionCreator = (newPostText) => {
	return {
		type: ADD_POST,
		newPostText,
	}
}

export const setStatus = (status) => {
	return {
		type: SET_STATUS,
		status,
	}
}

export const setUserProfile = (profile) => {
	return {
		type: SET_USER_PROFILE,
		profile,
	}
}

export const savePhotoSuccess = (photos) => {
	return {
		type: SAVE_PHOTO_SUCCESS,
		photos,
	}
}


export const getUserProfile = (userId) => (dispatch) => {
	return usersAPI.getProfile(userId).then(response => {
		dispatch(setUserProfile(response.data));
	});
}

export const getStatus = (userId) => (dispatch) => {
	return profileAPI.getStatus(userId).then(response => {
		const statusAction = setStatus(response.data);
		dispatch(statusAction);
	});
}

export const updateStatus = (status) => (dispatch) => {
	return profileAPI.updateStatus(status).then(response => {
		if (response.data.resultCode === 0) {
			dispatch(setStatus(status));
		}
	});
}

export const savePhoto = (file) => (dispatch) => {
	return profileAPI.savePhoto(file).then(response => {
		if (response.data.resultCode === 0) {
			dispatch(savePhotoSuccess(response.data.data.photos));
		}
	});
}

export const saveProfile = (profile) => (dispatch, getState) => {
	const userId = getState().auth.userId;
	return profileAPI.saveProfile(profile).then(response => {
		if (response.data.resultCode === 0) {
			dispatch(getUserProfile(userId));
		}
	});
}

export default profileReducer;