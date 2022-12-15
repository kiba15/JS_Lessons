// КЛАССЫ

class Comment {
    constructor(text) {
       this.text = text
       this.votesQty = 0
    }

    upVote() {
       this.votesQty += 1
    }
}

const myClass = new Comment('test')
console.log(myClass)
console.log(myClass.text)
myClass.upVote()
myClass.upVote()
console.log(myClass.votesQty)
