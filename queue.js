//First in First Out
class Queue{
    constructor(){
        this.queue = []
    }
    enqueue(element){
        this.queue.push(element)
    }
    dequeue(){
        this.queue.shift()
    }
}
const heroes = new Queue
heroes.enqueue('Arfin')
heroes.enqueue('Salman')
heroes.enqueue('Yash')
heroes.enqueue('Provash')
heroes.enqueue('Raj')
console.log(heroes.queue)
heroes.dequeue()
console.log(heroes.queue)
heroes.dequeue()
console.log(heroes.queue)