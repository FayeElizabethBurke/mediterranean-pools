// Strips trailing slash so usage is always: `${b}/images/foo.jpg`
const raw = import.meta.env.BASE_URL ?? '/';
export const b = raw.endsWith('/') ? raw.slice(0, -1) : raw;
