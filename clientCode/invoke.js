
 const { Wallets, Gateway } = require('fabric-network');
 const fs = require('fs');
 const path = require('path');

  async function main( ) {
   try {

    const connectionProfilePath = path.resolve(__dirname, '.', 'connection.json');
    const connectionProfile = JSON.parse(fs.readFileSync(connectionProfilePath, 'utf8')); 

    // Create a new file system based wallet for managing identities.
    const walletPath = path.join(process.cwd(), 'wallet');
    const wallet = await Wallets.newFileSystemWallet(walletPath);


    console.log(`Wallet path: ${walletPath}`);
    // Create a new gateway for connecting to our peer node.
    const gateway = new Gateway();
    // eslint-disable-line @typescript-eslint/no-unsafe-assignment
    const connectionOptions = { wallet, identity: 'admin', discovery: { enabled: true, asLocalhost: true } };
    await gateway.connect(connectionProfile, connectionOptions);
    // Get the network (channel) our contract is deployed to.

    const network = await gateway.getNetwork('mychannel');
    // Get the contract from the network.
    const contract = network.getContract('APIJava');
    // Submit the specified transaction.
    await contract.submitTransaction('createSampleApiCtx', '0006', 'externo0006');
    console.log('Transaction has been submitted');
    // Disconnect from the gateway.
    gateway.disconnect();
  } catch (error) {
    console.error('Failed to submit transaction:',error);
    process.exit(1);
}
 }


    // Parse the connection profile. This would be the path to the file downloaded
    // from the IBM Blockchain Platform operational console.
    //  const ccpPath = path.resolve(__dirname, 'connection.json');
    //  const ccp = JSON.parse(fs.readFileSync(ccpPath, 'utf8'));

    //  // Configure a wallet. This wallet must already be primed with an identity that
    //  // the application can use to interact with the peer node.
    //  const walletPath = path.resolve(__dirname, 'wallet');
    //  const wallet = new FileSystemWallet(walletPath);

    //  // Create a new gateway, and connect to the gateway peer node(s). The identity
    //  // specified must already exist in the specified wallet.
    //  const gateway = new Gateway();
    //  await gateway.connect(ccp, { wallet, identity: 'Org1 Admin' , discovery: {enabled: true, asLocalhost:true }});

    //  // Get the network channel that the smart contract is deployed to.
    //  const network = await gateway.getNetwork('mychannel');

    //  // Get the smart contract from the network channel.
    //  const contract = network.getContract('SampleAPI@2.3');

    //  // Submit the 'createCar' transaction to the smart contract, and wait for it
    //  // to be committed to the ledger.
    //  await contract.submitTransaction('creatteSampleAPICtx', '0006', 'valor0006');
    //  console.log('Transaction has been submitted');

    //  await gateway.disconnect();

    //  } catch (error) {
    //    console.error(`Failed to submit transaction: ${error}`);
    //    process.exit(1);
    //  }
   //}
 main();
