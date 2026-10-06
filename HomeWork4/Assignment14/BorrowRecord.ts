export class BorrowRecord{
    private id: number;
    private borrowerName: string;
    private title: string;
    private bookIsbn: string;
    private borrowDate: string;

    constructor(id: number, borrowerName: string, title: string, bookIsbn: string, borrowDate: string) {
        this.id = id;
        this.borrowerName = borrowerName;
        this.bookIsbn = bookIsbn;
        this.title = title;
        this.borrowDate = borrowDate;
    }

    getBorrowRecord(): BorrowRecord {
        return new BorrowRecord(this.id, this.borrowerName, this.title, this.bookIsbn, this.borrowDate);
    }

    setBorrowRecord(id: number, borrowerName: string, title: string, bookIsbn: string, borrowDate: string): void {
        this.id = id;
        this.borrowerName = borrowerName;
        this.title = title;
        this.bookIsbn = bookIsbn;
        this.borrowDate = borrowDate;
    }
   

}