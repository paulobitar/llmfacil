// ==========================================================================
// MAPA MENTAL PARA ESTUDO SOBRE INTELIGÊNCIA ARTIFICIAL
// Idealização e curadoria: César Nogueira · v13 · agosto de 2026
// Integrado ao sistema de design e acessibilidade do portal llmfacil.com.br
// ==========================================================================

(function () {
  "use strict";

  const TERMS = [
    {id:"genai",name:"IA generativa",en:"Generative AI",layer:"Fundamentos",c:"var(--mm-cyan)",x:50,y:48,
     def:"Classe de sistemas de IA capazes de produzir conteúdo novo, como texto, imagem, áudio, código ou vídeo, a partir de padrões aprendidos em dados.",
     kid:"É uma IA que cria coisas novas a partir do que aprendeu.",
     expert:"Família de modelos probabilísticos que sintetizam amostras plausíveis condicionadas por entradas, instruções ou contexto.",
     analogy:"Como um músico que estudou milhares de músicas e consegue compor uma nova peça no mesmo estilo.",
     example:"Criar minuta de texto, resumir documentos, gerar imagens, revisar código ou transformar dados em explicações.",
     challenge:"Explique IA generativa em uma frase, sem usar a palavra 'robô'.",
     risco:"O risco maior não é técnico: é entregar o senso crítico à máquina. Texto fluente parece confiável, mas fluência não é prova de verdade. Quem assina o documento continua responsável pelo conteúdo.",
     rel:["llm","prompt","diffusion","hallucination","ml"]},
    {id:"ml",name:"Machine Learning",en:"Machine Learning",layer:"Fundamentos",c:"var(--mm-cyan)",x:30,y:60,
     def:"Paradigma em que o sistema infere padrões a partir de dados, em vez de seguir regras escritas manualmente por um programador.",
     kid:"É a máquina aprendendo pelos exemplos, não por uma receita pronta.",
     expert:"Conjunto de métodos que ajustam parâmetros de um modelo minimizando uma função de perda sobre dados de treinamento.",
     analogy:"Como aprender a reconhecer rostos vendo milhares deles, sem alguém listar todas as regras de um rosto.",
     example:"Filtro de spam, recomendação de vídeos, previsão de risco de crédito.",
     challenge:"Qual a diferença entre programar uma regra e treinar um modelo?",
     rel:["genai","deep","parameter"]},
    {id:"deep",name:"Deep Learning",en:"Deep Learning",layer:"Fundamentos",c:"var(--mm-cyan)",x:24,y:72,
     def:"Ramo do aprendizado de máquina baseado em redes neurais com muitas camadas, capazes de aprender representações complexas.",
     kid:"São redes com várias camadas que aprendem coisas cada vez mais abstratas.",
     expert:"Redes neurais profundas que compõem transformações não lineares hierárquicas, aprendendo representações latentes por gradiente.",
     analogy:"Como enxergar primeiro traços, depois formas, depois objetos: cada camada abstrai a anterior.",
     example:"Reconhecimento de imagem, tradução automática, base técnica dos LLMs.",
     challenge:"Por que a rede neural não simula um cérebro biológico de fato?",
     rel:["ml","transformer","parameter"]},
    {id:"llm",name:"LLM",en:"Large Language Model",layer:"Modelos",c:"var(--mm-violet)",x:38,y:30,
     def:"Modelo de linguagem em larga escala treinado para prever e gerar sequências textuais, geralmente com bilhões de parâmetros.",
     kid:"É um sistema muito grande que aprendeu muitos padrões da linguagem.",
     expert:"Modelo autorregressivo ou correlato, treinado em corpora massivos para estimar distribuições condicionais de tokens.",
     analogy:"Como um leitor gigantesco que aprendeu padrões de escrita lendo uma biblioteca imensa.",
     example:"ChatGPT, Claude, Gemini e outros assistentes conversacionais baseados em linguagem.",
     challenge:"Diferencie LLM de IA generativa em uma frase.",
     risco:"Ele herda os desequilíbrios dos dados em que foi treinado e tropeça em raciocínios de muitas etapas. Em trabalho sério, trate a resposta como rascunho a conferir, não como conclusão.",
     rel:["token","transformer","context","parameter"]},
    {id:"token",name:"Token",en:"Token",layer:"Modelos",c:"var(--mm-green)",x:24,y:42,
     def:"Unidade de texto processada pelo modelo. Pode ser uma palavra, parte de palavra, pontuação ou espaço.",
     kid:"É um pedacinho de texto que a IA consegue ler.",
     expert:"Representação discreta produzida por tokenizadores, frequentemente baseados em BPE, WordPiece ou unigram.",
     analogy:"Como peças de LEGO que formam frases.",
     example:"A palavra 'generativa' pode ser dividida em partes menores, dependendo do tokenizador.",
     challenge:"Por que português pode consumir mais tokens que inglês em alguns casos?",
     risco:"Como cada modelo tem um limite de tokens, um documento longo pode ser cortado silenciosamente. O trecho decisivo pode simplesmente ficar de fora sem aviso. Ao processar dossiês inteiros, confira se coube tudo.",
     rel:["llm","context","embedding"]},
    {id:"prompt",name:"Prompt",en:"Prompt",layer:"Uso",c:"var(--mm-gold)",x:66,y:32,
     def:"Instrução fornecida ao modelo para orientar a resposta esperada.",
     kid:"É o pedido que você faz para a IA.",
     expert:"Entrada textual ou multimodal que condiciona a inferência e orienta a distribuição de saída.",
     analogy:"Como a pergunta de uma prova: quanto mais clara, melhor a resposta tende a ser.",
     example:"'Explique RAG para servidores públicos, com exemplo e linguagem formal.'",
     challenge:"Reescreva um pedido vago em um prompt mais claro.",
     risco:"Um pedido vago produz uma resposta genérica com cara de completa: o modelo preenche as lacunas com suposições próprias e não avisa quais foram. Se o prompt não disser o contexto, o formato e o limite, quem decide isso é a máquina — e ela decide em silêncio.",
     rel:["prompteng","context","temperature"]},
    {id:"prompteng",name:"Engenharia de prompt",en:"Prompt engineering",layer:"Uso",c:"var(--mm-gold)",x:78,y:46,
     def:"Prática de formular, testar e refinar instruções para obter respostas mais úteis, seguras e verificáveis.",
     kid:"É aprender a pedir melhor para a IA responder melhor.",
     expert:"Conjunto de técnicas de condicionamento de entrada, decomposição de tarefas, restrições e critérios avaliativos.",
     analogy:"Como orientar um estagiário: papel, contexto, tarefa, formato e critérios reduzem erro.",
     example:"Definir papel, público, objetivo, formato, fontes, limites e critérios de qualidade.",
     challenge:"Liste cinco componentes de um bom prompt.",
     rel:["prompt","cot","guardrails"]},
    {id:"transformer",name:"Transformer",en:"Transformer",layer:"Arquitetura",c:"var(--mm-cyan)",x:42,y:62,
     def:"Arquitetura neural baseada em mecanismos de atenção, fundamental para os grandes modelos de linguagem modernos.",
     kid:"É uma estrutura que ajuda a IA a entender quais palavras importam mais.",
     expert:"Arquitetura proposta em 2017 que substituiu recorrência por atenção paralelizável em larga escala.",
     analogy:"Como uma mesa de análise em que todas as palavras podem conversar entre si ao mesmo tempo.",
     example:"Base técnica de muitos LLMs contemporâneos.",
     challenge:"Qual é a relação entre Transformer e atenção?",
     rel:["attention","llm","parameter","deep"]},
    {id:"attention",name:"Atenção",en:"Attention",layer:"Arquitetura",c:"var(--mm-rose)",x:55,y:70,
     def:"Mecanismo que permite ao modelo atribuir pesos diferentes às partes do contexto ao gerar cada saída.",
     kid:"É a IA olhando mais para algumas palavras do que para outras.",
     expert:"Operação que calcula relações entre queries, keys e values para ponderar informação contextual.",
     analogy:"Como grifar trechos mais importantes antes de responder uma questão.",
     example:"Na frase 'fui ao banco sacar dinheiro', atenção liga 'banco' a 'sacar' e 'dinheiro'.",
     challenge:"Dê um exemplo de palavra ambígua resolvida pelo contexto.",
     rel:["transformer","context","embedding"]},
    {id:"embedding",name:"Embedding",en:"Embedding",layer:"Arquitetura",c:"var(--mm-green)",x:31,y:76,
     def:"Representação numérica de textos ou objetos em um espaço vetorial, preservando relações de similaridade.",
     kid:"É transformar palavras em coordenadas para comparar significados.",
     expert:"Mapeamento denso de entidades para vetores em espaço latente de alta dimensão.",
     analogy:"Como colocar palavras em um mapa: ideias próximas ficam perto.",
     example:"'Juiz' pode ficar mais próximo de 'tribunal' do que de 'banana'.",
     challenge:"Por que embeddings ajudam em busca semântica?",
     risco:"A proximidade vetorial mede coocorrência nos dados, não sentido verdadeiro. Termos que aparecem juntos por acaso podem ser agrupados como se fossem parecidos, criando correlações falsas em uma análise.",
     rel:["token","rag","attention"]},
    {id:"rag",name:"RAG",en:"Retrieval-Augmented Generation",layer:"Aplicações",c:"var(--mm-cyan)",x:66,y:76,
     def:"Arquitetura que combina recuperação de documentos com geração de resposta por modelo de linguagem.",
     kid:"A IA procura documentos antes de responder.",
     expert:"Pipeline que indexa, recupera e injeta trechos relevantes na janela de contexto para grounding factual.",
     analogy:"Como responder uma pergunta consultando primeiro uma biblioteca confiável.",
     example:"Um chatbot institucional que responde com base em manuais, normas e documentos internos.",
     challenge:"Explique como RAG reduz alucinações.",
     risco:"RAG só é tão bom quanto a busca que o alimenta. Se o documento crítico não for recuperado, a resposta vai omitir o fato mais importante — e parecerá completa mesmo assim. A qualidade do acervo e da busca decide tudo.",
     rel:["embedding","context","hallucination","cutoff"]},
    {id:"context",name:"Janela de contexto",en:"Context window",layer:"Modelos",c:"var(--mm-violet)",x:52,y:22,
     def:"Quantidade máxima de tokens que o modelo consegue considerar de uma vez durante a interação.",
     kid:"É a memória de trabalho da IA naquela conversa.",
     expert:"Limite operacional de sequência disponível para inferência, incluindo instruções, histórico e documentos anexados.",
     analogy:"Como a mesa de trabalho: só o que cabe nela está visível.",
     example:"Conversas muito longas podem fazer o início sair do contexto ativo.",
     challenge:"Por que uma janela maior não elimina todos os erros?",
     risco:"O que passa do limite da janela é esquecido na hora, sem alarme. Em conversas longas, o começo pode ter saído do contexto sem você perceber, e o modelo responde como se nunca tivesse existido.",
     rel:["token","rag","cutoff","prompt"]},
    {id:"temperature",name:"Temperatura",en:"Temperature",layer:"Uso",c:"var(--mm-orange)",x:83,y:62,
     def:"Parâmetro que controla o grau de aleatoriedade na geração da resposta.",
     kid:"É o botão de criatividade da IA.",
     expert:"Escalonamento da distribuição de logits antes da amostragem, alterando entropia e diversidade.",
     analogy:"Baixa temperatura é receita rígida; alta temperatura é improviso culinário.",
     example:"Use baixa temperatura para precisão; mais alta para brainstorming.",
     challenge:"Quando temperatura alta pode ser prejudicial?",
     risco:"O mesmo pedido pode gerar respostas diferentes a cada execução. Uma resposta boa numa rodada não garante a mesma qualidade na seguinte; em trabalho institucional, nunca trate uma única geração como definitiva, nem estranhe que um colega obtenha resultado diverso com o prompt idêntico.",
     rel:["prompt","hallucination","llm"]},
    {id:"hallucination",name:"Alucinação",en:"Hallucination",layer:"Riscos",c:"var(--mm-rose)",x:78,y:24,
     def:"Resposta fluente, mas falsa, inventada ou sem base verificável.",
     kid:"É quando a IA inventa algo parecendo ter certeza.",
     expert:"Geração não fundamentada, decorrente da otimização para plausibilidade textual e não para verdade factual.",
     analogy:"Como alguém que responde com segurança, mas sem conferir os fatos.",
     example:"Inventar autor, data, jurisprudência ou referência bibliográfica inexistente.",
     challenge:"Crie uma regra para detectar possível alucinação.",
     risco:"É a falha mais traiçoeira: a invenção vem com aparência impecável e tom de certeza. Uma citação jurídica ou um dado financeiro inexistente pode contaminar um relatório de decisão. Toda referência precisa ser conferida na fonte.",
     rel:["rag","guardrails","cutoff","temperature"]},
    {id:"guardrails",name:"Guardrails",en:"Guardrails",layer:"Riscos",c:"var(--mm-rose)",x:90,y:38,
     def:"Regras, filtros e limites desenhados para reduzir usos inadequados, respostas inseguras ou violações de política.",
     kid:"São cercas de segurança para a IA.",
     expert:"Camadas de controle, políticas, classificadores, validações e restrições aplicadas ao sistema.",
     analogy:"Como corrimãos e sinalizações em uma escada.",
     example:"Bloquear geração de dados sensíveis, instruções perigosas ou respostas fora do escopo.",
     challenge:"Dê um exemplo de guardrail em uso público.",
     risco:"Barreiras de segurança reduzem respostas nocivas, mas não as eliminam: podem ser contornadas por formulações engenhosas e também bloqueiam, por excesso de cautela, pedidos legítimos. Tratá-las como garantia — e não como mitigação — cria uma falsa sensação de segurança.",
     rel:["hallucination","prompteng"]},
    {id:"rlhf",name:"RLHF",en:"Reinforcement Learning from Human Feedback",layer:"Riscos",c:"var(--mm-gold)",x:48,y:88,
     def:"Técnica de alinhamento que usa preferências humanas para ajustar o comportamento do modelo.",
     kid:"Humanos escolhem respostas melhores, e a IA aprende com isso.",
     expert:"Treinamento de modelo de recompensa a partir de comparações humanas, seguido de otimização por reforço.",
     analogy:"Como um professor corrigindo redações e indicando quais respostas são melhores.",
     example:"Foi importante para transformar modelos de linguagem em assistentes conversacionais mais úteis.",
     challenge:"Qual é a diferença entre pré-treinamento e RLHF?",
     rel:["llm","guardrails","finetune"]},
    {id:"cutoff",name:"Data de corte",en:"Knowledge cutoff",layer:"Limitações",c:"var(--mm-orange)",x:20,y:26,
     def:"Limite temporal dos dados usados no treinamento de um modelo.",
     kid:"É a data até a qual a IA estudou.",
     expert:"Marco temporal aproximado do corpus de treinamento ou do estado interno de conhecimento do modelo.",
     analogy:"Como uma enciclopédia impressa: não contém eventos depois da edição.",
     example:"Perguntas sobre notícias, preços, leis e cargos atuais exigem verificação externa.",
     challenge:"Cite três temas que exigem busca atualizada.",
     risco:"O modelo não sabe o que aconteceu depois da data de corte, mas responde com a mesma segurança de sempre. Preço, lei, cargo, notícia: tudo que muda exige conferência externa antes de virar informação de trabalho.",
     rel:["rag","context","hallucination"]},
    {id:"parameter",name:"Parâmetro",en:"Parameter",layer:"Arquitetura",c:"var(--mm-violet)",x:18,y:60,
     def:"Valor numérico interno aprendido durante o treinamento do modelo.",
     kid:"É um ajuste interno que ajuda a IA a funcionar.",
     expert:"Peso ou viés otimizado por gradiente, armazenando regularidades estatísticas do treinamento.",
     analogy:"Como milhões ou bilhões de pequenos botões ajustados durante o aprendizado.",
     example:"Modelos grandes podem ter bilhões de parâmetros.",
     challenge:"Mais parâmetros sempre significam melhor resposta?",
     rel:["llm","transformer"]},
    {id:"diffusion",name:"Difusão",en:"Diffusion model",layer:"Aplicações",c:"var(--mm-green)",x:36,y:12,
     def:"Tipo de modelo generativo muito usado para imagens, que aprende a remover ruído progressivamente.",
     kid:"Ele começa com bagunça visual e vai formando uma imagem.",
     expert:"Modelo que aprende processos de denoising a partir de distribuições ruidosas até amostras plausíveis.",
     analogy:"Como revelar uma fotografia que surge aos poucos da névoa.",
     example:"Ferramentas de geração de imagens a partir de texto.",
     challenge:"Como difusão se diferencia de LLM?",
     rel:["genai","prompt","embedding"]},
    {id:"cot",name:"Cadeia de raciocínio",en:"Chain of thought",layer:"Uso",c:"var(--mm-cyan)",x:72,y:88,
     def:"Técnica de prompting que solicita decomposição passo a passo de um problema.",
     kid:"É pedir para a IA organizar os passos antes de concluir.",
     expert:"Estratégia de elicitação de raciocínio intermediário ou decomposição, útil em tarefas complexas.",
     analogy:"Como mostrar o cálculo em vez de apenas dar o resultado.",
     example:"'Resolva em etapas, explicando premissas e verificando inconsistências.'",
     challenge:"Quando pedir passos pode ajudar? Quando pode atrapalhar?",
     rel:["prompteng","prompt"]},
    {id:"finetune",name:"Ajuste fino",en:"Fine-tuning",layer:"Riscos",c:"var(--mm-gold)",x:40,y:80,
     def:"Etapa em que um modelo pré-treinado é reajustado com dados menores e específicos para uma tarefa ou formato.",
     kid:"É especializar um modelo que já sabe muito, num assunto ou estilo.",
     expert:"Continuação do treinamento sobre corpus supervisionado restrito, ajustando pesos para um domínio ou formato alvo.",
     analogy:"Como um generalista que faz uma residência para virar especialista.",
     example:"Ensinar o modelo o formato pergunta-resposta antes do alinhamento por feedback humano.",
     challenge:"Por que o pré-treinamento sozinho não produz um bom assistente?",
     rel:["rlhf","llm"]},
    {id:"multimodal",name:"Multimodalidade",en:"Multimodality",layer:"Aplicações",c:"var(--mm-green)",x:82,y:80,
     def:"Capacidade de processar e relacionar simultaneamente diferentes tipos de dado, como texto, imagem, áudio e vídeo.",
     kid:"É a IA entendendo texto, imagem e som ao mesmo tempo.",
     expert:"Modelos que projetam modalidades distintas em um espaço de representação comum para raciocínio conjunto.",
     analogy:"Como alguém que lê a legenda, vê a foto e ouve o áudio antes de responder.",
     example:"Descrever uma imagem, transcrever áudio, interpretar um gráfico anexado.",
     challenge:"Cite uma tarefa que só faz sentido com mais de uma modalidade.",
     rel:["genai","agent","embedding"]},
    {id:"agent",name:"Agentes",en:"AI agents",layer:"Aplicações",c:"var(--mm-green)",x:88,y:66,
     def:"Sistemas em que o modelo planeja, decide e usa ferramentas externas para executar tarefas de várias etapas com pouca intervenção humana.",
     kid:"É a IA que não só responde, mas age: busca, calcula, executa.",
     expert:"Arquitetura em que o LLM atua como controlador, orquestrando ferramentas, memória e laços de planejamento e execução.",
     analogy:"Como um assistente que não apenas sugere, mas marca a reunião e envia o e-mail.",
     example:"Pesquisar, redigir, revisar e salvar um documento sem passos manuais intermediários.",
     challenge:"Que risco novo surge quando a IA passa a agir, e não só a responder?",
     rel:["multimodal","prompteng","guardrails"]},
    {id:"sycophancy",name:"Servilismo",en:"Sycophancy",layer:"Riscos",c:"var(--mm-rose)",x:70,y:12,
     def:"Tendência do modelo a concordar com o usuário ou validar afirmações duvidosas para parecer agradável, mesmo quando estão erradas.",
     kid:"É a IA concordando só para agradar, mesmo quando você está errado.",
     expert:"Efeito colateral do alinhamento por preferência: concordância correlaciona com recompensa e é reforçada em detrimento da correção.",
     analogy:"Como um funcionário que puxa o saco em vez de apontar o erro do chefe.",
     example:"Confirmar uma tese furada apenas porque o usuário a defendeu com confiança.",
     challenge:"Por que servilismo pode ser mais perigoso que uma recusa direta?",
     rel:["rlhf","hallucination"]},
    {id:"bias",name:"Viés algorítmico",en:"Algorithmic bias",layer:"Riscos",c:"var(--mm-rose)",x:58,y:14,
     def:"Distorções sistemáticas nas respostas que refletem lacunas e desequilíbrios presentes nos dados de treinamento.",
     kid:"É a IA repetindo desigualdades que estavam nos dados.",
     expert:"Assimetrias herdadas do corpus, amplificadas por sub-representação de grupos, línguas e contextos culturais.",
     analogy:"Como um espelho que reflete melhor quem apareceu mais vezes diante dele.",
     example:"Menor qualidade em português ou apagamento de literatura do Sul Global.",
     challenge:"Como o viés se relaciona com a origem dos dados de treinamento?",
     rel:["hallucination","cutoff"]},
    {id:"ia",name:"Inteligência Artificial",en:"Artificial Intelligence",layer:"Fundamentos",c:"var(--mm-cyan)",x:50,y:50,
     def:"Campo da ciência da computação dedicado ao desenvolvimento de sistemas que executam tarefas que, se realizadas por humanos, demandariam alguma forma de inteligência: reconhecimento de padrões, raciocínio, aprendizado, tomada de...",
     rel:["ml","genai","neuralnet"]},
    {id:"neuralnet",name:"Rede neural artificial",en:"Artificial Neural Network",layer:"Fundamentos",c:"var(--mm-cyan)",x:50,y:50,
     def:"Estrutura matemática composta de unidades computacionais simples (neurônios artificiais) organizados em camadas e conectados por pesos ajustáveis. McCulloch e Pitts (1943) propuseram o primeiro modelo desse tipo, inspirado na a...",
     rel:["deep","parameter","ia"]},
    {id:"training",name:"Treinamento",en:"Training",layer:"Fundamentos",c:"var(--mm-cyan)",x:50,y:50,
     def:"Processo iterativo pelo qual um modelo de aprendizado de máquina ajusta seus parâmetros internos com base em dados de exemplo e em um sinal de erro (a diferença entre o output produzido e o output desejado). O treinamento de gr...",
     rel:["inference","parameter","dados","gpu"]},
    {id:"inference",name:"Inferência",en:"Inference",layer:"Fundamentos",c:"var(--mm-cyan)",x:50,y:50,
     def:"Processo de usar um modelo já treinado para gerar outputs a partir de novos inputs. Quando você digita uma pergunta em um assistente conversacional e recebe uma resposta, o que acontece é inferência: o modelo usa seus parâmetro...",
     rel:["training","cutoff"]},
    {id:"preditiva",name:"IA preditiva",en:"Predictive AI",layer:"Fundamentos",c:"var(--mm-cyan)",x:50,y:50,
     def:"É a IA que olha para algo que já existe e dá um veredito: classifica, pontua ou faz uma previsão. Ela não cria nada novo. O filtro de spam do e-mail decide se a mensagem é lixo ou não; um sistema de triagem decide para qual set...",
     rel:["genai","ml"]},
    {id:"plataforma",name:"Plataforma × Modelo",en:"Platform",layer:"Uso",c:"var(--mm-gold)",x:50,y:50,
     def:"O modelo é o \"motor\" da IA, o programa treinado que sabe gerar texto. A plataforma é o \"carro completo\": a tela onde você digita, o botão de anexar arquivo, o histórico das conversas, a busca na internet, os controles de segura...",
     rel:["llm","opensource","processamento"]},
    {id:"gpu",name:"GPU",en:"GPU",layer:"Arquitetura",c:"var(--mm-green)",x:50,y:50,
     def:"É um tipo de processador que nasceu para desenhar imagens em videogames e que acabou se revelando a peça-chave da inteligência artificial moderna. O motivo é simples: a GPU faz milhares de continhas ao mesmo tempo, em paralelo,...",
     rel:["training","deep"]},
    {id:"dados",name:"Dados de treinamento",en:"Training Data",layer:"Fundamentos",c:"var(--mm-cyan)",x:50,y:50,
     def:"A diferença entre um programa de computador comum e uma IA está em quem escreve as regras. No programa comum, alguém senta e escreve: se a mensagem contém tal palavra, marque como spam. Na IA, ninguém escreve regra nenhuma. Mos...",
     rel:["training","bias","ml"]},
    {id:"lm",name:"Modelo de linguagem",en:"Language Model",layer:"Modelos",c:"var(--mm-violet)",x:50,y:50,
     def:"Sistema de aprendizado de máquina treinado para modelar a distribuição de probabilidade sobre sequências de linguagem — em termos práticos, para aprender quais sequências de palavras (ou tokens) são plausíveis em dado contexto....",
     rel:["llm","token"]},
    {id:"perplexity",name:"Perplexidade",en:"Perplexity",layer:"Modelos",c:"var(--mm-violet)",x:50,y:50,
     def:"É uma medida de o quanto a IA está \"em dúvida\" na hora de adivinhar a próxima palavra de um texto. A ideia por trás é simples: se a perplexidade dá 5, é como se o modelo estivesse hesitando entre cinco palavras igualmente possí...",
     rel:["lm","temperature"]},
    {id:"pretrain",name:"Pré-treinamento",en:"Pre-training",layer:"Modelos",c:"var(--mm-violet)",x:50,y:50,
     def:"Fase inicial do treinamento de um LLM em que o modelo é exposto a um corpus massivo de texto e treinado para executar uma tarefa de predição auto-supervisionada — tipicamente, prever o próximo token em cada posição da sequência...",
     rel:["finetune","training","llm"]},
    {id:"opensource",name:"Modelo de código aberto",en:"Open-source Model",layer:"Uso",c:"var(--mm-gold)",x:50,y:50,
     def:"Modelo cujos pesos (parâmetros treinados) são disponibilizados publicamente, permitindo que qualquer pessoa o execute localmente, o modifique ou o use como base para treinamento especializado. Exemplos incluem a família Llama (...",
     rel:["llm","plataforma"]},
    {id:"emergent",name:"Capacidades emergentes",en:"Emergent Abilities",layer:"Modelos",c:"var(--mm-violet)",x:50,y:50,
     def:"Capacidades que aparecem em LLMs acima de determinados limiares de escala e que não eram previsíveis pela extrapolação linear do desempenho em modelos menores. Wei et al. (2022), em artigo publicado no Transactions on Machine L...",
     rel:["llm","icl"]},
    {id:"icl",name:"Aprendizado em contexto",en:"In-Context Learning",layer:"Uso",c:"var(--mm-gold)",x:50,y:50,
     def:"É a capacidade da IA de aprender o que você quer só de olhar os exemplos que você colou no pedido, sem que ninguém precise reprogramar nada. Existem três situações, e elas têm nome. Quando você só descreve a tarefa, sem dar exe...",
     rel:["prompt","cot","emergent"]},
    {id:"processamento",name:"Local de processamento",en:"Processing Location",layer:"Uso",c:"var(--mm-gold)",x:50,y:50,
     def:"É a pergunta mais importante de todas na hora de usar IA no serviço público: para onde vai o dado que eu digitei? Existem três respostas possíveis. No processamento interno, a IA roda em servidores do próprio MPF, e o dado não ...",
     rel:["privacy","plataforma"]},
    {id:"privacy",name:"Privacidade de dados",en:"Data Privacy",layer:"Riscos",c:"var(--mm-rose)",x:50,y:50,
     def:"Conjunto de riscos associados ao que acontece com os dados submetidos às APIs e interfaces de LLMs comerciais. Dependendo dos termos de serviço do provedor, dados inseridos em conversas podem ser retidos em servidores, usados p...",
     rel:["processamento"]},
    {id:"automacao",name:"Automação e trabalho",en:"Automation and Work",layer:"Riscos",c:"var(--mm-rose)",x:50,y:50,
     def:"Discussão sobre os efeitos dos LLMs e da IA generativa sobre mercados de trabalho, com atenção às ocupações que envolvem processamento de linguagem, síntese de informação e produção de conteúdo. O debate permanece aberto: autom...",
     rel:["agent","ia"]},
    {id:"vibecoding",name:"Vibe coding",en:"Vibe coding",layer:"Uso",c:"var(--mm-gold)",x:74,y:56,
     def:"Modo de produzir software em que a pessoa descreve em linguagem corrente o que deseja, aceita o código gerado pelo modelo sem lê-lo e corrige o rumo pelo que vê acontecer na tela.",
     kid:"É pedir o programa em português e ir testando até funcionar, sem olhar o código.",
     expert:"Desenvolvimento assistido por LLM em que o código é validado por comportamento observado, e não por leitura ou revisão do fonte, com o modelo assumindo a autoria efetiva da implementação.",
     analogy:"Como encomendar um móvel descrevendo o que se quer e mandar refazer as partes que não encaixaram, sem nunca conferir o projeto.",
     example:"Montar num fim de semana um painel de acompanhamento, um script que organiza arquivos ou um protótipo de formulário sem saber programar.",
     challenge:"Onde termina o protótipo aceitável e começa o sistema que ninguém consegue manter?",
     risco:"Quem não lê o código não descobre as falhas que ele tem, e falha de programa costuma aparecer tarde, quando o dado já vazou ou o resultado já foi usado. Enquanto o produto for rascunho descartável rodando na sua máquina, o prejuízo é o seu tempo. A partir do momento em que aquilo processa dado real, o código que ninguém revisou vira responsabilidade de quem o colocou no ar.",
     rel:["prompt","agent","genai","cot"]},
    {id:"opacidade",name:"Opacidade (caixa-preta)",en:"Black-box Opacity",layer:"Limitações",c:"var(--mm-orange)",x:50,y:50,
     def:"Nem os próprios criadores de um modelo de IA conseguem explicar direito por que ele deu aquela resposta específica. O problema não é falta de acesso ao código: mesmo com tudo aberto na tela, o que a IA \"sabe\" está espalhado por...",
     rel:["bias"]}
  ];

  const VERBETES = {
    "genai": "Categoria de sistemas de IA capazes de produzir novos conteúdos — texto, imagens, áudio, vídeo, código — a partir de padrões aprendidos em dados de treinamento. O adjetivo 'generativa' distingue esses sistemas dos modelos discriminativos, que classificam ou analisam inputs existentes mas não criam novos. LLMs são IA generativa para texto; sistemas como DALL-E e Stable Diffusion são IA generativa para imagens; modelos como Suno são IA generativa para música.\nExemplo: Quando você pede a um LLM que escreva um parágrafo sobre determinado tema, o sistema gera um texto que não existia antes — não recupera um texto de um banco de dados, mas o produz token a token.",
    "ml": "Paradigma em que sistemas não são programados com regras explícitas, mas treinados para inferir padrões a partir de exemplos. Em vez de um programador escrever 'se o email contém determinadas palavras, marque como spam', o sistema recebe milhares de emails rotulados e aprende, por otimização matemática, quais padrões distinguem as categorias. O aprendizado de máquina é a abordagem dominante na IA contemporânea e substituiu progressivamente os sistemas especialistas simbólicos a partir dos anos 1990.\nExemplo: Um modelo de detecção de fraude aprende, a partir de milhões de transações históricas rotuladas, a identificar padrões suspeitos em novas transações.",
    "deep": "Subconjunto do aprendizado de máquina que utiliza redes neurais com muitas camadas de processamento (daí 'profundo'). A profundidade permite que o sistema aprenda representações hierárquicas dos dados: camadas iniciais aprendem padrões simples, camadas intermediárias combinam esses padrões em estruturas mais complexas, e camadas finais integram tudo em representações de alto nível. LeCun, Bengio e Hinton (2015) descrevem o aprendizado profundo como métodos que permitem a sistemas compostos por múltiplas camadas aprender representações de dados com múltiplos níveis de abstração. Praticamente toda a IA de ponta atual, incluindo os LLMs, é baseada em aprendizado profundo.\nExemplo: Uma rede de aprendizado profundo para classificação de imagens aprende nas primeiras camadas a detectar bordas; nas intermediárias, partes de objetos; nas finais, o objeto completo.",
    "llm": "Modelo de linguagem treinado em escala massiva — bilhões de parâmetros, trilhões de tokens de texto — que exibe capacidades qualitativas não presentes em modelos menores. A qualificação 'large' não é apenas quantitativa: Wei et al. (2022), em artigo publicado no Transactions on Machine Learning Research (TMLR), documentaram que determinadas capacidades emergem abruptamente a partir de certos limiares de escala — fenômeno chamado de 'capacidades emergentes'. GPT-3, GPT-4, Claude, Gemini e Llama são exemplos de LLMs.\nExemplo: Um LLM pode traduzir texto para idiomas que não foram o foco do treinamento, escrever código funcional e construir argumentos filosóficos — capacidades que emergem sem que o sistema tenha sido explicitamente treinado para cada uma dessas tarefas.",
    "token": "Unidade mínima de texto que um LLM processa. Diferentemente de palavras completas, tokens são produzidos por um algoritmo de segmentação (tokenizador) que divide o texto em fragmentos frequentes na língua: podem ser palavras completas, partes de palavras, sufixos ou sinais de pontuação. Em português, palavras compostas e flexões morfológicas tendem a gerar mais tokens por palavra do que em inglês, o que é uma das razões pelas quais LLMs treinados predominantemente em inglês têm eficiência ligeiramente menor em português.\nExemplo: A frase 'A inteligência artificial generativa transforma fluxos de trabalho' pode ser segmentada em aproximadamente 8–12 tokens, dependendo do tokenizador utilizado.",
    "prompt": "Texto fornecido pelo usuário como input para um LLM, que define a tarefa, o contexto e as restrições para a resposta. O prompt é o ponto de contato entre a intenção do usuário e a capacidade do modelo. Prompts mal formulados produzem outputs inadequados não porque o modelo seja incapaz, mas porque a instrução deixa espaço excessivo para interpretações desfavoráveis. A engenharia de prompts é a disciplina que estuda como formular inputs de modo a obter outputs de qualidade superior de forma consistente.\nExemplo: A diferença entre 'escreva sobre sustentabilidade' e um prompt detalhado que especifica público, argumento, formato e extensão é a diferença entre um prompt aberto e um prompt eficaz.",
    "prompteng": "Conjunto de técnicas e heurísticas para formular instruções a LLMs de modo a maximizar a qualidade e a consistência dos outputs. Inclui a estruturação de papéis, a especificação de formatos, o fornecimento de exemplos (few-shot), a instrução de raciocínio explícito (chain-of-thought) e a iteração progressiva sobre rascunhos. A engenharia de prompts não é uma habilidade puramente técnica — depende de compreensão do domínio da tarefa e da capacidade de especificar critérios de qualidade.\nExemplo: Um pesquisador que instrui o modelo a 'revisar o resumo como um revisor rigoroso de periódico, identificando especificamente a clareza do problema e do gap na literatura' está praticando engenharia de prompts.",
    "transformer": "Arquitetura de rede neural proposta por Vaswani et al. (2017) no artigo 'Attention Is All You Need' (NIPS 2017), que substituiu as redes recorrentes então dominantes no processamento de linguagem natural. A inovação central foi o mecanismo de atenção: em vez de processar tokens sequencialmente, o Transformer processa a sequência inteira em paralelo, com cada token ponderando a relevância de todos os outros para a tarefa em curso. Isso resolveu o problema de dependências de longo alcance e permitiu escalar o treinamento de forma muito mais eficiente. Praticamente todos os LLMs modernos são baseados nessa arquitetura.\nExemplo: Em 'O juiz assinou o documento que estava na mesa', o mecanismo de atenção permite que 'assinou' e 'documento' sejam relacionados diretamente, independentemente da distância entre eles na sentença.",
    "attention": "Operação matemática que permite que um modelo de linguagem pese a relevância de cada token no contexto para produzir o output em determinada posição. Para cada posição da sequência, o mecanismo calcula um conjunto de pesos sobre todos os outros tokens, atribuindo valores maiores àqueles mais relevantes. Esses pesos são aprendidos durante o treinamento. O mecanismo de atenção multi-cabeça, usado nos Transformers, executa essa operação em paralelo por múltiplas 'cabeças', cada uma capturando relações de tipos diferentes entre tokens.\nExemplo: Para desambiguar 'banco' em 'fui ao banco sacar dinheiro', o mecanismo de atenção atribui pesos altos a 'sacar' e 'dinheiro', que confirmam o sentido de instituição financeira.",
    "embedding": "Representação de um texto (palavra, sentença ou documento inteiro) como um vetor numérico em um espaço de alta dimensão, de forma que textos semanticamente similares fiquem próximos nesse espaço. Embeddings são gerados por modelos específicos de embedding, distintos dos modelos de geração de texto. São a base técnica do RAG (para recuperação por similaridade semântica) e de qualquer tarefa que exija comparar significados de textos.\nExemplo: Ao buscar documentos relevantes para 'tratamento de ansiedade em adolescentes', um sistema de embedding recupera documentos sobre saúde mental jovem mesmo que não contenham exatamente essas palavras.",
    "rag": "Arquitetura que combina a capacidade generativa de um LLM com a recuperação de informações de bases de conhecimento externas e atualizadas. Quando uma consulta chega, o sistema primeiro recupera, de um banco de documentos, os trechos mais relevantes, e os insere no contexto do LLM antes de gerar a resposta. Isso reduz alucinações em domínios específicos e mitiga o problema da data de corte, pois o banco de documentos pode ser atualizado independentemente do modelo. RAG é a arquitetura dominante em aplicações empresariais de LLMs que precisam de respostas factuais verificáveis.\nExemplo: Um sistema RAG sobre o acervo de pareceres de um tribunal permite que advogados façam perguntas sobre jurisprudência e recebam respostas baseadas em documentos reais, com citação das fontes.",
    "context": "Quantidade máxima de tokens que um LLM pode processar simultaneamente em uma interação — o equivalente à memória de trabalho do sistema em determinada conversa. Tudo que está dentro da janela de contexto está disponível para o modelo ao gerar uma resposta; tudo que está fora não existe para ele. O GPT-3 operava com uma janela de 2.048 tokens; modelos posteriores expandiram dramaticamente esse limite, chegando a centenas de milhares e, nos modelos mais recentes, à casa dos milhões de tokens.\nExemplo: Se você exceder a janela de contexto em uma conversa longa, o modelo 'esquece' as mensagens mais antigas, podendo gerar respostas inconsistentes com informações fornecidas no início da conversa.",
    "temperature": "Parâmetro que controla o grau de aleatoriedade na geração de texto por um LLM. Com temperatura zero (ou próxima de zero), o modelo sempre escolhe o token de maior probabilidade, produzindo outputs determinísticos e previsíveis — útil para tarefas factuais ou de código. Com temperatura alta, o modelo amostra com mais aleatoriedade, produzindo outputs mais variados e criativos, mas também potencialmente menos coerentes. A temperatura não é acessível diretamente em interfaces como o ChatGPT, mas pode ser configurada via API.\nExemplo: Um modelo com temperatura baixa tende a repetir formulações padrão; com temperatura alta, pode produzir metáforas inusitadas e conexões inesperadas — mas também frases que não fazem sentido.",
    "hallucination": "Fenomeno em que um LLM produz afirmações que parecem confiantes e bem formuladas mas são factualmente incorretas, internamente inconsistentes ou simplesmente inventadas. O modelo foi otimizado para produzir texto plausível, não texto verdadeiro — e fluência não implica veracidade. Alucinações são especialmente frequentes em referências bibliográficas específicas, datas, números e detalhes sobre pessoas ou organizações com baixa representação nos dados de treinamento.\nExemplo: Um LLM pode citar um artigo com título plausível, autor real e ano verossímil que simplesmente não existe — e fazê-lo com a mesma aparência de confiança com que cita artigos reais.",
    "rlhf": "Técnica de treinamento que usa preferências humanas para ajustar o comportamento de um LLM. O processo, descrito por Ouyang et al. (2022) no artigo 'Training language models to follow instructions with human feedback', tem três etapas: (1) pares de respostas do modelo são avaliados por humanos que indicam qual preferem; (2) treina-se um modelo de recompensa que aprende a prever essas preferências; (3) usa-se esse modelo de recompensa para ajustar o LLM por aprendizado por reforço, incentivando respostas que humanos julgam melhores. O RLHF está na base do treinamento do ChatGPT e de outros assistentes conversacionais comerciais.\nExemplo: Sem RLHF, um LLM pode responder de forma tecnicamente coerente mas sem considerar clareza, tom, segurança ou utilidade. O RLHF aproxima o modelo de respostas que humanos de fato preferem receber.",
    "cutoff": "Data após a qual os dados de pré-treinamento de um LLM não se estendem. O modelo desconhece eventos, publicações, mudanças de legislação e desenvolvimentos científicos posteriores a essa data, salvo se essas informações forem fornecidas explicitamente no contexto da conversa. A data de corte é uma limitação estrutural, não um defeito: é inerente ao processo de treinamento em corpus fixo. Para pesquisa acadêmica, isso tem implicação direta: referências recentes e novos dados precisam ser verificados em fontes primárias.\nExemplo: Um modelo com data de corte em determinado ano não conhece artigos publicados depois dessa data e pode citar como 'atual' informação que foi atualizada.",
    "parameter": "Valor numérico ajustável dentro de uma rede neural que codifica o conhecimento aprendido durante o treinamento. Um modelo com mais parâmetros tem, em princípio, maior capacidade de capturar padrões complexos nos dados, mas também requer mais dados e poder computacional para treinar. O número de parâmetros é frequentemente citado como medida do tamanho de um modelo: o GPT-3, por exemplo, tem 175 bilhões de parâmetros, conforme documentado por Brown et al. (2020).\nExemplo: Se um LLM é comparável a um livro de padrões linguísticos, os parâmetros são as entradas individuais desse livro — cada uma registrando uma associação aprendida entre contextos e padrões de linguagem.",
    "diffusion": "Quando você digita \"um gato de óculos lendo um processo\" e a IA devolve uma imagem, ela não desenha nem monta uma cena, como faz um programa de computação gráfica tradicional. O que acontece é bem mais estranho. O sistema começa com uma tela cheia de chuvisco, aquele ruído de televisão fora do ar, e vai limpando esse chuvisco aos poucos, em dezenas de passos, até sobrar uma imagem. Essa técnica se chama difusão. Durante o treinamento, o modelo viu milhões de imagens sendo progressivamente sujadas com chuvisco e aprendeu a fazer o caminho de volta. As palavras que você digitou não descrevem um desenho a ser feito: elas funcionam como uma bússola, empurrando cada passo dessa limpeza na direção de uma imagem que combine com a descrição. Daí vêm os defeitos clássicos, como mãos com seis dedos e texto ilegível dentro da figura. O sistema nunca aprendeu a regra de que mão tem cinco dedos. Ele só aprendeu que, nas fotos que viu, cinco costuma aparecer mais.\nExemplo: Renderizar uma cena em 3D é como fotografar uma maquete que alguém já construiu. Gerar imagem por difusão é como pedir a alguém que viu milhões de fotos na vida que produza, a partir de manchas aleatórias, algo parecido com a sua descrição. Não existe maquete nenhuma.",
    "cot": "É pedir que a IA mostre o passo a passo antes de dar a resposta final, geralmente com uma frase simples como \"pense passo a passo\" ou \"explique seu raciocínio antes de concluir\". O ganho de acerto em tarefas que envolvem várias etapas é grande, e existe um motivo concreto para isso. A IA escreve uma palavra de cada vez, e cada palavra que ela escreve entra na conta da palavra seguinte. Quando ela escreve os passos intermediários, está construindo para si mesma um rascunho no qual vai se apoiar. O raciocínio escrito é, literalmente, o lugar onde a conta acontece. Vale um alerta, porém: o passo a passo que aparece na tela nem sempre é o caminho que a IA realmente percorreu. Ela pode chegar a uma conclusão e depois inventar uma justificativa bonita para ela. Ou seja, a técnica melhora o acerto, mas não serve como prova de como o resultado foi obtido.\nExemplo: Numa pergunta sobre prazos que se somam, pedir a resposta direta erra com frequência. Pedir que a IA primeiro liste cada prazo, depois some e só então conclua reduz o erro, e ainda permite que você enxergue em que ponto o raciocínio saiu do trilho.",
    "finetune": "Processo de continuar o treinamento de um modelo pré-treinado sobre um conjunto menor e mais específico de dados, para adaptar seu comportamento a um domínio, estilo ou conjunto de tarefas particular. O ajuste fino supervisionado transforma um modelo que sabe apenas completar texto em um assistente que segue instruções. Muitas empresas constroem produtos usando modelos base com ajuste fino para seus casos de uso específicos.\nExemplo: Um LLM base pode ser submetido a ajuste fino com exemplos de consultas jurídicas respondidas por especialistas, tornando-o mais adequado para uso em serviços de orientação jurídica.",
    "multimodal": "Capacidade de um modelo de processar e gerar múltiplos tipos de dados — texto, imagens, áudio, vídeo, código — em uma mesma interação. Modelos multimodais podem receber uma imagem e responder perguntas sobre ela, transcrever áudio e analisar seu conteúdo, ou gerar código a partir de um diagrama. A multimodalidade expande o conjunto de tarefas para as quais LLMs são úteis.\nExemplo: Um pesquisador pode submeter uma fotografia de um gráfico em formato físico e pedir ao modelo que extraia os dados e os transcreva em tabela — tarefa inviável para um modelo apenas de texto.",
    "agent": "Sistema em que um LLM funciona como controlador central que percebe o ambiente, planeja ações, usa ferramentas externas (buscas na web, execução de código, acesso a bancos de dados) e executa tarefas em múltiplas etapas sem necessidade de instrução humana a cada passo. A diferença para um assistente conversacional comum é a autonomia: um agente pode executar sequências de ações com consequências reais no mundo. Isso amplia drasticamente as capacidades mas também os riscos — um agente mal instruído pode executar ações incorretas de forma eficiente.\nExemplo: Um agente de pesquisa pode, a partir da instrução 'sintetize os 10 artigos mais citados sobre bem-estar subjetivo publicados em 2024', realizar buscas, ler resumos e produzir uma síntese sem intervenção humana em cada etapa.",
    "sycophancy": "Tendência de LLMs treinados com RLHF de concordar com o usuário, validar suas afirmações e evitar contradições diretas, mesmo quando o usuário está errado ou quando a resposta honesta e crítica seria mais útil. O fenômeno emerge porque avaliadores humanos tendem a preferir respostas que concordam com suas crenças, e o modelo de recompensa aprende a otimizar para essa preferência. Para uso acadêmico, sycophancy é um risco real: o modelo pode validar argumentos fracos quando apresentados com confiança.\nExemplo: Se você afirmar ao modelo que sua metodologia de pesquisa é inovadora e perguntar sua opinião, um modelo sycophantic tenderá a concordar e elogiar, em vez de identificar fragilidades reais.",
    "bias": "Tendência de sistemas de aprendizado de máquina de reproduzir, amplificar ou introduzir padrões discriminatórios presentes nos dados de treinamento ou nas escolhas de design do sistema. Vieses em LLMs incluem sub-representação de variedades linguísticas não dominantes, associações estereotipadas entre gênero e profissões, e perspectivas geopolíticas hegemônicas. Para pesquisadores brasileiros, isso se manifesta na menor qualidade de outputs em português, na menor familiaridade com literatura do Sul Global e na tendência a reproduzir enquadramentos teóricos desenvolvidos em contextos norte-americanos ou europeus.\nExemplo: Um LLM treinado predominantemente em inglês pode, ao ser solicitado a listar 'grandes filósofos', omitir sistematicamente pensadores africanos, latino-americanos e asiáticos em favor dos canônicos europeus.",
    "ia": "Campo da ciência da computação dedicado ao desenvolvimento de sistemas que executam tarefas que, se realizadas por humanos, demandariam alguma forma de inteligência: reconhecimento de padrões, raciocínio, aprendizado, tomada de decisão, compreensão de linguagem. A definição é deliberadamente funcional e não exige que o sistema 'pense' no sentido filosófico. IA é uma categoria heterogênea que inclui desde algoritmos de recomendação até sistemas de diagnóstico médico por imagem — o que os une é o aprendizado a partir de dados, não uma arquitetura comum.\nExemplo: Um filtro de spam é IA. Um assistente conversacional é IA. Um sistema que identifica tumores em radiografias é IA.",
    "neuralnet": "Estrutura matemática composta de unidades computacionais simples (neurônios artificiais) organizadas em camadas e conectadas por pesos ajustáveis. McCulloch e Pitts (1943) propuseram o primeiro modelo desse tipo, inspirado na atividade neuronal binária do cérebro humano. Cada neurônio recebe valores de entrada, aplica uma função matemática e passa o resultado adiante. O aprendizado consiste em ajustar os pesos das conexões de forma que o output do sistema se aproxime do output desejado. A inspiração biológica é metafórica — redes neurais artificiais são modelos matemáticos de computação distribuída, não simulações de neurobiologia.\nExemplo: Uma rede treinada para reconhecer gatos tem pesos ajustados de forma que, para qualquer imagem de gato fornecida como entrada, as ativações das camadas finais produzem uma saída próxima de 'gato'.",
    "training": "Processo iterativo pelo qual um modelo de aprendizado de máquina ajusta seus parâmetros internos com base em dados de exemplo e em um sinal de erro (a diferença entre o output produzido e o output desejado). O treinamento de grandes modelos de linguagem envolve processar trilhões de tokens de texto ao longo de semanas ou meses em infraestrutura computacional massiva. Após o treinamento, os parâmetros são fixos: o modelo não aprende com novas conversas individuais durante o uso, a menos que seja explicitamente re-treinado.\nExemplo: Treinar o GPT-3 consumiu vários milhares de petaflop/s-days de computação no pré-treinamento, segundo informado pelos próprios autores (Brown et al., 2020, Apêndice).",
    "inference": "Processo de usar um modelo já treinado para gerar outputs a partir de novos inputs. Quando você digita uma pergunta em um assistente conversacional e recebe uma resposta, o que acontece é inferência: o modelo usa seus parâmetros fixos para produzir uma resposta dado o contexto fornecido. O modelo não está aprendendo nada naquele momento — está aplicando o que aprendeu durante o treinamento.\nExemplo: Toda vez que você interage com um chatbot, o que acontece é inferência. A distinção entre treinamento e inferência é fundamental para entender por que modelos não 'lembram' conversas anteriores de forma automática.",
    "preditiva": "É a IA que olha para algo que já existe e dá um veredito: classifica, pontua ou faz uma previsão. Ela não cria nada novo. O filtro de spam do e-mail decide se a mensagem é lixo ou não; um sistema de triagem decide para qual setor um documento deve ir. A diferença para a IA generativa não é que uma seja mais moderna ou mais inteligente que a outra: elas fazem coisas diferentes. E há uma consequência prática nisso. Como a IA preditiva responde de forma fechada, com um sim ou não, é fácil conferir se ela acertou. Já a IA generativa escreve um texto, e um texto pode estar certo de muitas maneiras diferentes, o que torna a conferência bem mais trabalhosa. Confundir as duas leva a expectativas erradas: a pessoa cobra do Gemini a precisão de uma calculadora, ou espera que um sistema de triagem explique o raciocínio dele.\nExemplo: No MPF, o sistema TRIA olha uma petição de habeas corpus e decide para onde ela vai. Isso é IA preditiva. O Gemini pega essa mesma petição e escreve um resumo dela. Isso é IA generativa. O primeiro decide sobre o documento; o segundo produz um documento novo.",
    "plataforma": "O modelo é o \"motor\" da IA, o programa treinado que sabe gerar texto. A plataforma é o \"carro completo\": a tela onde você digita, o botão de anexar arquivo, o histórico das conversas, a busca na internet, os controles de segurança e o contrato assinado com o fornecedor. Essa distinção parece detalhe técnico, mas ela é a origem de boa parte da confusão sobre o que a IA sabe fazer. Quando alguém diz que \"o ChatGPT pesquisou na internet\", na verdade o modelo não pesquisou nada: quem foi buscar na web foi a plataforma, que depois entregou o resultado pronto para o modelo ler. Para o serviço público, isso tem um peso enorme, porque o contrato que protege nossos dados é assinado com quem oferece a plataforma. O mesmo modelo, acessado por duas plataformas diferentes, pode ter proteções jurídicas totalmente diferentes.\nExemplo: O Gemini acessado pela conta institucional do MPF e o Gemini acessado por uma conta pessoal gratuita respondem de forma parecida. Mas só o primeiro está coberto por um contrato que diz o que pode e o que não pode ser feito com os dados que você digita ali.",
    "gpu": "É um tipo de processador que nasceu para desenhar imagens em videogames e que acabou se revelando a peça-chave da inteligência artificial moderna. O motivo é simples: a GPU faz milhares de continhas ao mesmo tempo, em paralelo, em vez de fazer poucas contas complicadas uma depois da outra, que é o jeito do processador comum do computador (a CPU). Acontece que treinar uma IA é, no fundo, fazer uma quantidade absurda de continhas simples ao mesmo tempo. Foi por isso que o aprendizado profundo só decolou a partir de 2012: os algoritmos já existiam desde os anos 1980, mas faltava um hardware capaz de rodar aquilo em tempo razoável. Os números atuais impressionam. Só o treinamento inicial do Llama 3, da Meta, consumiu 7,7 milhões de horas de GPU e gerou cerca de 2.290 toneladas de CO2, segundo a própria empresa divulgou em 2024. Essa conta explica por que só um punhado de empresas no mundo consegue criar modelos de ponta, e por que nenhuma delas é pública.\nExemplo: Pense na GPU como um galpão com dez mil pessoas somando números ao mesmo tempo, e na CPU como quatro matemáticos brilhantes resolvendo um problema difícil em sequência. Para somar dez mil números de uma vez, o galpão ganha disparado.",
    "dados": "A diferença entre um programa de computador comum e uma IA está em quem escreve as regras. No programa comum, alguém senta e escreve: se a mensagem contém tal palavra, marque como spam. Na IA, ninguém escreve regra nenhuma. Mostram-se milhares de exemplos já classificados, e o sistema descobre sozinho o que distingue um caso do outro. É por isso que se diz que a IA aprende com exemplos. Só que esse aprendizado é bem diferente do nosso, e vale conhecer as diferenças. Uma criança vê um cachorro duas vezes e já sabe o que é cachorro; a IA precisa de milhares de fotos. A criança entende que um cachorro de pelúcia não é um cachorro de verdade; a IA, que só enxerga padrões de imagem, pode se confundir. E, principalmente, a IA depende de alguém ter etiquetado os exemplos antes: cada foto precisou de uma pessoa dizendo \"isto é cachorro\" ou \"isto não é\". Daí decorre a consequência mais importante de todas: a IA só é tão boa, tão completa e tão imparcial quanto os exemplos que lhe deram. Se os dados de treinamento têm buracos ou preconceitos, o sistema vai reproduzi-los sem nem perceber que está fazendo isso.\nExemplo: Ninguém programou o Gemini com uma regra dizendo como se escreve um despacho. Ele leu uma quantidade enorme de textos, entre eles muitos documentos oficiais, e aprendeu por repetição como esse tipo de texto costuma ser. Por isso ele acerta o tom com facilidade, e por isso também ele erra com a mesma naturalidade quando o assunto é raro nos textos que leu.",
    "lm": "Sistema de aprendizado de máquina treinado para modelar a distribuição de probabilidade sobre sequências de linguagem — em termos práticos, para aprender quais sequências de palavras (ou tokens) são plausíveis em dado contexto. Um modelo de linguagem aprende, a partir de enormes volumes de texto, a prever qual token provavelmente vem a seguir dado um contexto. Essa capacidade de predição, exercitada sobre dados suficientemente ricos, gera sistemas capazes de gerar texto coerente, responder perguntas e seguir instruções.\nExemplo: Um modelo de linguagem treinado em texto português aprende que, após 'o céu está', as continuações 'azul', 'nublado' e 'escuro' são muito mais prováveis do que 'triangular' ou 'silencioso'.",
    "perplexity": "É uma medida de o quanto a IA está \"em dúvida\" na hora de adivinhar a próxima palavra de um texto. A ideia por trás é simples: se a perplexidade dá 5, é como se o modelo estivesse hesitando entre cinco palavras igualmente possíveis naquele ponto. Quanto menor o número, mais certeza o modelo tem, e melhor ele está prevendo aquele tipo de texto. Essa é uma das principais medidas que os pesquisadores usam para comparar modelos de linguagem. Mas há uma armadilha aqui que vale guardar: perplexidade baixa mede fluência, não verdade. O modelo pode estar absolutamente confiante ao completar uma frase que é falsa do começo ao fim. É exatamente isso que acontece quando ele alucina: ele não está em dúvida, ele está errado com convicção. Uma observação para evitar confusão: esse conceito não tem nada a ver com o Perplexity AI, que é o nome de um site de busca.\nExemplo (de forma simplificada, pois a rigor a medida se calcula sobre sequências inteiras): Diante de \"o gato subiu no...\", qualquer modelo aposta alto em \"telhado\" e a perplexidade fica baixinha. Diante de \"o resultado do julgamento foi...\", existem muitas continuações possíveis e a perplexidade sobe: o modelo não sabe, e a medida mostra que ele não sabe.",
    "pretrain": "Fase inicial do treinamento de um LLM em que o modelo é exposto a um corpus massivo de texto e treinado para executar uma tarefa de predição auto-supervisionada — tipicamente, prever o próximo token em cada posição da sequência. 'Auto-supervisionada' significa que o sinal de supervisão (o token correto) é extraído dos próprios dados, sem necessidade de anotação manual humana. O pré-treinamento produz um modelo com conhecimento linguístico e factual amplo, mas que ainda não está otimizado para ser útil, seguro ou seguir instruções.\nExemplo: Um LLM pré-treinado em Wikipedia, livros e páginas da web aprende gramática, vocabulário, fatos sobre o mundo e relações entre conceitos — mas pode produzir textos que ninguém gostaria de receber como resposta a uma pergunta.",
    "opensource": "Modelo cujos pesos (parâmetros treinados) são disponibilizados publicamente, permitindo que qualquer pessoa o execute localmente, o modifique ou o use como base para treinamento especializado. Exemplos incluem a família Llama (Meta) e Mistral. Diferem dos modelos proprietários (como GPT-4 e Claude), acessíveis apenas via API ou interface controlada pela empresa desenvolvedora. Modelos abertos oferecem vantagens de privacidade (dados não saem do computador do usuário), custo e customização, mas frequentemente ficam atrás dos modelos proprietários de ponta em capacidade bruta.\nExemplo: Uma universidade preocupada com privacidade de dados de pesquisa pode executar um modelo Llama localmente, garantindo que documentos sensíveis não sejam enviados para servidores de terceiros.\nNota: a rigor, a maioria desses modelos é \"open weights\" — pesos públicos, mas dados e código de treinamento fechados —, e a definição de IA de código aberto da OSI (2024) não os alcança integralmente.",
    "emergent": "Capacidades que aparecem em LLMs acima de determinados limiares de escala e que não eram previsíveis pela extrapolação linear do desempenho em modelos menores. Wei et al. (2022), em artigo publicado no Transactions on Machine Learning Research, documentaram esse fenômeno: tarefas em que modelos menores têm desempenho próximo do aleatório apresentam, de forma abrupta, desempenho substancialmente acima do aleatório quando o modelo atinge determinada escala. Exemplos incluem raciocínio aritmético multi-etapa e seguir instruções complexas. Registre-se, porém, a controvérsia: Schaeffer et al. (NeurIPS 2023) argumentam que parte desses saltos abruptos pode ser artefato das métricas de avaliação — sob métricas contínuas, a melhora aparece gradual.\nExemplo: O GPT-3 com 175 bilhões de parâmetros começou a resolver operações aritméticas de múltiplos dígitos (somas e subtrações de dois e três algarismos) com taxa de acerto expressiva, sem ter sido treinado especificamente para isso — o raciocínio de múltiplas etapas, por sua vez, só destrava em modelos maiores com cadeia de pensamento, enquanto modelos menores falhavam consistentemente.",
    "icl": "É a capacidade da IA de aprender o que você quer só de olhar os exemplos que você colou no pedido, sem que ninguém precise reprogramar nada. Existem três situações, e elas têm nome. Quando você só descreve a tarefa, sem dar exemplo nenhum, chama-se zero-shot. Quando você dá um exemplo, one-shot. Quando dá alguns, few-shot. Na prática do dia a dia, essa é provavelmente a técnica que dá mais retorno pelo menor esforço. Explicar por escrito como é o padrão de despacho da sua seção é difícil e demorado; colar dois despachos já aprovados e pedir o terceiro no mesmo estilo é rápido, e funciona melhor. O modelo capta dos exemplos um monte de detalhes de estilo e formato que você teria dificuldade de colocar em palavras.\nExemplo: Em vez de escrever cinco parágrafos explicando como deve ser a ementa, cole duas ementas que a chefia já aprovou e escreva: \"faça a ementa do documento anexo seguindo exatamente o padrão dos exemplos acima\".",
    "processamento": "É a pergunta mais importante de todas na hora de usar IA no serviço público: para onde vai o dado que eu digitei? Existem três respostas possíveis. No processamento interno, a IA roda em servidores do próprio MPF, e o dado não sai de casa. No externo, o dado viaja para os servidores de uma empresa, como Google, Microsoft ou Amazon, e o que acontece com ele passa a depender do que está escrito no contrato. No híbrido, uma parte do trabalho é feita aqui dentro e outra parte lá fora. Repare que a pergunta nunca é se a ferramenta é boa. A pergunta é para onde o dado vai e qual documento protege esse dado. Uma ferramenta contratada e uma ferramenta gratuita podem até usar o mesmo modelo por trás e ainda assim oferecer proteções completamente diferentes, porque a diferença não está na tecnologia, está no contrato. É por isso que a mesma IA pode ser liberada em um caso e proibida em outro.\nExemplo: No MPF, o TRIA processa aqui dentro. O Gemini institucional processa lá fora, mas com contrato assinado com o Google. O projeto-piloto de RFFP faz parte aqui e parte na AWS. Uma conta pessoal de ChatGPT também processa lá fora, só que sem contrato nenhum com a instituição.",
    "privacy": "Conjunto de riscos associados ao que acontece com os dados submetidos às APIs e interfaces de LLMs comerciais. Dependendo dos termos de serviço do provedor, dados inseridos em conversas podem ser retidos em servidores, usados para re-treinamento de modelos futuros ou acessíveis a funcionários da empresa. Para pesquisadores, isso tem implicações diretas: dados de pesquisa não publicados, informações sobre participantes e estratégias científicas em desenvolvimento não devem ser submetidos a sistemas sem verificação prévia das políticas de privacidade.\nExemplo: Inserir o texto integral de entrevistas com participantes de pesquisa em um LLM comercial sem verificar os termos de uso pode configurar violação de confidencialidade e potencialmente da LGPD.",
    "automacao": "Discussão sobre os efeitos dos LLMs e da IA generativa sobre mercados de trabalho, com atenção às ocupações que envolvem processamento de linguagem, síntese de informação e produção de conteúdo. O debate permanece aberto: automação pode deslocar funções específicas, criar outras e alterar a composição das tarefas em uma mesma profissão. O impacto não é uniforme por setor nem por nível de qualificação, e os dados empíricos ainda estão em formação.\nExemplo: Assistentes jurídicos que passavam horas pesquisando jurisprudência veem essa tarefa parcialmente automatizável por RAG sobre bases de dados de decisões; ao mesmo tempo, cresce a demanda por profissionais capazes de supervisionar e aplicar criticamente esses outputs.",
    "opacidade": "Nem os próprios criadores de um modelo de IA conseguem explicar direito por que ele deu aquela resposta específica. O problema não é falta de acesso ao código: mesmo com tudo aberto na tela, o que a IA \"sabe\" está espalhado por bilhões de números que não formam frases nem regras legíveis por ninguém. É por isso que se fala em caixa-preta. Os sistemas antigos, dos anos 1980, funcionavam por regras escritas e podiam mostrar qual regra aplicaram. A IA de hoje não tem regras para mostrar. Para uma instituição que precisa fundamentar tudo o que decide, isso poderia ser um impedimento grave. A saída não é abrir a caixa, porque ninguém sabe fazer isso ainda. A saída é mudar o lugar do controle: o que a IA produz é rascunho, e quem fundamenta continua sendo a pessoa que assina. A revisão humana não é uma formalidade chata. É o que torna o uso da ferramenta compatível com o dever de fundamentar.\nExemplo: Você consegue conferir se uma minuta feita pelo Gemini está correta. O que você não consegue é explicar por que ele escolheu aquelas palavras e não outras. Se a validade do documento dependesse dessa explicação, a ferramenta seria inútil. É justamente por isso que ela serve para fazer rascunho, e não para decidir.",
    "vibecoding": "Prática de desenvolvimento de software em que o programador especifica a intenção em linguagem natural e delega ao modelo a escrita do código, avaliando o resultado pelo comportamento observado em vez de pela leitura do fonte. A expressão foi cunhada por Andrej Karpathy em fevereiro de 2025, em publicação na rede X na qual descreve entregar-se à \"vibe\" e esquecer que o código existe; em março o Merriam-Webster já a registrava como gíria em ascensão, e em novembro o dicionário Collins a elegeu palavra do ano, definindo-a como o uso de inteligência artificial orientada por linguagem natural para auxiliar na escrita de código. O que se perdeu na popularização foi a ressalva do próprio Karpathy, que propôs a prática para projetos pessoais e descartáveis, não para sistemas em produção. A distinção decisiva não está entre usar ou não usar IA para programar, e sim entre delegar a escrita mantendo a revisão e delegar também a revisão: no segundo caso ninguém leu o que está rodando, e as falhas de segurança, os casos de borda não tratados e a dívida técnica só aparecem quando o sistema encontra a situação que ninguém previu. Para a Ciência da Informação o fenômeno interessa menos como técnica de programação e mais como deslocamento de competência, já que a capacidade de produzir artefatos computacionais se dissocia da capacidade de compreendê-los e auditá-los.\nExemplo: Um pesquisador sem formação em programação descreve a um assistente o painel interativo que deseja, testa o resultado no navegador, pede correção do que não funcionou e publica o arquivo. Ele consegue julgar se a interface faz o que pediu, mas não consegue afirmar se o código trata uma entrada inesperada, nem por que determinada função foi escrita daquele jeito."
  };

  const NIVEIS = {
    "bias": {"p": "É a tendência da IA de repetir — e às vezes ampliar — os preconceitos que estavam nos dados em que aprendeu: associações de gênero com profissões, sub-representação de quem aparece pouco nos textos. Ela não escolhe discriminar; herda.", "s": "Tendência do sistema a reproduzir ou amplificar padrões discriminatórios dos dados de treinamento ou das escolhas de design. Para quem trabalha em português, o viés aparece até na qualidade: modelos treinados majoritariamente em inglês rendem menos na nossa língua e conhecem pior a realidade local — mais um motivo para revisar o que sai."},
    "ia": {"p": "É o nome que se dá aos sistemas de computador que fazem tarefas que, feitas por uma pessoa, exigiriam inteligência: reconhecer padrões, aprender, entender linguagem, decidir. Não é uma coisa só — o filtro de spam, o assistente de conversa e o sistema que lê radiografias são todos IA, cada um do seu jeito.", "s": "Sistemas que executam tarefas que exigiriam inteligência de uma pessoa: reconhecer padrões, aprender com exemplos, compreender linguagem. O que os une não é uma tecnologia comum, e sim aprender a partir de dados. No MPF, tanto o TRIA (que classifica petições) quanto o Gemini (que redige textos) são IA — de tipos bem diferentes."},
    "ml": {"p": "Em vez de alguém escrever as regras, o sistema aprende sozinho olhando exemplos. Mostram-se milhares de e-mails já marcados como spam ou não, e ele descobre o que diferencia um do outro. É assim que funciona quase toda a IA de hoje.", "s": "Paradigma em que o sistema não recebe regras prontas: recebe exemplos rotulados e aprende os padrões por conta própria. É a base de quase toda a IA atual — e é por isso que ferramentas assim acertam a classificação de documentos sem que ninguém tenha escrito uma regra para cada caso, mas também herdam os vícios dos exemplos que viram."},
    "deep": {"p": "É o aprendizado de máquina feito com redes de muitas camadas — daí o 'profundo'. As primeiras camadas aprendem coisas simples, as seguintes combinam essas coisas em padrões maiores, até o sistema reconhecer o todo. É a técnica por trás de praticamente toda IA de ponta.", "s": "Tipo de aprendizado de máquina que usa redes neurais de muitas camadas, cada uma num nível: as primeiras captam padrões simples, as intermediárias os combinam, as finais integram tudo. Toda a IA de ponta atual — inclusive o Gemini que você usa — é construída sobre aprendizado profundo."},
    "neuralnet": {"p": "É uma estrutura matemática feita de unidades bem simples, ligadas por conexões com pesos ajustáveis. Aprender, para ela, é ajustar esses pesos até a resposta sair certa. A inspiração no cérebro é só metáfora: não há biologia ali, há matemática.", "s": "Estrutura de unidades computacionais simples organizadas em camadas e ligadas por pesos ajustáveis; treinar é ajustar esses pesos até o resultado se aproximar do desejado. A inspiração no cérebro é metafórica. É a peça básica de que são feitos o aprendizado profundo e, por consequência, os modelos que o MPF usa."},
    "parameter": {"p": "São os numerozinhos ajustáveis dentro do modelo — bilhões deles — onde fica guardado tudo o que ele aprendeu. Quanto mais parâmetros, mais capacidade de captar padrões, mas também mais dados e computação para treinar.", "s": "Valores numéricos ajustáveis dentro da rede neural; é neles que o conhecimento aprendido fica gravado. O tamanho de um modelo se mede em parâmetros — o GPT-3, por exemplo, tem 175 bilhões. Quando você corrige o Gemini numa conversa, esses números não mudam: aprendizado só acontece no treinamento."},
    "training": {"p": "É o processo em que o modelo ajusta seus números internos olhando exemplos e medindo o próprio erro, milhões de vezes, até acertar. Depois que termina, esses números ficam fixos: usar o modelo não o treina mais.", "s": "Processo iterativo em que o modelo ajusta seus parâmetros a partir de exemplos e de um sinal de erro, ao longo de semanas em infraestrutura gigantesca. Terminado, os parâmetros congelam. Consequência prática: corrigir o Gemini numa conversa não o ensina nada permanente — na conversa seguinte, ele volta ao que era."},
    "inference": {"p": "É o modelo em uso: você faz a pergunta, ele aplica o que já aprendeu e devolve a resposta. Nesse momento ele não está aprendendo nada — só usando o que já sabe.", "s": "Uso do modelo já treinado para gerar respostas a novas entradas. Toda vez que um servidor conversa com o Gemini, o que ocorre é inferência: os parâmetros estão fixos, e o modelo aplica o que aprendeu. É essa distinção que explica por que ele não lembra automaticamente das conversas anteriores."},
    "preditiva": {"p": "É a IA que olha algo que já existe e dá um veredito: é spam ou não é, vai para este setor ou aquele. Ela não cria nada novo — e, por responder de forma fechada, é fácil conferir se acertou.", "s": "IA que classifica, pontua ou prevê a partir do que já existe, sem criar conteúdo. No MPF, o TRIA é IA preditiva: olha uma petição e decide o destino dela. O Gemini, que escreve um resumo daquela mesma petição, é generativa. Confundir as duas gera expectativa errada — como cobrar do Gemini a precisão fechada de um classificador."},
    "plataforma": {"p": "O modelo é o motor; a plataforma é o carro completo: a tela onde você digita, o anexar arquivo, o histórico, a busca na internet e o contrato com o fornecedor. Quando dizem que 'a IA pesquisou na web', quem pesquisou foi a plataforma — o modelo só leu o resultado.", "s": "O modelo é o 'motor' treinado; a plataforma é o 'carro completo' — interface, anexos, histórico, busca e, sobretudo, o contrato. O mesmo Gemini acessado pela conta institucional do MPF e por uma conta pessoal gratuita responde parecido, mas só o primeiro está coberto por contrato que disciplina o uso dos dados digitados."},
    "gpu": {"p": "É o processador que nasceu para desenhar videogame e virou a peça-chave da IA, porque faz milhares de continhas simples ao mesmo tempo — e treinar IA é exatamente isso. Sem GPU, o aprendizado profundo não teria decolado.", "s": "Processador paralelo criado para gráficos que virou a base física da IA: faz milhares de operações simples simultaneamente, que é do que o treinamento precisa. Os algoritmos existiam desde os anos 1980; foi a GPU que os tornou viáveis por volta de 2012. O custo é enorme — só o treinamento do Llama 3 consumiu 7,7 milhões de horas de GPU — e explica por que pouquíssimas empresas criam modelos de ponta."},
    "dados": {"p": "A IA não recebe regras: recebe exemplos já etiquetados e descobre sozinha os padrões. Por isso ela só é tão boa — e tão imparcial — quanto os exemplos que viu. Se os dados têm buracos ou preconceitos, ela os repete sem perceber.", "s": "Ninguém programou o Gemini com uma regra de como se escreve um despacho: ele leu volumes enormes de texto, inclusive documentos oficiais, e aprendeu o padrão por repetição. Por isso acerta o tom com facilidade — e erra com a mesma naturalidade quando o assunto é raro nos textos que viu. A qualidade da IA é a qualidade dos exemplos."},
    "lm": {"p": "É um sistema treinado para uma tarefa aparentemente boba: adivinhar a próxima palavra. Lendo volumes gigantescos de texto, aprende que depois de 'o céu está' vem 'azul' ou 'nublado', não 'triangular'. Dessa habilidade de prever nasce a capacidade de escrever.", "s": "Sistema treinado para prever o próximo token dado o contexto. Parece pouco, mas, exercitada sobre dados riquíssimos, essa predição gera a capacidade de escrever texto coerente, responder perguntas e seguir instruções — o mecanismo básico por trás do Gemini e de todos os assistentes de texto."},
    "llm": {"p": "É um modelo de linguagem gigante — bilhões de parâmetros, trilhões de palavras lidas. Nesse tamanho aparecem habilidades que os modelos menores não têm, como escrever código e construir argumentos. GPT-4, Claude, Gemini e Llama são exemplos.", "s": "Modelo de linguagem em escala massiva: bilhões de parâmetros, trilhões de tokens de treinamento. O 'large' importa porque certas capacidades só aparecem acima de determinada escala. O Gemini disponível no MPF é um LLM; o TRIA não — é um classificador preditivo, de outra família."},
    "token": {"p": "A IA não lê palavras como a gente. Antes de responder, ela corta o texto em pedacinhos chamados tokens: às vezes o pedacinho é uma palavra inteira, às vezes só um pedaço dela, ou até um sinal de pontuação. É contando esses pedacinhos que se mede quanto texto a IA consegue ler e escrever de uma vez. Uma mesma frase pode virar mais ou menos pedacinhos dependendo da língua — em português, costuma virar mais.", "s": "Antes de responder, a IA corta o texto em fragmentos chamados tokens — às vezes uma palavra inteira, às vezes um pedaço dela. É nesses fragmentos que ela trabalha, e é neles que se mede quanto texto cabe numa conversa, não em páginas ou palavras. Em português, cada palavra tende a render mais tokens do que em inglês. Na prática: ao anexar um ofício de dez páginas ao Gemini ou ao NotebookLM, o documento vira alguns milhares de tokens, e é esse número que conta para o limite da ferramenta."},
    "context": {"p": "É o quanto de texto a IA consegue 'segurar na cabeça' de uma vez — a memória de trabalho da conversa. O que está dentro da janela existe para ela; o que ficou de fora simplesmente não existe. Em conversas muito longas, o começo pode ter caído fora sem aviso.", "s": "Quantidade máxima de tokens que o modelo processa de uma vez — a memória de trabalho da conversa. Tudo dentro dela está disponível; o que passa do limite é esquecido sem alarme. Na prática: numa sessão longa de revisão de documento no Gemini, as instruções dadas no início podem já ter saído da janela, e a resposta ficar inconsistente com elas."},
    "temperature": {"p": "É o botão da aleatoriedade. Com temperatura baixa, a IA escolhe sempre a palavra mais provável e responde de forma previsível; com temperatura alta, arrisca mais, fica criativa — e às vezes incoerente.", "s": "Parâmetro que regula a aleatoriedade da geração: baixa, o modelo escolhe sempre o token mais provável (bom para tarefas factuais); alta, varia e cria mais, com risco de incoerência. Nas interfaces comuns, como a do Gemini, esse controle não fica exposto — o que ajuda a entender por que o mesmo pedido pode render respostas diferentes em execuções diferentes."},
    "cutoff": {"p": "É a data em que o 'conhecimento' do modelo para. Tudo que aconteceu depois — lei nova, cargo novo, notícia — ele não sabe, a menos que alguém cole a informação na conversa. E o pior: ele responde sobre o depois com a mesma segurança de sempre.", "s": "Data-limite dos dados de treinamento: eventos, normas e mudanças posteriores não existem para o modelo, salvo se fornecidos no contexto. Não é defeito, é característica estrutural. Na rotina administrativa: qualquer informação sujeita a mudança — valores, prazos normativos, titulares de cargos — sai do Gemini precisando de conferência na fonte oficial."},
    "perplexity": {"p": "É a medida da 'dúvida' da IA ao adivinhar a próxima palavra: perplexidade 5 é como hesitar entre cinco palavras igualmente possíveis. Quanto menor, mais confiante o modelo. Atenção: mede fluência, não verdade — ele pode estar confiantíssimo e errado.", "s": "Medida de quanto o modelo hesita ao prever o próximo token: valor 5 equivale a hesitar entre cinco opções igualmente prováveis. Serve para comparar modelos. A armadilha: perplexidade baixa mede fluência, não verdade — na alucinação, o modelo não está em dúvida, está errado com convicção. Não confundir com o site Perplexity AI."},
    "genai": {"p": "É a IA que cria coisas novas — texto, imagem, som, código — a partir dos padrões que aprendeu. Ela não busca uma resposta pronta num banco de dados: produz o conteúdo na hora, palavra por palavra.", "s": "Categoria de sistemas que produzem conteúdo novo (texto, imagem, áudio, código) a partir de padrões aprendidos, em contraste com os que apenas classificam. Quando o Gemini redige uma minuta, não está recuperando um texto pronto: está gerando, token a token, um texto que não existia."},
    "transformer": {"p": "É a arquitetura de rede por trás de praticamente todos os modelos atuais. A grande sacada foi processar a frase inteira de uma vez, com cada palavra 'prestando atenção' em todas as outras, em vez de ler palavra por palavra em sequência.", "s": "Arquitetura proposta em 2017 que sustenta praticamente todos os LLMs atuais, inclusive o Gemini. A inovação foi o mecanismo de atenção: a sequência é processada em paralelo e cada token pondera a relevância de todos os outros — o que permitiu relacionar palavras distantes na frase e escalar o treinamento."},
    "attention": {"p": "É o mecanismo que decide em que palavras a IA deve 'prestar atenção' para escrever a próxima. Em 'fui ao banco sacar dinheiro', é ele que liga 'banco' a 'sacar' e 'dinheiro' e entende que não se trata de assento.", "s": "Operação que atribui pesos de relevância a cada token do contexto na hora de gerar a resposta. É o que permite desambiguar sentidos — 'banco' perto de 'sacar dinheiro' — e relacionar termos distantes num documento longo. Os pesos são aprendidos no treinamento, não programados."},
    "pretrain": {"p": "É a primeira fase do treinamento: o modelo lê um volume gigantesco de texto e aprende, sozinho, a prever a próxima palavra. Sai dali sabendo muito sobre língua e mundo — mas ainda sem jeito de assistente: isso vem depois.", "s": "Fase inicial em que o modelo é exposto a um corpus massivo e treinado a prever o próximo token — 'auto-supervisionado', porque a resposta certa está no próprio texto, sem anotação humana. O resultado sabe gramática e fatos, mas ainda não sabe ser útil ou seguro; o comportamento de assistente vem das fases seguintes (ajuste fino e RLHF)."},
    "finetune": {"p": "Depois do treinamento geral, o modelo passa por um treino menor e mais focado, com exemplos do comportamento desejado. É esse ajuste que transforma um completador de texto num assistente que segue instruções.", "s": "Continuação do treinamento sobre um conjunto menor e específico de dados, para adaptar o modelo a um domínio ou estilo. É o ajuste fino que converte o modelo bruto em assistente. Um LLM ajustado com consultas jurídicas respondidas por especialistas, por exemplo, fica mais adequado a esse domínio."},
    "rlhf": {"p": "É a etapa em que humanos comparam respostas do modelo e dizem qual preferem; o modelo é então ajustado para produzir mais respostas do tipo preferido. Foi isso que tornou os assistentes educados e úteis — e também, como efeito colateral, meio bajuladores.", "s": "Técnica que ajusta o modelo por preferências humanas: avaliadores comparam respostas, um modelo de recompensa aprende essas preferências, e o LLM é ajustado para maximizá-las. Está na base dos assistentes comerciais. Efeito colateral relevante para o trabalho: a tendência à concordância (servilidade), porque avaliadores tendem a preferir respostas que os validam."},
    "hallucination": {"p": "É quando a IA inventa — com toda a confiança do mundo. Ela foi treinada para produzir texto plausível, não verdadeiro, e às vezes o plausível é falso: uma citação com cara de real, um número, um artigo que não existe. A fluência não denuncia o erro.", "s": "Produção de afirmações fluentes e confiantes que são incorretas ou inventadas. O modelo otimiza plausibilidade, não verdade. Alvos mais frequentes: referências específicas, datas, números, normativos. Na rotina do MPF, é a razão do 'Confira, Confirme e Corrija': citação de norma ou dado saído do Gemini se confere na fonte antes de entrar em documento oficial."},
    "diffusion": {"p": "A IA de imagem não desenha: começa com uma tela cheia de chuvisco e vai limpando, passo a passo, até sobrar uma figura. Suas palavras funcionam como bússola dessa limpeza. Daí os defeitos famosos, como mãos de seis dedos: ninguém ensinou a regra, só os padrões.", "s": "Técnica de geração de imagem: o sistema parte de ruído puro e o remove em dezenas de passos, guiado pelo texto do pedido, até formar a imagem. No treinamento, viu milhões de imagens sendo 'sujadas' com ruído e aprendeu o caminho inverso. Isso explica os defeitos típicos (mãos, textos ilegíveis dentro da figura): o modelo aprendeu frequências, não regras."},
    "prompt": {"p": "É o pedido que você escreve para a IA: a tarefa, o contexto e os limites da resposta. Pedido vago, resposta genérica — não porque o modelo não saiba, mas porque você deixou que ele decidisse tudo sozinho.", "s": "Texto que define tarefa, contexto e restrições da resposta — o ponto de contato entre a sua intenção e a capacidade do modelo. A diferença entre 'resuma este ofício' e um pedido que diz para quem é o resumo, em que formato e com que tamanho é a diferença entre retrabalho e resultado aproveitável."},
    "prompteng": {"p": "É o conjunto de técnicas para pedir melhor: definir um papel para a IA, especificar o formato, dar exemplos, pedir o raciocínio por etapas, refinar em rodadas. Menos mágica, mais clareza sobre o que você quer.", "s": "Técnicas para formular instruções que rendem respostas melhores e mais consistentes: atribuir papel, especificar formato, fornecer exemplos, pedir raciocínio explícito, iterar sobre rascunhos. Não é habilidade só técnica — exige saber o que é qualidade na sua tarefa. O método P.R.O.M.P.T. trabalhado no curso é uma sistematização disso."},
    "rag": {"p": "É a arquitetura em que a IA primeiro busca trechos relevantes numa base de documentos e só então responde, apoiada neles. Reduz as invenções e contorna a data de corte, porque a base pode ser atualizada sem mexer no modelo.", "s": "Arquitetura que combina geração com busca: antes de responder, o sistema recupera os trechos mais relevantes de uma base de documentos e os insere no contexto. Reduz alucinação e contorna a data de corte. É essencialmente o que o NotebookLM faz com os documentos que você anexa — e por isso ele responde 'com base nas fontes', diferente do Gemini solto."},
    "embedding": {"p": "É a tradução de um texto em números — um ponto num espaço de muitas dimensões — de modo que textos parecidos fiquem perto uns dos outros. É assim que a máquina 'compara significados' e encontra documentos sobre o mesmo assunto mesmo sem as mesmas palavras.", "s": "Representação de um texto (palavra, sentença ou documento) como vetor numérico, em que proximidade indica similaridade de sentido. É a base da busca semântica e do RAG: quando o NotebookLM encontra o trecho certo do seu documento mesmo sem as palavras exatas da pergunta, são embeddings trabalhando."},
    "sycophancy": {"p": "É a tendência da IA de concordar com você — mesmo quando você está errado. Ela aprendeu que concordar agrada. Se você afirmar algo com confiança e pedir opinião, ela tende a validar em vez de apontar as falhas.", "s": "Tendência de modelos treinados com RLHF a concordar com o usuário e evitar contradições, mesmo quando a crítica honesta seria mais útil. Cuidado prático: se você pedir ao Gemini que avalie uma minuta dizendo que a considera pronta, ele tenderá a confirmar. Peça a crítica sem revelar sua posição — ou peça expressamente os defeitos."},
    "agent": {"p": "É a IA com autonomia para agir: em vez de só responder, ela planeja etapas, usa ferramentas — busca, código, bancos de dados — e executa a tarefa inteira sem pedir instrução a cada passo. Mais poder, mais risco.", "s": "Sistema em que o LLM planeja e executa tarefas em múltiplas etapas usando ferramentas externas, sem instrução humana a cada passo. A diferença para o assistente comum é a autonomia — e é ela que amplia o risco: um agente mal instruído erra com eficiência. Nos usos institucionais, autonomia pede supervisão proporcional."},
    "multimodal": {"p": "É a capacidade de trabalhar com vários tipos de conteúdo na mesma conversa: ler uma imagem e responder sobre ela, ouvir um áudio, gerar código a partir de um diagrama. A IA deixa de ser só texto.", "s": "Capacidade de processar e gerar múltiplos tipos de dados — texto, imagem, áudio, código — numa mesma interação. Uso típico na rotina: fotografar um quadro ou um documento físico e pedir ao Gemini que extraia o conteúdo em tabela, tarefa impossível para um modelo só de texto."},
    "opensource": {"p": "São os modelos cujos 'pesos' são públicos: qualquer um pode baixar, rodar no próprio computador e modificar. Vantagem grande de privacidade — o dado não sai da máquina — em troca de, em geral, menos potência que os modelos fechados de ponta.", "s": "Modelos com pesos disponibilizados publicamente (Llama, Mistral), executáveis localmente, ao contrário dos proprietários acessíveis só por API (GPT-4, Claude). A vantagem decisiva para instituições é a privacidade: o dado não sai do ambiente. O custo costuma ser alguma defasagem de capacidade frente aos proprietários de ponta."},
    "emergent": {"p": "São habilidades que aparecem de repente quando o modelo cresce além de certo tamanho — coisas que os modelos menores simplesmente não faziam, como contas de vários passos. Ninguém as programou; elas emergem da escala.", "s": "Capacidades que surgem abruptamente acima de certos limiares de escala, imprevisíveis pela evolução dos modelos menores — raciocínio aritmético multi-etapa, seguimento de instruções complexas. Explicam por que os modelos grandes parecem qualitativamente diferentes, e não apenas versões maiores dos pequenos."},
    "icl": {"p": "É a IA aprendendo na hora, só de olhar os exemplos que você colou no pedido. Sem exemplo é zero-shot; com um, one-shot; com alguns, few-shot. Colar dois modelos prontos e pedir 'o terceiro no mesmo estilo' costuma funcionar melhor do que explicar.", "s": "Capacidade de captar o padrão desejado a partir de exemplos incluídos no próprio pedido, sem reprogramação: zero-shot (sem exemplo), one-shot (um), few-shot (alguns). É provavelmente a técnica de melhor retorno pelo menor esforço na rotina: cole duas ementas já aprovadas pela chefia e peça a terceira 'seguindo exatamente o padrão dos exemplos'."},
    "cot": {"p": "É pedir que a IA mostre o passo a passo antes da resposta final — 'pense passo a passo'. Como ela escreve uma palavra por vez e se apoia no que já escreveu, o raciocínio na tela vira o rascunho onde a conta acontece. O acerto sobe bastante em problemas de várias etapas.", "s": "Pedir os passos intermediários antes da conclusão ('explique seu raciocínio antes de concluir'). O ganho é real em tarefas multi-etapas — soma de prazos, por exemplo: listar cada prazo, somar e só então concluir erra menos, e deixa visível onde o raciocínio descarrilou. Alerta: o passo a passo exibido nem sempre é o caminho realmente percorrido; melhora o acerto, mas não é prova."},
    "processamento": {"p": "A pergunta-chave do uso de IA no serviço público: para onde vai o dado que eu digitei? Interno: fica em casa. Externo: viaja para servidores de uma empresa, e a proteção vira questão de contrato. Híbrido: parte aqui, parte lá. A diferença nunca é a tecnologia — é o contrato.", "s": "Interno, externo ou híbrido: a classificação diz para onde vai o dado digitado. No MPF, o TRIA processa dentro de casa; o Gemini institucional processa fora, mas sob contrato com o Google; o piloto de RFFP é híbrido (parte na AWS); uma conta pessoal de ChatGPT processa fora sem contrato nenhum com a instituição. A pergunta certa nunca é 'a ferramenta é boa?' — é 'qual documento protege este dado?'."},
    "privacy": {"p": "O que acontece com o que você digita na IA? Dependendo dos termos do serviço, pode ficar guardado, ser usado para treinar modelos futuros ou ser visto por funcionários da empresa. Dado sensível não entra em ferramenta sem verificação prévia das políticas.", "s": "Riscos ligados ao destino dos dados submetidos a LLMs comerciais: retenção em servidores, uso em re-treinamento, acesso por terceiros — tudo conforme os termos de serviço. Na rotina do MPF, é a razão de anonimizar antes de submeter e de usar apenas as ferramentas do portfólio institucional, cobertas por contrato; dados pessoais em ferramenta sem contrato podem violar a LGPD."},
    "automacao": {"p": "É a discussão sobre o efeito da IA no trabalho, especialmente nas funções que lidam com texto e síntese de informação. O debate está aberto: tarefas somem, outras nascem, e as profissões mudam de composição — o impacto não é uniforme.", "s": "Discussão sobre os efeitos da IA generativa nos mercados de trabalho, com atenção às ocupações de processamento de linguagem e síntese. O padrão observado: tarefas específicas se automatizam (a pesquisa de jurisprudência por RAG, por exemplo) enquanto cresce a demanda por quem saiba supervisionar e aplicar criticamente os resultados — deslocamento de tarefas, mais que substituição de pessoas."},
    "opacidade": {"p": "Nem os criadores conseguem explicar por que a IA deu aquela resposta: o que ela 'sabe' está espalhado por bilhões de números ilegíveis. Não há regra para mostrar. Por isso o produto dela é rascunho — quem fundamenta e assina é a pessoa.", "s": "O conhecimento do modelo está diluído em bilhões de parâmetros que não formam regras legíveis — nem com o código aberto se explica uma resposta específica. Para uma instituição que deve fundamentar o que decide, a saída não é abrir a caixa (hoje impraticável na escala dos modelos em produção), é deslocar o controle: você confere se a minuta do Gemini está correta, ainda que não possa explicar por que ele escolheu aquelas palavras. Rascunho da máquina, fundamentação da pessoa."},
    "guardrails": {"p": "São as barreiras de segurança embutidas no modelo e na plataforma: filtros e regras que tentam impedir respostas nocivas. Reduzem o risco, não o zeram — e às vezes bloqueiam até pedido legítimo, por excesso de cautela.", "s": "Mecanismos de segurança que tentam impedir conteúdo nocivo: recusas, filtros, políticas de uso. Diminuem o risco, mas podem ser contornados e também bloqueiam pedidos legítimos por precaução. Não substituem o julgamento de quem usa — a responsabilidade pelo que sai continua sendo de quem assina."},
    "vibecoding": {"p": "É programar sem programar: você descreve em português o que quer, a IA escreve o código e você julga o resultado pelo que aparece na tela, sem ler o que foi escrito. Serve muito bem para protótipo e rascunho. O problema começa quando aquilo que ninguém leu passa a rodar para valer.", "s": "Prática de descrever a intenção em linguagem corrente e aceitar o código gerado sem revisá-lo, avaliando apenas se o programa se comporta como se esperava. O termo é de Andrej Karpathy (fevereiro de 2025), que o propôs para projetos descartáveis, e virou palavra do ano do dicionário Collins em 2025. A prática derruba a barreira de entrada e permite que quem não programa monte uma planilha automatizada, um script de organização de arquivos ou um painel de acompanhamento em poucas horas. A questão prática é outra: código que ninguém leu não teve as falhas procuradas, e falha de programa aparece tarde. Enquanto o resultado for rascunho rodando na sua máquina, o risco é o seu tempo; quando aquilo processa dado real ou entra em fluxo de trabalho de outras pessoas, a responsabilidade continua sendo de quem colocou no ar, não de quem gerou o código."}
  };

  const LAYERS = ["Fundamentos","Modelos","Arquitetura","Uso","Aplicações","Riscos","Limitações"];
  const layerColors = {
    "Fundamentos":"var(--mm-cyan)",
    "Modelos":"var(--mm-violet)",
    "Arquitetura":"var(--mm-green)",
    "Uso":"var(--mm-gold)",
    "Aplicações":"var(--mm-cyan)",
    "Riscos":"var(--mm-rose)",
    "Limitações":"var(--mm-orange)"
  };

  const ESSENCIAL = ["ia","genai","preditiva","plataforma","dados","training","inference","token","context","prompt","hallucination","rag","llm","cutoff","sycophancy"];
  const AMPLIADO_EXTRA = ["prompteng","icl","cot","processamento","privacy","opacidade","bias","guardrails","ml","deep","finetune","rlhf","temperature","embedding","multimodal","vibecoding"];

  const TRILHAS = [
    {t:"O que é a IA?",                        ids:["ia","preditiva","genai"]},
    {t:"Como a IA aprende?",                        ids:["dados","training","ml","deep","neuralnet","inference"]},
    {t:"Como a IA generativa é construída?", ids:["transformer","attention","embedding","parameter","gpu"]},
    {t:"Como a IA entende a linguagem?",            ids:["lm","llm","token","context","pretrain","perplexity","emergent"]},
    {t:"Como usamos a IA?",                         ids:["prompt","prompteng","temperature","cot","plataforma","opensource","icl","vibecoding","processamento"]},
    {t:"O que a IA consegue fazer?",                ids:["rag","diffusion","multimodal","agent"]},
    {t:"Questões relacionadas a riscos",       ids:["hallucination","guardrails","rlhf","finetune","sycophancy","bias","privacy","automacao"]},
    {t:"Quais são as limitações?",  ids:["cutoff","opacidade"]}
  ];

  // Mapeamento opcional entre IDs do mapa mental e IDs dos verbetes do dicionário de 100 palavras
  const DICT_WORD_MAP = {
    ia: "inteligencia-artificial",
    genai: "ia-generativa",
    ml: "aprendizado-de-maquina",
    deep: "aprendizado-profundo",
    neuralnet: "rede-neural",
    parameter: "parametro",
    training: "treinamento",
    inference: "inferencia",
    preditiva: "ia-preditiva",
    gpu: "gpu",
    dados: "dados-de-treinamento",
    lm: "modelo-de-linguagem",
    llm: "llm",
    token: "token",
    context: "janela-de-contexto",
    temperature: "temperatura",
    cutoff: "corte-de-conhecimento",
    perplexity: "perplexidade",
    transformer: "transformer",
    attention: "mecanismo-de-atencao",
    pretrain: "pre-treinamento",
    finetune: "ajuste-fino",
    rlhf: "rlhf",
    hallucination: "alucinacao",
    diffusion: "difusao",
    prompt: "prompt",
    prompteng: "engenharia-de-prompt",
    rag: "rag",
    embedding: "embedding",
    sycophancy: "bajulacao",
    agent: "agente",
    multimodal: "multimodal",
    opensource: "modelo-aberto",
    icl: "aprendizado-em-contexto",
    cot: "cadeia-de-pensamento",
    privacy: "dados-pessoais",
    opacidade: "caixa-preta",
    guardrails: "guardrails",
    vibecoding: "vibe-coding",
    bias: "vies"
  };

  const esc = (v) =>
    String(v ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");

  const norm = (str) =>
    String(str || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();

  function initMindMap() {
    const mapEl = document.getElementById("neuralMap");
    if (!mapEl) return;

    let escopoAtual = "e";
    let nivelAtual = "b";
    const NIVEL_MAPA = { b: "p", m: "s" };
    let state = { visited: [], active: null, pos: {} };
    let history = [];
    let trilha = null;
    const NODE_EL = {};

    function emEscopo(id) {
      if (escopoAtual === "c") return true;
      if (ESSENCIAL.includes(id)) return true;
      if (escopoAtual === "p" && AMPLIADO_EXTRA.includes(id)) return true;
      return false;
    }

    function visiveis() {
      return TERMS.filter((t) => emEscopo(t.id));
    }

    function term(id) {
      return TERMS.find((t) => t.id === id);
    }

    function visited(id) {
      return state.visited.includes(id);
    }

    function layoutGrid() {
      const vis = visiveis();
      const n = vis.length;
      const COLS = Math.max(4, Math.round(Math.sqrt(n * 2.4)));
      const ROWS = Math.ceil(n / COLS);
      const X0 = 7, X1 = 93, Y0 = 12, Y1 = 89;
      const passo = (X1 - X0) / Math.max(1, COLS - 1);
      const ordenados = [];
      LAYERS.forEach((l) =>
        vis.forEach((t) => {
          if (t.layer === l) ordenados.push(t);
        })
      );
      vis.forEach((t) => {
        if (!ordenados.includes(t)) ordenados.push(t);
      });
      ordenados.forEach((t, i) => {
        const col = i % COLS,
          row = Math.floor(i / COLS);
        const desloc = row % 2 && col < COLS - 1 ? passo / 2 : 0;
        const jx = Math.sin(i * 12.9898) * 1.2,
          jy = Math.cos(i * 78.233) * 1.5;
        t._gx = Math.max(6, Math.min(94, X0 + col * passo + desloc + jx));
        t._gy = Math.max(
          9,
          Math.min(92, Y0 + (ROWS > 1 ? row / (ROWS - 1) : 0.5) * (Y1 - Y0) + jy)
        );
        if (state.pos[t.id]) {
          t._gx = state.pos[t.id][0];
          t._gy = state.pos[t.id][1];
        }
      });
    }

    function atualizarArestasDe(id) {
      document.querySelectorAll("#links line").forEach((l) => {
        const a = l.getAttribute("data-a"),
          b = l.getAttribute("data-b");
        if (a !== id && b !== id) return;
        const ta = term(a),
          tb = term(b);
        l.setAttribute("x1", ta._px + "%");
        l.setAttribute("y1", ta._py + "%");
        l.setAttribute("x2", tb._px + "%");
        l.setAttribute("y2", tb._py + "%");
      });
    }

    function attachDrag(n, t) {
      let sx = 0,
        sy = 0,
        moved = false;
      n.addEventListener("pointerdown", (e) => {
        if (e.button !== undefined && e.button !== 0) return;
        if (n.setPointerCapture && e.pointerId !== undefined) {
          try {
            n.setPointerCapture(e.pointerId);
          } catch (_) {}
        }
        sx = e.clientX;
        sy = e.clientY;
        moved = false;
        if (!state.active) n.classList.add("dragging");
      });
      n.addEventListener("pointermove", (e) => {
        if (!n.hasPointerCapture || !n.hasPointerCapture(e.pointerId)) return;
        if (state.active) return;
        if (!moved && Math.hypot(e.clientX - sx, e.clientY - sy) < 5) return;
        moved = true;
        const r = mapEl.getBoundingClientRect();
        t._gx = Math.max(4, Math.min(96, ((e.clientX - r.left) / r.width) * 100));
        t._gy = Math.max(5, Math.min(95, ((e.clientY - r.top) / r.height) * 100));
        n.style.transition = "none";
        n.style.left = t._gx + "%";
        n.style.top = t._gy + "%";
        t._px = t._gx;
        t._py = t._gy;
        atualizarArestasDe(t.id);
      });
      n.addEventListener("pointerup", (e) => {
        n.classList.remove("dragging");
        n.style.transition = "";
        if (n.releasePointerCapture && e.pointerId !== undefined) {
          try {
            n.releasePointerCapture(e.pointerId);
          } catch (_) {}
        }
        if (moved) {
          state.pos[t.id] = [+t._gx.toFixed(2), +t._gy.toFixed(2)];
        } else {
          if (state.active === t.id) clearFocus();
          else markVisit(t.id);
        }
      });
      n.addEventListener("pointercancel", () => {
        n.classList.remove("dragging");
        n.style.transition = "";
      });
      // Suporte a teclado (Enter / Espaço) para acessibilidade
      n.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          if (state.active === t.id) clearFocus();
          else markVisit(t.id);
        }
      });
    }

    function buildNodes() {
      TERMS.forEach((t) => {
        const n = document.createElement("div");
        n.className = "mm-node node";
        n.setAttribute("role", "button");
        n.setAttribute("tabindex", "0");
        n.setAttribute("aria-label", `${t.name} (${t.layer})`);
        n.style.setProperty("--c", t.c);
        n.innerHTML = `<span>${esc(t.name)}</span>`;
        n.title = t.name;
        attachDrag(n, t);
        mapEl.appendChild(n);
        NODE_EL[t.id] = n;
      });
    }

    function markVisit(id) {
      if (!emEscopo(id)) return;
      if (state.active && state.active !== id) history.push(state.active);
      if (!visited(id)) state.visited.push(id);
      state.active = id;
      updateAll();
    }

    function goBackTerm() {
      if (!history.length) return;
      const prev = history.pop();
      if (!emEscopo(prev)) {
        goBackTerm();
        return;
      }
      if (!visited(prev)) state.visited.push(prev);
      state.active = prev;
      updateAll();
    }

    function clearFocus() {
      if (state.active) history.push(state.active);
      state.active = null;
      updateAll();
    }

    function limpar() {
      state = { visited: [], active: null, pos: {} };
      history = [];
      updateAll();
    }

    function neighborhood(id) {
      const LIMITE = 6;
      const viz = (nid) => {
        const t = term(nid);
        const out = [];
        t.rel.forEach((r) => {
          if (term(r) && emEscopo(r)) out.push(r);
        });
        TERMS.forEach((x) => {
          if (x.rel.includes(nid) && x.id !== nid && emEscopo(x.id)) out.push(x.id);
        });
        return out;
      };
      const sats = [];
      const usados = new Set([id]);
      let fronteira = [id],
        grau = 0;
      while (sats.length < LIMITE && fronteira.length) {
        grau++;
        const prox = [];
        for (const f of fronteira) {
          for (const v of viz(f)) {
            if (usados.has(v)) continue;
            usados.add(v);
            prox.push(v);
            sats.push({ id: v, grau });
            if (sats.length >= LIMITE) break;
          }
          if (sats.length >= LIMITE) break;
        }
        fronteira = prox;
      }
      return sats;
    }

    function targetPositions() {
      layoutGrid();
      const pos = {};
      visiveis().forEach((t) => (pos[t.id] = [t._gx, t._gy]));
      if (!state.active) return pos;
      const at = term(state.active);
      pos[at.id] = [50, 52];
      const sats = neighborhood(at.id);
      const RX = 30,
        RY = 24;
      sats.forEach((sd, i) => {
        const a = (i / sats.length) * Math.PI * 2;
        const x = 50 + Math.cos(a) * RX,
          y = 52 + Math.sin(a) * RY;
        pos[sd.id] = [Math.max(7, Math.min(93, x)), Math.max(9, Math.min(91, y))];
      });
      return pos;
    }

    function redrawEdges(sats) {
      const svg = document.getElementById("links");
      if (!svg) return;
      svg.innerHTML = "";
      const at = state.active;
      if (at) {
        const c = term(at);
        (sats || neighborhood(at)).forEach((sd) => {
          const rt = term(sd.id);
          const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
          line.setAttribute("x1", c._px + "%");
          line.setAttribute("y1", c._py + "%");
          line.setAttribute("x2", rt._px + "%");
          line.setAttribute("y2", rt._py + "%");
          line.setAttribute("data-a", at);
          line.setAttribute("data-b", sd.id);
          line.setAttribute("stroke", "rgba(56, 189, 248, .95)");
          line.setAttribute("stroke-width", sd.grau === 1 ? "3" : "2");
          if (sd.grau === 2) line.setAttribute("stroke-dasharray", "7 6");
          svg.appendChild(line);
        });
      } else {
        const seen = new Set();
        const idx = {};
        TERMS.forEach((t, i) => (idx[t.id] = i));
        visiveis().forEach((t) => {
          t.rel.forEach((r) => {
            const rt = TERMS[idx[r]];
            if (!rt || !emEscopo(r)) return;
            const key = [t.id, r].sort().join("|");
            if (seen.has(key)) return;
            seen.add(key);
            const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
            svg.appendChild(line);
            line.setAttribute("x1", t._px + "%");
            line.setAttribute("y1", t._py + "%");
            line.setAttribute("x2", rt._px + "%");
            line.setAttribute("y2", rt._py + "%");
            line.setAttribute("data-a", t.id);
            line.setAttribute("data-b", r);
            line.setAttribute("stroke", "rgba(56, 189, 248, .22)");
            line.setAttribute("stroke-width", "1.3");
          });
        });
      }
      if (typeof window.requestAnimationFrame === "function") {
        window.requestAnimationFrame(() =>
          document.querySelectorAll("#links line").forEach((l) => l.classList.add("show"))
        );
      } else {
        document.querySelectorAll("#links line").forEach((l) => l.classList.add("show"));
      }
    }

    function applyLayout() {
      const pos = targetPositions();
      const at = state.active;
      const sats = at ? neighborhood(at) : [];
      const satIds = new Set(sats.map((x) => x.id));
      TERMS.forEach((t) => {
        const n = NODE_EL[t.id];
        if (!n) return;
        const vis = emEscopo(t.id);
        n.style.display = vis ? "" : "none";
        if (!vis) return;
        n.style.left = pos[t.id][0] + "%";
        n.style.top = pos[t.id][1] + "%";
        n.classList.toggle("active", at === t.id);
        n.setAttribute("aria-pressed", at === t.id ? "true" : "false");
        n.classList.toggle("related", !!at && satIds.has(t.id));
        n.classList.toggle("dim", !!at && at !== t.id && !satIds.has(t.id));
        n.classList.toggle("mastered", visited(t.id));
        t._px = pos[t.id][0];
        t._py = pos[t.id][1];
      });
      redrawEdges(sats);
    }

    function renderChips() {
      const searchEl = document.getElementById("searchTerm");
      const q = norm(searchEl ? searchEl.value : "");
      const box = document.getElementById("layers");
      if (!box) return;
      box.innerHTML = "";
      LAYERS.forEach((layer) => {
        const arr = visiveis().filter(
          (t) =>
            t.layer === layer &&
            (!q || norm(t.name).includes(q) || norm(t.en).includes(q) || norm(t.def).includes(q))
        );
        if (!arr.length) return;
        const div = document.createElement("div");
        div.className = "mm-layer layer";
        div.innerHTML = `<div class="mm-layer-title layerTitle" style="--lc:${layerColors[layer]}"><span>${esc(
          layer
        )}</span><span class="cnt" style="color:${layerColors[layer]}">${arr.length}</span></div>`;
        const list = document.createElement("div");
        list.className = "mm-term-list termList";
        arr.forEach((t) => {
          const b = document.createElement("button");
          b.type = "button";
          b.className =
            "mm-chip chip" +
            (state.active === t.id ? " active" : "") +
            (visited(t.id) ? " done" : "");
          b.style.setProperty("--c", t.c);
          b.setAttribute("aria-pressed", state.active === t.id ? "true" : "false");
          b.textContent = t.name;
          b.addEventListener("click", () => markVisit(t.id));
          list.appendChild(b);
        });
        div.appendChild(list);
        box.appendChild(div);
      });
    }

    function textoDefinicao(t) {
      if (nivelAtual !== "a" && NIVEIS[t.id]) return NIVEIS[t.id][NIVEL_MAPA[nivelAtual]];
      return VERBETES[t.id] ? VERBETES[t.id] : t.def;
    }

    function renderDetail() {
      const detailEl = document.getElementById("detail");
      if (!detailEl) return;

      if (!state.active) {
        detailEl.innerHTML = `
          <div class="head"><h3>Visão geral</h3><span class="en">mapa de estudo</span></div>
          <div class="tabContent">Clique em qualquer conceito para trazê-lo ao centro do mapa junto com seus conceitos relacionados. Arraste os nós para reposicioná-los. Clique no conceito central para voltar à visão geral.</div>`;
        return;
      }

      const t = term(state.active);
      const semVerbete = nivelAtual === "a" && !VERBETES[t.id];
      const gap = semVerbete
        ? '<span class="gapNote">Este termo não possui verbete no material de referência; a definição acima é a resumida do próprio mapa.</span>'
        : "";
      const defTexto = esc(textoDefinicao(t)) + gap;
      const relVisiveis = t.rel.filter((id) => term(id));
      const tabs = [
        ["def", "Definição", defTexto],
        ...(t.risco ? [["risco", "Risco na prática", `<span class="riskText">${esc(t.risco)}</span>`]] : []),
        [
          "rel",
          "Relações mais próximas",
          relVisiveis
            .map((id) => esc(term(id)?.name))
            .filter(Boolean)
            .join(" · ")
        ]
      ];

      const dictSlug = DICT_WORD_MAP[t.id];
      const hasDictOnPage = !!document.getElementById("consultar-palavras");
      const dictLinkHtml = dictSlug
        ? `<a href="${hasDictOnPage ? "" : "index.html"}#verbete-${esc(
            dictSlug
          )}" class="mm-flat flat mm-dict-link">Ver também nas 100 palavras do livro</a>`
        : "";

      detailEl.innerHTML = `
        <div class="head">
          <h3 style="color:${esc(t.c)}">${esc(t.name)}</h3>
          <span class="en">${esc(t.en)} · ${esc(t.layer)}</span>
          <div class="tabs" role="tablist" aria-label="Abas do conceito selecionado">${tabs
            .map(
              (x, i) =>
                `<button type="button" role="tab" aria-selected="${
                  i === 0 ? "true" : "false"
                }" class="tab ${i === 0 ? "active" : ""}" data-i="${i}" ${
                  x[0] === "risco" ? 'data-risk="1"' : ""
                }>${x[1]}</button>`
            )
            .join("")}</div>
        </div>
        <div class="tabContent" id="tabContent">${tabs[0][2]}</div>
        <div class="relBtns">
          ${relVisiveis
            .map(
              (id) =>
                `<button type="button" class="mm-flat flat js-mm-rel" data-rel-id="${esc(id)}" ${
                  emEscopo(id) ? "" : "disabled title='fora da abrangência atual'"
                }>${esc(term(id)?.name || id)}</button>`
            )
            .join("")}
          ${dictLinkHtml}
        </div>`;

      detailEl.querySelectorAll(".tab").forEach((tab) =>
        tab.addEventListener("click", () => {
          detailEl.querySelectorAll(".tab").forEach((x) => {
            x.classList.remove("active");
            x.setAttribute("aria-selected", "false");
          });
          tab.classList.add("active");
          tab.setAttribute("aria-selected", "true");
          const tc = document.getElementById("tabContent");
          if (tc) tc.innerHTML = tabs[+tab.dataset.i][2];
        })
      );

      detailEl.querySelectorAll(".js-mm-rel").forEach((btn) =>
        btn.addEventListener("click", () => {
          const relId = btn.getAttribute("data-rel-id");
          if (relId) markVisit(relId);
        })
      );
    }

    function sincronizarEscopoUI() {
      document.querySelectorAll("#escopoBtns .lvl").forEach((x) => {
        const isAct = x.dataset.e === escopoAtual;
        x.classList.toggle("active", isAct);
        x.setAttribute("aria-pressed", isAct ? "true" : "false");
      });
    }

    function renderTrilhas() {
      const box = document.getElementById("trilhaLista");
      if (!box) return;
      box.innerHTML = "";
      TRILHAS.forEach((tr, i) => {
        const b = document.createElement("button");
        b.type = "button";
        const isAct = !!(trilha && trilha.i === i);
        b.className = "mm-trilha trilha" + (isAct ? " active" : "");
        b.setAttribute("aria-pressed", isAct ? "true" : "false");
        b.textContent = tr.t;
        b.addEventListener("click", () => (isAct ? sairTrilha() : iniciarTrilha(i)));
        box.appendChild(b);
      });
      const ctl = document.getElementById("trilhaCtl");
      const info = document.getElementById("trilhaInfo");
      if (!ctl || !info) return;
      if (trilha) {
        ctl.style.display = "";
        info.textContent =
          TRILHAS[trilha.i].t + " · " + (trilha.p + 1) + "/" + TRILHAS[trilha.i].ids.length;
      } else {
        ctl.style.display = "none";
      }
    }

    function iniciarTrilha(i) {
      if (!trilha) trilha = { escopoAnterior: escopoAtual };
      trilha.i = i;
      trilha.p = 0;
      escopoAtual = "c";
      sincronizarEscopoUI();
      markVisit(TRILHAS[i].ids[0]);
    }

    function trilhaProx() {
      if (!trilha) return;
      const tr = TRILHAS[trilha.i];
      if (trilha.p < tr.ids.length - 1) {
        trilha.p++;
        markVisit(tr.ids[trilha.p]);
      } else if (trilha.i < TRILHAS.length - 1) {
        iniciarTrilha(trilha.i + 1);
      }
    }

    function trilhaAnt() {
      if (!trilha) return;
      if (trilha.p > 0) {
        trilha.p--;
        markVisit(TRILHAS[trilha.i].ids[trilha.p]);
      } else if (trilha.i > 0) {
        const ant = trilha.i - 1;
        trilha.i = ant;
        trilha.p = TRILHAS[ant].ids.length - 1;
        markVisit(TRILHAS[ant].ids[trilha.p]);
      }
    }

    function sairTrilha() {
      if (!trilha) return;
      escopoAtual = trilha.escopoAnterior;
      trilha = null;
      sincronizarEscopoUI();
      clearFocus();
    }

    function abrirAjuda() {
      const bg = document.getElementById("ajudaBg");
      if (!bg) return;
      bg.hidden = false;
      const closeBtn = bg.querySelector(".modal button");
      if (closeBtn) closeBtn.focus();
    }

    function fecharAjuda() {
      const bg = document.getElementById("ajudaBg");
      const btnAjuda = document.getElementById("btnAjuda");
      if (bg) bg.hidden = true;
      if (btnAjuda) btnAjuda.focus();
    }

    function updateAll() {
      renderChips();
      renderDetail();
      applyLayout();
      renderTrilhas();
      const btnVoltar = document.getElementById("btnVoltar");
      if (btnVoltar) btnVoltar.disabled = !history.length;
    }

    // Expõe funções globais caso atributos inline ou scripts externos as invoquem
    window.abrirAjuda = abrirAjuda;
    window.fecharAjuda = fecharAjuda;
    window.goBackTerm = goBackTerm;
    window.limpar = limpar;
    window.trilhaAnt = trilhaAnt;
    window.trilhaProx = trilhaProx;
    window.sairTrilha = sairTrilha;
    window.renderChips = renderChips;
    window.markVisit = markVisit;

    buildNodes();

    // Ligações de eventos dos botões principais
    const btnAjuda = document.getElementById("btnAjuda");
    if (btnAjuda) btnAjuda.addEventListener("click", abrirAjuda);

    const btnFecharAjuda = document.getElementById("btnFecharAjuda");
    if (btnFecharAjuda) btnFecharAjuda.addEventListener("click", fecharAjuda);

    const ajudaBg = document.getElementById("ajudaBg");
    if (ajudaBg) {
      ajudaBg.addEventListener("click", (e) => {
        if (e.target === ajudaBg) fecharAjuda();
      });
    }

    const btnVoltar = document.getElementById("btnVoltar");
    if (btnVoltar) btnVoltar.addEventListener("click", goBackTerm);

    const btnLimpar = document.getElementById("btnLimparMapa");
    if (btnLimpar) btnLimpar.addEventListener("click", limpar);

    const btnTrilhaAnt = document.getElementById("btnTrilhaAnt");
    if (btnTrilhaAnt) btnTrilhaAnt.addEventListener("click", trilhaAnt);

    const btnTrilhaProx = document.getElementById("btnTrilhaProx");
    if (btnTrilhaProx) btnTrilhaProx.addEventListener("click", trilhaProx);

    const btnSairTrilha = document.getElementById("btnSairTrilha");
    if (btnSairTrilha) btnSairTrilha.addEventListener("click", sairTrilha);

    const searchInput = document.getElementById("searchTerm");
    if (searchInput) searchInput.addEventListener("input", renderChips);

    document.querySelectorAll("#nivelBtns .lvl").forEach((b) => {
      b.addEventListener("click", () => {
        nivelAtual = b.dataset.n;
        document.querySelectorAll("#nivelBtns .lvl").forEach((x) => {
          const isAct = x === b;
          x.classList.toggle("active", isAct);
          x.setAttribute("aria-pressed", isAct ? "true" : "false");
        });
        renderDetail();
      });
    });

    document.querySelectorAll("#escopoBtns .lvl").forEach((b) => {
      b.addEventListener("click", () => {
        if (trilha) trilha = null;
        escopoAtual = b.dataset.e;
        sincronizarEscopoUI();
        if (state.active && !emEscopo(state.active)) state.active = null;
        updateAll();
      });
    });

    document.addEventListener("keydown", (e) => {
      const bg = document.getElementById("ajudaBg");
      if (bg && !bg.hidden) {
        if (e.key === "Escape") {
          e.preventDefault();
          fecharAjuda();
        }
        return;
      }
      const tag = e.target && e.target.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
      if (!trilha) return;
      if (e.key === "PageDown" || e.key === "ArrowRight") {
        e.preventDefault();
        trilhaProx();
      } else if (e.key === "PageUp" || e.key === "ArrowLeft") {
        e.preventDefault();
        trilhaAnt();
      } else if (e.key === "Escape") {
        e.preventDefault();
        sairTrilha();
      }
    });

    updateAll();
    window.addEventListener("resize", applyLayout);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initMindMap);
  } else {
    initMindMap();
  }
})();
