const projectData = [
	{
		imgSrc: "./images/am-find-user.png",
		alt: "find user ScreenShot",
		title: "Find User GitHub",
		description:
			"A full stack web More details will add soon.",
		stack: "React, Mongo, Express, Node, GraphQL, Heroku, HTML",
		//liveLink: "http://www.flowwithmegmo.com/",
		liveLink: "https://github.com/Gus199/Find-User",
		codeLink: "https://github.com/Gus199/Find-User",
		isFeatured: true,
		featuredImgs: [
			//{ img: "./images/admin-dashboard-view-min.png", idx: 0 },
			//{ img: "./images/fwm-hero-view-min.png", idx: 1 },
			//{ img: "./images/register-class-view-min.png", idx: 2 },
			// { img: "./images/dashboard-view-min.png", idx: 3 },
			// { img: "./images/playlist-selection-view-min.png", idx: 4 },
			// { img: "./images/create-class-view-min.png", idx: 5 },

			{ img: "./images/am-find-user.png", idx: 0 },
			{ img: "./images/fwm-hero-view-min.png", idx: 1 },
			{ img: "./images/am-find-user.png", idx: 2 },
			{ img: "./images/am-find-user.png", idx: 3 },
			{ img: "./images/playlist-selection-view-min.png", idx: 4 },
			// { img: "./images/am-find-user.png", idx: 5 },
		],
		featuredText1:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
		featuredText2:
			"The app was built with the MERN stack ....we add more details sooooooooooooooon.",
	},
	{
		imgSrc: "./images/event0.png",
		alt: "CarShow app screenshot",
		title: "Car Show Event",
		description:
			"I will add all description about this app later.",
		stack: "NextJs, ..., ..., Node, Heroku, HTML, CSS",
		liveLink: "#",
		codeLink: "https://github.com/Gus199/car-show-events",
		isFeatured: true,
		featuredImgs: [
			{ img: "./images/event1.png", idx: 0 },
			{ img: "./images/event2.png", idx: 1 },
			{ img: "./images/event1.png", idx: 2 },
		],
		featuredText1:
			"I worked in ....... Comming Soon  ",
		featuredText2:
			"The product was built with a Next.js, Express, Node, and ......  The front end was built with Next.js.  On the technical side I handled the internal javascript logic, the REST API routes and MySQL database queries, and configuring Nodemailer and node-cron for automated email notifications.  I also deployed the finished product to Heroku.  This project was a challenge to complete in less than 2 months but we delivered on all of ",
	},
	{
		imgSrc: "./images/playlists.png",
		alt: "playlist app screenshot",
		title: "Playlists",
		description:
			"A tool for creating randomized Spotify playlists on the fly.  Utilizes Spotify API with implicit grant flow to access user's spotify playlists.",
		stack: "React, MaterialUI, HTML, CSS",
		liveLink: "https://jeremiah-quill.github.io/spotify-playlists/",
		codeLink: "https://github.com/jeremiah-quill/spotify-playlists",
		isFeatured: true,
		featuredImgs: [
			{ img: "./images/playlists-featured-2.png", idx: 0 },
			{ img: "./images/playlists-featured-1.png", idx: 1 },
			{ img: "./images/playlists-featured-3.png", idx: 2 },
		],
		featuredText1:
			"I designed and developed a web app for creating randomized playlists in Spotify through the Spotify API.  Users are able to scroll through their spotify playlists and choose which playlists to work with.  A slider appears to control how many songs from each playlist will be pulled into their new creation.  When the user is finished tweaking the sliders to their liking they are able to generate a new playlist which randomly chooses songs from each selection based on the slider values.  This new playlist is added to their official spotify account with the click of a button.",
		featuredText2:
			"This app was built in React and leverages MaterialUI for clean and sleek component design.  Navigating the Spotify API was a big challenge in building this tool and required custom recursion logic to paginate through songs and playlists programmatically.",
	},
	{
		imgSrc: "./images/hero-helper.png",
		alt: "hero helper screenshot",
		title: "Hero Helper",
		description:
			"Mock up a landing page within seconds without writing a single line of code. Incorporates Unsplash API for searching of quality images.",
		stack: "Javascript, HTML, CSS",
		liveLink: "https://jeremiah-quill.github.io/hero-helper/",
		codeLink: "https://github.com/jeremiah-quill/hero-helper",
	},
	// {
	// 	imgSrc: "./images/recipe-rundown.png",
	// 	alt: "recipe rundown screenshot",
	// 	title: "Recipe Rundown",
	// 	description:
	// 		"A social CRUD web app for creating, sharing, and discovering recipes.",
	// 	stack: "Javascript, Express, Mongo, Node, HTML, CSS",
	// 	liveLink: "http://www.reciperundown.com/",
	// 	codeLink: "https://github.com/jeremiah-quill/recipe-rundown",
	// },
	// {
	// 	imgSrc: "./images/room-homepage.png",
	// 	alt: "room homepage screenshot",
	// 	title: "E-commerce Homepage",
	// 	description:
	// 		"A prototype for a mobile responsive e-commerce landing page.",
	// 	stack: "React, HTML, CSS",
	// 	liveLink: "https://jeremiah-quill.github.io/room-homepage/",
	// 	codeLink: "https://github.com/jeremiah-quill/room-homepage",
	// },
	// {
	// 	imgSrc: "./images/e-commerce-product.png",
	// 	alt: "e-commerce product page screenshot",
	// 	title: "E-Commerce Product",
	// 	description:
	// 		"A prototype of a mobile responsive e-commerce product page.",
	// 	stack: "React, HTML, CSS",
	// 	liveLink: "https://jeremiah-quill.github.io/react-product-page/",
	// 	codeLink: "https://github.com/jeremiah-quill/react-product-page",
	// },
	// {
	// 	imgSrc: "./images/manage.png",
	// 	alt: "Manage SaaS product screenshot",
	// 	title: "SaaS Landing Page",
	// 	description:
	// 		"A prototype of a mobile responsive SaaS product landing page.",
	// 	stack: "HTML, CSS",
	// 	liveLink: "https://jeremiah-quill.github.io/manage-landing-page/",
	// 	codeLink: "https://github.com/jeremiah-quill/manage-landing-page",
	// },
];

export default projectData;
