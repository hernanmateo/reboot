# reboot

> Cross OS reboot.


## Install

```
$ npm install --save reboot
```


## Usage

```js
var powerOff = require('reboot');

powerOff( function (err, stderr, stdout) {
	if(!err && !stderr) {
		console.log(stdout);
	}
});
```

## CLI

```
$ npm install --global reboot
```

```
$ reboot
```



## License

MIT © [HernanMateoRosales](http://devstepbarcelona.com)
