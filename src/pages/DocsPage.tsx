import React, { useState } from 'react';
import { 
  Search, 
  BookOpen, 
  ChevronDown, 
  ChevronRight, 
  HelpCircle, 
  Terminal, 
  ShieldCheck, 
  Settings, 
  ExternalLink,
  LifeBuoy
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { ComingSoonBadge } from '../components/ComingSoonBadge';

interface DocSection {
  id: string;
  category: string;
  title: string;
  content: string;
  codeSnippet?: string;
}

const DOC_SECTIONS: DocSection[] = [
  {
    id: 'getting-started',
    category: 'Getting Started',
    title: 'Overview of the TERVOX Architecture',
    content: 'TERVOX AI is built as a single integrated desktop station. Instead of scattering sessions across multiple disconnected web interfaces, TERVOX indexes active project files, maintains sovereign memory, and executes code locally with minimal latency.',
  },
  {
    id: 'installation',
    category: 'Installation Guide',
    title: 'Desktop Client Setup & Verification',
    content: 'During the upcoming launch, installers for macOS, Windows, and Linux will be provided on the /download route accompanied by cryptographic SHA-256 checksums to verify package authenticity.',
    codeSnippet: `# Verify package integrity prior to installation
shasum -a 256 tervox-desktop-darwin-arm64.dmg`,
  },
  {
    id: 'app-basics',
    category: 'Application Basics',
    title: 'Keyboard Shortcuts & Fast Navigation',
    content: 'TERVOX includes a lightweight shortcut engine designed to keep hands on the keyboard. Use Cmd/Ctrl + K to switch active workspaces, Cmd/Ctrl + Shift + T to toggle the assistant overlay, and Cmd/Ctrl + Enter to dispatch prompts.',
  },
  {
    id: 'features-guide',
    category: 'Features Guide',
    title: 'Utilizing Personal Memory & Project Scopes',
    content: 'Personal Memory operates as a localized vector embedding space. When you instruct TERVOX to "remember that this project strictly uses Tailwind v4 with TypeScript", the instruction is persisted into the active workspace index.',
  },
  {
    id: 'troubleshooting',
    category: 'Troubleshooting',
    title: 'Network Proxy Configuration & Offline Caching',
    content: 'If your organization enforces an enterprise HTTP proxy or self-hosted endpoint, navigate to Settings → Network to input proxy addresses and bypass custom certificates securely.',
  },
  {
    id: 'security',
    category: 'Application Basics',
    title: 'Data Sovereignty & Zero Training Guarantee',
    content: 'User prompts and local repository files are never used to train generalized foundation models without explicit contractual consent. All memory states are stored in client-side encrypted partitions.',
  },
];

const FAQS = [
  {
    q: 'When will TERVOX AI be available for download?',
    a: 'TERVOX AI is currently in release candidate staging. Installers will be published on our Download page as soon as the security and performance audits conclude. You can join the launch notification list on the Download page.',
  },
  {
    q: 'Can TERVOX AI run alongside my existing IDE or terminal?',
    a: 'Yes. TERVOX is designed to operate seamlessly side-by-side with VS Code, Cursor, JetBrains, or your terminal. It features a compact overlay dock mode that tucks into the screen margin.',
  },
  {
    q: 'Does TERVOX AI require an active internet connection?',
    a: 'Real-time web search and cloud reasoning models require connectivity. However, your local personal memory index, past session history, and cached workspace notes remain readable and searchable offline.',
  },
  {
    q: 'How does TERVOX AI ensure code confidentiality?',
    a: 'Your source files are parsed locally into ephemeral runtime tokens. They are not permanently stored on shared public servers, and no repository code is ever leaked across different user accounts.',
  },
  {
    q: 'Which operating systems will be supported at launch?',
    a: 'macOS (both Apple Silicon M-series and Intel), Windows 10/11 (64-bit), and modern Linux distributions (via AppImage and native packages).',
  },
];

export const DocsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Getting Started', 'Installation Guide', 'Application Basics', 'Features Guide', 'Troubleshooting'];

  const filteredDocs = DOC_SECTIONS.filter((doc) => {
    const matchesCategory = activeCategory === 'All' || doc.category === activeCategory;
    const matchesSearch =
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#050B16] text-[#EAF6FF] py-16 px-4 sm:px-6 lg:px-8 bg-cyber-grid">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <ComingSoonBadge className="mb-4" />
          <h1 className="text-4xl sm:text-6xl font-black text-white font-['Lexend'] mb-4 tracking-tight">
            Help Center & <span className="bg-gradient-to-r from-white to-[#00D9FF] bg-clip-text text-transparent">Documentation</span>
          </h1>
          <p className="text-base sm:text-lg text-[#91A8BD] leading-relaxed mb-8">
            Guides, architectural notes, and answers to prepare you for working with TERVOX AI.
          </p>

          {/* Search bar */}
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#91A8BD]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search documentation, guides, or topics..."
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-[#081426] border border-[#00D9FF]/30 text-sm text-[#EAF6FF] placeholder-[#91A8BD]/60 focus:outline-none focus:border-[#00D9FF] focus:shadow-[0_0_20px_rgba(0,217,255,0.2)]"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-xl text-xs font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-[#00D9FF] text-[#050B16] font-bold shadow-[0_0_15px_rgba(0,217,255,0.4)]'
                  : 'bg-[#081426] text-[#91A8BD] border border-[#00D9FF]/20 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Main Content: Docs + FAQ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
          {/* Documentation Cards (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-white font-['Lexend'] flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#00D9FF]" />
                <span>Reference Documentation</span>
              </h2>
              <span className="text-xs font-mono text-[#91A8BD]">
                Showing {filteredDocs.length} {filteredDocs.length === 1 ? 'article' : 'articles'}
              </span>
            </div>

            {filteredDocs.length === 0 ? (
              <div className="p-8 rounded-2xl bg-[#081426] border border-[#00D9FF]/20 text-center">
                <p className="text-sm text-[#91A8BD]">No articles match your search criteria.</p>
                <button
                  onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                  className="mt-3 text-xs text-[#00D9FF] font-medium hover:underline"
                >
                  Clear search filters
                </button>
              </div>
            ) : (
              filteredDocs.map((doc) => (
                <div
                  key={doc.id}
                  className="p-6 rounded-2xl bg-[#081426]/70 border border-[#00D9FF]/20 hover:border-[#00D9FF]/40 transition-all"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-[#00D9FF]/10 text-[#00D9FF] border border-[#00D9FF]/20">
                      {doc.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{doc.title}</h3>
                  <p className="text-sm text-[#91A8BD] leading-relaxed mb-4">{doc.content}</p>

                  {doc.codeSnippet && (
                    <div className="rounded-xl overflow-hidden bg-[#050B16] border border-[#00D9FF]/20 p-3 font-mono text-xs text-[#00D9FF]">
                      <code>{doc.codeSnippet}</code>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>

          {/* Quick Support & Contact Box (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="rounded-3xl bg-[#081426] border border-[#00D9FF]/30 p-6">
              <div className="w-10 h-10 rounded-2xl bg-[#00D9FF]/10 text-[#00D9FF] flex items-center justify-center mb-4">
                <LifeBuoy className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Need Direct Assistance?</h3>
              <p className="text-xs text-[#91A8BD] leading-relaxed mb-6">
                Our core engineering team answers questions on architecture, enterprise deployments, and upcoming beta schedules.
              </p>
              <Link
                to="/contact"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#00D9FF] to-[#168BFF] text-xs font-bold text-[#050B16] hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,217,255,0.3)]"
              >
                <span>Contact Engineering Support</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-['Lexend'] mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-[#91A8BD]">
              Common questions about the forthcoming TERVOX AI public launch.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-[#081426]/70 border border-[#00D9FF]/20 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-bold text-white">{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#00D9FF] shrink-0 transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#91A8BD] leading-relaxed border-t border-[#00D9FF]/10">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
