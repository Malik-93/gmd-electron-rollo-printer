module.exports = {
  packagerConfig: {
    protocols: [
      {
        "name": "Electron Fiddle",
        "schemes": ["electron-fiddle-gmd"]
      }
    ]
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {},
    },
    {
      name: '@electron-forge/maker-zip',
      config: {}
    },
    {
      name: '@electron-forge/maker-deb',
      config: {
        "mimeType": ["x-scheme-handler/electron-fiddle-gmd"]
      },
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
  ],
};
