var browserify = require('browserify');
var test = require('tap').test;
var babelify = require('../');

test('passes options via configure', function(t) {
  t.plan(3);

  var b = browserify(__dirname + '/bundle/index.js');

  b.transform(babelify.configure({
    presets: ['es2015'],
    plugins: ['transform-es3-property-literals']
  }));

  b.bundle(function (err, src) {
    t.error(err);
    t.match(src.toString(), /"catch": "catch"/);
    t.match(src.toString(), /"delete": "delete"/);
  });
});

test('passes options via browserify', function(t) {
  t.plan(3);

  var b = browserify(__dirname + '/bundle/index.js');

  b.transform(babelify, {
    presets: ['es2015'],
    plugins: ['transform-es3-property-literals']
  });

  b.bundle(function (err, src) {
    t.error(err);
    t.match(src.toString(), /"catch": "catch"/);
    t.match(src.toString(), /"delete": "delete"/);
  });
});
