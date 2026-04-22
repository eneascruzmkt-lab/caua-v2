// Shared content for all 3 variations — Cauã Albuquerque sales page
// Single source of truth for copy. Each variation renders this content
// with its own visual system.

const CAUA_CONTENT = {
  marquee: 'INSCRIÇÕES ABERTAS ✪',
  hero: {
    headline: 'Vou te ajudar a lucrar mais de $100.000 por mês escalando no TikTok',
    headlineEnd: 'sem perder conta e sem ter criativo rejeitado.',
    sub: [
      'Enquanto a maioria insiste em vender no Meta e enfrenta prejuízo atrás de prejuízo, você pode surfar em uma rede pouco explorada — menos concorrência, CPA barato e vendas constantes.',
      'Se você for selecionado, vai ter acesso ao meu processo de contingência, teste e escala, além de um plano detalhado para você sair do zero até a sua primeira grande escala no TikTok.',
    ],
    cta: 'FAZER APLICAÇÃO GRATUITA',
    badge: '+250 ALUNOS FORMADOS',
  },
  bloco02: {
    eyebrow: 'O DIAGNÓSTICO',
    title: 'A falsa onda do Meta e Google',
    subtitle: '(e por que ela está quebrando a maioria dos players)',
    intro: [
      'Todos acreditam que os Estados Unidos é a onda do momento…',
      'Números altos, escalas absurdas que chegam a 8 dígitos por mês.',
      'Porém, ninguém fala da margem de lucro que vem diminuindo a cada dia.',
    ],
    pains: [
      'Métricas caras',
      'Alta competitividade',
      'Clonadores de ofertas em massa',
      'Chargeback nas alturas e prejuízo em ofertas com ROAS menor que 2.',
    ],
    transitionLead: 'Eu sei porque já estive lá.',
    transitionTail: 'Passei meses tentando fazer funcionar no Meta. O resultado?',
    testimonialsTitle: 'DEPOIMENTOS DE PREJUÍZO',
    testimonials: [
      { name: 'Placeholder 01', handle: '', text: '[ TROCAR POR PRINT REAL ]' },
      { name: 'Placeholder 02', handle: '', text: '[ TROCAR POR PRINT REAL ]' },
      { name: 'Placeholder 03', handle: '', text: '[ TROCAR POR PRINT REAL ]' },
    ],
    pivotEyebrow: 'A VIRADA',
    pivotTitle: 'Agora, a rede que mudou a minha operação:',
    pivotBrand: 'TIKTOK',
    pivotBody: 'Cansado de perder dinheiro no Meta e de lidar com a inconstância do Google derrubando minhas contas, decidi testar algo diferente: vender na rede que as pessoas consideram mais “chata”.',
    pivotResultsTitle: 'E logo nos primeiros meses…',
    pivotResults: [
      'Faturei até 15x mais do que no Meta',
      'Com margem muito maior',
      'Escalando com muito menos dor de cabeça',
      'Sem perder conta',
      'Com equipe enxuta',
    ],
  },
  bloco03: {
    eyebrow: 'O MAR AZUL',
    title: 'Enquanto todos estavam focados nas principais redes, eu descobri um mar azul praticamente intocado.',
    body: [
      { lead: 'Chega de gastar', highlight: 'R$ 1.000', tail: 'para testar um único criativo rodando nutracêutico.' },
      { lead: 'No Meta, é comum gastar', highlight: 'R$ 30.000', tail: 'ou mais só para testar um produto que depois será clonado em 2 semanas.' },
      { lead: 'No TikTok, eu escalo com', highlight: 'lucro e previsibilidade', tail: 'todos os dias, em países como EUA e os maiores da Europa — com os mesmos níveis de escala e muito menos competição.' },
      { lead: 'E o melhor,', highlight: 'sem ninguém conseguir te clonar,', tail: 'afinal pouca gente sabe rodar de fato na melhor rede do momento.' },
    ],
  },
  bloco04: {
    eyebrow: 'A PROMESSA',
    title: 'Eu vou pegar na sua mão.',
    body: 'Eu vou pegar na sua mão e te guiar com o conhecimento que levei anos (e muitos prejuízos) para consolidar.',
    subtitle: 'Mesmo que você…',
    items: [
      'Esteja começando agora',
      'Nunca tenha rodado TikTok',
      'Não tenha uma equipe',
      'Tenha pouco caixa',
      'Rode Nutracêutico ou Infoproduto',
    ],
    closer: 'Você só precisa de direcionamento e execução.',
  },
  bloco05: {
    eyebrow: 'OS DOIS CAMINHOS',
    title: 'Existem 2 caminhos pra você faturar milhares de dólares todos os dias.',
    subtitle: 'E eu posso te ajudar em ambos.',
    paths: [
      {
        tag: '01',
        name: 'NUTRACÊUTICO',
        stat: 'CPA < $120',
        bullets: [
          'Margem de lucro mais alta',
          'Escala previsível',
          'Menos concorrência',
          'CPA menor que $120',
        ],
      },
      {
        tag: '02',
        name: 'INFOPRODUTO',
        stat: 'CPA < $30',
        bullets: [
          'Chances altas de acertar rápido',
          'Menor risco',
          'É possível iniciar com pouco caixa',
          'CPA menor que $30',
        ],
      },
    ],
  },
  bloco06: {
    eyebrow: 'PARA QUEM É',
    title: 'Para quem é a consultoria…',
    items: [
      { k: '01', text: 'É iniciante e nunca escalou, mas quer lucrar de $10.000 a $100.000 por mês' },
      { k: '02', text: 'Já rodou no Meta, tomou prejuízo, e quer vender em uma fonte de tráfego menos concorrida' },
      { k: '03', text: 'Quer uma alternativa real, com margem alta e baixa concorrência' },
      { k: '04', text: 'Trabalha com tráfego direto (info ou nutra) e ainda não tem resultados expressivos' },
      { k: '05', text: 'Busca um passo a passo claro para escalar em menos de 30 dias' },
    ],
  },
  bloco07: {
    eyebrow: 'A OFERTA',
    bigTitle: 'E O MELHOR…',
    smash: 'EU NÃO VOU TE VENDER NADA.',
    body: [
      'Essa consultoria é 100% gratuita, porque antes de qualquer proposta, eu quero entender quem é você, onde você está agora e se realmente faz sentido essa implementação de TikTok.',
      'Se fizer, vou montar um plano de ação personalizado e te acompanhar pessoalmente por 12 meses para escalar sua operação no TikTok.',
    ],
    duration: '12 MESES DE ACOMPANHAMENTO PESSOAL',
    cta: 'FAZER APLICAÇÃO GRATUITA',
  },
  footer: {
    disclaimer: 'Este site não é afiliado ao TikTok, Meta, Google ou a qualquer entidade dessas plataformas. Depois que você sair dessas plataformas, a responsabilidade não é delas e sim do nosso site. Fazemos todos os esforços para indicar claramente e mostrar todas as provas do produto e usamos resultados reais.',
    links: ['Termos de uso', 'Políticas de privacidade'],
    copyright: 'Copyright 2026 © | Cauã Albuquerque | Todos os direitos reservados',
  },
  scarcity: {
    bar: 'VAGAS LIMITADAS · APENAS 12 SELECIONADOS POR CICLO',
    slots: { total: 12, left: 4 },
  },
};

window.CAUA_CONTENT = CAUA_CONTENT;
