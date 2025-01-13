"use client"
import { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import ScrollIndicator from '../components/ScrollIndicator';
import PageIndicator from '../components/PageIndicator';
import Image from 'next/image';

export default function Portfolio() {
  const [scrolledPastFirst, setScrolledPastFirst] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollPosition = container.scrollTop;
      setScrolledPastFirst(scrollPosition > container.clientHeight * 0.3);
      
      const currentPage = Math.round(scrollPosition / container.clientHeight);
      setCurrentPage(currentPage);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const images = [
    '/photos/portfolio/portfolio1.jpg',
    '/photos/portfolio/portfolio2.jpg',
    '/photos/portfolio/portfolio3.jpg',
  ];

  const totalPages = images.length;

  return (
    <div 
      className="snap-y snap-mandatory h-screen w-full overflow-y-auto scroll-smooth" 
      ref={containerRef}
    >
      <Header scrolledPastFirst={scrolledPastFirst} isHome={false} />
      
        {/* Second section - About/Welcome */}
        <div className="snap-start relative h-screen w-full">
        <Image
        src={images[0]}
        alt="Secondary image"
        className="absolute inset-0 w-full h-full object-cover"
        fill={true}
        />
        <div className="absolute inset-0 bg-black bg-opacity-30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-center text-white p-4 max-w-7xl bg-[#999f9f] bg-opacity-35">
                <h2 className="text-4xl font-bold mb-6">Professional Portfolio</h2>
                <p className="text-md md:text-md text-justify">
                    I am a driven technologist with a passion for leveraging artificial intelligence, data 
                    architecture, and innovative solutions to solve real-world problems. With over five internships, 
                    a research assistant role, and two startups under my belt, I bring a wealth of experience in 
                    consulting, development, and leadership across industries such as construction, education, and 
                    technology.
                    <br /> <br />
                    As a Data Architecture Engineer and Full-Stack SWE/AI Developer at Whiting-Turner, I restructured 
                    a database of over 1 billion data points into job site-specific databases, reducing query times by 
                    80% and enabling scalable, efficient workflows. I also led the development of a task management 
                    system that reduced scheduling delays by 12% and mentored junior interns to foster sustainable growth. 
                    My consulting efforts included introducing artificial intelligence applications, such as a resume 
                    scanner proof-of-concept, to demonstrate the potential of AI in construction management.
                    <br /> <br />
                    In the startup space, I served as a Founding Engineer at MyTA, where I developed an AI-powered 
                    educational chatbot that integrated cutting-edge technologies like Meta AI&apos;s Nougat and Pinecone, 
                    improving content delivery by 50%. Collaborating with over 14 universities, I helped scale this 
                    platform to provide 24/7 personalized academic support to students, demonstrating my ability to 
                    build impactful, scalable solutions.
                    <br /> <br />
                    At the GLOB~S Lab at Boston University, I worked as a Research Assistant to analyze a 32GB dataset 
                    from the US Patent Directory. My work focused on uncovering innovation trends related to disasters 
                    like Hurricane Katrina, streamlining workflows with advanced tools such as NumPy and Dask to extract 
                    key insights and inform policy strategies.
                </p>
            </div>
            <div className="flex gap-4 mt-8 justify-center">
                <button 
                  onClick={() => window.open('/ErnestoRivera_Resume.pdf', '_blank')}
                  className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg transition-colors"
                >
                  Download Resume
                </button>
                <button 
                    className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg transition-colors" 
                    onClick={() => window.open('https://www.linkedin.com/in/ernestobrivera/', '_blank')}>
                LinkedIn Profile
                </button>
            </div>
        </div>
        <ScrollIndicator visible={!scrolledPastFirst} />
        </div>

      {/* Hackathon Projects Section */}
      <div className="snap-start relative h-screen w-full">
        <Image
          src={images[1]}
          alt="Portfolio background 2"
          className="absolute inset-0 w-full h-full object-cover"
          fill={true}
        />
        <div className="absolute inset-0 bg-black bg-opacity-30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white p-4 max-w-7xl bg-[#999f9f] bg-opacity-25">
            <h2 className="text-4xl font-bold mb-6">Hackathon Projects</h2>
            <p className="text-lg md:text-md text-justify">
            <b>Church & AI Hackathon, Best Concept &mdash; $15,000 Prize</b><br />
            At the 2024 Church & AI Hackathon, I led the creation of <i>Generosity</i>, an AI-driven platform designed 
            to unlock $50 billion in annual church donations. Leveraging AI-powered donor-cause matching algorithms, 
            we increased donation growth by up to 53% and utilized Digital Twin technology to optimize initiative success 
            across large member bases. The platform featured a real-time feedback loop for donors, transforming engagement 
            and transparency through a dynamic AI dashboard.
            <br /><br />
            <b>Church & AI Hackathon, Best Technology &mdash; $50,000 Prize</b><br />
            In 2023, I contributed to building an AI-powered MetaHuman backend using Inworld AI and Unreal Engine for 
            immersive 3D interactions. This project pioneered personalized AI faith-based counselors, reducing costs by 
            100x through targeted ads and search engine tools. I played a pivotal role in crafting the technical 
            infrastructure and business strategy, establishing a strong foundation for Gloo&apos;s collaboration.
            <br /><br />
            <b>Cornell Health Hackathon Finalist</b><br />
            As a finalist in 2023, I developed an AI-powered VR/AR therapy app to help individuals overcome phobias. I 
            also integrated GPT-3&apos;s API to create personalized prompts for immersive 360-degree environments using Stable 
            Diffusion, showcasing innovation in therapeutic applications.
            <br /><br />
            <b>NASA Space Apps Global Nominee</b><br />
            At the 2022 NASA Space Apps Hackathon, I engineered an AI system to analyze over 22,500 datasets from public 
            NASA archives. By implementing GPT-3 and Stable Diffusion, I made complex datasets easily accessible for the 
            general public and researchers alike, earning global recognition for advancing AI-powered data exploration.
            </p>
          </div>
        </div>
        <PageIndicator
          currentPage={currentPage} 
          totalPages={totalPages} 
          visible={true}
        />
      </div>

      {/* Personal Projects Section */}
      <div className="snap-start relative h-screen w-full">
        <Image
          src={images[2]}
          alt="Portfolio background 3"
          className="absolute inset-0 w-full h-full object-cover"
          fill={true}
        />
        <div className="absolute inset-0 bg-black bg-opacity-30" />
        <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col md:flex-row justify-between items-stretch w-full max-w-8xl px-8 md:px-16 gap-8 md:gap-12">
            <div className="text-center text-white p-6 md:p-8 bg-[#232728] bg-opacity-15 w-full md:w-3/4">
            <h2 className="text-4xl font-bold mb-6 md:mb-8">Personal Projects</h2>
            <p className="text-lg md:text-md text-justify">
                I&apos;ve always loved building projects, whether at hackathons, for work, or on my own time to solve personal challenges. 
                One of my favorite projects is an <b>OCR Digit Classifier</b>, where I developed a custom K-Nearest Neighbors (KNN) 
                machine learning model to recognize handwritten digits using the MNIST dataset. The classifier achieved 95% accuracy 
                through optimized preprocessing and feature extraction methods, and I enhanced it with a user-friendly GUI built in 
                Python using Tkinter, PIL, and Numpy, enabling real-time digit recognition. This project not only demonstrated the 
                potential of machine learning but also deepened my understanding of OCR and classification techniques.
                <br /><br />
                Currently, I&apos;m working on an <b>AI Interview Bot</b> designed to assist individuals like myself in preparing for 
                technical and behavioral interviews. Using OpenAI, Flask, Next.js, and WebSockets, the bot provides real-time feedback, 
                grades responses, and tailors questions to specific industries, companies, and job positions. It&apos;s a project I&apos;m 
                incredibly excited about and hope to release a version by the end of January 2025. Stay tuned for updates!
                <br /><br />
                Whether it&apos;s automating email responses based on LinkedIn activity or creating tools to improve productivity and 
                learning, my personal projects allow me to explore new technologies and solve meaningful problems.
            </p>
            </div>
            <div className="flex flex-col bg-[#232728] bg-opacity-15 md:w-1/4">
            <div className="relative flex-grow w-full overflow-hidden">
                <Image
                src="/photos/portfolio/ocr-proj.jpeg"
                alt="Personal projects"
                className="absolute inset-0 w-full h-full object-cover object-center"
                fill={true}
                />
            </div>
            <div className="mt-4">
                <button 
                    className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg transition-colors w-full" 
                    onClick={() => window.open('https://github.com/ebrivera', '_blank')}
                    >
                    View GitHub
                </button>
            </div>
            </div>
        </div>
        </div>
        <PageIndicator
          currentPage={currentPage} 
          totalPages={totalPages} 
          visible={true}
        />
      </div>
    </div>
  );
}
