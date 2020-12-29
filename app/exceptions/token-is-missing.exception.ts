export class TokenIsMissingException extends Error
{
    message: string = 'Token is required to be set in environment variable';
}
