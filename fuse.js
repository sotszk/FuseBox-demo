const { FuseBox } = require('fuse-box')

// initialize FuseBox instance named Producer
const fuse = FuseBox.init({
  homeDir: 'src',
  target: 'browser@es6',
  output: 'dist/$name.js', // $name.js is placeholder which will be replaced
  useTypescriptCompiler: true,
})

fuse.bundle('app')
  .instructions('> index.ts') // specify target to be bundle
  .hmr()
  .watch()

fuse.run() // start bundle

