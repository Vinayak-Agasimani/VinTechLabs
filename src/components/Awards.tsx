'use client'

import { useEffect, useState } from 'react'
const onirosAward = 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=150&h=150&fit=crop'
const nyifaAward = 'https://images.unsplash.com/photo-1588392382834-a891154bca4d?w=150&h=150&fit=crop'
const beyondBorderAward = 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=150&h=150&fit=crop'
const topShortsAward = 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=150&h=150&fit=crop'
const newLaurelAward = 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=150&h=150&fit=crop'
const veniceAiAward = 'https://images.unsplash.com/photo-1588392382834-a891154bca4d?w=150&h=150&fit=crop'

export function Awards() {
  const awards = [
    {
      image: onirosAward,
      delay: "0s"
    },
    {
      image: beyondBorderAward,
      delay: "0.5s"
    },
    {
      image: topShortsAward,
      delay: "1s"
    },
    {
      image: newLaurelAward,
      delay: "1.5s"
    },
    {
      image: nyifaAward,
      delay: "2s"
    },
    {
      image: veniceAiAward,
      delay: "2.5s"
    }
  ]

  return (
    <section id="awards" className="relative py-20 bg-background overflow-hidden">
      
      {/* Elegant Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      


      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-accent-purple rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-muted-foreground">
              Recognition & Achievement
            </span>
            <div className="w-3 h-3 bg-accent-blue rounded-full animate-pulse" />
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6 text-foreground">
            Awards & Recognition
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Celebrated excellence in AI-powered film production
          </p>
        </div>

        {/* Awards Display */}
        <div className="relative max-w-7xl mx-auto">
          
          {/* Awards Grid */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {awards.map((award, index) => (
              <div
                key={index}
                className="group relative flex flex-col items-center text-center"
                style={{ animationDelay: award.delay }}
              >
                
                {/* Award Pedestal */}
                <div className="relative mb-6">
                  
                  {/* Floating Award Display */}
                  <div className={`relative p-6 rounded-2xl border shadow-md transition-all duration-500 hover:scale-105 ${
                    index === 2 || index === 3 ? 'bg-gray-800 border-gray-700' : 'bg-background border-border'
                  }`}
                       style={{ 
                         boxShadow: '0 8px 24px rgba(0,0,0,0.08)'
                       }}>
                    
                    {/* Award Image */}
                    <img 
                      src={award.image}
                      alt="Film Festival Award Laurel"
                      className="w-full h-auto max-w-48 mx-auto"
                      style={{
                        filter: 'contrast(1.02) saturate(1.1)',
                      }}
                    />
                    

                  </div>
                  
                  {/* Floating Animation */}
                  <div className="float-gentle absolute inset-0 pointer-events-none" />
                </div>

              </div>
            ))}
          </div>

        </div>


      </div>
      
    </section>
  )
}