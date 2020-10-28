module.exports = {
  presets: [
    [
      "@vue/cli-plugin-babel/preset",
      {
        useBuiltIns: "entry",
        exclude: ["transform-async-to-generator", "transform-regenerator"]
      }
    ]
  ],
  plugins: [["module:fast-async", { spec: true }]]
};
