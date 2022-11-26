import { TwitterApi } from "twitter-api-v2";
import {
  TWITTER_API_KEY,
  TWITTER_API_KEY_SECRET,
  TWITTER_ACCESS_TOKEN,
  TWITTER_ACCESS_TOKEN_SECRET,
  USER_ID,
} from "./config.js";

const client = new TwitterApi({
  appKey: TWITTER_API_KEY,
  appSecret: TWITTER_API_KEY_SECRET,
  accessToken: TWITTER_ACCESS_TOKEN,
  accessSecret: TWITTER_ACCESS_TOKEN_SECRET,
});

export const user_info = async () => {
  const data = await client.v2.me();
  console.log({ data });
};

export const send_tweet = async () => {
  const data = await client.v2.tweet("My tweet text with two images!");
  console.log({ data });
};

export const get_tweets = async () => {
  const data = await client.v2.userTimeline(USER_ID, { exclude: "replies" });
  console.log({ data });
};

export const retweet = async () => {
  const data = await client.v2.retweet("12", "20");
  console.log({ data });
};

export const get_a_tweet = async () => {
  const tweet_id = "20";
  const data = await client.v2.singleTweet(tweet_id);

  console.log({ data });
};
