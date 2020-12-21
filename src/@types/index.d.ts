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
}
