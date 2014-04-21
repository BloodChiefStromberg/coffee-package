Package.describe({
  summary: "Test of making packages with coffeescript!"
});

Package.on_use(function(api, where) {
  api.use('coffeescript', ['client', 'server']);
  api.add_files([
    'lib/base.coffee',
    'client/client-deriv.coffee',
    'server/server-deriv.coffee'],
    ['client', 'server']);
  api.export('Coffee-Package-Handle', ['client', 'server']);
});
