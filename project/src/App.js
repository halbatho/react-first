import logo from "./logo.svg";
import "./App.css";
import { createElement } from "react";

function App() {
	// Императивный стиль
	const currentYear = new Date().getFullYear();
	// Декларативный
	return createElement(
		"div",
		{
			className: "App",
		},
		/*#__PURE__*/ createElement(
			"header",
			{
				className: "App-header",
			},
			/*#__PURE__*/ createElement("img", {
				src: logo,
				className: "App-logo",
				alt: "logo",
			}),
			/*#__PURE__*/ createElement(
				"p",
				null,
				"Edit ",
				/*#__PURE__*/ createElement("code", null, "src/App.js"),
				" and save to reload."
			),
			/*#__PURE__*/ createElement(
				"a",
				{
					className: "App-link",
					href: "https://reactjs.org",
					target: "_blank",
					rel: "noopener noreferrer",
				},
				"Learn React"
			),
			/*#__PURE__*/ createElement(
				"p",
				null,
				"\u0422\u0435\u043A\u0443\u0449\u0438\u0439 \u0433\u043E\u0434: ",
				currentYear
			)
		)
	);
}
export default App;
