/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  function minDepth(root) {
    if (root === null) return 0;

    if (root.left === null) return minDepth(root.right) +1;
    
    if (root.right === null) return minDepth(root.left) +1;

    return Math.min(minDepth(root.left), minDepth(root.right)) +1;
  };

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  function maxDepth(root) {
    if (root === null) return 0;

    if (root.left === null) return maxDepth(root.right) +1;

    if (root.right === null) return maxDepth(root.left) +1;

    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
  };

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */


maxSum () {
  let result = 0;

  function maxSumCalculater (root) {
    if (root === null) return 0;
    const leftSum = maxSumCalculater(root.left);
    const rightSum = maxSumCalculater(root.right);
    result = Math.max(result, root.val + leftSum + rightSum);
    return Math.max(0, leftSum + root.val, rightSum = root.val);
  }

  maxSumCalculater(this.root);
  return result;
}

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (this.root === null) return 0;

    let queue = [this.root];
    let closestNum = null;

    while (queue.length) {
      let currentNode = queue.shift();
      let currentVal = currentNode.val;
      let higherNum = currentVal > lowerBound;
      let nextClosestNum = currentVal < closestNum || closestNum === null;

      if (higherNum && nextClosestNum) {
        closestNum = currentVal
      }

      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }

    return closestNum;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {
    if (node1 === this.root || node2 === this.root) return false;

    function findCousins (nodeToFind, currentNode, level = 0,
      data = {level: 0, parent: null}
    ) {
      if (data.parent) return data;
      if (currentNode.left === nodeToFind || currentNode.right === nodeToFind) {
        data.level = level + 1;
        data.parent = currentNode;
      }
      if (currentNode.left) {
        findCousins(nodeToFind, currentNode.left, level + 1, data);
      }
      if(currentNode.right) {
        findCousins(nodeToFind,currentNode, level + 1, data);
      }
      return data
    }

    let node1Info = findCousins(node1, this.root);
    let node2Info = findCousins(node2, this.root);

    let sameLevel = node1Info && node2Info && node1Info.level === node2Info.level;
    let differentParents = node1Info && node2Info && node1Info.parent !== node2Info.parent;
    return sameLevel && differentParents;
  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize(tree) {
    const values = [];

    function traverse(nod) {
      if (node) {
        values.push(node.val);
        traverse(node.left);
        traverse(node.right);
      }
      else {
        values.push("#");
      }
    }

    traverse(tree.root);
    return values.join(" ");
  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize(stringTree) {
    if (stringTree === null) return 0;

    const values =stringTree.split(" ");

    function (buildTree) {
      if (values.length) {
        const currentVal = values.shift();

        if (currentVal = "#") return null;

        let currentNode = new BinaryTreeNode(+currentVal);
        currentNode.left = buildTree();
        currentNode.right = buildTree();

        return currentNode;
      }
    }

    const root = buildTree();
    return new BinaryTree(root);
  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2, curretNode = this.root) {
    if (currentNode === null) return 0;

    if (currentNode === node1 || currentNode === node2) return currentNode;

    const left = this.lowestCommonAncestor(node1, node2, currentNode.left);

    const right = this.lowestCommonAncestor(node1, node2, currentNode.right);

    if (left !== null && right !== null) return currentNode;

    if (left !== null || right !== null) return left || right;

    if (left === null && right === null) return null;
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
