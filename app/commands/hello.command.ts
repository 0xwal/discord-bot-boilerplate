import {CommandEventData, MiddlewareInterface} from 'can-handle';


export default class HelloCommand implements CommandInterface
{
    argumentsCount(): number
    {
        return 0;
    }

    async handle(commandEventData: CommandEventData, ...args: string[]): Promise<any>
    {
        console.log('got a message');
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
