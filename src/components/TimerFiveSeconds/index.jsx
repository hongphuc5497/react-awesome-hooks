import React, { useState } from "react";
import useTimeout from "../../hooks/useTimeout";

const TimerFiveSeconds = (props) => {
	const [seconds, setSeconds] = useState(0);

	useTimeout(() => {
		setSeconds(seconds + 1);
	}, 5000);

	return <p>{seconds}</p>;
};

export default TimerFiveSeconds;