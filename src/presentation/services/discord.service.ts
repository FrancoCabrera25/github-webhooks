import { envs } from '../../config/envs';

export class DiscordService {
    private readonly discordWebhookUrl = envs.DISCORD_WEBHOOK_URL;

    async notify(message: string) {
        const body = {
            content: message,
           /*  embeds: [
                {
                    image: {
                        url: 'https://giphy.com/gifs/edailypop-oh-my-god-thank-goodness-cMhVdX4lbaEOhl3xoP',
                    }
                }
            ] */
        };

        const response = await fetch(this.discordWebhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            console.log('Error sending message to discord');

            return false;
        }

        return true;
    }
}
