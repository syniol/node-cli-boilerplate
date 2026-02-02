import { join } from 'node:path';
import chalk from 'chalk';

/**
 * It will dynamically import a single function using lazy loading
 *
 * @param functionName string
 * @return Promise<{ default<T>(args?: T): Promise<void> }>
 */
export async function loadFunction(functionName: string): Promise<{
  default<T>(args?: T): Promise<void>;
}> {
  try {
    return await import(join(__dirname, '..', 'functions', functionName));
  } catch (_) {
    console.error(
      chalk.red.bold(
        `\nError finding template function:\n${functionName} from ${join(
          __dirname,
          '..',
          'functions',
        )}\n`,
      ),
    );

    process.exit(-1);
  }
}
