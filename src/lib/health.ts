/**
 * This system assesses the operational status of the CLI for Docker and Kubernetes health checks.
 * @param {string[]} args
 */
export function health(args: string[]): void {
  if (args.length === 0) {
    return;
  }

  const [health] = args
  if (health === 'health-check') {
    console.info('CLI app is healthy')
    process.exit(0)
  }
}
