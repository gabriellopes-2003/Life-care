"use client"

import { useEffect, useMemo, useRef, useState, type ReactNode } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  Activity,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Clock,
  Dna,
  FlaskConical,
  HeartPulse,
  LineChart,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Target,
  TrendingUp,
  Users,
  Watch,
  Zap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { HeroOrb3D } from "@/components/hero-orb-3d"

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  return (
    <div className={`lifecare-reveal ${className}`} style={{ animationDelay: `${delay}s` }}>
      {children}
    </div>
  )
}

function MetricCard({
  label,
  value,
  detail,
  icon,
  delay = 0,
}: {
  label: string
  value: string
  detail: string
  icon: ReactNode
  delay?: number
}) {
  return (
    <div
      className="gsap-card gsap-hover lifecare-motion-card rounded-lg border border-border bg-card p-5 shadow-[0_18px_50px_rgba(27,43,67,0.06)]"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="mb-5 flex items-center justify-between">
        <div className="lifecare-icon-pulse grid size-10 place-items-center rounded-md bg-primary/10 text-primary">
          {icon}
        </div>
        <span className="lifecare-live-dot font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          ao vivo
        </span>
      </div>
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="mt-2 text-3xl font-semibold tracking-tight text-foreground">{value}</p>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">{detail}</p>
    </div>
  )
}

function AnimatedLine({ tone = "primary" }: { tone?: "primary" | "cyan" | "gold" }) {
  const strokeClass =
    tone === "gold" ? "stroke-accent" : tone === "cyan" ? "stroke-cyan" : "stroke-primary"

  return (
    <svg viewBox="0 0 260 86" className="lifecare-chart h-full w-full overflow-visible">
      <path
        d="M 4 74 C 38 68, 41 46, 74 50 S 122 76, 151 45 S 202 18, 256 12"
        className="stroke-border"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <motion.path
        d="M 4 74 C 38 68, 41 46, 74 50 S 122 76, 151 45 S 202 18, 256 12"
        className={`${strokeClass} lifecare-chart-line`}
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.8, ease: "easeOut" }}
      />
      {[74, 151, 256].map((x, index) => (
        <motion.circle
          key={x}
          cx={x}
          cy={index === 0 ? 50 : index === 1 ? 45 : 12}
          r="4"
          className="lifecare-chart-dot fill-background stroke-primary"
          strokeWidth="2"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 + index * 0.15, duration: 0.35 }}
        />
      ))}
    </svg>
  )
}

function ProgressRing({ value, label }: { value: number; label: string }) {
  const circumference = 2 * Math.PI * 34

  return (
    <div className="flex items-center gap-4">
      <svg width="82" height="82" viewBox="0 0 82 82" className="lifecare-ring -rotate-90">
        <circle cx="41" cy="41" r="34" fill="none" stroke="currentColor" strokeWidth="7" className="text-muted" />
        <motion.circle
          cx="41"
          cy="41"
          r="34"
          fill="none"
          stroke="currentColor"
          strokeWidth="7"
          strokeLinecap="round"
          className="text-primary"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: circumference - (value / 100) * circumference }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        />
      </svg>
      <div>
        <p className="text-2xl font-semibold">{value}%</p>
        <p className="text-sm text-muted-foreground">{label}</p>
      </div>
    </div>
  )
}

