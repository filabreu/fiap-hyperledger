# Aulas Blockchain 


Este repositório foi criado para aulas ministradas sobre criação de Smart Contracts em Hyperledger
A estrutura de diretórios é 

# APIJava
### Contrato criado em Java, com vários métodos
### Dentro está implementado um CRUD, e os métodos

## getStateByRange
    Pode-se passar a chave inicial e final de busca (não está impementado no HTML)

## getHistoryByKey
    Obtem todo histórico de uma chave 
## getChannelID
    ID do canal
## putPrivateData
## getPrivateData
## deletePrivateData
    Utiliza dados privados
## getQueryResultString
    Faz consultas por string de Query 
    Para o CoachDB, exemplos válidos podem ser 
    
    {
      "query": "{\"selector\":{\"_id\":\"0001\"}}"
    }
   
   
    {
      "query": "{\"selector\":{\"_id\":{\"$gt\":\"0000\"}}}"
     }

# Como rodar 
Baixar o projeto para a máquina com o comando
git clone https://github.com/gsreis/blockchain.git

Abrir o VSCODE e importar o projeto a partir de um arquivo (utilizar o arquivo Workspace)
Levantar o servidor hyperledger 
Empacotar o contrato 
Publicar o pacote no canal 
Chamar os métodos do CRUD para testar
Exportar a configuração com o nome config.json
Exportar o wallet com o nome wallet
Abrir uma linha de comando no diretório clientCode e digitar npm install (ou sudo npm install)
levantar o servidor com node index.js
Abrir um browser e digitar localhost:3546
Deve aparecer uma pagina HTLM que permite navegar pelo CRUD

## Atividades 
Criar uma calculadora, com as operações básicas, e apresentar na lateral as operações efetuadas
DICA: 
    Usar uma única chave e sobreescrever o valor, e chamar o método getHistoryByKey
    OU usar chaves diferentes para cada operação, e utilizar o método getStateByRange
    <img width="1057" alt="Screen Shot 2022-05-06 at 11 57 42 AM" src="https://user-images.githubusercontent.com/24461013/167159608-d7bcdadf-fcba-420e-97c1-bc18dd2e1639.png">

    
## outras ideias de atividades
### Implementar os métodos do contrato Java no contrato JavaScript
### Criar um contrato GO e criar os métodos que estão em Java

