import { IForm } from 'src/app/types/form';

export interface ISignin {
  username: string;
  password: string;
}

export type ISinginForm = IForm<ISignin>;
