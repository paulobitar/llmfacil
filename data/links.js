// ==========================================================================
// LISTA DE LINKS ÚTEIS DO PORTAL (LIVROS, FERRAMENTAS E GUIAS)
// Arquivo: data/links.js
// ==========================================================================
//
// COMO ATUALIZAR ESTA SEÇÃO (PASSO A PASSO SIMPLES):
// 1. Para ADICIONAR um novo link, copie o modelo abaixo e cole dentro da lista
//    `items: [ ... ]` (separando cada bloco com uma vírgula `,`):
//
//    {
//      id: "identificador-unico",
//      category: "livros", // Opções: "livros", "ferramentas" ou "guias"
//      title: "Nome do livro, ferramenta ou guia",
//      source: "Autor(es), instituição ou desenvolvedor",
//      url: "https://endereco-do-link.com.br",
//      linkLabel: "Acessar página oficial", // Texto do botão
//      description: "Explicação curta sobre o que é e como ajuda no estudo ou no trabalho.",
//      caution: "Dica prática ou cuidado ao usar (opcional — pode deixar vazio \"\").",
//      relatedWordId: "rag" // ID opcional de um verbete das 100 palavras (ex.: "rag", "llm", "lgpd")
//    },
//
// 2. Para EDITAR um item existente, basta alterar o texto entre aspas ("...").
// 3. Para REMOVER um item, apague o bloco `{ ... },` correspondente.
//    Dica: Você também pode usar o "Gerador de código para novo link" no final
//    da seção "Links úteis" na própria página para gerar o bloco pronto!
// ==========================================================================

