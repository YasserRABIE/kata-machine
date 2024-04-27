type Node<T> = {
    value: T;
    prev?: Node<T>;
};

export default class Stack<T> {
    public length: number;
    private head?: Node<T>;

    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    push(item: T): void {
        const node = { value: item } as Node<T>;
        this.length++;
        if (!this.head) {
            this.head = node;
            return;
        }

        node.prev = this.head;
        this.head = node;
    }
    pop(): T | undefined {
        if (!this.head) {
            return undefined;
        }

        this.length--;
        const head = this.head;
        this.head = this.head?.prev;

        return head?.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}
