//objects//
let book = {
    title: "the hitchhiker's guide to the galaxy",
    author: "douglas admas",
    publicationyear:1979,
    genres: ["science fitction", "comedy", "satire"],
    isavailable: true,
    publisherinfo: {
        name: "pan books",
        location: "london, uk"
    },
    getsummary: function(){
        return `${this.title} by ${this.author} {${this.publicationyear}}`;
    }
};
console.log("original title: ", book.title);

book.publicationyear = 1980;
console.log("update publication year:", book.publicationyear);

console.log("publisher location:", book.publisherinfo.location);

console.log("first genre:", book.genres[2]);

//adding new property//
book.pages = 193;
console.log("number of pages:", book.pages);

console.log("book summary:", book.getsummary());


//iteartion//
console.log("_____book properties_____")
for(let Key in book) {
    if (book.hasOwnProperty(Key)){
        console.log(Key + " : " + book[Key]);
    }
}

//destructuring properties from the book object//
console.log("_____desrtucturing_____")
let { title, author, isavailable, publisherinfo} = book;
console.log(" title:", title);
console.log(" author:", author);
console.log(" isavailable:", isavailable);
console.log(" publisherinfo(name):", publisherinfo.name);

//destructuring an array fromthe genres property//
console.log("____destructuring an array_____")
let [firstgenres, secondgenres, thirdgenres] = book.genres;
console.log("first genre:", firstgenres);
console.log("second genre:", secondgenres);
console.log("third genre:", thirdgenres);





