export const Rule = {
    value: '@tjs_test',
    tag: '@tjs_test',
    description: 'Matches tweets that mention the user tjs_test',
    action(tweet, commands) {
        const cmd = tweet.text.slice(10);
        return commands.get(cmd)?.execute(tweet);
    }
}