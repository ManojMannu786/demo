class solution{
    
    findMin(root){
        if(root==null) return -1;
        if(root.left==null) return root.data;
        return this.findMin(root.left);
    }
    findMax(root){
        if(root==null) return -1;
        if(root.right==null) return root.data;
        return this.findMin(root.right);
    }
}