import React, { useState } from 'react';
import { 
  Play, 
  MessageSquare, 
  Terminal, 
  Wrench, 
  FolderKanban, 
  BrainCircuit, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  Command,
  FileCode,
  ShieldAlert
} from 'lucide-react';
import { DesktopAppPreview } from '../components/DesktopAppPreview';
import { ComingSoonBadge } from '../components/ComingSoonBadge';

export const AppPage: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'Opening TERVOX AI',
      subtitle: 'Instant launch with system-tray presence and shortcut activation',
      description: 'Launch TERVOX on your workstation with a single keystroke (Cmd/Ctrl + Shift + T). The application initializes instantly without loading heavy web frames or slow cloud sandboxes.',
      details: [
        'Under 400ms startup latency',
        'Minimal 120MB baseline memory footprint',
        'Hardware-accelerated dark midnight UI',
      ],
      icon: Command,
    },
    {
      num: '02',
      title: 'Starting a Conversation',
      subtitle: 'Natural dialogue with multi-turn reasoning context',
      description: 'Type or speak naturally. TERVOX parses multi-part requests, clarifies underspecified constraints, and provides answers tailored to your active workflow.',
      details: [
        'Persistent conversation branching',
        'Automatic topic summarization in sidebar',
        'Markdown, LaTeX equations, and interactive data visualization',
      ],
      icon: MessageSquare,
    },
    {
      num: '03',
      title: 'Using AI Assistance',
      subtitle: 'Autonomous problem-solving and multi-step reasoning',
      description: 'Beyond basic questions, TERVOX assists in drafting complex engineering specifications, decomposing algorithms into sub-tasks, and generating end-to-end architectures.',
      details: [
        'Step-by-step logic tracing',
        'Self-correcting code execution',
        'Real-time streaming output with cancellation control',
      ],
      icon: Sparkles,
    },
    {
      num: '04',
      title: 'Exploring Available Tools',
      subtitle: 'Integrated tools for code synthesis, vision, web grounding, and voice',
      description: 'Access built-in utilities directly inside your session without leaving the application. Ground queries in live internet documentation, run code snippets in a sandbox, or analyze diagrams.',
      details: [
        'Live Web Search with source citations',
        'Integrated multi-modal image & schematic analyzer',
        'Low-latency voice input & dictation engine',
      ],
      icon: Wrench,
    },
    {
      num: '05',
      title: 'Managing Conversations',
      subtitle: 'Organized sessions with tag filtering and full-text search',
      description: 'Organize past sessions into workspaces, tag key decisions, export transcripts in Markdown or JSON, and resume complex investigations with zero friction.',
      details: [
        'Full-text instantaneous offline search',
        'Workspace and project tags',
        'Encrypted session export and backup',
      ],
      icon: FolderKanban,
    },
    {
      num: '06',
      title: 'Personal Memory & Preferences',
      subtitle: 'Private local memory profile that adapts to your style',
      description: 'TERVOX indexes your preferences, recurring frameworks (e.g. React 19, TypeScript), and coding guidelines so you never have to repeat your setup rules.',
      details: [
        'Granular memory inspection: view, edit, or delete stored memories',
        'Encrypted on-device vector index',
        'Zero cross-account data training',
      ],
      icon: BrainCircuit,
    },
  ];

  return (
    <div className="min-h-screen bg-[#050B16] text-[#EAF6FF] py-16 px-4 sm:px-6 lg:px-8 bg-cyber-grid">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ComingSoonBadge className="mb-4" />
          <h1 className="text-4xl sm:text-6xl font-black text-white font-['Lexend'] mb-4 tracking-tight">
            How <span className="bg-gradient-to-r from-white to-[#00D9FF] bg-clip-text text-transparent">TERVOX AI Works</span>
          </h1>
          <p className="text-base sm:text-lg text-[#91A8BD] leading-relaxed">
            Designed as an official companion on your desktop. Here is how you interact with TERVOX from launch to deep problem solving.
          </p>
        </div>

        {/* Step-by-Step Interactive Workflow */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24 items-start">
          {/* Step Navigation Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              const Icon = step.icon;

              return (
                <button
                  key={step.num}
                  onClick={() => setActiveStep(idx)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                    isActive
                      ? 'bg-[#0B1D32] border-[#00D9FF] shadow-[0_0_20px_rgba(0,217,255,0.2)]'
                      : 'bg-[#081426]/70 border-[#00D9FF]/20 hover:border-[#00D9FF]/40 hover:bg-[#081426]'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-sm font-bold text-[#00D9FF]">{step.num}</span>
                    <div className={`p-2 rounded-xl ${isActive ? 'bg-[#00D9FF] text-[#050B16]' : 'bg-[#00D9FF]/10 text-[#00D9FF]'}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-white">{step.title}</h3>
                      <p className="text-xs text-[#91A8BD] line-clamp-1">{step.subtitle}</p>
                    </div>
                  </div>
                  <ArrowRight className={`w-4 h-4 transition-transform ${isActive ? 'text-[#00D9FF] translate-x-1' : 'text-[#91A8BD]/40'}`} />
                </button>
              );
            })}
          </div>

          {/* Step Detail Display (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#081426] border border-[#00D9FF]/30 p-6 sm:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.6)]">
              <div className="flex items-center justify-between pb-4 border-b border-[#00D9FF]/15 mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-mono font-black text-[#00D9FF]">
                    {steps[activeStep].num}
                  </span>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white font-['Lexend']">
                      {steps[activeStep].title}
                    </h2>
                    <p className="text-xs font-mono text-[#91A8BD]">{steps[activeStep].subtitle}</p>
                  </div>
                </div>
                <ComingSoonBadge size="sm" />
              </div>

              <p className="text-sm sm:text-base text-[#EAF6FF] leading-relaxed mb-8">
                {steps[activeStep].description}
              </p>

              <div className="space-y-3 mb-8">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#00D9FF]">Technical Highlights</h4>
                {steps[activeStep].details.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs sm:text-sm text-[#91A8BD]">
                    <CheckCircle2 className="w-4 h-4 text-[#00D9FF] shrink-0" />
                    <span className="text-[#EAF6FF]">{item}</span>
                  </div>
                ))}
              </div>

              {/* Progress indicators */}
              <div className="flex items-center justify-between pt-6 border-t border-[#00D9FF]/15">
                <button
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                  className="px-4 py-2 rounded-xl text-xs font-medium text-[#91A8BD] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed bg-[#050B16] border border-[#00D9FF]/15"
                >
                  Previous Step
                </button>
                <span className="text-xs font-mono text-[#91A8BD]">
                  Step {activeStep + 1} of {steps.length}
                </span>
                <button
                  disabled={activeStep === steps.length - 1}
                  onClick={() => setActiveStep((prev) => Math.min(steps.length - 1, prev + 1))}
                  className="px-4 py-2 rounded-xl text-xs font-medium text-[#050B16] bg-[#00D9FF] hover:opacity-90 disabled:opacity-30 disabled:cursor-not-allowed font-semibold"
                >
                  Next Step
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Live Interface Demonstration */}
        <div className="mt-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-['Lexend'] mb-3">
              Interactive Application Simulator
            </h2>
            <p className="text-sm text-[#91A8BD]">
              Test the desktop UI layout based directly on the actual application screenshot.
            </p>
          </div>

          <DesktopAppPreview />
        </div>
      </div>
    </div>
  );
};
