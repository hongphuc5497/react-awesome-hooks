import React from "react";
import "./App.css";
import {
	TimerFiveSeconds,
	MoneyCount,
	HitBox,
	HitBoxOutSide,
	FetchPerson,
	ResourceCounter,
	MountComponent,
} from "./components";

function App() {
	return (
		<div className="App">
			<TimerFiveSeconds />
			<hr/>

			<MoneyCount />
			<hr/>

			<HitBox onClickInside={() => alert("hit the box inside")} />
			<hr/>

			<HitBoxOutSide onClickOutSide={() => alert(`hit the box outside`)} />
			<hr/>

			<FetchPerson />
			<hr/>

			<ResourceCounter />
			<hr/>

      <MountComponent />
      <hr/>
		</div>
	);
}

export default App;
