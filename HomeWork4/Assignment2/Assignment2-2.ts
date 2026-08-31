import { changeTextColor } from "../ChangeTextColor";

var book: { Title: string; IsBorrowed: boolean };
var bookarray: { Title: string; IsBorrowed: boolean }[] = [];

for (let i = 1; i <= 4; i++) {
  book = { Title: "Book" + i, IsBorrowed: i % 2 === 0 ? true : false };
  bookarray.push(book);
}



bookarray.forEach((b) =>
  console.log(
    `\nTitle:${b.Title} Status:${changeTextColor(b.IsBorrowed ? "Borrowed" : "Available",b.IsBorrowed ? "red" : "green")}`,
  ),
);
