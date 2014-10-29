
// nask-bench is used
// $ nask bench bench.js
// linklist x 7,252,584 ops/sec ±0.63% (85 runs sampled)
// array x 2,261,496 ops/sec ±0.79% (93 runs sampled)
// Fastest is linklist

var LinkList = require('./index')

var k = 3

function test(l) {
    var x = 1
    for (var i = 0; i < k; i++) {
        l.push(function () {
            return x++
        })
    }
    for (var i = 0; i < k; i++) {
        l.shift()()
    }
    return x
}

exports['linklist'] = function () {
    return test(new LinkList())
}

exports['array'] = function () {
    return test([])
}
