# **LINKED LIST**

```js
class Nod {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  log() {
    if (this.head === null) {
      return console.log("this list is empty");
    }

    let logedList = [];
    let current = this.head;
    while (current !== null) {
      logedList.push(current.data);
      current = current.next;
    }
    console.log(logedList);
  }

  append(data) {
    if (this.head === null) {
      this.head = new Nod(data);
      return;
    }

    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = new Nod(data);
  }

  prepend(data) {
    if (this.head === null) {
      this.head = new Nod(data);
      return;
    }

    const currentHead = this.head;
    this.head = new Nod(data);
    this.head.next = currentHead;
  }

  delete(value) {
    if (this.head === null) {
      return console.log("this list is empty");
    }

    let current = this.head;
    if (current.data === value) {
      this.head = current.next;
      return;
    }

    while (current.next.data !== value) {
      current = current.next;
    }
    current.next = current.next.next;
  }

  insertAfter(data, after) {
    if (this.head === null) {
      return console.log("can't insert in empty list");
    }

    let current = this.head;
    // if the head is already the after value
    if (current.data === after) {
      let afterNode = current.next;
      current.next = new Nod(data);
      current.next.next = afterNode;
      return;
    }
    // while we don't find the after value
    while (current.data !== after) {
      if (current.next === null) {
        return console.log(`can't find ${after} in list`);
      }
      current = current.next;
    }
    // if we looped the entire list without finding after value
    if (current.next === null) {
      current.next = new Nod(data);
      return;
    }
    // if we found the after value
    let afterNode = current.next;
    current.next = new Nod(data);
    current.next.next = afterNode;
  }
}

let list = new LinkedList();

// list.append("a");
// list.append("b");
// list.append("c");
// list.prepend("x");
// list.append("d");
// list.log();

// list.delete("d");
// list.log();

// list.insertAfter("haha", "x");
// list.log();

```