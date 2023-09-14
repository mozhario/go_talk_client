import { format } from 'date-fns';


export const formatSentTime = (sentTime) => {
    const date = new Date(sentTime);
    return format(date, 'dd.MM.yyyy HH:mm:ss');
}
