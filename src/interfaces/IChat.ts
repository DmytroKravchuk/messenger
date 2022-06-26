export interface IMessages {
  id: number;
  author: string;
  text: string;
}

export interface IChatInput {
  onAdd(props: IMessages): void;
}
