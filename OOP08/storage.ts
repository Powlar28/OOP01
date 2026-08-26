export interface StorageService{
    save(date:string):void;
    load():string;
}

export class CloudStorage implements StorageService{
    private _data:string = "";
    
    save(data:string):void{
        this._data = data;
    }
    load():string{
        return this._data;
    }
}



