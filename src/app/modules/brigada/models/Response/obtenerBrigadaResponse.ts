export interface ObtenerBrigadaResponse {
    id_brigada: number;
    nombreBrigada: string;
    descripcionBrigada : string;
    nombreResponsable: string;
    num_Responsable: number;
    direccion: string;
    inicio_Brigada: Date;
    fin_Brigada: Date;
}