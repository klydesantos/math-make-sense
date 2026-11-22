import { useMemo, useState } from 'react'

const DATES = [
  { label: 'Nov 24', iso: '2026-11-24' },
  { label: 'Nov 25', iso: '2026-11-25' },
  { label: 'Nov 26', iso: '2026-11-26' },
  { label: 'Nov 27', iso: '2026-11-27' },
  { label: 'Nov 28', iso: '2026-11-28' },
]

type Tier = { id: string; label: string; rate: number; isTotal?: boolean }

const TIERS: Tier[] = [
  { id: 'standard', label: 'Standard — ₱650/hr', rate: 650 },
  { id: 'academic', label: 'Academic — ₱600/hr (10-hr)', rate: 600 },
  { id: 'group', label: 'Group — ₱450/student/hr', rate: 450 },
  { id: 'package', label: '10-hr Package — ₱6,500 total', rate: 6500, isTotal: true },
]

export default function App() {
  const [selected, setSelected] = useState(DATES[0])
  const [tierId, setTierId] = useState('standard')
  const [date, setDate] = useState(DATES[0].iso)
  const tier = useMemo(() => TIERS.find((t) => t.id === tierId) ?? TIERS[0], [tierId])
  const advance = Math.round(tier.rate * 0.3)
  const balance = tier.rate - advance
  const totalLine = tier.isTotal
    ? `Total ₱6,500 | Advance 30% ₱1,950 | Balance ₱4,550`
    : `Total ₱${tier.rate}/hr | Advance 30% ₱${advance} | Balance ₱${balance}`

  const pickDate = (d: (typeof DATES)[number]) => {
    setSelected(d)
    setDate(d.iso)
    document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header>
        <div className="wrap nav">
          <div className="brand">
            <div className="logo">KS</div>
            <div><b>Math with Teacher Kashmira</b><span>DOST Scholar • LPT • 9 Yrs • 120+ students • 4.9 rating</span></div>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <button className="btn btn-ghost" onClick={() => document.getElementById('manager')?.scrollIntoView({ behavior: 'smooth' })}>🔒 Manager</button>
            <button className="btn btn-ghost" onClick={() => document.getElementById('rates')?.scrollIntoView({ behavior: 'smooth' })}>Rates</button>
            <button className="btn btn-teal" onClick={() => document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' })}>Book now →</button>
          </div>
        </div>
      </header>
      <main className="wrap">
        <div className="hero">
          <div>
            <span className="eyebrow">STRENGTHENED CURRICULUM ONLY • MANAGED BY KLYDE SANTOS • 5 DATES OPEN</span>
            <h1>Math that<br />finally makes<br />sense.</h1>
            <p className="bio">Hi, I&apos;m <b>Kashmira Santos</b> — Senior High School teacher, DOST-SEI scholar, LET passer, 9 years teaching Math, 120+ students, ~4.9 rating. I teach JHS to SHS with a clear, patient, no-judgment approach. Face-to-face in <b>Muntinlupa</b> and 100% good with online anywhere in the Philippines.</p>
            <div className="badges"><span className="pill">DOST Scholar</span><span className="pill">LET Passer</span><span className="pill">9 Yrs Experience</span><span className="pill">What is Strengthened? ⓘ</span></div>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <button className="btn btn-teal" onClick={() => document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' })}>Book Now from ₱650/hr 📅</button>
              <button className="btn btn-ghost" onClick={() => document.getElementById('rates')?.scrollIntoView({ behavior: 'smooth' })}>See rates ⓘ</button>
              <button className="btn" style={{ background: '#FEF9C3' }} onClick={() => document.getElementById('qr')?.scrollIntoView({ behavior: 'smooth' })}>Payment QR</button>
            </div>
            <div className="stats">
              <div><b>120+</b><span>Students</span></div>
              <div><b>9 Yrs</b><span>Experience</span></div>
              <div><b>4.9 / 5</b><span>Parent Rating</span></div>
              <div><b>Strengthened</b><span>Curriculum Only</span></div>
            </div>
            <p className="muted" style={{ marginTop: 12 }}>* Muntinlupa only — Alabang / San Pedro available on request — same rate. International reviewers accepted on request.</p>
          </div>

          <div className="card" id="rates">
            <div style={{ display: 'flex', justifyContent: 'space-between' }}><span className="muted"><b>TEACHER CARD | 1 OF 1</b></span><span>♡</span></div>
            <div style={{ display: 'flex', gap: 12, margin: '14px 0', alignItems: 'center' }}>
              <div className="logo" style={{ width: 52, height: 52, fontSize: 18 }}>KS</div>
              <div><b style={{ fontSize: 20 }}>Kashmira Santos</b><div><span className="pill">DOST Scholar</span> <span className="pill">LPT</span> <span className="pill">9 Yrs</span></div><div className="muted">📍 Muntinlupa • Online nationwide</div></div>
            </div>
            <p className="muted">Senior High School teacher, DOST-SEI scholar, LET passer. Clear, patient, no-judgment Math.</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><b>RATE CARD • 5 DATES FOR KASHMIRA SANTOS</b><span>ⓘ</span></div>
            <p className="muted">Subjects<br /><b style={{ color: '#0F2922' }}>JHS Math • General Math • FINETE 1 &amp; 2</b></p>
            <p className="muted">Availability</p>
            <div><span className="pill">🌞 Weekdays 5PM – 10PM</span> <span className="pill">🌿 Weekends 12PM – 10PM</span></div>
            <div className="rate">
              <div className="rate-row"><div><b>Online 1-on-1</b></div><div className="price">₱650 <span>/hr</span></div></div>
              <div className="rate-row"><div><b>F2F Muntinlupa</b></div><div className="price">₱650 <span>/hr</span></div></div>
              <div className="rate-row"><div><b>Group (2–3)</b><small>Same Goal • Same grade &amp; topic only</small></div><div className="price">₱450 <span>/student/hr</span></div></div>
              <div className="rate-row best"><div><b>10-hr Package</b><small>Best Value • Save vs pay-per-session</small></div><div className="price">₱6,500 <span>total</span> <span className="tag">Best Value</span></div></div>
            </div>
            <div className="dates">
              {DATES.map((d) => (
                <button key={d.iso} className={`date ${selected.iso === d.iso ? 'active' : ''}`} onClick={() => pickDate(d)}>{d.label}</button>
              ))}
            </div>
            <p className="muted">Selected: {selected.label} — pre-selected in booking form below.</p>
          </div>
        </div>

        <section id="manager">
          <div className="mgr">
            <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 32, margin: 0 }}>Managed by Klyde Santos — Your Booking Manager</h2>
            <p><span className="tag">BUSINESS ANALYST • DATA-DRIVEN PROGRESS</span></p>
            <p><b>Klyde Santos</b> • Manager • Business Analyst • Operations &amp; Parent Coordination</p>
            <p>📊 <b>Data-Driven Insights</b> — I track every session, score, and improvement. &nbsp; 📈 <b>Pre-Perf vs Post-Perf Tracking</b> — Date | Topic | Pre-Perf | Post-Perf | Improvement. &nbsp; 🛡️ <b>Assurance Through Track Records</b> — Copies, scores, attendance, progress reports.</p>
            <p style={{ background: '#FEF9C3', padding: 14, borderRadius: 12 }}><b>You will always know how your child is doing — with data, dates, and documents. Not just &apos;okay na po.&apos;</b></p>
            <p>What parents receive: ✓ Copy of what was reviewed ✓ Performance &amp; score update ✓ Progress document with pre/post comparison ✓ Bi-weekly parent report for Private/Honors tier</p>
          </div>
        </section>

        <section id="book">
          <div className="card">
            <h2>Book a Session</h2>
            <p className="muted">Selected date: {selected.label} ({date})</p>
            <label>Student Name</label><input placeholder="Full name" />
            <label>Grade</label><select><option>Grade 7</option><option>Grade 8</option><option>Grade 9</option><option>Grade 10</option><option>General Math</option><option>FINETE 1</option><option>FINETE 2</option></select>
            <label>Date Scheduled</label><input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            <label>Time</label><select><option>5:00 PM</option><option>6:00 PM</option><option>7:00 PM</option><option>8:00 PM</option></select>
            <label>Topic / Goal</label><input placeholder="e.g. Quadratic equations, FINETE review" />
            <label>Tier</label>
            <select value={tierId} onChange={(e) => setTierId(e.target.value)}>
              {TIERS.map((t) => <option key={t.id} value={t.id}>{t.label}</option>)}
            </select>
            <div style={{ background: '#EFFAF4', padding: 14, borderRadius: 12, marginTop: 14 }}><b>{totalLine}</b><p className="muted">Book at least 2 days ahead • 30% advance to confirm • Cancel/reschedule at least 24h ahead • 20% penalty if cancelled within 24h • No-show forfeits advance</p></div>
            <button className="btn btn-teal" style={{ marginTop: 12, width: '100%' }} onClick={() => alert('Booking saved locally. Manager will confirm in Google Sheet.')}>Confirm Booking →</button>
            <p style={{ textAlign: 'center' }}><a href="https://docs.google.com/spreadsheets/d/17pbKkPcKSNq66kVzbrPtkEHcV--kkyqAlExUcybiGuU/edit?gid=0#gid=0" target="_blank" rel="noreferrer">Open Google Sheet — Schedule Records ↗</a></p>
          </div>
        </section>

        <section id="qr">
          <div className="card" style={{ display: 'flex', gap: 18, flexWrap: 'wrap', alignItems: 'center' }}>
            <div className="qr"><div><b>GoTyme QR</b><br />KRISTIAN KLYDE SANTOS<br />09478230647<br />....4687 • InstaPay<br /><span className="muted">QR omitted initially — add /public/qr.png</span></div></div>
            <div><h2>Payment</h2><p>GoTyme QR — KRISTIAN KLYDE SANTOS • 09478230647 • Account ending 4687 • InstaPay center • Transfer fees may apply.</p><p className="muted">Manager PIN (demo): 1234 • Group must be magkaklase, same grade, same topic, same goal.</p></div>
          </div>
        </section>
      </main>
    </>
  )
}
