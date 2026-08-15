"use client";
import { Experiences } from "@/data/experiences";
import { useState } from "react";
import CertificateModal from "./CertificateModal";
import FadeIn from '@/components/FadeIn';
export default function Experience({ experiences }) {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <>
   <div className="bg-black/90">
     <h1 className="text-center text-5xl mt-30  h-30">EXPERIENCE & CERTIFICATES</h1>
    <p className="p-8 text-xl text-center font-light ">My journey in technology has been shaped by hands-on development, internships, job simulations, and continuous learning. I have gained practical experience in web and frontend development through internships at InAmigos Foundation and CodeAlpha, while also exploring industry-oriented problem solving through the Deloitte Technology Job Simulation. Alongside practical experience, I have expanded my knowledge through certifications and courses covering AI, Cyber Security, AI Agents, and modern coding practices from platforms such as Udemy and Kaggle. These experiences have helped me strengthen my technical skills, understand real-world development workflows, and continuously grow as a developer.</p>
    <div>
      <div className="mt-20 flex justify-center gap-40">
        <div>
          <h2 className="text-2xl mb-10 font-extrabold">Experience / Certificate</h2>
          <ul className="flex flex-col gap-15 text-xl font-bold">
            <li>InAmigos Foundation – Web Development Internship</li>
            <li>CodeAlpha – Frontend Development Internship</li>
            <li>Deloitte – Technology Job Simulation</li>
            <li>Udemy – AI & Cyber Security Mastery 2026</li>
            <li>Kaggle – 5-Day AI Agents: Intensive Vibe Coding Course</li>
            
          </ul>
        </div>
      <div>
        <h2 className="text-2xl mb-10 font-extrabold">Technologies / Skills</h2>
        <ul className="flex flex-col gap-15 text-xl font-bold">
          <li>HTML, CSS, JavaScript, Web Development, Frontend Development</li>
          <li>HTML, CSS, JavaScript, Frontend Development, Responsive Design</li>
          <li>Coding, Technology, Problem Solving, Development</li>
          <li>Artificial Intelligence, Cyber Security, AI Concepts</li>
          <li>AI Agents, Artificial Intelligence, Vibe Coding, Programming</li>
        </ul>
      </div>
      </div>
    </div>
      <div className=" mt-20  p-10  flex flex-wrap gap-10">
        {experiences.map((experience) => (
          <FadeIn>
            <div
            key={experience.id}
            className="rounded-xl border p-6 w-[900px]"
          >
            <span className="text-lg text-white">
              {experience.type}
            </span>

            <h2 className="mt-2 text-2xl font-bold">
              {experience.title}
            </h2>

            <h3 className="mt-1">
              {experience.organization}
            </h3>

            <p className="mt-2 text-sm text-white">
              {experience.date}
            </p>

            <p className="mt-4 text-white">
              {experience.description}
            </p>

            <button 
              onClick={() => setSelectedCertificate(experience)}
              className="border hover:bg-white hover:text-black hover:font-extrabold mt-5 rounded-4xl bg-black px-5 py-2 text-white"
            >
              View Certificate
            </button>
          </div>

          </FadeIn>
        ))}
      </div>

      {/* Modal */}
      <CertificateModal
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />
   </div>
    </>
  );
}