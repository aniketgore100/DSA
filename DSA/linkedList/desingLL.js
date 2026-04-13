// class Node {
//     constructor(val) {
//         this.val = val;
//         this.next = null;
//     }
// }

// class LL {
//     constructor() {
//         this.head = null;
//         this.size = 0;
//     }

//     addAtHead(val) {
//         const newNode = new Node(val);
//         newNode.next = this.head;
//         this.head = newNode;
//         this.size++;
//     }

//     addAtTail(val) {
//         const newNode = new Node(val);

//         if (this.size === 0) {
//             this.head = newNode;
//         } else {
//             let curr = this.head;
//             while (curr.next !== null) {
//                 curr = curr.next;
//             }
//             curr.next = newNode;
//         }
//         this.size++;
//     }

//     addAtIndex(index, val) {
//         if (index < 0 || index > this.size) {
//             return -1;
//         }

//         if (index === 0) {
//             this.addAtHead(val);
//             return;
//         }

//         if (index === this.size) {
//             this.addAtTail(val);
//             return;
//         }

//         const newNode = new Node(val);
//         let curr = this.head;

//         for (let i = 0; i < index - 1; i++) {
//             curr = curr.next;
//         }

//         newNode.next = curr.next;
//         curr.next = newNode;
//         this.size++;
//     }

//     deleteAtIndex(index) {
//         if (index < 0 || index >= this.size) {
//             return;
//         }

//         if (index === 0) {
//             this.head = this.head.next;
//         } else {
//             let curr = this.head;
//             for (let i = 0; i < index - 1; i++) {
//                 curr = curr.next;
//             }
//             curr.next = curr.next.next;
//         }
//         this.size--;
//     }

//     middleOfLinkedList(){
//         let fast = this.head;
//         let slow = this.head;
//         while(fast!= null && fast.next!= null){
//             fast = fast.next.next;
//             slow = slow.next;
//         }
//         return slow;
//     }


//     print() {
//         const arr = [];
//         let curr = this.head;

//         while (curr) {
//             arr.push(curr.val);
//             curr = curr.next;
//         }
//         return arr;
//     }
// }





// let list = new LL();

// list.addAtHead(1);
// list.addAtHead(2);
// list.addAtTail(3);
// list.addAtIndex(2, 5);
// // list.deleteAtIndex(1);
// console.log(list.middleOfLinkedList());



class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}


class LL{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    addAtHead(val){
        let newNode = new Node(val);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    addAtTail(val){
        let newNode = new Node(val);
        let curr = this.head;

        if(this.size === 0){
            this.head = newNode;
        }else{
            while(curr != null && curr.next != null){
            curr = curr.next;
        }
        }
        curr.next = newNode;
        this.size++;
    }

    addAtIndex(index, val){
        let newNode = new Node(val);
        let curr = this.head;
        if(index < 0 || index > this.size){
            return -1;
        }

        if(index === 0){
            this.addAtHead(val);
            return;
        }

        if(index === this.size){
            this.addAtTail(val) ;
            return;
        }
            for(let i = 0; i<index - 1; i++){
                curr = curr.next;
            }
            newNode.next = curr.next;
            curr.next = newNode;
        
        this.size++;
    }

    delete(index){
        if(index < 0 || index >= this.size){
            return;
        }
        if(index === 0){
            this.head = this.head.next;
        }
        else{
            let curr = this.head;
            for(let i = 0; i<index-1; i++){
                curr = curr.next;
            }
            curr.next = curr.next.next;
        }
        this.size--;
    }

    middleOfLL(){
        let slow  = this.head;
        let fast = this.head;
        while(fast !== null && fast.next !== null){
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }

    reverseLL(){
        let prev = null;
        let curr = this.head;
        while(curr != null){
            let temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }
        return prev;
    }

    removeElements(val) {
    let temp = new Node();
    temp.next = this.head;
    let prev = temp;

    while(prev && prev.next){
        console.log("val ::", prev.next.val);
        if(prev.next.val === val){
            prev.next = prev.next.next;
        }else{
            prev = prev.next;
        }
    }
    return temp.next;

};

    removeNthFromEnd = function(n) {

        let temp = new Node();
        temp.next = this.head;

        let slow = temp;
        let fast = temp;

        for(let i = 0; i < n; i++){
            fast = fast.next;
        }

        while(fast != null && fast.next != null){
            slow = slow.next;
            fast = fast.next;
        }
        slow.next = slow.next.next;
        return this.head;

    };

    print(){
        const arr = [];
        let curr = this.head;

        while(curr){
            arr.push(curr.val);
            curr = curr.next;
        }
        return arr;
    }
};



let list = new LL();

list.addAtHead(3);
list.addAtHead(2);
list.addAtHead(1);
list.addAtHead(1);
list.addAtHead(1);

// list.addAtTail(0)
// list.addAtIndex(2, 5);
console.log(list.removeNthFromEnd(2));
console.log(list.print());
