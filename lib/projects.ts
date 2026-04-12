export interface ProjectDoc {
  label: string;
  url: string;
}

export interface CaseStudy {
  contexto: string;
  objetivo: string;
  meuPapel: string;
  abordagem: string;
  ferramentas: string[];
  resultados: string;
  materiais: string;
}

export interface Project {
  slug: string;
  number: string;
  title: string;
  category: string;
  tags: string[];
  shortDescription: string;
  heroImage?: string;
  heroGradient?: string;
  gallery: string[];
  videos?: string[];
  caseStudy: CaseStudy;
  docs: ProjectDoc[];
  reverse?: boolean;
}

export const projects: Project[] = [
  {
    slug: "aecs-programacao-robotica",
    number: "01",
    title: "AECs Programação e Robótica",
    category: "Currículo · K-4",
    tags: ["Curriculum Design", "Escopo & Sequência", "Manual do Professor", "Pensamento Computacional"],
    shortDescription:
      "Currículo completo de programação e robótica para o 1.º ao 4.º ano — 4 planificações anuais, manual do professor e sub-projeto de robótica sustentável com artefactos reais.",
    heroImage: "/projects/aecs-classroom.jpg",
    gallery: [
      "/projects/aecs-classroom.jpg",
      "/projects/aecs-robotica-1.jpg",
      "/projects/aecs-robotica-2.jpg",
      "/projects/aecs-coding-1.jpg",
      "/projects/aecs-young-1.jpg",
      "/projects/aecs-young-2.jpg",
      "/projects/aecs-p1.jpg",
      "/projects/aecs-p2.jpg",
      "/projects/aecs-p3.jpg",
      "/projects/aecs-p4.jpg",
      "/projects/aecs-p5.jpg",
      "/projects/aecs-p6.jpg",
      "/projects/aecs-p7.jpg",
      "/projects/aecs-p8.jpg",
      "/projects/aecs-f1.jpg",
      "/projects/aecs-f2.jpg",
      "/projects/aecs-f3.jpg",
      "/projects/aecs-f4.jpg",
      "/projects/aecs-formacao-1.jpg",
      "/projects/aecs-formacao-2.jpg",
      "/projects/aecs-formacao-3.jpg",
      "/projects/aecs-formacao-4.jpg",
      "/projects/aecs-formacao-5.jpg",
      "/projects/aecs-formacao-6.jpg",
      "/projects/aecs-formacao-7.jpg",
      "/projects/aecs-formacao-8.jpg",
    ],
    videos: [
      "/projects/aecs-video-1.mp4",
      "/projects/aecs-video-2.mp4",
      "/projects/aecs-video-3.mp4",
      "/projects/aecs-video-4.mp4",
      "/projects/aecs-video-5.mp4",
      "/projects/aecs-video-6.mp4",
    ],
    caseStudy: {
      contexto:
        "As Atividades de Enriquecimento Curricular (AECs) de Programação e Robótica foram implementadas em escolas do 1.º ciclo do Ensino Básico, integrando o pensamento computacional nos currículos do 1.º ao 4.º ano de escolaridade. O projeto surge da necessidade de introduzir competências digitais transversais desde os primeiros anos de escolaridade, de forma progressiva e pedagogicamente fundamentada.",
      objetivo:
        "Desenvolver competências de pensamento computacional, literacia digital e criatividade tecnológica em crianças dos 6 aos 10 anos, através de metodologias ativas que articulam programação desplugada, Scratch e robótica educativa. Garantir uma progressão curricular coerente ao longo dos 4 anos de escolaridade.",
      meuPapel:
        "Assumi o design instrucional completo do programa — desde a análise de necessidades até à produção de todos os materiais pedagógicos. Elaborei as planificações anuais para cada ano de escolaridade, o manual do professor com orientações metodológicas, o guia prático de Scratch e as fichas de trabalho para cada sessão. Coordenei também o sub-projeto de Robótica Sustentável, onde os alunos criaram artefactos físicos a partir de materiais reciclados.",
      abordagem:
        "O currículo foi estruturado em espiral: cada ano de escolaridade retoma e aprofunda os conceitos do ano anterior. A sequência pedagógica parte de atividades desplugadas (sem computador), passa pela programação visual com Scratch e culmina na robótica física. A diferenciação pedagógica foi garantida através de materiais adaptados por nível, e o projeto de Robótica Sustentável aplicou a metodologia de Aprendizagem Baseada em Projetos (PBL).",
      ferramentas: ["Scratch", "mBot", "Cubetto (K-1)", "Micro:bit", "Atividades desplugadas", "Materiais reciclados"],
      resultados:
        "Quatro planificações anuais completas implementadas com sucesso. O sub-projeto de Robótica Sustentável resultou em artefactos físicos criados pelos alunos, apresentados em exposição final. Os professores relataram aumento do envolvimento dos alunos nas aulas e desenvolvimento de competências de resolução de problemas transversais a outras disciplinas.",
      materiais:
        "4 planificações anuais (1.º ao 4.º ano), Manual do Professor com orientações metodológicas, Guia Prático de Scratch, fichas de trabalho por sessão e materiais do projeto Robótica Sustentável.",
    },
    docs: [
      { label: "Planificação 1.º Ano", url: "/docs/aecs-ano1.pdf" },
      { label: "Planificação 2.º Ano", url: "/docs/aecs-ano2.pdf" },
      { label: "Planificação 3.º Ano", url: "/docs/aecs-ano3.pdf" },
      { label: "Planificação 4.º Ano", url: "/docs/aecs-ano4.pdf" },
    ],
    reverse: false,
  },
  {
    slug: "clube-robotica",
    number: "02",
    title: "Clube de Robótica",
    category: "PBL · STEM",
    tags: ["Project-Based Learning", "Robótica Competitiva", "STEM", "Fabricação Digital"],
    shortDescription:
      "Clube de robótica sumo para jovens dos 13 aos 18 anos — 17 sessões, arena personalizada em DXF, robots impressos em 3D e uma DemoDay final com júri externo.",
    heroImage: "/projects/clube-robotica-1.jpg",
    heroGradient: "linear-gradient(135deg, #0D0D20 0%, #161030 60%, #0D1828 100%)",
    gallery: ["/projects/clube-robotica-1.jpg"],
    caseStudy: {
      contexto:
        "O Clube de Robótica CCD foi criado como atividade extra-curricular no Centro de Cultura Digital (CCD) para jovens dos 13 aos 18 anos. O projeto centrou-se na robótica de sumo competitiva — uma modalidade que combina engenharia, programação e estratégia. O clube funcionou durante um ano letivo completo, com 17 sessões estruturadas que culminaram numa DemoDay com júri externo.",
      objetivo:
        "Desenvolver competências de engenharia, programação, trabalho em equipa e pensamento estratégico através da construção e programação de robots de sumo. Criar uma experiência de aprendizagem autêntica orientada para um objetivo real: a competição final.",
      meuPapel:
        "Fui responsável pelo design instrucional completo do programa — estrutura das 17 sessões, criação de todos os materiais pedagógicos, especificações técnicas da arena de competição e organização da DemoDay. Concebi o Manual Pedagógico e coordenei a produção dos ficheiros STL para impressão 3D do robot oficial.",
      abordagem:
        "O programa seguiu a metodologia de Aprendizagem Baseada em Projetos (PBL): cada equipa concebeu, construiu e programou o seu próprio robot sumo ao longo das sessões. As primeiras sessões introduziram conceitos fundamentais de robótica e eletrónica; as seguintes focaram-se na construção e programação; as últimas dedicaram-se a testes, iteração e preparação para a competição final.",
      ferramentas: ["Arduino", "Impressão 3D (FDM)", "Ficheiros STL personalizados", "C++", "AutoCAD (DXF)", "Ferramentas de prototipagem"],
      resultados:
        "17 sessões realizadas com sucesso. DemoDay final com júri externo e premiação. Robot oficial com 11 peças impressas em 3D. Arena de competição com especificações técnicas originais. Regulamento oficial publicado e adotado. Os participantes desenvolveram competências técnicas mensuráveis em programação e fabricação digital.",
      materiais:
        "Manual Pedagógico completo, slides das 4 sessões principais, fichas de trabalho (hardware e software), regulamento oficial da arena sumo, ficheiros STL do robot oficial CDI, ficheiros DXF da arena.",
    },
    docs: [],
    reverse: true,
  },
  {
    slug: "vibecoding",
    number: "03",
    title: "VibeCoding — Cria o teu Jogo",
    category: "Workshop · IA",
    tags: ["Inteligência Artificial", "Game-Based Learning", "Facilitação", "Criatividade Digital"],
    shortDescription:
      "Workshop de criação de jogos com IA — sessão de 2h30 usando Gemini e CodePen, com guião do facilitador e ficha do participante desenhados do zero.",
    heroImage: "/projects/vibecoding-1.jpg",
    heroGradient: "linear-gradient(135deg, #0A1A18 0%, #0D2420 60%, #0A1A10 100%)",
    gallery: ["/projects/vibecoding-1.jpg"],
    caseStudy: {
      contexto:
        "O VibeCoding foi desenvolvido como workshop autónomo e replicável para jovens dos 15 aos 18 anos, em contexto não-formal. A premissa foi simples: qualquer jovem, sem experiência prévia de programação, pode criar o seu próprio jogo digital em 2h30 utilizando ferramentas de IA generativa como co-piloto. O workshop surgiu da necessidade de tornar a criação tecnológica acessível e imediata.",
      objetivo:
        "Capacitar jovens a criar, publicar e partilhar um jogo digital próprio numa única sessão, utilizando IA como ferramenta de amplificação criativa. Desmistificar a programação e criar uma experiência de sucesso imediata que motive a exploração tecnológica contínua.",
      meuPapel:
        "Concebi o workshop de raiz — desde o design da experiência de aprendizagem até à produção de todos os materiais. Desenvolvi o guião completo do facilitador (com timings, pontos de atenção e variações), a ficha do participante e o fluxo de prompts de IA. Realizei sessões piloto para testar e iterar o design.",
      abordagem:
        "O workshop segue uma estrutura de scaffolding progressivo: começa com um jogo-modelo simples, e cada participante vai personalizando e expandindo com apoio da IA. A sequência é: explorar → modificar → criar → partilhar. O Gemini funciona como par de programação, respondendo a pedidos em linguagem natural e gerando código HTML/CSS/JS que o participante publica imediatamente no CodePen.",
      ferramentas: ["Gemini (Google AI)", "CodePen", "HTML/CSS/JavaScript", "Prompt engineering básico"],
      resultados:
        "Workshop testado e validado com múltiplos grupos. Taxa de conclusão de 100% — todos os participantes terminam o workshop com um jogo publicado. Materiais completos e prontos a ser utilizados por qualquer facilitador com formação mínima.",
      materiais:
        "Guião completo do facilitador (com timings e notas de facilitação), ficha do participante, apresentação de slides da sessão, biblioteca de prompts de IA.",
    },
    docs: [],
    reverse: false,
  },
  {
    slug: "atividades-tecnologicas",
    number: "04",
    title: "Atividades Tecnológicas",
    category: "Maker Education",
    tags: ["Maker Education", "Computação Física", "Design de Atividades", "STEM"],
    shortDescription:
      "Série de atividades maker realizadas no CICF e CCDV — Rabbot de Páscoa, mBot com IA climática, robô de equilíbrio, pulseira binária e Makey Makey musical.",
    heroGradient: "linear-gradient(135deg, #FEF3C7 0%, #FDE68A 50%, #F59E0B 100%)",
    gallery: [],
    caseStudy: {
      contexto:
        "As Atividades Tecnológicas são uma série de experiências maker concebidas para os Centros de Cultura Digital — CICF (Centro de Inovação e Criatividade de Famalicão) e CCDV (Centro de Cultura Digital de Valongo). Cada atividade é autónoma e adaptada a diferentes públicos e contextos, desde workshops pontuais a ciclos de sessões temáticas.",
      objetivo:
        "Promover literacia tecnológica, criatividade e pensamento computacional através de experiências hands-on com tecnologia física. Criar atividades que sejam simultaneamente educativas, lúdicas e replicáveis por outros facilitadores.",
      meuPapel:
        "Concebi, testei e documentei cada atividade da série. Isto incluiu o design da experiência de aprendizagem, a criação dos materiais para participantes (fichas, guiões), a preparação técnica de todos os materiais físicos e a facilitação das sessões.",
      abordagem:
        "Cada atividade segue os princípios da Maker Education: aprender pela construção, experimentação e partilha. As atividades foram desenhadas para um ciclo de exploração → construção → teste → apresentação, com diferentes pontos de entrada dependendo do nível de experiência dos participantes.",
      ferramentas: ["mBot", "Arduino", "Micro:bit", "Makey Makey", "Materiais reciclados", "Impressão 3D", "Scratch"],
      resultados:
        "Múltiplas edições de cada atividade realizadas com sucesso em diferentes centros. Materiais documentados e reutilizados por outros facilitadores. Participantes de todas as idades (desde K-1 a adultos) com experiências de sucesso documentadas.",
      materiais:
        "Fichas de atividade individuais (Balancing Robots, Pulseira de Código Binário, Makey Makey - Festa no Céu), guiões de facilitação, listas de materiais necessários.",
    },
    docs: [
      { label: "Atividade: Balancing Robots", url: "/docs/maker-balancing-robots.pdf" },
      { label: "Atividade: Pulseira Binária", url: "/docs/maker-pulseira-binaria.pdf" },
      { label: "Atividade: Makey Makey", url: "/docs/maker-makey-makey.pdf" },
      { label: "Atividade: Robo Copo", url: "/docs/maker-robocopo.pdf" },
      { label: "Atividade: Salve o Fred", url: "/docs/maker-salve-fred.pdf" },
    ],
    reverse: true,
  },
  {
    slug: "radio-ccd",
    number: "05",
    title: "Rádio CCD",
    category: "Workshop · Produção Áudio",
    tags: ["Literacia Mediática", "Produção de Áudio", "Expressão Criativa", "Workshop Design"],
    shortDescription:
      "Workshop de rádio usando Mixxx e RodeCaster Pro — os jovens aprendem a conceber, produzir e emitir o seu próprio programa ao vivo, do conceito ao ar.",
    heroImage: "/projects/radio-ccd-1.jpg",
    heroGradient: "linear-gradient(135deg, #0D0818 0%, #1A0A28 60%, #0A0818 100%)",
    gallery: [
      "/projects/radio-ccd-1.jpg",
      "/projects/radio-ccd-2.jpg",
      "/projects/radio-ccd-3.jpg",
      "/projects/radio-ccd-4.jpg",
      "/projects/radio-ccd-5.jpg",
      "/projects/radio-ccd-6.jpg",
      "/projects/radio-ccd-7.jpg",
      "/projects/radio-ccd-8.jpg",
      "/projects/radio-ccd-9.jpg",
    ],
    caseStudy: {
      contexto:
        "O Workshop de Rádio CCD nasceu da vontade de explorar a comunicação audio como forma de literacia mediática e expressão criativa para jovens. Utilizando equipamento profissional — RodeCaster Pro e o software Mixxx — os participantes percorrem todo o processo de produção radiofónica, desde a concepção do programa até à emissão em direto.",
      objetivo:
        "Capacitar jovens para a produção radiofónica completa: escrita de guiões, locuução, edição de áudio e emissão em direto. Desenvolver competências de comunicação, literacia mediática e expressão oral através de uma experiência autêntica de produção media.",
      meuPapel:
        "Concebi e facilitei o workshop, criando os materiais de suporte técnico (tutorial Mixxx) e pedagógico (apresentações temáticas). Estruturei o percurso de aprendizagem desde a teoria radiofónica básica até à emissão em direto, garantindo que todos os participantes contribuíam para o programa final.",
      abordagem:
        "O workshop segue uma estrutura de imersão progressiva: da teoria à prática em sessão única. Começa com uma introdução ao mundo da rádio (história, formatos, linguagem radiofónica), passa pela exploração técnica do equipamento e culmina na produção e emissão de um programa real. O formato de Rádio Teatro permite que participantes com diferentes competências contribuam de forma significativa.",
      ferramentas: ["Mixxx (software de rádio livre)", "RodeCaster Pro", "Microfones profissionais", "Mesa de mistura de áudio"],
      resultados:
        "Jovens produzem e emitem programas de rádio ao vivo. Desenvolvimento de competências de comunicação oral, trabalho em equipa e literacia mediática. Materiais técnicos (tutorial Mixxx) reutilizáveis em contextos similares.",
      materiais:
        "Tutorial completo do Mixxx, apresentação 'O que é a Rádio?', materiais de Rádio Teatro, guião-modelo para programa de rádio.",
    },
    docs: [],
    reverse: false,
  },
  {
    slug: "coderdojo",
    number: "06",
    title: "CoderDojo",
    category: "Aprendizagem Não-Formal",
    tags: ["Comunidade", "Programação", "Micro:bit", "Peer Learning"],
    shortDescription:
      "Clube comunitário de programação com 17+ sessões documentadas. Liderado por voluntários, orientado por projetos, com evidência real de progressão dos participantes.",
    heroImage: "/projects/coderdojo-1.jpg",
    gallery: [
      "/projects/coderdojo-1.jpg",
      "/projects/coderdojo-2.jpg",
      "/projects/coderdojo-3.jpg",
    ],
    videos: [
      "/projects/coderdojo-video-1.mp4",
      "/projects/coderdojo-video-2.mp4",
      "/projects/coderdojo-video-3.mp4",
      "/projects/coderdojo-video-4.mp4",
    ],
    caseStudy: {
      contexto:
        "O CoderDojo é um movimento global de clubes de programação gratuitos para jovens, baseado em voluntariado e aprendizagem entre pares. A implementação deste CoderDojo decorreu ao longo de dois anos letivos, com 17 sessões documentadas, num espaço de aprendizagem informal que acolheu jovens de diferentes idades e níveis de experiência.",
      objetivo:
        "Criar um espaço inclusivo, gratuito e não-avaliativo de aprendizagem de programação para jovens. Fomentar a autonomia, a criatividade e o espírito de comunidade através de projetos auto-dirigidos com suporte de mentores.",
      meuPapel:
        "Atuei como co-facilitadora e mentora — estruturei as sessões, apoiei tecnicamente os participantes nos seus projetos individuais e documentei o processo de aprendizagem ao longo do tempo. Geri a progressão de cada participante e adaptei os recursos às necessidades emergentes do grupo.",
      abordagem:
        "O modelo CoderDojo assenta no peer learning e na aprendizagem auto-dirigida: cada participante trabalha no seu próprio projeto ao ritmo que lhe é mais adequado, com suporte de mentores quando necessário. As sessões têm estrutura livre com momentos de partilha e apresentação de projetos. A progressão é visível e documentada em vídeo.",
      ferramentas: ["Scratch", "Micro:bit", "Python", "HTML/CSS", "CDI Portugal", "Recursos CoderDojo globais"],
      resultados:
        "17+ sessões realizadas com participação consistente. Progressão documentada em vídeo (sessões 3, 5 e 17 gravadas). Participantes com projetos de complexidade crescente ao longo do tempo. Comunidade de aprendizagem sustentável e automotivada.",
      materiais:
        "Recursos de sessão adaptados, fichas de atividade por tecnologia, vídeos documentais de 3 sessões (evidência de progressão).",
    },
    docs: [],
    reverse: true,
  },
  {
    slug: "campo-ferias-tokmexer",
    number: "07",
    title: "Campo de Férias Tokmexer",
    category: "L&D · Projeto de Cliente",
    tags: ["Learning & Development", "Design de Proposta", "IA na Educação", "Projeto Corporativo"],
    shortDescription:
      "Campo de férias tecnológico e de IA — proposta completa e materiais de aprendizagem concebidos e entregues para cliente com requisitos de impacto mensuráveis.",
    heroGradient: "linear-gradient(135deg, #081018 0%, #0D1828 60%, #081018 100%)",
    gallery: [],
    caseStudy: {
      contexto:
        "O Campo de Férias foi desenvolvido como projeto de L&D (Learning & Development) para um cliente corporativo, com o objetivo de criar uma experiência de aprendizagem tecnológica para jovens durante o período de férias. O projeto incluiu a elaboração de uma proposta pedagógica completa e a produção de todos os materiais necessários para a implementação.",
      objetivo:
        "Conceber uma experiência de aprendizagem tecnológica imersiva de múltiplos dias para jovens, integrando atividades de inteligência artificial, robótica e criatividade digital. Entregar uma proposta com objetivos de aprendizagem mensuráveis e materiais prontos a implementar.",
      meuPapel:
        "Fui responsável pelo design instrucional completo — desde a análise de necessidades do cliente até à produção final de todos os materiais. Elaborei a proposta pedagógica, defini os objetivos de aprendizagem, estruturei o programa dia a dia e produzi todos os materiais de suporte para facilitadores e participantes.",
      abordagem:
        "O programa foi desenhado como uma experiência de imersão tecnológica progressiva: cada dia introduz novas tecnologias e conceitos, construindo sobre os do dia anterior. A metodologia combina exploração guiada, desafios em equipa e projetos individuais. As atividades de IA foram adaptadas para serem acessíveis a jovens sem experiência técnica prévia.",
      ferramentas: ["Ferramentas de IA (Gemini, ChatGPT)", "mBot", "Scratch", "Makey Makey", "Cartões de prompt de IA"],
      resultados:
        "Proposta completa entregue e aprovada pelo cliente. Materiais prontos a implementar, incluindo guiões de facilitação, cartões de prompt de IA e plano detalhado de cada sessão. Projeto referenciável como exemplo de L&D tecnológico para jovens em contexto corporativo.",
      materiais:
        "Proposta pedagógica completa, plano de sessões dia a dia, cartões de prompt de IA, materiais de facilitação.",
    },
    docs: [
      { label: "Proposta do Campo de Férias", url: "/docs/campo-ferias-proposta.pdf" },
    ],
    reverse: false,
  },
  {
    slug: "literacia-digital-senior",
    number: "08",
    title: "Literacia Digital Sénior",
    category: "Aprendizagem de Adultos",
    tags: ["Design Inclusivo", "Literacia Digital", "Acessibilidade", "Aprendizagem ao Longo da Vida"],
    shortDescription:
      "Programa de literacia digital para seniores em 6 sessões (2024–2025) — concebido para baixa fluência digital, com progressão desde o básico até à criação de vídeo.",
    heroImage: "/projects/seniores-1.jpg",
    gallery: [
      "/projects/seniores-1.jpg",
      "/projects/seniores-2.jpg",
      "/projects/seniores-3.jpg",
      "/projects/seniores-4.jpg",
      "/projects/seniores-wa1.jpg",
      "/projects/seniores-wa2.jpg",
      "/projects/seniores-wa3.jpg",
      "/projects/seniores-wa4.jpg",
      "/projects/seniores-wa5.jpg",
      "/projects/seniores-wa6.jpg",
      "/projects/seniores-wa7.jpg",
    ],
    caseStudy: {
      contexto:
        "O programa de Literacia Digital Sénior foi desenvolvido e implementado no Centro de Cidadania Digital de Valongo, ao longo de 6 sessões distribuídas pelos anos de 2024 e 2025. O público-alvo eram cidadãos seniores com baixa ou nenhuma fluência digital, muitos dos quais nunca tinham utilizado um smartphone de forma autónoma.",
      objetivo:
        "Desenvolver competências digitais básicas a intermédias em cidadãos seniores, com foco na utilização autónoma e confiante do smartphone para comunicação, acesso à informação e expressão criativa. Garantir que nenhum participante ficava para trás, independentemente do ponto de partida.",
      meuPapel:
        "Fui responsável pelo design instrucional completo e pela facilitação de todas as sessões. Criei todos os materiais pedagógicos adaptados ao público sénior — com fontes grandes, linguagem simples, muitas imagens e passo-a-passo detalhado. Geri o ritmo de cada sessão com atenção às necessidades individuais do grupo.",
      abordagem:
        "O design instrucional para este público exigiu princípios específicos de acessibilidade e design inclusivo: progressão muito gradual, repetição intencional de conceitos-chave, materiais visuais simplificados e um ambiente psicologicamente seguro onde o erro é normalizado. Cada sessão começou com revisão da sessão anterior e terminou com uma tarefa prática de aplicação autónoma.",
      ferramentas: ["Smartphone (Android/iOS)", "Aplicações de comunicação", "Fotografia móvel", "Edição de vídeo básica", "Ferramentas de comunicação digital"],
      resultados:
        "6 sessões completadas com participação consistente e crescente. Participantes com competências autónomas de comunicação digital, fotografia e criação de vídeo com telemóvel. Impacto mensurável na autonomia digital e na redução do isolamento social através da tecnologia.",
      materiais:
        "6 apresentações de sessão (2024 e 2025), guia de fotografia e vídeo para seniores, roteiro para criação de vídeos, materiais de apoio step-by-step.",
    },
    docs: [],
    reverse: true,
  },
  {
    slug: "ingaming",
    number: "09",
    title: "InGaming Vai às Escolas",
    category: "EdTech · Publicação",
    tags: ["Game-Based Learning", "Design Editorial", "Estratégia de Conteúdo", "Recursos para Professores"],
    shortDescription:
      "Programa nacional de educação pelo jogo com ebooks para professores e pais — estratégia instrucional e design de conteúdo para rollout em escolas de todo o país.",
    heroImage: "/projects/ingaming-1.jpg",
    gallery: [
      "/projects/ingaming-1.jpg",
      "/projects/ingaming-2.jpg",
      "/projects/ingaming-3.jpg",
      "/projects/ingaming-4.jpg",
      "/projects/ingaming-5.jpg",
      "/projects/ingaming-6.jpg",
      "/projects/ingaming-7.jpg",
      "/projects/ingaming-8.jpg",
      "/projects/ingaming-9.jpg",
      "/projects/ingaming-10.jpg",
      "/projects/ingaming-11.jpg",
      "/projects/ingaming-12.jpg",
      "/projects/ingaming-13.jpg",
      "/projects/ingaming-14.jpg",
      "/projects/ingaming-15.jpg",
      "/projects/ingaming-16.jpg",
      "/projects/ingaming-17.jpg",
      "/projects/ingaming-18.jpg",
      "/projects/ingaming-19.jpg",
      "/projects/ingaming-20.jpg",
      "/projects/ingaming-21.jpg",
      "/projects/ingaming-22.jpg",
      "/projects/ingaming-23.jpg",
      "/projects/ingaming-24.jpg",
      "/projects/ingaming-25.jpg",
      "/projects/ingaming-26.jpg",
      "/projects/ingaming-27.jpg",
      "/projects/ingaming-28.jpg",
      "/projects/ingaming-29.jpg",
      "/projects/ingaming-30.jpg",
      "/projects/ingaming-31.jpg",
    ],
    caseStudy: {
      contexto:
        "O InGaming Vai às Escolas é um programa nacional que visa integrar o jogo — digital e analógico — como ferramenta pedagógica nas escolas portuguesas. O projeto exigiu a criação de recursos específicos para dois públicos distintos: professores (que precisavam de fundamentação pedagógica e estratégias práticas) e encarregados de educação (que precisavam de compreender o valor educativo do jogo).",
      objetivo:
        "Criar recursos instrucionais de alta qualidade que capacitem professores a utilizar o jogo como ferramenta pedagógica e que ajudem os encarregados de educação a valorizar e apoiar o jogo dos seus filhos em contexto escolar. Desenvolver uma estratégia de conteúdo escalável para rollout nacional.",
      meuPapel:
        "Fui responsável pelo design instrucional e pela produção de conteúdo dos dois ebooks — para professores e para encarregados de educação. Desenvolvi a estratégia de conteúdo, estruturei a narrativa de cada publicação, produzi os textos e coordenei o design editorial. Criei também a apresentação interativa para o 2.º Ciclo.",
      abordagem:
        "O design instrucional dos ebooks seguiu uma abordagem centrada no utilizador: cada publicação foi concebida a partir das dúvidas, resistências e necessidades reais de cada público. O ebook de professores equilibra fundamentação teórica com estratégias práticas e exemplos concretos. O ebook de encarregados de educação usa linguagem acessível e argumentação baseada em evidência científica.",
      ferramentas: ["Design editorial", "Produção de ebooks", "Apresentações interativas", "Pesquisa em game-based learning"],
      resultados:
        "Dois ebooks publicados e distribuídos a nível nacional. Programa implementado em escolas com feedback positivo de professores. Os materiais são referenciados como recursos de qualidade no ecossistema EdTech português.",
      materiais:
        "Ebook para Professores, Ebook para Encarregados de Educação, Apresentação interativa para 2.º Ciclo.",
    },
    docs: [
      { label: "Ebook para Professores", url: "/docs/ingaming-ebook-professores.pdf" },
      { label: "Ebook para Encarregados de Educação", url: "/docs/ingaming-ebook-ee.pdf" },
    ],
    reverse: false,
  },
  {
    slug: "apps-for-good",
    number: "10",
    title: "Apps for Good",
    category: "Coding · Impacto Social",
    tags: ["Apps for Good", "Design Thinking", "Impacto Social", "Premiação Nacional"],
    shortDescription:
      "Programa de programação com impacto social — a equipa venceu o Prémio de Mérito 'Melhor Trabalho' 2023/2024, com apresentação em palco e reconhecimento regional.",
    heroImage: "/projects/apps-for-good-stage.jpg",
    gallery: [
      "/projects/apps-for-good-stage.jpg",
      "/projects/apps-for-good-award.jpg",
      "/projects/apps-for-good-group.jpg",
      "/projects/apps-good-audience.jpg",
      "/projects/apps-good-award2.jpg",
    ],
    caseStudy: {
      contexto:
        "O Apps for Good é um programa internacional de educação tecnológica com impacto social, onde equipas de jovens identificam um problema real na sua comunidade e desenvolvem uma aplicação digital como solução. A participação neste programa culminou com a vitória do Prémio de Mérito 'Melhor Trabalho' 2023/2024 na cerimónia regional de Valongo.",
      objetivo:
        "Acompanhar e capacitar uma equipa de jovens no processo completo de desenvolvimento de uma aplicação com impacto social — desde a identificação do problema até à apresentação pública perante júri. Desenvolver competências de Design Thinking, programação e comunicação.",
      meuPapel:
        "Atuei como mentora e facilitadora do processo — guiei a equipa na metodologia Design Thinking, apoiei o desenvolvimento técnico da solução (BOB, um chatbot de apoio ao estudo), preparei a equipa para a apresentação pública e coordenei a participação no processo de candidatura e avaliação do Apps for Good.",
      abordagem:
        "O processo seguiu a metodologia Design Thinking integrada com desenvolvimento ágil: investigar → definir → idear → prototipar → testar → apresentar. A equipa realizou pesquisa com utilizadores reais, iterou o protótipo com base em feedback e preparou uma apresentação pública de impacto. A IA foi utilizada como ferramenta de desenvolvimento.",
      ferramentas: ["Design Thinking", "Scratch/Programação", "Gemini/IA", "Pesquisa com utilizadores", "Prototipagem rápida"],
      resultados:
        "Prémio de Mérito 'Melhor Trabalho' 2023/2024 — reconhecimento máximo na categoria. Apresentação em palco perante júri externo e audiência alargada. BOB — chatbot de apoio ao estudo — desenvolvido e apresentado com sucesso. Equipa com competências sólidas de apresentação pública e desenvolvimento de produto.",
      materiais:
        "Protótipo funcional do BOB (chatbot), apresentação do projeto para júri, documentação do processo de Design Thinking.",
    },
    docs: [],
    reverse: true,
  },
  {
    slug: "laboratorio-educacao-digital",
    number: "11",
    title: "Laboratório de Educação Digital",
    category: "Currículo · DGE",
    tags: ["Cenários de Aprendizagem", "STEM", "Micro:bit", "Direção-Geral de Educação"],
    shortDescription:
      "Cenários de aprendizagem STEM para o 2.º e 3.º ciclo, desenvolvidos em parceria com a Direção-Geral de Educação — robótica, micro:bit e sustentabilidade integrados no currículo formal.",
    heroImage: "/projects/led-1.jpg",
    gallery: [
      "/projects/led-1.jpg",
      "/projects/led-2.jpg",
      "/projects/led-3.jpg",
      "/projects/led-4.jpg",
      "/projects/led-5.jpg",
      "/projects/led-6.jpg",
      "/projects/led-7.jpg",
      "/projects/led-8.jpg",
    ],
    videos: [
      "/projects/led-video-1.mp4",
      "/projects/led-video-2.mp4",
      "/projects/led-video-3.mp4",
      "/projects/led-video-4.mp4",
      "/projects/led-video-5.mp4",
      "/projects/led-video-6.mp4",
    ],
    caseStudy: {
      contexto:
        "O Laboratório de Educação Digital (LED) é um projeto desenvolvido pelo CDI Portugal em parceria com a Direção-Geral de Educação (DGE), com o objetivo de criar recursos pedagógicos de qualidade para integração do STEM no currículo formal do 2.º e 3.º ciclo do Ensino Básico. Os cenários de aprendizagem foram concebidos para serem utilizados por professores em sala de aula, articulando programação, robótica e computação física com as metas curriculares existentes.",
      objetivo:
        "Criar cenários de aprendizagem STEM prontos a implementar, que integrem robótica educativa e computação física (Micro:bit) nas áreas curriculares do 2.º e 3.º ciclo. Desenvolver materiais de qualidade homologável que permitam a qualquer professor, independentemente da experiência tecnológica, implementar atividades de pensamento computacional na sua turma.",
      meuPapel:
        "Fui responsável pelo design instrucional e produção dos cenários de aprendizagem — desde a análise das metas curriculares até à produção dos materiais finais. Concebi a estrutura pedagógica de cada cenário, defini os objetivos de aprendizagem alinhados ao currículo, desenvolvi os guiões para professores e alunos, e coordenei a validação dos materiais com docentes em contexto real.",
      abordagem:
        "Cada cenário foi desenhado segundo o modelo de Aprendizagem Baseada em Projetos (PBL) com articulação curricular explícita: cada atividade mapeia competências do Perfil dos Alunos à Saída da Escolaridade Obrigatória e identifica as disciplinas e metas curriculares a que se articula. Os cenários integram uma narrativa motivadora, desafios progressivos e materiais de apoio diferenciados para professor e aluno.",
      ferramentas: ["Micro:bit", "MakeCode", "Robótica educativa", "Materiais de circuitos", "Documentação curricular DGE"],
      resultados:
        "5 documentos pedagógicos produzidos e validados: 4 cenários de aprendizagem STEM e 1 guião técnico de programação e montagem de circuitos. Materiais desenvolvidos com qualidade de referência nacional, em parceria formal com a Direção-Geral de Educação. Prontos para disseminação e formação de professores a nível nacional.",
      materiais:
        "Guião de Programação e Montagem de Circuito (CDI Portugal), Cenário STEM — Eco Caixote do Lixo (9.º/10.º ano), Cenário Robótica — Robô controlado por gestos (9.º ano), Cenário Casas Sustentáveis com Micro:bit (8.º ano), Guião de apoio — Casas Sustentáveis.",
    },
    docs: [
      { label: "Guião: Programação e Montagem de Circuito", url: "/docs/led-guiao-circuito.pdf" },
      { label: "Cenário STEM: Eco Caixote do Lixo", url: "/docs/led-cenario-eco-caixote.pdf" },
      { label: "Cenário: Robô Controlado por Gestos", url: "/docs/led-cenario-robo-gestos.pdf" },
      { label: "Cenário: Casas Sustentáveis (Micro:bit)", url: "/docs/led-cenario-casas-sustentaveis.pdf" },
      { label: "Guião de Apoio: Casas Sustentáveis", url: "/docs/led-guiao-casas-sustentaveis.pdf" },
    ],
    reverse: false,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return projects.map((p) => p.slug);
}
