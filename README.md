# Projeto de Aplicação Frontend Angular com API de Futebol

## Descrição
Este projeto consiste na construção de uma aplicação frontend Angular que utiliza a API de futebol para obter informações sobre formação de times, lista de jogadores, tabela de jogos e pontos. A aplicação permite ao usuário realizar login com uma chave de API fornecida pela API de futebol, selecionar o país e o ano desejados, visualizar as ligas disponíveis, selecionar um time, e ver os dados detalhados do time escolhido, incluindo escalação, tabela da temporada e gráfico de gols durante os jogos.

## Funcionalidades
- Login com validação através da chave de API fornecida pela API de futebol.
- Seleção de país e ano para visualizar as ligas disponíveis.
- Exibição das ligas disponíveis para o país e ano selecionados.
- Seleção de um time para ver os dados detalhados.
- Visualização da escalação do time selecionado.
- Exibição da tabela da temporada com pontos e posições dos times.
- Gráfico de gols durante os jogos da temporada.

## Desenvolvimento

### Dia 1: Configuração Inicial e Login
No primeiro dia, foi realizada a configuração inicial do projeto e a implementação da funcionalidade de login. Foi criada a tela de login, onde o usuário pode inserir a chave de API disponibilizada pela API de futebol para autenticação. Ao fazer o login com sucesso, a chave é armazenada para uso posterior.

### Dia 2: Seleção de País e Ano
No segundo dia, foi implementada a funcionalidade de seleção de país e ano. O usuário pode escolher o país desejado e o ano da temporada por meio de dropdowns. As informações de países e anos foram obtidas da API de futebol. Após a seleção, os dados são coletados para uso nas próximas telas.

### Dia 3: Ligas Disponíveis e Times
No terceiro dia, foram adicionadas as telas de exibição das ligas disponíveis e dos times participantes. Ao selecionar um país e um ano, a aplicação busca as ligas correspondentes por meio da API e exibe em uma lista. Ao selecionar uma liga, a lista de times participantes é apresentada em uma tabela.

### Dia 4: Dados do Time Selecionado
No último dia, foi implementada a funcionalidade de exibição dos dados detalhados do time selecionado. Ao confirmar a seleção do time, a aplicação busca informações como a escalação, tabela da temporada e gráfico de gols durante os jogos. Esses dados são obtidos por meio de micro serviços conectados à API de futebol. Os dados são apresentados em tabelas e gráficos, estilizados com SCSS, Bootstrap e Angular Material.

## Tecnologias Utilizadas
- Angular
- SCSS (Sassy CSS)
- Bootstrap
- Angular Material
- Banco de dados JSON (local)

<div style="display:flex; align-items: center;">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png" style="width:50px" alt="Angular">
<img src="https://itexpert.fr/content/images/2020/08/sass-logo.png" style="width:50px" alt="SCSS">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png" style="width:50px" alt="BootStrap">
<img src="https://camo.githubusercontent.com/c5b95fc653e7928d7277fa065cd098187cb9b7ea2d4d976cef5215a0676d2424/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f616e67756c61722d6d6174657269616c2d657874656e73696f6e732f7061676573406d61737465722f6173736574732f616e67756c61722d6d6174657269616c2d657874656e73696f6e732d6c6f676f2e706e67" style="width:50px" alt="Angular material">
<img src="https://camo.githubusercontent.com/f725b7a314d523d78005509f98c436a1fcf2883fd39cb9e5b83346f6bddb599a/687474703a2f2f6a736f6e6170692e6f72672f696d616765732f6a736f6e6170692e706e67" style="width:100px" alt="JSON server">
</div>

## Instruções de Uso
1. Clone este repositório.
2. Instale as dependências utilizando o comando `npm`
3. Rode o comando `ng serve` ou `npm run start`
4. Abra seu navegador na página `http://localhost:4200/`

## Chave KEY
Você pode conseguir uma chave em `https://dashboard.api-football.com`
<h4>⚠ Lembre-se que você possui um limite de 100 chamadas diárias</h4>