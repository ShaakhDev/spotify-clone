import { Search } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { useDateLayerValue } from "./DataLayer";
import "./Header.css";

function Header() {
	const [{ user }, dispatch] = useDateLayerValue();

	return (
		<div className="header">
			<div className="header__left">
				<Search />
				<input
					type="text"
					placeholder="Search for Artists, Songs, or podcasts "
				/>
			</div>
			<div className="header__right">
				<Avatar src={user?.images[0]?.url} alt={user?.name} />
				<h4>{user?.display_name}</h4>
			</div>
		</div>
	);
}

export default Header;
