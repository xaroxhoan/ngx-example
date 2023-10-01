export interface IHomeResolved {
  title: string;
}

export class HomeResolved implements IHomeResolved {
  title!: string;

  constructor(props?: IHomeResolved) {
    props && Object.assign(this, props);
  }
}
