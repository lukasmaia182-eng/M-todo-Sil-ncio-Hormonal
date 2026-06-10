import { readFileSync, writeFileSync } from 'fs'

// Ler os dias existentes (1-21)
const originalContent = readFileSync('lib/desafio-data-backup-21dias.ts', 'utf8')

// Extrair apenas a parte dos dias 1-21
const match = originalContent.match(/export const desafioDias: DayContent\[\] = \[([\s\S]*?)\n\]/m)
const existingDays = match ? match[0] : ''

// Novos dias 22-90
const newDays = `  {
    day: 22,
    title: 'Reconhecendo Sinais Vermelhos',
    theme: 'Prevenção',
    content: \`Agora que você reconhece o padrão do narcisismo, é crucial aprender a identificar os sinais desde o início. Love bombing (afeto intenso e rápido demais), ausência de empatia genuína, necessidade constante de admiração, incapacidade de aceitar críticas — esses são alguns red flags.

Confiar na sua intuição não é paranoia — é sabedoria. Se algo parece estranho, rápido demais, intenso demais, provavelmente é. Relacionamentos saudáveis se desenvolvem gradualmente, com consistência entre palavras e ações.

Você não precisa dar chance para todo mundo. Proteger seu espaço emocional é inteligente, não fechado.\`,
    exercise: 'Liste 5 sinais de alerta que você vê agora mas não via antes. Para cada um, escreva: como eu reagiria hoje se percebesse isso em alguém novo?',
    reflections: [
      'Quais sinais eu ignorei no início do relacionamento?',
      'Como posso confiar na minha intuição em relações futuras?',
      'Que comportamentos são inegociáveis para mim agora?',
    ],
  },`

// Gerar dias 23-90 programaticamente
const dias = []

