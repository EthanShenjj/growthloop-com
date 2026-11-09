"use client";

import { useState } from "react";

const NAV = [
  {
    label: "Command Center",
    items: [
      { id: "ai", name: "AI Studio", icon: "✦" },
      { id: "decisioning", name: "Composable AI Decisioning", icon: "⟳" },
    ],
  },
  {
    label: "Build",
    items: [
      { id: "audiences", name: "Audiences", icon: "◎" },
      { id: "journeys", name: "Journeys", icon: "⇄" },
    ],
  },
  {
    label: "Measure",
    items: [{ id: "insights", name: "Insights", icon: "▤" }],
  },
  {
    label: "Data",
    items: [
      { id: "data", name: "Data Manager", icon: "▦" },
      { id: "sources", name: "Sources", icon: "↓" },
      { id: "destinations", name: "Destinations", icon: "↑" },
    ],
  },
];

const AUDIENCES = [
  { name: "High-value shoppers", size: "1.2M", status: "Ready", updated: "2m ago" },
  { name: "Churned customers (30 days)", size: "248K", status: "Ready", updated: "1h ago" },
  { name: "Cart abandoners", size: "96K", status: "Syncing", updated: "Just now" },
  { name: "New signups — welcome", size: "41K", status: "Ready", updated: "3h ago" },
  { name: "Loyalty members", size: "512K", status: "Ready", updated: "1d ago" },
];

const JOURNEYS = [
  { name: "Welcome series", status: "Active", sends: "41K" },
  { name: "Win-back campaign", status: "Active", sends: "248K" },
  { name: "Holiday promo", status: "Draft", sends: "—" },
];

const DECISIONS = [
  { campaign: "Black Friday email", lift: "+22%", revenue: "$184K" },
  { campaign: "Retargeting display", lift: "+14%", revenue: "$96K" },
  { campaign: "Loyalty push", lift: "+9%", revenue: "$63K" },
];

const SOURCES = [
  { name: "Snowflake", meta: "Primary warehouse", connected: true },
  { name: "Google BigQuery", meta: "Marketing data", connected: true },
  { name: "Databricks", meta: "ML features", connected: true },
  { name: "Amazon Redshift", meta: "Legacy store", connected: false },
];

const DESTINATIONS = [
  { name: "Advertising", meta: "Meta, Google, The Trade Desk" },
  { name: "Email", meta: "Braze, Iterable, Klaviyo" },
  { name: "Sales & CRM", meta: "Salesforce, HubSpot" },
  { name: "Customer Success", meta: "Gainsight" },
];

function Badge({ kind, children }) {
  return (
    <span className={"badge badge--" + kind}>
      <span className="dot" />
      {children}
    </span>
  );
}

function PageHead({ eyebrow, title, sub, action }) {
  return (
    <div className="page-head__row" style={{ marginBottom: 24 }}>
      <div className="page-head">
        {eyebrow ? <p className="page-head__eyebrow">{eyebrow}</p> : null}
        <h1 className="page-head__title">{title}</h1>
        {sub ? <p className="page-head__sub">{sub}</p> : null}
      </div>
      {action ? <div>{action}</div> : null}
    </div>
  );
}

