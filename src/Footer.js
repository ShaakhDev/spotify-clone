import React from "react";
import "./Footer.css";
import {
	PlayCircle,
	PauseCircle,
	SkipPrevious,
	SkipNext,
	Shuffle,
	Repeat,
	PlaylistPlay,
	VolumeDown,
} from "@mui/icons-material";
import { Grid, Slider } from "@mui/material";

function Footer() {
	return (
		<div className="footer">
			<div className="footer__left">
				<img
					className="footer__albumLogo"
					src="https://img.discogs.com/GHk2M5HQ_i0b5TKXL1r2EaaCIPA=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/A-97139-1632389941-5172.jpeg.jpg"
					alt=""
				/>
				<div className="footer__songInfo">
					<h4>Yeah!</h4>
					<p>Usher</p>
				</div>
			</div>
			<div className="footer__center">
				<Shuffle className="footer__green" />
				<SkipPrevious className="footer__icon" />
				<PlayCircle fontSize="large" className="footer__icon " />
				<SkipNext className="footer__icon" />
				<Repeat className="footer__green" />
			</div>
			<div className="footer__right">
				<Grid container spacing={2}>
					<Grid item>
						<PlaylistPlay />
					</Grid>
					<Grid item>
						<VolumeDown />
					</Grid>
					<Grid item xs>
						<Slider size="small" />
					</Grid>
				</Grid>
			</div>
		</div>
	);
}

export default Footer;
