import { type LucideIcon, Plug, Cable, Truck, Bike, Cpu, CircuitBoard, Wrench, Package } from 'lucide-react';

export interface Product {
  id: string;
  nome: string;
  codigo: string;
  categoria: string;
  categoriaSlug: string;
  descricao: string;
  aplicacoes: string[];
  compatibilidade: string[];
  montadora: string;
  tags: string[];
  icon: LucideIcon;
  imagem?: string;
}

export interface Category {
  slug: string;
  nome: string;
  icon: LucideIcon;
  descricao: string;
}

export const categories: Category[] = [
  { slug: 'conectores', nome: 'Conectores Automotivos', icon: Plug, descricao: 'Conectores de alta qualidade para diversas aplicações' },
  { slug: 'chicotes', nome: 'Chicotes Completos', icon: Cable, descricao: 'Chicotes elétricos prontos para instalação' },
  { slug: 'linha-pesada', nome: 'Linha Pesada', icon: Truck, descricao: 'Soluções para veículos pesados e comerciais' },
  { slug: 'caminhoes', nome: 'Caminhões', icon: Truck, descricao: 'Peças específicas para caminhões' },
  { slug: 'motos', nome: 'Motos', icon: Bike, descricao: 'Componentes elétricos para motocicletas' },
  { slug: 'sensores', nome: 'Sensores', icon: Cpu, descricao: 'Sensores automotivos de precisão' },
  { slug: 'terminais', nome: 'Terminais', icon: CircuitBoard, descricao: 'Terminais e conexões elétricas' },
  { slug: 'kits', nome: 'Kits de Reparo', icon: Wrench, descricao: 'Kits completos para manutenção' },
];

export const montadoras = [
  'Volkswagen', 'General Motors', 'Fiat', 'Ford', 'Toyota',
  'Honda', 'Hyundai', 'Renault', 'Scania', 'Mercedes-Benz',
  'Volvo', 'Yamaha', 'Iveco', 'Universal'
];

