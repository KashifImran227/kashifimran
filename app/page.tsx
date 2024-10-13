  'use client'
  import { Button } from "@/components/ui/button";
import HeroContent from "@/components/sub/HeroContent";
import Skills from "@/components/main/Skills";
  import Hero from "@/components/main/Hero";
  import Projects from "@/components/main/Projects";
  import Contact from "@/components/main/Contact";
 
 export default function Home(){
  return (
    <main className="h-full w-full">
     
      <div className="flex flex-col  gap-20">
        <Hero />
       
        <Skills/>
        <Projects/>
        <Contact/>
      </div>
    </main>
  );
};
