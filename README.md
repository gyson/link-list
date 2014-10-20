
# link-list

FIFO queue

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
