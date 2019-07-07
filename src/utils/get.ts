export const get = (o: any, p: string[], defaultValue: any = null) =>
  p.reduce((xs, x) => (xs && xs[x] ? xs[x] : defaultValue), o);
