import { useState, useEffect, useRef } from 'react'

interface LandingPageProps {
  onEnter: () => void
}

export default function LandingPage({ onEnter }: LandingPageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [lightningStrikes, setLightningStrikes] = useState<Array<{ id: number; style: React.CSSProperties }>>([])
  const [showEnterButton, setShowEnterButton] = useState(false)
  const logoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Initial load animation
    const timer = setTimeout(() => {
      setIsLoaded(true)
      setShowEnterButton(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Lightning effect with screen flash
    const createLightning = () => {
      const id = Date.now()
      const style: React.CSSProperties = {
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 0.2}s`,
        height: `${200 + Math.random() * 300}px`, // Taller lightning
        transform: `rotate(${-15 + Math.random() * 30}deg)`,
      }

      setLightningStrikes(prev => [...prev, { id, style }])

      // Create screen flash effect
      const flashOverlay = document.createElement('div')
      flashOverlay.className = 'fixed inset-0 bg-white pointer-events-none z-30'
      flashOverlay.style.opacity = '0'
      flashOverlay.style.animation = 'lightning-flash 0.3s ease-out'
      document.body.appendChild(flashOverlay)

      // Remove flash overlay
      setTimeout(() => {
        document.body.removeChild(flashOverlay)
      }, 300)

      // Remove lightning after animation
      setTimeout(() => {
        setLightningStrikes(prev => prev.filter(strike => strike.id !== id))
      }, 1200)
    }

    // Create multiple lightning strikes for dramatic effect
    const createLightningStorm = () => {
      const numStrikes = 1 + Math.floor(Math.random() * 3) // 1-3 strikes
      for (let i = 0; i < numStrikes; i++) {
        setTimeout(() => createLightning(), i * 150) // Stagger strikes
      }
    }

    // Create lightning strikes periodically
    const lightningInterval = setInterval(() => {
      if (Math.random() < 0.4) { // 40% chance every interval
        createLightningStorm()
      }
    }, 3000) // Every 3 seconds

    // Initial lightning after page load
    const initialLightning = setTimeout(() => {
      createLightningStorm()
    }, 2000)

    return () => {
      clearInterval(lightningInterval)
      clearTimeout(initialLightning)
    }
  }, [])

  const handleEnterClick = () => {
    // Add a dramatic effect before entering
    if (logoRef.current) {
      logoRef.current.style.animation = 'glitch 0.5s ease-in-out'
    }
    
    setTimeout(() => {
      onEnter()
    }, 500)
  }

  return (
    <div className="fixed inset-0 bg-black overflow-hidden">
      {/* Starry Night Background - Darker */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-black to-black">
        {/* Stars - Multiple layers for depth */}
        {[...Array(150)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute bg-white rounded-full star-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 80}%`, // Keep stars in upper portion
              width: `${0.5 + Math.random() * 2.5}px`,
              height: `${0.5 + Math.random() * 2.5}px`,
              animationDelay: `${Math.random() * 4}s`,
              opacity: 0.2 + Math.random() * 0.8,
            }}
          />
        ))}
        
        {/* Brighter stars */}
        {[...Array(30)].map((_, i) => (
          <div
            key={`bright-star-${i}`}
            className="absolute bg-white rounded-full star-bright-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 70}%`,
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: 0.6 + Math.random() * 0.4,
              boxShadow: `0 0 ${4 + Math.random() * 8}px rgba(255, 255, 255, 0.8)`,
            }}
          />
        ))}
        
      </div>

      {/* Lightning Effects - Behind Logo */}
      <div className="absolute inset-0 z-10">
        {lightningStrikes.map(({ id, style }) => (
          <div
            key={id}
            className="traditional-lightning absolute top-0"
            style={style}
          >
            <svg
              width="12"
              height="500"
              viewBox="0 0 12 500"
              className="lightning-svg"
            >
              <path
                d="M6 0 L4 150 L8 150 L5 250 L9 250 L2 500 L7 300 L4 300 L8 200 L5 200 L6 0"
                fill="url(#lightningGradient)"
                className="lightning-bolt-path"
              />
              <defs>
                <linearGradient id="lightningGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                  <stop offset="15%" stopColor="#e0e0e0" stopOpacity="0.95" />
                  <stop offset="30%" stopColor="#ffffff" stopOpacity="1" />
                  <stop offset="45%" stopColor="#c0c0c0" stopOpacity="0.85" />
                  <stop offset="60%" stopColor="#ffffff" stopOpacity="0.95" />
                  <stop offset="75%" stopColor="#e0e0e0" stopOpacity="0.8" />
                  <stop offset="90%" stopColor="#ffffff" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#c0c0c0" stopOpacity="0.6" />
                </linearGradient>
              </defs>
            </svg>
            {/* Lightning glow effect */}
            <div className="absolute inset-0 lightning-glow-effect"></div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Logo - Fixed Position */}
        <div 
          ref={logoRef}
          className={`mb-8 transition-opacity duration-1000 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img 
            src="/rich-handsome-logo.png" 
            alt="Rich Hand$ome Logo" 
            className="w-auto h-32 md:h-40 lg:h-48 mx-auto filter invert chrome-logo-effect"
            style={{
              filter: 'invert(1) brightness(1.2) contrast(1.1)',
              imageRendering: 'crisp-edges'
            }}
          />
        </div>

        {/* Slogan */}
        <div className={`mb-12 transition-all duration-1000 delay-500 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <p className="text-white/90 text-xl md:text-2xl lg:text-3xl font-bold text-center max-w-2xl uppercase tracking-wider" style={{ fontFamily: 'Arial, sans-serif' }}>
            ITS A BETTER TO BE BOTH
          </p>
        </div>

        {/* Enter Button - Diamond Crystal Glass */}
        <div className={`transition-all duration-1000 delay-1000 ${
          showEnterButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <button
            onClick={handleEnterClick}
            className="group diamond-crystal-btn relative px-12 py-4 font-anton text-2xl tracking-widest text-white transition-all duration-300 overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 25%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.05) 75%, rgba(255,255,255,0.1) 100%)',
              backdropFilter: 'blur(10px)',
              border: '2px solid rgba(255,255,255,0.2)',
              borderRadius: '8px',
              boxShadow: `
                0 8px 32px rgba(255,255,255,0.1),
                inset 0 1px 0 rgba(255,255,255,0.3),
                inset 0 -1px 0 rgba(255,255,255,0.1),
                0 0 20px rgba(192,192,192,0.3)
              `,
            }}
          >
            <span className="relative z-10">ENTER</span>
            
            {/* Diamond facet reflections */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)',
                animation: 'diamond-shine 2s infinite',
              }}
            />
            
            {/* Crystal refractions */}
            <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/30 to-transparent opacity-60" />
            <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent opacity-40" />
            
            {/* Prismatic edge highlights */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            
            {/* Hover glow effect */}
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md" />
          </button>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-accent/30 rounded-full floating"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      
      {/* Subtle brand tagline at bottom */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1500 ${
        isLoaded ? 'opacity-60' : 'opacity-0'
      }`}>
        <p className="text-white/40 font-inter text-sm tracking-wider text-center">
          RICH IS A MINDSET • HANDSOME IS AN ENERGY
        </p>
      </div>
    </div>
  )
}