import { postMessage } from "./slack";
import dayjs from "dayjs";
import "dayjs/locale/ja";

const now = dayjs(new Date()).locale("ja").format("YYYYMMDD");
const t = `${now}213000`;

const text = `今をときめく全盛期ラジオ『問わず語りの神田伯山』はじまりまぁす。 \nhttps://radiko.jp/share/?sid=TBS&t=${t}`;
postMessage(text)
.then(() => console.log("Succeeded"))
.catch((r) => console.log(r));
