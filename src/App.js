import "./styles.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import EventsPage from "./Components/EventsPage/EventsPage";

export default function App() {
	return (
		<Router>
			<div className="App">
				<div className="navLink">
					<ul>
						<li>
							<Link className="button" to="/events">
								All Events
							</Link>
						</li>
						<li>
							<Link className="button" to="/">
								Create an Event
							</Link>
						</li>
					</ul>
				</div>
				<hr />
				<EventsPage />
			</div>
		</Router>
	);
}
