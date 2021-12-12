import { readFile, writeFile } from 'fs/promises';

export class MessagesRepository {
  async findAll() {
    const contents = await readFile('messages.json', 'utf-8');
    console.log({ contents });

    return JSON.parse(contents);
  }

  async findOne(id: string) {
    console.log(id);

    const messages = await this.findAll();

    return messages[id];
  }

  async create(content: string) {
    console.log(content);

    const messages = await this.findAll();

    const id = Math.floor(Math.random() * 999);
    messages[id] = { id, content };

    await writeFile('messages.json', JSON.stringify(messages));
  }
}
