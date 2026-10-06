import { BaseDAO } from "./BaseDAO";
import { Book } from "./Book";

export class BookDAO extends BaseDAO {

    protected initTable(): void {
        this.DataAccess.exec(`
            CREATE TABLE IF NOT EXISTS books (
                id INTEGER PRIMARY KEY,
                isbn TEXT UNIQUE,
                title TEXT,
                author TEXT,
                isAvailable BOOLEAN
            )
        `);
    }

    public addBook(
        id: number,
        isbn: string,
        title: string,
        author: string,
        isAvailable: boolean
    ): boolean {

        const stmt = this.DataAccess.prepare(`
            INSERT INTO books
            (id, isbn, title, author, isAvailable)
            VALUES (?, ?, ?, ?, ?)
        `);

        const result = stmt.run(
            id,
            isbn,
            title,
            author,
            isAvailable ? 1 : 0
        );

        return result.changes > 0;
    }

    public findBookByIsbn(isbn: string): Book | null {

        const stmt = this.DataAccess.prepare(`
            SELECT * FROM books
            WHERE isbn = ?
        `);

        const row = stmt.get(isbn) as {
            id: number;
            isbn: string;
            title: string;
            author: string;
            isAvailable: number;
        } | undefined;

        if (!row) {
            return null;
        }

        return new Book(
            row.id,
            row.isbn,
            row.title,
            row.author,
            row.isAvailable === 1
        );
    }

    public updateAvailability(
        isbn: string,
        isAvailable: boolean
    ): boolean {

        const stmt = this.DataAccess.prepare(`
            UPDATE books
            SET isAvailable = ?
            WHERE isbn = ?
        `);

        const result = stmt.run(
            isAvailable ? 1 : 0,
            isbn
        );

        return result.changes > 0;
    }

    public findAll(): Book[] {

        const stmt = this.DataAccess.prepare(`
            SELECT * FROM books
        `);

        const rows = stmt.all() as {
            id: number;
            isbn: string;
            title: string;
            author: string;
            isAvailable: number;
        }[];

        return rows.map(row =>
            new Book(
                row.id,
                row.isbn,
                row.title,
                row.author,
                row.isAvailable === 1
            )
        );
    }
}