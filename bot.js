// Import the necessary discord.js classes using ES6 syntax
import { Client, Events, GatewayIntentBits } from 'discord.js';
import { config } from 'dotenv';

import * as testslashcommand from "./commands/testSlashCommand.js";

// This line makes the code to read the .env file and assign the values to process.env
config();

// Create a new client instance
const client = new Client({
    intents: [GatewayIntentBits.Guilds]
});

// When the client is ready, run this code (only once)
client.once(Events.ClientReady, () => {
    console.log(`${client.user.tag} is now Ready!✅`);
});

// Login to Discord with your client's token
client.login(process.env.TOKEN);

client.on(Events.InteractionCreate, async (interaction) => {
    // if interaction is not a command, return
    if (!interaction.isCommand()) return;

    // if interaction is a command, check the command name
    if (interaction.commandName === "testslashcommand") {
        // since the execute function is async, we need to await it
        await testslashcommand.execute(interaction);
    }
});