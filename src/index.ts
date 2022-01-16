import { LoadFunction } from './loader'

;(async () => {
    console.log(__dirname)
    const args = process.argv.slice(2)
    const hasArguments = (args?.length || 0) > 0

    if (hasArguments) {
        console.log('Arguments are:', args)
    }

    await (await LoadFunction('welcome')).default()

    process.exit(0)
})()
