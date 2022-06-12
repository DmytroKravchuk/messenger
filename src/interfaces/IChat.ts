export interface IMessages {
  id: number;
  author: string;
  text: string;
  outgoing?: boolean;
}

export interface IChatInput {
  onAdd({}: IMessages): void;
}
