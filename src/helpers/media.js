export function media() {
  return {
    mobile: window.matchMedia("(min-width: 320px)").matches,
    tablet: window.matchMedia("(min-width: 768px)").matches,
    tabletMax: window.matchMedia("(min-width: 1024px)").matches
  };
}
