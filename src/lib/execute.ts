import { join } from 'node:path'
import { readdirSync } from 'node:fs'

import { loadFunction } from './loader'


export async function main() {
    const functions = readdirSync(join(__dirname, '..', 'functions'))
    const args = process.argv.slice(2)

    const tasks: Promise<void>[] = []
    for (const functionName of functions) {
        tasks.push((await loadFunction(functionName)).default(args))
    }

    await Promise.all(tasks)
}
