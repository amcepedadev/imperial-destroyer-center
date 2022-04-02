import { useState, useEffect } from "react";

const keysOf = (o: object) => Object.keys(o);
export const sizes = {
  mobile: "450px",
  tablet: "810px",
  desktop: "1280px",
};

const minWidthQuery = (width: string) => `@media (min-width: ${width})`;
export const from: any = keysOf(sizes).reduce(
  (acc, key) =>
    Object.assign(Object.assign({}, acc), { [key]: minWidthQuery((sizes as any)[key]) }),
  {}
);

const maxWidthQuery = (width: string) => `@media (max-width: ${width})`;
export const until: any = keysOf(sizes).reduce(
  (acc, key) =>
    Object.assign(Object.assign({}, acc), { [key]: maxWidthQuery((sizes as any)[key]) }),
  {}
);

export const useMediaQuery = (query: string) => {
  const mediaQuery = query.replace("@media", "").trim();
  const [match, setMatch] = useState(false);
  useEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQuery);
    const handleChange = (event: any) => setMatch(event.matches);
    mediaQueryList.addListener(handleChange);
    return () => mediaQueryList.removeListener(handleChange);
  }, [mediaQuery]);

  useEffect(() => {
    setMatch(() => window.matchMedia(mediaQuery).matches);
  }, [mediaQuery]);

  return match;
};
