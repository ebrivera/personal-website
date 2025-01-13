"use client"
import { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import ScrollIndicator from '../components/ScrollIndicator';
import PageIndicator from '../components/PageIndicator';
import Image from 'next/image'

export default function About() {
  const [scrolledPastFirst, setScrolledPastFirst] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollPosition = container.scrollTop;
      setScrolledPastFirst(scrollPosition > container.clientHeight * 0.3);
      
      // Calculate current page based on scroll position
      const currentPage = Math.round(scrollPosition / container.clientHeight);
      setCurrentPage(currentPage);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const images = [
    '/photos/about/about1.jpg',
    '/photos/about/about2.jpg',
    '/photos/about/about3.jpg',
    '/photos/about/about4.jpg',
    
  ];

  const totalPages = images.length;

  return (
    <div 
      className="snap-y snap-mandatory h-screen w-full overflow-y-auto scroll-smooth" 
      ref={containerRef}
    >
        <Header scrolledPastFirst={scrolledPastFirst} isHome={false} />
        
        {/* First section */}
        <div className="snap-start relative h-screen w-full">
            <Image
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
                            As previously mentioned, I am Ernesto Rivera. I&apos;m originally from Las Vegas, Nevada, where I discovered my 
                            passion for building. I thrived in robotics classes starting at 8 years old, but what stuck with me was 
                            programming robots&mdash;something nobody else around me seemed to enjoy. At 12, I moved to California,
                             where I couldn&apos;t join the school&apos;s robotics team due to circumstances beyond my control. This unexpected obstacle gave me the perfect opportunity 
                            to become part of the first-ever middle school group of students taking AP Computer Science A.
                            
                            <br /><br />While this Java class wasn&apos;t my best work, it opened Pandora&apos;s box to the world of programming. At Troy 
                            High School, I was required to choose a pathway, much like selecting a major. I furthered my programming 
                            journey by choosing the Computer Science pathway, where I eventually completed four years of programming 
                            coursework. I share this story because, for many, Computer Science is a field they pursue primarily for the lucrative 
                            paycheck it offers. But for me, Computer Science was a <i><b>passion</b></i> long before it became a career opportunity.
                        </p>
                    </div>
                    {/* Image container now matches parent height */}
                    <div className="flex bg-[#6f423c] bg-opacity-25 md:w-1/4">
                        <div className="relative w-full overflow-hidden">
                            <Image
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
            <Image
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
                I&apos;m particularly intrigued by the intersection of technology and its practical applications, 
                especially how tools like Artificial Intelligence can drive innovation across various sectors. 
                My experience spans contributions to universities, the construction industry, the video game 
                industry, and the medical billing industry, among others.
                <br /> <br />
                One of my favorite fields is Computer Vision. Cameras are becoming more advanced and are now
                integral to our daily lives, from smartphones to specialized devices like infrared and thermal 
                cameras. My fascination with this field started in high school with Optical Character 
                Recognition (OCR), which introduced me to the potential of programming. Papers like <a href="https://arxiv.org/abs/2308.13418" className="underline hover:text-white/70">Nougat</a> fueled
                 my curiosity, showcasing how AI can transform untapped visual data into meaningful insights. 
                <br /> <br />
                Beyond vision, I&apos;m captivated by Quantum Computing. What began as a curiosity after watching a TED 
                Talk evolved into a deeper interest when I learned about efforts to use quantum computers to 
                challenge encryption methods like RSA. The possibilities of reliable quantum computing—advancing 
                medical research, accelerating computations, and unlocking new technologies—continue to inspire me.
                </p>
            </div>
            </div>
            <PageIndicator
                currentPage={currentPage} 
                totalPages={totalPages} 
                visible={true}
            />
        </div>

        {/* Second section - Entrepreneurship */}
        <div className="snap-start relative h-screen w-full">
            <Image
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
                    real-world challenges. Since then, I&apos;ve participated in numerous hackathons, winning over $65,000 in 
                    prizes.
                    <br /> <br />
                    Hackathons provide an exciting space to collaborate and turn imaginative ideas into reality within 
                    24 hours. They&apos;ve taught me the importance of teamwork, creativity, and adaptability. Beyond hackathons, 
                    I&apos;ve worked on two startups, including serving as a lead technical engineer. One of these startups 
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
                    <Image
                        src="/photos/about/hackathon.jpeg"
                        alt="Professional headshot"
                        className="absolute inset-0 w-full h-full object-cover object-center"
                    />
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

        {/* Second section - Personal Interests */}
        <div className="snap-start relative h-screen w-full">
            <Image
            src={images[3]}
            alt="Secondary image"
            className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30" />
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white p-4 max-w-7xl bg-[#999f9f] bg-opacity-35">
                    <h2 className="text-4xl font-bold mb-6">Personal Interests</h2>
                    <p className="text-md md:text-md text-justify">
                        While tech and entrepreneurship are central to my journey, there&apos;s so much more that defines who I am. First 
                        and foremost, I&apos;m grateful for my family and friends who have supported me in all my endeavors. Scattered 
                        throughout my website are photos of my friends, which ties into one of my first passions: photography. All 
                        the background photos on this website were taken with my film camera, a hobby that lets me preserve memories 
                        from my travels.

                        <br /><br />
                        Travel is another passion of mine, and I love exploring new places, immersing myself in different cultures, 
                        and&mdash;most importantly&mdash;trying the food. I consider myself a foodie who&apos;s always open to trying 
                        anything at least three times. My love for food extends to coffee, and in Fall 2024, I made one of my favorite 
                        purchases: the Breville Bambino Plus Espresso Machine. Now, I enjoy experimenting with beans I&apos;ve collected 
                        from my travels, learning to appreciate the unique flavors of each roast.

                        <br /><br />
                        Living in Boston for school has its own perks, though I miss surfing and snowboarding back home in Southern 
                        California. While I can&apos;t enjoy those activities here, I&apos;ve continued running, a sport I competed in all four 
                        years of high school as a varsity cross country and track athlete. Running has remained a meaningful way for 
                        me to stay active and grounded.

                        <br /><br />
                        I&apos;m also passionate about leadership and connecting with others. As President of one of the leading business 
                        fraternities at my university, I&apos;ve been able to work with driven individuals from diverse fields. This role 
                        has allowed me to expand my network and perspective beyond the tech world, which I&apos;ve found incredibly rewarding.

                        <br /><br />
                        Lastly, music is a constant in my life. I listen to over 8 hours a day, enjoying genres like RnB, indie, and 
                        EDM. I&apos;ve attended more than 20 concerts, and music has become a source of energy and inspiration for me. 
                        Whether it&apos;s through food, travel, or music, these passions remind me to stay curious and live life fully.
                    </p>
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