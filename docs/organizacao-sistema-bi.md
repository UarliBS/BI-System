# Organizacao do Sistema BI

Este documento descreve a organizacao atual do prototipo BI Retail, considerando as alteracoes implementadas em `index.html` e `app.js`.

O sistema deixou de ser apenas uma proposta geral de telas e passou a representar um prototipo navegavel com login por cargo, controle de acesso por perfil, filtros globais, graficos em canvas, tabelas dinamicas, alertas, simulacoes e modulos separados por regra de negocio.

## Objetivo do Sistema

Criar um sistema de Business Intelligence para uma empresa de varejo, apoiando decisoes sobre vendas, estoque, reposicao, clientes, campanhas, margem de lucro e desempenho de produtos.

O prototipo atual tambem demonstra:

- Acesso controlado por funcionario/cargo.
- Exibicao de funcionalidades conforme o perfil autenticado.
- Consulta visual de indicadores, graficos e tabelas.
- Simulacao de acoes operacionais, como reposicao, campanha e exportacao de relatorio.

## Arquivos Principais

| Arquivo | Papel no sistema |
| --- | --- |
| `index.html` | Estrutura da interface: tela de login, menu lateral, filtros globais e secoes dos modulos. |
| `app.js` | Regras do prototipo: estado da aplicacao, perfis de acesso, dados simulados, navegacao, renderizacao, graficos e eventos. |
| `styles.css` | Layout visual, responsividade, cards, paineis, tabelas, botoes, status e tela de login. |

## Atores e Controle de Acesso

O prototipo possui login por cargo. Cada cargo acessa somente os modulos relacionados as suas regras de negocio.

| Perfil no login | Acesso permitido | Tela inicial apos login | Requisitos principais |
| --- | --- | --- | --- |
| Analista de Vendas | Vendas | Analise de Vendas | RF01, RF02, RF03 |
| Gestor de Estoque e Reposicao | Estoque | Estoque e Reposicao | RF04, RF05, RF06 |
| Especialista em CRM | Clientes e Campanhas | Segmentacao de Clientes | RF07, RF08, RF09 |
| Analista de Margem e Lucro | Relatorios de Margem | Relatorios de Margem | RF10, RF11, RF12 |

Observacao: a tela `Dashboard Geral` continua implementada no HTML e no JavaScript como visao consolidada, mas no fluxo atual nao e liberada para nenhum dos perfis do login. Ela pode ser usada futuramente para um perfil administrativo ou gestor geral.

## Fluxo Geral da Aplicacao

1. Usuario acessa o prototipo na tela de login.
2. Usuario informa e-mail, senha e cargo.
3. O sistema registra o perfil ativo no estado da aplicacao.
4. O menu lateral exibe somente as opcoes permitidas para o cargo.
5. O usuario e enviado automaticamente para o modulo padrao do perfil.
6. Filtros, botoes, graficos e tabelas atualizam os dados simulados na tela.
7. Acoes como calcular metricas, gerar reposicao, segmentar clientes, salvar campanha e exportar relatorio exibem feedback por toast.

## Estrutura Atual das Telas

### 1. Login por Funcionario

Tela inicial exibida quando o corpo da pagina esta com a classe `logged-out`.

Elementos implementados:

- Marca BI Retail.
- Campos de e-mail e senha.
- Seletor de cargo.
- Botao "Entrar no sistema".
- Previa dos acessos do prototipo.
- Painel visual explicando o acesso controlado por funcao.

Regras implementadas:

- O envio do formulario chama a funcao `login(role, email)`.
- O perfil ativo e definido em `state.currentUser`.
- A funcao `applyAccessProfile()` libera a interface e esconde itens do menu que o perfil nao pode acessar.
- O botao "Sair" chama `logout()` e retorna para a tela de login.

### 2. Dashboard Geral

Tela consolidada implementada, mas nao exposta aos perfis atuais.

Conteudos:

- KPIs de vendas totais, margem de lucro, ticket medio e estoque critico.
- Grafico de evolucao de vendas ou margem.
- Alertas recentes.
- Lista de modulos do BI.
- Resumo operacional em tabela.

Funcionalidades:

- Alternancia entre grafico de vendas e margem.
- Limpeza visual dos alertas.
- Atalhos para modulos por meio de botoes `data-jump`.
- Atualizacao de KPIs conforme filtros globais.

Requisitos relacionados:

- RF01, RF03, RF06, RF11.

### 3. Analise de Vendas

Modulo acessado pelo perfil `Analista de Vendas`.

Conteudos:

- Grafico de vendas por periodo.
- Atalhos de periodo: diario, semanal, mensal, trimestral e anual.
- Comparacao entre vendas realizadas, meta do periodo e margem media.
- Calculo de metricas selecionaveis.
- Leitura automatica do periodo.
- Tabela de detalhamento por periodo.
- Relatorio interativo por origem.

Funcionalidades implementadas:

