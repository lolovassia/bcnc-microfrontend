const concurrently = require('concurrently');

const PROJECTS = ['host', 'users', 'albums', 'photos', 'components'];

const COMMANDS = PROJECTS.filter(
  (dir) => !(process.argv[2] === 'test' && dir === 'host'),
).map((dir) => ({
  command: `yarn --cwd ${dir} ${process.argv[2]}`,
  name: dir,
  prefixColor: 'green',
}));

function message(text) {
  console.log(text);
}

function success() {
  message('----------------------------------------');
  message('All commands completed successfully.');
  message('----------------------------------------');
}

function failure(value) {
  message('----------------------------------------');
  console.error('One or more commands failed:');
  message('----------------------------------------');
  console.error(value);
  process.exit(1);
}

function init() {
  message('Running commands...');
  const { result } = concurrently(COMMANDS, {
    prefix: 'name',
  });
  result.then(success, failure);
}

init();
