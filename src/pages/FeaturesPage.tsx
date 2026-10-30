import React, { useState } from 'react';
import { 
  MessageSquare, 
  Terminal, 
  Image, 
  Database, 
  Layers, 
  Globe, 
  Mic, 
  Languages, 
  Settings, 
  Check, 
  Sparkles, 
  Cpu, 
  ShieldCheck,
  Code2
} from 'lucide-react';
import { ComingSoonBadge } from '../components/ComingSoonBadge';

interface FeatureItem {
  id: string;
  name: string;
  category: string;
  icon: React.ElementType;
  tagline: string;
  description: string;
  status: 'preview' | 'coming_soon';
  highlights: string[];
  mockupSnippet: string;
}

const FEATURES: FeatureItem[] = [
  {
    id: 'conversations',
    name: 'AI Conversations',
    category: 'Core Interaction',
    icon: MessageSquare,
    tagline: 'Multi-turn reasoning with contextual retention',
    description: 'Engage in fluid conversations that comprehend nuance, track multi-topic discussions, and retain technical specifics across long sessions.',
    status: 'preview',
    highlights: ['Zero context loss in multi-hour sessions', 'Logical step-by-step reasoning', 'Markdown, tables, and latex math support'],
    mockupSnippet: `// TERVOX Natural Dialogue Loop
const stream = await tervox.chat.create({
  model: 'neural-titan-1',
  temperature: 0.2,
  dialogueRetention: 'infinite'
});`,
  },
  {
    id: 'coding',
    name: 'Coding Assistance',
    category: 'Engineering',
    icon: Terminal,
    tagline: 'Code generation, refactoring, and test automation',
    description: 'A purpose-built engineering assistant that reads entire repositories, writes production-ready code with types, and diagnoses runtime errors.',
    status: 'preview',
    highlights: ['40+ programming languages supported', 'Unit test generation & syntax checking', 'Git diff preview before applying edits'],
    mockupSnippet: `// Automatic Refactor Engine
export async function optimizeThroughput(data: Chunk[]) {
  return await Promise.all(data.map(transformParallel));
}`,
  },
  {
    id: 'memory',
    name: 'Personal Memory',
    category: 'Persistence',
    icon: Database,
    tagline: 'Sovereign local memory indexed to your workflow',
    description: 'TERVOX learns your preferred libraries, stylistic habits, and active project requirements without transmitting private memory to external third-party aggregators.',
    status: 'preview',
    highlights: ['Encrypted vector memory', 'Explicit inspection and forget controls', 'Project-specific memory partitions'],
    mockupSnippet: `[Memory Profile: millionairethoughts]
- Primary Stack: React 19 + TypeScript + Vite
- Code Style: Modular, Functional, Tailwind CSS
- Security: Client-side cryptographic tokens`,
  },
  {
    id: 'image-ai',
    name: 'Image AI & Multi-Modal Analysis',
    category: 'Creative & Vision',
    icon: Image,
    tagline: 'High-resolution image reasoning & asset inspection',
    description: 'Inspect UI mockups, architectural schematics, and screenshots to detect layout discrepancies and generate crisp visual references.',
    status: 'coming_soon',
    highlights: ['Schematic and wireframe inspection', 'OCR and tabular data extraction', 'Multi-modal error diagnosis'],
    mockupSnippet: `[Multi-Modal Vision Engine]
Analysis Result: UI misalignment detected on 320px breakpoint.
Recommendation: Update grid-cols-1 to flex-wrap.`,
  },
  {
    id: 'workspace',
    name: 'Unified Workspace',
    category: 'Productivity',
    icon: Layers,
    tagline: 'Integrated canvas for documents, chats, and code',
    description: 'No more jumping between disparate apps. Keep your active notes, terminals, terminal outputs, and conversational context under one pane of glass.',
    status: 'preview',
    highlights: ['Split-screen multi-view', 'Drag-and-drop file grounding', 'Keyboard shortcut engine for speed'],
    mockupSnippet: `Workspace Active: Project_Phoenix_v2
Files Monitored: 34
Linked Databases: 1
Terminal Sessions: 2`,
  },
  {
    id: 'search',
    name: 'Real-Time Web Search',
    category: 'Grounding',
    icon: Globe,
    tagline: 'Live web indexing with source attribution',
    description: 'Augment the model with verified live internet data to access the latest documentation, breaking news, and software releases.',
    status: 'preview',
    highlights: ['Real-time search verification', 'Direct source links and citations', 'Anti-hallucination grounding checks'],
    mockupSnippet: `Query: "React 19 Server Actions breaking changes"
Status: 4 primary sources verified
Citations: react.dev, github.com/facebook/react`,
  },
  {
    id: 'voice',
    name: 'Voice Interaction',
    category: 'Input Modalities',
    icon: Mic,
    tagline: 'Low-latency conversational voice engine',
    description: 'Speak naturally to brainstorm ideas, dictate code snippets, or hear answers read aloud with natural human cadence.',
    status: 'coming_soon',
    highlights: ['Under 250ms voice turnaround', 'Whisper-quiet ambient noise rejection', 'Hands-free coding mode'],
    mockupSnippet: `[Audio Stream]
Sampling Rate: 48kHz
Latency: 180ms
Speech-to-Text: "Generate a Tailwind card with electric cyan border"`,
  },
  {
    id: 'multilang',
    name: 'Multi-Language Support',
    category: 'Accessibility',
    icon: Languages,
    tagline: 'Native fluency across 50+ languages',
    description: 'Communicate, code, and translate across English, Spanish, Japanese, German, Mandarin, and dozens more with idiomatic precision.',
    status: 'preview',
    highlights: ['Culturally nuanced translations', 'Technical terminology preservation', 'Bilingual pair programming'],
    mockupSnippet: `Translate: Technical RFC from EN -> JA
Preserving: Function names & types intact
Output: Japanese engineering specification generated`,
  },
  {
    id: 'settings',
    name: 'Settings & Privacy Controls',
    category: 'Governance',
    icon: Settings,
    tagline: 'Granular control over telemetry, models, and keys',
    description: 'You own your data. Configure local storage quotas, API keys, temperature parameters, and dark mode aesthetics freely.',
    status: 'preview',
    highlights: ['Zero telemetry opt-out', 'Custom API proxy routing', 'Complete data export in JSON/Markdown'],
    mockupSnippet: `[Preferences Configuration]
Theme: Midnight Navy (#050B16)
Telemetry: Disabled
Local Vector Cache: 128 MB allocated`,
  },
];

