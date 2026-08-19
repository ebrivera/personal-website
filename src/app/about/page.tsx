import Image from 'next/image';
import SnapScrollContainer, { SnapScrollIndicator, SnapPageIndicator } from '../components/SnapScrollContainer';

export default function About() {
  const images = [
    '/photos/about/about1.jpg',
    '/photos/about/about2.jpg',
    '/photos/about/about3.jpg',
    '/photos/about/about4.jpg',
  ];

  const totalPages = images.length;

  return (
    <SnapScrollContainer isHome={false}>
        {/* First section */}
        <div className="snap-start relative h-screen w-full">
            <Image
            src={images[0]}
            alt="About Picture 1 (London Covent Garden)"
            className="absolute inset-0 w-full h-full object-cover"
            fill={true}
            priority={true}
            sizes="100vw"
            />
            <div className="absolute inset-0 photo-scrim" />
            {/* Added pt-24 to create space below navbar */}
            <div className="absolute inset-0 flex items-center justify-center pt-16 md:pt-20">
                <div className="flex flex-col md:flex-row justify-between items-stretch w-full max-w-6xl px-8 md:px-16 gap-6 md:gap-8 max-h-[85vh] md:max-h-none">
                    <div className="surface-card rounded-xl text-left text-paper p-6 md:p-8 w-full md:w-3/4 overflow-y-auto max-h-[70vh] md:max-h-none">
                        <p className="eyebrow text-amber text-xs mb-3">Origins</p>
                        <h2 className="font-display text-2xl md:text-4xl font-semibold mb-4 md:mb-6">Why Computer Science?</h2>
                        <p className="text-sm md:text-base leading-relaxed text-paper/90">
                            I&apos;m Ernesto Rivera, originally from Las Vegas, Nevada, where I discovered my
                            passion for building. I thrived in robotics classes starting at 8 years old, but what stuck with me was
                            programming robots &mdash; something nobody else around me seemed to enjoy. At 12, I moved to California,
                            where I couldn&apos;t join the school&apos;s robotics team due to circumstances beyond my control. That unexpected obstacle
                            led me to the first-ever middle school group of students taking AP Computer Science A.

                            <br /><br />That Java class wasn&apos;t my best work, but it opened Pandora&apos;s box to the world of programming. At Troy
                            High School, I chose the Computer Science pathway and completed four years of coursework. I share this story
                            because, for many, Computer Science is a field pursued primarily for the paycheck. But for me, it was a{' '}
                            <span className="text-amber italic">passion</span> long before it became a career.
                        </p>
                    </div>
                    <div className="relative w-full md:w-1/4 rounded-xl overflow-hidden border border-paper/12 min-h-[160px]">
                        <Image
                        src="/photos/about/professional-headshot.jpg"
                        alt="Professional headshot"
                        className="absolute inset-0 w-full h-full object-cover object-center"
                        fill={true}
                        sizes="(max-width: 768px) 100vw, 25vw"
                        />
                    </div>
                </div>
            </div>
            <SnapScrollIndicator />
        </div>

        {/* Second section - Technical Interests */}
        <div className="snap-start relative h-screen w-full">
            <Image
            src={images[1]}
            alt="Secondary image"
            className="absolute inset-0 w-full h-full object-cover"
            fill={true}
            sizes="100vw"
            />
            <div className="absolute inset-0 photo-scrim" />
            <div className="absolute inset-0 flex items-center justify-center pt-16 md:pt-20">
            <div className="surface-card rounded-xl text-left text-paper p-6 md:p-8 max-w-3xl overflow-y-auto max-h-[80vh] md:max-h-none">
                <p className="eyebrow text-amber text-xs mb-3">Focus</p>
                <h2 className="font-display text-2xl md:text-4xl font-semibold mb-4 md:mb-6">Technical Interests</h2>
                <p className="text-sm md:text-base leading-relaxed text-paper/90">
                Computer Science has always been a passion of mine. I&apos;m especially drawn to the intersection of
                technology and its practical applications &mdash; how tools like AI can drive innovation across sectors.
                My experience spans universities, construction, video games, and medical billing.
                <br /> <br />
                One of my favorite fields is Computer Vision. Cameras are more advanced than ever and now
                integral to daily life, from smartphones to infrared and thermal devices. My fascination with
                this field started in high school with Optical Character Recognition (OCR), which introduced me
                to the potential of programming. Papers like <a href="https://arxiv.org/abs/2308.13418" className="text-amber underline hover:text-amber/70" target="_blank" rel="noopener noreferrer">Nougat</a> fueled
                 that curiosity, showing how AI can transform untapped visual data into meaningful insights.
                <br /> <br />
                Beyond vision, I&apos;m captivated by Quantum Computing. What began as curiosity after a TED
                Talk deepened when I learned about efforts to use quantum computers to challenge encryption
                methods like RSA. The possibilities &mdash; advancing medical research, accelerating computation,
                unlocking new technologies &mdash; continue to inspire me.
                </p>
            </div>
            </div>
            <SnapPageIndicator totalPages={totalPages} />
        </div>

        {/* Third section - Entrepreneurship */}
        <div className="snap-start relative h-screen w-full">
            <Image
                src={images[2]}
                alt="Secondary image"
                className="absolute inset-0 w-full h-full object-cover"
                fill={true}
                sizes="100vw"
            />
            <div className="absolute inset-0 photo-scrim" />
            <div className="absolute inset-0 flex items-center justify-center pt-16 md:pt-20">
                <div className="flex flex-col md:flex-row justify-between items-stretch w-full max-w-6xl px-8 md:px-16 gap-6 md:gap-8 max-h-[85vh] md:max-h-none">
                <div className="surface-card rounded-xl text-left text-paper p-6 md:p-8 w-full md:w-3/4 overflow-y-auto max-h-[70vh] md:max-h-none">
                    <p className="eyebrow text-amber text-xs mb-3">Building</p>
                    <h2 className="font-display text-2xl md:text-4xl font-semibold mb-4 md:mb-6">Entrepreneurship Endeavors</h2>
                    <p className="text-sm md:text-base leading-relaxed text-paper/90">
                    Entrepreneurship and hackathons have been a major driver in my journey with technology.
                    During a gap semester before college, I joined my first hackathon: the NASA Space Apps Competition.
                    Our team became Global Nominees, which sparked my fascination with using technology to address
                    real-world challenges. Since then, I&apos;ve competed in numerous hackathons, winning over $65,000 in prizes.
                    <br /> <br />
                    Hackathons are an exciting space to turn imaginative ideas into reality within 24 hours, and
                    they&apos;ve taught me teamwork, creativity, and adaptability. Beyond hackathons, I&apos;ve worked on two
                    startups, including as lead technical engineer at one that integrated Large Language Models (LLMs)
                    into universities, giving students 24/7 access to AI-powered tutors tailored to their courses.
                    Collaborating with over 14 universities taught me a lot about scaling technology to institutional needs.
                    <br /> <br />
                    That venture has since concluded, but it solidified my passion for building impactful solutions and
                    the potential of startups to create meaningful change.
                    </p>
                </div>
                <div className="relative w-full md:w-1/4 rounded-xl overflow-hidden border border-paper/12 min-h-[160px]">
                    <Image
                        src="/photos/about/hackathon.jpeg"
                        alt="Hackathon team photo"
                        className="absolute inset-0 w-full h-full object-cover object-center"
                        fill={true}
                        sizes="(max-width: 768px) 100vw, 25vw"
                    />
                </div>
            </div>
            <SnapPageIndicator totalPages={totalPages} />
        </div>
        </div>

        {/* Fourth section - Personal Interests */}
        <div className="snap-start relative h-screen w-full">
            <Image
            src={images[3]}
            alt="Secondary image"
            className="absolute inset-0 w-full h-full object-cover"
            fill={true}
            sizes="100vw"
            />
            <div className="absolute inset-0 photo-scrim" />
            <div className="absolute inset-0 flex items-center justify-center pt-16 md:pt-20">
                <div className="surface-card rounded-xl text-left text-paper p-6 md:p-8 max-w-5xl overflow-y-auto max-h-[80vh] md:max-h-none">
                    <p className="eyebrow text-amber text-xs mb-3">Off the clock</p>
                    <h2 className="font-display text-2xl md:text-4xl font-semibold mb-4 md:mb-6">Personal Interests</h2>
                    <p className="text-xs md:text-base leading-relaxed text-paper/90">
                        Tech and entrepreneurship are central to my journey, but there&apos;s more that defines who I am. First
                        and foremost, I&apos;m grateful for my family and friends who&apos;ve supported every endeavor &mdash; you&apos;ll see them
                        scattered throughout this site, which ties into one of my first passions: photography. Every background
                        photo here was shot on my film camera, a hobby that lets me preserve memories from my travels.

                        <br /><br />
                        Travel is another passion of mine &mdash; exploring new places, immersing myself in different cultures,
                        and, most importantly, trying the food. I&apos;m a foodie who&apos;s always open to trying anything at
                        least three times. That love extends to coffee: in Fall 2024 I picked up the Breville Bambino Plus,
                        and now I enjoy experimenting with beans I&apos;ve collected from my travels, learning to appreciate
                        each roast.

                        <br /><br />
                        I grew up surfing and snowboarding in Southern California, and while I don&apos;t get out as
                        often these days, I&apos;ve kept up running, a sport I competed in all four
                        years of high school as a varsity cross country and track athlete. It&apos;s remained a meaningful
                        way to stay active and grounded.

                        <br /><br />
                        I&apos;m also passionate about leadership and connecting with others. As President of one of the leading business
                        fraternities at my university, I worked with driven individuals from diverse fields &mdash; expanding my
                        network and perspective beyond the tech world in a way I found incredibly rewarding.

                        <br /><br />
                        Lastly, music is a constant in my life. I listen upwards of 8 hours a day, across RnB, indie, and
                        EDM, and I&apos;ve hit more than 20 concerts. Whether it&apos;s food, travel, or music, these passions
                        remind me to stay curious and live life fully.
                    </p>
                </div>
            </div>
            <SnapPageIndicator totalPages={totalPages} />
        </div>
    </SnapScrollContainer>
  );
}
