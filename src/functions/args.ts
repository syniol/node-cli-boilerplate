import chalk from 'chalk'

export default function (args?: string[]) {
    if ((args?.length || 0) > 0) {
        console.log(chalk.blueBright('Arguments are:'), args)
    }
}
