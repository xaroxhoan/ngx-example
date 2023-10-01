export interface IProfileResolved {
  title: string;
}

export class ProfileResolved implements IProfileResolved {
  title!: string;

  constructor(props?: IProfileResolved) {
    props && Object.assign(this, props);
  }
}
