/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
   
    if (head === null) {
    return null;
    }
  
    var slow=head;
    var fast=head;
    var prev = null;
    while (fast !== null && fast.next !== null){
        prev = slow;
        slow=slow.next;
        fast=fast.next.next;
    }
    var tree = new TreeNode(slow.val);  
    
     if (prev === null) {
        return tree;
    }

    prev.next = null;
    var right = slow.next;

    tree.left = sortedListToBST(head);
    tree.right = sortedListToBST(right);

        return tree;

};