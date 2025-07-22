import { useState } from 'react'
import { Menu, X, ShoppingBag } from 'lucide-react'
import RHHeart from './ui/RHHeart'

interface NavigationProps {
  currentPage: string
  onNavigate: (page: string) => void
  cartItemCount: number
  onCartOpen: () => void
}

export default function Navigation({ currentPage, onNavigate, cartItemCount, onCartOpen }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'tshirts', label: 'T-SHIRTS' },
    { id: 'sweatpants', label: 'SWEATPANTS' },
    { id: 'about', label: 'ABOUT' },
    { id: 'contact', label: 'CONTACT' }
  ]

  const handleNavClick = (page: string) => {
    onNavigate(page)
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              onClick={() => handleNavClick('home')}
              className="font-anton text-2xl chrome-text hover:scale-105 transition-transform duration-300 flex items-center gap-2"
            >
              <RHHeart size="sm" opacity={0.8} />
              RICH HAND$OME
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`font-inter font-medium tracking-wider transition-all duration-300 cash-green-hover ${
                    currentPage === item.id
                      ? 'text-accent border-b-2 border-accent'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Cart and Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* Cart Button */}
              <button
                onClick={onCartOpen}
                className="relative p-2 text-white/80 hover:text-accent transition-colors duration-300"
              >
                <ShoppingBag size={24} />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-accent text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-white/80 hover:text-white transition-colors duration-300"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-secondary/20">
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`block w-full text-left font-inter font-medium tracking-wider transition-all duration-300 cash-green-hover ${
                    currentPage === item.id
                      ? 'text-accent'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Spacer for fixed navigation */}
      <div className="h-16" />
    </>
  )
}