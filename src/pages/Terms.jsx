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
    content: `Prices are based on factors including:\n• Property size\n• Service type\n• Condition of the property\n• Frequency of service\n• Additional requested tasks\n\nPayment is due upon completion of services unless otherwise agreed in writing.\n\nWe may accept credit/debit cards, electronic payments, and cash. We do not accept personal checks.\n\nLate payments may incur additional fees. Returned payments or chargebacks may result in suspension of future services.`,
  },
  {
    n: '4', title: 'Cancellation & Booking Policy',
    content: `At GreenWave Cleaning, we reserve your appointment exclusively for you. Last-minute cancellations make it difficult to offer that time to other clients. To help protect our schedule, the following policies apply:\n\n• Cancellations made more than 48 hours before your scheduled appointment: No cancellation fee.\n• Cancellations made within 24 hours of your scheduled appointment: A cancellation fee equal to 25% of the scheduled service total will apply.\n• Same-day cancellations, cancellations after our team has begun traveling to your property, or failure to provide access at the scheduled appointment time: A cancellation fee equal to 50% of the scheduled service total will apply.\n\nBooking Deposit\n\nA 50% deposit is required to reserve all cleaning appointments. This deposit is applied toward your final balance on the day of service.\n\nIf a cancellation falls within the timeframes outlined above, the applicable cancellation fee will be deducted from the deposit. Any remaining balance of the deposit will be refunded when applicable. If no cancellation fees apply, the full deposit is credited toward the total cost of your cleaning service.\n\nBy scheduling an appointment with GreenWave Cleaning, you acknowledge and agree to this booking and cancellation policy.`,
  },
  {
    n: '5', title: 'Eco-Friendly Products Disclaimer',
    content: `We strive to use environmentally responsible and non-toxic cleaning products whenever possible. However:\n\n• No cleaning product can be guaranteed to be completely allergen-free or chemical-free.\n• Clients should inform us of allergies, sensitivities, pets, or special environmental concerns before service.\n• Certain stains, mold, buildup, or hazardous conditions may require stronger conventional products or specialized remediation services.\n\nWe reserve the right to decline services involving hazardous materials, biohazards, infestations, or unsafe environments.`,
  },
  {
    n: '6', title: 'Client Responsibilities',
    content: `Clients agree to:\n• Secure valuables and fragile items\n• Provide utilities such as water and electricity\n• Ensure safe working conditions\n• Inform us of hazards, damage, or sensitive surfaces\n\nFor safety reasons, our staff may refuse tasks involving:\n• Heavy lifting\n• Climbing beyond safe ladder limits\n• Exposure to hazardous substances\n• Unsafe or unsanitary conditions`,
  },
  {
    n: '7', title: 'Satisfaction Guarantee',
    content: `If you are dissatisfied with a cleaning service, please notify us within 24 hours of service completion.\n\nAt our discretion, we may:\n• Re-clean affected areas\n• Offer partial credits\n• Provide alternative resolutions\n\nRefunds are not guaranteed and are evaluated case-by-case.`,
  },
  {
    n: '8', title: 'Damage & Liability',
    content: `While we take reasonable care during service, accidents may occasionally occur. Clients must report alleged damage within 24 hours of service.\n\nWe are not liable for:\n• Pre-existing damage\n• Wear and tear\n• Improperly installed fixtures\n• Unstable furniture or décor\n• Damage resulting from ordinary cleaning methods\n\nOur liability shall not exceed the amount paid for the specific service giving rise to the claim.`,
  },
  {
    n: '9', title: 'Pets',
    content: `We are pet-friendly; however, clients are responsible for ensuring pets are secured if necessary for safety or service efficiency.\n\nWe are not responsible for pets escaping during service if adequate instructions or containment were not provided.`,
  },
  {
    n: '10', title: 'Intellectual Property',
    content: `All website content, branding, logos, text, graphics, and service materials are the property of GreenWave Cleaning LLC and may not be copied or used without permission.`,
  },
  {
    n: '11', title: 'Privacy',
    content: `Any personal information collected is used solely for scheduling, communication, billing, and service-related purposes.\n\nWe do not sell personal information to third parties.`,
  },
  {
    n: '12', title: 'Limitation of Liability',
    content: `To the fullest extent permitted by law, the Company shall not be liable for indirect, incidental, special, or consequential damages arising from use of our services.\n\nServices are provided "as available" and "as is" without warranties except where required by law.`,
  },
  {
    n: '13', title: 'Indemnification',
    content: `You agree to indemnify and hold harmless the Company, its employees, contractors, and affiliates from claims, liabilities, damages, or expenses arising from:\n• Unsafe conditions at the property\n• Breach of these Terms\n• Misuse of services\n• Third-party claims related to the service location`,
  },
  {
    n: '14', title: 'Right to Refuse Service',
    content: `We reserve the right to refuse or discontinue services for reasons including:\n• Unsafe environments\n• Harassment or inappropriate behavior\n• Illegal activity\n• Hazardous conditions\n• Nonpayment`,
  },
  {
    n: '15', title: 'Changes to Terms',
    content: `We may update these Terms periodically. Updated Terms become effective upon posting or distribution to clients.\n\nContinued use of services constitutes acceptance of revised Terms.`,
  },
  {
    n: '16', title: 'Governing Law',
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
            <h2 className="terms-section-title"><span className="terms-num">17.</span> Contact Information</h2>
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
                <a href="mailto:greenwavecleanllc@gmail.com">greenwavecleanllc@gmail.com</a>
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
