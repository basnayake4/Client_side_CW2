import "@testing-library/jest-dom";

/* FIX for react-widgets */
global.ResizeObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};