requireDir = require('require-dir');

directories = ['init', 'views', 'databases', 'functions', 'routes'];

directories.forEach(function(dir){
  requireDir(dir, {recurse: true});
});