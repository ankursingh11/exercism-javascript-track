// https://exercism.org/tracks/javascript/exercises/linked-list/edit

//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(ele) {
    const newNode = new Node(ele);
    if (this.size === 0) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.size++;
  }

  pop() {
    if (this.size === 0) return -1;
    const ans = this.tail.data;
    if (this.size === 1) {
      this.head = this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.size--;
    return ans;
  }

  shift() {
    if (this.size === 0) return -1;
    const ans = this.head.data;
    if (this.size === 1) {
      this.head = this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    this.size--;
    return ans;
  }

  unshift(ele) {
    const newNode = new Node(ele);
    if (this.size === 0) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.size++;
  }

  find(val) {
    let curr = this.head;
    while (curr != null) {
      if (curr.data === val) {
        return curr;
      }
      curr = curr.next;
    }
    return null;
  }

  delete(val) {
    if (this.size === 0) return;

    let nodeToBeDeleted = this.find(val);
    if (!nodeToBeDeleted) return;

    if (nodeToBeDeleted === this.head) {
      this.head = nodeToBeDeleted.next;
      if (this.head) {
        this.head.prev = null;
      }
    } else if (nodeToBeDeleted === this.tail) {
      this.tail = nodeToBeDeleted.prev;
      if (this.tail) {
        this.tail.next = null;
      }
    } else {
      nodeToBeDeleted.prev.next = nodeToBeDeleted.next;
      nodeToBeDeleted.next.prev = nodeToBeDeleted.prev;
    }
    this.size--;
    nodeToBeDeleted.next = nodeToBeDeleted.prev = null;
  }

  count() {
    return this.size;
  }
}
