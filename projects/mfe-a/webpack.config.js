const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "mfe-a",
  exposes: {
    "./routes": "./projects/mfe-a/src/app/app.routes.ts",
    "./AppComponent": "./projects/mfe-a/src/app/app.component.ts",
  },
  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});
