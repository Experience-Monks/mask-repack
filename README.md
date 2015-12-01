# mask-repack

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

Takes a pair of color and alpha images and combines them into a single transparent image. Works both in-browser and node.

## Usage

[![NPM](https://nodei.co/npm/mask-repack.png)](https://www.npmjs.com/package/mask-repack)

### `combined = repack(color, alpha)`

Takes `color` and `alpha`, two images encoded as [ndarrays](http://github.com/scijs/ndarray), and returns a single `combined` ndarray image.

For example, you can combine this with [mask-unpack](https://github.com/jam3/mask-unpack) in a preprocessing step to get transparent images encoded with JPG instead of PNG, potentially saving on page weight for certain images.

``` javascript
const Texture = require('gl-texture2d')
const repack = require('mask-repack')
const load = require('get-pixels')

load('image-color.jpg', function (err, color) {
  load('image-alpha.jpg', function (err, alpha) {
    const data = repack(color, alpha)
    const texture = Texture(gl, data)
  })
})
```

## See Also

* [mask-unpack](https://github.com/jam3/mask-unpack)

## License

MIT, see [LICENSE.md](http://github.com/jam3/mask-repack/blob/master/LICENSE.md) for details.
