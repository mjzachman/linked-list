const Node = (val, nxt = null) => {
    const value = val
    const next = nxt;
    return { value, next };
;}

const LinkedList = () => {
    let head = null;
    let size = 0;

    const checkEmpty = () => {
        if (size === 0) {
            console.log('list is empty');
            return true;
        }
        return false;
    }

    // getSize() returns the total number of nodes in the list
    const getSize = () => { return size; }
    
    // getHead() returns the first node in the list
    const getHead = () => { return head; }

    // getTail() returns the last node
    const getTail = () => {
        let current = head;
        while (current.next) { current = current.next; }
        return current;
    }

    // prepend(val) adds new node to the start
    const prepend = (val) => { 
        head = Node(val, head);
        size++;
    }

    // append(val) adds new node to the end
    const append = (val) => {
        if (head === null) { prepend(val); }
        else {
            getTail().next = Node(val);
            size++;
        }
    }
    
     // at(index) returns the node at the index
     const at = (index) => {
        if (index < 0) {
            console.log('enter a positive index');
            return;
        }

        let current = head;
        for (let i = 0; i < index; i++){
            current = current.next;
            if( !current ) {
                console.log('list is not that long');
                return;
            }
        }
        return current;
    }
    
    // pop removes the last element from the list
    const pop = () => {
        if (checkEmpty()){return;};
        let previous = null;
        let current = head;

        while (current.next) {
            previous = current;
            current = current.next;
        }

        previous.next = current.next;
        size--;
    }
    // contains(val) returns true is the value is in the list
    const contains = (val) => {
        if (checkEmpty()){return false};
        if (head.value === val) {return true};
        let current = head;
        while(current){
            if (current.value === val) {return true};
            current = current.next;
        }
        return false;
    }
    // find(val) returns the index of the node containing the val
    const find = (val) => {
        if (!contains(val)) {return null};
        let current = head;
        for(let i = 0; i < size; i++){
            if(current.value === val) {return i};
            current = current.next
        }
        return null;
    }
    // toString represents the list as a string
    const toString = () => {
        if (checkEmpty()){return};
        let output = ``;
        let current = head;
        while (current) {
            output += `( ${current.value} ) -> `;
            current = current.next;
        }
        return output += ` -> null`;
        
    }

    return { getSize,
             getHead,
             getTail,
             prepend, 
             append,
             at,
             pop,
             contains,
             find,
             toString };
};


const myList = LinkedList();
myList.append(100);
myList.append(10);
//myList.append(1);
myList.append(50);
//myList.append(7);
console.log(myList.toString());
//myList.pop();
//myList.print();
