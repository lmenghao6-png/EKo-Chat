"use client";

import { useState, useEffect, useRef } from 'react';
import Link from "next/link";
import { MountainIcon, Bot, CheckCircle, Zap, MoveRight, HelpCircle, GitMerge, ListChecks, ArrowUpCircle, User, Code, Settings, Check, Twitter, Github, Linkedin, Star, ChevronDown } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";

const sections = ["hero", "how-it-works", "features", "for-whom", "tech-stack", "testimonials", "pricing", "faq", "story"];

const LandingPage = () => {
  const [index, setIndex] = useState(0);
  const isWheeling = useRef(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // This single useEffect runs once to set up both the persistent canvas background and the wheel listener
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particles: any[] = [];
    const numParticles = 150;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Particle {
        x: number; y: number; size: number; speedX: number; speedY: number;
        constructor() {
            this.x = Math.random() * canvas.width; this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 0.5;
            this.speedX = Math.random() * 0.4 - 0.2;
            this.speedY = Math.random() * 0.4 - 0.2;
        }
        update() {
            this.x += this.speedX; this.y += this.speedY;
            if (this.size > 0.1) this.size -= 0.005;
            if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
            if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
        }
        draw() {
            if (ctx) {
                const isDark = document.documentElement.classList.contains('dark');
                ctx.fillStyle = isDark ? 'rgba(255, 255, 255, 0.6)' : 'rgba(50, 50, 50, 0.6)';
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }
    }

    function init() {
        particles = [];
        for (let i = 0; i < numParticles; i++) { particles.push(new Particle()); }
    }

    let animationFrameId: number;
    function animate() {
        if (ctx) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < particles.length; i++) { particles[i].update(); particles[i].draw(); }
            connect();
            animationFrameId = requestAnimationFrame(animate);
        }
    }
    
    function connect(){
        let opacityValue = 1;
        if (ctx) {
            const isDark = document.documentElement.classList.contains('dark');
            for (let a = 0; a < particles.length; a++) {
                for (let b = a; b < particles.length; b++) {
                    let distance = (( particles[a].x - particles[b].x) * (particles[a].x - particles[b].x))
                    + ((particles[a].y - particles[b].y) * (particles[a].y - particles[b].y));
                    if (distance < (canvas.width/8) * (canvas.height/8)) {
                        opacityValue = 1 - (distance/20000);
                        ctx.strokeStyle = isDark ? `rgba(255, 255, 255, ${opacityValue * 0.3})` : `rgba(50, 50, 50, ${opacityValue * 0.3})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(particles[b].x, particles[b].y);
                        ctx.stroke();
                    }
                }
            }
        }
    }

    init();
    animate();

    const handleResize = () => {
        if(canvas) {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            init();
        }
    };
    window.addEventListener('resize', handleResize);
    
    const handleWheel = (event: WheelEvent) => {
        if (isWheeling.current) return;
        isWheeling.current = true;

        if (event.deltaY > 0) {
            setIndex(prev => Math.min(sections.length - 1, prev + 1));
        } else {
            setIndex(prev => Math.max(0, prev - 1));
        }

        setTimeout(() => {
            isWheeling.current = false;
        }, 1200); // Debounce time
    };

    window.addEventListener('wheel', handleWheel);

    return () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('wheel', handleWheel);
        cancelAnimationFrame(animationFrameId);
    }
  }, []); // Empty dependency array ensures it runs only once

  const slideVariants = {
    enter: (direction: number) => ({
      y: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      y: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      y: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  const easeCubic: [number, number, number, number] = [0.4, 0.0, 0.2, 1];
  const contentVariants: Variants = {
      hidden: { opacity: 0, y: 50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, delay: 0.5, ease: easeCubic },
      },
  };

  return (
    <PageTransition>
      <div className="flex flex-col h-screen bg-transparent text-foreground overflow-hidden">
        <canvas ref={canvasRef} id="eko-canvas" className="fixed top-0 left-0 w-full h-full z-0"></canvas>
        <header className="px-4 h-12 flex items-center shadow-sm fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm">
          <a onClick={() => setIndex(0)} className="flex items-center justify-center cursor-pointer">
            <MountainIcon className="h-6 w-6 text-primary" />
            <span className="ml-2 text-lg font-semibold">EKo-Aggregator Chat</span>
          </a>
          <nav className="ml-auto flex items-center gap-2 sm:gap-4 text-xs sm:text-sm">
            <a onClick={() => setIndex(1)} className="text-sm font-medium hover:text-primary transition-colors underline-offset-4 cursor-pointer">工作原理</a>
            <a onClick={() => setIndex(2)} className="text-sm font-medium hover:text-primary transition-colors underline-offset-4 cursor-pointer">功能</a>
            <a onClick={() => setIndex(4)} className="text-sm font-medium hover:text-primary transition-colors underline-offset-4 cursor-pointer">技术栈</a>
            <a onClick={() => setIndex(6)} className="text-sm font-medium hover:text-primary transition-colors underline-offset-4 cursor-pointer">价格</a>
            <a onClick={() => setIndex(7)} className="text-sm font-medium hover:text-primary transition-colors underline-offset-4 cursor-pointer">FAQ</a>
            <Link href="/login" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">登录</Link>
            <Link href="/register" className="px-4 py-2 text-sm font-medium text-primary-foreground bg-primary rounded-md hover:bg-primary/90">免费注册</Link>
          </nav>
        </header>

        <main className="flex-1 relative z-10">
            <AnimatePresence initial={false} custom={1}>
                <motion.section
                    key={index}
                    custom={1}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        y: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.3 }
                    }}
                    className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
                >
                    {/* Render active slide */}
                    {index === 0 && (
                        <div className="w-full h-full flex items-center justify-center relative">
                             {/* <canvas ref={canvasRef} id="eko-canvas"></canvas> */}
                             <motion.div style={{ zIndex: 1 }} className="container px-4 md:px-6 text-center" initial="hidden" animate="visible" variants={contentVariants}>
                                <div className="space-y-4">
                                  <h1 className="text-8xl font-extrabold tracking-tighter sm:text-9xl xl:text-9xl text-foreground dark:text-primary-foreground">
                                    EKo
                                  </h1>
                                  <p className="max-w-[700px] mx-auto text-muted-foreground md:text-2xl font-semibold">一个答案不够？那就让所有顶尖AI为您作答。</p>
                                  <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl mt-4">EKo-Aggregator Chat 打破单一模型的局限，聚合多家顶尖AI，为您呈现最精准、最全面的答案。</p>
                                </div>
                                <div className="pt-8">
                                    <button
                                        onClick={() => setIndex(sections.indexOf("story"))}
                                        className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background/50 px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                                    >
                                        探索创始人理念
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    )}
                    {index === 1 && (
                        <div className="w-full h-full flex items-center justify-center bg-background/80 backdrop-blur-sm">
                            <motion.div className="container px-4 md:px-6" initial="hidden" animate="visible" variants={contentVariants}>
                               <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                                 <div className="space-y-3">
                                   <div className="inline-block rounded-lg bg-primary/10 px-4 py-2 text-base font-semibold text-primary">工作原理</div>
                                   <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">四步，见证更优答案的诞生</h2>
                                   <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">我们设计了一套严谨而高效的流程，确保每一次回答都超越期待。</p>
                                 </div>
                               </div>
                               <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-4">
                                 <div className="grid gap-4 text-center p-6"><div className="p-4 rounded-full bg-primary/10 inline-block mx-auto"><HelpCircle className="h-10 w-10 text-primary" /></div><h3 className="text-2xl font-bold">1. 提问</h3><p className="text-muted-foreground">您只需提出问题，剩下的交给我们。</p></div>
                                 <div className="grid gap-4 text-center p-6"><div className="p-4 rounded-full bg-primary/10 inline-block mx-auto"><GitMerge className="h-10 w-10 text-primary" /></div><h3 className="text-2xl font-bold">2. 聚合</h3><p className="text-muted-foreground">系统瞬间并发调用多个顶尖AI模型。</p></div>
                                 <div className="grid gap-4 text-center p-6"><div className="p-4 rounded-full bg-primary/10 inline-block mx-auto"><ListChecks className="h-10 w-10 text-primary" /></div><h3 className="text-2xl font-bold">3. 呈现</h3><p className="text-muted-foreground">通过智能算法，筛选并呈现最优答案。</p></div>
                                 <div className="grid gap-4 text-center p-6"><div className="p-4 rounded-full bg-primary/10 inline-block mx-auto"><ArrowUpCircle className="h-10 w-10 text-primary" /></div><h3 className="text-2xl font-bold">4. 优化</h3><p className="text-muted-foreground">您的每一次投票，都在帮助系统进化。</p></div>
                               </div>
                            </motion.div>
                        </div>
                    )}
                    {index === 2 && (
                        <div className="w-full h-full flex items-center justify-center bg-background/80 backdrop-blur-sm">
                            <motion.div className="container px-4 md:px-6" initial="hidden" animate="visible" variants={contentVariants}>
                               <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                                 <div className="space-y-3">
                                   <div className="inline-block rounded-lg bg-primary/10 px-4 py-2 text-base font-semibold text-primary">核心功能</div>
                                   <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">更智能，更可靠</h2>
                                   <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">我们不仅仅是信息的搬运工，更是高质量答案的锻造者。</p>
                                 </div>
                               </div>
                               <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
                                 <div className="grid gap-4 text-center p-6 rounded-lg border border-transparent hover:border-primary/50 hover:bg-accent transition-all duration-300 hover:scale-105 hover:shadow-xl"><div className="p-4 rounded-full bg-primary/10 inline-block mx-auto"><Bot className="h-10 w-10 text-primary" /></div><h3 className="text-2xl font-bold">多模型聚合</h3><p className="text-muted-foreground">同时调用 OpenAI, Claude, Gemini 等多家顶尖模型，告别单一答案的片面性。</p></div>
                                 <div className="grid gap-4 text-center p-6 rounded-lg border border-transparent hover:border-primary/50 hover:bg-accent transition-all duration-300 hover:scale-105 hover:shadow-xl"><div className="p-4 rounded-full bg-primary/10 inline-block mx-auto"><CheckCircle className="h-10 w-10 text-primary" /></div><h3 className="text-2xl font-bold">智能选优</h3><p className="text-muted-foreground">通过内置算法与用户投票，从多个候选答案中筛选出质量最高、最符合您心意的结果。</p></div>
                                 <div className="grid gap-4 text-center p-6 rounded-lg border border-transparent hover:border-primary/50 hover:bg-accent transition-all duration-300 hover:scale-105 hover:shadow-xl"><div className="p-4 rounded-full bg-primary/10 inline-block mx-auto"><Zap className="h-10 w-10 text-primary" /></div><h3 className="text-2xl font-bold">成本与性能</h3><p className="text-muted-foreground">提供详细的成本与耗时分析，并具备快速回退机制，让每一次回答都尽在掌握。</p></div>
                               </div>
                            </motion.div>
                        </div>
                    )}
                    {index === 3 && (
                        <div className="w-full h-full flex items-center justify-center bg-background/80 backdrop-blur-sm">
                            <motion.div className="container px-4 md:px-6" initial="hidden" animate="visible" variants={contentVariants}>
                               <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                                 <div className="space-y-3">
                                   <div className="inline-block rounded-lg bg-primary/10 px-4 py-2 text-base font-semibold text-primary">为谁设计</div>
                                   <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">满足每一位探索者的需求</h2>
                                   <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">无论您是日常使用者、专业人士还是开发者，都能在这里找到价值。</p>
                                 </div>
                               </div>
                               <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
                                 <div className="grid gap-4 text-center p-6 rounded-lg border border-transparent hover:border-primary/50 hover:bg-accent transition-all duration-300 hover:scale-105 hover:shadow-xl"><div className="p-4 rounded-full bg-primary/10 inline-block mx-auto"><User className="h-10 w-10 text-primary" /></div><h3 className="text-2xl font-bold">普通用户</h3><p className="text-muted-foreground">在日常问答、写作和学习中，获得更可靠、更全面的答案。</p></div>
                                 <div className="grid gap-4 text-center p-6 rounded-lg border border-transparent hover:border-primary/50 hover:bg-accent transition-all duration-300 hover:scale-105 hover:shadow-xl"><div className="p-4 rounded-full bg-primary/10 inline-block mx-auto"><Code className="h-10 w-10 text-primary" /></div><h3 className="text-2xl font-bold">高级用户</h3><p className="text-muted-foreground">对比不同模型的细微差异，通过投票贡献，参与到AI的进化中。</p></div>
                                 <div className="grid gap-4 text-center p-6 rounded-lg border border-transparent hover:border-primary/50 hover:bg-accent transition-all duration-300 hover:scale-105 hover:shadow-xl"><div className="p-4 rounded-full bg-primary/10 inline-block mx-auto"><Settings className="h-10 w-10 text-primary" /></div><h3 className="text-2xl font-bold">管理员</h3><p className="text-muted-foreground">轻松配置模型，监控成本与内容安全，一切尽在掌握。</p></div>
                               </div>
                            </motion.div>
                        </div>
                    )}
                    {index === 4 && (
                        <div className="w-full h-full flex items-center justify-center bg-background/80 backdrop-blur-sm">
                           <motion.div className="container px-4 md:px-6" initial="hidden" animate="visible" variants={contentVariants}>
                               <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                                 <div className="space-y-3">
                                   <div className="inline-block rounded-lg bg-primary/10 px-4 py-2 text-base font-semibold text-primary">技术栈揭秘</div>
                                   <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">由最前沿的技术精心打造</h2>
                                   <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">我们选择的不仅是工具，更是一种对卓越品质的承诺。</p>
                                 </div>
                               </div>
                               <div className="mx-auto grid max-w-5xl grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8">
                                   <div className="flex flex-col items-center gap-2"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" className="h-12 w-12" alt="Next.js"/><span>Next.js</span></div>
                                   <div className="flex flex-col items-center gap-2"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="h-12 w-12" alt="React"/><span>React</span></div>
                                   <div className="flex flex-col items-center gap-2"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" className="h-12 w-12" alt="TypeScript"/><span>TypeScript</span></div>
                                   <div className="flex flex-col items-center gap-2"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" className="h-12 w-12" alt="Tailwind CSS"/><span>Tailwind CSS</span></div>
                                   <div className="flex flex-col items-center gap-2"><motion.svg className="h-12 w-12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 0L0 7H7V14L14 7H7V0Z" fill="currentColor"></path></motion.svg><span>Framer Motion</span></div>
                               </div>
                            </motion.div>
                        </div>
                    )}
                    {index === 5 && (
                        <div className="w-full h-full flex items-center justify-center bg-background/80 backdrop-blur-sm">
                            <motion.div className="container px-4 md:px-6" initial="hidden" animate="visible" variants={contentVariants}>
                               <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                                 <div className="space-y-3">
                                   <div className="inline-block rounded-lg bg-primary/10 px-4 py-2 text-base font-semibold text-primary">客户评价</div>
                                   <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">听听我们的用户怎么说</h2>
                                   <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">来自不同领域的专业人士，一致的选择。</p>
                                 </div>
                               </div>
                               <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
                                 <div className="grid gap-4 text-left p-6 rounded-lg border hover:shadow-xl transition-all">
                                     <div className="flex items-center gap-4">
                                         <User className="h-10 w-10" />
                                         <div>
                                             <p className="font-semibold">开发者 Alex</p>
                                             <div className="flex text-primary">{[...Array(5)].map((_,i)=><Star key={i} className="h-4 w-4 fill-primary" />)}</div>
                                         </div>
                                     </div>
                                     <p className="text-muted-foreground text-sm">"作为一名开发者，我每天都在与不同的API打交道。EKo Chat的聚合能力为我节省了大量的时间，代码辅助功能尤其出色。"</p>
                                 </div>
                                 <div className="grid gap-4 text-left p-6 rounded-lg border hover:show-xl transition-all">
                                    <div className="flex items-center gap-4">
                                         <User className="h-10 w-10" />
                                         <div>
                                             <p className="font-semibold">学生小明</p>
                                             <div className="flex text-primary">{[...Array(5)].map((_,i)=><Star key={i} className="h-4 w-4 fill-primary" />)}</div>
                                         </div>
                                     </div>
                                     <p className="text-muted-foreground text-sm">"写论文时需要引用大量资料，EKo Chat能从多个角度提供信息，让我的论点更全面、更有说服力。"</p>
                                 </div>
                                  <div className="grid gap-4 text-left p-6 rounded-lg border hover:shadow-xl transition-all">
                                    <div className="flex items-center gap-4">
                                         <User className="h-10 w-10" />
                                         <div>
                                             <p className="font-semibold">市场分析师 Sarah</p>
                                             <div className="flex text-primary">{[...Array(5)].map((_,i)=><Star key={i} className="h-4 w-4 fill-primary" />)}</div>
                                         </div>
                                     </div>
                                     <p className="text-muted-foreground text-sm">"在做市场调研时，我需要快速获取全面且准确的信息。EKo Chat的答案质量远超单一模型，已经成为我工作中不可或缺的工具。"</p>
                                 </div>
                               </div>
                            </motion.div>
                        </div>
                    )}
                    {index === 6 && (
                        <div className="w-full h-full flex items-center justify-center bg-background/80 backdrop-blur-sm">
                            <motion.div className="container px-4 md:px-6" initial="hidden" animate="visible" variants={contentVariants}>
                               <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                                 <div className="space-y-3">
                                   <div className="inline-block rounded-lg bg-primary/10 px-4 py-2 text-base font-semibold text-primary">价格方案</div>
                                   <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">选择适合您的方案</h2>
                                   <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">从免费开始，随您的需求一同成长。</p>
                                 </div>
                               </div>
                               <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
                                 {/* Personal Plan */}
                                 <div className="grid gap-4 text-left p-6 rounded-lg border hover:shadow-xl transition-all">
                                   <h3 className="text-2xl font-bold">个人版</h3>
                                   <p className="text-muted-foreground">适合个人探索者与学习者。</p>
                                   <div className="flex items-baseline gap-2">
                                     <span className="text-4xl font-bold">¥0</span>
                                     <span className="text-muted-foreground">/ 永久</span>
                                   </div>
                                   <ul className="grid gap-2 text-sm">
                                     <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" />每日免费额度</li>
                                     <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" />基础模型访问</li>
                                   </ul>
                                   <Link href="/register" className="mt-4 inline-flex h-10 items-center justify-center rounded-md bg-primary text-primary-foreground">免费开始</Link>
                                 </div>
                                 {/* Pro Plan */}
                                 <div className="flex flex-col gap-4 text-left p-6 rounded-lg border border-primary hover:shadow-xl transition-all ring-2 ring-primary relative">
                                    <div className="absolute top-0 right-4 -mt-3 inline-block rounded-full bg-primary px-3 py-1 text-sm font-semibold text-primary-foreground">最受欢迎</div>
                                   <div className="flex-grow">
                                       <h3 className="text-2xl font-bold">专业版</h3>
                                       <p className="text-muted-foreground">适合专业人士与重度用户。</p>
                                       <div className="flex items-baseline gap-2 mt-4">
                                         <span className="text-4xl font-bold">¥99</span>
                                         <span className="text-muted-foreground">/ 月</span>
                                       </div>
                                       <ul className="grid gap-2 text-sm mt-4">
                                         <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" />更高的请求额度</li>
                                         <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" />访问所有顶尖模型</li>
                                         <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" />优先技术支持</li>
                                       </ul>
                                   </div>
                                   <Link href="/register" className="mt-4 inline-flex h-10 items-center justify-center rounded-md bg-primary text-primary-foreground">选择专业版</Link>
                                 </div>
                                 {/* Enterprise Plan */}
                                 <div className="flex flex-col gap-4 text-left p-6 rounded-lg border hover:shadow-xl transition-all">
                                   <div className="flex-grow">
                                       <h3 className="text-2xl font-bold">企业版</h3>
                                       <p className="text-muted-foreground">适合团队与企业级应用。</p>
                                       <div className="flex items-baseline gap-2 mt-4">
                                         <span className="text-4xl font-bold">定制</span>
                                       </div>
                                       <ul className="grid gap-2 text-sm mt-4">
                                         <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" />无限额度</li>
                                         <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" />私有化部署</li>
                                         <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" />专属客户成功经理</li>
                                       </ul>
                                   </div>
                                   <Link href="#" className="mt-4 inline-flex h-10 items-center justify-center rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground">联系我们</Link>
                                 </div>
                               </div>
                            </motion.div>
                        </div>
                    )}
                    {index === 7 && (
                        <div className="w-full h-full flex items-center justify-center bg-background/80 backdrop-blur-sm">
                            <motion.div className="container px-4 md:px-6" initial="hidden" animate="visible" variants={contentVariants}>
                               <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                                 <div className="space-y-3">
                                   <div className="inline-block rounded-lg bg-primary/10 px-4 py-2 text-base font-semibold text-primary">常见问题 (FAQ)</div>
                                   <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">您有疑问？我们有答案。</h2>
                                 </div>
                               </div>
                               <div className="mx-auto max-w-3xl space-y-4">
                                   {/* FAQ Item 1 */}
                                   <details className="p-4 rounded-lg bg-secondary/50 group">
                                       <summary className="flex items-center justify-between font-semibold cursor-pointer">我的数据安全吗？<ChevronDown className="h-5 w-5 transition-transform group-open:rotate-180" /></summary>
                                       <p className="mt-2 text-muted-foreground text-left">绝对安全。我们承诺，您的所有对话数据都经过端到端加密处理，并且我们绝不会将您的数据用于任何形式的模型训练。您的隐私，是我们最高的设计准则。</p>
                                   </details>
                                   {/* FAQ Item 2 */}
                                   <details className="p-4 rounded-lg bg-secondary/50 group">
                                       <summary className="flex items-center justify-between font-semibold cursor-pointer">免费版和专业版有什么区别？<ChevronDown className="h-5 w-5 transition-transform group-open:rotate-180" /></summary>
                                       <p className="mt-2 text-muted-foreground text-left">免费版提供了基础的模型访问和每日的免费使用额度，非常适合轻度使用者和学习者。专业版则解锁了所有最顶尖的AI模型、更高的请求额度以及优先的技术支持，是专业人士和重度用户的最佳选择。</p>
                                   </details>
                                   {/* FAQ Item 3 */}
                                   <details className="p-4 rounded-lg bg-secondary/50 group">
                                       <summary className="flex items-center justify-between font-semibold cursor-pointer">未来会支持更多的AI模型吗？<ChevronDown className="h-5 w-5 transition-transform group-open:rotate-180" /></summary>
                                       <p className="mt-2 text-muted-foreground text-left">当然！我们的核心架构就是为了“聚合”而生。我们正在积极地与全球更多的顶尖AI研究机构建立合作，未来将有源源不断的新模型加入到EKo的大家庭中，敬请期待。</p>
                                   </details>
                               </div>
                            </motion.div>
                        </div>
                    )}
                    {index === 8 && (
                        <div className="w-full h-full flex items-center justify-center bg-secondary/80 backdrop-blur-sm">
                            <motion.div className="container grid items-center justify-center gap-8 px-4 text-center md:px-6" initial="hidden" animate="visible" variants={contentVariants}>
                               <div className="flex flex-col items-center space-y-4">
                                   <img src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y" alt="Founder" className="h-24 w-24 rounded-full" />
                                   <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">创始人理念</h2>
                               </div>
                               <div className="max-w-[700px] text-muted-foreground md:text-xl/relaxed text-left space-y-4">
                                   <p>我诞生于一个简单的信念：最好的答案，不应只来自一个声音。作为一名独立开发者，我深刻体会到信息过载与单一AI模型认知偏差带来的困扰——同一个问题，模型A给出了A答案，模型B却给出了B答案，我们究竟该相信谁？</p>
                                   <p>我意识到，在AI时代，信息的广度前所未有，但深度与确定性却愈发稀缺。EKo-Aggregator Chat 正是为了解决这一挑战而生。我相信，真正的智慧，源于多元视角的碰撞与融合。通过聚合智慧、引入竞争与选择，我们能帮助每一位用户，在信息的海洋中，找到那颗最闪亮的珍珠。</p>
                                   <p className="text-right font-semibold">- EKo, 创始人</p>
                               </div>
                            </motion.div>
                        </div>
                    )}
                </motion.section>
            </AnimatePresence>
        </main>
        <footer className="bg-background/80 backdrop-blur-sm border-t py-2 fixed bottom-0 w-full z-50">
            <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="flex flex-col gap-4 col-span-2 md:col-span-1">
                    <Link href="#" className="flex items-center gap-2">
                        <MountainIcon className="h-6 w-6 text-primary" />
                        <span className="font-semibold">EKo-Aggregator Chat</span>
                    </Link>
                    <p className="text-muted-foreground text-sm">聚合顶尖智慧，呈现最优答案。</p>
                    <div className="flex gap-4">
                        <Link href="#" className="text-muted-foreground hover:text-primary"><Twitter /></Link>
                        <Link href="#" className="text-muted-foreground hover:text-primary"><Github /></Link>
                        <Link href="#" className="text-muted-foreground hover:text-primary"><Linkedin /></Link>
                    </div>
                </div>
                <div className="grid gap-2 text-sm">
                    <h3 className="font-semibold">产品</h3>
                    <Link href="/landing#features" className="text-muted-foreground hover:text-primary">功能</Link>
                    <Link href="/landing#pricing" className="text-muted-foreground hover:text-primary">价格</Link>
                    <Link href="/landing#story" className="text-muted-foreground hover:text-primary">故事</Link>
                </div>
                <div className="grid gap-2 text-sm">
                    <h3 className="font-semibold">支持</h3>
                    <Link href="#" className="text-muted-foreground hover:text-primary">帮助中心</Link>
                    <Link href="#" className="text-muted-foreground hover:text-primary">联系我们</Link>
                </div>
                <div className="grid gap-2 text-sm">
                    <h3 className="font-semibold">法律</h3>
                    <Link href="#" className="text-muted-foreground hover:text-primary">服务条款</Link>
                    <Link href="#" className="text-muted-foreground hover:text-primary">隐私政策</Link>
                </div>
            </div>
            <div className="container mx-auto mt-6 text-center text-xs text-muted-foreground">
                &copy; 2025 EKo-Aggregator Chat. 保留所有权利。
            </div>
        </footer>
      </div>
    </PageTransition>
  );
};

export default LandingPage;
