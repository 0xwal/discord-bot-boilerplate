function getToken(): string
{
    let botToken = process.env.BOT_TOKEN;
    if (botToken) {
        return botToken;
    }
    return '';
}

export const botConfig: BotConfig = {
    prefix: '^',
    token: getToken()
};
