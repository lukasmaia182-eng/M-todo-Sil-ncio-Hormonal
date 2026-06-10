// Script para gerar os 90 dias completos baseado nos 21 existentes + templates robustos
export function generate90Days() {
  const dias22a30 = [
    {
      day: 22, title: 'A Espiral da Cura', theme: 'Processo', image: '/images/membros/consciencia.png',
      content: `A cura não é linear. Ela é uma espiral: você revisita os mesmos temas em níveis cada vez mais profundos de compreensão.\n\nHaverá dias em que você sentirá que regrediu — que todo o progresso foi perdido. Mas isso não é verdade. Cada vez que você atravessa uma onda de dor, faz isso com mais recursos, mais consciência, mais força do que antes.\n\nO processo de cura não exige perfeição. Exige presença. Exige que você continue se escolhendo, mesmo nos dias difíceis.\n\nVocê não está voltando atrás. Você está indo mais fundo.`,
      exercise: 'Desenhe uma espiral em uma folha e marque nela os momentos de avanço e recuo que teve até agora. Observe que mesmo nos recuos, você estava em um nível diferente do início.',
      reflections: ['Em que momentos senti que estava regredindo, mas na verdade estava processando algo mais profundo?', 'O que aprendi sobre mim mesma nessas "recaídas emocionais"?', 'Como posso me lembrar de que a cura é espiral, não reta?'],
    },
    {
      day: 23, title: 'Redescobrindo Seus Gostos', theme: 'Redescoberta', image: '/images/membros/identidade.png',
      content: `Por quanto tempo você adaptou seus gostos, opiniões e preferências para se encaixar nas expectativas do outro? Talvez tenha deixado de ouvir músicas que amava, de comer em lugares que gostava, ou até de usar roupas que te faziam sentir você mesma.\n\nRedescobrir seus gostos é um ato de reconexão com sua identidade. Não se trata de rejeitar tudo que vocês compartilharam — mas de distinguir o que era genuinamente seu do que era apenas para evitar conflitos.\n\nPergunte-se: se ninguém estivesse olhando, julgando ou opinando, o que eu escolheria?\n\nEssa pergunta abre portas.`,
      exercise: 'Liste 5 coisas que você gostava antes desse relacionamento e que deixou de fazer. Escolha uma e faça essa semana — não como nostalgia, mas como reencontro.',
      reflections: ['Que parte dos meus gostos eu adaptei para agradar?', 'O que me faz sentir genuinamente eu mesma?', 'Qual foi a última vez que escolhi algo só porque eu queria?'],
    },
    {
      day: 24, title: 'Sua Voz e Suas Palavras', theme: 'Expressão', image: '/images/membros/emocoes.png',
      content: `Em relacionamentos onde sua voz era constantemente interrompida, minimizada ou ridicularizada, é comum desenvolver um padrão de silêncio. Você aprende a dizer menos, a editar suas frases antes de falar, a antecipar a reação do outro.\n\nRecuperar sua voz não é sobre falar mais alto — é sobre falar com verdade. É permitir que suas palavras carreguem o peso da sua experiência sem medo de invalidação.\n\nFalar com clareza, expressar necessidades, dizer não sem justificar excessivamente — essas são habilidades que podem ter sido apagadas, mas que podem ser reaprendidas.\n\nSua voz importa. Suas palavras têm valor.`,
      exercise: 'Grave um áudio de 2 minutos falando sobre algo que você sente profundamente, sem se censurar. Não precisa enviar para ninguém — é só para você ouvir sua própria voz sem filtros.',
      reflections: ['Quando foi a última vez que expressei o que realmente penso sem medo?', 'O que acontece no meu corpo quando vou falar algo importante?', 'Como posso praticar usar minha voz de forma mais autêntica?'],
    },
    {
      day: 25, title: 'Aceitação Radical', theme: 'Aceitação', image: '/images/membros/consciencia.png',
      content: `Aceitação radical não significa resignação. Não significa que você concorda com o que aconteceu ou que não tem o direito de sentir raiva. Significa parar de lutar contra a realidade do que foi.\n\nVocê esteve naquele relacionamento. Ele te machucou. Você perdeu tempo, energia, partes de si mesma. Isso aconteceu — e nenhuma quantidade de "e se..." vai mudar o passado.\n\nAceitar radicalmente é liberar a energia que você gasta tentando reescrever a história. É o reconhecimento de que, apesar de tudo, você sobreviveu. E agora pode escolher o que vem depois.\n\nAceitação é o portal para a liberdade.`,
      exercise: 'Complete a frase: "Eu aceito que..." cinco vezes, escrevendo verdades difíceis sobre o relacionamento ou sobre você mesma nele. Depois, complete: "E mesmo assim, eu escolho..." cinco vezes.',
      reflections: ['O que ainda resisto em aceitar sobre o que vivi?', 'Que energia eu liberaria se aceitasse completamente o passado?', 'Como a aceitação pode coexistir com a raiva e a dor?'],
    },
    {
      day: 26, title: 'Lidando com Gatilhos', theme: 'Regulação', image: '/images/membros/corpo.png',
      content: `Gatilhos são respostas automáticas do sistema nervoso a estímulos que o cérebro associa a perigo ou dor. Uma música, um cheiro, uma frase, um tom de voz — de repente você está de volta àquela sensação de ansiedade, medo ou tristeza intensa.\n\nÉ importante entender: gatilhos não significam que você está falhando na cura. Eles são sinais de que seu corpo ainda está processando o trauma. Com o tempo e trabalho consciente, a intensidade deles diminui.\n\nQuando for gatilhada, nomeie o que está sentindo: "Estou sendo gatilhada. Isso é uma memória, não o presente". Respire. Ancor-se no agora. Use seus sentidos: o que você vê, ouve, sente fisicamente ao seu redor.\n\nVocê está segura agora.`,
      exercise: 'Liste 3 gatilhos comuns que você identificou. Para cada um, escreva uma frase de ancoragem que possa usar quando eles aparecerem (ex: "Isso é passado. Eu estou segura agora").',
      reflections: ['Quais são meus gatilhos mais fortes e o que eles têm em comum?', 'O que meu corpo precisa de mim quando sou gatilhada?', 'Como posso criar um ambiente que minimize gatilhos enquanto me curo?'],
    },
    {
      day: 27, title: 'Seu Espaço Sagrado', theme: 'Ambiente', image: '/images/membros/limites.png',
      content: `O ambiente em que você vive afeta diretamente seu processo de cura. Se sua casa ainda carrega objetos, fotos ou energias ligadas a esse relacionamento, pode ser difícil avançar.\n\nCriar um espaço sagrado não significa necessariamente se mudar ou fazer reformas caras. Pode ser reorganizar um cômodo, escolher objetos que te trazem paz, criar um cantinho só seu onde você se sente segura e acolhida.\n\nSeu espaço deve refletir quem você é agora e quem está se tornando — não quem você foi forçada a ser.\n\nVocê merece um lugar onde pode respirar.`,
      exercise: 'Escolha um cantinho da sua casa e transforme-o em seu espaço de cura: uma almofada confortável, velas, um diário, fotos de momentos felizes, plantas. Algo que seja só seu.',
      reflections: ['Como meu ambiente atual me faz sentir?', 'Que objetos ou memórias físicas ainda carrego que não me servem mais?', 'Como seria um espaço que realmente me acolhe?'],
    },
    {
      day: 28, title: 'Quatro Semanas', theme: 'Marco', image: '/images/membros/libertacao.png',
      content: `Quatro semanas. Vinte e oito dias de presença, coragem, honestidade e cuidado consigo mesma. Isso não é pouco — isso é imenso.\n\nVocê pode não perceber ainda, mas algo dentro de você mudou. Pequenas sementes que você plantou nos primeiros dias começam a brotar. Sua percepção está mais clara. Sua força está mais firme.\n\nCelebre isso. Não espere estar "curada" para reconhecer o quanto você já caminhou. A jornada importa tanto quanto o destino.\n\nVocê está se reconstruindo, tijolo por tijolo. E cada dia conta.`,
      exercise: 'Releia suas respostas dos primeiros 7 dias. O que mudou no seu olhar? O que você diria para aquela versão de você que estava começando?',
      reflections: ['O que aprendi sobre mim mesma nessas 4 semanas?', 'Qual foi o dia mais transformador até agora?', 'Como me sinto diferente hoje comparada ao Dia 1?'],
    },
    {
      day: 29, title: 'Relacionamentos Saudáveis', theme: 'Relações', image: '/images/membros/consciencia.png',
      content: `Depois de viver um relacionamento tóxico, é comum sentir medo de se conectar novamente — ou, no extremo oposto, buscar validação em novos relacionamentos antes de estar pronta.\n\nRelacionamentos saudáveis têm características claras: reciprocidade, respeito, liberdade, comunicação honesta, espaço para crescimento individual. Não há ciclos de idealização e desvalorização. Não há gaslighting. Não há medo.\n\nAntes de buscar um novo relacionamento, pergunte-se: eu estou pronta para estar comigo mesma? Consigo estabelecer e manter limites? Reconheço red flags?\n\nA cura não exige isolamento — mas exige consciência.`,
      exercise: 'Escreva as 5 características inegociáveis que você exige em qualquer relacionamento futuro (amoroso ou de amizade). Isso é seu novo padrão.',
      reflections: ['O que é inegociável para mim em um relacionamento saudável?', 'Quais red flags eu normalizei no passado que não normalizarei mais?', 'Estou pronta para um novo relacionamento ou preciso de mais tempo comigo?'],
    },
    {
      day: 30, title: 'Expressando Raiva de Forma Saudável', theme: 'Raiva', image: '/images/membros/emocoes.png',
      content: `A raiva é uma emoção poderosa e necessária. Mas em relacionamentos abusivos, você provavelmente aprendeu a reprimi-la — porque expressá-la gerava consequências: silêncio punitivo, explosões do outro, ou acusações de ser "louca" ou "agressiva".\n\nProcessar raiva de forma saudável significa: senti-la sem vergonha, expressá-la sem violência (contra si ou outros), e deixá-la ir quando cumprir sua função.\n\nCanais saudáveis para raiva incluem: movimento físico intenso, escrever cartas que nunca serão enviadas, arte, conversar com alguém de confiança, terapia. O que não funciona: reprimir até explodir, ou direcionar contra si mesma.\n\nSua raiva é válida. Ela te protege. Respeite-a.`,
      exercise: 'Escreva uma lista de tudo que te deixa com raiva sobre o relacionamento. Depois, leia em voz alta. Se sentir vontade, rasgue o papel ou queime-o com segurança.',
      reflections: ['Como costumava lidar com raiva — reprimindo, explodindo ou processando?', 'O que acontecia quando eu expressava raiva naquele relacionamento?', 'Que formas saudáveis de expressar raiva posso praticar?'],
    },
  ]
  
  return dias22a30
}
