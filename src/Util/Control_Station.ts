export class Control_Station {
    station_name: string;
    production_system_name: string;
    station_type: string;
    bundle_size: number;
    date_created: string;

    constructor(station_name: string, production_system_name: string, station_type: string, bundle_size: number, date_created: string) {
        this.station_name = station_name
        this.production_system_name = production_system_name
        this.station_type = station_type
        this.bundle_size = bundle_size
        this.date_created = date_created
    }
}



