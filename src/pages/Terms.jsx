import './Terms.css'

const sections = [
  {
    n: '1', title: 'Services',
    content: `We provide residential and/or commercial eco-friendly cleaning services using environmentally conscious products and practices whenever reasonably possible.\n\nServices may include, but are not limited to:\n• Standard cleaning\n• Deep cleaning\n• Move-in/move-out cleaning\n• Office cleaning\n• Green/sustainable cleaning solutions\n• Specialty add-on services\n\nSpecific service details, pricing, and availability are described during booking or in service agreements.`,
  },
  {
    n: '2', title: 'Scheduling & Appointments',
    content: `Clients may schedule services through our website, phone, email, or approved third-party booking systems.\n\nYou agree to provide:\n• Accurate contact information\n• Safe access to the property\n• Necessary instructions for entry or special cleaning needs\n\nAppointment windows are estimates and may vary due to traffic, weather, staffing, or prior appointments.`,
  },
  {
    n: '3', title: 'Pricing & Payment',
    content: `Prices are based on factors including:\n• Property size\n• Service type\n• Condition of the property\n• Frequency of service\n• Additional requested tasks\n\nA 50% deposit is required to reserve all cleaning appointments. Appointments are not confirmed until the required deposit has been received. The remaining balance is due upon completion of service unless otherwise agreed upon in writing.\n\nAll payments are securely processed through Stripe. By scheduling services, you authorize GreenWave Cleaning LLC to charge the payment method you provide for required service deposits, remaining balances, applicable cancellation or no-show fees, and any additional charges that have been discussed and approved prior to completing the service.\n\nPayment information is processed and securely stored by Stripe, a trusted third-party payment processor. GreenWave Cleaning LLC does not store or have access to your complete credit or debit card information.\n\nWe do not accept personal checks.\n\nIf a payment is declined or cannot be processed, GreenWave Cleaning LLC reserves the right to postpone or suspend services until payment has been successfully completed. Returned payments or chargebacks may result in suspension of future services.`,
  },
  {
    n: '4', title: 'Cancellation, Rescheduling & Deposit Policy',
    content: `At GreenWave Cleaning LLC, we reserve your appointment time exclusively for you. Last-minute cancellations make it difficult to accommodate other clients, so we appreciate your understanding of the following policies.\n\nService Deposit\n\nA 50% service deposit is required to reserve your appointment. Appointments are not confirmed until the deposit has been received.\n\nCancellations\n\nMore than 48 hours before your scheduled appointment:\n• Your deposit will be refunded in full.\n\nBetween 24 and 48 hours before your scheduled appointment:\n• GreenWave Cleaning LLC will retain 50% of your deposit, and the remaining 50% of your deposit will be refunded.\n\nWithin 24 hours of your scheduled appointment (including same-day cancellations):\n• The entire deposit will be retained by GreenWave Cleaning LLC.\n\nRescheduling\n\nRescheduling requests made within 48 hours of the scheduled appointment are treated as cancellations and are subject to the same policy outlined above.\n\nNo-Show or Inaccessible Property\n\nIf our team arrives for your scheduled appointment and any of the following apply:\n• We are unable to access the property.\n• No one is available to provide entry when required.\n• Utilities are disconnected.\n• The property is not in a condition that allows the scheduled service to be performed.\n• The appointment cannot be completed due to any client-related circumstance.\n\nThe client will be responsible for 100% of the total scheduled service price.\n\nFuture Appointments\n\nGreenWave Cleaning LLC reserves the right to require a new deposit before scheduling future appointments for clients who have repeatedly canceled or rescheduled appointments, incurred a no-show fee, or otherwise failed to comply with our scheduling policies. We also reserve the right to decline future services at our discretion.\n\nOur Commitment\n\nWe understand that emergencies and unexpected situations happen. If circumstances beyond your control arise, please contact us as soon as possible. We will always do our best to work with you whenever reasonable while balancing the needs of our employees and other scheduled clients.\n\nBy scheduling an appointment with GreenWave Cleaning, you acknowledge and agree to this booking and cancellation policy.`,
  },
  {
    n: '5', title: 'Move-In & Move-Out Cleaning Policy',
    content: `At GreenWave Cleaning LLC, we proudly provide professional move-in and move-out cleaning services designed to prepare homes for new occupants, real estate listings, rental turnovers, and property sales. Our goal is to leave every home clean, refreshed, and ready for its next chapter.\n\nProperty Preparation\n\nTo ensure we can provide the highest quality service, we ask that the property be vacant or substantially emptied before our arrival.\n\nPrior to your appointment, please ensure:\n• Personal belongings have been removed from the property.\n• Cabinets, drawers, closets, shelving, and pantries are empty unless otherwise discussed.\n• Refrigerators and freezers are empty if interior cleaning has been requested.\n• Water and electricity are active and functioning.\n• The property is accessible at the scheduled appointment time.\n\nServices Not Included\n\nOur move-in and move-out cleaning services do not include:\n• Packing or unpacking\n• Boxing personal belongings\n• Furniture moving\n• Junk removal\n• Trash removal\n• Hauling unwanted items\n• Organizing personal belongings\n• Storage clean-outs\n• Post-construction cleaning\n\nIf the property contains significant drywall dust, sawdust, paint overspray, grout haze, adhesive residue, construction debris, or other renovation-related materials, it may require a post-construction cleaning service, which GreenWave Cleaning LLC does not currently offer.\n\nScope of Service\n\nMove-in and move-out cleanings are intended to prepare a home for its next occupant — not to remove belongings, construction materials, or debris left behind.\n\nIf the property's condition differs significantly from what was disclosed during booking, GreenWave Cleaning LLC reserves the right to:\n• Adjust the quoted price.\n• Modify the scope of work.\n• Recommend additional services if appropriate.\n• Reschedule the appointment.\n• Decline service if the property falls outside the scope of our services.\n\nWhenever reasonably possible, any pricing or scope changes will be discussed and approved before additional work is performed.`,
  },
  {
    n: '6', title: 'Estimated Cleaning Times',
    content: `At GreenWave Cleaning LLC, every home is unique. The timeframes below are guidelines only and are not guaranteed. The actual length of your appointment depends on several factors, including:\n• Square footage\n• Current condition of the home\n• Level of buildup\n• Number of bedrooms and bathrooms\n• Pet hair and pet-related cleaning\n• Clutter or remaining belongings\n• Specialty surfaces and requested add-on services\n• Accessibility of the property\n\nOur priority is quality — not speed. We take the time necessary to provide the detailed, professional cleaning you expect.\n\nWeekly & Biweekly Maintenance Cleaning\n• Up to 1,000 sq. ft.: 1.5–2 hours\n• 1,001–2,000 sq. ft.: 2–3 hours\n• 2,001–3,000 sq. ft.: 3–4 hours\n• 3,001–4,000 sq. ft.: 4–5 hours\n• Over 4,000 sq. ft.: 5–7 hours\n\nMonthly Maintenance Cleaning\n• Up to 1,000 sq. ft.: 2–3 hours\n• 1,001–2,000 sq. ft.: 3–4 hours\n• 2,001–3,000 sq. ft.: 4–5 hours\n• 3,001–4,000 sq. ft.: 5–6 hours\n• Over 4,000 sq. ft.: 6–8 hours\n\nOne-Time Standard Cleaning\n• Up to 1,000 sq. ft.: 2–3 hours\n• 1,001–2,000 sq. ft.: 3–5 hours\n• 2,001–3,000 sq. ft.: 5–7 hours\n• 3,001–4,000 sq. ft.: 6–8 hours\n• Over 4,000 sq. ft.: Multiple appointments may be required\n\nDeep Cleaning\n• Up to 1,000 sq. ft.: 3–4 hours\n• 1,001–2,000 sq. ft.: 4–6 hours\n• 2,001–3,000 sq. ft.: 6–8 hours\n• 3,001–4,000 sq. ft.: Up to 8 hours\n• Over 4,000 sq. ft.: Multiple appointments may be required\n\nMove-In & Move-Out Cleaning\n• Up to 1,000 sq. ft.: 3–4 hours\n• 1,001–2,000 sq. ft.: 4–6 hours\n• 2,001–3,000 sq. ft.: 6–8 hours\n• 3,001–4,000 sq. ft.: Up to 8 hours\n• Over 4,000 sq. ft.: Multiple appointments may be required\n\nIf, upon arrival, the condition of the property differs significantly from what was disclosed during booking, additional time, pricing adjustments, or multiple appointments may be required. Whenever reasonably possible, we will discuss any changes with you before additional work is performed.`,
  },
  {
    n: '7', title: 'Pricing & Scope Changes',
    content: `GreenWave Cleaning LLC provides estimates based on the information provided at the time of booking. If the actual condition of the property differs significantly from what was disclosed, pricing, service time, or the scope of work may need to be adjusted.\n\nThis may apply if the home has:\n• Excessive buildup\n• Heavy pet hair\n• Clutter or remaining belongings\n• Undisclosed rooms or additional bathrooms\n• Conditions requiring more labor than originally estimated\n\nWhenever reasonably possible, any pricing or scope changes will be discussed and approved before additional work is performed.`,
  },
  {
    n: '8', title: 'Satisfaction Guarantee',
    content: `Your satisfaction matters to us. If an area included in your agreed-upon cleaning checklist was missed, please notify GreenWave Cleaning LLC within 24 hours of your appointment.\n\nIf the concern falls within the original scope of work, we will gladly return to correct the area at no additional charge.\n\nThis guarantee does not apply to:\n• Permanent stains or damage\n• Hard water buildup\n• Mold or mildew staining\n• Rust or discoloration\n• Areas outside the original scope of work\n• Conditions that cannot be corrected through standard cleaning methods`,
  },
  {
    n: '9', title: 'Eco-Friendly Products Disclaimer',
    content: `We strive to use environmentally responsible and non-toxic cleaning products whenever possible. However:\n\n• No cleaning product can be guaranteed to be completely allergen-free or chemical-free.\n• Clients should inform us of allergies, sensitivities, pets, or special environmental concerns before service.\n• Certain stains, mold, buildup, or hazardous conditions may require stronger conventional products or specialized remediation services.\n\nWe reserve the right to decline services involving hazardous materials, biohazards, infestations, or unsafe environments.`,
  },
  {
    n: '10', title: 'Client Responsibilities',
    content: `Clients agree to:\n• Secure valuables and fragile items\n• Provide utilities such as water and electricity\n• Ensure safe working conditions\n• Inform us of hazards, damage, or sensitive surfaces\n\nFor safety reasons, our staff may refuse tasks involving:\n• Heavy lifting\n• Climbing beyond safe ladder limits\n• Exposure to hazardous substances\n• Unsafe or unsanitary conditions`,
  },
  {
    n: '11', title: 'Harassment & Employee Safety Policy',
    content: `At GreenWave Cleaning LLC, we are committed to maintaining a safe, respectful, and professional working environment for our employees and clients.\n\nWe have a zero-tolerance policy for any form of harassment, intimidation, discrimination, or inappropriate behavior toward our staff. This includes, but is not limited to:\n• Unwanted sexual advances or comments\n• Inappropriate jokes, gestures, or suggestive remarks\n• Requests for personal contact information or dates\n• Unwanted physical contact\n• Verbal abuse, threats, or intimidation\n• Discriminatory or offensive language\n• Any behavior that causes our employees to feel unsafe or uncomfortable\n\nIf any employee experiences inappropriate behavior during a scheduled service, GreenWave Cleaning LLC reserves the right to immediately stop work, leave the property, terminate the appointment without refund, and refuse all future services. When appropriate, incidents may also be reported to the booking platform, property management, or law enforcement.\n\nWe appreciate our clients' professionalism and respect, and we are committed to providing the same in return.`,
  },
  {
    n: '12', title: 'Weapons & Illegal Drugs Policy',
    content: `At GreenWave Cleaning LLC, the safety of our employees and clients is our highest priority.\n\nFirearms & Weapons\n\nWe respectfully ask that all firearms and other weapons remain securely stored and are not handled while our team is present in the home or business. If an employee reasonably believes a situation presents a safety concern, GreenWave Cleaning LLC reserves the right to immediately discontinue service and leave the property.\n\nIllegal Drugs\n\nGreenWave Cleaning LLC will not perform services in environments involving illegal drug use, illegal drug manufacturing, or any unlawful activity that creates an unsafe working environment for our employees. If illegal activity is observed during a scheduled appointment, we reserve the right to immediately discontinue service and leave the property.`,
  },
  {
    n: '13', title: 'Smoking During Service',
    content: `GreenWave Cleaning LLC is 420-friendly and recognizes that recreational marijuana use is legal in the State of Ohio.\n\nWe simply ask that clients refrain from smoking marijuana, cigarettes, or cigars while we are actively cleaning. This request is not based on judgment — we simply want to maintain a clean and comfortable working environment and prevent strong odors from lingering on our clothing and equipment as we travel between clients' homes.\n\nWe appreciate your understanding and cooperation in helping us provide a safe, respectful, and professional experience for everyone.`,
  },
  {
    n: '14', title: 'Pets',
    content: `At GreenWave Cleaning LLC, we love our furry clients just as much as their owners! The safety and well-being of your pets, as well as our employees, are extremely important to us.\n\nTo ensure a safe and efficient cleaning experience, we ask that all pets be securely contained in a separate room, crate, or enclosed area during your scheduled cleaning appointment whenever possible.\n\nAlthough we use eco-friendly, non-toxic cleaning products, we also utilize professional cleaning equipment, including commercial steam-cleaning machines that reach extremely high temperatures. Keeping pets safely away from active work areas helps prevent accidental injuries, escapes, and unnecessary stress for both your pets and our team.\n\nIf your pet cannot be safely secured, please notify us before your appointment so we can discuss the best solution.\n\nGreenWave Cleaning LLC reserves the right to delay, reschedule, or discontinue service if a pet's behavior creates a safety concern for our employees or prevents us from completing the scheduled service safely.\n\nClients are responsible for informing us of any pets in the home, including those that may be protective, anxious, or have a history of aggressive behavior.`,
  },
  {
    n: '15', title: 'Photography & Documentation Policy',
    content: `To protect both our clients and GreenWave Cleaning LLC, our team may take photos before, during, or after service.\n\nPhotos may be used to document:\n• The condition of the property\n• Pre-existing damage\n• Completed work\n• Safety concerns\n• Areas outside the agreed-upon scope of service\n\nGreenWave Cleaning LLC will not use photos containing identifying personal information for advertising, social media, or promotional purposes without the client's separate written permission.`,
  },
  {
    n: '16', title: 'Damage & Liability',
    content: `While we take reasonable care during service, accidents may occasionally occur. Clients must report alleged damage within 24 hours of service.\n\nWe are not liable for:\n• Pre-existing damage\n• Wear and tear\n• Improperly installed fixtures\n• Unstable furniture or décor\n• Damage resulting from ordinary cleaning methods\n\nOur liability shall not exceed the amount paid for the specific service giving rise to the claim.`,
  },
  {
    n: '17', title: 'Intellectual Property',
    content: `All website content, branding, logos, text, graphics, and service materials are the property of GreenWave Cleaning LLC and may not be copied or used without permission.`,
  },
  {
    n: '18', title: 'Privacy',
    content: `Any personal information collected is used solely for scheduling, communication, billing, and service-related purposes.\n\nWe do not sell personal information to third parties.`,
  },
  {
    n: '19', title: 'Limitation of Liability',
    content: `To the fullest extent permitted by law, the Company shall not be liable for indirect, incidental, special, or consequential damages arising from use of our services.\n\nServices are provided "as available" and "as is" without warranties except where required by law.`,
  },
  {
    n: '20', title: 'Indemnification',
    content: `You agree to indemnify and hold harmless the Company, its employees, contractors, and affiliates from claims, liabilities, damages, or expenses arising from:\n• Unsafe conditions at the property\n• Breach of these Terms\n• Misuse of services\n• Third-party claims related to the service location`,
  },
  {
    n: '21', title: 'Right to Refuse Service',
    content: `We reserve the right to refuse or discontinue services for reasons including:\n• Unsafe environments\n• Harassment or inappropriate behavior\n• Illegal activity\n• Hazardous conditions\n• Nonpayment`,
  },
  {
    n: '22', title: 'Changes to Terms',
    content: `We may update these Terms periodically. Updated Terms become effective upon posting or distribution to clients.\n\nContinued use of services constitutes acceptance of revised Terms.`,
  },
  {
    n: '23', title: 'Governing Law',
    content: `These Terms shall be governed by the laws of the State of Ohio, without regard to conflict of law principles.\n\nAny disputes shall be resolved in the courts located in Franklin County, Ohio.`,
  },
]

