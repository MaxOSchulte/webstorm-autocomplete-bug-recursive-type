export type RecursiveKeyof<T> = {
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    [K in keyof T & (string | number)]: T[K] extends Record<string, any> ? `${K}` | `${K}.${RecursiveKeyof<T[K]>}` : `${K}`;
}[keyof T & (string | number)];
