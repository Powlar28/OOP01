import { BorrowRecordDAO } from "./BorrowRecordDAO";
import { BookDAO } from "./BookDAO";

const borrowRecordDAO = new BorrowRecordDAO();
const bookDAO = new BookDAO();

bookDAO.addBook(1, "1234567890", "Sample Title", "Sample Author", true);

const book = bookDAO.findBookByIsbn("1234567890");
if (book) {
    console.log(book.getInfo());}
