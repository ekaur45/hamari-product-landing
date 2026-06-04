export default function HomeFaq(){
    return(
        <section id="faq">
    <div className="inner reveal">
      <div className="tc">
        <div className="chip"><span className="chip-dot"></span>FAQ</div>
        <h2 className="sec-title">Frequently Asked Questions</h2>
      </div>
      <div className="faq-grid">
        <div className="faq-item">
          <div className="faq-q">How do I book a teacher?</div>
          <div className="faq-a">Register free, browse approved teacher profiles, select an available 60-minute slot, and
            complete payment. You{"'"}ll instantly access the online classroom.</div>
        </div>
        <div className="faq-item">
          <div className="faq-q">Can parents manage bookings for children?</div>
          <div className="faq-a">Yes. Parents have a dedicated portal to link children, book classes, monitor progress, and
            manage payments from one dashboard.</div>
        </div>
        <div className="faq-item">
          <div className="faq-q">What if I need to cancel or reschedule?</div>
          <div className="faq-a">You can request rescheduling per our policies. Cancellations may return platform credits
            usable for future sessions.</div>
        </div>
        <div className="faq-item">
          <div className="faq-q">How does the AI Homework Helper work?</div>
          <div className="faq-a">Every student gets 12 free AI credits daily for step-by-step explanations. Need more?
            Purchase affordable packs anytime.</div>
        </div>
        <div className="faq-item">
          <div className="faq-q">How do teachers get paid?</div>
          <div className="faq-a">Teachers submit a payout request from their dashboard after completing sessions. Admin
            reviews and approves with full payout history visible.</div>
        </div>
        <div className="faq-item">
          <div className="faq-q">How are teachers vetted?</div>
          <div className="faq-a">All teachers go through admin review of qualifications and background before appearing in
            the marketplace. Only approved teachers are visible to students.</div>
        </div>
      </div>
    </div>
  </section>
    )
}