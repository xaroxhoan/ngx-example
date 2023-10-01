import { FormControl } from '@angular/forms';

export type IForm<T> = {
  [P in keyof T]: FormControl<T[P]>;
};