export default function Terms() {
  return (
    <main style={{ paddingTop: 72 }}>

      {/* ── Header ── */}
      <section className="terms-header">
        <div className="terms-inner">
          <p className="terms-company">GreenWave Cleaning LLC</p>
          <h1 className="terms-title">Terms of Service</h1>
          <p className="terms-date">Effective Date: May 5, 2026</p>
          <p className="terms-intro">
            Welcome to GreenWave Cleaning. These Terms of Service govern your use of our cleaning services, website, scheduling platform, and communications. By booking or using our services, you agree to these Terms.
          </p>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="terms-body">
        <div className="terms-inner">
          <div className="terms-sections">
            {sections.map(s => (
              <div key={s.n} className="terms-section">
                <h2 className="terms-section-title">
                  <span className="terms-num">{s.n}.</span> {s.title}
                </h2>
                <div className="terms-section-body">
                  {s.content.split('\n').map((line, i) => (
                    line.startsWith('•')
                      ? <p key={i} className="terms-bullet">{line}</p>
                      : line.trim() === ''
                        ? <div key={i} className="terms-spacer" />
                        : <p key={i}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div className="terms-contact">
            <h2 className="terms-section-title"><span className="terms-num">24.</span> Contact Information</h2>
            <div className="terms-contact-grid">
              <div className="terms-contact-item">
                <span className="tci-label">Company</span>
                <span>GreenWave Cleaning LLC</span>
              </div>
              <div className="terms-contact-item">
                <span className="tci-label">Phone</span>
                <a href="tel:6146716041">614-671-6041</a>
              </div>
              <div className="terms-contact-item">
                <span className="tci-label">Email</span>
                <a href="mailto:greenwavecleaningllc@gmail.com">greenwavecleaningllc@gmail.com</a>
              </div>
              <div className="terms-contact-item">
                <span className="tci-label">Website</span>
                <a href="https://www.greenwavecleaningllc.com">greenwavecleaningllc.com</a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
