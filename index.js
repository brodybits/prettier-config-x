module.exports = {
  overrides: [
    {
      files: ["**/*.js", "**/*.jsx"],
      options: {
        parser: "x-babel",
      },
    },
    {
      files: ["**/*.ts", "**/*.tsx"],
      options: {
        parser: "x-babel-ts",
      },
    },
  ],
};
