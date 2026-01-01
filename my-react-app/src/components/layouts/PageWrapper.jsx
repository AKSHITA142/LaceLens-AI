export default function PageWrapper({ title, subtitle }) {
  return (
    <section className="page-wrapper">
      <div className="page-header">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </section>
  )
}

