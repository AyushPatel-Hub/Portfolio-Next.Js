import React from 'react';
import { Book, Clock, Mail, MoreHorizontal } from 'lucide-react';
import Link from 'next/link';
import FadeIn from '@/components/FadeIn';


const pinnedRepos = [
 
  {
    name: 'Dengo-Travel-Listing-Project',
    language: 'EJS',
    color: 'bg-purple-500',
    description: 'Full Stack Project build by using Node.js MongoDb deployed on Render ',
    link:"https://github.com/AyushPatel-Hub/Dengo-Travel-Listing-Project"
  },
  {
    name: 'AI-ChatBot',
    language: 'JavaScript',
    color: 'bg-yellow-300',
    description: 'Build a AI-ChatBot using React and Google Gemini API',
    link:"https://github.com/AyushPatel-Hub/AI-ChatBot"
  },
  {
    name: 'Dice-Game-REACT',
    language: 'REACT',
    color: 'bg-yellow-300',
    description: 'Dice Game Made by using React using the UseState and UseEffect hooks ',
    link:"https://github.com/AyushPatel-Hub/Dice-Game-REACT"
  },
   {
    name: 'CropCare-Capstone-project',
    language: 'JavaScript',
    color: 'bg-yellow-300',
    description: 'Full Stack Project made with the help of AntiGravity as a part of Capstone Hackthon ',
    link:"https://github.com/AyushPatel-Hub/CropCare-Capstone-project"
  },
  {
    name: 'CodeAlpha-Project',
    language: 'HTML',
    color: 'bg-orange-500',
    description: 'Projects made during my  Virtual Intership at CodeAlpha',
    link:"https://github.com/AyushPatel-Hub/CodeAlpha-Project"
  },
  {
    name: 'AuraGallery',
    language: 'HTML',
    color: 'bg-orange-500',
    description: 'Build a wallpaper website by using HTML CSS and Javascript and API',
    link:"https://github.com/AyushPatel-Hub/AuraGallery"
  },
  
];

