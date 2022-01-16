import { join } from 'path'


export async function loadFunction(functionName: string): Promise<{
    default<T>(args?: T): Promise<void>
}> {
    return await import(join(__dirname, '..', 'functions', functionName))
}
