declare module '@reglament' {
  export interface Icons {
    mail: string;
    phone: string;
  }

  export type Icon = keyof Icons;

  export type InputType =
    | 'text'
    | 'password'
    | 'number'
    | 'checkbox'
    | 'date';

  export interface Document {
    id: number;
    type: string;
    name: string;
    date: string;
    agency: string;
    number: string;
    create_date: string;
  }
}
