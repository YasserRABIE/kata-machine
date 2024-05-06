function walk(curr: BinaryNode<number> | null, path: number[]) {
    // base case
    if (!curr) {
        return path;
    }
    
    // recurse
    walk(curr.left, path);
    // in
    path.push(curr.value);
    //recurse
    walk(curr.right, path);


    // post
    return path;
}
export default function in_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}
