import chalk from 'chalk';

/**
 * Example function: This method only prints the arguments parsed by CLI
 * @param args string[]
 */
export default function (args?: string[]) {
  if ((args?.length || 0) > 0) {
    console.log(chalk.blueBright('Arguments are:'), args);
  }
}
