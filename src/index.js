import { Client } from 'twitter.js';
import { credentials } from './secrets.js';

const client = new Client({ events: ['FILTERED_TWEET_CREATE'] });

client.on('ready', async () => {
  console.log(`Logged in as ${client.me.username}`);
  const rules = await client.filteredStreamRules.fetch();
  if (rules.some(rule => rule.value === '@tjs_test')) return; // return if the rule already exists in order to not create a duplicate rule
  await client.filteredStreamRules.create({
    value: '@tjs_test',
    tag: 'Tweets mentioning the user with the username tjs_test'
  });
});

client.on('filteredTweetCreate', async (tweet, rules) => {
  if (tweet.author.username === client.me.username) return; // bot's reply trigger this event for some reason
  await tweet.reply({ text: 'Hi, I am a bot!' });
});

client.login(credentials);