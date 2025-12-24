export const siteConfig = {
  header: {
    logo: {
      letter: "A", // Initial of "Advogancio"
      text: "Advogacio", // Shortened name for brand identity
      letterBgColor: "indigo-800", // Professional brand color
      letterTextColor: "white",
    },
    navigation: {
      items: [
        {
          label: "Início",
          href: "#inicio",
        },
        {
          label: "Serviços",
          href: "#servicos",
        },
        {
          label: "Sobre",
          href: "#sobre",
        },
        {
          label: "Contato",
          href: "#contato",
        },
      ],
    },
  },
  hero: {
    badge: "Advocacia Especializada",
    title: {
      line1: "Advogancio Mataeleao",
      line2: "Agilidade Jurídica ao Seu Lado", // Integrating differential
      line2Color: "indigo-700", // Using a professional color
    },
    description:
      "Meu compromisso é com a **agilidade no atendimento** e a excelência jurídica. Ofereço soluções eficazes e personalizadas para suas demandas, garantindo suporte e representação dedicada em cada etapa do processo.", // Personalized tone, integrating differential
    buttons: [
      {
        label: "Agendar Consulta",
        href: "#contato",
        variant: "primary",
        icon: "ArrowRight", // Lucide-react icon
      },
      {
        label: "Saiba Mais",
        href: "#sobre",
        variant: "outline",
      },
    ],
    stats: [
      {
        number: "10+", // Realistic number for an individual professional
        label: "Anos de Experiência",
      },
      {
        number: "200+", // Realistic number for an individual professional
        label: "Casos Atendidos",
      },
      {
        number: "95%", // Realistic number for an individual professional
        label: "Satisfação do Cliente",
      },
    ],
    image: {
      src: "https://www.psicologodiegovigato.com.br/01.png", // Mapped from PHOTO URL
      alt: "Advogado Advogancio Mataeleao em seu escritório profissional",
    },
  },
  services: {
    badge: "Minhas Áreas de Atuação",
    title: "Serviços Jurídicos Comigo", // Personalized tone
    description:
      "Ofereço consultoria e representação jurídica abrangente, com foco na eficiência e na busca pelos melhores resultados para meus clientes. Minha atuação é pautada pela ética e pela **agilidade**.", // Personalized tone, integrating differential
    items: [
      {
        title: "Direito Civil e Contratual",
        description:
          "Assessoria completa em elaboração e revisão de contratos, responsabilidade civil, indenizações e disputas diversas, garantindo seus direitos.",
        icon: "ClipboardList", // Lucide-react icon
      },
      {
        title: "Direito de Família e Sucessões",
        description:
          "Oriento em processos de divórcio, guarda, pensão alimentícia, inventários e planejamento sucessório, com a sensibilidade e atenção que o tema exige.",
        icon: "HeartHandshake", // Lucide-react icon
      },
      {
        title: "Direito do Consumidor",
        description:
          "Defesa dos direitos do consumidor em situações de produtos defeituosos, serviços não prestados, cobranças indevidas e abusos praticados por fornecedores.",
        icon: "ShoppingBag", // Lucide-react icon
      },
      {
        title: "Assessoria para PMEs",
        description:
          "Suporte jurídico especializado para pequenas e médias empresas, desde a constituição, revisão de contratos comerciais até questões de conformidade legal.",
        icon: "Briefcase", // Lucide-react icon
      },
    ],
  },
  whyChooseUs: {
    badge: "Por Que Me Escolher", // Personalized tone
    title: "Minha Abordagem Jurídica Confiável", // Personalized tone
    description:
      "Meu compromisso com a ética, a transparência e a excelência é o fundamento de cada caso que represento. Sua tranquilidade é minha prioridade.", // Personalized tone
    values: [
      {
        title: "Agilidade e Eficiência", // Integrating differential
        description:
          "Foco na resolução rápida e eficaz das suas demandas jurídicas, otimizando o tempo e minimizando o estresse.",
        icon: "Lightning", // Lucide-react icon
      },
      {
        title: "Atendimento Personalizado",
        description:
          "Cada cliente e caso são únicos. Ofereço atenção individualizada, entendendo profundamente suas necessidades e objetivos.",
        icon: "Users", // Lucide-react icon
      },
      {
        title: "Experiência e Conhecimento",
        description:
          "Minha experiência e atualização constante garantem um aconselhamento jurídico sólido e a mais alta qualidade de representação.",
        icon: "Scale", // Lucide-react icon
      },
      {
        title: "Comunicação Transparente",
        description:
          "Mantenho você sempre informado(a), com comunicação clara e honesta em todas as etapas do processo jurídico.",
        icon: "MessageCircle", // Lucide-react icon
      },
    ],
  },
  process: {
    badge: "Meu Processo", // Personalized tone
    title: "Como Trabalho", // Personalized tone
    description:
      "Uma abordagem estruturada e focada para alcançar seus objetivos jurídicos com clareza, eficiência e resultados excepcionais.", // Personalized tone
    steps: [
      {
        number: "01",
        title: "Consulta Inicial",
        description:
          "Uma conversa abrangente para entender suas necessidades jurídicas e estabelecer os primeiros passos.",
      },
      {
        number: "02",
        title: "Análise e Estratégia",
        description:
          "Pesquisa e análise minuciosas para desenvolver a estratégia jurídica mais adequada ao seu caso.",
      },
      {
        number: "03",
        title: "Apresentação da Solução",
        description:
          "Desenvolvimento e apresentação de uma estratégia clara, com os caminhos e resultados esperados.",
      },
      {
        number: "04",
        title: "Representação e Acompanhamento",
        description:
          "Representação dedicada durante todo o processo, mantendo você informado(a) em cada etapa até a resolução.",
      },
    ],
  },
  consultation: {
    image: {
      src: "https://www.psicologodiegovigato.com.br/01.png", // Mapped from PHOTO URL
      alt: "Advogado Advogancio Mataeleao em consulta",
      overlay: {
        badge: "Consulta Profissional",
        title: "Sua jornada jurídica começa comigo", // Personalized tone
      },
    },
    badge: "Consulta Jurídica",
    title: "Agende Sua Consulta",
    description:
      "Uma consulta abrangente e confidencial para discutir sua situação jurídica e definir o melhor caminho estratégico para o seu caso. Priorizo a **agilidade no agendamento** para a sua conveniência.", // Personalized tone, integrating differential
    features: [
      {
        title: "Orientação Especializada",
        description: "Conselho profissional de um advogado experiente e dedicado.",
      },
      {
        title: "Agendamento Facilitado", // Integrating differential
        description: "Rapidez e flexibilidade para marcar seu horário.",
      },
      {
        title: "Transparência de Honorários",
        description: "Discussão clara de custos e opções de pagamento desde o início.",
      },
    ],
    button: {
      label: "Agendar Consulta",
      href: "#contato",
      icon: "Calendar", // Lucide-react icon
    },
  },
  blog: {
    badge: "Insights Jurídicos",
    title: "Últimas Atualizações",
    button: {
      label: "Ver Tudo",
      href: "#blog",
    },
    posts: [
      {
        date: "29 de Janeiro, 2024",
        title: "O que você precisa saber sobre a Nova Lei de Proteção de Dados (LGPD)",
        category: "Direito Digital",
      },
      {
        date: "26 de Janeiro, 2024",
        title: "Guia Completo para Acordos de Divórcio Amigável no Brasil",
        category: "Direito de Família",
      },
      {
        date: "22 de Janeiro, 2024",
        title: "Direitos do Consumidor: Como agir em caso de produtos com defeito",
        category: "Direito do Consumidor",
      },
    ],
  },
  faq: {
    badge: "Perguntas Frequentes",
    title: "Dúvidas Comuns Respondidas",
    description:
      "Encontre respostas para as perguntas mais frequentes sobre meus serviços jurídicos, processos e como posso ajudá-lo(a) de forma **ágil e eficiente**.", // Personalized tone, integrating differential
    items: [
      {
        question: "Qual o seu principal diferencial como advogado?",
        answer:
          "Meu principal diferencial é a **agilidade no atendimento**. Prezo por respostas rápidas, processos eficientes e soluções que atendam às necessidades de tempo dos meus clientes, sem perder a qualidade.",
      },
      {
        question: "Em quais áreas do direito você atua?",
        answer:
          "Atuo predominantemente em Direito Civil e Contratual, Direito de Família e Sucessões, Direito do Consumidor e assessoria jurídica para pequenas e médias empresas.",
      },
      {
        question: "Como funciona a primeira consulta e qual o custo?",
        answer:
          "A primeira consulta serve para entender a fundo o seu caso. Ela pode ser agendada de forma **ágil** e os honorários são discutidos com total transparência desde o início, podendo haver uma cortesia para a análise inicial.",
      },
      {
        question: "Como você mantém seus clientes informados sobre o progresso do caso?",
        answer:
          "A comunicação é fundamental. Mantenho meus clientes constantemente atualizados sobre o andamento do processo por meio de e-mail, telefone e reuniões periódicas, sempre de forma clara e acessível.",
      },
    ],
  },
  footer: {
    logo: {
      letter: "A",
      text: "Advogacio",
    },
    description:
      "Oferecendo serviços jurídicos excepcionais com integridade e dedicação ao sucesso do cliente.", // Personalized tone
    contact: {
      phone: "(11) 98765-4321", // Generated plausible phone number
      email: "contato@advoganciomataeleao.com.br", // Generated plausible email
      whatsapp: "5511987654321", // WhatsApp format
    },
    quickLinks: {
      title: "Links Rápidos",
      items: [
        {
          label: "Início",
          href: "#inicio",
        },
        {
          label: "Serviços",
          href: "#servicos",
        },
        {
          label: "Sobre",
          href: "#sobre",
        },
        {
          label: "Contato",
          href: "#contato",
        },
      ],
    },
    copyright: "© 2024 Advogancio Mataeleao. Todos os direitos reservados.", // Updated copyright name
    legalLinks: [
      {
        label: "Política de Privacidade",
        href: "#politica-de-privacidade",
      },
      {
        label: "Termos de Serviço",
        href: "#termos-de-servico",
      },
      {
        label: "Aviso Legal",
        href: "#aviso-legal",
      },
    ],
  },
};