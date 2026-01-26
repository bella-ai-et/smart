interface HeadingProps {
  children: React.ReactNode
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl'
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold'
  className?: string
}

export function Heading({
  children,
  level = 'h2',
  size = 'lg',
  weight = 'semibold',
  className = ''
}: HeadingProps) {
  const baseClasses = 'leading-tight'
  
  const sizes = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
    '5xl': 'text-5xl'
  }
  
  const weights = {
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold'
  }
  
  const classes = `${baseClasses} ${sizes[size]} ${weights[weight]} ${className}`
  
  const HeadingTag = level
  
  return <HeadingTag className={classes}>{children}</HeadingTag>
}

interface TextProps {
  children: React.ReactNode
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl'
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold'
  color?: 'primary' | 'secondary' | 'muted' | 'accent'
  className?: string
}

export function Text({
  children,
  size = 'base',
  weight = 'normal',
  color = 'primary',
  className = ''
}: TextProps) {
  const baseClasses = ''
  
  const sizes = {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl'
  }
  
  const weights = {
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold'
  }
  
  const colors = {
    primary: 'text-gray-900',
    secondary: 'text-gray-600',
    muted: 'text-gray-500',
    accent: 'text-blue-600'
  }
  
  const classes = `${baseClasses} ${sizes[size]} ${weights[weight]} ${colors[color]} ${className}`
  
  return <p className={classes}>{children}</p>
}

interface ParagraphProps {
  children: React.ReactNode
  size?: 'sm' | 'base' | 'lg'
  leading?: 'tight' | 'normal' | 'relaxed'
  className?: string
}

export function Paragraph({
  children,
  size = 'base',
  leading = 'normal',
  className = ''
}: ParagraphProps) {
  const baseClasses = 'text-gray-600'
  
  const sizes = {
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg'
  }
  
  const leadings = {
    tight: 'leading-tight',
    normal: 'leading-normal',
    relaxed: 'leading-relaxed'
  }
  
  const classes = `${baseClasses} ${sizes[size]} ${leadings[leading]} ${className}`
  
  return <p className={classes}>{children}</p>
}