function DashboardPreview() {
  const biomarkers = [
    ["VO2", "alta", "text-cyan"],
    ["HRV", "estavel", "text-primary"],
    ["Glicose", "atenção", "text-accent"],
    ["Sono", "recuperando", "text-cyan"],
  ]

  return (
    <div className="lifecare-reveal relative" style={{ animationDelay: ".18s" }}>
      <div className="lifecare-side-scan absolute -left-6 top-12 hidden h-48 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent lg:block" />
      <div className="lifecare-dashboard hero-dashboard-loop relative overflow-hidden rounded-lg border border-border bg-card p-4 shadow-[0_30px_80px_rgba(27,43,67,0.10)]">
        <div className="lifecare-scanline" aria-hidden="true" />
        <div className="mb-4 flex items-center justify-between rounded-md bg-muted/60 px-4 py-3">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              LifeCare OS
            </p>
            <p className="mt-1 font-medium">Painel de performance clínica</p>
          </div>
          <motion.div
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            className="lifecare-heart grid size-11 place-items-center rounded-full bg-primary text-primary-foreground"
          >
            <HeartPulse className="size-5" />
          </motion.div>
        </div>

        <div className="grid gap-4 md:grid-cols-[1.2fr_.8fr]">
          <div className="lifecare-motion-card rounded-md border border-border bg-background p-5">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Risco metabólico</p>
                <p className="mt-1 text-3xl font-semibold tracking-tight">-24%</p>
              </div>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                90 dias
              </span>
            </div>
            <div className="h-28">
              <AnimatedLine />
            </div>
          </div>

          <div className="grid gap-4">
            <div className="lifecare-motion-card rounded-md border border-border bg-background p-5">
              <ProgressRing value={84} label="adesão ao plano" />
            </div>
            <div className="lifecare-motion-card rounded-md border border-border bg-background p-5">
              <p className="text-sm text-muted-foreground">Próxima ação</p>
              <p className="mt-2 font-medium leading-6">
                Ajustar treino de força e revisar janela alimentar.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 grid gap-3 md:grid-cols-4">
          {biomarkers.map(([name, status, color], index) => (
            <div
              key={name}
              className="lifecare-data-chip rounded-md border border-border bg-background p-4"
              style={{ animationDelay: `${0.35 + index * 0.06}s` }}
            >
              <p className="text-xs text-muted-foreground">{name}</p>
              <p className={`mt-2 text-sm font-medium ${color}`}>{status}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function DataRibbon() {
  const items = useMemo(
    () => ["Bioimpedancia", "VO2", "HRV", "Glicose", "Sono", "Forca", "Risco", "Nutrição", "Metabolismo", "Check-up"],
    []
  )

  return (
    <div className="lifecare-clip-stage overflow-hidden border-y border-border bg-background py-4">
      <motion.div
        className="flex w-max gap-4"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        {[...items, ...items, ...items].map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="lifecare-ribbon-chip rounded-full border border-border bg-card px-4 py-2 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  )
}

function HeroTelemetry() {
  const items = [
    ["VO2", "+12%", "capacidade"],
    ["HRV", "84", "recuperacao"],
    ["Sono", "7h42", "janela ideal"],
    ["Risco", "-24%", "metabolico"],
  ]

  return (
    <div className="hero-telemetry" aria-hidden="true">
      {items.map(([label, value, detail], index) => (
        <div key={label} className="hero-telemetry-chip" style={{ animationDelay: `${index * 0.45}s` }}>
          <span>{label}</span>
          <strong>{value}</strong>
          <small>{detail}</small>
        </div>
      ))}
    </div>
  )
}

function DashboardScrollExperience() {
  const steps = [
    {
      eyebrow: "01 / coleta",
      title: "Dados entram no sistema",
      text: "Avaliação, exames, bioimpedância e sinais de rotina chegam ao mesmo painel.",
      metric: "18 fontes",
      status: "sincronizadas",
    },
    {
      eyebrow: "02 / leitura",
      title: "O risco fica visível",
      text: "Biomarcadores e recuperação são cruzados para separar prioridade clínica de ruído.",
      metric: "-24%",
      status: "risco metabólico",
    },
    {
      eyebrow: "03 / plano",
      title: "A ação aparece clara",
      text: "A equipe recebe o próximo ajuste prático para treino, nutrição e acompanhamento.",
      metric: "91%",
      status: "clareza de plano",
    },
    {
      eyebrow: "04 / evolução",
      title: "O valor vira recorrência",
      text: "O aluno acompanha progresso fisiológico e entende por que continuar no plano.",
      metric: "+32%",
      status: "adesão projetada",
    },
  ]
  const signalLabels = ["VO2 max", "HRV", "Sono", "Glicose", "Forca", "Risco"]

  return (
    <section id="dashboard" className="dashboard-scroll-story dashboard-static-story relative border-y border-border bg-foreground py-24 text-background md:py-32">
      <div className="dashboard-depth-grid absolute inset-0" aria-hidden="true" />
      <div className="dashboard-scroll-pin flex items-center">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div className="max-w-xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-background/50">dashboard vivo</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              O dashboard mostra a jornada do aluno em uma visão clara.
            </h2>
            <p className="mt-6 text-lg leading-8 text-background/62">
              Uma seção direta para o visitante entender como o produto processa dados,
              revela risco, sugere ação e mostra evolução.
            </p>

            <div className="mt-10 grid gap-3">
              {steps.map((step, index) => (
                <div
                  key={step.eyebrow}
                  className="dashboard-story-step rounded-lg border border-background/10 bg-background/[0.035] p-4 transition-colors"
                  data-step={index}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-primary">{step.eyebrow}</p>
                      <h3 className="mt-2 text-xl font-semibold tracking-tight">{step.title}</h3>
                    </div>
                    <span className="dashboard-step-dot mt-1 size-2 rounded-full bg-primary" />
                  </div>
                  <p className="mt-3 leading-7 text-background/58">{step.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="dashboard-stage relative">
            <div className="dashboard-orbit-card dashboard-orbit-card-a">
              <p>risco</p>
              <strong>-24%</strong>
              <span>queda projetada</span>
            </div>
            <div className="dashboard-orbit-card dashboard-orbit-card-b">
              <p>adesao</p>
              <strong>91%</strong>
              <span>plano claro</span>
            </div>
            <div className="dashboard-orbit-card dashboard-orbit-card-c">
              <p>alertas</p>
              <strong>7</strong>
              <span>prioridades ativas</span>
            </div>

            <div className="dashboard-device relative overflow-hidden rounded-lg border border-background/12 bg-background p-4 text-foreground shadow-[0_36px_110px_rgba(0,0,0,0.32)]">
            <div className="lifecare-scanline" aria-hidden="true" />
            <div className="mb-4 flex items-center justify-between rounded-md bg-muted/70 px-4 py-3">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">LifeCare OS</p>
                <p className="mt-1 font-medium">Performance médica em tempo real</p>
              </div>
              <div className="lifecare-heart grid size-11 place-items-center rounded-full bg-primary text-primary-foreground">
                <HeartPulse className="size-5" />
              </div>
            </div>

            <div className="dashboard-screen-stage relative min-h-[560px] overflow-hidden rounded-md border border-border bg-card">
              <div className="dashboard-screen-glow" aria-hidden="true" />
              <div className="dashboard-signal-cloud" aria-hidden="true">
                {signalLabels.map((label, index) => (
                  <span key={label} style={{ animationDelay: `${index * 0.28}s` }}>
                    {label}
                  </span>
                ))}
              </div>
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className="dashboard-view absolute inset-0 grid content-between p-5"
                  data-view={index}
                >
                  <div className="dashboard-view-inner grid gap-4 md:grid-cols-[1.1fr_.9fr]">
                    <div className="rounded-md border border-border bg-background p-5">
                      <div className="mb-5 flex items-start justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">{step.title}</p>
                          <p className="mt-2 text-4xl font-semibold tracking-tight">{step.metric}</p>
                        </div>
                        <span className="shrink-0 rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">{step.status}</span>
                      </div>
                      <div className="dashboard-chart-wrap h-44">
                        <AnimatedLine tone={index % 2 === 0 ? "primary" : "cyan"} />
                      </div>
                    </div>

                    <div className="grid gap-4">
                      <div className="dashboard-micro-card rounded-md border border-border bg-background p-5">
                        <ProgressRing value={[68, 76, 91, 84][index]} label={["dados úteis", "risco lido", "plano claro", "adesão"][index]} />
                      </div>
                      <div className="dashboard-micro-card rounded-md border border-border bg-background p-5">
                        <p className="text-sm text-muted-foreground">Próxima ação</p>
                        <p className="mt-2 font-medium leading-6">
                          {[
                            "Validar exames e completar perfil metabólico.",
                            "Priorizar alerta cardiometabólico e recuperação.",
                            "Ajustar treino de força e janela alimentar.",
                            "Enviar relatório de progresso para o aluno.",
                          ][index]}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 grid gap-3 md:grid-cols-4">
                    {["VO2", "HRV", "Glicose", "Sono"].map((item, chipIndex) => (
                      <div key={item} className="dashboard-chip lifecare-data-chip rounded-md border border-border bg-background p-4">
                        <p className="text-xs text-muted-foreground">{item}</p>
                        <p className="mt-2 text-sm font-medium text-primary">
                          {[
                            ["novo", "coletado", "pendente", "ativo"],
                            ["alto", "estável", "atenção", "recuperando"],
                            ["ajustar", "bom", "prioridade", "monitorar"],
                            ["evoluiu", "consistente", "melhorando", "retenção"],
                          ][index][chipIndex]}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProductTimeline() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 72%", "end 35%"],
  })
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1])

  const steps = [
    {
      number: "01",
      title: "Coleta inteligente",
      text: "A academia reúne avaliação física, exames, bioimpedância, dados de treino e sinais de rotina em um único fluxo.",
      icon: <FlaskConical className="size-5" />,
      result: "Base clínica organizada",
    },
    {
      number: "02",
      title: "Leitura médica",
      text: "O LifeCare cruza biomarcadores, recuperação, risco metabólico e evolução para separar ruído de prioridade.",
      icon: <Stethoscope className="size-5" />,
      result: "Riscos e oportunidades claros",
    },
    {
      number: "03",
      title: "Plano de performance",
      text: "A equipe recebe ações práticas para treino, nutrição, acompanhamento e próximos pontos de checagem.",
      icon: <Target className="size-5" />,
      result: "Conduta personalizada",
    },
    {
      number: "04",
      title: "Evolução contínua",
      text: "O sistema acompanha resposta, adesão e necessidade de ajuste, criando percepção de valor mês após mês.",
      icon: <TrendingUp className="size-5" />,
      result: "Retenção e resultado",
    },
  ]

  return (
    <section id="processo" className="bg-foreground py-24 text-background md:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal className="gsap-reveal max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-background/60">linha do tempo</p>
          <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight md:text-5xl">
            O produto aparece como uma jornada, não como uma lista de recursos.
          </h2>
          <p className="mt-6 text-lg leading-8 text-background/65">
            Conforme o visitante desce a página, cada etapa revela como dados soltos viram decisão médica,
            plano de ação e acompanhamento recorrente.
          </p>
        </Reveal>

        <div ref={ref} className="relative mt-16">
          <div className="absolute left-5 top-0 hidden h-full w-px bg-background/15 md:block" />
          <motion.div
            style={{ scaleY: lineScale, transformOrigin: "top" }}
            className="absolute left-5 top-0 hidden h-full w-px bg-primary md:block"
          />

          <div className="gsap-card-group grid gap-8">
            {steps.map((step, index) => (
              <article
                key={step.number}
                className="gsap-card lifecare-timeline-step relative grid gap-5 rounded-lg border border-background/12 bg-background/[0.03] p-6 md:ml-16 md:grid-cols-[.7fr_1.2fr_.65fr] md:p-8"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="lifecare-timeline-node absolute -left-[59px] top-8 hidden size-10 place-items-center rounded-full border border-primary/50 bg-foreground text-primary shadow-[0_0_0_8px_var(--foreground)] md:grid">
                  {step.icon}
                </div>

                <div>
                  <span className="font-mono text-xs text-background/45">{step.number}</span>
                  <h3 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">{step.title}</h3>
                </div>

                <p className="max-w-2xl leading-7 text-background/65">{step.text}</p>

                <div className="lifecare-result-badge flex items-start gap-3 rounded-md border border-background/10 bg-background/[0.04] p-4">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-background/40">resultado</p>
                    <p className="mt-1 font-medium">{step.result}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function HomePage() {
  const pageRef = useRef<HTMLElement>(null)
  const heroRef = useRef(null)
  const [reduceMotion, setReduceMotion] = useState(false)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] })
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.35])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    const updateMotionPreference = () => setReduceMotion(motionQuery.matches)
    updateMotionPreference()
    motionQuery.addEventListener("change", updateMotionPreference)

    if (motionQuery.matches || !pageRef.current) {
      return () => motionQuery.removeEventListener("change", updateMotionPreference)
    }

    const hoverCleanups: Array<() => void> = []

    const context = gsap.context(() => {
      gsap.set(".gsap-hero-item", { autoAlpha: 0, y: 28 })
      gsap.set(".gsap-dashboard", { autoAlpha: 0, y: 34, scale: 0.985 })
      gsap.set(".gsap-reveal", { autoAlpha: 0, y: 42 })
      gsap.set(".gsap-card", { autoAlpha: 0, y: 34 })
      gsap.set(".hero-telemetry-chip", { autoAlpha: 0, y: 18, scale: 0.94 })

      const heroTimeline = gsap.timeline({ defaults: { ease: "power3.out" } })
      heroTimeline
        .to(".gsap-hero-item", {
          autoAlpha: 1,
          y: 0,
          duration: 0.82,
          stagger: 0.09,
        })
        .to(
          ".gsap-dashboard",
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
          },
          "-=0.52"
        )
        .to(
          ".hero-telemetry-chip",
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.58,
            stagger: 0.08,
          },
          "-=0.58"
        )

      gsap.utils.toArray<HTMLElement>(".gsap-reveal").forEach((element) => {
        gsap.to(element, {
          autoAlpha: 1,
          y: 0,
          duration: 0.78,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 82%",
          },
        })
      })

      gsap.utils.toArray<HTMLElement>(".gsap-card-group").forEach((group) => {
        gsap.to(group.querySelectorAll(".gsap-card"), {
          autoAlpha: 1,
          y: 0,
          duration: 0.72,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: group,
            start: "top 78%",
          },
        })
      })

      gsap.utils.toArray<HTMLElement>(".gsap-parallax").forEach((element) => {
        gsap.to(element, {
          yPercent: -10,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.8,
          },
        })
      })

      gsap.to(".gsap-bg-drift", {
        xPercent: 3,
        yPercent: -2,
        ease: "none",
        scrollTrigger: {
          trigger: "#inicio",
          start: "top top",
          end: "bottom top",
          scrub: 0.9,
        },
      })

      const story = pageRef.current?.querySelector<HTMLElement>(".dashboard-scroll-story:not(.dashboard-static-story)")
      const views = gsap.utils.toArray<HTMLElement>(".dashboard-view")
      const steps = gsap.utils.toArray<HTMLElement>(".dashboard-story-step")
      const orbitCards = gsap.utils.toArray<HTMLElement>(".dashboard-orbit-card")
      const progressBar = pageRef.current?.querySelector<HTMLElement>(".dashboard-scroll-progress span")
      const signalChips = gsap.utils.toArray<HTMLElement>(".dashboard-signal-cloud span")

      if (story && views.length && steps.length) {
        gsap.set(views, { autoAlpha: 0, y: 36, scale: 0.985 })
        gsap.set(views[0], { autoAlpha: 1, y: 0, scale: 1 })
        gsap.set(steps, { opacity: 0.42 })
        gsap.set(steps[0], { opacity: 1 })
        gsap.set(orbitCards, { autoAlpha: 1, y: 0, scale: 1, rotate: 0 })
        gsap.set(signalChips, { autoAlpha: 1, y: 0 })
        if (progressBar) {
          gsap.set(progressBar, { scaleY: 0, transformOrigin: "top" })
        }

        const storyTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: story,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.45,
          },
        })

        storyTimeline
          .to(
            orbitCards,
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              rotate: 0,
              duration: 0.42,
              ease: "power3.out",
              stagger: 0.08,
            },
            0.05
          )
          .to(
            signalChips,
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.3,
              ease: "power2.out",
              stagger: 0.045,
            },
            0.15
          )

        views.forEach((view, index) => {
          if (index === 0) return

          storyTimeline
            .to(
              views[index - 1],
              {
                autoAlpha: 0,
                y: -34,
                scale: 0.985,
                duration: 0.32,
                ease: "power3.inOut",
              },
              index - 0.22
            )
            .to(
              view,
              {
                autoAlpha: 1,
                y: 0,
                scale: 1,
                duration: 0.42,
                ease: "power3.out",
              },
              index - 0.08
            )
            .to(
              steps,
              {
                opacity: 0.42,
                duration: 0.22,
                ease: "power1.out",
              },
              index - 0.08
            )
            .to(
              steps[index],
              {
                opacity: 1,
                duration: 0.28,
                ease: "power1.out",
              },
              index - 0.02
            )
            .to(
              orbitCards,
              {
                x: (cardIndex) => [12, -16, 10][cardIndex % 3] * index,
                y: (cardIndex) => [-8, 12, -14][cardIndex % 3] * index,
                rotate: (cardIndex) => [2, -2.5, 1.6][cardIndex % 3] * index,
                duration: 0.5,
                ease: "power3.inOut",
              },
              index - 0.04
            )
        })

        if (progressBar) {
          gsap.to(progressBar, {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: story,
              start: "top top",
              end: "bottom bottom",
              scrub: true,
            },
          })
        }

        gsap.to(".dashboard-device", {
          yPercent: -4,
          ease: "none",
          scrollTrigger: {
            trigger: story,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.7,
          },
        })

        gsap.to(".dashboard-chip", {
          y: -6,
          stagger: 0.05,
          repeat: -1,
          yoyo: true,
          duration: 1.4,
          ease: "sine.inOut",
        })

        gsap.to(".dashboard-signal-cloud span", {
          x: 8,
          y: -8,
          stagger: 0.08,
          repeat: -1,
          yoyo: true,
          duration: 2.6,
          ease: "sine.inOut",
        })
      }

      gsap.utils.toArray<HTMLElement>(".gsap-hover").forEach((element) => {
        const enter = () => {
          gsap.to(element, {
            y: -6,
            scale: 1.012,
            duration: 0.32,
            ease: "power2.out",
          })
        }
        const leave = () => {
          gsap.to(element, {
            y: 0,
            scale: 1,
            duration: 0.34,
            ease: "power2.out",
          })
        }

        element.addEventListener("pointerenter", enter)
        element.addEventListener("pointerleave", leave)
        hoverCleanups.push(() => {
          element.removeEventListener("pointerenter", enter)
          element.removeEventListener("pointerleave", leave)
        })
      })

      ScrollTrigger.refresh()
    }, pageRef)

    return () => {
      hoverCleanups.forEach((cleanup) => cleanup())
      context.revert()
      motionQuery.removeEventListener("change", updateMotionPreference)
    }
  }, [])

  return (
    <main ref={pageRef} className="min-h-screen bg-background text-foreground">
      <nav className="lifecare-nav fixed left-0 right-0 top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#inicio" className="flex items-center gap-3">
            <span className="grid size-9 place-items-center rounded-md bg-primary text-primary-foreground">
              <HeartPulse className="size-5" />
            </span>
            <span className="leading-none">
              <span className="block font-semibold tracking-tight">LifeCare</span>
              <span className="block text-sm text-muted-foreground">Performance</span>
            </span>
          </a>
          <div className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
            <a className="transition-colors hover:text-foreground" href="#solucao">Solução</a>
            <a className="transition-colors hover:text-foreground" href="#dashboard">Dashboard</a>
            <a className="transition-colors hover:text-foreground" href="#processo">Processo</a>
            <a className="transition-colors hover:text-foreground" href="#contato">Contato</a>
          </div>
          <Button asChild size="sm" className="rounded-md">
            <a href="#contato">Agendar demo</a>
          </Button>
        </div>
      </nav>

      <section id="inicio" ref={heroRef} className="lifecare-clip-stage relative min-h-screen pt-24">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,var(--background)_0%,var(--background)_55%,var(--cyan-light)_145%)]" />
        <div className="gsap-bg-drift lifecare-ambient-flow absolute inset-0" aria-hidden="true" />
        <div className="hero-data-grid absolute inset-0 opacity-35" />
        {!reduceMotion && <HeroTelemetry />}
        {!reduceMotion && <HeroOrb3D />}
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:min-h-[calc(100vh-6rem)] lg:grid-cols-[.92fr_1.08fr]"
        >
          <div>
            <div className="gsap-hero-item lifecare-reveal lifecare-badge mb-6 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1.5 text-sm text-primary">
              <Sparkles className="size-4" />
              Inteligência médica para academias premium
            </div>
            <h1 className="gsap-hero-item lifecare-reveal max-w-4xl text-balance font-serif text-5xl font-semibold leading-[0.96] tracking-tight text-foreground md:text-7xl">
              A saúde dos seus alunos traduzida em performance mensurável.
            </h1>
            <p className="gsap-hero-item lifecare-reveal mt-6 max-w-2xl text-lg leading-8 text-muted-foreground" style={{ animationDelay: ".12s" }}>
              Um sistema para academias que conecta avaliação clínica, dados de treino,
              biomarcadores e acompanhamento contínuo em uma experiência clara para equipe,
              médico e aluno.
            </p>
            <div className="gsap-hero-item lifecare-reveal mt-8 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: ".2s" }}>
              <Button asChild size="lg" className="rounded-md">
                <a className="gsap-hover" href="#contato">
                  Agendar demonstração <ArrowRight className="ml-2 size-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-md bg-background/60">
                <a className="gsap-hover" href="#dashboard">Ver painel</a>
              </Button>
            </div>
          </div>
          <div className="gsap-dashboard gsap-parallax">
            <DashboardPreview />
          </div>
        </motion.div>
      </section>

      <DataRibbon />

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal className="gsap-reveal max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">o problema</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight md:text-5xl">
              Academias geram dados, mas ainda vendem acompanhamento no escuro.
            </h2>
          </Reveal>
          <div className="gsap-card-group mt-12 grid gap-5 md:grid-cols-3">
            <MetricCard
              label="Retenção"
              value="+ risco"
              detail="Sem leitura clínica, sinais de queda de evolução aparecem tarde demais."
              icon={<Users className="size-5" />}
            />
            <MetricCard
              label="Prescrição"
              value="fragmentada"
              detail="Treino, nutrição e exames ficam separados em ferramentas e conversas."
              icon={<Target className="size-5" />}
            />
            <MetricCard
              label="Percepção"
              value="baixo valor"
              detail="O aluno não vê claramente o progresso fisiológico que está comprando."
              icon={<TrendingUp className="size-5" />}
            />
          </div>
        </div>
      </section>

      <section id="solucao" className="border-y border-border bg-muted/35 py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[.85fr_1.15fr]">
          <Reveal className="gsap-reveal">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">a solução</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight md:text-5xl">
              Um sistema operacional de performance médica.
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              O LifeCare organiza dados clínicos, sinais de recuperação, evolução de treino
              e alertas de risco para transformar acompanhamento em decisão prática.
            </p>
          </Reveal>
          <div className="gsap-card-group grid gap-4 sm:grid-cols-2">
            {[
              [FlaskConical, "Avaliação metabólica", "Exames, bioimpedância e marcadores-chave interpretados em uma linha de evolução."],
              [Watch, "Dados contínuos", "Sono, recuperação, frequência e adesão conectados ao plano."],
              [Stethoscope, "Leitura médica", "Critérios clínicos para orientar condutas e reduzir risco."],
              [LineChart, "Performance visível", "Relatórios simples para equipe e aluno entenderem progresso."],
            ].map(([Icon, title, text], index) => (
              <Reveal key={String(title)} delay={index * 0.05}>
                <div className="gsap-card gsap-hover lifecare-motion-card h-full rounded-lg border border-border bg-card p-6">
                  <div className="lifecare-icon-pulse mb-5 grid size-11 place-items-center rounded-md bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight">{title as string}</h3>
                  <p className="mt-3 leading-7 text-muted-foreground">{text as string}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <DashboardScrollExperience />

      <section id="dashboard-simple" className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal className="gsap-reveal mx-auto max-w-3xl text-center">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">dashboard</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight md:text-5xl">
              Animação com propósito: dados que se movem quando viram decisão.
            </h2>
          </Reveal>
          <div className="gsap-card-group mt-14 grid gap-5 lg:grid-cols-[1fr_.8fr]">
            <Reveal>
              <div className="gsap-card lifecare-dashboard relative overflow-hidden rounded-lg border border-border bg-card p-6 shadow-[0_24px_70px_rgba(27,43,67,0.08)]">
                <div className="lifecare-scanline" aria-hidden="true" />
                <div className="mb-8 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Evolução integrada</p>
                    <p className="mt-1 text-2xl font-semibold">Aluno em acompanhamento</p>
                  </div>
                  <BarChart3 className="size-6 text-primary" />
                </div>
                <div className="h-56">
                  <AnimatedLine tone="cyan" />
                </div>
              </div>
            </Reveal>
            <div className="grid gap-5">
              <Reveal delay={0.08}>
                <div className="gsap-card gsap-hover lifecare-motion-card rounded-lg border border-border bg-card p-6">
                  <ProgressRing value={91} label="clareza de plano" />
                </div>
              </Reveal>
              <Reveal delay={0.14}>
                <div className="gsap-card gsap-hover lifecare-motion-card rounded-lg border border-border bg-card p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <ShieldCheck className="size-5 text-primary" />
                    <h3 className="font-semibold">Alertas clínicos</h3>
                  </div>
                  <p className="leading-7 text-muted-foreground">
                    A equipe sabe quando intervir, quando ajustar carga e quando acionar avaliação médica.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <ProductTimeline />

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal className="gsap-reveal mx-auto max-w-3xl text-center">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">tecnologias</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight md:text-5xl">
              Camada médica, dados e experiência para uma operação premium.
            </h2>
          </Reveal>
          <div className="gsap-card-group mt-12 grid gap-5 md:grid-cols-3">
            {[
              [Dna, "Biomarcadores", "Leitura longitudinal de metabolismo, composição e risco."],
              [Zap, "Automação", "Sinaliza prioridades para equipe sem aumentar a carga operacional."],
              [Activity, "Performance", "Cruza resposta fisiológica com evolução de treino."],
            ].map(([Icon, title, text], index) => (
              <Reveal key={String(title)} delay={index * 0.06}>
                <div className="gsap-card gsap-hover lifecare-motion-card rounded-lg border border-border bg-card p-7">
                  <Icon className="size-7 text-primary" />
                  <h3 className="mt-8 text-2xl font-semibold tracking-tight">{title as string}</h3>
                  <p className="mt-4 leading-7 text-muted-foreground">{text as string}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="border-t border-border bg-muted/35 py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[1fr_.85fr]">
          <Reveal className="gsap-reveal">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">demonstração</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight md:text-5xl">
              Veja como o LifeCare pode virar diferencial comercial da sua academia.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              Uma demonstração objetiva para entender sua operação, seus dados atuais e o primeiro
              fluxo de performance médica que pode ser implantado.
            </p>
            <div className="mt-8 grid gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-3"><Mail className="size-4 text-primary" /> contato@lifecareperformance.com.br</span>
              <span className="flex items-center gap-3"><Phone className="size-4 text-primary" /> +55 (11) 99999-9999</span>
              <span className="flex items-center gap-3"><MapPin className="size-4 text-primary" /> São Paulo, Brasil</span>
            </div>
          </Reveal>
          <Reveal className="gsap-reveal" delay={0.1}>
            <form className="gsap-hover rounded-lg border border-border bg-card p-6 shadow-[0_24px_70px_rgba(27,43,67,0.08)]">
              <div className="grid gap-4">
                {["Nome", "Email", "Academia"].map((label) => (
                  <label key={label} className="grid gap-2 text-sm font-medium">
                    {label}
                    <input
                      className="h-12 rounded-md border border-input bg-background px-4 text-base outline-none transition-colors focus:border-primary"
                      placeholder={label}
                    />
                  </label>
                ))}
                <label className="grid gap-2 text-sm font-medium">
                  Principal objetivo
                  <textarea
                    className="min-h-28 rounded-md border border-input bg-background p-4 text-base outline-none transition-colors focus:border-primary"
                    placeholder="Retenção, ticket premium, acompanhamento médico, diferenciação..."
                  />
                </label>
                <Button className="gsap-hover mt-2 h-12 rounded-md">
                  Solicitar demonstração <ArrowRight className="ml-2 size-4" />
                </Button>
              </div>
            </form>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-border py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <span className="grid size-8 place-items-center rounded-md bg-primary text-primary-foreground">
              <HeartPulse className="size-4" />
            </span>
            <span><strong className="text-foreground">LifeCare</strong> Performance</span>
          </div>
          <span>© 2026 LifeCare Performance. Todos os direitos reservados.</span>
        </div>
      </footer>
    </main>
  )
}
