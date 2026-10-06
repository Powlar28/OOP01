import { BaseDAO } from "./BaseDAO";

export class BorrowRecordDAO extends BaseDAO {
    protected initTable(): void {
        this.DataAccess.exec(`
            CREATE TABLE IF NOT EXISTS borrowRecords (
                id INTEGER PRIMARY KEY,
                borrowerName TEXT,
                title TEXT,
                bookIsbn TEXT,
                borrowDate TEXT
            )`);
    }
    borrowBook(id: number, borrowerName: string,bookIsbn: string): boolean {
        const stmt = this.DataAccess.prepare(`INSERT INTO borrowRecords (id, borrowerName, title, bookIsbn, borrowDate) VALUES (?, ?, ?, ?, ?)`);
        const result = stmt.run(id, borrowerName, bookIsbn);
        return result.changes > 0;
    }
}