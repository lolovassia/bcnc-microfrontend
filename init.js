const concurrently = require("concurrently");

const PROJECTS = ["host", "users", "albums", "photos", "components"];

const COMMANDS = PROJECTS.map((dir) => ({
	command: `yarn --cwd ${dir} ${process.argv[2]}`,
	name: dir,
	prefixColor: "green",
}));

function message(text) {
	console.log(text);
}

function success() {
	message("All commands completed successfully.");
}

function failure(value) {
	console.error("One or more commands failed.", value);
	process.exit(1);
}

function init() {
	message("Running commands...");
	const { result } = concurrently(COMMANDS, {
		prefix: "name",
	});
	result.then(success, failure);
}

init();

