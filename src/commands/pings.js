export const Command = {
    name: 'ping',
    description: 'Replies with a Pong!',
    async execute(tweet) {
        return tweet.reply({ text: 'Pong!' });
    }
}