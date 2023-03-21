export class  QR {
    id: number;
    station_name: string;
    bundle_size: number;
    scanned: string;
    date_created: string;
    date_scanned: string;
    qr_string: string;
    lot_number: string;
    id_lot_number: string;
  
    constructor(id: number,station_name: string,bundle_size: number,scanned: string,date_created: string,date_scanned: string,qr_string: string,lot_number: string,id_lot_number: string){
        this.id = id;
        this.station_name = station_name;
        this.bundle_size = bundle_size;
        this.scanned = scanned;
        this.date_created = date_created;
        this.date_scanned = date_scanned;
        this.qr_string = qr_string;
        this.lot_number = lot_number;
        this.id_lot_number = id_lot_number;
    }
  }
  
  
  
  