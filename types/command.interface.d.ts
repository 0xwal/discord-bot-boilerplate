import {CommandInterface as CoreCommandInterface} from 'can-handle';


declare global
{
    interface CommandInterface extends CoreCommandInterface
    {
    }
}
