export const Leaf = ({ color = '#7A9B7C', size = 50, style = {} }) => (
  <svg width={size} height={size * 1.2} viewBox="0 0 50 60" fill="none" style={style}>
    <path d="M25 4 Q46 18 41 44 Q31 56 25 58 Q19 56 9 44 Q4 18 25 4Z" fill={color} />
    <path d="M25 4 Q25 30 25 58" stroke="rgba(0,0,0,0.12)" strokeWidth="1.5" fill="none" />
    <path d="M25 20 Q38 17 41 28" stroke="rgba(0,0,0,0.08)" strokeWidth="1.2" fill="none" />
    <path d="M25 36 Q12 33 9 44" stroke="rgba(0,0,0,0.08)" strokeWidth="1.2" fill="none" />
  </svg>
)

export const Mushroom = ({ size = 70 }) => (
  <svg width={size} height={size * 1.1} viewBox="0 0 60 66" fill="none">
    <path d="M24 42 Q22 55 25 63 Q30 66 35 63 Q38 55 36 42Z" fill="#E8D4BC" />
    <path d="M9 36 Q9 20 30 17 Q51 20 51 36 Q51 48 30 48 Q9 48 9 36Z" fill="#C97B6E" />
    <circle cx="22" cy="32" r="5" fill="white" opacity="0.72" />
    <circle cx="38" cy="27" r="3.5" fill="white" opacity="0.72" />
    <circle cx="31" cy="40" r="3" fill="white" opacity="0.72" />
    <path d="M9 36 Q30 46 51 36" stroke="#B06558" strokeWidth="1" fill="none" opacity="0.35" />
  </svg>
)

export const Sparkle = ({ color = '#C97B6E', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 30 30" fill="none">
    <path d="M15 1 L17.2 12.8 L29 15 L17.2 17.2 L15 29 L12.8 17.2 L1 15 L12.8 12.8Z" fill={color} opacity="0.75" />
  </svg>
)

export const Flower = ({ size = 52 }) => (
  <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
    <ellipse cx="30" cy="11" rx="7" ry="11" fill="#ECC5BA" opacity="0.85" />
    <ellipse cx="30" cy="49" rx="7" ry="11" fill="#ECC5BA" opacity="0.85" />
    <ellipse cx="11" cy="30" rx="11" ry="7" fill="#ECC5BA" opacity="0.85" />
    <ellipse cx="49" cy="30" rx="11" ry="7" fill="#ECC5BA" opacity="0.85" />
    <ellipse cx="16" cy="16" rx="7" ry="11" fill="#ECC5BA" opacity="0.65" transform="rotate(-45 16 16)" />
    <ellipse cx="44" cy="16" rx="7" ry="11" fill="#ECC5BA" opacity="0.65" transform="rotate(45 44 16)" />
    <ellipse cx="16" cy="44" rx="7" ry="11" fill="#ECC5BA" opacity="0.65" transform="rotate(45 16 44)" />
    <ellipse cx="44" cy="44" rx="7" ry="11" fill="#ECC5BA" opacity="0.65" transform="rotate(-45 44 44)" />
    <circle cx="30" cy="30" r="10" fill="#F0C84A" opacity="0.9" />
    <circle cx="30" cy="30" r="6"  fill="#DBA830" opacity="0.85" />
  </svg>
)

export const WaveDown = ({ from, to }) => (
  <div style={{ background: from, lineHeight: 0, overflow: 'hidden' }}>
    <svg viewBox="0 0 1440 70" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: 70 }}>
      <path d="M0,35 C360,70 1080,0 1440,35 L1440,70 L0,70Z" fill={to} />
    </svg>
  </div>
)

export const WaveUp = ({ from, to }) => (
  <div style={{ background: from, lineHeight: 0, overflow: 'hidden' }}>
    <svg viewBox="0 0 1440 70" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: 70 }}>
      <path d="M0,35 C360,0 1080,70 1440,35 L1440,0 L0,0Z" fill={to} />
    </svg>
  </div>
)
