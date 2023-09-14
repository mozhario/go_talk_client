import * as config from "config"


export const fetchMessages = () => {
    return fetch(`http://${config.SERVER_HOST}:${config.SERVER_PORT}/messages`)
        .then(response => response.json())
        .catch(error => console.error('Error fetching messages:', error));
};