window.USEFUL_LINKS_DATA = {
  categories: [
    { id: "all", label: "Todos os itens" },
    { id: "livros", label: "Livros e leituras" },
    { id: "ferramentas", label: "Ferramentas de IA" },
    { id: "guias", label: "Guias e legislação" }
  ],

  items: [
    // ----------------------------------------------------------------------
    // 1. LIVROS E LEITURAS FUNDAMENTAIS
    // ----------------------------------------------------------------------
    {
      id: "livro-o-que-a-maquina-nao-te-conta",
      category: "livros",
      title: "O Que a Máquina Não Te Conta: 100 palavras para usar IA sem ser enganado por ela",
      source: "Annelise Torres da Costa, César da Cruz Nogueira, Luiz Fernando Rodrigues e Paulo Eduardo Charone Bitar Júnior",
      url: "#consultar-palavras",
      linkLabel: "Explorar as 100 palavras no portal",
      description: "Obra de referência que dá origem a este portal, organizada em um ensaio introdutório sobre como os modelos de linguagem funcionam e um dicionário comentado de 100 conceitos organizados em 9 campos temáticos.",
      caution: "Para atualizar este botão com o link de compra ou download da edição impressa/digital, basta trocar o campo 'url' em data/links.js.",
      relatedWordId: "inteligencia-artificial"
    },
    {
      id: "artigo-attention-is-all-you-need",
      category: "livros",
      title: "Attention Is All You Need (Artigo original do Transformer, 2017)",
      source: "Ashish Vaswani et al. (arXiv / NeurIPS 2017)",
      url: "https://arxiv.org/abs/1706.03762",
      linkLabel: "Consultar artigo (em inglês)",
      description: "Trabalho seminal que apresentou a arquitetura Transformer e o mecanismo de atenção, permitindo que modelos de linguagem relacionem palavras distantes no contexto em paralelo.",
      caution: "Leitura técnica em inglês; para uma explicação acessível em português, veja o experimento 'Como o contexto influencia a resposta?' neste portal.",
      relatedWordId: "transformer"
    },
    {
      id: "artigo-turing-1950",
      category: "livros",
      title: "Computing Machinery and Intelligence (Alan Turing, 1950)",
      source: "Alan M. Turing — Revista Mind (Oxford Academic)",
      url: "https://academic.oup.com/mind/article/LIX/236/433/986238",
      linkLabel: "Consultar publicação histórica",
      description: "Ensaio clássico que inaugurou o debate moderno sobre inteligência artificial ao propor o 'Jogo da Imitação' (conhecido como Teste de Turing).",
      caution: "Como discutido no livro, passar pela aparência de conversa humana mede capacidade de imitação linguística, e não consciência ou compreensão real.",
      relatedWordId: "teste-de-turing"
    },
    {
      id: "artigo-instructgpt-rlhf",
      category: "livros",
      title: "Training language models to follow instructions with human feedback (2022)",
      source: "Long Ouyang et al. (arXiv / NeurIPS 2022)",
      url: "https://arxiv.org/abs/2203.02155",
      linkLabel: "Consultar artigo (em inglês)",
      description: "Documenta como o treinamento com feedback humano (RLHF) transformou completadores de texto brutos em assistentes que seguem instruções — e por que isso também pode gerar tendência à bajulação.",
      caution: "Ajuda a compreender a Armadilha 4 do livro: modelos ajustados para agradar avaliadores humanos tendem a concordar com o usuário mesmo quando ele está errado.",
      relatedWordId: "rlhf"
    },

    // ----------------------------------------------------------------------
    // 2. FERRAMENTAS DE IA PARA ESTUDO E TRABALHO
    // ----------------------------------------------------------------------
    {
      id: "ferramenta-notebooklm",
      category: "ferramentas",
      title: "NotebookLM — Estudo e consulta apoiados nos seus próprios documentos",
      source: "Google",
      url: "https://notebooklm.google.com/",
      linkLabel: "Acessar NotebookLM",
      description: "Exemplo prático de arquitetura RAG (Geração Aumentada por Recuperação): você envia seus PDFs, normas ou textos de estudo, e a ferramenta responde com base nessas fontes indicando os trechos consultados.",
      caution: "Reduz invenções por trabalhar ancorado nos arquivos enviados, mas ainda exige conferir os trechos citados e evitar o envio de documentos sigilosos em contas sem contrato institucional.",
      relatedWordId: "rag"
    },
    {
      id: "ferramenta-ollama-local",
      category: "ferramentas",
      title: "Ollama — Execução de modelos de pesos abertos no próprio computador",
      source: "Ollama (Código e pesos abertos: Llama, Mistral, Gemma, Qwen)",
      url: "https://ollama.com/",
      linkLabel: "Acessar página do Ollama",
      description: "Permite baixar e executar modelos de linguagem diretamente na sua máquina local, sem enviar o texto digitado para servidores na nuvem.",
      caution: "Excelente para privacidade (processamento local), mas exige computador com boa memória/GPU e os modelos menores podem errar mais em tarefas complexas.",
      relatedWordId: "modelo-aberto"
    },
    {
      id: "ferramenta-gemini",
      category: "ferramentas",
      title: "Google Gemini — Assistente conversacional multimodal",
      source: "Google",
      url: "https://gemini.google.com/",
      linkLabel: "Acessar Gemini",
      description: "Assistente baseado em grande modelo de linguagem (LLM) para redação de rascunhos, síntese de textos, análise de arquivos e interação com imagens e áudio.",
      caution: "Diferencie sempre a conta pessoal gratuita de um ambiente institucional contratado: em contas pessoais, não insira dados pessoais ou informações protegidas por sigilo.",
      relatedWordId: "llm"
    },
    {
      id: "ferramenta-claude",
      category: "ferramentas",
      title: "Claude — Assistente conversacional para leitura e escrita longa",
      source: "Anthropic",
      url: "https://claude.ai/",
      linkLabel: "Acessar Claude",
      description: "Modelo de linguagem com ampla janela de contexto, muito utilizado para revisão crítica de textos, estruturação de documentos e apoio a programação.",
      caution: "Mesmo com janela de contexto grande, trate o resultado como rascunho e confira todas as referências, datas e citações na fonte original.",
      relatedWordId: "janela-de-contexto"
    },
    {
      id: "ferramenta-chatgpt",
      category: "ferramentas",
      title: "ChatGPT — Assistente conversacional de uso geral",
      source: "OpenAI",
      url: "https://chatgpt.com/",
      linkLabel: "Acessar ChatGPT",
      description: "Um dos assistentes conversacionais que popularizaram a IA generativa, útil para estruturar ideias, revisar textos, traduzir e explorar exemplos.",
      caution: "Verifique nas configurações da sua conta se o histórico está habilitado para treinamento futuro da empresa e utilize a ferramenta 'Ocultar dados pessoais' deste portal antes de colar textos sensíveis.",
      relatedWordId: "ia-generativa"
    },

    // ----------------------------------------------------------------------
    // 3. GUIAS, LEGISLAÇÃO E BOAS PRÁTICAS
    // ----------------------------------------------------------------------
    {
      id: "guia-lgpd-planalto",
      category: "guias",
      title: "Lei Geral de Proteção de Dados Pessoais — LGPD (Lei nº 13.709/2018)",
      source: "Presidência da República / Portal da Legislação",
      url: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm",
      linkLabel: "Consultar texto oficial da lei",
      description: "Texto integral e atualizado da legislação brasileira que regula o tratamento de dados pessoais e dados pessoais sensíveis, inclusive em meios digitais.",
      caution: "Incluir dados identificáveis de terceiros em plataformas externas sem base legal ou contrato adequado pode configurar violação de deveres de proteção de dados.",
      relatedWordId: "lgpd"
    },
    {
      id: "guia-anpd",
      category: "guias",
      title: "Guias Orientativos da Autoridade Nacional de Proteção de Dados (ANPD)",
      source: "Governo Federal / ANPD",
      url: "https://www.gov.br/anpd/pt-br/assuntos/guias-orientativos",
      linkLabel: "Consultar guias da ANPD",
      description: "Publicações oficiais em linguagem acessível sobre segurança da informação, bases legais, prevenção de incidentes e governança de dados pessoais no Brasil.",
      caution: "Recomendado para equipes e profissionais que precisam definir regras internas de uso seguro de ferramentas digitais.",
      relatedWordId: "dados-pessoais"
    },
    {
      id: "guia-unesco-etica-ia",
      category: "guias",
      title: "Recomendação sobre a Ética da Inteligência Artificial",
      source: "UNESCO",
      url: "https://www.unesco.org/pt/artificial-intelligence/recommendation-ethics",
      linkLabel: "Consultar documento na UNESCO",
      description: "Primeiro instrumento normativo global sobre ética em IA, destacando princípios de transparência, explicabilidade, responsabilidade e supervisão humana.",
      caution: "Reforça o princípio central discutido no livro: sistemas automatizados podem apoiar análises, mas a decisão e a responsabilidade final devem permanecer humanas.",
      relatedWordId: "humano-no-circuito"
    }
  ]
};
