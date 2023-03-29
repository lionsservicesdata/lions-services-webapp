export class  Lot {
    production_system_name: string;
    lot_number: number;
    line_number: number;
    order_ref: number;
    order_size: number;
    date_entered: string;
    order_date: string;
    lot_date: string;
    due_date: string;
    customer: string;
    customer_name: string;
    is_printed: number;
  
    constructor(production_system_name: string,lot_number: number,line_number: number,order_ref: number,order_size: number,date_entered: string,order_date: string,lot_date: string,due_date: string,customer: string,customer_name: string, is_printed: number){
        this.production_system_name = production_system_name
        this.lot_number = lot_number
        this.line_number = line_number
        this.order_ref = order_ref
        this.order_size = order_size
        this.date_entered = date_entered
        this.order_date = order_date
        this.lot_date = lot_date
        this.due_date = due_date
        this.customer = customer
        this.customer_name = customer_name
        this.is_printed = is_printed
    }
  }
  
  
  
  