for (let day = 23; day <= 90; day++) {
  const temas = {
    23: { title: 'Desintoxicação Digital', theme: 'Tecnologia', focus: 'redes sociais' },
    24: { title: 'Três Semanas de Crescimento', theme: 'Marco', focus: 'progresso' },
    25: { title: 'Vulnerabilidade Real', theme: 'Autenticidade', focus: 'ser genuína' },
    26: { title: 'O Medo do Abandono', theme: 'Apego', focus: 'segurança' },
    27: { title: 'Alegria Sem Culpa', theme: 'Prazer', focus: 'permissão' },
    28: { title: 'Um Mês de Liberdade', theme: 'Marco', focus: 'celebração' },
    29: { title: 'Ressignificando Solidão', theme: 'Independência', focus: 'estar só' },
    30: { title: 'Valores Pessoais', theme: 'Propósito', focus: 'bússola interna' },
    31: { title: 'Aceitação Radical', theme: 'Aceitação', focus: 'o que foi' },
    32: { title: 'Lidando com Gatilhos', theme: 'Regulação', focus: 'resposta consciente' },
    33: { title: 'Seu Espaço Sagrado', theme: 'Ambiente', focus: 'segurança física' },
    34: { title: 'Relacionamentos Saudáveis', theme: 'Relações', focus: 'reciprocidade' },
    35: { title: 'Expressando Raiva de Forma Saudável', theme: 'Emoções', focus: 'canalização' },
    36: { title: 'Redescobrindo o Prazer', theme: 'Corpo', focus: 'sensações' },
    37: { title: 'Sua Narrativa Pessoal', theme: 'História', focus: 'contar sua história' },
    38: { title: 'Corpo e Sensações', theme: 'Somático', focus: 'escuta corporal' },
    39: { title: 'Espiritualidade Pessoal', theme: 'Transcendência', focus: 'conexão maior' },
    40: { title: 'Perdão (ou não)', theme: 'Liberação', focus: 'escolha consciente' },
    41: { title: 'Criatividade Libertadora', theme: 'Criação', focus: 'expressão' },
    42: { title: 'Seis Semanas', theme: 'Marco', focus: 'transformação' },
    43: { title: 'Confiando em Si Mesma', theme: 'Confiança', focus: 'intuição' },
    44: { title: 'Suas Necessidades Importam', theme: 'Necessidades', focus: 'priorizar-se' },
    45: { title: 'Comunicação Autêntica', theme: 'Comunicação', focus: 'clareza' },
    46: { title: 'Lidando com Recaídas Emocionais', theme: 'Resiliência', focus: 'tropeços' },
    47: { title: 'Sua Rede de Apoio Real', theme: 'Comunidade', focus: 'conexões' },
    48: { title: 'Ressignificando Amor', theme: 'Amor', focus: 'verdadeiro afeto' },
    49: { title: 'Autocompaixão Profunda', theme: 'Compaixão', focus: 'gentileza interna' },
    50: { title: 'Metade do Caminho — 50 Dias', theme: 'Marco', focus: 'vitória' },
    51: { title: 'Energia e Vitalidade', theme: 'Energia', focus: 'força vital' },
    52: { title: 'Sonhos Adiados', theme: 'Sonhos', focus: 'retomar planos' },
    53: { title: 'Sexualidade e Autonomia', theme: 'Sexualidade', focus: 'corpo e desejo' },
    54: { title: 'Seu Legado', theme: 'Legado', focus: 'impacto' },
    55: { title: 'Gratidão Genuína', theme: 'Gratidão', focus: 'reconhecimento' },
    56: { title: 'Oito Semanas', theme: 'Marco', focus: 'consistência' },
    57: { title: 'Integrando Todas as Partes', theme: 'Integração', focus: 'totalidade' },
    58: { title: 'Assertividade no Cotidiano', theme: 'Prática', focus: 'firmeza gentil' },
    59: { title: 'Relacionamento com Dinheiro', theme: 'Abundância', focus: 'recursos' },
    60: { title: 'Sua Voz Interior', theme: 'Intuição', focus: 'sabedoria interna' },
    61: { title: 'Lidando com Datas Difíceis', theme: 'Memórias', focus: 'gatilhos temporais' },
    62: { title: 'Propósito Renovado', theme: 'Propósito', focus: 'direção' },
    63: { title: 'Nove Semanas', theme: 'Marco', focus: 'evolução' },
    64: { title: 'Fronteiras Digitais', theme: 'Digital', focus: 'proteção online' },
    65: { title: 'Construindo Rotinas Saudáveis', theme: 'Estrutura', focus: 'ritmo' },
    66: { title: 'Lidando com Julgamento', theme: 'Crítica', focus: 'opinião alheia' },
    67: { title: 'Sua Sabedoria Interna', theme: 'Sabedoria', focus: 'conhecimento próprio' },
    68: { title: 'Amor Próprio Real', theme: 'Autopercepção', focus: 'aceitação' },
    69: { title: 'Resiliência Verdadeira', theme: 'Resiliência', focus: 'força flexível' },
    70: { title: 'Dez Semanas', theme: 'Marco', focus: 'conquista' },
    71: { title: 'Celebrando Pequenas Vitórias', theme: 'Vitórias', focus: 'reconhecimento diário' },
    72: { title: 'Escolhas Conscientes', theme: 'Escolha', focus: 'responsabilidade' },
    73: { title: 'Sua Nova Identidade', theme: 'Identidade', focus: 'quem você é agora' },
    74: { title: 'Compromisso Consigo Mesma', theme: 'Compromisso', focus: 'lealdade própria' },
    75: { title: 'Lidando com Saudade', theme: 'Saudade', focus: 'nostalgia' },
    76: { title: 'Generosidade Saudável', theme: 'Generosidade', focus: 'dar com limites' },
    77: { title: 'Onze Semanas', theme: 'Marco', focus: 'maturação' },
    78: { title: 'O Futuro que Você Escolhe', theme: 'Futuro', focus: 'visão' },
    79: { title: 'Honrando Seu Processo', theme: 'Processo', focus: 'jornada' },
    80: { title: 'Conexões Verdadeiras', theme: 'Conexão', focus: 'relações autênticas' },
    81: { title: 'Sua Força Interior', theme: 'Força', focus: 'poder pessoal' },
    82: { title: 'Presença Plena', theme: 'Presença', focus: 'aqui e agora' },
    83: { title: 'Autenticidade Total', theme: 'Autenticidade', focus: 'ser você' },
    84: { title: 'Doze Semanas — Três Meses', theme: 'Marco', focus: 'transformação completa' },
    85: { title: 'Integração Final', theme: 'Síntese', focus: 'união' },
    86: { title: 'Sua Jornada Completa', theme: 'Reflexão', focus: 'olhar para trás' },
    87: { title: 'O que Você Se Tornou', theme: 'Transformação', focus: 'nova versão' },
    88: { title: 'Próximos Passos', theme: 'Continuidade', focus: 'além dos 90 dias' },
    89: { title: 'Carta para o Seu Futuro', theme: 'Futuro', focus: 'compromisso futuro' },
    90: { title: 'Completude — 90 Dias de Liberdade', theme: 'Celebração Final', focus: 'vitória completa' },
  }

  const tema = temas[day]
  if (!tema) continue

  const content = generateContent(day, tema)
  const exercise = generateExercise(day, tema)
  const reflections = generateReflections(day, tema)

  dias.push(`  {
    day: ${day},
    title: '${tema.title}',
    theme: '${tema.theme}',
    content: \`${content}\`,
    exercise: '${exercise}',
    reflections: [
      '${reflections[0]}',
      '${reflections[1]}',
      '${reflections[2]}',
    ],
  }`)
}

