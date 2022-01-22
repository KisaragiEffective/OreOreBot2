import { Message } from 'discord.js';
import { Observable } from '../service/mitetazo';

export const observableMessage = (raw: Message): Observable => ({
  author: raw.author.username,
  content: raw.content,
  async sendToSameChannel(message: string): Promise<void> {
    await raw.channel.send(message);
  }
});
