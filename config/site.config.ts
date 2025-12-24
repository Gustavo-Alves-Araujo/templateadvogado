export const siteConfig = {
  header: {
    logo: {
      letter: "A",
      text: "Advogancio",
      letterBgColor: "blue-800", // Adapted from brand color
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
    badge: "Sua Causa, Minha Prioridade", // Niche-specific badge
    title: {
      line1: "Advocacia com", // Niche-specific title, personal tone
      line2: "Agilidade e Dedicação", // Incorporating differential
      line2Color: "blue-600", // Adapted from brand color
    },
    description:
      "Como Advogado, meu compromisso é oferecer soluções jurídicas eficientes com **agilidade no atendimento**, garantindo que seus direitos sejam protegidos e suas questões resolvidas com a atenção que merecem. Minha abordagem é focada no cliente, com comunicação clara e estratégica e a expertise necessária.", // Personal tone, differential integrated
    buttons: [
      {
        label: "Agendar Consulta",
        href: "#contato",
        variant: "primary",
        icon: "ArrowRight",
      },
      {
        label: "Saiba Mais",
        href: "#sobre",
        variant: "outline",
      },
    ],
    stats: [
      {
        number: "20+", // Adjusted for a professional
        label: "Anos de Experiência",
      },
      {
        number: "300+", // Adjusted for a professional
        label: "Casos de Sucesso",
      },
      {
        number: "95%", // Adjusted for a professional
        label: "Satisfação do Cliente",
      },
    ],
    image: {
      src: "https://www.psicologodiegovigato.com.br/01.png", // Mapped from PHOTO URL
      alt: "Advogado Advogancio Labubonico profissional", // Niche-specific alt text
    },
  },
  services: {
    badge: "Minhas Áreas de Atuação", // Personal tone
    title: "Soluções Jurídicas Abrangentes", // Niche-specific title
    description:
      "Ofereço um leque completo de serviços jurídicos para atender às suas necessidades, sempre com foco em resultados rápidos e eficazes, pautados pela ética e **agilidade** que você busca.", // Personal tone, differential integrated
    items: [
      // Invented 4 realistic, technical services for Advocacia with icons
      {
        title: "Direito Civil",
        description:
          "Representação em contratos, indenizações, responsabilidade civil e disputas de propriedade, garantindo seus direitos com expertise.",
        icon: "Scale", // Lucide-react icon
      },
      {
        title: "Direito de Família e Sucessões",
        description:
          "Suporte sensível e eficiente em divórcios, pensão alimentícia, guarda de filhos, inventários e planejamento sucessório.",
        icon: "HeartCrack", // Lucide-react icon
      },
      {
        title: "Direito do Consumidor",
        description:
          "Defesa dos seus direitos como consumidor em casos de produtos ou serviços defeituosos, cobranças indevidas e contratos abusivos.",
        icon: "ShoppingBag", // Lucide-react icon
      },
      {
        title: "Direito Trabalhista",
        description:
          "Assessoria para empregados e empregadores em questões como demissão, horas extras, rescisões e direitos trabalhistas.",
        icon: "Briefcase", // Lucide-react icon
      },
    ],
  },
  whyChooseUs: {
    badge: "Por Que Me Escolher", // Personal tone
    title: "Representação Legal Confiável e Ágil", // Incorporating differential
    description:
      "Meu compromisso é com a excelência, integridade e o sucesso dos meus clientes. A dedicação à qualidade jurídica e à **agilidade no atendimento** são os pilares de cada caso que represento.", // Personal tone, differential integrated
    values: [
      {
        title: "Experiência Comprovada",
        description:
          "Anos de representação bem-sucedida, com resultados favoráveis em diversas áreas do direito, construindo um histórico de confiança.",
      },
      {
        title: "Atendimento Personalizado",
        description:
          "Minha estratégia jurídica é adaptada às suas necessidades e objetivos específicos, com foco total na sua individualidade e sucesso.",
      },
      {
        title: "Agilidade e Eficiência",
        description:
          "Priorizo a **agilidade no atendimento** e a resolução eficiente do seu caso, sem comprometer a qualidade ou a atenção aos detalhes.", // Differential integrated
      },
      {
        title: "Comunicação Transparente",
        description:
          "Mantenho você informado em cada etapa do processo, com comunicação clara e honesta, para sua total tranquilidade e confiança.",
      },
    ],
  },
  process: {
    badge: "Meu Processo de Atuação", // Personal tone
    title: "Como Eu Trabalho", // Personal tone
    description:
      "Minha abordagem estruturada e meticulosa visa alcançar seus objetivos jurídicos com clareza, eficiência e resultados excepcionais, sempre com a **agilidade** que você espera.", // Personal tone, differential integrated
    steps: [
      {
        number: "01",
        title: "Consulta Inicial",
        description:
          "Realizo uma consulta abrangente para compreender suas necessidades jurídicas, objetivos e expectativas, estabelecendo as bases do trabalho.",
      },
      {
        number: "02",
        title: "Análise do Caso",
        description:
          "Conduzo pesquisa e análise minuciosas das informações e documentos para desenvolver uma estratégia jurídica personalizada para sua situação.",
      },
      {
        number: "03",
        title: "Estratégia Jurídica",
        description:
          "Desenvolvo e apresento uma estratégia clara, com o caminho a seguir, as etapas do processo e os resultados esperados, buscando sempre a otimização do tempo.",
      },
      {
        number: "04",
        title: "Representação Dedicada",
        description:
          "Ofereço representação dedicada durante todo o processo, mantendo você informado e participativo em cada etapa, com total transparência.",
      },
    ],
  },
  consultation: {
    image: {
      src: "https://www.psicologodiegovigato.com.br/01.png", // Mapped from PHOTO URL
      alt: "Advogado Advogancio Labubonico em consulta jurídica profissional",
      overlay: {
        badge: "Consulta Profissional",
        title: "Sua jornada jurídica começa com agilidade", // Integrating differential
      },
    },
    badge: "Consulta Inicial",
    title: "Agende Sua Consulta",
    description:
      "Uma consulta abrangente e confidencial para discutirmos sua situação jurídica e definirmos o melhor caminho estratégico para o seu caso, com a **agilidade** que faz a diferença.", // Personal tone, differential integrated
    features: [
      {
        title: "Consulta Inicial Gratuita",
        description: "Primeiros 30 minutos sem custo para avaliação do caso",
      },
      {
        title: "Orientação Especializada",
        description: "Orientação profissional de um advogado experiente e focado.",
      },
      {
        title: "Honorários Transparentes",
        description: "Discussão clara de honorários e opções de pagamento adaptadas.",
      },
    ],
    button: {
      label: "Agendar Consulta",
      href: "#contato",
      icon: "Calendar",
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
      // Generated 3 relevant blog post titles for Advocacia
      {
        date: "29 de Janeiro, 2024",
        title: "Entendendo Seus Direitos no Divórcio: Um Guia Rápido",
        category: "Direito de Família",
      },
      {
        date: "26 de Janeiro, 2024",
        title: "Como a Agilidade no Atendimento Pode Decidir Seu Caso",
        category: "Atendimento Jurídico",
      },
      {
        date: "22 de Janeiro, 2024",
        title: "Protegendo Seus Bens: Dicas de Planejamento Sucessório",
        category: "Direito Civil",
      },
    ],
  },
  faq: {
    badge: "Perguntas Frequentes",
    title: "Perguntas Comuns",
    description:
      "Encontre respostas para perguntas frequentes sobre meus serviços jurídicos, o processo de atendimento e como posso ajudá-lo a alcançar seus objetivos legais com **agilidade**.", // Personal tone, differential integrated
    items: [
      // Generated 4 relevant questions and answers for Advocacia
      {
        question: "Como funciona a consulta inicial e qual o seu custo?",
        answer:
          "Minha primeira consulta é focada em entender sua necessidade jurídica. Avaliamos a complexidade e apresento as possíveis soluções. A consulta inicial tem um valor simbólico, que será revertido em desconto caso o contrato de serviços seja fechado.",
      },
      {
        question: "Quais documentos preciso para iniciar um processo?",
        answer:
          "Os documentos variam conforme a natureza do caso. Em nossa consulta inicial, fornecerei uma lista detalhada dos documentos essenciais. Trazer os documentos básicos como RG, CPF e comprovante de residência já ajuda a agilizar o processo.",
      },
      {
        question: "Como são calculados os honorários advocatícios?",
        answer:
          "Os honorários são estabelecidos de forma transparente e clara, podendo ser por hora, por etapa processual, ou um percentual sobre o êxito da causa, dependendo do tipo e complexidade do seu caso. Tudo será discutido e acordado previamente.",
      },
      {
        question: "Qual o prazo médio para a resolução de um caso?",
        answer:
          "A duração de um processo judicial pode variar bastante, dependendo da área do direito, da complexidade e da comarca. Contudo, minha prioridade é buscar a resolução mais **ágil e eficiente** possível, mantendo-o sempre atualizado sobre o andamento.",
      },
    ],
  },
  footer: {
    logo: {
      letter: "A",
      text: "Advogancio",
    },
    description:
      "Serviços jurídicos excepcionais com integridade e dedicação ao sucesso do cliente, focados na **agilidade e eficiência**.", // Differential integrated
    contact: {
      phone: "(11) 98765-4321", // Generated phone number
      email: "contato@advoganciolabubonico.com.br", // Generated email
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
    copyright: "© 2024 Advogancio Labubonico. Todos os direitos reservados.", // Updated name
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