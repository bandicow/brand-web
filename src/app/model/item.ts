// cannot be compiled under '--isolatedModules' because it is ~
// 파일에 아무런 내용이 없어서 발생하는 문제
// 아래와 같이 export추가해서 다른곳에서 사용가능하게 보내주기

export type Item = {
  name: string;
  category: string;
  address: Address;
  menu: Menu[];
};

export type Address = { city: string; detail: string; zipCode: number };

export type AddressWithoutZipCode = Omit<Address, "zipCode">;

export type Menu = { name: string; price: number; category: string };

export type ItemOnlyCategory = Pick<Item, "category">;

export type ApiResponse<T> = {
  data: T[];
  totalPage: number;
  page: number;
};

export type ItemResponse = ApiResponse<Item>;
export type MenuResponse = ApiResponse<Menu>;
