module.exports = {
  plugins: [<% if (typescript) { %>
    [
      '@babel/plugin-transform-typescript',
      {
        allExtensions: true,
        onlyRemoveTypeImports: true,
        allowDeclareFields: true,
      },
    ],<% } %>
    [
      'babel-plugin-ember-template-compilation',
      {
        targetFormat: 'hbs',
        transforms: []
      },
    ],
    [
      'module:decorator-transforms',
      {
        runtime: {
          import: 'decorator-transforms/runtime-esm',
        },
      },
    ],
  ],

  generatorOpts: {
    compact: false,
  },
};
