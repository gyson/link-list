
// nask-bench is used

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
