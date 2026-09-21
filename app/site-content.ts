export const locales = ["zh", "en"] as const;

export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export const siteContent = {
  zh: {
    nav: { home: "首页", projects: "项目", research: "研究", lab: "实验室", about: "关于" },
    footer: { selfHosted: "自托管", builtWith: "使用 Next.js 构建" },
    home: {
      eyebrow: "个人实验室",
      title: "探索 AI、动画与技术的交汇处。",
      intro: "一个记录项目、研究、实验、开发日志与自托管基础设施的个人空间。",
      exploreProjects: "探索项目",
      research: "研究内容",
      cards: [
        ["项目", "游戏、动画、AI、Web 应用以及其他技术项目。", "查看项目"],
        ["研究", "研究笔记、实验、技术调查与正在进行的工作。", "查看研究"],
        ["家庭实验室", "自托管基础设施、服务器、服务、网络与实验。", "探索实验室"],
      ],
      aboutEyebrow: "关于",
      aboutTitle: "一个用于构建、实验与记录的地方。",
      aboutText: "这个网站既是作品集，也是一个持续进行的技术项目。这里记录我构建的东西、研究的主题、学到的内容，以及背后的基础设施。",
      aboutLink: "更多关于我的信息",
    },
    about: {
      eyebrow: "关于",
      title: "一个通过构建来学习的实验室。",
      intro: "Henry's Personal Lab 是一个探索 AI、软件、创意技术与自托管基础设施的个人技术环境。",
      idea: "理念",
      ideaTitle: "不只是一个作品集。",
      ideaText: "这个网站被设计成一个持续运行的实验室，而不是一份完成品。项目、研究笔记、实验、基础设施和技术失败，都属于同一个过程。\n\n目标是构建事物、理解它们如何工作、记录过程，并逐步把实验变成有用的系统。",
      focus: "关注方向",
      focusTitle: "正在探索的领域。",
      focuses: [
        ["人工智能", "探索大语言模型、生成式 AI、智能代理、本地推理与智能系统。"],
        ["软件工程", "构建 Web 应用、开发者工具、自动化和基础设施等实用系统。"],
        ["动画与创意技术", "结合动画、视觉表达、程序化系统与新兴技术。"],
      ],
      principles: "工作原则",
      principleTitle: "实验室如何运作。",
      principleItems: [
        ["构建", "把想法变成可运行的系统，而不是停留在理论层面。"],
        ["实验", "通过小型实验直接实现，从而理解技术。"],
        ["记录", "记录有效的方法、失败的尝试，以及一路上的收获。"],
        ["改进", "持续优化正在构建的系统，以及理解它们的方式。"],
      ],
      closing: "仍在构建。\n仍在学习。",
      closingText: "这个实验室有意保持未完成。随着系统不断演进，新的项目、实验、研究和基础设施会持续加入。",
    },
    projects: {
      eyebrow: "项目", title: "我构建过的东西。", intro: "由实验、研究和实践工作发展而来的软件、AI、动画与技术项目集合。", philosophy: "项目理念", philosophyTitle: "先构建，再记录一切。", philosophyText: "实验室中的项目不只是完成品，也是学习过程与技术记录。有些项目会继续演进，有些则会作为某个想法或发展阶段的切片保留下来。", philosophyLink: "探索研究",
      items: [
        ["AI 研究", "AI / 研究", "围绕大语言模型、代理、生成式 AI 和智能应用的实验与系统。", "进行中"],
        ["个人实验室", "基础设施", "用于开发、实验、服务、自动化和 AI 工作负载的自托管环境。", "进行中"],
        ["动画与创意", "动画 / 创意", "探索动画、技术、程序化系统和视觉表达交汇处的创意项目。", "归档"],
      ],
    },
    research: {
      eyebrow: "研究", title: "探索下一步。", intro: "来自持续学习与构建的研究笔记、实验、技术调查和想法。", areas: "研究领域", log: "研究日志", logTitle: "笔记、实验与想法。", logText: "记录我学习、测试、构建和理解的事物。", method: "方法", methodTitle: "通过构建来学习。", methodText: "这里的研究与实现紧密相连。想法通过实验、原型、基准测试、失败和文档来探索，而不只是停留在理论笔记中。",
      items: [["大语言模型", "探索语言模型、推理、微调、上下文管理和实际应用。", "进行中"], ["AI 代理", "实验自主系统、工具调用、规划、记忆和基于代理的工作流。", "进行中"], ["生成式 AI", "研究文本、图像、视频和其他创作模态中的生成模型。", "探索中"], ["AI 系统", "研究模型部署、推理系统、本地 AI、基础设施和性能。", "探索中"]],
      notes: [["理解 Transformer 架构", "笔记"], ["本地 LLM 推理实验", "实验"], ["从第一性原理构建 AI 代理", "研究"]],
    },
    lab: {
      eyebrow: "家庭实验室", title: "实验室背后的基础设施。", intro: "用于开发、AI 实验、服务、网络和基础设施研究的自托管环境。", status: "系统状态", statusTitle: "个人实验室基础设施", operational: "运行正常", web: "在线", network: "已连接", services: "服务", environment: "本地", host: "主机", hostTitle: "本地硬件，个人基础设施。", hostText: "这个实验室建立在本地可控硬件和自托管服务之上。目标不仅是理解正在构建的软件，也理解运行它所需要的基础设施。", architecture: "架构", architectureTitle: "从本地机器到公共网络。", experiments: "基础设施实验", experimentsTitle: "构建环境本身。",
      servicesList: [["Next.js", "个人实验室网站", "在线"], ["Cloudflare Tunnel", "公共网络访问", "已连接"], ["Git", "源代码管理", "在线"], ["本地 AI", "本地模型实验", "实验中"]],
      infra: [["主机", "MacBook Pro"], ["操作系统", "macOS"], ["运行时", "Node.js"], ["框架", "Next.js"]],
      experimentsList: [["自托管 Web 基础设施", "直接在本地硬件上运行类似生产环境的个人网站。", "进行中"], ["本地 AI 环境", "探索本地推理、模型服务和 AI 开发工作流。", "实验中"], ["家庭网络", "构建并记录个人网络与服务环境。", "计划中"]],
    },
  },
  en: {
    nav: { home: "Home", projects: "Projects", research: "Research", lab: "Lab", about: "About" },
    footer: { selfHosted: "Self-hosted", builtWith: "Built with Next.js" },
    home: {
      eyebrow: "Personal Laboratory", title: "Exploring the intersection of AI, animation, and technology.", intro: "A personal space for projects, research, experiments, development logs, and self-hosted infrastructure.", exploreProjects: "Explore Projects", research: "Research", cards: [["Projects", "Games, animation, AI, web applications, and other technical projects.", "View Projects"], ["Research", "Research notes, experiments, technical investigations, and ongoing work.", "View Research"], ["Home Lab", "Self-hosted infrastructure, servers, services, networking, and experiments.", "Explore Lab"]], aboutEyebrow: "About", aboutTitle: "A place to build, experiment, and document.", aboutText: "This website is both a portfolio and an ongoing technical project. It documents what I build, what I research, what I learn, and how the underlying infrastructure works.", aboutLink: "More about me" },
    about: { eyebrow: "About", title: "A laboratory for learning by building.", intro: "Henry's Personal Lab is a personal technical environment for exploring AI, software, creative technology, and self-hosted infrastructure.", idea: "The Idea", ideaTitle: "Not just a portfolio.", ideaText: "This website is designed as an ongoing laboratory rather than a finished portfolio. Projects, research notes, experiments, infrastructure, and technical failures are all part of the same process.\n\nThe goal is to build things, understand how they work, document the process, and gradually turn experiments into useful systems.", focus: "Focus", focusTitle: "Areas of exploration.", focuses: [["Artificial Intelligence", "Exploring large language models, generative AI, agents, local inference, and intelligent systems."], ["Software Engineering", "Building practical systems across web applications, developer tools, automation, and infrastructure."], ["Animation & Creative Technology", "Combining animation, visual expression, procedural systems, and emerging technologies."]], principles: "Principles", principleTitle: "How the lab works.", principleItems: [["Build", "Turn ideas into working systems instead of keeping them at the level of theory."], ["Experiment", "Use small experiments to understand technologies through direct implementation."], ["Document", "Record what works, what fails, and what is learned along the way."], ["Improve", "Continuously refine both the systems being built and the way they are understood."]], closing: "Still building.\nStill learning.", closingText: "The laboratory is intentionally unfinished. New projects, experiments, research, and infrastructure will continue to be added as the system evolves." },
    projects: { eyebrow: "Projects", title: "Things I've built.", intro: "A collection of software, AI, animation, and technical projects developed through experiments, research, and practical work.", philosophy: "Philosophy", philosophyTitle: "Build first, document everything.", philosophyText: "Projects in this lab are not only finished products. They are experiments, learning processes, and technical records. Some may evolve over time, while others remain as snapshots of a particular idea or stage of development.", philosophyLink: "Explore Research", items: [["AI Research", "AI / Research", "Experiments and systems focused on large language models, agents, generative AI, and intelligent applications.", "Active"], ["Personal Lab", "Infrastructure", "A self-hosted environment for development, experimentation, services, automation, and AI workloads.", "Active"], ["Animation & Creative", "Animation / Creative", "Creative projects exploring the intersection of animation, technology, procedural systems, and visual expression.", "Archive"]] },
    research: { eyebrow: "Research", title: "Exploring what's next.", intro: "Research notes, experiments, technical investigations, and ideas that emerge from continuous learning and building.", areas: "Research Areas", log: "Research Log", logTitle: "Notes, experiments & ideas.", logText: "A record of things I study, test, build, and learn.", method: "Method", methodTitle: "Learn by building.", methodText: "Research in this lab is closely connected to implementation. Ideas are explored through experiments, prototypes, benchmarks, failures, and documentation rather than existing only as theoretical notes.", items: [["Large Language Models", "Exploring language models, inference, fine-tuning, context management, and practical applications.", "Active"], ["AI Agents", "Experiments with autonomous systems, tool use, planning, memory, and agent-based workflows.", "Active"], ["Generative AI", "Investigating generative models across text, image, video, and other creative modalities.", "Exploring"], ["AI Systems", "Research into model deployment, inference systems, local AI, infrastructure, and performance.", "Exploring"]], notes: [["Understanding Transformer Architecture", "Notes"], ["Experiments with Local LLM Inference", "Experiment"], ["Building AI Agents from First Principles", "Research"]] },
    lab: { eyebrow: "Home Lab", title: "The infrastructure behind the lab.", intro: "A self-hosted environment for development, AI experiments, services, networking, and infrastructure research.", status: "System Status", statusTitle: "Personal Lab Infrastructure", operational: "Operational", web: "Online", network: "Connected", services: "Services", environment: "Local", host: "Host", hostTitle: "Local hardware, personal infrastructure.", hostText: "This lab is built around locally controlled hardware and self-hosted services. The goal is to understand not only the software being built, but also the infrastructure required to run it.", architecture: "Architecture", architectureTitle: "From local machine to the public web.", experiments: "Infrastructure Experiments", experimentsTitle: "Building the environment itself.", servicesList: [["Next.js", "Personal Lab website", "Online"], ["Cloudflare Tunnel", "Public network access", "Connected"], ["Git", "Source control", "Online"], ["Local AI", "Local model experiments", "Experimental"]], infra: [["Host", "MacBook Pro"], ["Operating System", "macOS"], ["Runtime", "Node.js"], ["Framework", "Next.js"]], experimentsList: [["Self-hosted Web Infrastructure", "Running a production-like personal website directly from local hardware.", "Active"], ["Local AI Environment", "Exploring local inference, model serving, and AI development workflows.", "Experimental"], ["Home Network", "Building and documenting a small personal network and service environment.", "Planned"]] },
  },
} as const;

export type SiteContent = (typeof siteContent)[Locale];
