import RHHeart from './ui/RHHeart'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background py-8 relative">
      {/* Decorative hearts */}
      <div className="absolute top-8 left-8">
        <RHHeart size="sm" opacity={0.2} />
      </div>
      <div className="absolute top-24 right-12">
        <RHHeart size="xs" animate opacity={0.3} />
      </div>
      <div className="absolute bottom-32 left-1/4">
        <RHHeart size="sm" opacity={0.25} />
      </div>
      <div className="absolute bottom-16 right-8">
        <RHHeart size="xs" opacity={0.2} />
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-anton text-5xl md:text-6xl chrome-text mb-6">
            ABOUT RICH HAND$OME
          </h1>
          <p className="text-accent text-xl font-inter font-medium">
            Rich is a Mindset. Handsome is an Energy.
          </p>
        </div>

        {/* Brand Philosophy */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-anton text-3xl chrome-text mb-6">
                OUR PHILOSOPHY
              </h2>
              <p className="text-white/80 font-inter text-lg leading-relaxed mb-6">
                Rich Hand$ome was born from the belief that true luxury isn't about price tags—
                it's about mindset. We create pieces for individuals who understand that confidence 
                is the ultimate accessory and style is the external manifestation of inner strength.
              </p>
              <p className="text-white/80 font-inter text-lg leading-relaxed mb-6">
                Every garment we design embodies this philosophy. From the premium materials we select 
                to the meticulous attention to detail in every stitch, Rich Hand$ome represents 
                the intersection of luxury and authenticity.
              </p>
              <p className="text-white/80 font-inter text-lg leading-relaxed">
                When you wear Rich Hand$ome, you're not just wearing clothes—you're wearing a statement 
                that says you understand your worth and aren't afraid to show it.
              </p>
            </div>
            <div className="relative flex items-center justify-center">
              <img
                src="/rh-heart.png"
                alt="Rich Hand$ome Heart Logo"
                className="w-80 h-80 object-contain filter invert"
                style={{ mixBlendMode: 'screen' }}
              />
            </div>
          </div>
        </section>

        {/* Founder's Message */}
        <section className="mb-16 bg-muted/10 p-8 rounded-lg">
          <h2 className="font-anton text-3xl chrome-text mb-6 text-center">
            FOUNDER'S MESSAGE
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-white/80 font-inter text-lg leading-relaxed mb-6">
              "I started Rich Hand$ome because I was tired of choosing between luxury and authenticity. 
              The fashion industry often forces you to pick a side—either you're accessible or you're exclusive, 
              either you're streetwear or you're high fashion."
            </p>
            <p className="text-white/80 font-inter text-lg leading-relaxed mb-6">
              "But why can't we have both? Why can't we create pieces that speak to the streets while 
              maintaining the quality and craftsmanship of luxury fashion? Rich Hand$ome bridges that gap."
            </p>
            <p className="text-white/80 font-inter text-lg leading-relaxed mb-8">
              "Every piece we create is a testament to the idea that you don't have to compromise your 
              values for your style, or your style for your values. Rich Hand$ome is for those who 
              refuse to settle."
            </p>
            <div className="text-center">
              <p className="font-anton text-xl text-accent mb-2">— FOUNDER</p>
              <p className="text-white/60 font-inter">Creative Director & Founder</p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-16">
          <h2 className="font-anton text-3xl chrome-text mb-12 text-center">
            OUR VALUES
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-anton text-2xl text-accent">Q</span>
              </div>
              <h3 className="font-anton text-xl text-white mb-3">QUALITY</h3>
              <p className="text-white/70 font-inter">
                We use only the finest materials and work with skilled artisans who share our 
                commitment to excellence.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-anton text-2xl text-accent">A</span>
              </div>
              <h3 className="font-anton text-xl text-white mb-3">AUTHENTICITY</h3>
              <p className="text-white/70 font-inter">
                Every design reflects genuine creativity and cultural relevance, never following 
                trends but setting them.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-anton text-2xl text-accent">E</span>
              </div>
              <h3 className="font-anton text-xl text-white mb-3">EXCLUSIVITY</h3>
              <p className="text-white/70 font-inter">
                Limited production runs ensure that when you wear Rich Hand$ome, you're part of 
                an exclusive community.
              </p>
            </div>
          </div>
        </section>

        {/* Craftsmanship */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&h=800&fit=crop&crop=center"
                alt="Craftsmanship"
                className="w-full h-96 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg" />
            </div>
            <div>
              <h2 className="font-anton text-3xl chrome-text mb-6">
                CRAFTSMANSHIP
              </h2>
              <p className="text-white/80 font-inter text-lg leading-relaxed mb-6">
                Each Rich Hand$ome piece is meticulously crafted using premium materials sourced 
                from the finest mills around the world. Our cotton is organic and sustainably grown, 
                our dyes are eco-friendly, and our manufacturing processes prioritize both quality 
                and environmental responsibility.
              </p>
              <p className="text-white/80 font-inter text-lg leading-relaxed mb-6">
                From the initial design sketch to the final quality check, every step of our 
                production process is overseen by skilled artisans who understand that luxury 
                is in the details.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-white/80 font-inter">Premium organic cotton</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-white/80 font-inter">Eco-friendly dyes and processes</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-white/80 font-inter">Limited production runs</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-white/80 font-inter">Artisan-level quality control</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="font-anton text-3xl chrome-text mb-6">
            JOIN THE MOVEMENT
          </h2>
          <p className="text-white/80 font-inter text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Rich Hand$ome is more than a brand—it's a community of individuals who understand 
            their worth and aren't afraid to show it. Join us in redefining what luxury means 
            in the modern world.
          </p>
          <p className="font-anton text-xl text-accent">
            RICH IS A MINDSET. HANDSOME IS AN ENERGY.
          </p>
        </section>
      </div>
    </div>
  )
}