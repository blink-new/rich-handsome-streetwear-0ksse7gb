interface RHHeartProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  animate?: boolean
  opacity?: number
}

export default function RHHeart({ 
  size = 'md', 
  className = '', 
  animate = false,
  opacity = 0.6 
}: RHHeartProps) {
  const sizeClasses = {
    xs: 'w-4 h-4',
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  }

  const animationClass = animate ? 'animate-pulse' : ''

  return (
    <img
      src="/rh-heart-bw.png"
      alt="RH Heart"
      className={`${sizeClasses[size]} ${animationClass} ${className} filter invert`}
      style={{ 
        opacity,
        mixBlendMode: 'screen',
        imageRendering: 'crisp-edges'
      }}
    />
  )
}