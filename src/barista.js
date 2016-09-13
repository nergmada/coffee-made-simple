import program from 'commander';

program
  .version('0.0.1')
  .command('make [foldername]', 'Creates a new CMS admin end').alias('mk')
  .parse(process.argv);
