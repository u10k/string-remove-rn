

### string-remove-rn
去除\r\n 或者 \r 或者 \n。
remove the \r\n or \r or \n.

<a href="https://www.npmjs.com/package/string-remove-rn"><img src="https://img.shields.io/npm/v/string-remove-rn.svg" style="width: auto; height: auto"></a><a href="https://www.npmjs.com/package/string-remove-rn"><img src="https://img.shields.io/npm/dm/string-remove-rn.svg" style="width: auto; height: auto"></a>


### install

```bash
npm install --save string-remove-rn
```

### use

```js
const stringRn = require('string-remove-rn');

let str = `这里是我从数据库拿到的内容，带"\\r\\n"\r\n直接拿到在字符串赋值处理中火报错，所以去除"\\r\\n"`
//参数 string ['rn'(默认)、'r'、'n']
stringRn(str,'rn');

// 输出 =>
`这里是我从数据库拿到的内容，带"\r\n"直接拿到在字符串赋值处理中火报错，所以去除"\r\n"`
```


