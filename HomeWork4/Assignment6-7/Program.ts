import { Product } from "./Assignment6";  //Assignment6
import { Book ,EBook , PrintedBook} from "./Assignment7"; //Assignment7



// ============================= Assignment6 =====================================
// const  P1 = new Product ("Surakit025",-4,-1)
// console.log(`\nname, ${P1.name}\nprice, ${P1.price}\nstock, ${P1.stock}`)

// P1.price = 5
// P1.stock = 7

// console.log(`\nname, ${P1.name}\nprice, ${P1.price}\nstock, ${P1.stock}`)


// console.log(`\n____________________Negative Value Test ________________________`)
// P1.price = -5
// P1.stock = -7
// console.log(`\nname, ${P1.name}\nprice, ${P1.price}\nstock, ${P1.stock}`)



// ============================= Assignment6 =====================================





// ============================= Assignment7 =====================================

const Book01 = new Book("Book01","Writher01",200,100);

const Ebook01 = new EBook(Book01._title,Book01._author,Book01._price,5,"www.Link.com");

const PrintedBook01 = new PrintedBook(Book01._title,Book01._author,Book01._price,Book01._stock,50,5)

PrintedBook01 .sellBook(5)
// ============================= Assignment7 =====================================


