import React from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Download,
  GraduationCap,
  Briefcase,
  FlaskConical,
  Code,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Modern, high‑contrast black & white personal website with emerald accent

const PROFILE_IMG =
  "https://drive.google.com/uc?export=view&id=14esuL4wW2HM4_3Io_ltDYk1p5_PqDRvp";

// Define the page sections for navigation
const sections = [
  { id: "top", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "research", label: "Research" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

// A reusable component for external links with a small arrow icon
const LinkOut = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-1 underline decoration-dashed underline-offset-4 text-neutral-100 hover:text-white"
  >
    {children}
    <ExternalLink className="h-4 w-4" />
  </a>
);

export default function Portfolio() {
  // track scroll state to apply a background blur on the header
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50">
      {/* Sticky header */}
      <header
        className={`sticky top-0 z-50 transition-all ${
          scrolled
            ? "bg-neutral-900/90 backdrop-blur border-b border-neutral-800"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-5xl px-4">
          <div className="flex items-center justify-between py-3">
            <a
              href="#top"
              className="font-bold tracking-tight text-lg text-emerald-400"
            >
              B. Mahesh Raj
            </a>
            <nav className="hidden md:flex gap-4">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="text-sm text-neutral-200 hover:text-emerald-400 transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-2">
              <Button asChild variant="ghost" size="icon" aria-label="Email">
                <a href="mailto:bmaheshraj23@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon" aria-label="Phone">
                <a href="tel:+918921662922">
                  <Phone className="h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon" aria-label="GitHub">
                <a
                  href="https://github.com/maheXh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon" aria-label="LinkedIn">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              {/* Download resume button */}
              <Button asChild size="sm" className="ml-1">
                <a href="/resume.pdf" download>
                  <Download className="h-4 w-4 mr-2" />Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="mx-auto max-w-5xl px-4 pt-10 md:pt-16">
        <div className="grid gap-8 md:grid-cols-3 md:gap-12 items-start">
          <div className="md:col-span-2">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold leading-tight"
            >
              Hi, I’m <span className="text-emerald-400">Mahesh</span> — CSE undergrad
              passionate about deep learning, computer vision, and building
              practical AI systems.
            </motion.h1>
            <p className="mt-4 text-neutral-100 max-w-2xl">
              Looking to collaborate on deep learning, computer vision, or
              generative AI. Open to internships and research opportunities.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-neutral-300">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-emerald-400" /> Coimbatore,
                India
              </span>
            </div>
          </div>
          <div className="md:col-span-1 flex items-start justify-center">
            {PROFILE_IMG ? (
              <img
                src={PROFILE_IMG}
                alt="Mahesh Raj portrait"
                className="h-40 w-40 md:h-56 md:w-56 rounded-full object-cover border border-neutral-700 shadow-sm"
              />
            ) : (
              <div className="h-40 w-40 md:h-56 md:w-56 rounded-full flex items-center justify-center border border-neutral-700 bg-neutral-800 text-neutral-400">
                MR
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Experience */}
      <Section
        id="experience"
        title="Experience"
        icon={<Briefcase className="h-5 w-5 text-emerald-400" />}
      >
        <Item
          title="SDE Intern — Finance Automation"
          org="Amazon"
          timeframe="May 2024 – July 2024 · Bangalore, India"
          bullets={[
            "Built a VQA + field‑value extraction proof‑of‑concept for tax documents using LLMs/VLMs (Python, PyTorch, Bedrock, Textract, LoRA/QLoRA).",
            "Improved accuracy from 80–85% to 99% overall with 97% on critical fields.",
            "Shipped a data pipeline monitoring system (Lambda, Athena, DynamoDB, S3, EventBridge, CloudWatch, SQS/SNS, Docker) with automated alerting.",
          ]}
        />
      </Section>

      {/* Research */}
      <Section
        id="research"
        title="Research"
        icon={<FlaskConical className="h-5 w-5 text-emerald-400" />}
      >
        <Item
          title="Estimating Soil Moisture from Satellite Data"
          org="Amrita Vishwa Vidyapeetham in collaboration with INRAE (France)"
          timeframe="Mar 2024 – Jul 2025"
          bullets={[
            "Remote sensing + machine learning for soil moisture prediction and plant life cycles.",
            "Advanced satellite data processing with PyTorch/TensorFlow.",
          ]}
        />
        <Item
          title="Text‑Prompted 4D Mesh Character Animation using GNNs & Diffusion"
          org="Amrita Vishwa Vidyapeetham"
          timeframe="Nov 2024 – Aug 2025"
          bullets={[
            "Latent graph diffusion to handle varying mesh topologies.",
            "Pipeline with GNN autoencoders + diffusion for text‑prompted 4D mesh generation.",
          ]}
        />
        <Item
          title="Lightweight Student Network for nnU‑Net (in progress)"
          org="Amrita Vishwa Vidyapeetham"
          timeframe="Sep 2025 – Present"
          bullets={[
            "Multi‑stage compression with feature + soft‑label distillation and deep supervision.",
            "Target: clinically deployable nnU‑Net with reduced parameters/memory/latency.",
          ]}
        />
      </Section>

      {/* Projects */}
      <Section
        id="projects"
        title="Projects"
        icon={<Code className="h-5 w-5 text-emerald-400" />}
      >
        <Project
          name="Deep Fake Detection"
          date="Jan 2024 – Apr 2024"
          details="Developed a video deepfake detection system leveraging multiple detectors with unique methodologies. Built an ensemble framework where results were combined by a meta‑model that assigned weights based on each detector’s historical performance on a custom dataset."
          links={[{ label: "GitHub", href: "https://github.com/maheXh" }]}
        />
        <Project
          name="DDPM Image Generation"
          date="2024"
          details="Implemented a Denoising Diffusion Probabilistic Model (DDPM) based generative model for image synthesis as part of deep learning coursework. Demonstrated diffusion‑based generative modeling and its applications in media synthesis and AI ethics."
          links={[{ label: "Demo", href: "https://github.com/maheXh" }]}
        />
        <Project
          name="Adobe India Hackathon — Team Starks (Connecting the Dots)"
          date="Jan 2025"
          details="Built an intelligent, lightweight, CPU‑only offline system to transform static PDFs into dynamic, structured, persona‑aware knowledge artifacts. Designed a layout‑aware small language model (SLM) using Qwen2.5‑0.5b on llama.cpp, integrated 2× YOLOv8n models, SentenceTransformers and K‑means clustering for hierarchical structuring. Enabled semantic retrieval and summarization while optimizing the pipeline to meet strict size and performance constraints."
          links={[{ label: "GitHub", href: "https://github.com/maheXh" }]}
        />
        <Project
          name="Fire Fighting Drone for Early Forest Fire Detection and Extinguishment"
          date="2018"
          details="Developed a drone capable of early forest fire detection and suppression, with integrated surveillance and rapid response mechanisms. Achievements: CBSE Science Fair State Finalist, PPTIA Innovation Award National Finalist (Top 10), and First Prize at Shastra Science Fair."
        />
        <Project
          name="Deep Fake Detection Website — Nestria Hackathon Winner"
          date="Apr 2024"
          details="Built a deep fake detection website that secured 1st place in the Nestria Jan Built Hackathon. Combined cutting‑edge detection algorithms with a user‑friendly interface to demonstrate practical applications of AI in media authenticity."
          links={[{ label: "GitHub", href: "https://github.com/maheXh" }]}
        />
      </Section>

      {/* Skills */}
      <Section
        id="skills"
        title="Skills"
        icon={<Code className="h-5 w-5 text-emerald-400" />}
      >
        <SkillCard
          title="Programming Languages"
          items={["Python", "Java", "C++", "C"]}
        />
        <SkillCard
          title="Deep Learning Frameworks"
          items={["PyTorch", "PyTorch3D", "TensorFlow", "Scikit‑Learn"]}
        />
        <SkillCard
          title="Data Analytics Tools"
          items={["NumPy", "Pandas", "Matplotlib", "Seaborn"]}
        />
        <SkillCard
          title="Image Processing Libraries"
          items={["MediaPipe", "OpenCV"]}
        />
        <SkillCard
          title="Cloud Platforms"
          items={[
            "AWS",
            "Lambda",
            "S3",
            "CloudWatch",
            "Athena",
            "DynamoDB",
            "Bedrock",
            "SageMaker",
          ]}
        />
        <SkillCard
          title="LLM Techniques"
          items={["Prompt Engineering", "Model Fine‑tuning", "Quantization", "Knowledge Distillation"]}
        />
        <SkillCard
          title="Accelerated Computing"
          items={["CUDA"]}
        />
      </Section>

      {/* Education */}
      <Section
        id="education"
        title="Education"
        icon={<GraduationCap className="h-5 w-5 text-emerald-400" />}
      >
        <Item
          title="B.Tech in Computer Science and Engineering"
          org="Amrita Vishwa Vidyapeetham, Coimbatore"
          timeframe="2022 – 2026 (Current CGPA: 8.41/10 as of 6th Sem)"
          bullets={[
            "Pursuing coursework in deep learning, computer vision, generative models and AI.",
            "Active member of research groups focusing on remote sensing, GNNs and diffusion models.",
          ]}
        />
        <Item
          title="Senior Secondary (Class XII)"
          org="St. Peter’s Senior Secondary School, CBSE"
          timeframe="2020 – 2022"
          bullets={["Achieved 86.2% in board examinations."]}
        />
        <Item
          title="Higher Secondary (Class X)"
          org="St. Peter’s Senior Secondary School, CBSE"
          timeframe="2018 – 2020"
          bullets={["Secured 89.8% in board examinations."]}
        />
      </Section>

      {/* Footer */}
      <footer className="mt-16 border-t border-neutral-800">
        <div className="mx-auto max-w-5xl px-4 py-8 text-sm flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 justify-between text-neutral-400">
          <div>© {new Date().getFullYear()} B. Mahesh Raj</div>
          <div className="flex items-center gap-4">
            <LinkOut href="https://github.com/maheXh">
              <Github className="h-4 w-4" /> GitHub
            </LinkOut>
            <LinkOut href="https://www.linkedin.com">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </LinkOut>
            <a href="#top" className="underline">
              Back to top
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Section component groups multiple items under a heading with an icon
function Section({ id, title, icon, children }) {
  return (
    <section id={id} className="mx-auto max-w-5xl px-4 mt-14">
      <motion.h2
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl font-semibold flex items-center gap-2 text-emerald-400"
      >
        {icon} {title}
      </motion.h2>
      <div className="mt-5 space-y-4">{children}</div>
    </section>
  );
}

// Item component for experiences, research and education entries
function Item({ title, org, timeframe, bullets }) {
  return (
    <Card className="bg-neutral-900 border border-neutral-700">
      <CardHeader className="pb-2">
        <CardTitle className="text-base md:text-lg text-neutral-100">
          {title}
        </CardTitle>
        <div className="text-sm text-neutral-300">{org}</div>
        <div className="text-xs text-neutral-400">{timeframe}</div>
      </CardHeader>
      {bullets?.length ? (
        <CardContent className="pt-0 pb-4">
          <ul className="list-disc ml-5 space-y-1 text-sm text-neutral-100">
            {bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </CardContent>
      ) : null}
    </Card>
  );
}

// Project card for portfolio projects
function Project({ name, date, details, links }) {
  return (
    <Card className="bg-neutral-900 border border-neutral-700">
      <CardHeader className="pb-2">
        <CardTitle className="text-base md:text-lg text-neutral-100">
          {name}
        </CardTitle>
        <div className="text-xs text-neutral-400">{date}</div>
      </CardHeader>
      <CardContent className="pt-0 pb-4 text-sm text-neutral-100">
        <p>{details}</p>
        {links?.length ? (
          <div className="mt-3 flex flex-wrap gap-3">
            {links.map((l, i) => (
              <LinkOut key={i} href={l.href}>
                {l.label}
              </LinkOut>
            ))}
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}

// SkillCard groups related skills together under a heading
function SkillCard({ title, items }) {
  return (
    <Card className="bg-neutral-900 border border-neutral-700">
      <CardHeader className="pb-2">
        <CardTitle className="text-base text-neutral-100">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-0 pb-4">
        <div className="flex flex-wrap gap-2">
          {items.map((t) => (
            <span
              key={t}
              className="rounded-full border border-neutral-600 px-2 py-1 text-xs bg-transparent text-neutral-100"
            >
              {t}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}