import React, { useState } from 'react';
import { 
  Sparkles, 
  Terminal, 
  MessageSquare, 
  Cpu, 
  Database, 
  Globe, 
  Mic, 
  Settings, 
  Send, 
  Paperclip, 
  Copy, 
  Check, 
  Maximize2, 
  Minimize2, 
  FolderGit2,
  ChevronRight,
  ShieldCheck,
  Bot
} from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  code?: string;
  time: string;
}

const PRESET_CONVERSATIONS: Record<string, Message[]> = {
  general: [
    {
      role: 'user',
      content: 'Can you summarize your architectural advantages and how you manage personal memory?',
      time: '10:42 AM',
    },
    {
      role: 'assistant',
      content: 'I operate as a unified intelligent workspace. Rather than isolated chats, my memory system indexes your past discussions, preferred tech stacks, and active project contexts with zero data leakage. When you switch between coding, writing, and research, your context persists seamlessly.',
      time: '10:42 AM',
    },
  ],
  coding: [
    {
      role: 'user',
      content: 'Write an optimized TypeScript hook for real-time WebSocket state streaming with automatic reconnection.',
      time: '11:15 AM',
    },
    {
      role: 'assistant',
      content: 'Here is an exponential-backoff WebSocket manager tailored for high-throughput AI streaming:',
      code: `export function useLiveStream<T>(endpoint: string) {
  const [data, setData] = useState<T | null>(null);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    let ws: WebSocket;
    let retries = 0;
    const connect = () => {
      ws = new WebSocket(endpoint);
      ws.onopen = () => { setConnected(true); retries = 0; };
      ws.onmessage = (e) => setData(JSON.parse(e.data));
      ws.onclose = () => {
        setConnected(false);
        const delay = Math.min(1000 * 2 ** retries++, 15000);
        setTimeout(connect, delay);
      };
    };
    connect();
    return () => ws?.close();
  }, [endpoint]);

  return { data, connected };
}`,
      time: '11:15 AM',
    },
  ],
  vision: [
    {
      role: 'user',
      content: 'Analyze the system telemetry diagram and detect bottlenecks.',
      time: '01:05 PM',
    },
    {
      role: 'assistant',
      content: 'Analyzing visual telemetry: GPU memory pressure stabilizes at 68%, but token serialization queue spikes during multi-modal bursts. Recommended action: Enable streaming chunk prefetch in Settings → Engine.',
      time: '01:06 PM',
    },
  ],
};

