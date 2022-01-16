import { join } from 'path'
import { loadFunction } from './loader'

export async function main() {
    const functionTemplate: { functions: string[] } = await import(
        join(__dirname, '..', '..', 'template.json')
    )
    const args = process.argv.slice(2)

    const tasks: Promise<void>[] = []
    for (const functionName of functionTemplate.functions) {
        tasks.push((await loadFunction(functionName)).default(args))
    }

    await Promise.all(tasks)
}
