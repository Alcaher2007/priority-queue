class Node {
	constructor(data, priority) {
this.data=data;
this.priority=priority;
this.parent = null;
this.left = null;
this.right = null;
	}

	appendChild(node) {
		
if(this.left !=null && this.right !=null){return;}
node.parent=this;
if(this.left==null)
{
this.left=node;
return;
}
if(this.right==null)
{
	this.right=node;
	return;
}
	}

	removeChild(node) {
if((this.left!=node) && (this.right!=node))
{
	throw "error";
}
switch(node)
{
	case this.left:this.left=null;
	break;

	case this.right:this.right=null;
	break;
}
node.parent=null;
	}

	remove() {
if(this.parent==null)
{
	return;
}
this.parent.removeChild(this);
}

	swapWithParent() {
	if (this.parent === null) {
      return this;
    }

    const swap = (parent, child) => {
      if (parent.parent !== null) {
        if (parent.parent.left === parent) {
          parent.parent.left = child;
        } else if (parent.parent.right === parent) {
          parent.parent.right = child;
        }
      }

      if (child.left !== null) {
        child.left.parent = parent;
      }
      if (child.right !== null) {
        child.right.parent = parent;
      }

      child.parent = parent.parent;
      parent.parent = child;

      const parentLeftChild = parent.left;
      const parentRightChild = parent.right;

      if (parentLeftChild === child && parentRightChild !== null) {
        parent.right.parent = child;
      } else if (parentRightChild === child && parentLeftChild !== null) {
        parent.left.parent = child;
      }

      parent.left = child.left;
      parent.right = child.right;

      if (parentLeftChild === child) {
        child.left = parent;
        child.right = parentRightChild;
      } else if (parentRightChild === child) {
        child.right = parent;
        child.left = parentLeftChild;
      }
    }

    swap(this.parent, this);
    
  }

    }
    
  

module.exports = Node;
