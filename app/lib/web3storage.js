import { create } from "@web3-storage/w3up-client";

let client;

export const getWeb3StorageClient = async () => {
  if (!client) {
    client = await create();
    await client.login("mendsalbert@gmail"); // Replace with your email
    const space = await client.setCurrentSpace(
      "z6MknLUhsEWZzXdBc9z6z12TZWtVUR2mB6YHBWDWDnQw465c"
    ); // Replace with your Space DID
  }
  return client;
};
