// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
    mount: {
      /* ... */
    },
    plugins: [
      '@snowpack/plugin-postcss',
      [
        '@snowpack/plugin-run-script',
        {
          cmd: 'yarn build',
          watch: 'yarn start',
        },
      ],
    ],
    packageOptions: {
      /* ... */
    },
    devOptions: {
      open: 'none',
    },
    buildOptions: {
      clean: true,
      out: 'out',
    },
  };
  