function generateContent(day, tema) {
  const templates = {
    Marco: `Você chegou ao dia ${day}. Isso não é pouco. Cada dia que você escolhe continuar nessa jornada é um ato de coragem e amor próprio.

Olhe para trás e veja o quanto já mudou. A pessoa que começou esse desafio não é a mesma que está aqui agora. Você ganhou clareza, força e uma compreensão mais profunda de si mesma.

A cura não é linear — há avanços e retrocessos. Mas a direção geral é sempre de crescimento. Continue. Você está no caminho certo.`,
    
    default: `${tema.focus.charAt(0).toUpperCase() + tema.focus.slice(1)} é um aspecto fundamental da sua jornada de cura. Depois de um relacionamento narcisista, reconectar-se com ${tema.focus} pode parecer desafiador, mas é essencial para sua libertação.

Relacionamentos abusivos frequentemente distorcem nossa percepção de ${tema.focus}. Hoje, você começa a resgatar essa parte de si mesma, reconhecendo que merece experimentar isso de forma plena e saudável.

Não há pressa. Cada pequeno passo em direção a ${tema.focus} é uma vitória. Você está aprendendo a confiar em si mesma novamente, e isso é transformador.

Seja gentil consigo mesma nesse processo. A cura acontece em camadas, e você está exatamente onde precisa estar.`
  }

  return tema.theme === 'Marco' ? templates.Marco : templates.default
}

function generateExercise(day, tema) {
  if (tema.theme === 'Marco') {
    return `Escreva sobre as três maiores mudanças que você percebe em si mesma desde o dia 1. Como você se sentia então? Como se sente agora? O que mais te surpreende sobre essa transformação?`
  }
  
  return `Reflita sobre como ${tema.focus} se manifesta na sua vida atualmente. Escreva sobre um momento recente em que você pôde experimentar ou praticar ${tema.focus}. Se ainda é difícil, escreva sobre como gostaria que fosse. Seja específica e honesta consigo mesma.`
}

function generateReflections(day, tema) {
  return [
    `Como ${tema.focus} estava presente (ou ausente) no meu relacionamento passado?`,
    `O que eu preciso para me sentir mais conectada com ${tema.focus} hoje?`,
    `Que pequeno passo posso dar hoje em direção a ${tema.focus}?`,
  ]
}

// Montar arquivo final
const finalContent = `export interface DayContent {
  day: number
  title: string
  theme: string
  content: string
  exercise: string
  reflections: string[]
}

export const desafioDias: DayContent[] = [
${existingDays.match(/\{[\s\S]*?\},/g).join('\n')}
${newDays}
${dias.join(',\n')},
]

export function getDayContent(day: number): DayContent | undefined {
  return desafioDias.find((d) => d.day === day)
}

export const totalDays = 90
`

writeFileSync('lib/desafio-data.ts', finalContent, 'utf8')
console.log('✅ Arquivo desafio-data.ts atualizado com 90 dias!')
