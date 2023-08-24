export interface terminDTO {
    
        notar_id : number;
        kancelarija_id : number;
        datumIvremeSastanka : string;
        vremeTrajanja : number;
        ugovor_id : number;
        vrstaUgovora : string;
        statusTermina : string;
        overenUgovor : boolean;
        stranka_ids : number[];
        svedok_ids: number[];


    }

