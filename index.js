// Requiring dependencies.
const RPC = require("discord-rpc");
const client = new RPC.Client({transport: "ipc" }); // Other Options: Websocket
const { id, secret } = require("./config.json");

// Customize your Presence
const activity = {
    details: `Details Here`,
    assets: {
        large_image: "name of the profile image",
        large_text: "text name",
        small_image: "name of the small picture",
        small_text: "url here"
    },
    buttons: [
        {
            "label": "name of the first button",
            "url": "Url Here"
        },
        {
            "label": "name of the first button",
            "url": "Url Here"
        }
    ],
    timestamps: {start: Date.now()},
    instance: true
};

client.on("ready", () => {
    console.log("🔌 Rich Presence connect to Discord");
    console.log("Made by : Link0Darck");
    client.request("SET_ACTIVITY", {pid: process.pid, activity: activity});
});

client.login({clientId: id, clientSecret: secret});