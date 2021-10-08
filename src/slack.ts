import { WebClient, WebAPICallResult } from "@slack/web-api";

const token = process.env.SLACK_TOKEN;
const channelId = process.env.CHANNEL_ID || "";
const web = new WebClient(token);
interface ChatPostMessageResult extends WebAPICallResult {
  channel: string;
  ts: string;
  message: {
    text: string;
  };
}

const postMessage = async (text: string) => {
  await web.chat.postMessage({ text: text, channel: channelId });
  console.log("succeeded to postMessage");
};

export { postMessage };
