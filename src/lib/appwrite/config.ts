import { Client, Account, Databases, Storage, Avatars } from 'appwrite'

export const appwriteConfig = {
    projectId: '6590ef78df6f7817c807',
    url: 'https://cloud.appwrite.io/v1',
    storageId: '65928beac39745d2a454',
    databaseId: '65928c40e39f7b6f578b',
    userCollectionId: '65928cb6803d5b890833',
    postCollectionId: '65928c7205322c98a218',
    savesCollectionId: '65928cd78761fde64a8e',
}

export const client = new Client();

client
  .setEndpoint(appwriteConfig.url)
  .setProject(appwriteConfig.projectId);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
