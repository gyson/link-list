// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// based on: https://github.com/joyent/node/blob/master/lib/_linklist.js

'use strict'

module.exports = LinkList

function LinkList() {
    this.next = this
    this.prev = this
}

LinkList.prototype.shift = function () {
    if (this.isEmpty()) {
        throw new Error('Cannot shift from empty list')
    }
    return remove(this.next)
}

function remove(item) {
    item.next.prev = item.prev
    item.prev.next = item.next
    item.next = null
    item.prev = null
    return item.data
}
LinkList.remove = remove

LinkList.prototype.push = function (data) {
    var item = {
        data: data,
        next: this,
        prev: this.prev
    }
    this.prev.next = item
    this.prev = item
    return item
}

LinkList.prototype.shiftEach = function (handler) {
    while (this.next !== this) {
        handler(remove(this.next))
    }
}

LinkList.prototype.isEmpty = function () {
  return this.prev === this
}
