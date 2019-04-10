const path = require("path");
function resolve(dir) {
  return path.join(__dirname, "..", dir);
}
module.exports = {
  alias: {
    vue$: "vue/dist/vue.esm.js",
    "@": resolve("src"),
    "@imgs": resolve("src/assets/imgs"),
    "@pages": resolve("src/pages"),
    "@com": resolve("src/components"),
    "@css": resolve("src/style")
  }
};
