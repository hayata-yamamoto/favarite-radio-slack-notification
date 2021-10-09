import { WebClient } from "@slack/web-api";

const token = process.env.SLACK_TOKEN;
const channelId = process.env.CHANNEL_ID || "";
const web = new WebClient(token);

const postMessage = async (text: string): Promise<void> => {
  await web.chat.postMessage({ text: text, channel: channelId });
  console.log("succeeded to postMessage");
};

export { postMessage };
