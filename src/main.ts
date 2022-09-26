import msg from "msg.js";
import { SkyRouter } from "skyrouter";
import superagent from "superagent";
import BrowserInfo from "./BrowserInfo";
import Wallet from "./klaytn/Wallet";
import Layout from "./view/Layout";
import SparrowCustom from "./view/SparrowCustom";
import SparrowHonor from "./view/SparrowHonor";
import Sparrows from "./view/Sparrows";

(async () => {
    msg.language = BrowserInfo.language;
    msg.parseCSV((await superagent.get("/msg.csv")).text);

    SkyRouter.route("**", Layout);
    SkyRouter.route("", SparrowHonor);

    SkyRouter.route("sparrows", Sparrows);
    SkyRouter.route("sparrows/{id}", SparrowCustom);

    if (sessionStorage.__spa_path) {
        SkyRouter.go(sessionStorage.__spa_path);
        sessionStorage.removeItem("__spa_path");
    }

    if (await Wallet.connected() !== true) {
        await Wallet.connect();
    }
})();