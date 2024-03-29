import { Client, Account, Databases, Storage, Avatars } from 'appwrite'

export const appwriteConfig = {
    projectId: '****************',
    url: 'https://cloud.appwrite.io/v1',
    storageId: '****************',
    databaseId: '****************',
    userCollectionId: '****************',
    postCollectionId: '****************',
    savesCollectionId: '****************',
}

export const client = new Client();

client
  .setEndpoint(appwriteConfig.url)
  .setProject(appwriteConfig.projectId);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
