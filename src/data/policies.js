export const petTiers = [
  ['1–2 Cats/Dogs', 'Flat +$10.00 per visit'],
  ['3–4 Cats/Dogs', 'Flat +$15.00 per visit'],
  ['5–6 Cats/Dogs', 'Flat +$20.00 per visit'],
  ['7–8 Cats/Dogs', 'Flat +$25.00 per visit'],
  ['9+ Cats/Dogs', 'Service unavailable (Exceeds standard residential maintenance scope)'],
]
export const petIntro = 'A flat per-visit fee is added to your subtotal to cover specialized pet-hair removal passes, deep baseboard dusting, and extra vacuum filtration maintenance. This applies strictly to free-roaming cats and dogs (tanks, cages, and aquariums are always free).'
export const petDensity = 'Pet Density Cap: To maintain our high standards of quality and safety, Green Wave Cleaning LLC reserves the right to decline service for homes with a high concentration of animals relative to a small square footage (e.g., a large number of free-roaming pets in a small apartment or restricted floor plan). These environments require specialized deep restoration cleaning that falls outside our standard residential scope.'
export const petPolicy = [petIntro, ...petTiers.map(([label, fee]) => `${label}: ${fee}`), petDensity].join('\n\n')
export const hourlyPolicy = 'Custom hourly bookings are $45 per hour, up to an 8-hour maximum. Provide your custom checklist and we will accomplish as much as possible within your booked hours. You receive the full duration of active cleaning hours booked. For 8-hour bookings, two 15-minute breaks and a 1-hour lunch (90 minutes total) occur outside your 8 hours of cleaning time. For other bookings of 6 hours or more, a 30–60-minute break occurs outside the active cleaning time.'
export const hoursPolicy = 'Wednesday–Friday: 10:00 AM–8:00 PM. Saturday: 12:00 PM–6:00 PM. Sunday–Tuesday: closed for administrative operations and rest. Off-day and after-hours bookings are subject to availability and incur a 15% premium added to the total bill.'
export const serviceArea = ['Ashley', 'Cardington', 'Delaware', 'Dublin', 'Galena', 'Kilbourne', 'Lewis Center', 'Marengo', 'Marion', 'Marysville', 'Ostrander', 'Powell', 'Radnor', 'Sunbury', 'Waldo', 'Westerville', 'Worthington']
export const travelPolicy = 'Service is hubbed from Delaware, OH 43015. The first 20 miles are the free zone. Beyond the initial 20-mile radius, a travel fee of $1.50 applies to every mile driven. Locations 1 or more hours away require custom administrative review and travel surcharges prior to approval.'