- Filtro por periodo sincronizado com o filtro global.
- Filtro por regiao e loja aplicado aos dados de vendas.
- Busca por loja, regiao ou canal no relatorio por origem.
- Calculo de vendas totais, margem, ticket medio e conversao.
- Indicacao de metricas pendentes quando filtros mudam.
- Resumo da origem lider, total filtrado e margem media.

Requisitos atendidos:

- RF01: selecao de periodo.
- RF02: graficos e relatorios interativos.
- RF03: calculo automatico de metricas.

### 4. Estoque e Reposicao

Modulo acessado pelo perfil `Gestor de Estoque e Reposicao`.

Conteudos:

- Tabela de estoque atual.
- Alternancia entre visao por produto e visao consolidada por loja.
- Previsao de demanda.
- Painel de controle de estoque.
- Configuracoes de automacao.

Funcionalidades implementadas:

- Visualizacao de produto, loja, estoque, demanda prevista e status.
- Visao consolidada por loja com total de produtos, estoque, demanda e risco.
- Geracao simulada de pedido de reposicao.
- Sugestao de reposicao baseada em itens criticos ou em atencao.
- Insights de sazonalidade, tendencias, lote economico de compra e ciclo de vida.
- Toggles para reposicao automatica e envio de alertas por e-mail.

Requisitos atendidos:

- RF04: nivel de estoque atual.
- RF05: previsao de reposicao.
- RF06: alertas e acoes automaticas simuladas.

### 5. Segmentacao de Clientes

Modulo acessado pelo perfil `Especialista em CRM`.

Conteudos:

- Segmentos de clientes.
- Criterios de segmentacao.
- Cards por segmento.
- Perfil detalhado do segmento selecionado.
- Grafico de comportamento e preferencias.

Segmentos implementados:

- Clientes frequentes.
- Clientes de alto valor.
- Clientes em risco.
- Novos clientes.

Criterios disponiveis:

- Historico de compras.
- Dados demograficos.
- Valor do cliente.
- Risco de churn.

Funcionalidades implementadas:

- Segmentacao por criterio.
- Selecao direta de segmento via card.
- Exibicao de comportamento, produtos preferidos, canal indicado e acao recomendada.
- Resumo de frequencia media, preferencia digital e valor medio.

Requisitos atendidos:

- RF07: segmentacao por criterios.
- RF08: perfis detalhados.
- RF09: base para campanhas direcionadas.

### 6. Campanhas de Marketing

Modulo acessado pelo perfil `Especialista em CRM`.

Conteudos:

- Formulario de criacao de campanha direcionada.
- Lista de campanhas planejadas.

Campos implementados:

- Segmento.
- Canal.
- Objetivo.
- Mensagem.

Funcionalidades implementadas:

- Criacao simulada de campanha.
- Insercao da campanha no topo da lista.
- Simulacao de resultado da campanha.
- Atualizacao de conversao e receita simulada.

Requisitos relacionados:

- RF09: integracao/acionamento de campanhas de marketing, representada no prototipo como criacao e simulacao de campanhas.

### 7. Relatorios de Margem

Modulo acessado pelo perfil `Analista de Margem e Lucro`.

Conteudos:

- KPIs de margem media, receita analisada, produtos de alta margem e baixo desempenho.
- Dashboard de margem de lucro.
- Grafico de margem por categoria, meta minima e receita relacionada.
- Selecao interativa de categoria por cards ou pelo grafico.
- Diagnostico de lucratividade.
- Analises comparativas.
- Tabela de desempenho do produto.

Funcionalidades implementadas:

- Calculo de margem ponderada pela receita analisada.
- Identificacao da categoria mais lucrativa e da categoria em atencao.
- Atualizacao dos cards do dashboard, diagnostico e analises comparativas conforme a categoria selecionada.
- Sugestoes sobre alteracoes de preco, estrategias de venda e comparacao antes/depois por categoria.
- Tabela com produto, categoria, venda, custo, margem, diagnostico e acao sugerida.
- Botao de exportacao com tela de pre-visualizacao do PDF e opcao de imprimir/salvar pelo navegador.

Requisitos atendidos:

- RF10: calculo de margem por produto e categoria.
- RF11: relatorios de potencial de lucro e melhoria.
- RF12: analises comparativas ao longo do tempo e por estrategia.

## Filtros Globais

Os filtros globais ficam na barra superior da aplicacao autenticada.

Filtros implementados:

- Periodo: diario, semanal, mensal, trimestral e anual.
- Regiao: todas, Nordeste, Sudeste e Sul.
- Loja: todas, Centro, Norte e Online.

Impactos implementados:

- Atualizam KPIs do dashboard.
- Atualizam dados e tabelas de vendas.
- Filtram estoque por regiao e loja e recalculam demanda prevista conforme periodo.
- Ajustam totais de clientes, comportamento e previsoes de campanhas para o recorte selecionado.
- Recalculam receita, custo, lucro estimado e margem do modulo de relatorios.
- Atualizam a pre-visualizacao do PDF quando ela estiver aberta.
- Sincronizam atalhos de periodo no modulo de vendas.
- Redesenham os graficos em canvas.

