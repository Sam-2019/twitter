import { client } from "./config.js";

class Twitter {
  tweetID = "20";

  async hello() {
    console.log("hello");
  }

  async user_info() {
    const data = await client.v2.me();
    return data.data.id;
  }

  async send_tweet() {
    const data = await client.v2.tweet("My tweet text with two images!");
    return data;
  }

  async get_tweets() {
    const userID = await this.user_info();

    const userTimeline = await client.v2.userTimeline(userID, {
      exclude: "replies",
    });

    for (const fetchedTweet of userTimeline) {
      return fetchedTweet;
    }
  }

  async retweet() {
    const userID = await this.user_info();

    const data = await client.v2.retweet(userID, this.tweetID);
    return data;
  }

  async get_a_tweet() {
    const data = await client.v2.singleTweet(this.tweetID);
    return data;
  }
}

export default Twitter;
