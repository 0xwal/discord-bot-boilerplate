import {botConfig} from '~/bot-config';
import * as fs from 'fs';
import {CommandHandler} from 'can-handle';


const commandModules: (new () => CommandInterface)[] = [];

const importAllCommands = async () =>
{

    const commandsDir = `${__dirname}/commands`;
    const commands = fs.readdirSync(commandsDir);
    for (const command of commands) {

        const currentCommandPath = `${commandsDir}/${command}`;
        const commandObject = await import(currentCommandPath);
        commandModules.push(commandObject.default)
    }
}

async function initMessagesProcess(config: ProcessMessageDataType)
{

}


async function main()
{
    await importAllCommands();
    if (botConfig.processMessage) {
        await initMessagesProcess(botConfig.processMessage);
    }
}


main();
