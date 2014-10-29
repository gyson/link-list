
# link-list

High performance FIFO queue, O(1) time to push, shift, remove.

## Install

```
npm install link-list
```

## Example

```js
    var assert = require('assert')
    var LinkList = require('link-list')

    var list = new LinkList()

    assert(list.isEmpty())

    list.push(1)

    assert(list.shift() === 1)

    list.push(2)
    list.push(3)

    list.shiftEach(console.log) // => 2, 3

    // Usage of LinkList.remove

    list.push(1)
    var obj = list.push(2)
    list.push(3)

    LinkList.remove(obj)

    list.shiftEach(console.log) // => 1, 3
```

## API
### `new LinkList()`

Create a LinkList instance.

Example:
```js
var list = new LinkList()
```
---
### `.push( data )`

Push data to the tail of queue, it will return a cancellable (reference of data), which could be removed in O(1) time with `remove` method.

Example:
```js
var list = new LinkList()
assert(list.isEmpty())

var ref = list.push(1234)
list.remove(ref) // remove data in constant time

assert(list.isEmpty())
```
---
### `.shift()`

Shift data from the head of queue.

Example:
```js
var list = new LinkList()
list.push(1)
list.push(2)
list.push(3)
list.shift() // => 1
list.shift() // => 2
list.shift() // => 3
```
---
### `.isEmpty()`

Check if list is empty.

Example:
```js
var list = new LinkList()
list.isEmpty() // => true
```
### `.remove( ref )`

Remove data from queue in constant time.

Example:
```js
var list = new LinkList()
var ref = list.push(123)
list.remove(ref)
list.isEmpty() // => true
```
