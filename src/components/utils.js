const generateRandomString = (length) => {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
};

export const convertMillis = (millis) => {
    let seconds = parseInt((millis/1000)%60);
    let minutes = parseInt((millis/(1000*60))%60);
    let hours = parseInt((millis/(1000*60*60))%24);

if (hours != 0) {
    return hours + " h " + minutes + " min " + seconds + " s ";
}
else {
    return minutes + " min " + seconds + " s ";
}
}