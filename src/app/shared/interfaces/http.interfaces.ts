export interface ResponseObject<T> {
  data: T;
  message: string
}

export interface ResponseArray<T> {
  data: T[];
  message: string
}
