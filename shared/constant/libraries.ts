export const libraries = [
  {
    name: "sherlock-js",
    describe:
      "a tools to search username across multiple sites, supported on node JS and react native (this a typescript fork of sherlock.py)",
    demo: "sherlock-js",
    git: "https://github.com/ilyaSuperGlue/sherlock-js",
  },
  {
    name: "react-native-reanimated-confetti",
    describe:
      "a small bundle size npm library to display confetti animation using only reanimated",
    demo: "react-native-reanimated-confetti",
    git: "https://github.com/ilyaSuperGlue/react-native-reanimated-confetti",
  },
];

export interface TLibrary {
  name: string;
  describe: string;
  demo: string;
  git: string;
}
