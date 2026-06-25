const { useState, useEffect } = React;

const navItems = [
  { key: "dashboard", label: "Dashboard", icon: "🏠" },
  { key: "investments", label: "Investments", icon: "💼" },
  { key: "members", label: "Members", icon: "👥" },
  { key: "analytics", label: "Analytics", icon: "📊" },
  { key: "updates", label: "Daily Update", icon: "📰" },
  { key: "transactions", label: "Transactions", icon: "💳" },
  { key: "settings", label: "Settings", icon: "⚙️" }
];

const defaultMembers = [
  { name: "Priya Sharma", email: "priya@financehub.com" },
  { name: "Rahul Patel", email: "rahul@financehub.com" },
  { name: "Sneha Rao", email: "sneha@financehub.com" }
];

const defaultInvestments = [
  { name: "Growth Plan A", amount: 54000 },
  { name: "Real Estate Trust", amount: 76000 },
  { name: "Equity Accelerator", amount: 32000 }
];

const defaultTransactions = [
  { name: "Priya Sharma", amount: 6800, type: "Income" },
  { name: "Rahul Patel", amount: 2450, type: "Expense" },
  { name: "Sneha Rao", amount: 15600, type: "Income" }
];

const defaultUpdates = [
  { title: "Market Pulse", description: "Stocks rose 1.8% on strong earnings across finance sectors." },
  { title: "New Member Onboarded", description: "A premium corporate client joined the Finance Hub advisory network." },
  { title: "Daily Portfolio Report", description: "Your crypto and equity allocations have been re-balanced successfully." }
];

const featureCards = [
  {
    title: "Explore Premium Plans",
    description: "Discover the right financial strategy for every stage of your business growth.",
    image: "https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Intelligent Analytics",
    description: "Track cash flow, asset allocation and member growth with powerful dashboards.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Secure Transactions",
    description: "Fast transaction recording and audit-ready logs for every financial move.",
    image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=900&q=80"
  }
];

function formatCurrency(value) {
  return "₹" + Number(value).toLocaleString();
}

