export interface IBaseResponse<T> {
  status: "success" | "error" | 200;
  message: string;
  data: T;
}
