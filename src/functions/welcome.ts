import { randomUUID } from 'crypto';

import chalk from "chalk";


export default function () {
    const log = console.log;
    log(chalk.yellow(
    '                                                                         \n' +
        ' ad88888ba  8b        d8  888b      88  88    ,ad8888ba,    88           \n' +
        'd8"     "8b  Y8,    ,8P   8888b     88  88   d8"\'    `"8b   88           \n' +
        'Y8,           Y8,  ,8P    88 `8b    88  88  d8\'        `8b  88           \n' +
        '`Y8aaaaa,      "8aa8"     88  `8b   88  88  88          88  88           \n' +
        '  `"""""8b,     `88\'      88   `8b  88  88  88          88  88           \n' +
        '        `8b      88       88    `8b 88  88  Y8,        ,8P  88           \n' +
        'Y8a     a8P      88       88     `8888  88   Y8a.    .a8P   88           \n' +
        ' "Y88888P"       88       88      `888  88    `"Y8888Y"\'    88888888888  \n' +
        '                                                                         \n' +
        '                                                                         '
    ))

    log(
        chalk.bgBlack.yellowBright('Boilerplate CLI for'),
        chalk.bgBlack.greenBright('NodeJS'),
        chalk.bgBlack.blue('(TypeScript)\n')
    )

    log('Execution ID:', chalk.bgBlack.bold.yellowBright(randomUUID()))
    log(`© ${new Date().getFullYear()} Syniol Limited. All rights reserved.`)
}