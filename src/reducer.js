export const initialState = {
	user: null,
	playlists: [],
	playing: false,
	item: null,
	// token:
	// 	"BQDHoKpU641jwzbmEKxIUlDSYPeMYifgpcqs8kINRj88wGU_MWMOHaJSvvhhFBPVnpOIadcnNMP5LXEgoWis2u9iQ0-NalMXQ_wFg4dTnfpTxTwSg9zsI3RhpvfmAvftc3xIj66S74jfy69i1hesvNcecMP3svi1SCW2sCZ_J-gi2M0AFetB",
};

const reducer = (state, action) => {
	console.log(action);

	//Action -> type, [payload]
	switch (action.type) {
		case "SET_USER":
			return {
				...state,
				user: action.user,
			};
		case "SET_TOKEN":
			return {
				...state,
				token: action.token,
			};
		case "SET_PLAYLISTS":
			return {
				...state,
				playlists: action.playlists,
			};
		case "SET_DISCOVER_WEEKLY":
			return {
				...state,
				discover_weekly: action.discover_weekly,
			};
		default:
			return state;
	}
};

export default reducer;
