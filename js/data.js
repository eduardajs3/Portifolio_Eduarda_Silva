
const profile = {
  name: "Eduarda Josileide da Silva",
  foto: "img/Eduarda.jpg",
  role: "Estudante de Desenvolvimento de Software Multiplataforma",
  github: "https://github.com/eduardajs3",
  linkedin: "https://www.linkedin.com/in/eduarda-josileide-49028b324",
  tagline:
    "Estudante de DSM na Fatec Itaquera e estagiária de suporte técnico, com foco em tecnologia e desenvolvimento de soluções.",
  course: {
    faculdade: "Faculdade de Tecnologia de São Paulo (Fatec) — Unidade Itaquera, Prof. Miguel Reale",
    curso: "Desenvolvimento de Software Multiplataforma",
    semestre: "6º semestre",
    inicio: "01/2024",
    conclusao: "12/2026",
  },
};

const experiences = [
  {
    empresa: "Secretaria do Verde e Meio Ambiente",
    cargo: "Estagiária de Suporte Técnico",
    periodo: "07/2025 — Atual",
    atual: true,
    atividades: [
      "Atendimento aos usuários e orientação técnica na resolução de problemas e chamados do dia a dia.",
      "Diagnóstico e resolução de problemas relacionados a hardware e software.",
      "Manutenção, montagem e configuração de computadores em ambiente de laboratório.",
      "Diagnóstico de falhas de sistema, reparo de discos e otimização do desempenho de máquinas.",
      "Abertura e acompanhamento de chamados com empresas terceirizadas e fornecedores.",
      "Documentação de processos e registro de ocorrências técnicas.",
    ],
  },
];

const courses = [
   {
    nome: "Segurança de Endpoint",
    instituicao: "Cisco Networking Academy",
    horas: "27h",
    periodo: "02/2024 — 03/2024",
    local: "Online",
  },
   {
    nome: "Imersão Front-end — 2ª edição",
    instituicao: "Alura",
    horas: "5h",
    periodo: "02/2025",
    local: "Online",
  },
  {
    nome: "Python",
    instituicao: "FIAP",
    horas: "80h",
    periodo: "01/2025 — 02/2025",
    local: "Online",
  },
  {
    nome: "Git e GitHub: compartilhando e colaborando em projetos",
    instituicao: "Alura",
    horas: "8h",
    periodo: "06/2025",
    local: "Online",
  },
  {
    nome: "UX design: conceitos visuais na prática",
    instituicao: "Alura",
    horas: "8h",
    periodo: "06/2026",
    local: "Online",
  },
  {
    nome: "Figma: interatividade e prototipação",
    instituicao: "Alura",
    horas: "6h",
    periodo: "06/2026",
    local: "Online",
  },
  {
    nome: "AZ-900: Introdução à Infraestrutura de Nuvem",
    instituicao: "Microsoft",
    horas: "8h",
    periodo: "08/2026",
    local: "Online",
  },
  {
    nome: "Cloud Digital Leader Certification",
    instituicao: "Google Cloud",
    horas: "8h",
    periodo: "08/2026",
    local: "Online",
  },
  

  
 
];

const languages = [
  { lingua: "Português", nivel: "Nativo", pct: 100 },
  { lingua: "Inglês", nivel: "Básico", pct: 35 },
];