export default function GitHubProfile() {
  // Helper to generate fake contribution graph data
  const generateContributions = () => {
    const weeks = [];
    for (let i = 0; i < 52; i++) {
      const days = [];
      for (let j = 0; j < 7; j++) {
        // Randomly assign a contribution level (0-4) for visual similarity
        const level = Math.random() > 0.8 ? Math.floor(Math.random() * 4) + 1 : 0;
        days.push(level);
      }
      weeks.push(days);
    }
    return weeks;
  };

  const contributionData = generateContributions();
  const months = ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'];

  return (
    <div className="min-h-screen bg-black/80 text-[#c9d1d9] p-4 md:p-8 font-sans">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row gap-8">
        
       
        <div className="w-full md:w-[296px] shrink-0">
         <FadeIn> <div className="relative mb-4">
            <img
              src="https://res.cloudinary.com/slejt9fd/image/upload/v1786687117/MyPhoto.jpg"
              alt="Profile"
              className="w-full rounded-full border-[1px] border-[#30363d] object-cover aspect-square"
            />
            
            <div className="absolute bottom-6 right-6 w-10 h-10 bg-[#0d1117] rounded-full flex items-center justify-center border-[1px] border-[#30363d]">
              🎯
            </div>
          </div></FadeIn>

         <FadeIn> <div className="mb-4">
            <h1 className="text-2xl font-bold text-[#f0f6fc]">Ayush Patel</h1>
            <h2 className="text-xl font-light text-[#8b949e]">AyushPatel-Hub · he/him</h2>
          </div>
          </FadeIn>

         <FadeIn> <div className="mb-4 text-base">
            "Software Engineer focused on full-stack web applications, JavaScript runtime internals, and browser web standards."
          </div>
          </FadeIn>

          <FadeIn><button className="w-full py-1.5 px-3 mb-6 bg-[#21262d] hover:bg-[#30363d] text-white border border-[#30363d] rounded-md font-medium transition-colors text-sm">
            <Link href={"https://github.com/AyushPatel-Hub"}>Visit profile</Link>
          </button>
          </FadeIn>

          <div className="flex flex-col gap-2 text-sm text-[#8b949e]">
            <div className="flex items-center gap-2">
              {/* <Clock size={16} /> */}
              {/* <span>17:45 (UTC -12:00)</span> */}
            </div>
            <div className="flex items-center gap-2 hover:text-[#58a6ff] cursor-pointer">
              <Mail size={16} />
              <span><a href='mailto:ayush292004patel@gmail.com'>ayush292004patel@gmail.com</a></span>
            </div>
          </div>
        </div>

        <div className="flex-1 min-w-0">
          
          {/* Pinned Section */}
          <div className="mb-8">
          
            {/* <div className="flex items-center justify-between mb-4">
              <h2 className="text-base font-normal">Pinned</h2>
              <a href="#" className="text-sm text-[#58a6ff] hover:underline">
                Customize your pins
              </a>
            </div> */}

            <FadeIn><div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {pinnedRepos.map((repo, index) => (
                <FadeIn>
                  <div key={repo.name} className="flex flex-col p-4 border border-[#30363d] rounded-md bg-[#0d1117]">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Book size={16} className="text-[#8b949e]" />
                      <Link href={repo.link} className="text-[#58a6ff] font-semibold text-sm hover:underline break-all">
                        {repo.name}
                      </Link>
                      <span className="px-2 py-0.5 rounded-full border border-[#30363d] text-xs font-medium text-[#8b949e]">
                        Public
                      </span>
                    </div>
                    <button className="text-[#8b949e] hover:text-[#c9d1d9]">
                      <MoreHorizontal size={16} />
                    </button>
                  </div>
                  
                  <div className="flex-1 text-sm text-white mb-4">
                    {repo.description}
                  </div>
                  
                  <div className="flex items-center gap-2 text-xs text-[#8b949e]">
                    <span className={`w-3 h-3 rounded-full ${repo.color}`}></span>
                    <span>{repo.language}</span>
                  </div>
                </div>
                </FadeIn>
              ))}
            </div></FadeIn>
          </div>

          <div>
           <FadeIn> <div className="flex items-center justify-between mb-2">
              <h2 className="text-base font-normal">137 contributions in the last year</h2>
              <div className="flex items-center gap-4">
                {/* <button className="text-sm text-[#8b949e] hover:text-[#c9d1d9]">Contribution settings ▾</button> */}
                <button className="px-4 py-1.5 bg-[#1f6feb] text-white rounded-md text-sm font-medium">2026</button>
              </div>
            </div>
            </FadeIn>

           <FadeIn>
             <div className="border border-[#30363d] rounded-md p-4 bg-[#0d1117]">
              {/* Graph Container */}
              <div className="overflow-x-auto">
                <div className="min-w-max">
                  {/* Months Header */}
                  <div className="flex text-xs text-[#8b949e] ml-8 mb-1">
                    {months.map((month, i) => (
                      <div key={i} className="flex-1 min-w-[36px]">{month}</div>
                    ))}
                  </div>

                  {/* Graph Body */}
                  <div className="flex gap-1">
                    {/* Days Column */}
                    <div className="flex flex-col gap-1 text-[10px] text-[#8b949e] mt-2 mr-2">
                      <span className="h-[10px]">Mon</span>
                      <span className="h-[10px] mt-[12px]">Wed</span>
                      <span className="h-[10px] mt-[12px]">Fri</span>
                    </div>

                    {/* Grid */}
                    <div className="flex gap-1">
                      {contributionData.map((week, wIndex) => (
                        <div key={wIndex} className="flex flex-col gap-1">
                          {week.map((level, dIndex) => (
                            <div 
                              key={dIndex} 
                              className={`w-[10px] h-[10px] rounded-[2px] ${
                                level === 0 ? 'bg-[#161b22]' :
                                level === 1 ? 'bg-[#0e4429]' :
                                level === 2 ? 'bg-[#006d32]' :
                                level === 3 ? 'bg-[#26a641]' :
                                'bg-[#39d353]'
                              }`}
                              title={`Contribution level ${level}`}
                            />
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Graph Footer */}
              <div className="flex items-center justify-between mt-4 text-xs text-[#8b949e]">
                <a href="" className="hover:text-[#58a6ff]">Learn how we count contributions</a>
                <div className="flex items-center gap-1">
                  <span>Less</span>
                  <div className="w-[10px] h-[10px] rounded-[2px] bg-[#161b22]"></div>
                  <div className="w-[10px] h-[10px] rounded-[2px] bg-[#0e4429]"></div>
                  <div className="w-[10px] h-[10px] rounded-[2px] bg-[#006d32]"></div>
                  <div className="w-[10px] h-[10px] rounded-[2px] bg-[#26a641]"></div>
                  <div className="w-[10px] h-[10px] rounded-[2px] bg-[#39d353]"></div>
                  <span>More</span>
                </div>
              </div>
            </div>

           </FadeIn>
          </div>
          
        </div>
      </div>
    </div>
  );
}