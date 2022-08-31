
import { Wallets, Gateway } from 'fabric-network';
import path from 'path';

import * as connectionProfile from './connection.json'

const exists = async (key) => generic('exists', key, '!');
const create = async (key, value) => generic('create', key, value);
const retrieve = async (key) => generic('retrieve', key, '!');
const update = async (key, value) => generic('update', key, value);
const destroy = async (key) => generic('destroy', key, '!');

const generic = async (method, key, value) => {
  // Create a new file system based wallet for managing identities.
  const walletPath = path.join(process.cwd(), 'blockchain', 'wallet');

  const wallet = await Wallets.newFileSystemWallet(walletPath);

  // Create a new gateway for connecting to our peer node.
  const gateway = new Gateway();

  const connectionOptions = { wallet, identity: 'Org1 Admin', discovery: { enabled: true, asLocalhost: true } };
  await gateway.connect(connectionProfile, connectionOptions);

  // Get the network (channel) our contract is deployed to.
  const network = await gateway.getNetwork('channel1');

  // Get the contract from the network.
  const contract = network.getContract('APIJavascript');

  // Submit the specified transaction.
  var result = '';

  if (value == '!') {
    result = await contract.submitTransaction(method, key);
  } else {
    result = await contract.submitTransaction(method, key, value);
  }

  console.log('Transaction submitted');
  // Disconnect from the gateway.

  gateway.disconnect();

  if (result == null || result === '') {
    return 'ok';
  } else {
    return result.toString();
  }
};

export {
  exists,
  create,
  retrieve,
  update,
  destroy,
}