const projects = [
  {
    slug: "sports-booking",
    nome: "Sports Academy",
    semestre: "1º semestre",
    tag: "1º Semestre • Web",
    resumo:
      "Website institucional responsivo desenvolvido para apresentação de modalidades esportivas e captação de alunos por meio de formulário de inscrição.",
    descricao:
      "O Sports Academy é um portal institucional desenvolvido no 1º semestre do curso de Desenvolvimento de Software Multiplataforma. O projeto teve como objetivo apresentar as modalidades esportivas oferecidas pela instituição, como Vôlei, Basquete e Futsal, além de incentivar o engajamento dos usuários por meio do agendamento de aulas experimentais. O desenvolvimento também foi realizado como forma de praticar e aprimorar o uso do Bootstrap na construção de interfaces responsivas e modernas.",
    tecnologias: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5", "Figma"],
    repo: "https://github.com/eduardajs3/projeto_bootstrap.git",
    imagem: "img/proj_sport.png",
    participacao:
      "Responsável pelo desenvolvimento do Front-end, desde a criação e prototipação das interfaces no Figma até a estruturação e estilização das páginas, aplicando HTML semântico e boas práticas de acessibilidade.",
    minhasTecnologias: ["HTML5", "CSS3", "Bootstrap 5.3", "Figma", "Bootstrap Icons"],
    galeria: ["img/sport.png","img/sport2.png","img/Sport3.png",],
  },
  {
    slug: "sistema-nutricionista",
    nome: "Sistema de Atendimento Nutricional",
    semestre: "2º semestre",
    tag: "2º Semestre • Web",
    resumo:
      "Plataforma dupla composta por Landing Page institucional para captação de clientes e Painel Administrativo com autenticação para gestão de pacientes, agenda e reuniões.",
    descricao:
      "O Sistema de Atendimento Nutricional foi projetado para cobrir o ciclo completo da rotina da profissional de nutrição, dividido em duas estruturas principais: a Landing Page Institucional, focada em atrair novos clientes, com apresentação profissional, sessão de depoimentos de pacientes, formulário de contato e área de cadastro; e o Painel de Gestão, acessível via tela de autenticação, com Dashboard interativo de atendimentos, módulo de gestão e prontuário de pacientes, agenda de consultas e agendamento de reuniões.",
    tecnologias: ["PHP", "React", "Figma", "SQLite"],
    repo: "https://github.com/eduardajs3/ProjetoPHP.git",
    imagem: "img/proj_nutri.png",
    participacao:
      "Atuei na prototipagem da interface de usuário no Figma, garantindo uma identidade visual acolhedora na Landing Page e um layout funcional e produtivo no Dashboard, além do desenvolvimento dos componentes dinâmicos do Front-end em React para navegação entre as telas de pacientes, formulários e calendário.",
    minhasTecnologias: ["React", "Figma"],
    galeria: ["img/homeflu.png","img/sobreflu.png","img/depoimentosflu.png","img/criaflu.png","img/contaflu.png","img/FluAgenda.png","img/FluAgendamentos.png","img/FluReunioes.png"],
  },
  {
    slug: "sistema-gt-solar",
    nome: "Sistema de Gestão Interna GT Solar",
    semestre: "3º semestre",
    tag: "3º Semestre • Web",
    resumo:
      "Sistema de gestão interna para controle de fluxo de caixa, gestão de clientes, elaboração de orçamentos e registro das movimentações financeiras de cada projeto solar.",
    descricao:
      "O Sistema Interno GT Solar é uma plataforma de gestão empresarial desenvolvida para centralizar a operação comercial e financeira da empresa. O sistema organiza todo o ciclo de atendimento e execução dos projetos em um único lugar: Dashboard operacional com visão geral dos principais indicadores, gestão de clientes com cadastro e consulta centralizada, projetos e orçamentos com registro de projetos finalizados e em andamento com cálculo de valores totais, e fluxo de caixa com registro de entradas, saídas e movimentações financeiras vinculadas a cada projeto executado, permitindo o acompanhamento do faturamento real.",
    tecnologias: ["React", "Java", "MongoDB", "Tailwind CSS", "Figma"],
    repos: {
      frontend: "https://github.com/Grupo-Fatec/GT-Solar-FrontEnd.git",
      backend: "https://github.com/Grupo-Fatec/GT-Solar-Backend.git"
    },
    imagem: "img/proj_gt_sistema.png",
    participacao:
      "Atuei no UI e UX Design, auxiliando na prototipagem das telas no Figma com um layout limpo para facilitar o uso , e no Front-end com React e Tailwind CSS, desenvolvendo a interface e estruturando os dados dos formulários de cadastro de clientes e projetos.",
    minhasTecnologias: ["React", "Tailwind CSS", "Figma"],
    galeria: ["img/GtLogin.png", "img/projetosgt.png", "img/clientesgt.png", "img/engenheirosgt.png","img/instaladoresgt.png", "img/orcamentosgt.png"],
  },
  {
    slug: "site-gt-solar",
    nome: "Plataforma GT Solar & Painel Administrativo",
    semestre: "4º semestre",
    tag: "4º Semestre • Web & CMS",
    resumo:
      "Portal institucional com simulador interativo de economia solar, suporte a Dark Mode e Painel Administrativo exclusivo para gestão completa de conteúdos (projetos, blog, FAQ e leads).",
    descricao:
      "A plataforma da GT Solar foi projetada para atuar em duas frentes integradas. No Website Público e Ferramenta de Conversão: navegação completa com seções de Início, Quem Somos, Projetos Realizados, Depoimentos, Blog, FAQ e Contato; Simulador de Economia, uma calculadora interativa para potenciais clientes estimarem a economia na conta de luz; e suporte nativo a Modo Claro e Modo Escuro. No Painel Administrativo Restrito: gerenciamento de conteúdo para cadastrar, editar e excluir projetos, artigos do blog, FAQ e depoimentos em tempo real, além de gestão de leads com as solicitações do formulário de contato e simulações realizadas.",
    tecnologias: ["Figma", "React", "Tailwind CSS", "Java", "MongoDB"],
    repos: {
      frontend: "https://github.com/LaboratorioDSMWeb/GTSolar.git",
      backend: "https://github.com/LaboratorioDSMWeb/back-end-gt-solar.git"
    },
    imagem: "img/proj_gt_site.png",
    participacao:
      "Atuei no UI e UX Design & Prototipagem, auxiliando na criação e estruturação do protótipo no Figma com um visual moderno para o site e uma interface intuitiva para o Painel Administrativo, e no Desenvolvimento Front-end com React e Tailwind CSS, implementando as interfaces do site e do sistema de gestão em React com Tailwind CSS, com estilização responsiva e suporte fluido ao alternador de temas.",
    minhasTecnologias: ["React", "Tailwind CSS", "Figma"],
    galeria: ["img/HomeGt.png", "img/QuemSomosGt.png","img/Simulador.png","img/Modoescuro.png","img/FAQ.png","img/Projetos.png","img/Contato.png","img/Home.png","img/ProjetosAdmin.png","img/ContatosAdmin.png"],
  },
  {
    slug: "app-odontocare",
    nome: "OdontoCare",
    semestre: "5º semestre",
    tag: "5º Semestre • Mobile",
    resumo:
      "Aplicativo mobile focado na gestão operacional e financeira de consultórios odontológicos, centralizando pacientes, prontuários, exames, agendamentos e controle financeiro.",
    descricao:
      "O OdontoCare é um aplicativo mobile focado na gestão operacional e financeira de consultórios odontológicos. Desenvolvido para simplificar a rotina da cirurgiã-dentista, o sistema centraliza desde o cadastro de pacientes, prontuários digitais e upload de exames até o fluxo completo de agendamento e controle financeiro de consultas. A aplicação segue a arquitetura Client-Server, com Front-end mobile construído em React Native com Expo, componentes modulares, navegação fluida e interface prototipada no Figma.",
    tecnologias: ["React Native", "Expo", "Figma", "Node.js", "MongoDB"],
    repos: {
      frontend: "https://github.com/OdontoDSM/OdontoCare.git",
      backend: "https://github.com/OdontoDSM/API.git"
    },
    imagem: "img/proj_odontoCare.png",
    participacao:
      "Atuei na criação das telas e prototipagem no Figma e no desenvolvimento do Front-end mobile utilizando React Native com Expo. Implementei componentes reutilizáveis, navegação entre telas e interfaces para agendamento, histórico e gerenciamento de pacientes, buscando manter uma experiência de uso simples e intuitiva",
    minhasTecnologias: ["React Native", "Expo","Figma"],
    galeria: ["img/LoginOdonto.png", "img/PacientesOdonto.png","img/cadastroOdonto.png","img/detalhesOdonto.png","img/uploadOdonto.png","img/financeiroOdonto.png","img/AgendaOdonto.png", "img/ListaOdonto.png",],
  },
];