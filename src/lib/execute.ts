import { join } from 'node:path';
import { readdirSync } from 'node:fs';

import { loadFunction } from './loader';

/**
 * main function iterates through files available under **functions** folder
 * inside the **src** folder of the project and uses _loadFunction_ to import
 * the found functions using lazy loading.
 *
 * After successful load of functions, it will execute all the found functions
 * using _promise.all_. All the arguments then will be passed as a parameter
 * inside each method.
 */
export async function main() {
  const functions = readdirSync(join(__dirname, '..', 'functions'));
  const args = process.argv.slice(2);

  const tasks: Promise<void>[] = [];
  for (const functionName of functions) {
    tasks.push((await loadFunction(functionName)).default(args));
  }

  await Promise.all(tasks);
}
