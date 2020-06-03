/* ----------------------
Note: BEFORE tackling the class below,
read the tests in the test file.
The last method lowestCommonAncestor is optional. Complete it only if you could tackle all the rest.
---------------------- */

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  // adds node to left if value is less than or equal to this.value
  // adds node to right if value is greater than node
  add(value) {

    // Less or equal than value
    (value <= this.value)?
      (this.left)? this.left.add(value): this.left = new BinaryTree(value):
      (this.right)? this.right.add(value): this.right = new BinaryTree(value);
    

  }

  // returns true or false if the value is in the tree
  contains(value) {
    // This is the node
    console.log(this.value);
    console.log(value);
    console.log(value === this.value);
    if (value === this.value) {
      console.log("return true")
      return true;
    } else console.log("continue");

    //if (value <= this.value && this.left.contains(value) ||  
    //this.right.contains(value)) return true;

    // The node is on the left
    //if (this.left && this.left.contains(value)) return true;
    if (this.left) if (this.left.contains(value)) return true;
    if (this.right) if (this.right.contains(value)) return true;
    // The node is on the right
    //if (this.right && this.right.contains(value)) return true;

    console.log("return false");
    return false;

  }


  }


let binaryTree= new BinaryTree(10);

binaryTree.add(4);
binaryTree.add(14);
binaryTree.add(6);
binaryTree.add(16);
binaryTree.add(2);
binaryTree.add(12);
console.log("the answer is: " + binaryTree.contains(16));
//console.log(binaryTree.contains(30));