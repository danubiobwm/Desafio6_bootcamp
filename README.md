# Desafio6_bootcamp

Desafio 06. Aplicação com React Native  novas funcionalidades na aplicação que desenvolvemos ao longo desse módulo.

Funcionalidades
Loading de repositórios
Adicione um indicator de loading utilizando <ActivityIndicator /> antes de carregar a lista de repositórios favoritados na tela de detalhes do Usuário.

Scroll infinito
Adicione uma funcionalidade de scroll infinito na lista de repositórios favoritados. 

Pull to Refresh
funcionalidade para quando o usuário arrastar a listagem de repositórios favoritados pra baixo atualize a lista resetando o estado, ou seja, volte o estado da paginação para a página 1 exibindo apenas os 30 primeiros itens.

A funcionalidade "Pull to Refresh" existe por padrão na FlatList e pode ser implementada através do seguinte código:

<Stars
  onRefresh={this.refreshList} // Função dispara quando o usuário arrasta a lista pra baixo
  refreshing={this.state.refreshing} // Variável que armazena um estado true/false que representa se a lista está atualizando
  // Restante das props
>
WebView;
nova página na aplicação que vai ser acessada quando o usuário clicar em um repositório favoritado, essa página deve conter apenas o Header da aplicação. O conteúdo da página será uma WebView, ou seja, um browser integrado que exibe o atributo html_url presente no objeto do repositório que vem da API do Github.

Desafio Concluído;
