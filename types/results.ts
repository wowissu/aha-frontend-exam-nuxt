export interface Result {
  id: number;
  image: string;
  title: string;
  username: string;
}

export interface ResultQueryString {
  keyword: string,
  page: number;
  pageSize: number
}