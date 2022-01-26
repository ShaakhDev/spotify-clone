import React from "react";
import "./Body.css";
import Header from "./Header";
import SongRow from "./SongRow";
import { useDateLayerValue } from "./DataLayer";
import { Favorite, MoreHoriz, PlayCircle } from "@mui/icons-material";

function Body({ spotify }) {
	const [{ discover_weekly }] = useDateLayerValue();
	return (
		<div className="body">
			<Header spotify={spotify} />

			<div className="body__info">
				<img src={discover_weekly?.images[0]?.url} alt="" />
				<div className="body__infoText">
					<strong>PLAYLIST</strong>
					<h2>Discover weekly</h2>
					<p>{discover_weekly?.description}</p>
				</div>
			</div>
			<div className="body__songs">
				<div className="body__icons">
					<PlayCircle className="body__shuffle" />
					<Favorite fontSize="large" />
					<MoreHoriz />
				</div>
				{discover_weekly?.tracks.items.map(item => (
					<SongRow key={item.track.id} track={item.track} />
				))}
			</div>
		</div>
	);
}

export default Body;
