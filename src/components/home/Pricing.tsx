export default function HomePricing(){
    return (
        <section id="pricing">
    <div className="inner reveal">
      <div className="tc">
        <div className="chip"><span className="chip-dot"></span>Pricing</div>
        <h2 className="sec-title">Transparent, Flexible Pricing</h2>
        <p className="sec-sub">Pay for sessions you need. No hidden fees, no subscription lock-in.</p>
      </div>
      <div className="pricing-grid">
        <div className="gc price-gc">
          <div className="price-name">Group Sessions</div>
          <div className="price-amt"><sup>£</sup>12</div>
          <div className="price-period">per session avg · per student</div>
          <ul className="price-list">
            <li><span className="ck">✓</span> Up to 8 students per class</li>
            <li><span className="ck">✓</span> 60-minute live sessions</li>
            <li><span className="ck">✓</span> Interactive whiteboard</li>
            <li><span className="ck">✓</span> Daily AI credits</li>
            <li><span className="cx">✗</span> 1:1 private attention</li>
            <li><span className="cx">✗</span> Custom scheduling</li>
          </ul> <a href="#signup" className="btn btn-ghost w-full justify-center" >Join a Group Class</a>
        </div>
        <div className="gc price-gc featured">
          <div className="price-badge">Most Popular</div>
          <div className="price-name">1:1 Private Sessions</div>
          <div className="price-amt"><sup>£</sup>25</div>
          <div className="price-period">per session avg · teacher rate varies</div>
          <ul className="price-list">
            <li><span className="ck">✓</span> Dedicated teacher attention</li>
            <li><span className="ck">✓</span> 60-minute live sessions</li>
            <li><span className="ck">✓</span> Whiteboard + screen share</li>
            <li><span className="ck">✓</span> Daily AI credits</li>
            <li><span className="ck">✓</span> Flexible scheduling</li>
            <li><span className="ck">✓</span> Reschedule & cancel options</li>
          </ul> <a href="#signup" className="btn btn-glow w-full justify-center" >Book a 1:1 Session</a>
        </div>
        <div className="gc price-gc">
          <div className="price-name">AI Credit Top-Ups</div>
          <div className="price-amt"><sup>£</sup>4</div>
          <div className="price-period">per credit pack · after daily free limit</div>
          <ul className="price-list">
            <li><span className="ck">✓</span> 12 free AI credits daily</li>
            <li><span className="ck">✓</span> Top-up packs available</li>
            <li><span className="ck">✓</span> Instant homework answers</li>
            <li><span className="ck">✓</span> Step-by-step explanations</li>
            <li><span className="ck">✓</span> Works across all subjects</li>
            <li><span className="ck">✓</span> Credits never expire</li>
          </ul> <a href="#signup" className="btn btn-ghost w-full justify-center" >Get Free Credits</a>
        </div>
      </div>
      <p className="text-center mt-6 text-[0.82rem] text-[var(--text-s)]">💱 Multi-currency support ·
        Prices in GBP for illustration</p>
    </div>
  </section>
    )
}