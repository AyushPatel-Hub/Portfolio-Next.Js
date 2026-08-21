'use client';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';


const Footer = () => {
  return (
    <div className=" bottom-0 left-0 w-full max-w-full bg-black min-h-20 h-auto sm:h-20 flex-col sm:flex-row flex justify-between items-center px-4 sm:px-8 lg:p-10 py-6 sm:py-0 gap-4 sm:gap-0 z-10  ">
        <div className="flex items-center flex-col">
            <p className='flex gap-4 text-xl sm:text-2xl lg:text-3xl items-center'>
                <a href='https://github.com/AyushPatel-Hub'><GitHubIcon/></a> 
                <a href='https://www.linkedin.com/in/ayushpatelcse/'><LinkedInIcon/></a> 
                <a href='mailto:ayush292004patel@gmail.com'><EmailIcon/></a> 
                </p>
            <span className='text-xs sm:text-sm md:text-base lg:text-sm mt-1 sm:mt-0'>© {new Date().getFullYear()} Ayush Patel</span>
        </div>
        <div className="flex items-center flex-col">
            <p className='text-xs sm:text-sm md:text-base lg:text-sm font-medium'>Internships | Freelance</p>
            <span className='hidden sm:block text-xs sm:text-sm text-zinc-400'>Lucknow, IN • IST (UTC+5:30)</span>
        </div>
        <div className="flex items-center flex-col text-xs sm:text-sm md:text-base lg:text-sm text-center">
            <p>Build with</p>
            <span className="text-white-400">Next.js & Tailwind</span>
        </div>
    </div>
  )
}

export default Footer