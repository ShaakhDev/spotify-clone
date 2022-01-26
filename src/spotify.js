export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";
const clientId = "c903d4eee4e64cf4919908c19589af2f";

const scopes = [
	"user-read-currently-playing",
	"user-read-recently-played",
	"user-read-playback-state",
	"user-top-read",
	"user-modify-playback-state",
];

export const getTokenFromUrl = () => {
	return window.location.hash
		.substring(1)
		.split("&")
		.reduce((initial, item) => {
			let parts = item.split("=");
			initial[parts[0]] = decodeURIComponent(parts[1]);
			return initial;
		}, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
	"%20"
)}&response_type=token&show_dialog=true`;

//http://localhost:3000/?code=AQCaEuCIHlo4-PWvnGEy_CZPnWuzFbWpAnOv7x7QULl8QtMdnD4onAbW7TipNYv_UAW_Y7nBjg7-CduZZCAiIHZ-OrVfkquC5U6imPKOaoWEe0Bx6RmZBZpJsWoTBG0_QifmSPBN98WAIrnNjn9WiNkEGeHy1BmjYe-O2BIuS9TEUUHDR87t4vw-4v5Z20IPBb82azGcGJiHKcZ1FHDAVl3IZJkvyOM78NFnnT68jccL0ykAFCCcNqI9k9UbollNhM3JMm9MvmWXKhJQBcAScSBj_djT7B7bUZOBMbQJ0ROYUmjPiqonHhPa3XxO586Hs-EwWkM-rw
//http://localhost:3000/#access_token=BQA5XKkZO4tKAJiXHaDnoI-_f-CaoV_FbjMJl3T4OPaTpUlXinFCM0Z5gJaECmoGrokE5YoxG2aysuJKmcWkiP-Us5nMoifOe-dlQH1mlo1Aeo3WuCopYoOpec-kHJhHYvJ1aWfgfpDU0IV1zwOTHIZEWE004n_eaP8WoGJZe4XBUIlg5Vs8&token_type=Bearer&expires_in=3600
//http://localhost:3000/#access_token=BQA5XKkZO4tKAJiXHaDnoI-_f-CaoV_FbjMJl3T4OPaTpUlXinFCM0Z5gJaECmoGrokE5YoxG2aysuJKmcWkiP-Us5nMoifOe-dlQH1mlo1Aeo3WuCopYoOpec-kHJhHYvJ1aWfgfpDU0IV1zwOTHIZEWE004n_eaP8WoGJZe4XBUIlg5Vs8&token_type=Bearer&expires_in=3600
