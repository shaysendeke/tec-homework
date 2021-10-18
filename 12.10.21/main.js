// !encoding1
const fs = require("fs");
// fs.writeFileSync("a.txt", "node is great", { flag: "w" });

// const data = fs.readFileSync("a.txt", "utf-8")
// console.log(data);

// !לא ניתן לקרוא את המחרוזת, צריך להשתמש בקידוד

// !encoding_2
// fs.writeFileSync("a.txt", "שלום עולם", { flag: "a"});
// const hebrewData = fs.readFileSync("a.txt",)
// console.log(hebrewData);

// !encoding_3
// fs.writeFile("a.txt", "hello2", function (err) {
//         if (err)
//             console.log(err);
//         else {
//             console.log("File written successfully\n");
//             console.log("The written has the following contents:");
//             console.log(fs.readFileSync("a.txt", "utf8"));
//         }
//     });

// fs.readFile('a.txt', 'utf8', function(err, data){
//  let data = "asdamskld"
// Display the file content
//     console.log(data);
// });

// console.log('readFile called');

// !exception_1
// let e = false
// console.log(1);
// try {
//     console.log(2);
//     if(e)
//     {
//         throw "some error"
//     }
//     console.log(3);
// } catch (error) {
//     console.log(4);
// }
// console.log(5);
// ידפיס את 1, 2 ו-5 בוודאות כי הם מחוץ לסקופ. ידפיס את 3 אם אמת ואת 4 אם שקר
// !!exception_2
// let e=false
// console.log(1);
// try {
//     console.log(2);
//     if(e){
//         throw "some error"
//     }
//     console.log(3);
// } catch (error) {
//     console.log(4);
// }
// finally{
//     console.log("clean up")
// }
// console.log(5);
// ידפיס את 1,2 ו-5 בוודאות כי הם מחוץ לסקופ. אם אמת ידפיס את קלין אפ ואת4. אם שקר ידפיס את 3.

// !!exception_3
// function safeDiv(num1, num2) {
//   try {
//     if (num2 == 0) {
//       throw "error, can not divide by 0";
//     }
//     console.log(num1 / num2);
//   } catch (error) {
//       console.log(error);
//     }
    
// }
// safeDiv(4, 3);

// !object_persistence_1
// const fileName = "booksArray.txt";

// const booksArray = [
//   { name: "The Time Traveler's Wife", description: "Novel", pages: 546 },
//   { name: "The Hitchhiker's Guide to the Galaxy", description: "Sci-Fi", pages:356 },
//   {name: "Band of Brothers", description: "Non-Fiction", pages: 336}
// ];

// const jsonBooksArray = JSON.stringify(booksArray);
// fs.writeFileSync(fileName, jsonBooksArray);
// console.log(jsonBooksArray);

// !object_persistence_2
// fs.readFile(fileName, "utf8", (error, data) => {
    // if (error) {
    //   console.log(`error  reading file ${fileName}`);
    // }
//     let myBooksArray = JSON.parse(data);
//     console.log(myBooksArray);
//     let min = myBooksArray[0].pages;
//     for (let i = 0; i < myBooksArray.length; i++) {
//       if (myBooksArray[i].pages < min) {
//         min = myBooksArray[i].pages;
//         console.log(myBooksArray[i]);
//       }
//     }
//   });
// !library_file_sync_array_1

let library = [
    {name:"alpha", author: "arthur", pages: 1000},
    {name: "beta", author: "benjamin", pages: 2000},
    {name: "charley", author: "carlos", pages: 3000},
    {name: "dog", author: "david", pages:4000},
    {name: "easy", author: "earl", pages: 5000},
    {name: "fox", author: "franklin", pages:6000}
]

console.log(library);

let name = process.argv[2]
let author= process.argv[3]
let pages = process.argv[4]
let chosenFunction = process.argv[5]
const book = {name, author, pages}

console.log(book);

function selectFromCrud(functionName){
    switch (functionName) {
        case "add":
            addBook(library, book)
            break;
        case "update":
            updateBook(library[i].name, process.argv[i])
        break;
        case "delete":
            
        break;
        case "getAll":
            console.log(library)
        break;
        case "search":
            
        break;



        default:
            break;
    }
}

function addBook (library, book) {
    for (let i=0; i<library.length; i++)
    if (book.name == library[i].name) {
        console.log ("this book already exist in thק library")
    }
    library.push(book)
    console.log("book added successfully");
}

function updateBook(book.name, process.argv[i]) {
    let newPages = process.argv[6]
    for (let i=0; i<library.length; i++) {
        if (library[i].name == book)
        library[i].pages == newPages
    }
console.log(library)
}

function delete (library, book) {
    for (i=0, library.length; i++)
    if (book.name == library[i].name){
        library.splice(library[i], 0)
    }
}

// !library_file_sync_array_2
// 1. read from file a list of books.
// 2. if the file does not exist catch the exception and print a message.
// 3. if the file content is invalid catch the exception and print a message.
// 4. print all books, one by one.

// function printBooks(books) {
//   if (books) {
//     for (const book of books) {
//       console.log(book.name);
//     }
//   }
// }
// function isValid(books) {
//   return true;
// }

// function readBooksFromFile(fileName) {
//   let fileContent;
//   try {
//     fileContent = fs.readFileSync(fileName);
//   } catch (error) {
//     console.log(`error reading file ${fileName}`);
//     return null;
//   }
//   let books;
//   try {
//     books = JSON.parse(fileContent);
//   } catch (error) {
//     console.log(
//       `can not convert JSON to object. Please check ${fileName} syntax`
//     );
//   }
//   if (isValid(books)) {
//     return books;
//   }
//   return null;
// }

// let fileName = process.argv[2];
// const books = readBooksFromFile(fileName);
// printBooks(books);
