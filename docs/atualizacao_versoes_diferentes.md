# [Atualização (versões diferentes)](https://www.notion.so/Atualiza-o-vers-es-diferentes-af8018a9df504d5d91c662ed4cea9e08)

![ícone][icone-atualizacao]

## Node e npm

> Se você já possui Node na versão 14, não é preciso instalar nem atualizar

### Linux (Ubuntu)

Para atualizar o seu Node e npm utilizando o **NodeSource**, siga os passos:

- Existem dois casos que você pode se deparar:
    - **Caso 1**: você já tem o Node 14 (LTS mais recente), mas desatualizado.

    Basta atualizar utilizando os clássicos comandos:

    ```json
    sudo apt-get update && sudo apt-get upgrade
    ```

    - Em seguida, rode os comandos:

    ```bash
    node -v
    npm -v
    ```

    Caso estejam nas versões 14.17.0 e 6.14.13, respectivamente (ou posterior) a atualização ocorreu com sucesso. Lembre-se de que não tem problema caso sua versão seja posterior a essa desde que seja a LTS.

    ---

    - Caso 2: você tem um Node em outra versão que não seja a LTS mais recente (14).

    Primeiramente é preciso desinstalar o Node:

    ```json
    sudo apt-get remove nodejs
    ```

    Em seguida, é preciso remover o Node do pacote de dependências. Aperte a tecla `Windows` e busque pela opção **Software & Updates**. Clique na aba **Other Software** e procure na lista pelas dependências do Node referente a versão que você quer remover. Abaixo segue um exemplo de como apareceria no caso da versão 10 do Node:

    ![remover node das dependências - passo 1][remover-node-dependencias-1]

    Selecione ambas e clique no botão **Remove**. Feche a janela e aceita a opção de atualizar as informações clicando no botão **Reload**.

    ![remover node das dependências - passo 2][remover-node-dependencias-2]

    Após remover ambas as dependências, abra o terminal e execute os comandos:

    ```bash
    curl -sL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
    sudo apt-get install -y nodejs
    ```

    Por fim, rode os comandos:

    ```bash
    node -v
    npm -v
    ```

    Caso estejam nas versões 14.16.0 e 6.14.11, respectivamente, (ou posterior) a atualização ocorreu com sucesso.

### macOS

Para atualizar o seu Node e npm utilizando o **Homebrew**, siga os passos:

- Remova o Node da sua máquina:

```bash
brew uninstall node
```

- Atualize o brew e instale a versão LTS mais recente (14)

```bash
brew update
brew install node@14
```

- Como instalamos uma versão do Node diferente da default do Homebrew (o padrão é a current, nesse caso v16), é preciso adicionar manualmente o `path` do Node na nossa variável ambiente. Adicione a seguinte linha ao final do arquivo `~/.bashrc` (ou do arquivo `~/.zshrc` caso você utilize o shell ZSH):

```bash
export PATH="/usr/local/opt/node@14/bin:$PATH"
```

- Reinicie o terminal e rode os comandos:

```bash
node -v
npm -v
```

Caso estejam nas versões 14.17.0 e 6.14.13, respectivamente, (ou posterior) a atualização ocorreu com sucesso. Lembre-se de que não tem problema caso sua versão seja posterior a essa desde que seja a LTS.

### Windows

Para atualizar o seu Node e npm utilizando o **Chocolatey**, siga os passos:

- Execute o seguinte comando:

```bash
choco upgrade nodejs-lts
```

- Em seguida, rode os comandos:

```bash
node -v
npm -v
```

Caso estejam nas versões 14.17.0 e 6.14.13, respectivamente, (ou posterior) a atualização ocorreu com sucesso. Lembre-se de que não tem problema caso sua versão seja posterior a essa desde que seja a LTS.

   [icone-atualizacao]: ./img/atualizacao.svg
   [remover-node-dependencias-1]: ./img/remover-node-dependencias-1.png
   [remover-node-dependencias-2]: ./img/remover-node-dependencias-2.png
