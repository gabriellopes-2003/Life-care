"use client"

import Image from "next/image"
import type { CSSProperties } from "react"
import type { LucideIcon } from "lucide-react"
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  Brain,
  CheckCircle2,
  HeartPulse,
  Lock,
  Microscope,
  ScanLine,
  Stethoscope,
  TrendingUp,
  Watch,
  Zap,
} from "lucide-react"

const navItems = [
  ["Início", "#inicio"],
  ["O Ecossistema", "#ecossistema"],
  ["Como Funciona", "#gps"],
  ["Tecnologia", "#tecnologia"],
  ["LMIS", "#lmis"],
  ["Casos Clínicos", "#casos"],
  ["Programa", "#programa"],
  ["Dr. Muriel", "#contato"],
]

const alerts = [
  ["Inflamação", "Elevada"],
  ["Estresse oxidativo", "Elevado"],
  ["HRV", "Baixo"],
  ["Qualidade do sono", "Baixa"],
  ["Metabolismo", "Diminuído"],
]

const dataBlocks: Array<[LucideIcon, string, string, string?]> = [
  [
    Activity,
    "Bioimpedância",
    "Composição corporal precisa: gordura visceral, massa muscular, água intracelular, água extracelular e ângulo de fase.",
  ],
  [
    Zap,
    "Calorimetria indireta",
    "Taxa metabólica basal medida diretamente, não estimada. Menos erro na prescrição nutricional.",
  ],
  [
    ScanLine,
    "Visbody M30",
    "Scanner corporal 3D com IA, avatar 360, circunferências, postura, simetria e composição segmentar.",
    "VISBODY 3D",
  ],
  [
    Watch,
    "LifeCare Ring",
    "Dados contínuos de sono, variabilidade cardíaca, frequência cardíaca, recuperação e atividade diária.",
    "HRV · SONO · RECUPERAÇÃO",
  ],
  [
    Microscope,
    "Exames laboratoriais",
    "Painel completo de biomarcadores: hormônios, inflamação, metabolismo glicídico, lipídico e micronutrientes.",
  ],
  [
    Brain,
    "Comportamento",
    "Mapeamento de padrões alimentares, sedentarismo, estresse, rotina e adesão ao plano terapêutico.",
  ],
]

const gpsSteps: Array<[string, LucideIcon, string, string]> = [
  [
    "01",
    ScanLine,
    "Coleta de dados",
    "Wearable, Visbody 3D, bioimpedância, calorimetria, exames laboratoriais, histórico clínico e dados comportamentais.",
  ],
  [
    "02",
    Brain,
    "Processamento LMIS",
    "11 blocos de avaliação integrada, dashboards, scores objetivos, fenótipos metabólicos e clusters em uma visão unificada.",
  ],
  [
    "03",
    Stethoscope,
    "Decisão clínica",
    "Trajectory Engine, Cardiovascular Engine e Decision Engine priorizam o maior impacto com menor risco.",
  ],
  [
    "04",
    TrendingUp,
    "Ajuste contínuo",
    "Recalibração dinâmica a cada novo dado coletado. O sistema fica mais preciso com o tempo.",
  ],
]

const scores = [
  ["BCS", "Body Composition", 76],
  ["LMS", "Metabolic", 63],
  ["LBS", "Bioenergetic", 71],
  ["LAS", "Autonomic", 58],
  ["LCIS", "Cardiometabolic", 49],
  ["LHS", "Hormonal", 66],
  ["NGS", "Global", 69],
]

const fhfMetrics = [
  ["Peso corporal", "125,1 kg", "92,0 kg", "-33,1 kg"],
  ["IMC", "39,4", "29,0", "-10,4"],
  ["Gordura corporal", "37,0%", "26,3%", "-10,7 pp"],
  ["Massa gorda", "46,3 kg", "24,2 kg", "-22,1 kg"],
  ["Circ. abdominal", "122 cm", "93,5 cm", "-28,5 cm"],
]

