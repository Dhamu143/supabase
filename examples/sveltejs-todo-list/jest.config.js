// as of 2020-10-03 default config hangs

const config = { ...require('@snowpack/app-scripts-svelte/jest.config.js')() }
// change default config to use svelte-jester

config.transform['^.+\\.svelte$'][0] = 'svelte-jester'
// optional output transformed file for debugging

// config.transform["^.+\\.svelte$"][1]["debug"]=true

// add setuphelper

// config.setupFilesAfterEnv.push('<rootDir>/src/_testHelper.js')

module.exports = {
  ...config,
};