function AIStudio({ onNavigate }) {
  const [prompt, setPrompt] = useState("");
  const [generated, setGenerated] = useState(null);

  const chips = [
    "Win back customers who haven't purchased in 60 days",
    "Build a welcome journey for new signups",
    "Find high-value shoppers likely to churn",
  ];

  function run(p) {
    setPrompt(p);
    setGenerated({
      audience: "AI-generated audience",
      audienceName: "Win-back · 60-day lapsed",
      audienceText:
        "1.9M customers matched across Snowflake. Ready to activate, or refine in the self-serve editor.",
      journey: "AI-generated journey",
      journeyName: "3-step win-back flow",
      journeyText:
        "Email → wait 2 days → SMS offer. Launches across Email and Advertising in one click.",
    });
  }

  return (
    <div>
      <PageHead
        eyebrow="Command center"
        title="AI Studio"
        sub="Describe a goal in your own words — agentic AI builds the audiences and journeys for you to review."
      />

      <div className="ai-hero">
        <h2 className="ai-hero__title">What should we build today?</h2>
        <p className="ai-hero__sub">
          No SQL. No engineering tickets. Just describe the outcome you want.
        </p>

        <div className="ai-input">
          <input
            type="text"
            placeholder='Try "win back churned customers"'
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && prompt.trim()) run(prompt);
            }}
          />
          <button
            className="btn btn--primary"
            type="button"
            onClick={() => prompt.trim() && run(prompt)}
          >
            Generate
          </button>
        </div>

        <div className="chips">
          {chips.map((c) => (
            <button className="chip" key={c} type="button" onClick={() => run(c)}>
              {c}
            </button>
          ))}
        </div>
      </div>

      {generated ? (
        <div className="result">
          <div className="result__card">
            <p className="result__tag">{generated.audience}</p>
            <p className="result__title">{generated.audienceName}</p>
            <p className="result__text">{generated.audienceText}</p>
            <div style={{ marginTop: 16 }}>
              <button className="btn btn--primary" type="button" onClick={() => onNavigate("audiences")}>
                Open in Audiences
              </button>
            </div>
          </div>
          <div className="result__card">
            <p className="result__tag">{generated.journey}</p>
            <p className="result__title">{generated.journeyName}</p>
            <p className="result__text">{generated.journeyText}</p>
            <div style={{ marginTop: 16 }}>
              <button className="btn btn--ghost" type="button" onClick={() => onNavigate("journeys")}>
                Open in Journeys
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div style={{ marginTop: 24 }}>
          <div className="grid grid--3">
            {[
              ["Build audiences", "Segment any data in your warehouse without SQL.", "audiences"],
              ["Orchestrate journeys", "Multi-step campaigns across every channel.", "journeys"],
              ["Measure lift", "Agentic AI learns what actually drives revenue.", "insights"],
            ].map(([t, d, target]) => (
              <div className="card clickable" key={t} onClick={() => onNavigate(target)}>
                <p className="result__title" style={{ marginBottom: 6 }}>{t}</p>
                <p className="result__text" style={{ margin: 0 }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function Audiences({ notify, query }) {
  const [items, setItems] = useState(AUDIENCES);
  const visible = items.filter((a) =>
    a.name.toLowerCase().includes((query || "").toLowerCase())
  );
  function addNew() {
    setItems([
      { name: "Untitled audience", size: "—", status: "Draft", updated: "Just now" },
      ...items,
    ]);
    notify("Audience created — refine it in the segment builder");
  }
  return (
    <div>
      <PageHead
        eyebrow="Build"
        title="Audiences"
        sub="Smarter targeting — build precise audiences from your data cloud with a visual, no-code editor."
        action={
          <button className="btn btn--primary" type="button" onClick={addNew}>
            + New audience
          </button>
        }
      />
      <div className="card table-wrap">
        <table className="table">
          <thead>
            <tr>
              <th>Audience</th>
              <th>Size</th>
              <th>Status</th>
              <th>Updated</th>
            </tr>
          </thead>
          <tbody>
            {visible.map((a) => (
              <tr
                key={a.name}
                className="clickable"
                onClick={() => notify(`Opened "${a.name}"`)}
              >
                <td style={{ fontWeight: 600 }}>{a.name}</td>
                <td>{a.size}</td>
                <td>
                  <Badge kind={a.status === "Ready" ? "ready" : "syncing"}>
                    {a.status}
                  </Badge>
                </td>
                <td style={{ color: "var(--color-mid-grey)" }}>{a.updated}</td>
              </tr>
            ))}
            {visible.length === 0 ? (
              <tr>
                <td colSpan={4} style={{ color: "var(--color-mid-grey)", textAlign: "center", padding: "24px" }}>
                  No audiences match “{query}”
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Journeys({ notify, query }) {
  const [items, setItems] = useState(JOURNEYS);
  const visible = items.filter((j) =>
    j.name.toLowerCase().includes((query || "").toLowerCase())
  );
  function addNew() {
    setItems([{ name: "Untitled journey", status: "Draft", sends: "—" }, ...items]);
    notify("Journey created — open the canvas to add steps");
  }
  return (
    <div>
      <PageHead
        eyebrow="Build"
        title="Journeys"
        sub="Smart orchestration — multi-step, batch or real-time journeys that activate across every channel."
        action={
          <button className="btn btn--primary" type="button" onClick={addNew}>
            + New journey
          </button>
        }
      />

      <div className="card" style={{ marginBottom: 16 }}>
        <p className="result__tag">Live preview — win-back flow</p>
        <div className="canvas">
          <div className="canvas__flow">
            <div className="node node--trigger">
              <p className="node__type">Trigger</p>
              <p className="node__name">No purchase in 60 days</p>
            </div>
            <span className="arrow">→</span>
            <div className="node node--segment">
              <p className="node__type">Segment</p>
              <p className="node__name">Win-back · 60-day lapsed</p>
            </div>
            <span className="arrow">→</span>
            <div className="node">
              <p className="node__type">Email</p>
              <p className="node__name">We miss you — 20% off</p>
            </div>
            <span className="arrow">→</span>
            <div className="node">
              <p className="node__type">Wait</p>
              <p className="node__name">2 days</p>
            </div>
            <span className="arrow">→</span>
            <div className="node">
              <p className="node__type">SMS</p>
              <p className="node__name">Last-chance offer</p>
            </div>
          </div>
        </div>
      </div>

      <div className="card table-wrap">
        <table className="table">
          <thead>
            <tr>
              <th>Journey</th>
              <th>Status</th>
              <th>Sends</th>
            </tr>
          </thead>
          <tbody>
            {visible.map((j) => (
              <tr
                key={j.name}
                className="clickable"
                onClick={() => notify(`Opened "${j.name}"`)}
              >
                <td style={{ fontWeight: 600 }}>{j.name}</td>
                <td>
                  <Badge kind={j.status === "Active" ? "ready" : "syncing"}>
                    {j.status}
                  </Badge>
                </td>
                <td>{j.sends}</td>
              </tr>
            ))}
            {visible.length === 0 ? (
              <tr>
                <td colSpan={3} style={{ color: "var(--color-mid-grey)", textAlign: "center", padding: "24px" }}>
                  No journeys match “{query}”
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Insights({ notify }) {
  const bars = [42, 58, 47, 66, 72, 61, 80, 74, 88, 92, 86, 96];
  const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const metrics = [
    ["Revenue influenced", "$4.2M", "▲ +18% MoM"],
    ["Blended ROAS", "4.7x", "▲ +0.6x"],
    ["Audiences live", "128", "▲ +12 this week"],
    ["Avg. campaign lift", "+16%", "▲ +2.4 pts"],
  ];
  return (
    <div>
      <PageHead
        eyebrow="Measure"
        title="Insights"
        sub="Faster growth — real-time insights and lightning-fast campaign improvements."
      />
      <div className="grid grid--4" style={{ marginBottom: 16 }}>
        {metrics.map(([label, value, delta]) => (
          <div className="metric clickable" key={label} onClick={() => notify(`${label}: ${value}`)}>
            <p className="metric__label">{label}</p>
            <p className="metric__value">{value}</p>
            <p className="metric__delta up">{delta}</p>
          </div>
        ))}
      </div>
      <div className="card">
        <p className="result__tag">Revenue influenced — last 12 months</p>
        <div className="bars">
          {bars.map((h, i) => (
            <div className="bar" key={labels[i]}>
              <div className="bar__fill" style={{ height: h + "%" }} />
              <span className="bar__label">{labels[i]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Decisioning({ notify }) {
  return (
    <div>
      <PageHead
        eyebrow="Command center"
        title="Composable AI Decisioning"
        sub="Measure incremental lift at scale and let AI continuously improve which actions change customer outcomes."
      />
      <div className="card table-wrap">
        <table className="table">
          <thead>
            <tr>
              <th>Experiment</th>
              <th>Incremental lift</th>
              <th>Incremental revenue</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {DECISIONS.map((d) => (
              <tr
                key={d.campaign}
                className="clickable"
                onClick={() => notify(`${d.campaign}: ${d.lift} lift`)}
              >
                <td style={{ fontWeight: 600 }}>{d.campaign}</td>
                <td style={{ color: "var(--color-blue)", fontWeight: 600 }}>{d.lift}</td>
                <td>{d.revenue}</td>
                <td>
                  <Badge kind="ready">Winning</Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function DataManager({ notify }) {
  const [sources, setSources] = useState(SOURCES);
  function connect() {
    const hasUnconnected = sources.some((s) => !s.connected);
    if (hasUnconnected) {
      setSources(sources.map((s) => (s.connected ? s : { ...s, connected: true })));
      notify("Warehouse connected — syncing tables");
    } else {
      notify("All warehouses are already connected");
    }
  }
  return (
    <div>
      <PageHead
        eyebrow="Data"
        title="Data Manager"
        sub="Map your cloud data to GrowthLoop in minutes and keep everything updated with automated syncs."
        action={
          <button className="btn btn--primary" type="button" onClick={connect}>
            Connect warehouse
          </button>
        }
      />
      <div className="grid grid--3">
        {sources.map((s) => (
          <div
            className="integration clickable"
            key={s.name}
            onClick={() => {
              setSources(sources.map((x) => (x.name === s.name ? { ...x, connected: !x.connected } : x)));
              notify(s.connected ? `${s.name} disconnected` : `${s.name} connected`);
            }}
          >
            <div className="integration__logo">⛁</div>
            <div>
              <p className="integration__name">{s.name}</p>
              <p className="integration__meta">{s.meta}</p>
            </div>
            <Badge kind={s.connected ? "ready" : "syncing"}>
              {s.connected ? "Connected" : "Not connected"}
            </Badge>
          </div>
        ))}
      </div>
    </div>
  );
}

function Sources({ notify }) {
  return (
    <div>
      <PageHead
        eyebrow="Data"
        title="Sources"
        sub="All data warehouses — pull from Snowflake, BigQuery, Databricks and Redshift."
      />
      <div className="grid grid--4">
        {SOURCES.map((s) => (
          <div
            className="integration clickable"
            key={s.name}
            onClick={() => notify(`${s.name}: ${s.meta}`)}
          >
            <div className="integration__logo">⛁</div>
            <div>
              <p className="integration__name">{s.name}</p>
              <p className="integration__meta">{s.meta}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Destinations({ notify }) {
  return (
    <div>
      <PageHead
        eyebrow="Data"
        title="Destinations"
        sub="Activate across advertising, email, CRM and more from a single platform."
      />
      <div className="grid grid--4">
        {DESTINATIONS.map((d) => (
          <div
            className="integration clickable"
            key={d.name}
            onClick={() => notify(`${d.name}: ${d.meta}`)}
          >
            <div className="integration__logo">⇱</div>
            <div>
              <p className="integration__name">{d.name}</p>
              <p className="integration__meta">{d.meta}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Demo() {
  const [view, setView] = useState("ai");
  const [menuOpen, setMenuOpen] = useState(false);
  const [toast, setToast] = useState(null);
  const [query, setQuery] = useState("");

  const current = NAV.flatMap((s) => s.items).find((i) => i.id === view);

  function notify(message) {
    setToast(message);
    clearTimeout(notify._t);
    notify._t = setTimeout(() => setToast(null), 2600);
  }

  function newItem(target) {
    setMenuOpen(false);
    setView(target);
  }

  return (
    <div className="app">
      <nav className="sidebar" aria-label="Main navigation">
        <div className="sidebar__logo">
          <span className="logo__mark" aria-hidden="true" />
          <span>GrowthLoop</span>
        </div>

        {NAV.map((section) => (
          <div className="sidebar__section" key={section.label}>
            <p className="sidebar__label">{section.label}</p>
            {section.items.map((item) => (
              <button
                key={item.id}
                className={"nav-item" + (view === item.id ? " active" : "")}
                type="button"
                onClick={() => setView(item.id)}
              >
                <span className="ico">{item.icon}</span>
                <span>{item.name}</span>
              </button>
            ))}
          </div>
        ))}

        <div className="sidebar__footer">
          <div className="user">
            <span className="avatar">AM</span>
            <div>
              <p className="user__name">Alex Morgan</p>
              <p className="user__role">Growth marketer</p>
            </div>
          </div>
        </div>
      </nav>

      <main className="main">
        <div className="topbar">
          <span className="topbar__title">{current?.name || "GrowthLoop"}</span>
          <div className="topbar__spacer" />
          <div className="topbar__search">
            <span>⌕</span>
            <input
              type="text"
              placeholder="Search audiences, journeys…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className="dropdown">
            <button
              className="btn btn--primary"
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              + New
            </button>
            {menuOpen ? (
              <div className="dropdown__menu">
                <button type="button" onClick={() => newItem("audiences")}>
                  New audience
                </button>
                <button type="button" onClick={() => newItem("journeys")}>
                  New journey
                </button>
              </div>
            ) : null}
          </div>
        </div>

        <div className="content">
          {view === "ai" && <AIStudio onNavigate={setView} />}
          {view === "audiences" && <Audiences notify={notify} query={query} />}
          {view === "journeys" && <Journeys notify={notify} query={query} />}
          {view === "insights" && <Insights notify={notify} />}
          {view === "decisioning" && <Decisioning notify={notify} />}
          {view === "data" && <DataManager notify={notify} />}
          {view === "sources" && <Sources notify={notify} />}
          {view === "destinations" && <Destinations notify={notify} />}

          <footer className="footer">
            <span>GrowthLoop — agentic composable CDP</span>
            <span>Your data never leaves your cloud</span>
          </footer>
        </div>
      </main>

      {toast ? <div className="toast">{toast}</div> : null}
    </div>
  );
}
