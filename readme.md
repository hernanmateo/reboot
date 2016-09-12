# reboot

> iOS/Linux reboot.


## Install

```
$ npm install --save reboot
```


## Usage

```js
var reboot = require('nodejs-system-reboot');

reboot( function (err, stderr, stdout) {
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
