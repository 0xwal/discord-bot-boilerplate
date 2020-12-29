require('dotenv').config();
import {TokenIsMissingException} from '~app/exceptions';


function getToken(): string
{
    let botToken = process.env.BOT_TOKEN;
    if (!botToken) {
        throw new TokenIsMissingException();
    }
    return botToken;
}

export const botConfig: BotConfig = {
    prefix: '^',
    token: getToken(),
    processMessage: true
};
