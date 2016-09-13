import program from 'commander';

const name = program.args;

if (!name) {
  console.error('No name specified for new CMS');
}

