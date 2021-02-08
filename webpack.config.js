const Encore = require("@symfony/webpack-encore");
const path = require("path");

// Manually configure the runtime environment if not already configured yet by the "encore" command.
// It's useful when you use tools that rely on webpack.config.js file.
if (!Encore.isRuntimeEnvironmentConfigured()) {
  Encore.configureRuntimeEnvironment(process.env.NODE_ENV || "dev");
}

Encore.setOutputPath("public/build/")
  .setPublicPath("/build")
  .addEntry("app", "./assets/index.js")
  .splitEntryChunks()
  .enableSingleRuntimeChunk()
  .cleanupOutputBeforeBuild()
  .enableBuildNotifications()
  .enableSourceMaps(!Encore.isProduction())
  .enableVersioning(Encore.isProduction())
  .configureBabel((config) => {
    config.plugins.push("@babel/plugin-proposal-class-properties");
  })
  .configureBabelPresetEnv((config) => {
    config.useBuiltIns = "usage";
    config.corejs = 3;
  })
  .addAliases({
    api: path.resolve(__dirname, "./assets/api"),
    components: path.resolve(__dirname, "./assets/components"),
    constants: path.resolve(__dirname, "./assets/constants"),
    docs: path.resolve(__dirname, "./assets/docs"),
    icons: path.resolve(__dirname, "./assets/icons"),
    images: path.resolve(__dirname, "./assets/images"),
    styles: path.resolve(__dirname, "./assets/styles"),
    utils: path.resolve(__dirname, "./assets/utils/"),
    views: path.resolve(__dirname, "./assets/views"),
  })
  .copyFiles({
    from: "./assets/images",
    to: "images/[path][name].[hash:8].[ext]",
    pattern: /\.(png|jpg|jpeg|svg)$/,
  })
  .copyFiles({
    from: "./assets/docs",
    to: "docs/[path][name].[hash:8].[ext]",
    pattern: /\.(pdf)$/,
  })
  .addLoader({ test: /\.(pdf)$/, loader: "file-loader" })
  .enableSassLoader()
  .enableReactPreset();

module.exports = Encore.getWebpackConfig();
