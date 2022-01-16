export async function LoadFunction(
  functionName: string
): Promise<{
    default<T>(args?: T): Promise<any>;
}> {
    return await import(`${__dirname}/functions/${functionName}`);
}
