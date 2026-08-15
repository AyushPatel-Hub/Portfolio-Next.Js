'use client';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';


const Footer = () => {
  return (
    <div className=" bottom-0 left-0 w-screen bg-black h-20 flex justify-between items-center p-10  ">
        <div className="flex items-center flex-col">
            <p className='flex gap-4 text-sm md:text-xl lg:text-6xl'>
                <a href='https://github.com/AyushPatel-Hub'><GitHubIcon/></a> 
                <a href='https://www.linkedin.com/in/ayushpatelcse/'><LinkedInIcon/></a> 
                <a href='mailto:ayush292004patel@gmail.com'><EmailIcon/></a> 
                </p>
            <span className='text-sm md:text-xl lg:text-sm'>© {new Date().getFullYear()} Ayush Patel</span>
        </div>
        <div className="flex items-center flex-col">
            <p className='text-sm md:text-xl lg:text-sm'>Internships | Freelance</p>
            <span className='hidden max-[600px]:hidden min-[600px]:block'>Lucknow, IN • IST (UTC+5:30)</span>
        </div>
        <div className="flex items-center flex-col text-sm md:text-xl lg:text-sm">
            <p>Build with</p>
            <span>Next.js & Tailwind</span>
        </div>
    </div>
  )
}

export default Footer