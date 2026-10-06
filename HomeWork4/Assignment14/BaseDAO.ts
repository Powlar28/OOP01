import Database from "better-sqlite3";

export abstract class BaseDAO {

    protected DataAccess: Database.Database;

    constructor(DBPath: string = "library.db") {

        this.DataAccess = new Database(DBPath);

        this.initTable();
    }

    protected abstract initTable(): void;
}