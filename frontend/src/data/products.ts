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
  'Volvo', 'Yamaha', 'Iveco',
];

export const products: Product[] = [
  {
    id: 'p001',
    nome: 'Conector 2 Vias Injeção Eletrônica',
    codigo: 'SP3-CON-2V-001',
    categoria: 'Conectores Automotivos',
    categoriaSlug: 'conectores',
    descricao: 'Conector automotivo de 2 vias para sistema de injeção eletrônica. Fabricado em poliamida de alta resistência com terminais estanhados, garantindo condutividade e durabilidade em condições extremas de temperatura e vibração.',
    aplicacoes: ['Injeção Eletrônica', 'Sensores de Temperatura', 'Bobina de Ignição'],
    compatibilidade: ['Gol G3/G4/G5', 'Parati', 'Saveiro', 'Fox'],
    montadora: 'Volkswagen',
    tags: ['conector', '2 vias', 'injeção', 'volkswagen'],
    icon: Plug,
  },
  {
    id: 'p002',
    nome: 'Chicote Completo Painel Instrumentos',
    codigo: 'SP3-CHI-PIN-002',
    categoria: 'Chicotes Completos',
    categoriaSlug: 'chicotes',
    descricao: 'Chicote elétrico completo para painel de instrumentos. Inclui todos os conectores, terminais e proteções térmicas. Montagem plug & play com encaixe perfeito.',
    aplicacoes: ['Painel de Instrumentos', 'Iluminação do Painel', 'Indicadores'],
    compatibilidade: ['Corsa Classic', 'Celta', 'Prisma'],
    montadora: 'General Motors',
    tags: ['chicote', 'painel', 'instrumentos', 'gm'],
    icon: Cable,
  },
  {
    id: 'p003',
    nome: 'Chicote Motor Diesel Linha Pesada',
    codigo: 'SP3-LNP-MOT-003',
    categoria: 'Linha Pesada',
    categoriaSlug: 'linha-pesada',
    descricao: 'Chicote reforçado para motor diesel de veículos pesados. Cabos com isolamento duplo e conectores de alta amperagem. Resistente a óleo, combustível e altas temperaturas.',
    aplicacoes: ['Motor Diesel', 'Sistema Elétrico Principal', 'Central Eletrônica'],
    compatibilidade: ['P340', 'P360', 'R440'],
    montadora: 'Scania',
    tags: ['linha pesada', 'diesel', 'motor', 'scania'],
    icon: Truck,
  },
  {
    id: 'p004',
    nome: 'Chicote Cabine Caminhão Atego',
    codigo: 'SP3-CAM-CAB-004',
    categoria: 'Caminhões',
    categoriaSlug: 'caminhoes',
    descricao: 'Chicote elétrico para cabine do caminhão Mercedes-Benz Atego. Fiação completa para iluminação, painel, ar condicionado e sistemas auxiliares.',
    aplicacoes: ['Cabine', 'Iluminação', 'Ar Condicionado', 'Painel'],
    compatibilidade: ['Atego 1719', 'Atego 2426', 'Atego 3030'],
    montadora: 'Mercedes-Benz',
    tags: ['caminhão', 'cabine', 'atego', 'mercedes'],
    icon: Truck,
  },
  {
    id: 'p005',
    nome: 'Chicote Farol e Sinalização CG 160',
    codigo: 'SP3-MOT-FAR-005',
    categoria: 'Motos',
    categoriaSlug: 'motos',
    descricao: 'Chicote dedicado ao sistema de farol e sinalização para Honda CG 160. Fiação com revestimento UV e conectores à prova d\'água.',
    aplicacoes: ['Farol Dianteiro', 'Lanterna Traseira', 'Setas', 'Luz de Freio'],
    compatibilidade: ['CG 160 Fan', 'CG 160 Start', 'CG 160 Titan'],
    montadora: 'Honda',
    tags: ['moto', 'farol', 'cg 160', 'honda'],
    icon: Bike,
  },
  {
    id: 'p006',
    nome: 'Sensor de Rotação Hall',
    codigo: 'SP3-SEN-ROT-006',
    categoria: 'Sensores',
    categoriaSlug: 'sensores',
    descricao: 'Sensor de rotação tipo Hall para sistemas de ignição e injeção eletrônica. Alta precisão com resposta rápida. Conector integrado com vedação IP67.',
    aplicacoes: ['Ignição Eletrônica', 'Injeção', 'RPM do Motor'],
    compatibilidade: ['Uno Fire', 'Palio', 'Siena', 'Strada'],
    montadora: 'Fiat',
    tags: ['sensor', 'rotação', 'hall', 'fiat'],
    icon: Cpu,
  },
  {
    id: 'p007',
    nome: 'Terminal Macho Estanhado 6.3mm',
    codigo: 'SP3-TER-M63-007',
    categoria: 'Terminais',
    categoriaSlug: 'terminais',
    descricao: 'Terminal tipo macho estanhado 6.3mm para conexões automotivas de uso geral. Proteção contra oxidação. Compatível com fios de 0.5mm² a 2.5mm².',
    aplicacoes: ['Conexões Gerais', 'Relés', 'Fusíveis', 'Módulos'],
    compatibilidade: ['Universal — todas as marcas'],
    montadora: 'Universal',
    tags: ['terminal', 'macho', 'estanhado', 'universal'],
    icon: CircuitBoard,
  },
  {
    id: 'p008',
    nome: 'Kit Reparo Bico Injetor Multi-Point',
    codigo: 'SP3-KIT-INJ-008',
    categoria: 'Kits de Reparo',
    categoriaSlug: 'kits',
    descricao: 'Kit completo para reparo de bico injetor multi-point. Inclui o-rings, filtros, espaçadores, capas protetoras e conectores elétricos.',
    aplicacoes: ['Bico Injetor', 'Sistema de Combustível', 'Injeção Multi-Point'],
    compatibilidade: ['Ka', 'Fiesta', 'EcoSport', 'Focus'],
    montadora: 'Ford',
    tags: ['kit', 'reparo', 'bico injetor', 'ford'],
    icon: Wrench,
  },
  {
    id: 'p009',
    nome: 'Conector 4 Vias Sensor de Oxigênio',
    codigo: 'SP3-CON-4V-009',
    categoria: 'Conectores Automotivos',
    categoriaSlug: 'conectores',
    descricao: 'Conector de 4 vias específico para sensor de oxigênio (sonda lambda). Vedação de silicone e terminais banhados a ouro para máxima resistência à corrosão.',
    aplicacoes: ['Sonda Lambda', 'Sensor de Oxigênio', 'Catalisador'],
    compatibilidade: ['Corolla', 'Hilux', 'Etios', 'Yaris'],
    montadora: 'Toyota',
    tags: ['conector', '4 vias', 'sonda lambda', 'toyota'],
    icon: Plug,
  },
  {
    id: 'p010',
    nome: 'Sensor de Velocidade ABS Dianteiro',
    codigo: 'SP3-SEN-ABS-010',
    categoria: 'Sensores',
    categoriaSlug: 'sensores',
    descricao: 'Sensor de velocidade para sistema ABS dianteiro. Tecnologia magneto-resistiva com alta precisão. Cabo blindado contra interferência eletromagnética.',
    aplicacoes: ['Sistema ABS', 'Controle de Tração', 'Estabilidade'],
    compatibilidade: ['HB20', 'Creta', 'Tucson'],
    montadora: 'Hyundai',
    tags: ['sensor', 'abs', 'velocidade', 'hyundai'],
    icon: Cpu,
  },
];
