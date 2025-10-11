export const getImageUrl = (path: string) => {
  const base = import.meta.env.BASE_URL;

  return `${base.endsWith('/') ? base : `${base}/`}${path}`;
};
