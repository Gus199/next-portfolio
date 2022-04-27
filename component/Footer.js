import React from "react";

function Footer() {
	return (
		<footer className="page-footer">
			Designed by Amar Ait-Gherbi  &nbsp;
			<span dangerouslySetInnerHTML={{ "__html": "&copy;" }} />2022
		</footer>
	);
}

export default Footer;
