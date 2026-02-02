import { join } from 'node:path';
import { readdirSync } from 'node:fs';

import { loadFunction, health } from './index';

/**
 * The primary function is responsible for iterating through all files located 
 * within the "functions" directory, which resides inside the "src" directory 
 * of the project. It then employs the _loadFunction_ utility to facilitate 
 * the importation of these identified functions through a process of lazy loading.
 *
 * Upon the successful loading of all designated functions, the system will 
 * proceed to execute them collectively utilising the _promise.all_ construct. 
 * Subsequently, all pertinent arguments will be supplied as parameters to 
 * each individual method.
 */
export async function main() {
  const functions = readdirSync(join(__dirname, '..', 'functions'));
  const args = process.argv.slice(2);
  health(args)

  const tasks: Promise<void>[] = [];
  for (const functionName of functions) {
    tasks.push((await loadFunction(functionName)).default(args));
  }

  await Promise.all(tasks);
}
