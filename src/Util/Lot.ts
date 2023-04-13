export class  Lot {
    lot_number: string;
    order_: string;
    order_date: string;
    clin: string;
    nsn_number: string;
    item_number: string;
    item_description: string;
    qty_ordered: string;
    u_m: string;
    due_date: string;
    customer: string;
    contract_number: string;
    date_open: string;
    date_start: string;
    date_closed: string;
    status_: string;
    comments: string;
    qr_lot_genereted: number;
    is_printed: number;
    production_system_name: string;

  
    constructor(lot_number: string,order_: string,order_date: string,clin: string,nsn_number: string,item_number: string,item_description: string,qty_ordered: string,u_m: string,due_date: string,customer: string,contract_number: string,date_open: string,date_start: string,date_closed: string,status_: string,comments: string, qr_lot_genereted: number, is_printed: number, production_system_name: string){
        this.lot_number = lot_number
        this.order_ = order_
        this.order_date = order_date
        this.clin = clin
        this.nsn_number = nsn_number
        this.item_number = item_number
        this.item_description = item_description
        this.qty_ordered = qty_ordered
        this.u_m = u_m
        this.due_date = due_date
        this.customer = customer
        this.contract_number = contract_number
        this.date_open = date_open
        this.date_start = date_start
        this.date_closed = date_closed
        this.status_ = status_
        this.comments = comments
        this.qr_lot_genereted = qr_lot_genereted
        this.is_printed = is_printed
        this.production_system_name = production_system_name
    }
  }
  
  
  
  