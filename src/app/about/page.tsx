"use client"
import { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import ScrollIndicator from '../components/ScrollIndicator';

export default function About() {
  const [scrolledPastFirst, setScrolledPastFirst] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollPosition = container.scrollTop;
      setScrolledPastFirst(scrollPosition > container.clientHeight * 0.3);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const images = [
    '/photos/about/about1.jpg',
    '/photos/about/about2.jpg',
    '/photos/about/about3.jpg',

  ];

  return (
    <div 
      className="snap-y snap-mandatory h-screen w-full overflow-y-auto scroll-smooth" 
      ref={containerRef}
    >
        <Header scrolledPastFirst={scrolledPastFirst} isHome={false} />
        
        {/* First section */}
        <div className="snap-start relative h-screen w-full">
            <img
            src={images[0]}
            alt="About Picture 1 (London Covent Garden)"
            className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30" />
            {/* Added pt-24 to create space below navbar */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex flex-col md:flex-row justify-between items-stretch w-full max-w-8xl px-8 md:px-16 gap-8 md:gap-12">
                    <div className="text-center text-white p-6 md:p-8 bg-[#232728] bg-opacity-15 w-full md:w-3/4">
                        <h2 className="text-4xl font-bold mb-6 md:mb-8">Why Computer Science?</h2>
                        <p className="text-lg md:text-md text-justify">
                            As previously mentioned, I am Ernesto Rivera. I'm originally from Las Vegas, Nevada, where I discovered my 
                            passion for building. I thrived in robotics classes starting at 8 years old, but what stuck with me was 
                            programming robots&mdash;something nobody else around me seemed to enjoy. At 12, I moved to California, where 
                            I wasn't allowed to join the school's robotics team. This unexpected obstacle gave me the perfect opportunity 
                            to become part of the first-ever middle school group of students taking AP Computer Science A.
                            
                            <br /><br />While this Java class wasn't my best work, it opened Pandora's box to the world of programming. At Troy 
                            High School, I was required to choose a pathway, much like selecting a major. I furthered my programming 
                            journey by choosing the Computer Science pathway, where I eventually completed four years of programming 
                            coursework. I share this story because, for many, Computer Science is a field they pursue primarily for the lucrative 
                            paycheck it offers. But for me, Computer Science was a <i><b>passion</b></i> long before it became a career opportunity.
                        </p>
                    </div>
                    {/* Image container now matches parent height */}
                    <div className="flex bg-[#6f423c] bg-opacity-25 md:w-1/4">
                        <div className="relative w-full overflow-hidden">
                            <img
                            src="/photos/about/professional-headshot.jpg"
                            alt="Professional headshot"
                            className="absolute inset-0 w-full h-full object-cover object-center"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <ScrollIndicator visible={!scrolledPastFirst} />
        </div>

        {/* Second section - Technical Interests */}
        <div className="snap-start relative h-screen w-full">
            <img
            src={images[1]}
            alt="Secondary image"
            className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30" />
            <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white p-4 max-w-4xl bg-[#999f9f] bg-opacity-25">
                <h2 className="text-4xl font-bold mb-6">Technical Interests</h2>
                <p className="text-lg md:text-md text-justify">
                Computer Science has always been a passion of mine, deeply shaping my interests in the industry.
                I’m particularly intrigued by the intersection of technology and its practical applications, 
                especially how tools like Artificial Intelligence can drive innovation across various sectors. 
                My experience spans contributions to universities, the construction industry, the video game 
                industry, and the medical billing industry, among others.
                <br /> <br />
                One of my favorite fields is Computer Vision. Cameras are becoming more advanced and are now
                integral to our daily lives, from smartphones to specialized devices like infrared and thermal 
                cameras. My fascination with this field started in high school with Optical Character 
                Recognition (OCR), which introduced me to the potential of programming. Papers like 
                <a href="https://arxiv.org/abs/2308.13418" className="underline hover:text-white/70"> Nougat</a> 
                fueled my curiosity, showcasing how AI can transform untapped visual data into meaningful insights. 
                <br /> <br />
                Beyond vision, I’m captivated by Quantum Computing. What began as a curiosity after watching a TED 
                Talk evolved into a deeper interest when I learned about efforts to use quantum computers to 
                challenge encryption methods like RSA. The possibilities of reliable quantum computing—advancing 
                medical research, accelerating computations, and unlocking new technologies—continue to inspire me.
                </p>
            </div>
            </div>
        </div>

        {/* Second section - Entrepreneurship */}
        <div className="snap-start relative h-screen w-full">
            <img
                src={images[2]}
                alt="Secondary image"
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30" />
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex flex-col md:flex-row justify-between items-stretch w-full max-w-8xl px-8 md:px-16 gap-8 md:gap-12">
                <div className="text-center text-white p-6 md:p-8 bg-[#232728] bg-opacity-15 w-full md:w-3/4">
                    <h2 className="text-4xl font-bold mb-6 md:mb-8">Entrepreneurship Endeavors</h2>
                    <p className="text-lg md:text-md text-justify">
                    My passion for entrepreneurship and hackathons has been a major driver in my journey with technology. 
                    During a gap semester before college, I joined my first hackathon: the NASA Space Apps Competition. 
                    Our team became Global Nominees, which sparked my fascination with using technology to address 
                    real-world challenges. Since then, I’ve participated in numerous hackathons, winning over $65,000 in 
                    prizes.
                    <br /> <br />
                    Hackathons provide an exciting space to collaborate and turn imaginative ideas into reality within 
                    24 hours. They’ve taught me the importance of teamwork, creativity, and adaptability. Beyond hackathons, 
                    I’ve worked on two startups, including serving as a lead technical engineer. One of these startups 
                    focused on integrating Large Language Models (LLMs) into universities, providing students with 24/7 access 
                    to AI-powered tutors tailored to their courses. Collaborating with over 14 universities, I gained 
                    invaluable experience scaling technology to meet institutional needs.
                    <br /> <br />
                    While that venture has concluded, it solidified my passion for building impactful solutions and reinforced 
                    the potential of startups to create meaningful change.
                    </p>
                </div>
                {/* Image container now matches parent height */}
                <div className="flex bg-[#6f423c] bg-opacity-25 md:w-1/4">
        <div className="relative w-full overflow-hidden">
                <img
                    src="/photos/about/hackathon.jpeg"
                    alt="Professional headshot"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />
                </div>
            </div>
            </div>
        </div>
        </div>

      {/* Additional sections as needed */}
    </div>
  );
}