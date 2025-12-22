export const siteConfig = {
  header: {
    logo: {
      // businessName: "Advogados bons" -> "A" for Advogados
      letter: "A",
      // businessName: "Advogados bons"
      text: "Advogados Bons",
      // No specific brandColor provided, using a professional default
      letterBgColor: "blue-800",
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
    // Generated based on differential
    badge: "Especialistas Exclusivos em Direito Trabalhista",
    title: {
      // businessName: "Advogados bons"
      line1: "Advogados Bons:",
      // differential: "trabalhamos APENAS com direito trabalhista"
      line2: "Sua Força no Direito do Trabalho",
      line2Color: "amber-500",
    },
    // profileType: empresa, businessArea: advocacia, differential: trabalhamos APENAS com direito trabalhista
    description:
      "Na Advogados Bons, somos especialistas e dedicamos nossa expertise APENAS ao direito trabalhista. Nossa equipe oferece assessoria jurídica estratégica e representação eficaz para empresas e trabalhadores, garantindo a defesa de seus direitos com rigor e compromisso inabalável.",
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
      // Invented realistic stats for a labor law firm
      {
        number: "15+",
        label: "Anos de Experiência",
      },
      {
        number: "800+",
        label: "Casos Trabalhistas Resolvidos",
      },
      {
        number: "95%",
        label: "Taxa de Sucesso",
      },
    ],
    image: {
      // PHOTO URL from JSON
      src: "https://nulttixasqcrugsbpduk.supabase.co/storage/v1/object/public/fotos/1766096924294-30wkg2.svg",
      // Adapted alt text
      alt: "Equipe de advogados especialistas em direito trabalhista",
    },
  },
  services: {
    badge: "Nossas Especialidades",
    // differential: "trabalhamos APENAS com direito trabalhista"
    title: "Serviços Exclusivos em Direito Trabalhista",
    // profileType: empresa, businessArea: advocacia, differential: trabalhamos APENAS com direito trabalhista
    description:
      "Com foco total no Direito Trabalhista, oferecemos uma gama completa de serviços jurídicos, desde a consultoria preventiva até a representação em litígios complexos. Nossa equipe está preparada para defender seus interesses com o mais alto nível de dedicação e conhecimento técnico.",
    items: [
      // Invented 4 realistic, technical services for "Direito Trabalhista" with Lucide-react icons
      {
        title: "Reclamações Trabalhistas",
        description:
          "Representação de trabalhadores em ações judiciais para reivindicação de verbas rescisórias, horas extras, adicionais de insalubridade/periculosidade e indenizações.",
        icon: "Scale", // Coherent icon for legal action
      },
      {
        title: "Assessoria Jurídica Empresarial Trabalhista",
        description:
          "Consultoria para empresas em conformidade com a legislação trabalhista, elaboração de contratos, regimentos internos e prevenção de passivos.",
        icon: "Briefcase", // Coherent icon for business
      },
      {
        title: "Acordos e Negociações Coletivas",
        description:
          "Mediação e representação em negociações com sindicatos, dissídios coletivos e elaboração de convenções e acordos coletivos de trabalho.",
        icon: "Users", // Coherent icon for groups/collective
      },
      {
        title: "Defesa em Processos Administrativos e Judiciais",
        description:
          "Atuação em defesa de empresas e trabalhadores perante o Ministério Público do Trabalho, Superintendências Regionais do Trabalho e Emprego, e na Justiça do Trabalho.",
        icon: "FileText", // Coherent icon for documents/process
      },
    ],
  },
  whyChooseUs: {
    badge: "Por Que Nos Escolher",
    // profileType: empresa, businessArea: advocacia, differential: trabalhamos APENAS com direito trabalhista
    title: "Sua Escolha Estratégica em Direito Trabalhista",
    description:
      "Nosso compromisso com a excelência, a integridade e o sucesso dos nossos clientes é a base de tudo o que fazemos. Especializados APENAS em direito trabalhista, oferecemos uma representação focada e um atendimento que faz a diferença.",
    values: [
      {
        title: "Foco Exclusivo",
        description:
          "Especialização total em direito trabalhista, garantindo conhecimento aprofundado e as melhores estratégias para o seu caso.",
      },
      {
        title: "Abordagem Personalizada",
        description:
          "Cada caso é único. Desenvolvemos estratégias jurídicas sob medida para as necessidades e objetivos específicos de cada cliente, seja empresa ou trabalhador.",
      },
      {
        title: "Equipe Altamente Qualificada",
        description:
          "Nossos advogados possuem vasta experiência e atualização constante nas nuances da legislação trabalhista.",
      },
      {
        title: "Comunicação Transparente",
        description:
          "Mantemos nossos clientes informados sobre cada etapa do processo, com clareza e honestidade em todas as comunicações.",
      },
    ],
  },
  process: {
    badge: "Nosso Processo",
    title: "Como Trabalhamos",
    description:
      "Uma abordagem estruturada e meticulosa para alcançar seus objetivos jurídicos com clareza, eficiência e resultados excepcionais em todas as questões trabalhistas.",
    steps: [
      {
        number: "01",
        title: "Consulta Inicial",
        description:
          "Consulta abrangente para entender suas necessidades jurídicas trabalhistas e objetivos.",
      },
      {
        number: "02",
        title: "Análise do Caso",
        description:
          "Pesquisa e análise minuciosas para desenvolver uma estratégia trabalhista adaptada à sua situação.",
      },
      {
        number: "03",
        title: "Estratégia Jurídica",
        description:
          "Desenvolvimento e apresentação de estratégia clara com caminho e resultados esperados para o seu caso trabalhista.",
      },
      {
        number: "04",
        title: "Representação",
        description:
          "Representação dedicada durante todo o processo trabalhista, mantendo você informado em cada etapa.",
      },
    ],
  },
  consultation: {
    image: {
      // Reuse PHOTO URL for consistency
      src: "https://nulttixasqcrugsbpduk.supabase.co/storage/v1/object/public/fotos/1766096924294-30wkg2.svg",
      alt: "Consulta jurídica trabalhista profissional",
      overlay: {
        badge: "Consulta Especializada",
        // Adapted title
        title: "Sua jornada no Direito Trabalhista começa aqui",
      },
    },
    badge: "Consulta Inicial",
    // Adapted title and description
    title: "Agende Sua Consulta Trabalhista",
    description:
      "Uma consulta abrangente e confidencial para discutir sua situação jurídica trabalhista e definir o melhor caminho estratégico para o seu caso.",
    features: [
      {
        title: "Consulta Inicial Gratuita",
        description: "Primeiros 30 minutos sem custo",
      },
      {
        title: "Orientação Especializada",
        description: "Orientação profissional de advogados experientes em direito do trabalho",
      },
      {
        title: "Honorários Transparentes",
        description: "Discussão clara de honorários e opções de pagamento",
      },
    ],
    button: {
      label: "Agendar Consulta",
      href: "#contato",
      icon: "Calendar",
    },
  },
  blog: {
    badge: "Insights Trabalhistas",
    // Adapted title
    title: "Artigos e Notícias sobre Direito do Trabalho",
    button: {
      label: "Ver Tudo",
      href: "#blog",
    },
    posts: [
      // Invented 3 realistic blog post titles for "Direito Trabalhista"
      {
        date: "10 de Março, 2024",
        title: "Novas Regras sobre Home Office e Seus Impactos Legais",
        category: "Direito Trabalhista",
      },
      {
        date: "05 de Março, 2024",
        title: "Direitos do Trabalhador: O que Mudou na Reforma Trabalhista?",
        category: "Reforma Trabalhista",
      },
      {
        date: "28 de Fevereiro, 2024",
        title: "Despedida Sem Justa Causa: O que o Empregado Precisa Saber",
        category: "Direitos do Empregado",
      },
    ],
  },
  faq: {
    badge: "Perguntas Frequentes",
    // Adapted title and description
    title: "Dúvidas Comuns em Direito Trabalhista",
    description:
      "Encontre respostas para as perguntas mais frequentes sobre nossos serviços jurídicos especializados em Direito do Trabalho, nossos processos e como podemos ajudá-lo a alcançar seus objetivos.",
    items: [
      // Generated 4 relevant questions and answers for "Direito Trabalhista"
      {
        question: "Quais são os principais direitos do trabalhador que vocês defendem?",
        answer:
          "Defendemos direitos como horas extras, adicional noturno, insalubridade, periculosidade, verbas rescisórias (férias, 13º, FGTS), equiparação salarial, reintegração e indenizações por assédio ou acidente de trabalho, entre outros.",
      },
      {
        question: "Como funciona o cálculo de verbas rescisórias em caso de demissão?",
        answer:
          "Realizamos o cálculo detalhado de todas as verbas, incluindo saldo de salário, aviso prévio, férias proporcionais e vencidas, 13º salário proporcional, FGTS e multa de 40%, garantindo que todos os valores devidos sejam corretamente reivindicados.",
      },
      {
        question: "Minha empresa pode ser processada por assédio moral? Como evitar?",
        answer:
          "Sim, empresas podem ser responsabilizadas por assédio moral. Oferecemos consultoria para implementar políticas internas de prevenção, treinamentos e canais de denúncia, minimizando riscos e promovendo um ambiente de trabalho saudável.",
      },
      {
        question: "Qual o prazo para entrar com uma ação trabalhista após a rescisão do contrato?",
        answer:
          "O prazo prescricional para o trabalhador ingressar com uma ação trabalhista é de até 2 anos após o término do contrato de trabalho, reivindicando direitos dos últimos 5 anos de vínculo empregatício.",
      },
    ],
  },
  footer: {
    logo: {
      // businessName: "Advogados bons"
      letter: "A",
      text: "Advogados Bons",
    },
    // profileType: empresa, businessArea: advocacia, differential: trabalhamos APENAS com direito trabalhista
    description:
      "Serviços jurídicos excepcionais com integridade e dedicação ao sucesso do cliente, exclusivamente na área do Direito Trabalhista.",
    contact: {
      // phoneContact: "1198888-7777" from JSON
      phone: "(11) 98888-7777",
      // Generated placeholder email
      email: "contato@advogadosbons.com.br",
      // whatsappLink for direct contact (assuming Brazil +55)
      whatsappLink: "https://wa.me/5511988887777",
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
    // businessName: "Advogados bons"
    copyright: "© 2024 Advogados Bons. Todos os direitos reservados.",
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