export default function TwoColumnHero({ title, subtitle, right }) {
  return (
    <section className="two-hero">
      <div className="two-hero-inner">
        <div className="two-hero-text">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>

        <div className="two-hero-right">
          {right}
        </div>
      </div>
    </section>
  )
}