export const products: Product[] = [
  {
    id: '9002-0003',
    nome: 'Chicote Superseal (Bobina, Farol, GNV)',
    codigo: '9002.0003',
    categoria: 'Chicotes Completos',
    categoriaSlug: 'chicotes',
    descricao: 'Chicote Superseal altamente versátil com múltiplas aplicações. Atende Bobina de Ignição BAE 800 AE, Farol Dianteiro/Milha, Soquete Lanterna, Flange da Bomba de Combustível, Sensor de Ré, e componentes de linha pesada (Scania, Iveco, VW Constellation). É amplamente utilizado também em diversos Kits GNV como MP48, Tomasetto, SGV, AEB, Landirenzo, entre outros.',
    aplicacoes: [
      'Bobina de Ignição',
      'Farol Dianteiro e Milha',
      'Soquete Lanterna',
      'Flange da Bomba Combustível',
      'Sensor de Ré',
      'Farol Auxiliar',
      'Interruptores (Pneumático/Transferência)',
      'Kits GNV (Família MP48)'
    ],
    compatibilidade: [
      'Fiat (Uno, Palio, Tempra, Doblò, Punto, Siena, etc)',
      'GM/Chevrolet (Corsa)',
      'Renault/Nissan (Duster, Mégane, Clio, Tiida, Livina)',
      'Ford (Ka, Cargo)',
      'Citroën (Picasso Aircross, Novo C3)',
      'Linha Pesada (Scania S4, Iveco, Constellation)',
      'Kits GNV (MP48, Tomasetto, Bugatti, SGV, OMVL, etc)'
    ],
    montadora: 'Universal',
    tags: ['chicote', 'superseal', '9002.0003', 'gnv', 'mp48', 'bobina', 'farol', 'bomba', 'sensor'],
    icon: Cable,
    imagem: '/foto/2 vias.avif',
  },
  // CATÁLOGO TÉCNICO - LINHA ELÉTRICA (CONECTORES DE MOTOCICLETAS)
  {
    id: 'moto-con-0',
    nome: 'Conector Fêmea 3 Vias de Nylon (Tipo Mini-Fit / Faston)',
    codigo: '0',
    categoria: 'Conectores Automotivos',
    categoriaSlug: 'conectores',
    descricao: 'Utilizado para conexões elétricas comuns que não necessitam de vedação contra a água. Ideal para a cablagem interna do farol, conexões de farolins traseiros, piscas ou interruptores do guiador. Possui terminais internos de latão para garantir uma excelente condutibilidade estável.',
    aplicacoes: [
      'Cablagem interna do farol',
      'Conexões de farolins traseiros',
      'Piscas',
      'Interruptores do guiador'
    ],
    compatibilidade: [
      'Honda CG 125 / 150 / 160',
      'Yamaha YBR 125 / Factor / Fazer 150',
      'Similares de baixa cilindrada'
    ],
    montadora: 'Honda',
    tags: ['conector', '3 vias', 'nylon', 'faston', 'moto', 'honda', 'yamaha'],
    icon: Plug,
    imagem: '/foto/0.png',
  },
  {
    id: 'moto-con-1',
    nome: 'Conector Fêmea 3 Vias Selado Cinzento (Padrão Sumitomo MT090)',
    codigo: '1',
    categoria: 'Conectores Automotivos',
    categoriaSlug: 'conectores',
    descricao: 'Conector de engenharia avançada com sistema de dupla vedação em silicone (anéis internos e traseiros). Impede totalmente a entrada de água, humidade e poeira. Essencial para a proteção de componentes eletrónicos sensíveis do sistema de injeção.',
    aplicacoes: [
      'Sensores TPS (Posição do Acelerador)',
      'Sensores de rotação',
      'Estator da linha Yamaha',
      'Componentes de injeção eletrónica'
    ],
    compatibilidade: [
      'Yamaha Fazer 250',
      'Yamaha Lander 250',
      'Yamaha XTZ 250',
      'Motos Suzuki',
      'Modelos 2006 em diante'
    ],
    montadora: 'Yamaha',
    tags: ['conector', '3 vias', 'selado', 'sumitomo', 'injeção', 'moto', 'yamaha', 'suzuki'],
    icon: Plug,
    imagem: '/foto/1.png',
  },
  {
    id: 'moto-con-2',
    nome: 'Conector Macho 3 Vias de Nylon (Tipo Faston 6.3mm)',
    codigo: '2',
    categoria: 'Conectores Automotivos',
    categoriaSlug: 'conectores',
    descricao: 'Componente complementar (macho) para o acoplamento de cablagens principais a sub-cablagens secundárias (como o bloco do painel de instrumentos ou o conjunto de interruptores de luz do guiador). Terminais do tipo "espada" de fixação firme.',
    aplicacoes: [
      'Bloco do painel de instrumentos',
      'Conjunto de interruptores de luz',
      'Acoplamento de sub-cablagens',
      'Conexões estruturais'
    ],
    compatibilidade: [
      'Honda média e baixa cilindrada',
      'Yamaha Universal',
      'Suzuki Yes 125',
      'Modelos 1980 a 2015'
    ],
    montadora: 'Universal',
    tags: ['conector', 'macho', '3 vias', 'nylon', 'faston', 'moto'],
    icon: Plug,
    imagem: '/foto/2.png',
  },
  {
    id: 'moto-con-3',
    nome: 'Conector Fêmea 3 Vias de Nylon Largo (Padrão Lâmpada H4)',
    codigo: '3',
    categoria: 'Conectores Automotivos',
    categoriaSlug: 'conectores',
    descricao: 'Soquete reforçado com bitola estruturada para suportar alta corrente elétrica. Projetado especificamente para a ligação direta em lâmpadas incandescentes ou halogéneas do tipo H4 (farol alto e baixo integrados) ou conexões críticas de relés de arranque e blocos de ignição.',
    aplicacoes: [
      'Lâmpadas H4 incandescentes',
      'Lâmpadas H4 halogéneas',
      'Relés de arranque',
      'Blocos de ignição',
      'Conexões de alta corrente'
    ],
    compatibilidade: [
      'CBX 250 Twister',
      'NX 400 Falcon',
      'XT 600',
      'XT 660R',
      'Linha CG/Fazer com farol halogéneo'
    ],
    montadora: 'Honda',
    tags: ['conector', '3 vias', 'h4', 'lâmpada', 'alta corrente', 'moto', 'honda'],
    icon: Plug,
    imagem: '/foto/3.png',
  },
  {
    id: 'moto-con-4',
    nome: 'Conector Fêmea 3 Vias Selado Preto (Padrão Furukawa / Sumitomo)',
    codigo: '4',
    categoria: 'Conectores Automotivos',
    categoriaSlug: 'conectores',
    descricao: 'Garante o isolamento hermético completo contra agentes externos através de anéis de borracha específicos. A cor preta é padronizada para identificar vias exclusivas de sensores dinâmicos (como sensores de velocidade ou sensores de fase) no diagrama da cablagem principal, evitando inversões na montagem.',
    aplicacoes: [
      'Sensores de velocidade',
      'Sensores de fase',
      'Componentes dinâmicos',
      'Identificação de circuitos críticos',
      'Isolamento hermético'
    ],
    compatibilidade: [
      'Honda Titan 150/160 Mix/Flex',
      'Honda CB 300R',
      'Honda CB 250F Twister',
      'Kawasaki sistemas elétricos',
      'Modelos 2009 em diante'
    ],
    montadora: 'Honda',
    tags: ['conector', '3 vias', 'selado', 'preto', 'sensor', 'dinâmico', 'moto', 'honda', 'kawasaki'],
    icon: Plug,
    imagem: '/foto/4.png',
  },
  {
    id: 'moto-con-5',
    nome: 'Conector Fêmea 5 Vias Selado Preto (Padrão Delphi / Econoseal)',
    codigo: '5',
    categoria: 'Conectores Automotivos',
    categoriaSlug: 'conectores',
    descricao: 'Conector de múltiplos pinos com isolamento reforçado individual por fio (vedações amarelas e verdes). Engenharia focada em componentes modulares integrados, sendo o principal responsável por alimentar o Sensor Híbrido / Sensor Triplex da admissão (que reúne os sensores MAP, TPS e IAT num único corpo).',
    aplicacoes: [
      'Sensor Híbrido da admissão',
      'Sensor Triplex (MAP, TPS, IAT)',
      'Corpo de borboleta',
      'Sensores integrados'
    ],
    compatibilidade: [
      'Honda CG 150/160',
      'Honda Biz 125 Injetada',
      'Honda Bros 150/160',
      'Modelos 2009 em diante'
    ],
    montadora: 'Honda',
    tags: ['conector', '5 vias', 'selado', 'delphi', 'sensor híbrido', 'injeção', 'moto', 'honda'],
    icon: Plug,
    imagem: '/foto/5.png',
  },
  {
    id: 'moto-chicote-6',
    nome: 'Chicote Reparo / Rabicho Conector 3 Vias Selado Cinzento',
    codigo: '6',
    categoria: 'Kits de Reparo',
    categoriaSlug: 'kits',
    descricao: 'Solução pronta para manutenção corretiva e reparação rápida. Fornecido com fiação pré-clipada de fábrica, elimina a necessidade de ferramentas de crimpagem especiais. Substitui os conectores originais que sofreram superaquecimento, quebras de travas ou corrosão (zinabre).',
    aplicacoes: [
      'Sensor TPS',
      'Sensor de velocidade',
      'Reparação de conectores danificados',
      'Substituição de fiação',
      'Manutenção corretiva'
    ],
    compatibilidade: [
      'Yamaha Fazer 250',
      'Yamaha Lander',
      'Yamaha Ténéré 250',
      'Versões com injeção eletrónica'
    ],
    montadora: 'Yamaha',
    tags: ['chicote', 'reparo', '3 vias', 'selado', 'substituição', 'moto', 'yamaha'],
    icon: Wrench,
    imagem: '/foto/6.png',
  },
  {
    id: 'moto-con-7',
    nome: 'Conector Fêmea 4 Vias Selado Preto (Padrão Sumitomo / HM)',
    codigo: '7',
    categoria: 'Conectores Automotivos',
    categoriaSlug: 'conectores',
    descricao: 'Conector impermeável com quatro pinos paralelos e travas de segurança reforçadas. É utilizado para componentes que exigem mais linhas de sinal ou alimentação combinada, sendo muito comum na ligação do painel de instrumentos digital, conjunto de sensores traseiros ou no módulo de controlo da ignição (CDI / ECU).',
    aplicacoes: [
      'Painel de instrumentos digital',
      'Conjunto de sensores traseiros',
      'Módulo de controlo da ignição (CDI)',
      'ECU e sistemas integrados',
      'Múltiplas linhas de sinal'
    ],
    compatibilidade: [
      'Honda CB 300R',
      'Honda XRE 300',
      'Honda Falcon 400i',
      'Yamaha injetadas',
      'Modelos 2010 em diante'
    ],
    montadora: 'Honda',
    tags: ['conector', '4 vias', 'selado', 'preto', 'sumitomo', 'painel', 'cdi', 'moto', 'honda', 'yamaha'],
    icon: Plug,
    imagem: '/foto/7.png',
  },
  {
    id: 'moto-con-8',
    nome: 'Conector Fêmea 2 Vias de Nylon (Tipo Faston / Mini-Fit)',
    codigo: '8',
    categoria: 'Conectores Automotivos',
    categoriaSlug: 'conectores',
    descricao: 'Um conector simples de duas vias sem vedação, focado em componentes de consumo elétrico direto ou interruptores simples. É o plug padrão utilizado para a ligação do interruptor da embraiagem, botão do sinal de luzes (passador), buzina ou sensores do descanso lateral (pezinho) em áreas protegidas da chuva.',
    aplicacoes: [
      'Interruptor da embraiagem',
      'Botão do sinal de luzes (passador)',
      'Buzina',
      'Sensores do descanso lateral (pezinho)',
      'Interruptores simples'
    ],
    compatibilidade: [
      'Honda CG',
      'Honda Biz',
      'Honda Bros',
      'Yamaha YBR',
      'Yamaha Factor',
      'Qualquer ano até 2020'
    ],
    montadora: 'Universal',
    tags: ['conector', '2 vias', 'nylon', 'faston', 'interruptor', 'moto', 'universal'],
    icon: Plug,
    imagem: '/foto/8.png',
  },
  {
    id: 'moto-con-9',
    nome: 'Conector Fêmea 2 Vias Selado Preto (Padrão Waterproof Automotivo)',
    codigo: '9',
    categoria: 'Conectores Automotivos',
    categoriaSlug: 'conectores',
    descricao: 'Conector de 2 pinos com isolamento completo por anéis de borracha contra água e lama. É a escolha ideal e padrão para sistemas expostos na parte inferior ou externa da mota, como o sensor do travão traseiro, alimentação de faróis de milha auxiliares, ou a bobine de ignição.',
    aplicacoes: [
      'Sensor do travão traseiro',
      'Faróis de milha auxiliares',
      'Bobine de ignição',
      'Sistemas externos',
      'Áreas úmidas'
    ],
    compatibilidade: [
      'Honda XRE 190 / 300',
      'Honda NXR 160 Bros',
      'Yamaha Lander',
      'Yamaha Ténéré 250',
      'Trail e urbanas com injeção'
    ],
    montadora: 'Universal',
    tags: ['conector', '2 vias', 'selado', 'preto', 'waterproof', 'sensor', 'moto'],
    icon: Plug,
    imagem: '/foto/9.png',
  },
  {
    id: 'moto-con-10',
    nome: 'Conector Macho 2 Vias de Nylon (Tipo Faston 6.3mm)',
    codigo: '10',
    categoria: 'Conectores Automotivos',
    categoriaSlug: 'conectores',
    descricao: 'Componente complementar (macho) do conector de nylon de 2 vias. É utilizado para estender ou fazer a transição rápida da fiação de sub-chicotes removíveis, muito comum na fiação que desce do guiador ou que liga as lâmpadas dos piscas dianteiros/traseiros ao chicote principal.',
    aplicacoes: [
      'Sub-chicotes removíveis',
      'Fiação do guiador',
      'Lâmpadas dos piscas dianteiros',
      'Lâmpadas dos piscas traseiros',
      'Transição de fiação'
    ],
    compatibilidade: [
      'Honda Universal',
      'Yamaha Universal',
      'Suzuki Universal',
      'Dafra Universal',
      'Modelos 1985 a 2018'
    ],
    montadora: 'Universal',
    tags: ['conector', 'macho', '2 vias', 'nylon', 'faston', 'moto', 'universal'],
    icon: Plug,
    imagem: '/foto/10.png',
  },
  {
    id: 'moto-con-11',
    nome: 'Conector Fêmea 4 Vias de Nylon (Quadrado Tipo Mini-Fit)',
    codigo: '11',
    categoria: 'Conectores Automotivos',
    categoriaSlug: 'conectores',
    descricao: 'Conector de formato quadrado sem vedação, que agrupa quatro conexões elétricas de baixa corrente num espaço compacto. Muito utilizado nas conexões internas atrás do farol para unir o bloco de chaves do guiador (punho de luz esquerdo ou direito) ao restante circuito elétrico.',
    aplicacoes: [
      'Bloco de chaves do guiador',
      'Punho de luz esquerdo',
      'Punho de luz direito',
      'Conexões internas do farol',
      'Agrupamento de circuitos'
    ],
    compatibilidade: [
      'Honda CG 125 / 150 (carburados até 2008)',
      'Honda CBX 250 Twister (2001-2008)',
      'Suzuki Yes 125'
    ],
    montadora: 'Honda',
    tags: ['conector', '4 vias', 'nylon', 'quadrado', 'mini-fit', 'chaves', 'guiador', 'moto', 'honda', 'suzuki'],
    icon: Plug,
    imagem: '/foto/11.png',
  },
  {
    id: 'moto-con-13',
    nome: 'Conector Fêmea 6 Vias de Nylon (Tipo Faston Retangular)',
    codigo: '13',
    categoria: 'Conectores Automotivos',
    categoriaSlug: 'conectores',
    descricao: 'Conector de grande capacidade (6 pinos) para interligar múltiplos circuitos ao mesmo tempo. É a peça chave para ligar sistemas complexos de comando, como o canhão de ignição (chave principal) ou o conjunto completo do painel de instrumentos analógico/digital.',
    aplicacoes: [
      'Canhão de ignição (chave principal)',
      'Painel de instrumentos analógico',
      'Painel de instrumentos digital',
      'Sistemas complexos de comando',
      'Múltiplos circuitos'
    ],
    compatibilidade: [
      'Honda Titan 150 (2004-2014)',
      'Honda CBX 200 Strada',
      'Honda NX 350 Sahara',
      'Yamaha YBR/Factor',
      'Baixa e média cilindrada'
    ],
    montadora: 'Honda',
    tags: ['conector', '6 vias', 'nylon', 'faston', 'retangular', 'ignição', 'painel', 'moto', 'honda', 'yamaha'],
    icon: Plug,
    imagem: '/foto/13.png',
  },
  {
    id: 'moto-con-14',
    nome: 'Conector Macho 4 Vias de Nylon (Quadrado Tipo Mini-Fit)',
    codigo: '14',
    categoria: 'Conectores Automotivos',
    categoriaSlug: 'conectores',
    descricao: 'Par complementar (macho) do conector do Código 11. Serve para receber o plug do punho de luz ou do painel, garantindo um encaixe firme com travas mecânicas externas que evitam o desligamento da fiação com a vibração do motor.',
    aplicacoes: [
      'Punho de luz',
      'Painel elétrico',
      'Conexões com trava mecânica',
      'Proteção contra vibração',
      'Encaixe estrutural'
    ],
    compatibilidade: [
      'Honda carburada (CG, Strada, Twister 250 antiga)',
      'Motas multimarcas de média cilindrada',
      'Modelos até 2010'
    ],
    montadora: 'Honda',
    tags: ['conector', 'macho', '4 vias', 'nylon', 'quadrado', 'mini-fit', 'chaves', 'moto', 'honda'],
    icon: Plug,
    imagem: '/foto/14.png',
  },
];