export const DesktopAppPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'general' | 'coding' | 'vision'>('general');
  const [inputVal, setInputVal] = useState('');
  const [copied, setCopied] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);

  const messages = PRESET_CONVERSATIONS[activeTab];

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`w-full mx-auto transition-all duration-300 ${isMaximized ? 'max-w-6xl' : 'max-w-5xl'}`}>
      {/* Outer Window Container */}
      <div className="rounded-2xl border border-[#00D9FF]/30 bg-[#081426] shadow-[0_20px_70px_rgba(0,0,0,0.8),0_0_40px_rgba(0,217,255,0.12)] overflow-hidden flex flex-col">
        {/* Window Titlebar */}
        <div className="bg-[#050B16] px-4 py-3 border-b border-[#00D9FF]/20 flex items-center justify-between select-none">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/50" />
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/50" />
            <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/50" />
            <span className="ml-3 text-xs font-mono text-[#91A8BD] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00D9FF] animate-pulse" />
              TERVOX AI Desktop Workspace • v0.9 preview
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#00D9FF]/10 text-[#00D9FF] text-[11px] font-mono border border-[#00D9FF]/20">
              <ShieldCheck className="w-3 h-3" /> Core Encrypted
            </span>
            <button
              onClick={() => setIsMaximized(!isMaximized)}
              className="text-[#91A8BD] hover:text-[#00D9FF] transition-colors p-1"
              aria-label="Toggle window size"
            >
              {isMaximized ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Application Layout: Sidebar + Main Area */}
        <div className="grid grid-cols-1 md:grid-cols-12 min-h-[500px]">
          {/* Left Sidebar */}
          <div className="md:col-span-4 lg:col-span-3 bg-[#050B16]/90 border-r border-[#00D9FF]/15 p-4 flex flex-col justify-between">
            <div>
              {/* Brand & New Chat */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#00D9FF]/15">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#00D9FF] to-[#168BFF] flex items-center justify-center shadow-[0_0_12px_rgba(0,217,255,0.4)]">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-bold text-sm tracking-wide text-white">TERVOX AI</span>
                </div>
                <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 bg-[#00D9FF]/10 text-[#00D9FF] rounded border border-[#00D9FF]/20">
                  Preview
                </span>
              </div>

              {/* Mode switchers / presets */}
              <div className="space-y-1 mb-6">
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#91A8BD]/70 px-2 py-1">
                  Active Workspaces
                </div>
                <button
                  onClick={() => setActiveTab('general')}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs flex items-center gap-2.5 transition-all ${
                    activeTab === 'general'
                      ? 'bg-[#00D9FF]/15 text-[#00D9FF] border border-[#00D9FF]/30 font-medium shadow-[0_0_15px_rgba(0,217,255,0.15)]'
                      : 'text-[#91A8BD] hover:text-white hover:bg-[#0B1D32]'
                  }`}
                >
                  <MessageSquare className="w-4 h-4" />
                  <span className="truncate">Conversational Space</span>
                </button>

                <button
                  onClick={() => setActiveTab('coding')}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs flex items-center gap-2.5 transition-all ${
                    activeTab === 'coding'
                      ? 'bg-[#00D9FF]/15 text-[#00D9FF] border border-[#00D9FF]/30 font-medium shadow-[0_0_15px_rgba(0,217,255,0.15)]'
                      : 'text-[#91A8BD] hover:text-white hover:bg-[#0B1D32]'
                  }`}
                >
                  <Terminal className="w-4 h-4" />
                  <span className="truncate">Code Synthesis & DevOps</span>
                </button>

                <button
                  onClick={() => setActiveTab('vision')}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs flex items-center gap-2.5 transition-all ${
                    activeTab === 'vision'
                      ? 'bg-[#00D9FF]/15 text-[#00D9FF] border border-[#00D9FF]/30 font-medium shadow-[0_0_15px_rgba(0,217,255,0.15)]'
                      : 'text-[#91A8BD] hover:text-white hover:bg-[#0B1D32]'
                  }`}
                >
                  <Cpu className="w-4 h-4" />
                  <span className="truncate">Multi-modal & Vision</span>
                </button>
              </div>

              {/* Memory System Preview */}
              <div className="p-3 rounded-xl bg-[#081426] border border-[#00D9FF]/20 mb-4">
                <div className="flex items-center justify-between text-[11px] font-mono text-[#00D9FF] mb-2">
                  <span className="flex items-center gap-1.5">
                    <Database className="w-3.5 h-3.5" /> Personal Memory
                  </span>
                  <span className="text-[10px] text-[#91A8BD]">14 Items</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <span className="text-[10px] px-2 py-0.5 rounded bg-[#0B1D32] text-[#EAF6FF] border border-[#00D9FF]/15 font-mono">
                    React 19
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-[#0B1D32] text-[#EAF6FF] border border-[#00D9FF]/15 font-mono">
                    TypeScript
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-[#0B1D32] text-[#EAF6FF] border border-[#00D9FF]/15 font-mono">
                    Tailwind
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-[#0B1D32] text-[#EAF6FF] border border-[#00D9FF]/15 font-mono">
                    Dark UI
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Status */}
            <div className="pt-3 border-t border-[#00D9FF]/15 flex items-center justify-between text-xs text-[#91A8BD]">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#00D9FF]" />
                <span className="text-[11px] font-mono">TERVOX Core Active</span>
              </div>
              <Settings className="w-4 h-4 text-[#91A8BD] hover:text-[#00D9FF] cursor-pointer" />
            </div>
          </div>

          {/* Right Main Chat & Workspace */}
          <div className="md:col-span-8 lg:col-span-9 bg-[#081426] p-4 sm:p-6 flex flex-col justify-between">
            {/* Header / Active Context Bar */}
            <div className="flex items-center justify-between pb-3 border-b border-[#00D9FF]/15 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00D9FF]" />
                <span className="text-xs font-semibold text-[#EAF6FF]">
                  {activeTab === 'general' && 'Workspace // General Knowledge & Strategic Reasoning'}
                  {activeTab === 'coding' && 'Workspace // High-Concurrency System Design'}
                  {activeTab === 'vision' && 'Workspace // Telemetry Multi-Modal Diagnostic'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono text-[#91A8BD] bg-[#050B16] px-2 py-0.5 rounded border border-[#00D9FF]/15">
                  Engine: Neural-Titan-1
                </span>
              </div>
            </div>

            {/* Conversation Messages */}
            <div className="space-y-4 mb-4 overflow-y-auto max-h-[360px] pr-2">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div className="flex items-center gap-2 mb-1 text-[11px] font-mono text-[#91A8BD]">
                    {msg.role === 'assistant' ? (
                      <>
                        <Bot className="w-3.5 h-3.5 text-[#00D9FF]" />
                        <span className="text-[#00D9FF] font-medium">TERVOX AI</span>
                      </>
                    ) : (
                      <span>You</span>
                    )}
                    <span>• {msg.time}</span>
                  </div>

                  <div
                    className={`max-w-[90%] p-4 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-[#168BFF]/20 text-[#EAF6FF] border border-[#168BFF]/40 shadow-[0_0_15px_rgba(22,139,255,0.15)] rounded-tr-none'
                        : 'bg-[#0B1D32]/90 text-[#EAF6FF] border border-[#00D9FF]/20 shadow-[0_4px_20px_rgba(0,0,0,0.4)] rounded-tl-none'
                    }`}
                  >
                    <p>{msg.content}</p>

                    {msg.code && (
                      <div className="mt-3 rounded-xl overflow-hidden border border-[#00D9FF]/20 bg-[#050B16]">
                        <div className="flex items-center justify-between px-3 py-1.5 bg-[#081426] border-b border-[#00D9FF]/15 text-[11px] font-mono text-[#91A8BD]">
                          <span>TypeScript</span>
                          <button
                            onClick={() => handleCopy(msg.code!)}
                            className="flex items-center gap-1 text-[#00D9FF] hover:text-white transition-colors"
                          >
                            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                            <span>{copied ? 'Copied' : 'Copy'}</span>
                          </button>
                        </div>
                        <pre className="p-3 text-[11px] font-mono text-[#00D9FF] overflow-x-auto leading-relaxed">
                          <code>{msg.code}</code>
                        </pre>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick interactive prompts to try */}
            <div className="pt-2">
              <div className="flex items-center gap-2 mb-2 overflow-x-auto no-scrollbar pb-1">
                <span className="text-[10px] font-mono text-[#91A8BD] shrink-0">Try preset:</span>
                <button
                  onClick={() => setActiveTab('general')}
                  className={`text-[11px] px-2.5 py-1 rounded-full whitespace-nowrap border transition-all ${
                    activeTab === 'general'
                      ? 'border-[#00D9FF] bg-[#00D9FF]/20 text-white'
                      : 'border-[#00D9FF]/20 bg-[#050B16] text-[#91A8BD] hover:text-[#00D9FF]'
                  }`}
                >
                  Architectural Memory
                </button>
                <button
                  onClick={() => setActiveTab('coding')}
                  className={`text-[11px] px-2.5 py-1 rounded-full whitespace-nowrap border transition-all ${
                    activeTab === 'coding'
                      ? 'border-[#00D9FF] bg-[#00D9FF]/20 text-white'
                      : 'border-[#00D9FF]/20 bg-[#050B16] text-[#91A8BD] hover:text-[#00D9FF]'
                  }`}
                >
                  Live Stream Hook
                </button>
                <button
                  onClick={() => setActiveTab('vision')}
                  className={`text-[11px] px-2.5 py-1 rounded-full whitespace-nowrap border transition-all ${
                    activeTab === 'vision'
                      ? 'border-[#00D9FF] bg-[#00D9FF]/20 text-white'
                      : 'border-[#00D9FF]/20 bg-[#050B16] text-[#91A8BD] hover:text-[#00D9FF]'
                  }`}
                >
                  Telemetry Diagnostic
                </button>
              </div>

              {/* Input Box Bar */}
              <div className="relative rounded-2xl bg-[#050B16] border border-[#00D9FF]/30 p-2 focus-within:border-[#00D9FF] focus-within:shadow-[0_0_20px_rgba(0,217,255,0.2)] transition-all">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 pl-1 text-[#91A8BD]">
                    <button className="p-1 hover:text-[#00D9FF] transition-colors" title="Attach file">
                      <Paperclip className="w-4 h-4" />
                    </button>
                    <button className="p-1 hover:text-[#00D9FF] transition-colors" title="Web search active">
                      <Globe className="w-4 h-4 text-[#00D9FF]" />
                    </button>
                    <button className="p-1 hover:text-[#00D9FF] transition-colors" title="Voice interaction">
                      <Mic className="w-4 h-4" />
                    </button>
                  </div>

                  <input
                    type="text"
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    placeholder="Ask TERVOX anything, generate code, or explore ideas..."
                    className="flex-1 bg-transparent border-none outline-none text-xs sm:text-sm text-[#EAF6FF] placeholder-[#91A8BD]/60 px-2"
                  />

                  <button
                    disabled
                    className="p-2 rounded-xl bg-gradient-to-r from-[#00D9FF] to-[#168BFF] text-white opacity-90 cursor-not-allowed hover:opacity-100 transition-opacity"
                    title="Desktop companion preview mode"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
