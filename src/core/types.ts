export type CommandHandler = ({
  args,
}: {
  args: string[];
}) => Promise<any> | any;

export interface ICommand {
  name: string;
  description?: string;
  match: string | RegExp;
  handler: CommandHandler;
  hide?: boolean;
}
