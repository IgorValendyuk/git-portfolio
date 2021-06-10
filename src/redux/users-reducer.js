import { usersAPI } from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';


let initialState = {
	users: [],
	pageSize: 5,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: true,
	followingInProgress: false,
};


const usersReducer = (state = initialState, action) => {

	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId) {
						return { ...u, followed: true }
					}
					return u;
				})
			}
		case UNFOLLOW:
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId) {
						return { ...u, followed: false }
					}
					return u;
				})
			}
		case SET_USERS: {
			return {
				...state,
				users: action.users,
			}
		}
		case SET_CURRENT_PAGE: {
			return {
				...state,
				currentPage: action.currentPage,
			}
		}
		case SET_TOTAL_USERS_COUNT: {
			return {
				...state,
				totalUsersCount: action.count,
			}
		}
		case TOGGLE_IS_FETCHING: {
			return {
				...state,
				isFetching: action.isFetching,
			}
		}
		case TOGGLE_IS_FOLLOWING_PROGRESS: {
			return {
				...state,
				followingInProgress: action.isFetching,
			}
		}
		default:
			return state;
	}
}

export const followSuccess = (userId) => {
	return {
		type: FOLLOW,
		userId,
	}
}

export const unfollowSuccess = (userId) => {
	return {
		type: UNFOLLOW,
		userId,
	}
}

export const setUsers = (users) => {
	return {
		type: SET_USERS,
		users,
	}
}

export const setCurrentPage = (currentPage) => {
	return {
		type: SET_CURRENT_PAGE,
		currentPage,
	}
}

export const setTotalUsersCount = (totalUsersCount) => {
	return {
		type: SET_TOTAL_USERS_COUNT,
		count: totalUsersCount,
	}
}

export const toggleIsFetching = (isFetching) => {
	return {
		type: TOGGLE_IS_FETCHING,
		isFetching,
	}
}

export const toggleFollowingProgress = (isFetching) => {
	return {
		type: TOGGLE_IS_FOLLOWING_PROGRESS,
		isFetching,
	}
}

export const getUsers = (currentPage, pageSize) => {
	return (dispatch) => {
		dispatch(setCurrentPage(currentPage));
		dispatch(toggleIsFetching(true));
		usersAPI.getUsers(currentPage, pageSize)
			.then(data => {
				dispatch(toggleIsFetching(false));
				dispatch(setUsers(data.items));
				dispatch(setTotalUsersCount(data.totalCount));
			});
	}
}

export const follow = (userId) => {
	return (dispatch) => {
		dispatch(toggleFollowingProgress(true));
		usersAPI.follow(userId)
			.then(response => {
				if (response.data.resultCode === 0) {
					dispatch(followSuccess(userId));
				}
				dispatch(toggleFollowingProgress(false));
			});
		dispatch(followSuccess(userId));
	}
}

export const unfollow = (userId) => {
	return (dispatch) => {
		dispatch(toggleFollowingProgress(true));
		usersAPI.unfollow(userId)
			.then(response => {
				if (response.data.resultCode === 0) {
					dispatch(unfollowSuccess(userId));
				}
				dispatch(toggleFollowingProgress(false));
			});
		dispatch(unfollowSuccess(userId));
	}
}

export default usersReducer;