function AuthScreen({ email, password, setEmail, setPassword, onSubmit, message }) {
  return (
    <div className="login-page">
      <div className="login-panel">
        <div className="login-copy">
          <span className="eyebrow">Finance Hub</span>
          <h1>Professional finance tools for modern businesses.</h1>
          <p>Login to manage investments, members, transactions, analytics, and daily updates in one secure dashboard.</p>
          <div className="feature-list">
            <div>
              <strong>Fast setup</strong>
              <p>Instant access with our secure login engine.</p>
            </div>
            <div>
              <strong>Live analytics</strong>
              <p>Decision-ready charts and trends for every team.</p>
            </div>
          </div>
        </div>

        <div className="login-card">
          <h2>Welcome back</h2>
          <p>Enter your account credentials to continue.</p>

          <form onSubmit={onSubmit} className="login-form">
            <label>
              Email address
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="admin@gmail.com" required />
            </label>
            <label>
              Password
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" required />
            </label>
            <button type="submit">Login</button>
            {message && <p className="form-message">{message}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}

function Navigation({ active, onNavigate, onLogout, user }) {
  return (
    <aside className="side-nav">
      <div className="brand-panel">
        <div className="brand-mark">FH</div>
        <div>
          <h2>Finance Hub</h2>
          <p>{user?.email || "Secure finance platform"}</p>
        </div>
      </div>

      <nav>
        {navItems.map((item) => (
          <button key={item.key} className={active === item.key ? "nav-link active" : "nav-link"} onClick={() => onNavigate(item.key)}>
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <button className="nav-logout" onClick={onLogout}>
        🚪 Logout
      </button>
    </aside>
  );
}

function DashboardSection({ members, investments, transactions, updates }) {
  const totalInvestment = investments.reduce((sum, item) => sum + item.amount, 0);
  const totalTransactions = transactions.reduce((sum, transaction) => sum + transaction.amount, 0);
  return (
    <section className="page-section">
      <div className="section-hero">
        <div>
          <span className="eyebrow">Welcome back</span>
          <h1>See every financial signal in one place.</h1>
          <p>Finance Hub helps you track growth, manage capital, and stay up to date on every transaction.</p>
        </div>
        <div className="hero-cards">
          {featureCards.map((card) => (
            <article key={card.title} className="hero-card">
              <img src={card.image} alt={card.title} />
              <div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="stat-grid">
        <article className="stat-card">
          <span>Total Members</span>
          <h2>{members.length}</h2>
        </article>
        <article className="stat-card">
          <span>Investment Value</span>
          <h2>{formatCurrency(totalInvestment)}</h2>
        </article>
        <article className="stat-card">
          <span>Recent Transactions</span>
          <h2>{transactions.length}</h2>
        </article>
        <article className="stat-card">
          <span>Daily Updates</span>
          <h2>{updates.length}</h2>
        </article>
      </div>

      <div className="explore-panel">
        <div>
          <h3>Growth & exploration</h3>
          <p>Dedicated insight panels with industry visuals and modern finance storytelling for your business presentation.</p>
        </div>
        <div className="explore-list">
          <article>
            <h4>Member discovery</h4>
            <p>View profiles, track onboarding, and keep your advisory community active.</p>
          </article>
          <article>
            <h4>Portfolio health</h4>
            <p>Manage asset allocation, cash flow, and risk with vivid performance data.</p>
          </article>
          <article>
            <h4>Daily market beats</h4>
            <p>Stay ahead with headline updates and finance alerts tailored for executives.</p>
          </article>
        </div>
      </div>
    </section>
  );
}

function InvestmentsSection({ investments, onAdd, onDelete }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  function submitInvestment(event) {
    event.preventDefault();
    if (!name || !amount) return;
    onAdd({ name, amount: Number(amount) });
    setName("");
    setAmount("");
  }

  return (
    <section className="page-section">
      <header className="page-header">
        <div>
          <span className="eyebrow">Investments</span>
          <h2>Powerful investment management.</h2>
          <p>Track each capital allocation and measure performance in a structured portfolio view.</p>
        </div>
      </header>

      <div className="form-grid">
        <form className="panel-card" onSubmit={submitInvestment}>
          <h3>Add new investment</h3>
          <label>
            Plan name
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Growth Plan A" required />
          </label>
          <label>
            Amount
            <input type="number" min="0" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="54000" required />
          </label>
          <button type="submit">Add investment</button>
        </form>

        <div className="panel-card">
          <h3>Current investments</h3>
          <ul className="list-card">
            {investments.length === 0 ? (
              <li className="empty-state">No investments yet. Add one to start.</li>
            ) : (
              investments.map((investment, index) => (
                <li key={index}>
                  <div>
                    <strong>{investment.name}</strong>
                    <span>{formatCurrency(investment.amount)}</span>
                  </div>
                  <button className="small-button" onClick={() => onDelete(index)}>Delete</button>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}

function MembersSection({ members, onAdd, onDelete, onSearch }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function submitMember(event) {
    event.preventDefault();
    if (!name || !email) return;
    onAdd({ name, email });
    setName("");
    setEmail("");
  }

  return (
    <section className="page-section">
      <header className="page-header">
        <div>
          <span className="eyebrow">Members</span>
          <h2>Manage growth and member engagement.</h2>
          <p>Keep member records tidy, searchable, and ready for fast follow-up.</p>
        </div>
      </header>

      <div className="form-grid">
        <form className="panel-card" onSubmit={submitMember}>
          <h3>Add a new member</h3>
          <label>
            Full name
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Rahul Patel" required />
          </label>
          <label>
            Email address
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="rahul@example.com" required />
          </label>
          <button type="submit">Add member</button>
        </form>

        <div className="panel-card">
          <div className="panel-heading">
            <h3>Members list</h3>
            <input className="search-input" onChange={(e) => onSearch(e.target.value)} placeholder="Search members..." />
          </div>
          <ul className="list-card">
            {members.length === 0 ? (
              <li className="empty-state">No members found yet.</li>
            ) : (
              members.map((member, index) => (
                <li key={index}>
                  <div>
                    <strong>{member.name}</strong>
                    <span>{member.email}</span>
                  </div>
                  <button className="small-button" onClick={() => onDelete(index)}>Remove</button>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}

function AnalyticsSection({ members, investments, transactions }) {
  const monthlyTotal = investments.reduce((sum, item) => sum + item.amount, 0);
  const membersTrend = members.length * 12 + 80;
  return (
    <section className="page-section">
      <header className="page-header">
        <div>
          <span className="eyebrow">Analytics</span>
          <h2>Insight dashboards for fast decisions.</h2>
          <p>Explore charts that show member growth, investment velocity, and transaction flow.</p>
        </div>
      </header>

      <div className="stat-grid">
        <article className="stat-card">
          <span>Monthly volume</span>
          <h2>{formatCurrency(monthlyTotal)}</h2>
        </article>
        <article className="stat-card">
          <span>Members active</span>
          <h2>{members.length}</h2>
        </article>
        <article className="stat-card">
          <span>Transaction value</span>
          <h2>{formatCurrency(transactions.reduce((sum, item) => sum + item.amount, 0))}</h2>
        </article>
        <article className="stat-card">
          <span>Growth forecast</span>
          <h2>{membersTrend}%</h2>
        </article>
      </div>

      <div className="analytics-charts">
        <div className="chart-card">
          <h4>Member growth</h4>
          <div className="bar-chart">
            {[80, 95, 100, 85, 110, membersTrend].map((value, index) => (
              <div key={index} style={{ height: `${value}%` }} title={`${value}%`} />
            ))}
          </div>
        </div>

        <div className="chart-card">
          <h4>Investment velocity</h4>
          <div className="sparkline">
            <span style={{ width: "15%" }} />
            <span style={{ width: "42%" }} />
            <span style={{ width: "30%" }} />
            <span style={{ width: "65%" }} />
            <span style={{ width: "55%" }} />
            <span style={{ width: "80%" }} />
          </div>
        </div>
      </div>
    </section>
  );
}

function UpdatesSection({ updates, onAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function submitUpdate(event) {
    event.preventDefault();
    if (!title || !description) return;
    onAdd({ title, description });
    setTitle("");
    setDescription("");
  }

  return (
    <section className="page-section">
      <header className="page-header">
        <div>
          <span className="eyebrow">Daily updates</span>
          <h2>Fast news, alerts and operational notes.</h2>
          <p>Keep the whole team aligned with quick daily summaries and market pulse updates.</p>
        </div>
      </header>

      <div className="form-grid">
        <form className="panel-card" onSubmit={submitUpdate}>
          <h3>Share a new update</h3>
          <label>
            Title
            <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Market Pulse" required />
          </label>
          <label>
            Description
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Add your headline or operational note." rows="5" required />
          </label>
          <button type="submit">Publish update</button>
        </form>

        <div className="panel-card">
          <h3>Recent daily updates</h3>
          <ul className="list-card">
            {updates.map((update, index) => (
              <li key={index}>
                <div>
                  <strong>{update.title}</strong>
                  <span>{update.description}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function TransactionsSection({ transactions, onAdd, onDelete }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("Income");

  function submitTransaction(event) {
    event.preventDefault();
    if (!name || !amount) return;
    onAdd({ name, amount: Number(amount), type });
    setName("");
    setAmount("");
  }

  return (
    <section className="page-section">
      <header className="page-header">
        <div>
          <span className="eyebrow">Transactions</span>
          <h2>Track every payment and receipt.</h2>
          <p>Maintain audit-ready transaction history with clear categories and totals.</p>
        </div>
      </header>

      <div className="form-grid">
        <form className="panel-card" onSubmit={submitTransaction}>
          <h3>Add transaction</h3>
          <label>
            Member name
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Sneha Rao" required />
          </label>
          <label>
            Amount
            <input type="number" min="0" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="15600" required />
          </label>
          <label>
            Type
            <select value={type} onChange={(e) => setType(e.target.value)}>
              <option>Income</option>
              <option>Expense</option>
            </select>
          </label>
          <button type="submit">Add transaction</button>
        </form>

        <div className="panel-card">
          <h3>Transaction history</h3>
          <ul className="list-card">
            {transactions.length === 0 ? (
              <li className="empty-state">No transactions recorded.</li>
            ) : (
              transactions.map((transaction, index) => (
                <li key={index}>
                  <div>
                    <strong>{transaction.name}</strong>
                    <span>{transaction.type} • {formatCurrency(transaction.amount)}</span>
                  </div>
                  <button className="small-button" onClick={() => onDelete(index)}>Remove</button>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}

function SettingsSection({ user, onLogout }) {
  return (
    <section className="page-section">
      <header className="page-header">
        <div>
          <span className="eyebrow">Settings</span>
          <h2>Control account and interface preferences.</h2>
          <p>Update login details, switch themes, and keep your Finance Hub configuration secure.</p>
        </div>
      </header>

      <div className="settings-grid">
        <div className="panel-card">
          <h3>Account</h3>
          <p><strong>Email</strong></p>
          <p>{user?.email || "admin@financehub.com"}</p>
        </div>

        <div className="panel-card">
          <h3>Theme</h3>
          <p>Finance Hub is optimized for rich dark mode, with smooth animations and responsive panels.</p>
        </div>

        <div className="panel-card">
          <h3>Security</h3>
          <p>Use secure tokens, strong passwords, and continuous session protection for sensitive financial data.</p>
          <button className="secondary-button" onClick={onLogout}>Sign out securely</button>
        </div>
      </div>
    </section>
  );
}

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authMessage, setAuthMessage] = useState("");
  const [user, setUser] = useState(null);
  const [activePage, setActivePage] = useState("dashboard");
  const [members, setMembers] = useState(() => JSON.parse(localStorage.getItem("financehub_members")) || defaultMembers);
  const [investments, setInvestments] = useState(() => JSON.parse(localStorage.getItem("financehub_investments")) || defaultInvestments);
  const [transactions, setTransactions] = useState(() => JSON.parse(localStorage.getItem("financehub_transactions")) || defaultTransactions);
  const [updates, setUpdates] = useState(() => JSON.parse(localStorage.getItem("financehub_updates")) || defaultUpdates);
  const [filteredMembers, setFilteredMembers] = useState(members);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("financehub_token");
    if (!token) {
      setLoading(false);
      return;
    }

    fetch("/api/auth/profile", {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setUser(data.user);
        }
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    localStorage.setItem("financehub_members", JSON.stringify(members));
    setFilteredMembers(members);
  }, [members]);

  useEffect(() => {
    localStorage.setItem("financehub_investments", JSON.stringify(investments));
  }, [investments]);

  useEffect(() => {
    localStorage.setItem("financehub_transactions", JSON.stringify(transactions));
  }, [transactions]);

  useEffect(() => {
    localStorage.setItem("financehub_updates", JSON.stringify(updates));
  }, [updates]);

  function handleLogin(e) {
    e.preventDefault();
    setAuthMessage("Connecting...");

    fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          localStorage.setItem("financehub_token", data.token);
          setUser({ email });
          setAuthMessage("");
          setEmail("");
          setPassword("");
        } else {
          setAuthMessage(data.message || "Invalid credentials");
        }
      })
      .catch(() => {
        setAuthMessage("API not available. Use admin@gmail.com / 12345 or start the backend server.");
      });
  }

  function handleLogout() {
    localStorage.removeItem("financehub_token");
    setUser(null);
    setActivePage("dashboard");
  }

  function addInvestment(item) {
    setInvestments((prev) => [item, ...prev]);
  }

  function deleteInvestment(index) {
    setInvestments((prev) => prev.filter((_, idx) => idx !== index));
  }

  function addMember(member) {
    setMembers((prev) => [member, ...prev]);
  }

  function deleteMember(index) {
    setMembers((prev) => prev.filter((_, idx) => idx !== index));
  }

  function addTransaction(record) {
    setTransactions((prev) => [record, ...prev]);
  }

  function deleteTransaction(index) {
    setTransactions((prev) => prev.filter((_, idx) => idx !== index));
  }

  function addUpdate(update) {
    setUpdates((prev) => [update, ...prev]);
  }

  function searchMember(query) {
    const normalized = query.toLowerCase();
    setFilteredMembers(members.filter((member) => member.name.toLowerCase().includes(normalized) || member.email.toLowerCase().includes(normalized)));
  }

  if (loading) {
    return <div className="loading-screen"><div className="spinner" /></div>;
  }

  if (!user) {
    return <AuthScreen email={email} password={password} setEmail={setEmail} setPassword={setPassword} onSubmit={handleLogin} message={authMessage} />;
  }

  return (
    <div className="app-shell">
      <Navigation active={activePage} onNavigate={setActivePage} onLogout={handleLogout} user={user} />
      <main className="app-content">
        {activePage === "dashboard" && <DashboardSection members={members} investments={investments} transactions={transactions} updates={updates} />}
        {activePage === "investments" && <InvestmentsSection investments={investments} onAdd={addInvestment} onDelete={deleteInvestment} />}
        {activePage === "members" && <MembersSection members={filteredMembers} onAdd={addMember} onDelete={deleteMember} onSearch={searchMember} />}
        {activePage === "analytics" && <AnalyticsSection members={members} investments={investments} transactions={transactions} />}
        {activePage === "updates" && <UpdatesSection updates={updates} onAdd={addUpdate} />}
        {activePage === "transactions" && <TransactionsSection transactions={transactions} onAdd={addTransaction} onDelete={deleteTransaction} />}
        {activePage === "settings" && <SettingsSection user={user} onLogout={handleLogout} />}
      </main>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
