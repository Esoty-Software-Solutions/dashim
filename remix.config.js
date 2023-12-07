/** @type {import('@remix-run/dev').AppConfig} */
export default {
  // cacheDirectory: "./node_modules/.cache/remix", // from indie stack
  ignoredRouteFiles: ['**/.*', '**/*.test.{ts,tsx}'],
  tailwind: true,
  postcss: true,
  serverModuleFormat: 'cjs', // from indie stack
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // publicPath: "/build/",
  // serverBuildPath: "build/index.js",
}
