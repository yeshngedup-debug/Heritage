"use client"

import './GlassIcons.css'

const gradientMapping: Record<string, string> = {
  maroon: 'linear-gradient(hsl(350, 80%, 25%), hsl(350, 80%, 15%))',
  gold: 'linear-gradient(hsl(43, 60%, 52%), hsl(43, 60%, 35%))',
  saffron: 'linear-gradient(hsl(35, 100%, 48%), hsl(35, 100%, 35%))',
  cream: 'linear-gradient(hsl(44, 60%, 90%), hsl(44, 60%, 80%))',
  cinnabar: 'linear-gradient(hsl(5, 75%, 54%), hsl(5, 75%, 40%))',
  stone: 'linear-gradient(hsl(35, 10%, 45%), hsl(35, 10%, 30%))',
}

export interface GlassIconsItem {
  icon: React.ReactElement
  color: string
  label: string
  href?: string
  onClick?: () => void
}

interface GlassIconsProps {
  items: GlassIconsItem[]
  className?: string
}

export default function GlassIcons({ items, className }: GlassIconsProps) {
  const getBackgroundStyle = (color: string) => {
    if (gradientMapping[color]) {
      return { background: gradientMapping[color] }
    }
    return { background: color }
  }

  return (
    <div className={`icon-btns ${className || ''}`}>
      {items.map((item, index) => (
        <button
          key={index}
          className={`icon-btn ${item.label.toLowerCase().replace(/\s+/g, '-')}`}
          aria-label={item.label}
          type="button"
          onClick={item.onClick}
        >
          <span className="icon-btn__back" style={getBackgroundStyle(item.color)} />
          <span className="icon-btn__front">
            <span className="icon-btn__icon" aria-hidden="true">
              {item.icon}
            </span>
          </span>
          <span className="icon-btn__label">{item.label}</span>
        </button>
      ))}
    </div>
  )
}
