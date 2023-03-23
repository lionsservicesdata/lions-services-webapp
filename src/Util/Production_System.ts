export class Production_System {
    production_system_name: string;
    product_name: string;
    date_created: string;

    constructor(production_system_name: string, product_name: string, date_created: string){
        this.production_system_name = production_system_name;
        this.product_name = product_name;
        this.date_created = date_created;
    }
}