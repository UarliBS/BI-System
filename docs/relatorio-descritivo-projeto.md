# Relatorio Descritivo do Projeto BI Retail

## 1. Identificacao do Projeto

**Nome do projeto:** BI Retail - Prototipo PEI  
**Tipo de sistema:** Sistema de Business Intelligence para varejo  
**Tecnologias utilizadas:** HTML, CSS e JavaScript puro  
**Formato do prototipo:** Aplicacao front-end estatica, executada diretamente pelo arquivo `index.html`

## 2. Apresentacao

O projeto BI Retail consiste em um prototipo de sistema de Business Intelligence voltado para uma empresa de varejo. A proposta do sistema e centralizar informacoes estrategicas e operacionais sobre vendas, estoque, reposicao, clientes, campanhas de marketing, margem de lucro e desempenho dos produtos.

O prototipo foi desenvolvido como uma interface navegavel, com dados simulados, graficos, tabelas, filtros e controle de acesso por cargo. Dessa forma, cada funcionario visualiza apenas os modulos relacionados as suas atribuicoes dentro da empresa.

## 3. Objetivo Geral

Desenvolver um prototipo de sistema de BI capaz de apoiar a tomada de decisao em uma empresa de varejo, apresentando indicadores, relatorios e analises organizadas por area de negocio.

## 4. Objetivos Especificos

- Permitir o acesso ao sistema conforme o cargo do funcionario.
- Apresentar dados comerciais por periodo, regiao, loja e canal.
- Calcular metricas como vendas totais, margem, ticket medio e conversao.
- Monitorar estoque atual, demanda prevista e riscos de ruptura.
- Apoiar a segmentacao de clientes e a criacao de campanhas direcionadas.
- Avaliar margem de lucro, custo, receita e desempenho dos produtos.
- Demonstrar relatorios e diagnosticos que auxiliem decisoes gerenciais.

## 5. Escopo do Sistema

O sistema contempla os seguintes modulos:

| Modulo | Finalidade |
| --- | --- |
| Login | Controlar o acesso simulado por cargo. |
| Vendas | Analisar vendas, metas, margem, ticket medio e conversao. |
| Estoque | Monitorar estoque, demanda prevista, reposicao e alertas. |
| Clientes | Segmentar clientes e exibir perfis detalhados. |
| Campanhas | Criar e simular campanhas direcionadas. |
| Relatorios de Margem | Avaliar margem, custo, lucro e desempenho de produtos. |

O Dashboard Geral existe no codigo como tela consolidada, mas atualmente nao esta liberado para os perfis de acesso configurados.

## 6. Perfis de Usuario

O prototipo possui quatro perfis principais:

| Perfil | Modulos liberados | Responsabilidade |
| --- | --- | --- |
| Analista de Vendas | Vendas | Acompanhar resultados comerciais e metricas de venda. |
| Gestor de Estoque e Reposicao | Estoque | Monitorar estoque, previsao de demanda e reposicao. |
| Especialista em CRM | Clientes e Campanhas | Segmentar clientes e planejar campanhas direcionadas. |
| Analista de Margem e Lucro | Relatorios de Margem | Avaliar lucratividade, custos e desempenho de produtos. |

## 7. Descricao das Funcionalidades

### 7.1 Login e Controle de Acesso

A tela inicial permite selecionar um cargo e entrar no sistema. O login e simulado no front-end e nao realiza autenticacao real com servidor. Apos o acesso, o sistema mostra somente os itens de menu permitidos para o perfil selecionado.

### 7.2 Analise de Vendas

O modulo de vendas apresenta graficos e tabelas para acompanhamento dos resultados comerciais. O usuario pode selecionar periodos diarios, semanais, mensais, trimestrais ou anuais, alem de aplicar filtros por regiao e loja.

Os filtros globais de periodo, regiao e loja sao aplicados em todos os perfis do prototipo. Eles afetam vendas, estoque, clientes, campanhas, relatorios de margem e a pre-visualizacao do PDF exportado.

As metricas calculadas incluem:

- Vendas totais.
- Margem media.
- Ticket medio.
- Taxa de conversao.

O modulo tambem possui relatorio por origem, permitindo analisar lojas, regioes e canais de venda.

### 7.3 Estoque e Reposicao

O modulo de estoque permite visualizar produtos, lojas, estoque atual, demanda prevista e status de risco. Os produtos podem aparecer como normais, em atencao ou criticos.

O sistema tambem apresenta:

- Visao por produto.
- Visao consolidada por loja.
- Geracao simulada de pedido de reposicao.
- Previsao de demanda.
- Indicadores de sazonalidade, tendencias, lote economico e ciclo de vida.
- Configuracoes simuladas de reposicao automatica e alertas por e-mail.

### 7.4 Segmentacao de Clientes

O modulo de clientes organiza consumidores em segmentos estrategicos. Os criterios de segmentacao incluem historico de compras, dados demograficos, valor do cliente e risco de churn.

