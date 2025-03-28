"use client";
import React from 'react'
import { StickyScroll } from './ui/sticky-scroll-reveal';
import Image from 'next/image';
import music1 from "../assets/music1.webp"
import music2 from "../assets/music2.webp"
import music3 from "../assets/music3.webp"
import music4 from "../assets/music4.webp"
import music5 from "../assets/music5.avif"
import music6 from "../assets/music6.avif"

export default function WhyChooseUs() {
    const musicSchoolContent = [
        {
          title: 'Discover Your Sound with Us',
          description:
            'Embark on a musical journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.',
            content: (
                <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
                      <Image
                    src={music1}
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                  />
                </div>
              ),
    
        },
      
        {
          title: 'Live Feedback & Engagement',
          description:
            'Immerse yourself in an interactive learning experience where feedback is immediate, just like real-time changes in a collaborative project. This approach enhances your understanding and mastery of music concepts and performance techniques.',
            content: (
                <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
                      <Image
                    src={music4}
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                  />
                </div>
              ),
        },
        {
          title: 'Cutting-Edge Curriculum',
          description:
            'Our curriculum is continuously updated to include the latest music education trends and technologies, ensuring you’re always learning with the most current and effective methods. Say goodbye to outdated materials and welcome an education that evolves with the industry.',
            content: (
                <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
                      <Image
                    src={music5}
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                  />
                </div>
              ),
        },
        {
          title: 'Limitless Learning Opportunities',
          description:
            'With our expansive resource library and dynamic course offerings, you’ll never find yourself without something new to explore. Our platform provides continuous opportunities for growth, ensuring your musical skills are always advancing.',
            content: (
                <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
                      <Image
                    src={music6}
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                  />
                </div>
              ),
        },
      ];
   

    return (
       <>
       <StickyScroll content={musicSchoolContent}/>
      
       </>
    )
}
