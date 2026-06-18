export const Leaf = ({ color = '#3D6B40', size = 50, style = {} }) => (
  <svg width={size} height={size * 1.2} viewBox="0 0 50 60" fill="none" style={style}>
    <path d="M25 4 Q46 18 41 44 Q31 56 25 58 Q19 56 9 44 Q4 18 25 4Z" fill={color} />
    <path d="M25 4 Q25 30 25 58" stroke="rgba(0,0,0,0.12)" strokeWidth="1.5" fill="none" />
    <path d="M25 20 Q38 17 41 28" stroke="rgba(0,0,0,0.08)" strokeWidth="1.2" fill="none" />
    <path d="M25 36 Q12 33 9 44" stroke="rgba(0,0,0,0.08)" strokeWidth="1.2" fill="none" />
  </svg>
)

export const Check = ({ color = '#3D6B40', size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M5 12.5 L9.5 17 L19 6.5" stroke={color} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const Phone = ({ color = '#FFFFFF', size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M6.6 2.6 L10 2 C10.6 1.9 11.2 2.3 11.4 2.9 L12.6 6 C12.8 6.5 12.6 7.1 12.2 7.4 L10.2 9 C11.1 11.2 12.8 12.9 15 13.8 L16.6 11.8 C16.9 11.4 17.5 11.2 18 11.4 L21.1 12.6 C21.7 12.8 22.1 13.4 22 14 L21.4 17.4 C21.3 18 20.8 18.5 20.1 18.5 C10.7 18.5 5.5 13.3 5.5 3.9 C5.5 3.2 6 2.7 6.6 2.6Z" fill={color} />
  </svg>
)

export const Mail = ({ color = '#FFFFFF', size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <rect x="2.5" y="5" width="19" height="14" rx="2" fill="none" stroke={color} strokeWidth="1.8" />
    <path d="M3.5 6.5 L12 13 L20.5 6.5" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
)
