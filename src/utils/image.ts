/** Prefix a public asset path with NEXT_PUBLIC_BASE_PATH when the site is served from a sub-path. */
export const getImgPath = (path: string): string => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  if (!basePath || path.startsWith(basePath)) return path;
  return `${basePath}${path}`;
};

/** Prefix a public data path with NEXT_PUBLIC_BASE_PATH when the site is served from a sub-path. */
export const getDataPath = (path: string): string => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  if (!basePath || path.startsWith(basePath)) return path;
  return `${basePath}${path}`;
};