class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }

    var current = this.root;
    while (true) {
      if (val < current.val) {
        if (current.left === null) {
          current.left = new Node(val);
          return this;
        }
        else {
          current = current.left;
        }
        else if (val > current.val) {
          if (current.right === 0) {
            current.right = new Node(val);
            return this;
          } 
          else {
            current = current.right;
          }
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, current = this.root) {
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }

    if (val < current.val) {
      if (current.left === null) {
        current.left = new Node(val);
        return this;
      }
      return this.insertRecursively(val,current.left);
    }
      else {
        if(current.right === null) {
          currrent.right = new Node(val);
          return this;
        }
        return this.insertRecursively(val, current.right);
      }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let currentNode = this.root;
    let found = false;

    if (val === currentNode.val) return currentNode;

    while (currentNode && !found) {
      if (val < currentNode.val) {
        currentNode = currentNode.left;
      }
      else if (val > currentNode.val) {
        currentNode = currentNode.right;
      }
      else {
        found = true;
      }
    }

    if (!found) return undefined;
    return currentNode;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, current = this.root) {
    if (this.root === null) {
      return undefined;
    }

    if (val < current.val) {
      if (current.left === null) return undefined;
      return this.findRecursively(val, current.left);
    }
    else if (val > current.val) {
      if (current.right === null) return undefined;
      return this.findRecursively(val, current.right);
    }
    return current;
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let data = [];
    let current = this.root;

    function traverse(node) {
      data.push(node.val);
      node.left && traverse(node.left);
      node.right && traverse(node.right);
    }

    traverse(current);
    return data;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let data = [];
    let current = this.root;

    function traverse(node) {
      node.left && traverse(node.left);
      data.push(node.val);
      node.right && traverse(node.right);
    }

    traverse (current);
    return data;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let data = [];
    let current = this.root;

    function traverse(node) {
      node.left && traverse(node.left);
      node.right && traverse(node.right);
      data.push(node.val);
    }

    traverse (current);
    return data;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let node = this.root;
    let queue = [];
    let data = [];

    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }

    return data;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {
    if (!this.root) return null;

    let parent = null;
    let node = this.root;

    while (node && node.val !== val) {
        parent = node;
        node = val < node.val ? node.left : node.right;
    }

    if (!node) return null; 

    if (!node.left && !node.right) {
        if (parent) {
            if (parent.left === node) parent.left = null;
            else parent.right = null;
        } else {
            this.root = null;
        }
    }
   
    else if (!node.left || !node.right) {
        let child = node.left ? node.left : node.right;
        if (parent) {
            if (parent.left === node) parent.left = child;
            else parent.right = child;
        } else {
            this.root = child;
        }
    }
   
    else {
        let successorParent = node;
        let successor = node.right;

        while (successor.left) {
            successorParent = successor;
            successor = successor.left;
        }

        node.val = successor.val;

        if (successorParent.left === successor) successorParent.left = successor.right;
        else successorParent.right = successor.right;
    }

    return node;
}
  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced(current = this.root) {
    function checkDepth(node) {
        if (!node) return 0;

        let left = checkDepth(node.left);
        let right = checkDepth(node.right);

        if (left === -1 || right === -1 || Math.abs(left - right) > 1) return -1;

        return Math.max(left, right) + 1;
    }

    return checkDepth(current) !== -1;
}

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest(current = this.root) {
    if (this.root || (!this.root.left && !this.root.right)) return;

    while(current) {
      if (current.left && !current.right) {
        return this.findSecondHighest(current.left);
      }

      if (current.right && (!current.right.left && !current.right.right)) {
        return current.val;
      }

      current=current.right;
    }
  }

  dfsInOrderIterative() {
    let cur = this.root;
    let stack = [];
    let dfs = [];
    while (stack.length > 0 || cur) {
      while (cur) {
        stack.push(cur);
        cur = cur.left;
      }
      cur = stack.pop();
      if (cur) {
        dfs.push (cur.val);
        cur = cur.right;
      }
    }

    return dfs;
  }
}

module.exports = BinarySearchTree;
