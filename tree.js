class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
  
    addChild(value) {
    // push a new tree into the current tree's children
    let newTree = new Tree(value);
    this.children.push(newTree);
    return newTree;
  }

  // I modified this, to receive an argument for the callback function
    traverse(t,fn) {
    fn(t,this);
    for (let child of this.children) {
      child.traverse(t,fn);
    }
  }
  
}

// Here we create a tree, and add a couple of children
let tree = new Tree(1);
tree.addChild(2);
tree.addChild(4);
console.log(tree);

// This is a callbackfunction, where we increment the tree value by one
function addUp(t){
  t.value++;;
}

// Here we call the trasverse, passing a callback function and the tree as an argument
tree.traverse(tree,addUp);
console.log(tree);

// We can also pass the callback, as an anonymous function
tree.traverse(tree,function(t){t.value++;});
console.log(tree);

//Or we can use the fat arrow syntax
tree.traverse(tree,(t)=>{t.value++;});
console.log(tree);
