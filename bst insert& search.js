class node{
    constructor(val){
        this.val=val;
        this.right= null;
        this.left = null;
    }

}

function search(node,k){
    while(node!=null){
        if(node.val==k) return true;
        if(node.val<k){
            node= node.right;
        }
        else{
            node = node.left;
        }
    }
    return false;
}

function insert(node, element){
    while(node!=null){
        if(node.val<element.val){
            if(node.right==null){
                node.right = element;
                return;
            }
            node = node.right;
            continue;
        }
        if(node.val>=element.val){
            if(node.left==null){
                node.left=element;
                return;
            }
            node = node.left;
        }
    }
}


let node1 = new node(15);
let node2 = new node(9);
let node3 = new node(19);
let node4 = new node(4);
let node5 = new node(12);
let node6 = new node(17);
let node7 = new node(20);
let node8 = new node(10);
let node9 = new node(18);
node1.left= node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node3.left = node6;
node3.right = node7;
node5.left = node8;
node6.right= node9;

//searching node
console.log(search(node1, 18));
console.log(search(node1, 8));

//inserting new node
const newNode = new node(11);
insert(node1, newNode);

console.log(node8.right.val)