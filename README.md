<h1 align="center"> Javascript Logger </h1>
<div dir="auto" align="center">
  <br>
  <a target="_blank" rel="noopener noreferrer nofollow" href="https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg"><img align="center" alt="Gustavo-VSCode" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg" style="max-width: 100%;"></a>
   <a target="_blank" rel="noopener noreferrer nofollow" href="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"><img align="center" alt="Gustavo-Javascript" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" style="max-width: 100%;"></a>
  <a target="_blank" rel="noopener noreferrer nofollow" href="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg"><img align="center" alt="Gustavo-Nodejs" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg"
</br>
</div>

## Topics
* [Project Description](#project-description) :us:
* [Descrição do Projeto](#descrição-do-projeto) :brazil:

## Project Description
<p align="justify">
This project consists of a set of utility functions designed to manage logging within a given application. It facilitates the generation of log file names and timestamps, as well as the creation of nested directories to organize log files by date, year, month, and day. This architecture allows for comprehensive tracking and retrieval of logs. The functionality is primarily encapsulated within async functions, leveraging popular libraries such as Winston for logging and the native fs module for file system operations.
</p>

## Code Description
<p align="justify">
The code is organized into various async functions. The `dateTimeInfo` function retrieves and formats the current date and time. The `formatLogName` function creates a log file name based on specific session and chat ID. The `createLogDirectories` function builds necessary directories for logging by date, year, month, and day, while `validateDir` validates or creates required directories for sessions. Additionally, there are functions to create a Winston logger (`createMyLogger`) and to log specific text messages (`logWpp`), all tailored to handle chat interactions. Error handling is integrated within each function to ensure robust performance.
</p>

## Getting Started
<p align="justify">
To get started with this project, you will need to have Node.js installed on your system. Clone or download the repository to your local machine. Install the required dependencies, including the Winston logging library, by running `npm install`. Make sure to require all necessary modules, including 'path' and 'fs', and import the functions from 'misc.js'. Familiarize yourself with the functions and their parameters as they will be essential for logging within your application.
</p>

## Executing Program
<p align="justify">
Execute the code by running your main application file through Node.js (e.g., `node app.js`). Within your main application, you can call the functions as needed, passing the appropriate parameters such as session identifiers, chat IDs, or log text. Ensure that the file paths and directory structures align with your intended logging organization. Monitor the console for any error messages or log confirmation, and inspect the generated log files within the created directories to verify the output.
</p>

## Author
<p align="justify"> Gustavo de Souza Pessanha da Costa. 
</p>

## License
<p align="justify"> This project is licensed under the MIT license. 
</p>

:small_orange_diamond: :small_orange_diamond: :small_orange_diamond:

## Descrição do Projeto
<p align="justify">
Este projeto consiste em um conjunto de funções utilitárias projetadas para gerenciar o registro (logging) dentro de uma determinada aplicação. Ele facilita a geração de nomes de arquivos de log e carimbos de data/hora, bem como a criação de diretórios aninhados para organizar os arquivos de log por data, ano, mês e dia. Essa arquitetura permite o rastreamento e recuperação abrangentes de logs relacionados a várias sessões e interações de chat. A funcionalidade é encapsulada principalmente dentro de funções assíncronas, aproveitando bibliotecas populares como Winston para registro e o módulo nativo fs para operações de sistema de arquivos.
</p>

## Descrição do código
<p align="justify">
O código é organizado em várias funções assíncronas. A função `dateTimeInfo` recupera e formata a data e hora atuais. A função `formatLogName` cria um nome de arquivo de log com base em uma sessão e ID de chat específicos. A função `createLogDirectories` constrói os diretórios necessários para registro por data, ano, mês e dia, enquanto `validateDir` valida ou cria os diretórios necessários para as sessões. Além disso, existem funções para criar um registrador Winston (`createMyLogger`) e para registrar mensagens de texto específicas (`logWpp`), todas adaptadas para lidar com interações de chat. O tratamento de erros está integrado em cada função para garantir um desempenho robusto.
</p>

## Iniciando
<p align="justify">
Para começar com este projeto, você precisará ter o Node.js instalado em seu sistema. Clone ou baixe o repositório para sua máquina local. Instale as dependências necessárias, incluindo a biblioteca de registro Winston, executando `npm install`. Certifique-se de requerer todos os módulos necessários, incluindo 'path' e 'fs', e importe as funções de 'misc.js'. Familiarize-se com as funções e seus parâmetros, pois eles serão essenciais para o registro em sua aplicação.
</p>

## Executando o programa
<p align="justify">
Execute o código executando seu arquivo de aplicativo principal através do Node.js (por exemplo, `node app.js`). Dentro de sua aplicação principal, você pode chamar as funções conforme necessário, passando os parâmetros apropriados, como identificadores de sessão, IDs de chat ou texto de log. Certifique-se de que os caminhos de arquivo e as estruturas de diretório estejam alinhados com a organização de registro pretendida. Monitore o console para quaisquer mensagens de erro ou confirmação de log, e inspecione os arquivos de log gerados nos diretórios criados para verificar a saída.
</p>

## Autor
<p align="justify"> Gustavo de Souza Pessanha da Costa.
</p>

## Licença
<p align="justify"> Este projeto é licenciado sob a licença MIT.
</p>
