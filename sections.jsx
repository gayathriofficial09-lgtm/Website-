/* Marginalia — page sections below the hero.
   Loaded as <script type="text/babel" src="sections.jsx"> AFTER React.
   Exposes components on window for the main app to render. */

const StripedCover = ({ ratio = 'tall', tint = 'rgba(255,255,255,0.08)', label }) => {
  const dim = ratio === 'square' ? { paddingTop: '100%' } : { paddingTop: '142%' };
  return (
    <div
      className="relative w-full rounded-sm overflow-hidden"
      style={{
        ...dim,
        background: `repeating-linear-gradient(45deg, ${tint} 0 8px, rgba(255,255,255,0.03) 8px 16px)`,
        border: '1px solid rgba(255,255,255,0.12)',
      }}
      aria-label={label || 'book cover placeholder'}
    >
      <div className="absolute inset-0 flex items-end p-3">
        <span
          className="text-[9px] uppercase tracking-[0.28em] text-white/40"
          style={{ fontFamily: "'JetBrains Mono', ui-monospace, monospace" }}
        >
          [ cover ]
        </span>
      </div>
    </div>
  );
};

const SectionEyebrow = ({ children }) => (
  <p className="text-[11px] uppercase tracking-[0.32em] text-muted-foreground mb-6 flex items-center gap-3">
    <span className="inline-block w-8 h-px bg-white/30" />
    {children}
  </p>
);

const SectionHeading = ({ children, em }) => (
  <h2
    className="font-normal text-foreground text-4xl sm:text-5xl md:text-6xl leading-[0.98] max-w-4xl"
    style={{ fontFamily: "'Instrument Serif', serif", letterSpacing: '-1.6px' }}
  >
    {children}
    {em && <em className="not-italic text-muted-foreground"> {em}</em>}
  </h2>
);