Segmentos implementados:

- Clientes frequentes.
- Clientes de alto valor.
- Clientes em risco.
- Novos clientes.

Cada segmento possui perfil detalhado, produtos preferidos, canal indicado e acao recomendada.

### 7.5 Campanhas de Marketing

O modulo de campanhas permite criar campanhas direcionadas com segmento, canal, objetivo e mensagem. As campanhas cadastradas aparecem em uma lista de planejamento e podem ter resultado simulado.

Essa funcionalidade representa uma integracao conceitual com a area de marketing, permitindo transformar a analise de clientes em acoes de relacionamento.

### 7.6 Relatorios de Margem e Desempenho do Produto

O modulo de relatorios apresenta a analise de margem de lucro e desempenho dos produtos. Sao exibidos indicadores como margem media, receita analisada, produtos de alta margem e produtos com baixo desempenho.

O dashboard de margem possui selecao interativa de categoria. Ao selecionar uma categoria nos cards ou no grafico, o sistema atualiza os indicadores superiores, o diagnostico e as analises comparativas, exibindo informacoes especificas sobre receita, custo, lucro estimado, risco e estrategia recomendada.

A tabela de desempenho do produto contempla:

- Produto.
- Categoria.
- Valor de venda.
- Custo do produto.
- Margem.
- Diagnostico.
- Acao sugerida.

Com esses dados, o usuario pode identificar produtos lucrativos, produtos com baixa margem e oportunidades de ajuste de preco, campanha ou reposicao.

Ao acionar a exportacao, o sistema abre uma tela de pre-visualizacao do relatorio em formato semelhante a uma pagina PDF. Essa pre-visualizacao apresenta filtros aplicados, categoria selecionada, KPIs financeiros, diagnostico executivo, analises comparativas e os produtos exportados. A partir dela, o usuario pode imprimir ou salvar o documento como PDF pelo navegador.

## 8. Estrutura Tecnica

O projeto esta organizado da seguinte forma:

```text
.
|-- index.html
|-- styles.css
|-- app.js
|-- README.md
|-- docs/
|   |-- organizacao-sistema-bi.md
|   |-- relatorio-descritivo-projeto.md
|   |-- PEI.pdf
|   `-- assets/
|       `-- Diagrama de Casos de Uso.png
`-- logs/
```

### 8.1 `index.html`

Define a estrutura da aplicacao, incluindo tela de login, menu lateral, filtros globais e secoes dos modulos.

### 8.2 `styles.css`

Define o visual do sistema, incluindo layout responsivo, cards, paineis, tabelas, status, botoes e tela de login.

### 8.3 `app.js`

Concentra as regras do prototipo, dados simulados, controle de acesso, navegacao, renderizacao de tabelas, graficos em canvas e eventos de interacao.

## 9. Dados Utilizados

Os dados do sistema sao simulados e definidos diretamente em `app.js`. Eles representam informacoes ficticias de vendas, estoque, produtos, margens, clientes, campanhas e alertas.

Essa estrategia permite demonstrar o funcionamento da interface sem necessidade de banco de dados ou servidor.

## 10. Requisitos Atendidos

| Requisito | Implementacao |
| --- | --- |
| RF01 | Selecao de periodo nos filtros e na analise de vendas. |
| RF02 | Graficos e relatorios interativos. |
| RF03 | Calculo de metricas comerciais. |
| RF04 | Visualizacao de estoque atual. |
| RF05 | Previsao de demanda e sugestao de reposicao. |
| RF06 | Alertas e configuracoes simuladas de automacao. |
| RF07 | Segmentacao de clientes por criterios. |
| RF08 | Perfil detalhado dos segmentos. |
| RF09 | Criacao e simulacao de campanhas. |
| RF10 | Analise de margem por produto e categoria. |
| RF11 | Relatorios de oportunidade, custo e lucro. |
| RF12 | Analises comparativas de preco e estrategia. |

## 11. Limitacoes

- O login e apenas simulado.
- Nao existe backend.
- Nao existe banco de dados.
- Os dados nao sao persistidos apos recarregar a pagina.
- As campanhas, exportacoes, reposicoes e alertas por e-mail sao simulados.
- Os graficos sao desenhados manualmente em canvas, sem biblioteca especializada.

## 12. Conclusao

O projeto BI Retail apresenta um prototipo funcional e navegavel de um sistema de Business Intelligence para varejo. Ele demonstra como diferentes areas da empresa podem acessar dados relevantes para suas atividades, respeitando perfis de usuario e regras de negocio.

Mesmo sem backend ou dados reais, o prototipo cumpre o objetivo de representar visualmente os principais recursos esperados de um sistema de BI: acompanhamento de vendas, gestao de estoque, segmentacao de clientes, planejamento de campanhas e analise de margem de lucro. A inclusao do custo do produto na tabela de desempenho fortalece a analise financeira e melhora a capacidade de avaliacao da lucratividade.
