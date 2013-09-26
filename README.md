## kurdish-time

Parses times written in simple Kurdish to unix time. Based on [english-time](http://github.com/azer/english-time).

Translation: [@omarkurt](http://github.com/omarkurt)

```js
time = require('kurdish-time')

time('314 çirke')
// => 314

time('5 deqe 15 çirke')
// => 315000

time('1 sehet, 5 deqe ve 15 Çirke')
// => 3915000

time('2se 15r 15ç')
// => 3915000

time('3 hefte, 5 roj, 6 sehet')
// => 2268000000

time('3h, 5r 6s')
// => 2268000000
```

## Install

```bash
$ npm install turkish-time
```

<a name="ref" />
## List of Recognized Unit Aliases

**Milliseconds**

* mç
* miliçirke

**Second(s)**

* ç
* çirke

**Minute(s)**

* d
* dq
* deqe

**Hour(s)**

* s
* sehet

**Day(s)**

* g
* roj
* rojin

**Week(s)**

* h
* hefte
