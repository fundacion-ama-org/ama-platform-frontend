export interface DataTableHeader {
  nameColumn: string;
  title: string;
  opciones?: boolean
}


export interface ActionsEmit {
  action: ActionsEvent;
  value: any;
}


export type ActionsEvent = "NUEVO" | "EDITAR" | "ELIMINAR" | "FILTRAR"
