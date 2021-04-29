import {botConfig} from '~/bot-config';
import * as fs from 'fs';
import {CommandEventData, CommandHandler} from 'can-handle';
import {Client, Message} from 'discord.js';


const commandModules: (new () => CommandInterface)[] = [];
const commandHandler = new CommandHandler();
const discordClient = new Client();

const importAllCommands = async () =>
{
    const commandsDir = `${__dirname}/commands`;
    const commands = fs.readdirSync(commandsDir);
    for (const command of commands) {
        const currentCommandPath = `${commandsDir}/${command}`;
        const commandObject = await import(currentCommandPath);
        commandModules.push(commandObject.default);
    }
};

async function initMessagesProcess(config: ProcessMessageDataType)
{
    for (const commandModule of commandModules) {
        commandHandler.registerCommand(new commandModule());
    }

    discordClient.on('message', (message: Message) =>
    {
        if (message.author.bot || !message.content.startsWith(botConfig.prefix)) {
            return;
        }
        try {
            const contentWithoutPrefix = message.content.replace(botConfig.prefix, '');
            const commandEventData = new CommandEventData();
            commandEventData.data = {};
            commandEventData.message = message;
            commandHandler.handle(contentWithoutPrefix, commandEventData);
        } catch (e) {
            //todo: handle the error
        }
    });
}


async function main()
{
    await importAllCommands();
    if (botConfig.processMessage) {
        await initMessagesProcess(botConfig.processMessage);
    }

    await discordClient.login(botConfig.token);
}


main();
