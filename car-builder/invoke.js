
 const { Wallets, Gateway } = require('fabric-network');
 const fs = require('fs');
 const path = require('path');


 exports.create = (async function( chave, valor ) {
    return generic('create', chave, valor);
 });

 exports.retrieve = (async function( chave) {
   return generic('retrieve', chave, "!");
});

exports.update = (async function( chave, valor ) {
   return generic('update', chave, valor);
});

exports.delete = (async function( chave) {
   return generic('delete', chave, "!");
});

async function generic(method, chave, valor ) {

  console.log(method + "|" + chave + "|" + valor);

   try {

    const connectionProfilePath = path.resolve(__dirname, '.', "connection.json");
    const connectionProfile = JSON.parse(fs.readFileSync(connectionProfilePath, 'utf8')); 

    // Create a new file system based wallet for managing identities.
    const walletPath = path.join(process.cwd(), "wallet");
    const wallet = await Wallets.newFileSystemWallet(walletPath);

    // Create a new gateway for connecting to our peer node.
    const gateway = new Gateway();
    // eslint-disable-line @typescript-eslint/no-unsafe-assignment
    const connectionOptions = { wallet, identity: 'admin', discovery: { enabled: true, asLocalhost: true } };
    await gateway.connect(connectionProfile, connectionOptions);
    // Get the network (channel) our contract is deployed to.

    const network = await gateway.getNetwork("mychannel");
    // Get the contract from the network.
    const contract = network.getContract("APIJava");
    // Submit the specified transaction.
    var result = "";
    if (valor == "!")
       result = await contract.submitTransaction(method, chave);
    else
    result = await contract.submitTransaction(method, chave, valor);  
    console.log('Transação submetida');
    // Disconnect from the gateway.
    console.log("teste " + result.toString());
    gateway.disconnect();
    if (result == null || result == "")
       return  "ok";
    else
       return result.toString();

  } 
  catch (error) {
    return 'Falha ao submeter transação:' + error;
  }
 };
