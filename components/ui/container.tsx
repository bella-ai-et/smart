interface ContainerProps {
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  className?: string
  center?: boolean
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

export default function Container({
  children,
  size = 'lg',
  className = '',
  center = true,
  padding = 'md'
}: ContainerProps) {
  const baseClasses = 'w-full'
  
  const sizes = {
    sm: 'max-w-2xl',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    full: 'max-w-full'
  }
  
  const paddings = {
    none: '',
    sm: 'px-4',
    md: 'px-6',
    lg: 'px-8'
  }
  
  const classes = `${baseClasses} ${sizes[size]} ${center ? 'mx-auto' : ''} ${paddings[padding]} ${className}`
  
  return (
    <div className={classes}>
      {children}
    </div>
  )
}

interface SectionProps {
  children: React.ReactNode
  className?: string
  padding?: 'sm' | 'md' | 'lg' | 'xl'
  background?: 'white' | 'gray' | 'light' | 'dark'
}

export function Section({
  children,
  className = '',
  padding = 'lg',
  background = 'white'
}: SectionProps) {
  const baseClasses = 'w-full'
  
  const paddings = {
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16',
    xl: 'py-20'
  }
  
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    light: 'bg-gray-100',
    dark: 'bg-gray-900'
  }
  
  const classes = `${baseClasses} ${paddings[padding]} ${backgrounds[background]} ${className}`
  
  return (
    <section className={classes}>
      {children}
    </section>
  )
}

interface GridProps {
  children: React.ReactNode
  cols?: 1 | 2 | 3 | 4 | 5 | 6 | 12
  gap?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

export function Grid({
  children,
  cols = 3,
  gap = 'md',
  className = ''
}: GridProps) {
  const baseClasses = 'grid'
  
  const colsClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
    5: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5',
    6: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6',
    12: 'grid-cols-12'
  }
  
  const gaps = {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
    xl: 'gap-10'
  }
  
  const classes = `${baseClasses} ${colsClasses[cols]} ${gaps[gap]} ${className}`
  
  return (
    <div className={classes}>
      {children}
    </div>
  )
}