"use client";

import React from "react";
import CoreProjects from "@/components/projects/CoreProjects";
import PracticeProjects from "@/components/projects/PracticeProjects";
import { SectionHeading } from "@/components/ui/section-heading";

export default function ProjectsPage() {
    const [activeTab, setActiveTab] = React.useState<'core' | 'practice'>('core');

    return (
        <div className="min-h-screen pt-24 pb-16">
            <div className="container mx-auto px-4">
                <SectionHeading
                    title="My Projects"
                    subtitle="A collection of my core and practice projects"
                />

                {/* Tabs */}
                <div className="flex justify-center mt-8 mb-12">
                    <div className="flex space-x-4 bg-gray-800/50 p-2 rounded-lg backdrop-blur-sm border border-gray-700/50">
                        <button
                            onClick={() => setActiveTab('core')}
                            className={`px-6 py-2 rounded-md transition-all duration-300 font-medium ${activeTab === 'core'
                                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                                    : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                                }`}
                        >
                            Core Projects
                        </button>
                        <button
                            onClick={() => setActiveTab('practice')}
                            className={`px-6 py-2 rounded-md transition-all duration-300 font-medium ${activeTab === 'practice'
                                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                                    : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                                }`}
                        >
                            Practice Projects
                        </button>
                    </div>
                </div>

                <div className="mt-8">
                    {activeTab === 'core' ? (
                        <div className="animate-fade-in-up">
                            <CoreProjects />
                        </div>
                    ) : (
                        <div className="animate-fade-in-up">
                            <PracticeProjects />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
