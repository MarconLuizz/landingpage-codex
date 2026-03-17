# Análise da estrutura geral da Landing Page

## Objetivo principal da página
A landing page deve conduzir o usuário por um fluxo claro de descoberta de valor, prova social, entendimento da solução e conversão para um plano.

Fluxo recomendado:
1. **Navegação rápida** (Navbar)
2. **Proposta de valor + interação** (Hero)
3. **Credibilidade** (Apoiadores)
4. **Detalhamento de benefícios** (Solução)
5. **Remoção de objeções** (FAQ)
6. **Conversão final** (CTA)
7. **Informações institucionais** (Footer)
8. **Decisão comercial detalhada** (Página de Planos, rota separada)

---

## 1) Navbar
### Estrutura sugerida
- **Logo** (link para `#inicio`)
- Links âncora:
  - Início (`#inicio`)
  - Apoiadores (`#apoiadores`)
  - Planos (`/planos` ou `#planos` com redirecionamento)
  - Solução (`#solucao`)

### Boas práticas
- Navbar fixa com destaque visual no item ativo.
- CTA discreto no canto direito: **“Começar agora”**.
- Em mobile: menu hambúrguer com fechamento automático ao clicar em item.

---

## 2) Hero
### Blocos essenciais
- **Título**: proposta de valor direta (resultado + público).
- **Subtítulo**: contexto de uso e diferenciais.
- **Chat interativo** (simulado ou funcional): reforça produto em ação.
- **Exemplos de consultas**: frases curtas clicáveis.
- **Exemplos pré-definidos**: cartões com casos de uso.

### Recomendação de UX
- Layout em duas colunas no desktop:
  - esquerda: título/subtítulo/CTAs
  - direita: mock do chat
- No mobile: empilhar conteúdo, mantendo chat logo após o subtítulo.

---

## 3) Apoiadores
### Estrutura sugerida
- Título curto: **“Apoiadores”** ou **“Quem apoia esta iniciativa”**.
- Grade horizontal de logos com altura padronizada.
- Efeito de tons de cinza para reduzir ruído visual e destaque no hover.

### Observações
- Garantir contraste e legibilidade dos logos em tema claro/escuro.
- Usar imagens otimizadas (`.svg` preferencialmente).

---

## 4) Solução
### Conteúdo
- **Título** (benefício macro da solução).
- **Subtítulo** (como entrega valor na prática).
- **5 benefícios** em lista com ícones.
- **GIF da ferramenta** ao lado para demonstração visual.
- Botões:
  - **Visualizar planos**
  - **Começar agora**

### Recomendação de composição
- Seção em duas colunas com alternância responsiva.
- Benefícios em bullets curtos (máximo 1 linha e meia por item).
- GIF com fallback estático para desempenho.

---

## 5) FAQ
### Estrutura
- **Título**: “Perguntas frequentes”.
- **Perguntas expansivas** (accordion):
  - uma aberta por vez;
  - animação suave;
  - ícone de expandir/retrair.

### Conteúdo recomendado
- Segurança de dados
- Tempo de implementação
- Integrações
- Limitações
- Suporte
- Cancelamento/upgrade de planos

---

## 6) CTA (seção final)
### Estrutura
- **Título** orientado à ação.
- **Botão principal** de conversão.

### Direção
- Deve repetir o principal ganho de valor em uma frase curta.
- Botão pode apontar para `/planos` ou onboarding inicial.

---

## 7) Footer
### Itens mínimos
- Nome da empresa/projeto
- Direitos autorais
- Links institucionais (Termos, Privacidade)
- Contato / redes sociais

### Organização
- Footer simples, baixo ruído, com boa hierarquia tipográfica.

---

## 8) Página de Planos (rota separada)
### Estrutura comercial
- **3 tipos de planos** (ex.: Básico, Profissional, Empresarial).
- Toggle **Mensal / Anual** com destaque de economia no anual.
- Tabela de comparação de features.
- CTA por plano: **Assinar** / **Falar com vendas**.

### Recomendação de decisão
- Destacar 1 plano recomendado visualmente.
- Transparência de limites (usuários, consultas, integrações).

---

## Arquitetura de informação sugerida
- `/` → landing principal com âncoras: `#inicio`, `#apoiadores`, `#solucao`, `#faq`, `#cta`
- `/planos` → página dedicada de precificação

### Componentes reutilizáveis
- `Navbar`
- `Hero`
- `Supporters`
- `Solution`
- `FaqAccordion`
- `FinalCta`
- `Footer`
- `PricingToggle` (na rota `/planos`)

---

## Critérios de qualidade para implementação
1. **Performance**: imagens otimizadas, lazy-load para GIF/logos.
2. **Responsividade**: breakpoints para mobile/tablet/desktop.
3. **Acessibilidade**: contraste, `alt` em logos, navegação por teclado.
4. **Conversão**: CTAs claros e repetidos em pontos estratégicos.
5. **Consistência visual**: tipografia, espaçamento e padrão de botões.

---

## Conclusão
A estrutura solicitada está bem alinhada a um funil clássico de landing page (atenção → confiança → valor → objeções → conversão). Para maximizar resultado, recomenda-se priorizar clareza da proposta no Hero, prova social forte em Apoiadores e página de Planos com comparação simples e CTA objetivo.
