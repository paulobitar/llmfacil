# O Que a Máquina Não Te Conta — Portal Interativo (`llmfacil.com.br`)

Portal complementar do livro **“O Que a Máquina Não Te Conta: 100 palavras para usar inteligência artificial sem ser enganado por ela”**, de **Annelise Torres da Costa**, **César da Cruz Nogueira**, **Luiz Fernando Rodrigues** e **Paulo Eduardo Charone Bitar Júnior**.

## Estrutura do Site

- `index.html` — Página principal com:
  1. **Entender a IA:** 4 experimentos didáticos interativos (*Por que a IA muda de resposta?*, *Como a IA divide seu texto?*, *Como o contexto influencia a resposta?* e *Como as fontes ajudam a conferir uma resposta?*).
  2. **Usar ferramentas:** 4 utilitários práticos (*Montar um pedido para a IA*, *Ocultar dados pessoais*, *Definir o que precisa ser conferido* e *Escolher uma abordagem de IA*).
  3. **Consultar palavras:** Glossário interativo com os 100 termos do livro, busca tolerante a acentos, filtros por campo temático e armadilha, e expansão acessível (*Ler mais*).
  4. **Mapa mental:** Grafo interativo de conceitos e trilhas de aprendizado.
  5. **As 7 armadilhas:** Guia rápido das sete maneiras de ser enganado pela IA.
  6. **Links úteis:** Seleção comentada de livros, ferramentas e guias/legislação.
- `mapa-mental.html` — Visualização em tela cheia do Mapa Mental (ideal para uso em sala de aula ou apresentações com passador de slides).
- `styles.css` — Folha de estilos responsiva com suporte a alto contraste, ajuste de escala tipográfica e redução de movimento.
- `app.js` — Lógica interativa 100% local (nenhum dado digitado é enviado a servidores externos).
- `data/words.js` — Base de dados dos 100 verbetes, 9 campos temáticos e 7 armadilhas do livro.
- `data/mindmap.js` — Base de dados e lógica do Mapa Mental interativo.
- `data/links.js` — Lista de livros, ferramentas e guias da seção **Links úteis** (com instruções simples de atualização no topo do arquivo).

## Como Atualizar a Seção de Links Úteis

1. Abra a seção **Links úteis** no site e expanda o quadro **“Como atualizar esta seção (Gerador de bloco para `data/links.js`)”** no final da seção.
2. Preencha os campos do novo livro, ferramenta ou guia e clique em **“Copiar bloco para `data/links.js`”**.
3. Abra o arquivo `data/links.js`, cole o bloco dentro da lista `items: [ ... ]` e salve.
