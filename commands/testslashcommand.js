import { SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
    .setName("testslashcommand")
    .setDescription("This is a test slash command")

export async function execute(interaction) {
    await interaction.reply("Hey there! I am a bot created by Hemant Sharma (@hemants1703) and this is a test slash command.");
}