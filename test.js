var time = require("./");

it('converts time written in kurdish to epoch', function(){
  expect(time('1 miliçirke')).to.equal(1);
  expect(time('375 miliçirke')).to.equal(375);

  expect(time('1 çirke')).to.equal(1000);
  expect(time('5 Deqe')).to.equal(300000);
  expect(time('5 deqe 15 çirke')).to.equal(315000);
  expect(time('2 Sehet, 5 Deqe and 15 Çirke')).to.equal(7515000);

  expect(time('1s')).to.equal(3600000);
  expect(time('20s 5d 15ç')).to.equal(72315000);

  expect(time('3 hefte, 5 roj, 6 sehet')).to.equal(2268000000);
});

it('ignores unrecognized patterns', function(){
  expect(time('her 1 miliçirke')).to.equal(1);
  expect(time('foo, bar12 a3m 1 miliçirke + 5mç + 4mç roj baş')).to.equal(10);
});

it('accepts singular time units without numbers', function(){

  expect(time('miliçirke')).to.equal(1);
  expect(time('bir miliçirke')).to.equal(1);
  expect(time('her miliçirke')).to.equal(1);
  expect(time('her deqe + 45 çirke')).to.equal(105000);

});
