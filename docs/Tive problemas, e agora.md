# [Tive problemas, e agora?](https://www.notion.so/Tive-problemas-e-agora-a8257bac28ff4bec87c0e300d4aed6df)

![icone][icone-problemas]

Fala Dev, mesmo seguindo as instruções você está se deparando com erros? Tudo normal então.

![https://media.giphy.com/media/5Zesu5VPNGJlm/giphy.gif](https://media.giphy.com/media/5Zesu5VPNGJlm/giphy.gif)

Brincadeiras a parte, a primeira coisa que você precisa ter em sua mente é que trabalhar com programação é isso. Enfrentamos problemas constantemente e algumas das habilidades mais importantes que você precisa ter como dev são identificar o problema e pesquisar soluções. Não se engane, você não vai (e não precisa) decorar tudo.

## Como resolver o meu problema?

Esclarecido esse ponto, queremos deixar para vocês algumas sugestões de como solucionar seus problemas:

- Comunidades: existem diversas comunidades de devs na internet e uma boa conversa com outros colegas pode ser o que você precisa. Vamos deixar aqui o [link para nossa comunidade](https://discord.gg/XX4eYTFq) aberta no Discord, com quase 60 mil pessoas.
- Fórums: chats como Discord podem ser bons para resolver no momento, mas não são legais para pesquisar soluções e acompanhar threads. Nesse caso, uma boa pesquisa no [StackOverflow](https://stackoverflow.com/) e nas issues do [Github](https://github.com/) (caso o problema seja de uma lib específica) tende a ser bem mais eficiente.
- Outros: além das opções acima, existem diversas outras formas de pesquisar uma solução para o seu problema, como a documentação oficial, artigos de outros devs (em sites como o [Dev.to](https://dev.to/)) e vídeos (famoso [Youtube](https://www.youtube.com/))

## Erro mais comum

Com todas essas opções apresentadas acima, deve ficar fácil de você conseguir resolver os possíveis problemas que possa vir a enfrentar na instalação. Gostaríamos de adiantar apenas um (e suas possíveis três causas) pois ele é o mais comum nesses casos. O famoso:

```bash
'xxxxxx' não é reconhecido como um comando interno
ou externo, um programa operável ou um arquivo em lotes.
```

ou

```bash
'xxxxxx' is not recognized as an internal or external command,
operable program or batch file.
```

ou

```bash
zsh: command not found: xxxxxx
```

Sim, esse erro pode variar bastante dependendo do shell e da linguagem que estiver utilizando, mas todos trazem a mesma mensagem: o comando não foi encontrado. E o que pode estar causando isso? As 4 causas mais comuns são:

- Verifique se você escreveu o comando corretamente, pois basta 1 caractere errado para ocorrer esse erro;
- Às vezes a instalação ainda não conseguiu aplicar as alterações na instância que está aberta do terminal. Reinicie o terminal e tente rodar o comando novamente;
- Verifique se a instalação realmente ocorreu e finalizou;
- Pode ocorrer de não ter sido realizada a atualização nas variáveis ambiente do sistema para encontrar e identificar os novos comandos. Verifique se elas realmente se encontram lá.

## Preciso realmente instalar tudo isso?

Por fim, é preciso deixar claro que, para deixar o seu ambiente configurado, o único requisito obrigatório é o Node.js, já que o Visual Studio Code pode ser substituído por outro editor de texto como o [Atom](https://atom.io/) ou [Sublime](https://www.sublimetext.com/).

Caso esteja tendo problemas com a instalação por gerenciador de pacotes, você pode instalar o Node utilizando o método direto presente na [página principal do site](https://nodejs.org/en/). Lembre-se apenas de instalar a versão LTS em vez da Current.

   [icone-problemas]: ./problemas.svg
