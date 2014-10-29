
var assert = require('assert')
var LinkList = require('./index')

exports['test FIFO'] = function () {
    var list = new LinkList();

    list.push(10);
    list.push(20);
    list.push(30);

    assert(list.shift() === 10);
    assert(list.shift() === 20);
    assert(list.shift() === 30);
    assert(list.isEmpty());
}

exports['test cancellable'] = function () {
    var list = new LinkList();

    list.push(1);
    list.push(2);

    var ref = list.push(3);
    list.push(4);

    LinkList.remove(ref);

    assert(list.shift() === 1);
    assert(list.shift() === 2);
    assert(list.shift() === 4);
    assert(list.isEmpty());
}

exports['no exception if remove cancellable multiple times'] = function () {
    var list = new LinkList();

    var ref = list.push(1)

    LinkList.remove(ref)
    LinkList.remove(ref)
    LinkList.remove(ref)

    assert(list.isEmpty())
}
