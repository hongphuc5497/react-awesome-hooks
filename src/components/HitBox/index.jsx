import React, { useRef } from "react";
import useClickInside from "../../hooks/useClickInside";

const HitBox = ({ onClickInside }) => {
	const clickRef = useRef();
	useClickInside(clickRef, onClickInside);

	return (
		<div
			className="hit-box"
			ref={clickRef}
			style={{
				border: "5px solid green",
				height: 300,
				width: 600,
        margin: 'auto',
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<p>Hit the box</p>
		</div>
	);
};

export default HitBox;
