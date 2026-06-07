export default function HomeCta() {
  return (
    <section className="text-center relative">
      <div className="cta-glow"></div>
      <div style={{margin:"0 auto"}} className="relative z-1">
        <div className="chip"><span className="chip-dot"></span>Ready to Start?</div>
        <h2 className="sec-title">Transform Your Learning Journey Today</h2>
        <p className="sec-sub" style={{margin:"0 auto 40px"}}>Join 12,000+ students and 5,200+ teachers. Register free — no credit card required.</p>
        <div className="flex gap-[16px] justify-center flex-wrap">
          <div className="btn btn-glow btn-xl" >Start Learning Free →</div>
          <div className="btn btn-ghost btn-lg">Browse Teachers</div>
        </div>
      </div>
    </section>
  )
}