const dcMetrics = [
  ["Peso", "85 kg", "71,8 kg", "-13,2 kg"],
  ["Gordura corporal", "36,6%", "26,0%", "-10,6 pp"],
  ["Massa gorda", "31,1 kg", "18,7 kg", "-12,4 kg"],
  ["IMC", "29,4", "24,8", "Eutrofia"],
  ["Relação músculo/gordura", "0,8", "1,4", "Quase dobrou"],
]

const protocolPillars = [
  ["Nutrição estratégica", "Protocolo alimentar individualizado e periodizado conforme fase metabólica e resposta biológica."],
  ["Preservação muscular", "Estratégias ativas para proteger tecido nobre durante déficit calórico prolongado."],
  ["Treino estruturado", "Exercício adaptado ao fenótipo e à capacidade funcional em cada etapa da jornada."],
  ["Inteligência metabólica", "Leitura contínua de marcadores funcionais para orientar ajustes clínicos com precisão."],
  ["Monitoramento contínuo", "Rastreabilidade longitudinal com reavaliações periódicas e decisões baseadas em evidências."],
  ["Ajustes por dados", "Cada decisão sustentada por biomarcadores objetivos, não por percepção subjetiva."],
]

function SectionLabel({ children }: { children: string }) {
  return <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-[#C9A84C]">{children}</p>
}

function Gauge({ label, value }: { label: string; value: number }) {
  return (
    <div className="lcp-gauge">
      <div className="lcp-gauge-ring" style={{ "--value": `${value * 3.6}deg` } as CSSProperties}>
        <span>{value}</span>
      </div>
      <p>{label}</p>
    </div>
  )
}

function HeroDashboard() {
  return (
    <div className="lcp-dashboard">
      <div className="lcp-dashboard-header">
        <div>
          <span>DASHBOARD LIFECARE</span>
          <strong>Status biológico</strong>
        </div>
        <div className="lcp-pulse-icon">
          <HeartPulse className="size-6" />
        </div>
      </div>

      <div className="lcp-avatar-panel">
        <Image
          src="/body-dashboard.png"
          alt="Avatar biológico digital com painéis de métricas LifeCare"
          width={360}
          height={520}
          priority
        />
      </div>

      <div className="lcp-alert-card">
        <div className="flex items-center gap-3">
          <AlertTriangle className="size-5 text-[#CC2200]" />
          <strong>Alertas precoces</strong>
        </div>
        <div className="mt-4 grid gap-2">
          {alerts.map(([label, status]) => (
            <div key={label} className="flex items-center justify-between gap-3 border-t border-white/10 pt-2">
              <span>{label}</span>
              <b>{status}</b>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        {[
          ["HRV", "42 ms"],
          ["Inflamação", "7.8 mg/L"],
          ["Metabolismo", "-18% vs. ideal"],
        ].map(([label, value]) => (
          <div key={label} className="lcp-metric">
            <span>{label}</span>
            <strong>{value}</strong>
          </div>
        ))}
      </div>
    </div>
  )
}

function CaseTable({ rows }: { rows: string[][] }) {
  return (
    <div className="overflow-hidden rounded-lg border border-white/10">
      <div className="grid grid-cols-4 bg-white/5 px-4 py-3 font-mono text-[10px] uppercase tracking-[0.16em] text-white/50">
        <span>Métrica</span>
        <span>Antes</span>
        <span>Depois</span>
        <span>Variação</span>
      </div>
      {rows.map((row) => (
        <div key={row[0]} className="grid grid-cols-4 gap-2 border-t border-white/10 px-4 py-3 text-sm text-white/76">
          <span className="font-medium text-white">{row[0]}</span>
          <span>{row[1]}</span>
          <span>{row[2]}</span>
          <span className="font-semibold text-[#C9A84C]">{row[3]}</span>
        </div>
      ))}
    </div>
  )
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0A0D1A] text-white">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0A0D1A]/82 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5">
          <a href="#inicio" className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-md border border-[#C9A84C]/40 bg-[#C9A84C]/10 text-[#C9A84C]">
              <HeartPulse className="size-5" />
            </span>
            <span className="leading-tight">
              <strong className="block text-sm font-black uppercase tracking-[0.16em]">LifeCare</strong>
              <small className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C9A84C]">
                Medical Performance
              </small>
            </span>
          </a>
          <div className="hidden items-center gap-5 lg:flex">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} className="text-xs font-bold uppercase tracking-[0.14em] text-white/58 transition hover:text-[#C9A84C]">
                {label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <section id="inicio" className="lcp-hero relative overflow-hidden px-5 pt-32">
        <div className="lcp-grid-bg" aria-hidden="true" />
        <div className="mx-auto grid min-h-[calc(100vh-8rem)] max-w-7xl items-center gap-12 pb-16 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="relative z-10">
            <SectionLabel>Medicina preventiva baseada em dados reais</SectionLabel>
            <h1 className="mt-6 max-w-3xl text-5xl font-black uppercase leading-[0.95] tracking-normal text-white md:text-7xl xl:text-8xl">
              A verdade que seu médico <span className="text-[#C9A84C]">nunca te contou</span>
            </h1>
            <p className="mt-7 max-w-2xl text-xl font-semibold leading-8 text-white/82">
              Exame normal. Corpo adoecendo em silêncio. Seu corpo pode estar mandando sinais que nenhum exame rotineiro é capaz de detectar.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a href="#programa" className="lcp-cta lcp-cta-gold">
                Conheça o Programa <ArrowRight className="size-4" />
              </a>
              <a href="#casos" className="lcp-cta lcp-cta-ghost">
                Ver Casos Clínicos
              </a>
            </div>
            <div className="mt-10 inline-flex items-center gap-3 rounded-md border border-[#C9A84C]/35 bg-[#C9A84C]/8 px-4 py-3 text-xs font-bold uppercase tracking-[0.18em] text-[#C9A84C]">
              <Lock className="size-4" />
              Medicina preventiva baseada em dados reais
            </div>
          </div>
          <HeroDashboard />
        </div>
        <p className="relative z-10 mx-auto pb-8 text-center font-mono text-xs font-semibold uppercase tracking-[0.24em] text-white/50">
          LifeCare · Human Performance System
        </p>
      </section>

      <section className="relative overflow-hidden border-y border-white/10 bg-black px-5 py-24 md:py-32">
        <div className="lcp-ecg" aria-hidden="true" />
        <div className="mx-auto max-w-5xl">
          <h2 className="text-4xl font-black uppercase leading-none tracking-normal text-[#C9A84C] md:text-6xl">
            O problema começa anos antes do diagnóstico
          </h2>
          <div className="mt-14">
            {["Queda metabólica", "Inflamação", "Resistência insulínica", "Doença clínica"].map((item, index) => (
              <div key={item} className="flex items-center gap-5 border-t border-white/18 py-6 last:border-b">
                <span className={`size-3 rounded-full ${index === 3 ? "bg-[#CC2200]" : "bg-[#C9A84C]"}`} />
                <p className={`text-2xl font-black uppercase tracking-normal ${index === 3 ? "text-[#CC2200]" : "text-white"}`}>
                  {item}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-12 text-2xl font-black uppercase leading-9 text-white md:text-3xl">
            O corpo não falha de repente. Existe uma rota invisível que precede qualquer sintoma.
          </p>
        </div>
      </section>

      <section id="tecnologia" className="relative overflow-hidden px-5 py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="lcp-scan-card">
            <Image
              src="/lifecare-assets/metabolic-alert-scan.png"
              alt="Scan biométrico metabólico com alertas clínicos em ciano e vermelho"
              width={1792}
              height={1024}
            />
          </div>
          <div>
            <SectionLabel>Alerta biométrico</SectionLabel>
            <h2 className="mt-5 text-4xl font-black uppercase leading-none tracking-normal md:text-6xl">
              Seu metabolismo está envelhecendo?
            </h2>
            <div className="mt-8 border-l-4 border-[#CC2200] bg-white/[0.04] p-6">
              <p className="text-xl font-black uppercase leading-8 text-white">
                Sem dados, você está apenas adivinhando. O estresse oxidativo e o colapso do sistema nervoso podem estar ocorrendo agora.
              </p>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="lcp-alert-stat">
                <span>Performance</span>
                <strong>-24%</strong>
              </div>
              <div className="lcp-alert-stat">
                <span>Estresse oxid.</span>
                <strong>Crítico</strong>
              </div>
            </div>
            <a href="#contato" className="mt-8 inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.16em] text-[#C9A84C]">
              Descubra seu status biológico <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </section>

      <section id="ecossistema" className="bg-[#0D1B2A] px-5 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-black uppercase leading-none tracking-normal md:text-6xl">
              LifeCare e LMIS: dois sistemas. Um ecossistema.
            </h2>
            <p className="mt-6 text-xl leading-8 text-white/68">
              O LifeCare é o programa médico. O LMIS é o cérebro tecnológico. Juntos, formam o sistema operacional da sua saúde.
            </p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <article className="lcp-system-card border-[#00B4D8]/55">
              <SectionLabel>LifeCare Medical Performance</SectionLabel>
              <h3>O Programa Médico Premium</h3>
              <p>
                Um programa médico contínuo de inteligência metabólica, performance e longevidade. Não é clínica tradicional de consulta rápida, pacote anual de check-up, dieta ou treino genérico.
              </p>
              <p>
                É um ecossistema estruturado, com avaliação clínica aprofundada, medições avançadas, monitoramento contínuo, plano personalizado e reavaliações estratégicas.
              </p>
              <em>O caminho do paciente: estruturado, contínuo e baseado em dados.</em>
            </article>
            <article className="lcp-system-card border-[#C9A84C]/70">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-[#00B4D8]">
                LMIS · LifeCare Metabolic Intelligence System
              </p>
              <h3>O Cérebro Tecnológico</h3>
              <p>
                O LMIS organiza e interpreta wearable, Visbody 3D, exames laboratoriais, bioimpedância e histórico clínico em uma estrutura única, não em relatórios soltos.
              </p>
              <p>
                Gera scores integrados, projeta trajetórias biológicas e apoia cada decisão médica com Trajectory Engine, Cardiovascular Engine e Decision Engine.
              </p>
              <em className="text-[#00B4D8]">A plataforma que transforma dados em decisões inteligentes.</em>
            </article>
          </div>
          <p className="mt-12 text-center text-2xl font-semibold italic text-white">Saúde não é evento. É sistema.</p>
        </div>
      </section>

      <section className="px-5 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="lcp-visbody">
            <Image
              src="/lifecare-assets/digital-twin-visbody.png"
              alt="Digital Twin corporal em scanner 3D com painéis de análise LifeCare"
              width={1792}
              height={1024}
            />
            <div className="absolute bottom-5 left-5 flex gap-3">
              <span className="bg-[#C9A84C] px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-black">VISBODY 3D</span>
              <span className="bg-white px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-black">HRV Scan</span>
            </div>
          </div>
          <div className="bg-[#0D1B2A] p-7 md:p-12">
            <h2 className="text-4xl font-black uppercase leading-none tracking-normal md:text-6xl">
              A análise que exames isolados ignoram
            </h2>
            <p className="mt-6 max-w-5xl text-xl font-bold uppercase leading-8 text-white/76">
              O LifeCare mapeia drivers metabólicos através de exames corporais e laboratoriais, além de anamnese minuciosa. Enxergamos clusters de dados que definem sua longevidade real.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <h2 className="max-w-4xl text-4xl font-black uppercase leading-none tracking-normal md:text-6xl">
            Visão 360: nenhum dado fica de fora
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {dataBlocks.map(([Icon, title, text, badge]) => (
              <article key={title} className="lcp-data-card">
                <Icon className="size-7 text-[#00B4D8]" />
                {badge && <span>{badge}</span>}
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="gps" className="bg-[#0D1B2A] px-5 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-black uppercase leading-none tracking-normal md:text-6xl">
            Como funciona: o modelo GPS da saúde
          </h2>
          <p className="mt-6 max-w-4xl text-xl leading-8 text-white/68">
            Assim como um GPS recalcula a rota em tempo real, o LifeCare monitora, processa e ajusta continuamente sua conduta clínica.
          </p>
          <div className="mt-12 grid gap-5 lg:grid-cols-4">
            {gpsSteps.map(([number, Icon, title, text]) => (
              <article key={number} className="lcp-step-card">
                <span>{number}</span>
                <Icon className="mt-8 size-8 text-[#00B4D8]" />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <p className="mt-12 text-center text-xl font-black uppercase leading-8 text-[#C9A84C]">
            Quanto mais tempo no programa, mais refinadas e eficazes se tornam as intervenções clínicas.
          </p>
        </div>
      </section>

      <section id="lmis" className="lcp-grid-section px-5 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <SectionLabel>LMIS · Scores e inteligência</SectionLabel>
              <h2 className="mt-5 text-5xl font-black uppercase leading-none tracking-normal md:text-7xl">
                Sem achismo. Só dados.
              </h2>
              <p className="mt-7 text-xl leading-8 text-white/68">
                Sete scores objetivos, de 0 a 100, revelam onde está o gargalo do seu sistema biológico e direcionam a intervenção com precisão.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {scores.map(([code, label, value]) => (
                <Gauge key={code} label={`${code} · ${label}`} value={Number(value)} />
              ))}
            </div>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {[
              ["Trajectory Engine", "Projeta para onde sua biologia está indo e como cada intervenção muda essa trajetória no tempo."],
              ["Cardiovascular Engine", "Integra HRV, exames e histórico para calibrar carga e recuperação com precisão individual."],
              ["Decision Engine", "Prioriza o que fazer primeiro: maior impacto, menor risco e decisão baseada em dados objetivos."],
            ].map(([title, text]) => (
              <article key={title} className="lcp-engine-card">
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 rounded-lg border border-[#CC2200] bg-[#0D1B2A] p-6">
            <p className="font-mono text-xs font-black uppercase tracking-[0.18em] text-[#CC2200]">Múltiplos alertas ativos</p>
            <p className="mt-4 text-lg font-semibold leading-8 text-white/78">
              O sistema identifica quando o organismo está sob múltiplas pressões simultâneas: sono crítico, queda de massa magra, baixa adesão, PCR elevada, insulina elevada, testosterona baixa e cortisol elevado.
            </p>
            <p className="mt-4 font-black uppercase text-[#CC2200]">Tradução direta: desequilíbrio sistêmico.</p>
          </div>
        </div>
      </section>

      <section id="casos" className="bg-black px-5 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Resultados reais</SectionLabel>
          <h2 className="mt-5 max-w-5xl text-4xl font-black uppercase leading-none tracking-normal text-[#C9A84C] md:text-6xl">
            A transformação que os dados revelam
          </h2>
          <p className="mt-6 max-w-4xl text-xl leading-8 text-white/72">
            Dois exemplos de transformação acompanhada por dados: redução de risco, recomposição corporal e evolução metabólica documentada ao longo do tempo.
          </p>
          <div className="mt-12 grid gap-8">
            <article className="lcp-case-card border-[#CC2200]">
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                <div>
                  <p className="font-mono text-xs font-black uppercase tracking-[0.18em] text-[#CC2200]">Resultado 01</p>
                  <h3>Transformação cardiometabólica em 12 meses</h3>
                </div>
                <span>12 meses · masculino · obesidade cardiometabólica</span>
              </div>
              <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="grid content-start gap-5">
                  <p className="text-lg font-semibold leading-8 text-white/76">
                    Um paciente iniciou o LifeCare em 15/05/2025 com 125,1 kg, IMC 39,4 e 37% de gordura corporal, perfil compatível com obesidade cardiometabólica hipertrófica, inflamação silenciosa e baixa flexibilidade energética.
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {[
                      ["Sintomas associados", "Fadiga persistente, pior recuperação, oscilação de energia e dificuldade de concentração."],
                      ["Drivers dominantes", "Gordura visceral, resistência insulínica, inflamação crônica e disfunção autonômica."],
                      ["Potencial de resposta", "Ângulo de fase elevado e preservação muscular indicavam alta capacidade terapêutica."],
                      ["Fenótipo atual", "Sobrepeso metabólico com preservação muscular e risco moderado/baixo."],
                    ].map(([title, text]) => (
                      <div key={title} className="lcp-insight-card">
                        <strong>{title}</strong>
                        <p>{text}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="lcp-proof-image">
                  <Image
                    src="/lifecare-cases/fhf-image10.png"
                    alt="Dashboard LifeCare de bioimpedância e avatar corporal de transformação cardiometabólica"
                    width={1890}
                    height={1512}
                  />
                </div>
              </div>
              <CaseTable rows={fhfMetrics} />
              <div className="grid gap-4 md:grid-cols-4">
                {[
                  ["-33,1 kg", "peso corporal eliminado"],
                  ["-22,1 kg", "massa gorda eliminada"],
                  ["-28,5 cm", "circunferência abdominal"],
                  ["+75%", "relação músculo/gordura"],
                ].map(([value, label]) => (
                  <div key={label} className="lcp-result-tile">
                    <strong>{value}</strong>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
              <p className="lcp-case-quote">
                O objetivo nunca foi apenas emagrecer. Foi preservar performance enquanto eliminava risco biológico.
              </p>
            </article>

            <article className="lcp-case-card border-[#C9A84C]">
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                <div>
                  <p className="font-mono text-xs font-black uppercase tracking-[0.18em] text-[#C9A84C]">Resultado 02</p>
                  <h3>Recomposição metabólica longitudinal</h3>
                </div>
                <span>22 meses · feminino · 38 anos</span>
              </div>
              <p className="text-lg font-semibold leading-8 text-white/76">
                Uma paciente de 38 anos entrou no LifeCare em julho de 2024 com deterioração cardiometabólica silenciosa. O LMIS identificou o ponto de virada: ângulo de fase 7,4°, sinal de integridade celular e alta capacidade de recomposição.
              </p>
              <CaseTable rows={dcMetrics} />
              <div className="grid gap-4 md:grid-cols-3">
                {[
                  ["Julho 2024", "85 kg · 36,6% gordura · IMC 29,4 · ângulo de fase 7,4°"],
                  ["Fevereiro 2025", "-9,5 kg · -7,6 kg gordura · -13 cm abdominal · ângulo de fase 7,9°"],
                  ["Maio 2026", "71,8 kg · 26% gordura · IMC 24,8 · relação músculo/gordura 1,4"],
                ].map(([title, text]) => (
                  <div key={title} className="lcp-timeline-tile">
                    <strong>{title}</strong>
                    <p>{text}</p>
                  </div>
                ))}
              </div>
              <div className="grid gap-4 md:grid-cols-4">
                {["Rastreabilidade metabólica", "Preservação muscular", "Inteligência longitudinal", "Análise estrutural 3D"].map((item) => (
                  <div key={item} className="rounded-md border border-white/10 bg-white/[0.03] p-4 text-sm font-semibold text-white/76">
                    {item}
                  </div>
                ))}
              </div>
              <div className="rounded-lg border border-[#00B4D8]/30 bg-[#00B4D8]/[0.05] p-6">
                <p className="font-mono text-xs font-black uppercase tracking-[0.18em] text-[#00B4D8]">Digital Twin estrutural</p>
                <p className="mt-4 text-lg leading-8 text-white/72">
                  Com Visbody, o acompanhamento deixou de olhar apenas peso e bioimpedância: passou a mapear circunferências segmentares, distribuição de gordura, simetria, postura, genu valgo e restrições de mobilidade para refinar a longevidade musculoesquelética.
                </p>
              </div>
              <p className="lcp-case-quote">A paciente não apenas emagreceu. Ela se transformou.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0D1B2A] px-5 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Protocolo clínico</SectionLabel>
          <h2 className="mt-5 max-w-5xl text-4xl font-black uppercase leading-none tracking-normal md:text-6xl">
            O que o LifeCare faz quando os dados mostram a rota.
          </h2>
          <p className="mt-6 max-w-4xl text-xl leading-8 text-white/68">
            As apresentações reforçam um ponto central: o resultado não vem de uma intervenção isolada. Ele nasce de ciclos de diagnóstico, protocolo, ajuste e reavaliação.
          </p>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {protocolPillars.map(([title, text]) => (
              <article key={title} className="lcp-protocol-card">
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <p className="mt-12 text-center text-2xl font-semibold italic text-white">
            Dados geram consciência. Consciência gera adesão. Adesão gera transformação.
          </p>
        </div>
      </section>

      <section id="programa" className="px-5 py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <SectionLabel>Para quem é</SectionLabel>
            <h2 className="mt-5 text-4xl font-black uppercase leading-none tracking-normal text-[#C9A84C] md:text-6xl">
              Feito para quem não aceita o declínio como destino
            </h2>
            <p className="mt-7 text-xl leading-8 text-white/72">
              Desenvolvido para executivos, empresários, médicos, atletas e profissionais de alta performance que entendem que o corpo é o principal ativo de uma vida de resultados.
            </p>
          </div>
          <div className="grid gap-4">
            {[
              "Dados sobre suposições.",
              "Medicina preventiva antes da doença instalada.",
              "Performance, longevidade e metabolismo no mesmo sistema.",
              "Acompanhamento longitudinal com decisão clínica guiada por dados.",
            ].map((item) => (
              <div key={item} className="flex items-center gap-4 rounded-lg border border-[#C9A84C]/26 bg-[#C9A84C]/7 p-5">
                <CheckCircle2 className="size-5 shrink-0 text-[#C9A84C]" />
                <p className="font-bold text-white/88">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="border-t border-white/10 bg-[#0D1B2A] px-5 py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <SectionLabel>Demonstração</SectionLabel>
            <h2 className="mt-5 text-4xl font-black uppercase leading-none tracking-normal md:text-6xl">
              Descubra o que seus exames isolados não mostram.
            </h2>
            <p className="mt-7 max-w-2xl text-xl leading-8 text-white/72">
              Agende uma conversa objetiva para entender como o LifeCare pode mapear seu status biológico, seus riscos silenciosos e sua trajetória de performance.
            </p>
          </div>
          <form
            action="mailto:contato@lifecareperformance.com?subject=Solicitacao%20LifeCare%20Medical%20Performance"
            method="post"
            encType="text/plain"
            className="rounded-lg border border-white/12 bg-black/28 p-6"
          >
            <div className="grid gap-4">
              {[
                ["Nome", "nome"],
                ["Email", "email"],
                ["Telefone", "telefone"],
              ].map(([label, name]) => (
                <label key={name} className="grid gap-2 text-sm font-bold uppercase tracking-[0.12em] text-white/62">
                  {label}
                  <input name={name} required className="h-12 rounded-md border border-white/12 bg-white/[0.04] px-4 text-base normal-case tracking-normal text-white outline-none transition focus:border-[#C9A84C]" />
                </label>
              ))}
              <label className="grid gap-2 text-sm font-bold uppercase tracking-[0.12em] text-white/62">
                Objetivo principal
                <textarea name="objetivo" required className="min-h-28 rounded-md border border-white/12 bg-white/[0.04] p-4 text-base normal-case tracking-normal text-white outline-none transition focus:border-[#C9A84C]" />
              </label>
              <button type="submit" className="lcp-cta lcp-cta-gold mt-2 justify-center">
                Agendar demonstração <ArrowRight className="size-4" />
              </button>
            </div>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-white/48 md:flex-row md:items-center md:justify-between">
          <span className="font-bold uppercase tracking-[0.16em] text-white">LifeCare Medical Performance</span>
          <span>© 2026 LifeCare Performance. Todos os direitos reservados.</span>
        </div>
      </footer>
    </main>
  )
}
