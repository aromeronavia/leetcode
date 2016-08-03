function ListNode(val) {
  this.val = val;
  this.next = null;
}

const deleteNode = node => {
  if (!node.next || !node) return node;
  node.val = node.next.val;
  node.next = node.next.next;
};

const node = new ListNode(0);
node.next = new ListNode(1);

console.log(node);
deleteNode(node);
console.log(node);

module.exports = deleteNode;

/*
 * 0 -> 1
 * 1 -> null
 * */
