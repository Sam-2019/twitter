import { client } from "./config.js";
import { USER_ID } from "../config.js";

export const user_info = async () => {
  const data = await client.v2.me();
  console.log({ data });
};

export const send_tweet = async () => {
  const data = await client.v2.tweet("My tweet text with two images!");
  console.log({ data });
};

export const get_tweets = async () => {
  const userTimeline = await client.v2.userTimeline(USER_ID, {
    exclude: "replies",
  });

  for (const fetchedTweet of userTimeline) {
    console.log({ fetchedTweet });
  }
};

export const retweet = async () => {
  const tweet_id = "20";
  const data = await client.v2.retweet(USER_ID, tweet_id);
  console.log({ data });
};

export const get_a_tweet = async () => {
  const tweet_id = "20";
  const data = await client.v2.singleTweet(tweet_id);

  console.log({ data });
};
