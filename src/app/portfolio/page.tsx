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
                <button className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg transition-colors" onClick={() => window.open('https://www.linkedin.com/in/ernestobrivera/', '_blank')}>
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
        />
        <div className="absolute inset-0 bg-black bg-opacity-30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white p-4 max-w-4xl bg-[#999f9f] bg-opacity-25">
            <h2 className="text-4xl font-bold mb-6">Hackathon Projects</h2>
            <p className="text-lg md:text-md text-justify">
              [Your hackathon projects description here...]
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
        />
        <div className="absolute inset-0 bg-black bg-opacity-30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col md:flex-row justify-between items-stretch w-full max-w-8xl px-8 md:px-16 gap-8 md:gap-12">
            <div className="text-center text-white p-6 md:p-8 bg-[#232728] bg-opacity-15 w-full md:w-3/4">
              <h2 className="text-4xl font-bold mb-6 md:mb-8">Personal Projects</h2>
              <p className="text-lg md:text-md text-justify">
                [Your personal projects description here...]
              </p>
            </div>
            <div className="flex flex-col bg-[#232728] bg-opacity-15 md:w-1/4">
              <div className="relative flex-grow w-full overflow-hidden">
                <Image
                  src="/photos/portfolio/personal-projects.jpg"
                  alt="Personal projects"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              </div>
              <button className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 transition-colors w-full">
                View Projects
              </button>
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



