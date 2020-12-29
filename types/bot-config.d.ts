interface ProcessMessageOptions
{
    folderPath: string;
}

declare type ProcessMessageDataType = boolean;

interface BotConfig
{
    prefix: string;
    name?: string;
    token: string;
    processMessage?: ProcessMessageDataType;
}
