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
        <div className="absolute inset-0 bg-black bg-opacity-30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center pt-16 md:pt-20">
            <div className="text-white p-4 md:p-6 max-w-3xl w-full overflow-y-auto max-h-[75vh] md:max-h-[80vh]">
                <h2 className="text-2xl md:text-4xl font-bold mb-2 text-center">Professional Experience</h2>
                <p className="text-white/60 text-xs text-center mb-6">Tap to expand</p>
                <div className="space-y-2">
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
        <div className="absolute inset-0 bg-black bg-opacity-30" />
        <div className="absolute inset-0 flex items-center justify-center pt-16 md:pt-20">
          <div className="text-white p-4 md:p-6 max-w-3xl w-full overflow-y-auto max-h-[75vh] md:max-h-[80vh]">
            <h2 className="text-2xl md:text-4xl font-bold mb-1 text-center">Hackathon Projects</h2>
            <p className="text-white/60 text-xs text-center mb-6">$65,000+ in prizes across 10+ hackathons</p>
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
        <div className="absolute inset-0 bg-black bg-opacity-30" />
        <div className="absolute inset-0 flex items-center justify-center pt-16 md:pt-20">
        <div className="flex flex-col md:flex-row justify-between items-stretch w-full max-w-6xl px-8 md:px-16 gap-6 md:gap-10 max-h-[85vh] md:max-h-none">
            <div className="text-white p-4 md:p-6 w-full md:w-2/3 overflow-y-auto max-h-[70vh] md:max-h-none">
              <h2 className="text-2xl md:text-4xl font-bold mb-2 text-center">Personal Projects</h2>
              <p className="text-white/60 text-xs text-center mb-6">Tap to expand</p>
              <div className="space-y-2">
                <ExpandableCard title="Cantena" subtitle="SaaS for AI code understanding">
                    <p>A hosted platform that gives AI coding assistants (Cursor, Claude Code) semantic code understanding via the Model Context Protocol. Indexes repositories into a Neo4j graph database with 19 edge types, enabling token-efficient exploration, structural awareness, and blast radius analysis before code changes. Built with TypeScript, Neo4j, Pinecone, and OpenAI embeddings.</p>
                </ExpandableCard>
                <ExpandableCard title="OCR Digit Classifier" subtitle="Machine learning">
                    <p>Custom KNN model for handwritten digit recognition on MNIST, achieving 95% accuracy through optimized preprocessing and feature extraction. Built a real-time GUI with Python, Tkinter, PIL, and NumPy.</p>
                </ExpandableCard>
                <ExpandableCard title="AI Interview Bot" subtitle="Full-stack AI application">
                    <p>Real-time interview prep tool using OpenAI, Flask, Next.js, and WebSockets. Provides feedback, grades responses, and tailors questions to specific industries, companies, and job positions.</p>
                </ExpandableCard>
              </div>
            </div>
            <div className="flex flex-col md:w-1/3">
              <div className="relative flex-grow w-full overflow-hidden rounded-lg min-h-[200px]">
                <Image
                  src="/photos/portfolio/cantena-graph.jpg"
                  alt="Cantena knowledge graph visualization"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  fill={true}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="mt-4">
                <ExternalLinkButton
                    href="https://github.com/ebrivera"
                    className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg transition-colors w-full text-sm"
                >
                    View GitHub
                </ExternalLinkButton>
              </div>
            </div>
        </div>
        </div>
        <SnapPageIndicator totalPages={totalPages} />
      </div>
    </SnapScrollContainer>
  );
}
