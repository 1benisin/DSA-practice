'use strict'

function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let l3 = new ListNode();
  let lResult = l3;
  let carriedVal = 0;

  while (l1 || l2 || carriedVal) {
    let val1 = l1 ? l1.val : null;
    let val2 = l2 ? l2.val : null;
    let sum = val1 + val2 + carriedVal;
    if (sum >= 10) {
      sum -= 10;
      carriedVal = 1;
    } else {
      carriedVal = 0;
    }
    if (l3.val > -1) {
      l3.next = new ListNode();
      l3 = l3.next;
    }
    l3.val = sum;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }

  return lResult;
};

let head1 = new ListNode(2);
head1.next = new ListNode(4);
head1.next.next = new ListNode(3);
let head2 = new ListNode(5);
head2.next = new ListNode(6);
head2.next.next = new ListNode(4);
// TEST

console.log(addTwoNumbers(head1, head2)); // 7 -> 0 -> 8

let head3 = new ListNode(5);
let head4 = new ListNode(5);

console.log(addTwoNumbers(head3, head3)); // 0 -> 1