/* --- Section: On the desk ----------------------------------------- */
const OnTheDesk = () => {
  const books = [
    { title: 'Notes on Slow Attention', author: 'Iona Beck',        kind: 'Essay collection',  status: 'Reading now' },
    { title: 'The Long Winter Letters', author: 'August Marais',    kind: 'Correspondence',    status: 'Reading now' },
    { title: 'A House for the Mind',    author: 'Pradeep Iyer',     kind: 'Memoir',            status: 'Next up' },
    { title: 'Field Notes on Stillness',author: 'Léa Fontaine',     kind: 'Nature writing',    status: 'Next up' },
    { title: 'On Finishing Books',      author: 'M. Otieno',        kind: 'Essay',             status: 'Recently read' },
    { title: 'The Re-reader',           author: 'Sora Tanaka',      kind: 'Novel',             status: 'Recently read' },
  ];
  return (
    <section className="relative z-10 bg-background border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8 py-28 sm:py-36">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
          <div>
            <SectionEyebrow>On the desk · Spring 2026</SectionEyebrow>
            <SectionHeading em="this season.">Six books worth slowing down for</SectionHeading>
          </div>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 group">
            View the full reading list
            <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-12">
          {books.map((b, i) => (
            <article key={i} className="group cursor-pointer">
              <StripedCover label={b.title} />
              <div className="mt-4">
                <div className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground/80">
                  {b.status}
                </div>
                <h3
                  className="text-foreground text-lg mt-1 leading-tight"
                  style={{ fontFamily: "'Instrument Serif', serif" }}
                >
                  {b.title}
                </h3>
                <div className="text-xs text-muted-foreground mt-1">
                  {b.author} · {b.kind}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

/* --- Section: Shelves --------------------------------------------- */
const Shelves = () => {
  const shelves = [
    { name: 'For long winters',     count: 14, hue: 'rgba(180,200,230,0.10)', blurb: 'Books to keep next to a candle. Patient, interior, often very quiet.' },
    { name: 'The art of attention', count: 22, hue: 'rgba(230,200,180,0.10)', blurb: 'Essays and field guides on noticing what most of us walk past.' },
    { name: 'Letters & diaries',    count: 31, hue: 'rgba(200,230,200,0.10)', blurb: 'Correspondence, journals, marginalia. Reading other people thinking.' },
    { name: 'Re-readables',         count: 18, hue: 'rgba(230,180,210,0.10)', blurb: 'Slim volumes we return to every year, and the years keep getting better.' },
  ];
  return (
    <section className="relative z-10 bg-background border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8 py-28 sm:py-36">
        <div className="mb-16 text-center">
          <SectionEyebrow><span /><span className="mx-auto">The shelves</span><span className="inline-block w-8 h-px bg-white/30 ml-3" /></SectionEyebrow>
          <SectionHeading em="for the season.">Curated by readers, kept</SectionHeading>
          <p className="text-muted-foreground max-w-xl mx-auto mt-6">
            Every shelf is a small editorial decision. Drift through one with a coffee, or commit to a season's reading in an evening.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {shelves.map((s, i) => (
            <a
              href="#"
              key={i}
              className="liquid-glass rounded-3xl p-8 hover:scale-[1.01] flex items-stretch gap-6 group"
            >
              <div className="flex -space-x-3 flex-shrink-0">
                {[0, 1, 2].map((n) => (
                  <div
                    key={n}
                    className="w-16 h-24 rounded-sm"
                    style={{
                      background: `repeating-linear-gradient(${45 + n * 25}deg, ${s.hue} 0 8px, rgba(255,255,255,0.03) 8px 16px)`,
                      border: '1px solid rgba(255,255,255,0.12)',
                      transform: `rotate(${(n - 1) * 4}deg)`,
                    }}
                    aria-hidden
                  />
                ))}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                  Shelf · {s.count} titles
                </div>
                <h3
                  className="text-foreground text-3xl mt-2 leading-tight"
                  style={{ fontFamily: "'Instrument Serif', serif" }}
                >
                  {s.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{s.blurb}</p>
                <div className="text-xs text-foreground mt-4 inline-flex items-center gap-2">
                  Open the shelf
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

/* --- Section: From the journal ----------------------------------- */
const Journal = () => {
  const feature = {
    eyebrow: 'Long read · 18 min',
    title:  'In praise of the second reading.',
    by:     'Iona Beck',
    date:   'May 9, 2026',
    excerpt:
      'The first time through a book is half a conversation. You are doing most of the talking — anticipating, defending, drawing analogies to the last good thing you read. The second time, finally, the book gets to speak.',
  };
  const more = [
    { kind: 'Letter',  title: 'On keeping a commonplace book in 2026',                 by: 'August Marais', date: 'May 4',  read: '7 min'  },
    { kind: 'Essay',   title: 'The case against the year-end reading list',            by: 'Pradeep Iyer',  date: 'Apr 27', read: '11 min' },
    { kind: 'Interview',title: 'A small bookshop in the Alentejo, ten years in',       by: 'Léa Fontaine',  date: 'Apr 20', read: '14 min' },
    { kind: 'Notes',   title: 'Eight margins, transcribed.',                           by: 'The editors',   date: 'Apr 14', read: '5 min'  },
  ];
  return (
    <section className="relative z-10 bg-background border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8 py-28 sm:py-36">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
          <div>
            <SectionEyebrow>From the journal</SectionEyebrow>
            <SectionHeading em="quiet thinking.">Long letters and</SectionHeading>
          </div>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors group">
            All writing <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>

        <div className="grid lg:grid-cols-12 gap-10">
          {/* Featured */}
          <a href="#" className="lg:col-span-7 group block">
            <div
              className="w-full aspect-[16/10] rounded-2xl overflow-hidden relative"
              style={{
                background:
                  'repeating-linear-gradient(135deg, rgba(255,255,255,0.06) 0 10px, rgba(255,255,255,0.02) 10px 20px)',
                border: '1px solid rgba(255,255,255,0.10)',
              }}
            >
              <div className="absolute inset-0 flex items-end p-6">
                <span
                  className="text-[10px] uppercase tracking-[0.28em] text-white/40"
                  style={{ fontFamily: "'JetBrains Mono', ui-monospace, monospace" }}
                >
                  [ featured photograph ]
                </span>
              </div>
            </div>
            <div className="mt-6">
              <div className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">{feature.eyebrow}</div>
              <h3
                className="text-foreground text-3xl sm:text-4xl mt-3 leading-[1.05] group-hover:text-foreground"
                style={{ fontFamily: "'Instrument Serif', serif", letterSpacing: '-0.8px' }}
              >
                {feature.title}
              </h3>
              <p className="text-muted-foreground mt-4 leading-relaxed max-w-2xl">{feature.excerpt}</p>
              <div className="text-xs text-muted-foreground mt-5">
                By {feature.by} · {feature.date}
              </div>
            </div>
          </a>

          {/* Secondary list */}
          <ul className="lg:col-span-5 flex flex-col divide-y divide-white/5">
            {more.map((m, i) => (
              <li key={i}>
                <a href="#" className="block py-6 group hover:bg-white/[0.015] transition-colors -mx-4 px-4 rounded">
                  <div className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                    {m.kind} · {m.read}
                  </div>
                  <h4
                    className="text-foreground text-xl mt-2 leading-snug"
                    style={{ fontFamily: "'Instrument Serif', serif" }}
                  >
                    {m.title}
                  </h4>
                  <div className="text-xs text-muted-foreground mt-2">
                    {m.by} · {m.date}
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

/* --- Section: Letters from readers ------------------------------- */
const Letters = () => {
  const letters = [
    {
      quote: 'I cancelled four subscriptions to keep this one. The Sunday letter is the only inbox I open before the kettle.',
      by:    'Mira K.',
      where: 'Edinburgh',
    },
    {
      quote: 'You sent me back to my own bookshelves. I had forgotten what was on them and what I had become.',
      by:    'Daniel R.',
      where: 'Mexico City',
    },
    {
      quote: 'A quiet society, exactly as advertised. No streaks, no badges, no algorithm. Just a room of people reading well.',
      by:    'Annika S.',
      where: 'Oslo',
    },
  ];
  return (
    <section className="relative z-10 bg-background border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8 py-28 sm:py-36">
        <div className="mb-16 max-w-3xl">
          <SectionEyebrow>Letters from the reading room</SectionEyebrow>
          <SectionHeading em="leave the room quieter.">What members say when they</SectionHeading>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {letters.map((l, i) => (
            <figure key={i} className="liquid-glass rounded-3xl p-8 flex flex-col">
              <div
                className="text-foreground/90 text-2xl leading-[1.25]"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                <span className="text-muted-foreground/60">“</span>
                {l.quote}
                <span className="text-muted-foreground/60">”</span>
              </div>
              <figcaption className="mt-6 pt-6 border-t border-white/10 text-xs text-muted-foreground">
                <span className="text-foreground">{l.by}</span> · {l.where}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

/* --- Section: Join the reading room ------------------------------ */
const JoinRoom = ({ ctaLabel }) => {
  const [email, setEmail] = React.useState('');
  const [sent, setSent] = React.useState(false);
  const submit = (e) => {
    e.preventDefault();
    if (email.includes('@')) setSent(true);
  };
  return (
    <section className="relative z-10 bg-background border-t border-white/5 overflow-hidden">
      {/* faint marginal texture */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 60%)',
        }}
      />
      <div className="relative max-w-4xl mx-auto px-8 py-32 sm:py-44 text-center">
        <SectionEyebrow>
          <span />
          <span className="mx-auto">Join the reading room</span>
          <span className="inline-block w-8 h-px bg-white/30 ml-3" />
        </SectionEyebrow>
        <h2
          className="font-normal text-foreground text-5xl sm:text-7xl leading-[0.98]"
          style={{ fontFamily: "'Instrument Serif', serif", letterSpacing: '-2px' }}
        >
          A long letter, every <em className="not-italic text-muted-foreground">Sunday morning.</em>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mt-8 leading-relaxed">
          No streaks. No notifications. One thoughtful dispatch about what we're reading, why it's worth your evening, and the smaller things kept in the margins.
        </p>

        {!sent ? (
          <form
            onSubmit={submit}
            className="mt-10 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@reading.address"
              className="liquid-glass flex-1 rounded-full px-6 py-4 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 focus:ring-white/30"
            />
            <button
              type="submit"
              className="liquid-glass rounded-full px-8 py-4 text-sm text-foreground hover:scale-[1.03] transition-transform"
            >
              {ctaLabel || 'Begin Reading'}
            </button>
          </form>
        ) : (
          <div className="mt-10 inline-flex flex-col items-center liquid-glass rounded-3xl px-10 py-6">
            <div className="text-foreground text-xl" style={{ fontFamily: "'Instrument Serif', serif" }}>
              A welcome letter is on its way.
            </div>
            <div className="text-xs text-muted-foreground mt-2">Check {email.split('@')[1] || 'your inbox'} on Sunday.</div>
          </div>
        )}

        <div className="mt-8 flex items-center justify-center gap-6 text-[11px] uppercase tracking-[0.28em] text-muted-foreground/80 flex-wrap">
          <span>Free to join</span>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <span>41,208 readers</span>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <span>Unsubscribe with one click</span>
        </div>
      </div>
    </section>
  );
};

/* --- Footer ------------------------------------------------------ */
const Footer = () => {
  const cols = [
    {
      title: 'The Room',
      links: ['About Marginalia', 'The editors', 'How we choose', 'Press kit'],
    },
    {
      title: 'Reading',
      links: ['Current shelves', 'Past dispatches', 'Reading lists', 'Member library'],
    },
    {
      title: 'Letters',
      links: ['Submit a margin', 'Write for us', 'Contact', 'RSS / Atom'],
    },
  ];
  return (
    <footer className="relative z-10 bg-background border-t border-white/10">
      <div className="max-w-7xl mx-auto px-8 pt-24 pb-12">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <a
              href="#"
              className="text-4xl tracking-tight text-foreground"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Marginalia<sup className="text-xs">®</sup>
            </a>
            <p className="text-muted-foreground max-w-sm mt-6 leading-relaxed">
              A quiet society for readers. Established 2019. Made on long evenings in five cities.
            </p>
            <div className="mt-8 flex items-center gap-4 text-xs text-muted-foreground">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400/70" />
              All systems quiet · Letter no. 247 in draft
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.title} className="md:col-span-2">
              <div className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground/80 mb-4">
                {c.title}
              </div>
              <ul className="flex flex-col gap-3">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-foreground/80 hover:text-foreground transition-colors">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="md:col-span-1">
            <div className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground/80 mb-4">
              Follow
            </div>
            <ul className="flex flex-col gap-3 text-sm text-foreground/80">
              <li><a href="#" className="hover:text-foreground">Email</a></li>
              <li><a href="#" className="hover:text-foreground">RSS</a></li>
              <li><a href="#" className="hover:text-foreground">Substack</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 flex items-center justify-between text-xs text-muted-foreground flex-wrap gap-4">
          <div>© 2019–2026 Marginalia Reading Society. All margins reserved.</div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Colophon</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

Object.assign(window, {
  MgOnTheDesk: OnTheDesk,
  MgShelves: Shelves,
  MgJournal: Journal,
  MgLetters: Letters,
  MgJoinRoom: JoinRoom,
  MgFooter: Footer,
});
