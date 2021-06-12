import axios from "axios";


const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		'API-KEY': '5c557cdf-caa2-4166-9f1c-09841b6d84b0',
	}
})

export const usersAPI = {
	getUsers(currentPage, pageSize) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`)
			.then(response => {
				return response.data;
			});
	},
	follow(userId) {
		return instance.post(`follow/${userId}`)
	},
	unfollow(userId) {
		return instance.delete(`follow/${userId}`,)
	},
	getProfile(userId) {
		console.warn('Другой метод')
		return profileAPI.getProfile(userId);
	}
}

export const profileAPI = {
	getProfile(userId) {
		return instance.get(`profile/` + userId);
	},
	getStatus(userId) {
		return instance.get(`profile/status/` + userId);
	},
	updateStatus(status) {
		return instance.put(`profile/status/`, { status: status });
	},
	savePhoto(photoFile) {
		const formData = new FormData();
		formData.append('image', photoFile);

		return instance.put(`profile/photo/`, formData, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		});
	},
	saveProfile(profile) {
		return instance.put(`profile/`, profile);
	}
}

export const authAPI = {
	me() {
		return instance.get(`auth/me`,);
	},
	login(email, password, rememverMe = false) {
		return instance.post(`auth/login`, { email, password, rememverMe });
	},
	logout() {
		return instance.delete(`auth/login`);
	}
}