## Dados Simulados no JavaScript

O arquivo `app.js` concentra os dados do prototipo em estruturas estaticas:

| Estrutura | Conteudo |
| --- | --- |
| `roleProfiles` | Perfis, descricoes, telas permitidas e tela padrao. |
| `pageTitles` | Titulos exibidos conforme a tela ativa. |
| `salesRows` | Vendas por origem, regiao, canal, valor, margem e conversao. |
| `stockRows` | Produto, loja, estoque atual, demanda prevista e status. |
| `productRows` | Produto, categoria, venda, custo, margem, diagnostico e acao sugerida. |
| `marginCategories` | Margem, receita e meta por categoria. |
| `segments` | Segmentos de clientes, perfil, canal, produtos e acao recomendada. |
| `alerts` | Alertas de estoque, margem e relatorio. |
| `periodData` e `periodMeta` | Series temporais de vendas e metas por periodo. |
| `state.campaigns` | Campanhas planejadas e resultados simulados. |
| `state.restockOrders` | Pedidos de reposicao gerados durante a sessao. |

## Principais Funcoes do App

| Funcao | Responsabilidade |
| --- | --- |
| `login()` | Autentica o perfil simulado e inicia o fluxo do cargo. |
| `logout()` | Encerra a sessao e volta para a tela de login. |
| `applyAccessProfile()` | Atualiza perfil ativo e menu permitido. |
| `canAccess()` | Verifica se o usuario pode abrir uma tela. |
| `navigate()` | Troca a tela ativa e valida permissao. |
| `drawAllCharts()` | Redesenha todos os graficos. |
| `renderSales()` | Aplica filtros e renderiza vendas. |
| `calculateMetrics()` | Calcula metricas comerciais selecionadas. |
| `renderStock()` | Renderiza estoque, reposicao e previsao. |
| `renderSegments()` e `renderProfile()` | Montam segmentacao e detalhe de perfil. |
| `renderCampaigns()` | Atualiza lista de campanhas. |
| `renderProducts()` e `renderMarginDashboard()` | Montam analise de margem e produtos. |
| `bindEvents()` | Conecta formularios, botoes, filtros e interacoes. |

## Menu Atual

O HTML possui os itens:

1. Dashboard
2. Vendas
3. Estoque
4. Clientes
5. Campanhas
6. Relatorios

No uso real do prototipo, o JavaScript esconde os itens nao permitidos para o cargo autenticado.

## Padrao Visual Atual

- Login em tela cheia com painel lateral visual.
- Menu lateral fixo em desktop.
- Barra superior fixa com filtros globais.
- Paineis e cards com borda, sombra leve e raio de 8px.
- Status por cor:
  - Verde: situacao positiva ou normal.
  - Amarelo: atencao ou oportunidade de melhoria.
  - Vermelho: risco, estoque critico ou baixo desempenho.
  - Azul: navegacao e indicadores principais.
- Graficos desenhados diretamente em `canvas`.
- Layout responsivo com quebra para uma coluna em telas menores.

## Matriz de Rastreabilidade Atualizada

| Requisito | Implementacao atual |
| --- | --- |
| RF01 | Selecao de periodo nos filtros globais e no modulo de vendas. |
| RF02 | Graficos de vendas, margem, origem, estoque e comportamento de clientes; tabelas filtraveis. |
| RF03 | Calculo de vendas totais, margem, ticket medio e conversao. |
| RF04 | Estoque atual por produto e consolidado por loja. |
| RF05 | Previsao de demanda, lote economico, ciclo de vida e sugestoes de reposicao. |
| RF06 | Alertas, status critico/atencao, reposicao simulada e toggles de automacao. |
| RF07 | Segmentacao por historico, demografia, valor e risco. |
| RF08 | Perfil detalhado do segmento selecionado. |
| RF09 | Criacao e simulacao de campanhas direcionadas. |
| RF10 | Margem por produto e categoria. |
| RF11 | Diagnostico de margem, oportunidades e exportacao simulada de relatorio. |
| RF12 | Analises comparativas de preco, estrategia e antes/depois. |

## Limitacoes do Prototipo Atual

- Nao ha autenticacao real; login, senha e cargo sao simulados no front-end.
- Nao ha backend, banco de dados ou persistencia local.
- Campanhas, exportacao de relatorio, envio de e-mail e reposicao automatica sao simulacoes.
- Os dados sao fixos em `app.js`.
- A tela de dashboard existe, mas nao esta liberada para os perfis atuais.
- Os graficos usam canvas customizado, sem biblioteca externa de BI.

## Proximos Passos Recomendados

1. Criar perfil de Gestor Geral para liberar o Dashboard consolidado.
2. Persistir campanhas e pedidos de reposicao em armazenamento local ou backend.
3. Substituir dados fixos por API ou arquivos importados.
4. Implementar exportacao real de relatorios.
5. Adicionar validacao real de usuario e permissoes.
6. Conectar alertas de estoque a regras configuraveis.
7. Criar testes para navegacao, filtros, calculos e controle de acesso.
