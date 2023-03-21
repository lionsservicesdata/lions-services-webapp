export class Production_System {
    production_system_name: string;
    product_name: string;
    creation_date: string;

    constructor(production_system_name: string, product_name: string, creation_date: string){
        this.production_system_name = production_system_name;
        this.product_name = product_name;
        this.creation_date = creation_date;
    }
}