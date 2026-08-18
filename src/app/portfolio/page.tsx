import Image from 'next/image';
import SnapScrollContainer, { SnapScrollIndicator, SnapPageIndicator } from '../components/SnapScrollContainer';
import ExternalLinkButton from '../components/ExternalLinkButton';
import ExpandableCard from '../components/ExpandableCard';

export default function Portfolio() {
  const images = [
    '/photos/portfolio/portfolio1.jpg',
    '/photos/portfolio/portfolio2.jpg',
    '/photos/portfolio/portfolio3.jpg',
  ];

  const totalPages = images.length;

  return (
    <SnapScrollContainer isHome={false}>
        {/* First section - Professional Experience */}
        <div className="snap-start relative h-screen w-full">
        <Image
        src={images[0]}
        alt="Portfolio background"
        className="absolute inset-0 w-full h-full object-cover"
        fill={true}
        priority={true}
        sizes="100vw"
        />
        <div className="absolute inset-0 photo-scrim" />
        <div className="absolute inset-0 flex flex-col items-center justify-center pt-16 md:pt-20">
            <div className="text-paper p-4 md:p-6 max-w-3xl w-full overflow-y-auto max-h-[75vh] md:max-h-[80vh]">
                <p className="eyebrow text-amber text-xs text-center mb-3">Career</p>
                <h2 className="font-display text-2xl md:text-4xl font-semibold mb-2 text-center">Professional Experience</h2>
                <p className="font-mono text-paper/60 text-xs tracking-wide uppercase text-center mb-6">Tap to expand</p>
                <div className="space-y-2">
                    <ExpandableCard title="Software Developer, IBM" subtitle="Jul 2026 - Present | San Jose, CA">
                        <p>Contribute to a production webhook-driven AI-agent pipeline in watsonx Orchestrate, streamlining QA intake and containment review while reducing manual handoffs. Proposed and built a webhook simulator that cut per-case test time from 45 minutes to 3 minutes for every end-to-end permutation ahead of a product launch, which led to being elected to architect a from-scratch E2E validation framework for the broader team.</p>
                    </ExpandableCard>
                    <ExpandableCard title="Founder, Cantena" subtitle="Oct 2025 - Apr 2026 | Remote">
                        <p>Started in agentic coding and search tooling for enterprises, reaching state-of-the-art performance within a day of building. Recognized a stronger edge in construction and pivoted to pre-construction workflows, onboarding 11 construction firms within 3 weeks. Presented twice to Y Combinator and interviewed with Pear VC. Read the{' '}
                        <a href="https://drive.google.com/file/d/1fZCtu-E_MWIaZ2YoC1SB_BY01nnN8ZUt/view" className="text-amber underline hover:text-amber/70" target="_blank" rel="noopener noreferrer">decision memo</a>{' '}
                        and{' '}
                        <a href="https://drive.google.com/file/d/1c-oh0XRVXs9Xecmp5WGVk_8R4TM32PUZ/view?usp=sharing" className="text-amber underline hover:text-amber/70" target="_blank" rel="noopener noreferrer">pre-construction memo</a>.</p>
                    </ExpandableCard>
                    <ExpandableCard title="Software Engineer Intern, Wayfair" subtitle="Summer 2025 | Boston, MA">
                        <p>Full-stack development on fintech microservices using PHP, TypeScript, and Apollo GraphQL. Built and optimized landing pages, improved SEO, implemented end-to-end testing with Jest, and ensured cross-browser accessibility compliance. Monitored production systems with Datadog and Kibana.</p>
                    </ExpandableCard>
                    <ExpandableCard title="Data Architecture Engineer, Whiting-Turner" subtitle="May 2024 - Oct 2024 | Irvine, CA">
                        <p>Restructured a 1B+ data point database into job site-specific systems using Azure (Cosmos DB, SQL, IoT Hub, Stream Analytics), cutting query times by 80%. Led development of a task management system that reduced scheduling delays by 12%. Consulted on AI adoption for construction workflows and mentored junior interns.</p>
                    </ExpandableCard>
                    <ExpandableCard title="Founding Engineer, MyTA" subtitle="Jul 2023 - Mar 2024 | Remote">
                        <p>Built an AI-powered educational chatbot using Meta AI&apos;s Nougat for high-accuracy OCR and Pinecone for vectorized data handling, improving content delivery by 50%. Integrated professorial materials into personalized student support systems. Collaborated with 14+ university AI boards to drive platform adoption.</p>
                    </ExpandableCard>
                    <ExpandableCard title="Research Assistant, GLOB~S Lab" subtitle="Jan 2024 - May 2024 | Boston, MA">
                        <p>Analyzed a 32GB US Patent Directory dataset to uncover disaster-driven innovation trends around Hurricane Katrina. Built scalable data pipelines with NumPy and Dask on shared computing clusters. Merged patent data to inform post-disaster policy and strategy.</p>
                    </ExpandableCard>
                    <ExpandableCard title="AI Software Engineer, Whiting-Turner" subtitle="May 2023 - Jun 2023 | Irvine, CA">
                        <p>Developed OCR/KIE applications for cloud deployment using Mindee&apos;s OCR, FastAPI, and React Native. Achieved 25x reduction in transcription time by automating on-field form processing with OCR and LLM. Spearheaded AI adoption by building MVPs and presenting proof-of-concept documentation to senior management.</p>
                    </ExpandableCard>
                </div>
            </div>
        </div>
        <SnapScrollIndicator />
        </div>

      {/* Hackathon Projects Section */}
      <div className="snap-start relative h-screen w-full">
        <Image
          src={images[1]}
          alt="Portfolio background 2"
          className="absolute inset-0 w-full h-full object-cover"
          fill={true}
          priority={true}
          sizes="100vw"
        />
        <div className="absolute inset-0 photo-scrim" />
        <div className="absolute inset-0 flex items-center justify-center pt-16 md:pt-20">
          <div className="text-paper p-4 md:p-6 max-w-3xl w-full overflow-y-auto max-h-[75vh] md:max-h-[80vh]">
            <p className="eyebrow text-amber text-xs text-center mb-3">Hackathons</p>
            <h2 className="font-display text-2xl md:text-4xl font-semibold mb-1 text-center">Hackathon Projects</h2>
            <p className="font-mono text-paper/60 text-xs tracking-wide uppercase text-center mb-6">$65,000+ in prizes across 10+ hackathons</p>
            <div className="space-y-2">
              <ExpandableCard title="Church & AI 2024, Best Concept" subtitle="$15,000 Prize">
                <p>Led creation of <i>Generosity</i>, an AI-driven platform to unlock $50B in annual church donations. Built AI-powered donor-cause matching algorithms that increased donation growth by 53%. Used Digital Twin technology to optimize initiative success across large member bases with a real-time feedback loop and dynamic AI dashboard.</p>
              </ExpandableCard>
              <ExpandableCard title="Church & AI 2023, Best Technology" subtitle="$50,000 Prize">
                <p>Built an AI-powered MetaHuman backend using Inworld AI and Unreal Engine for immersive 3D interactions. Pioneered personalized AI faith-based counselors, reducing costs by 100x. Crafted the technical infrastructure and business strategy for Gloo&apos;s collaboration.</p>
              </ExpandableCard>
              <ExpandableCard title="Cornell Health Hackathon" subtitle="Finalist, 2023">
                <p>Developed an AI-powered VR/AR therapy app to help individuals overcome phobias. Integrated GPT-3&apos;s API to create personalized prompts for immersive 360-degree environments using Stable Diffusion.</p>
              </ExpandableCard>
              <ExpandableCard title="NASA Space Apps" subtitle="Global Nominee, 2022">
                <p>Engineered an AI system to analyze 22,500+ datasets from public NASA archives. Implemented GPT-3 and Stable Diffusion to make complex datasets accessible to the general public and researchers, earning global recognition.</p>
              </ExpandableCard>
            </div>
          </div>
        </div>
        <SnapPageIndicator totalPages={totalPages} />
      </div>

      {/* Personal Projects Section */}
      <div className="snap-start relative h-screen w-full">
        <Image
          src={images[2]}
          alt="Portfolio background 3"
          className="absolute inset-0 w-full h-full object-cover"
          fill={true}
          priority={true}
          sizes="100vw"
        />
        <div className="absolute inset-0 photo-scrim" />
        <div className="absolute inset-0 flex items-center justify-center pt-16 md:pt-20">
          <div className="text-paper p-4 md:p-6 max-w-3xl w-full overflow-y-auto max-h-[75vh] md:max-h-[80vh]">
            <p className="eyebrow text-amber text-xs text-center mb-3">Side Builds</p>
            <h2 className="font-display text-2xl md:text-4xl font-semibold mb-2 text-center">Personal Projects</h2>
            <p className="font-mono text-paper/60 text-xs tracking-wide uppercase text-center mb-6">Tap to expand</p>
            <div className="space-y-2">
              <ExpandableCard title="Swarm" subtitle="Browser-native distributed LLM training">
                  <p>H100s are hard to come by for personal use, and it turns out the pool of friends willing to lend compute is much bigger than the pool comfortable using a terminal. Built a browser-native distributed GPT-2 trainer that partitions transformer layers across GPU-backed Chrome workers using TensorFlow.js, WebRTC, and 1F1B pipeline parallelism. Validated a 774M-parameter GPT-2 Large model across 6 Chrome workers in 3 AWS regions, using DiLoCo and SparseLoCo to cut synchronization traffic by ~65x, plus gradient checkpointing and 8-bit Adam to reduce activation memory by ~60% and optimizer-state memory by 4x.{' '}
                  <a href="https://bookmarks-audience-himself-commons.trycloudflare.com/" className="text-amber underline hover:text-amber/70" target="_blank" rel="noopener noreferrer">Check it out</a>.</p>
              </ExpandableCard>
              <ExpandableCard title="Agent Checkout Proof" subtitle="Is your AI agent ready to pay?">
                  <p>A wallet-spendability scanner that checks whether a product page gives an AI shopping agent everything it needs to transact safely: item identification, all-in pricing, visible payment methods, a clear risk/refund policy, and a verifiable record of what it found.{' '}
                  <a href="https://isyouragentreadytopay.vercel.app" className="text-amber underline hover:text-amber/70" target="_blank" rel="noopener noreferrer">Check it out</a>.</p>
              </ExpandableCard>
              <ExpandableCard title="OCR Digit Classifier" subtitle="Machine learning">
                  <p>Custom KNN model for handwritten digit recognition on MNIST, achieving 95% accuracy through optimized preprocessing and feature extraction. Built a real-time GUI with Python, Tkinter, PIL, and NumPy.</p>
              </ExpandableCard>
              <ExpandableCard title="AI Interview Bot" subtitle="Full-stack AI application">
                  <p>Real-time interview prep tool using OpenAI, Flask, Next.js, and WebSockets. Provides feedback, grades responses, and tailors questions to specific industries, companies, and job positions.</p>
              </ExpandableCard>
            </div>
            <div className="mt-6 flex justify-center">
              <ExternalLinkButton
                  href="https://github.com/ebrivera"
                  className="font-mono text-xs tracking-wide uppercase border border-amber/50 text-amber hover:bg-amber hover:text-ink px-6 py-3 rounded-lg transition-colors"
              >
                  View GitHub
              </ExternalLinkButton>
            </div>
          </div>
        </div>
        <SnapPageIndicator totalPages={totalPages} />
      </div>
    </SnapScrollContainer>
  );
}
