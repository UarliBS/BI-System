# BI Retail - Prototipo PEI

Prototipo front-end de um sistema de Business Intelligence para varejo, criado com HTML, CSS e JavaScript puro.

O sistema demonstra login por cargo, controle de acesso por perfil, filtros globais, graficos em canvas, tabelas dinamicas, alertas, segmentacao de clientes, campanhas simuladas, reposicao de estoque e analise de margem de lucro.

## Como Executar

Abra o arquivo `index.html` no navegador.

Como o projeto nao usa backend nem dependencias externas, nao e necessario instalar pacotes.

## Perfis de Acesso

| Cargo | Modulos liberados |
| --- | --- |
| Analista de Vendas | Vendas |
| Gestor de Estoque e Reposicao | Estoque |
| Especialista em CRM | Clientes e Campanhas |
| Analista de Margem e Lucro | Relatorios de Margem |

O login e simulado no front-end. A senha padrao preenchida no prototipo e `123456`.

## Estrutura do Projeto

```text
.
|-- index.html
|-- styles.css
|-- app.js
|-- README.md
|-- docs/
|   |-- organizacao-sistema-bi.md
|   |-- PEI.pdf
|   `-- assets/
|       `-- diagrama-casos-de-uso.png
`-- logs/
```

## Arquivos Principais

- `index.html`: estrutura das telas e modulos.
- `styles.css`: layout, responsividade e estilos visuais.
- `app.js`: estado da aplicacao, dados simulados, graficos, filtros, login e interacoes.
- `docs/organizacao-sistema-bi.md`: documentacao funcional e matriz de rastreabilidade.
- `docs/PEI.pdf`: documento de referencia do projeto.
- `docs/assets/diagrama-casos-de-uso.png`: diagrama de casos de uso.

## Observacoes

- Nao ha autenticacao real.
- Nao ha banco de dados ou persistencia.
- Relatorios, campanhas, reposicao e alertas sao simulados.
- Os dados ficam definidos diretamente em `app.js`.