export const FeaturesPage: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState<FeatureItem>(FEATURES[0]);

  return (
    <div className="min-h-screen bg-[#050B16] text-[#EAF6FF] py-16 px-4 sm:px-6 lg:px-8 bg-cyber-grid">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ComingSoonBadge className="mb-4" />
          <h1 className="text-4xl sm:text-6xl font-black text-white font-['Lexend'] mb-4 tracking-tight">
            Comprehensive <span className="bg-gradient-to-r from-white to-[#00D9FF] bg-clip-text text-transparent">Feature Matrix</span>
          </h1>
          <p className="text-base sm:text-lg text-[#91A8BD] leading-relaxed">
            Every feature in TERVOX AI is crafted to work cohesively as one system. Explore each capability below.
          </p>
        </div>

        {/* Feature Grid & Interactive Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          {/* Feature List Cards (left 7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-[#00D9FF] mb-2">
              Select a capability to inspect details
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {FEATURES.map((feature) => {
                const isSelected = selectedFeature.id === feature.id;
                const Icon = feature.icon;

                return (
                  <button
                    key={feature.id}
                    onClick={() => setSelectedFeature(feature)}
                    className={`text-left p-5 rounded-2xl border transition-all cursor-pointer relative overflow-hidden ${
                      isSelected
                        ? 'bg-[#0B1D32] border-[#00D9FF] shadow-[0_0_25px_rgba(0,217,255,0.2)]'
                        : 'bg-[#081426]/70 border-[#00D9FF]/20 hover:border-[#00D9FF]/50 hover:bg-[#081426]'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className={`p-2.5 rounded-xl ${isSelected ? 'bg-[#00D9FF] text-[#050B16]' : 'bg-[#00D9FF]/10 text-[#00D9FF]'}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      {feature.status === 'coming_soon' ? (
                        <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-[#00D9FF]/10 text-[#00D9FF] border border-[#00D9FF]/30">
                          Coming Soon
                        </span>
                      ) : (
                        <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-[#168BFF]/20 text-[#168BFF] border border-[#168BFF]/30">
                          Preview
                        </span>
                      )}
                    </div>

                    <h3 className="text-base font-bold text-white mb-1">{feature.name}</h3>
                    <p className="text-xs text-[#91A8BD] line-clamp-2 leading-relaxed">{feature.tagline}</p>

                    <div className="mt-3 flex items-center gap-1.5 text-[11px] font-mono text-[#00D9FF]">
                      <span>{feature.category}</span>
                      <span>→</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Feature Deep Dive Panel (right 5 cols) */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 rounded-3xl bg-[#081426] border border-[#00D9FF]/30 p-6 sm:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.6)]">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#00D9FF]/15">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-[#00D9FF]/15 text-[#00D9FF] border border-[#00D9FF]/30">
                    <selectedFeature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white font-['Lexend']">{selectedFeature.name}</h2>
                    <span className="text-xs font-mono text-[#00D9FF]">{selectedFeature.category}</span>
                  </div>
                </div>

                {selectedFeature.status === 'coming_soon' ? (
                  <ComingSoonBadge size="sm" />
                ) : (
                  <span className="px-2.5 py-1 rounded-full bg-[#168BFF]/20 text-[#168BFF] border border-[#168BFF]/30 text-xs font-mono">
                    In Desktop Preview
                  </span>
                )}
              </div>

              <p className="text-sm text-[#EAF6FF] leading-relaxed mb-6 font-medium">
                {selectedFeature.description}
              </p>

              {/* Highlights */}
              <div className="space-y-3 mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#91A8BD]">Architectural Highlights</h4>
                {selectedFeature.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-[#EAF6FF]">
                    <div className="w-4 h-4 rounded-full bg-[#00D9FF]/20 text-[#00D9FF] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5" />
                    </div>
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* Code/Interface Mockup */}
              <div className="rounded-2xl bg-[#050B16] border border-[#00D9FF]/20 overflow-hidden">
                <div className="px-4 py-2 bg-[#0B1D32] border-b border-[#00D9FF]/15 flex items-center justify-between text-[11px] font-mono text-[#91A8BD]">
                  <span>Diagnostics • {selectedFeature.id}.sys</span>
                  <span className="text-[#00D9FF]">v0.9</span>
                </div>
                <pre className="p-4 text-xs font-mono text-[#00D9FF] overflow-x-auto leading-relaxed">
                  <code>{selectedFeature.mockupSnippet}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
