import {CommandEventData, MiddlewareInterface} from 'can-handle';


export default class HelloCommand implements CommandInterface
{
    argumentsCount(): number
    {
        return 0;
    }

    async handle(commandEventData: CommandEventData, ...args: string[]): Promise<any>
    {
        commandEventData.message?.reply("Hi")
    }

    identifier(): string
    {
        return 'hello-command';
    }

    middlewares(): MiddlewareInterface[]
    {
        return [];
    }
}
