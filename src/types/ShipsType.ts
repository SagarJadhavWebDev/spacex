export interface Shipsdata {
    data: Ships;
}

export interface Ships {
    ships: Ship[];
}

export interface Ship {
    id:                  string;
    model:               null | string;
    name:                string;
    type:                Type;
    status:              null | string;
    image:               null | string;
    successful_landings: null;
    class:               number | null;
    year_built:          number | null;
    active:              boolean;
    attempted_landings:  null;
    home_port:           HomePort;
    abs:                 number | null;
    imo:                 number | null;
    missions:            null;
    url:                 null;
    speed_kn:            null;
    roles:               string[];
    __typename:          Typename;
}

export enum Typename {
    Ship = "Ship",
}

export enum HomePort {
    FortLauderdale = "Fort Lauderdale",
    PortCanaveral = "Port Canaveral",
    PortOfLosAngeles = "Port of Los Angeles",
}

export enum Type {
    Barge = "Barge",
    Cargo = "Cargo",
    Tug = "Tug",
}
