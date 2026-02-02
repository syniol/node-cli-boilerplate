import { randomUUID } from 'node:crypto';
import chalk from 'chalk';

export default function () {
  const log = console.log;

  log(
    chalk.yellow(
      '                                                                         \n' +
        ' ad88888ba  8b        d8  888b      88  88    ,ad8888ba,    88           \n' +
        'd8"     "8b  Y8,    ,8P   8888b     88  88   d8"\'    `"8b   88           \n' +
        "Y8,           Y8,  ,8P    88 `8b    88  88  d8'        `8b  88           \n" +
        '`Y8aaaaa,      "8aa8"     88  `8b   88  88  88          88  88           \n' +
        '  `"""""8b,     `88\'      88   `8b  88  88  88          88  88           \n' +
        '        `8b      88       88    `8b 88  88  Y8,        ,8P  88           \n' +
        'Y8a     a8P      88       88     `8888  88   Y8a.    .a8P   88           \n' +
        ' "Y88888P"       88       88      `888  88    `"Y8888Y"\'    88888888888  \n' +
        '                                                                         \n' +
        '                                                                         ',
    ),
  );

  log(
    chalk.bold.yellowBright('Boilerplate CLI for'),
    chalk.bold.greenBright('NodeJS'),
    chalk.bold.blue('(TypeScript)\n'),
  );

  log('Execution ID:', chalk.bold.grey(randomUUID()));
  log(`© ${new Date().getFullYear()} Syniol Limited. All rights reserved.`);
}
