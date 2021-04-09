const ListNode = require('../extensions/list-node');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.head = null;
  }

  enqueue(element) {
    const node = new ListNode();
    let current;
    if (!this.head) {
      this.head = {};
      this.head.value = element;
      this.head.next = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.value = element;
      current.next = new ListNode();
    }
    return node;
  }

  dequeue() {
    let node = this.head;
    let deleteNode = null;
    this.head = node.next;
    deleteNode = node;
    node = null;
    return deleteNode.value;
  }
}

module.exports = Queue;
