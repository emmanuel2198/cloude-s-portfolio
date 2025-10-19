import React from 'react';
import About from "@/components/about";
import Experiences from "@/components/experiences/experiences";
import Header from "@/components/header";
import Projects from '@/components/projects/projects';
import Credits from '@/components/credits';
import {promises as fs} from 'fs';

export default async function Home() {
  const file = await fs.readFile(process.cwd() + '/public/translations/en.json', 'utf-8');
  const data = JSON.parse(file);

  return (
    <main className="min-h-screen w-full px-6 lg:px-24 py-24">
      <div className="max-w-5xl mx-auto relative">
        {/* Left Column - Fixed */}
        <div className="lg:fixed lg:top-24 lg:left-24 lg:w-[340px]">
          <Header data={data.general} />
        </div>
        
        {/* Right Column - Scrollable */}
        <div className="lg:ml-[400px] font-mono text-sm">
          <About data={data.general} />
          <Experiences data={data.experiences} />
          <Projects data={data.projects} />
          <Credits data={data.general} />
        </div>
      </div>
    </main>
  )
}
