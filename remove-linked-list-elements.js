/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
const removeElements = function(head, val) {

};

describe('remove elements', () => {
  function ListNode(val) {
    this.val = val;
    this.next = null;
  }

  const createLinkedList = () => {
    const head = new ListNode(4);
    let iterator = head;
    for (let i = 0; i < 5; i++) {
      iterator.next = new ListNode(i + 1);
      iterator = iterator.next;
    }
  };

  it('should remove elements with a given value', () => {
    const value = 5;
    const linkedList = createLinkedList();
    removeElements(linkedList, value);
  });
});

module.exports = removeElements;
