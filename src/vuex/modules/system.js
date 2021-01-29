const state = {
	systemInfo: {},
	category: {},
	isTop: true,
	scrollTop: 0
}

const actions = {
	isTop({
		commit
	}, status) {
		commit('ISTOP', status)
	},
	showScrollTop({
		commit
	}, status) {
		commit('SCROLLTOP', status)
	}
}
const mutations = {
	SYSTEMINFO: (state, info) => {
		state.systemInfo = info
	},
	CATEGORY: (state, info) => {
		state.category = info
	},
	ISTOP: (state, info) => {
		state.isTop = info
	},
	SCROLLTOP: (state, info) => {
		state.scrollTop = info
	}
}
const getters = {
	getSystemInfo: function(state) {
		return state.systemInfo
	},
	getCategory: function(state) {
		return state.category
	}
}
export default {
	state,
	getters,
	mutations,
	actions
}
