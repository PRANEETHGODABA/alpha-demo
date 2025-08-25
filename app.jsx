const { useEffect, useState } = React;

function Icon({ name, className }) {
	return <i className={`ri-${name} ${className || ''}`}></i>;
}

function Header() {
	return (
		<header className="site-header">
			<div className="container nav">
				<div className="brand">
					<div className="logo"><Icon name="hexagon-fill" /></div>
					<span>Manogna Piragold India Pvt. Ltd.</span>
				</div>
				<nav>
					<a href="#legacy">About</a>
					<a href="#process">Process</a>
					<a href="#reports">Reports</a>
					<a href="#contact">Contact</a>
					<a href="#products" className="btn secondary" style={{marginLeft: 16}}>Our Products</a>
				</nav>
			</div>
		</header>
	);
}

function Hero() {
	return (
		<section className="hero">
			<div className="container hero-inner reveal">
				<div className="eyebrow">Quality is our Mantra</div>
				<h1>Premium Rubber Products, Engineered for the Future</h1>
				<p>Over two decades of excellence in quality, innovation, and sustainable manufacturing.</p>
				<div className="cta">
					<a className="btn"><Icon name="shopping-bag-3-fill"/> View Products</a>
					<a className="btn ghost"><Icon name="chat-3-line"/> Get Quote</a>
				</div>
			</div>
		</section>
	);
}

function Features() {
	const items = [
		{ icon: 'drop-fill', title: 'Pure Tyre Oil', text: 'Refined and unadulterated tyre oils that provide stable performance and longevity.' },
		{ icon: 'medal-2-fill', title: 'Quality', text: 'Consistent quality ensured by rigorous controls and world-class standards.' },
		{ icon: 'leaf-fill', title: 'Sustainable', text: 'Environment-friendly products that minimize emissions and reduce dependency on fossil fuels.' }
	];
	return (
		<section className="features" id="legacy">
			<div className="container">
				<h2 className="reveal">Why Our Product Is The Best</h2>
				<p className="reveal" style={{color:'var(--muted)'}}>Our team, quality control measures, and ethical business practices have earned us trust and appreciation from customers across industries.</p>
				<div className="grid feature-grid">
					{items.map((f, i) => (
						<div key={i} className="card reveal">
							<Icon name={f.icon} className="floaty" />
							<h3>{f.title}</h3>
							<p>{f.text}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

function Process() {
	return (
		<section className="process" id="process">
			<div className="container grid split">
				<div className="copy">
					<h2 className="reveal">Manufacturing Process</h2>
					<p className="reveal" style={{color:'var(--muted)'}}>
						Tyre Pyrolysis is the thermal decomposition of end-of-life tyres at elevated temperatures in the inert atmosphere. Our controlled continuous process maximizes oil yields and reduces waste.
					</p>
					<div className="grid kpi-grid">
						<div className="kpi reveal"><h4>2000+ MT</h4><p>Annual ELT Processed</p></div>
						<div className="kpi reveal"><h4>98.9%</h4><p>QC Pass Rate</p></div>
						<div className="kpi reveal"><h4>24/7</h4><p>Monitored Lines</p></div>
					</div>
				</div>
				<div className="image reveal">
					<img alt="Industrial plant" src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1600&auto=format&fit=crop" />
				</div>
			</div>
		</section>
	);
}

function ReportsBand() {
	return (
		<section className="cta-band" id="reports">
			<div className="container band-inner">
				<div>
					<h3>Access Our Latest Test Reports</h3>
					<p style={{color:'var(--muted)'}}>Comprehensive quality test reports and certifications that demonstrate our commitment to excellence.</p>
				</div>
				<a className="btn secondary"><Icon name="file-text-fill"/> View Reports</a>
			</div>
		</section>
	);
}

const initialForm = {
	firstName: '',
	lastName: '',
	company: 'Manogna Piragold India Pvt. Ltd.',
	email: '',
	phone: '',
	interest: 'Wholesale',
	message: '',
	consent: true
};

function Contact() {
	const [form, setForm] = useState(initialForm);
	const [errors, setErrors] = useState({});
	const [status, setStatus] = useState('idle'); // idle | sending | success | error

	function update(field, value) {
		setForm(prev => ({ ...prev, [field]: value }));
	}

	function validate() {
		const next = {};
		if (!form.firstName.trim()) next.firstName = 'First name is required';
		if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) next.email = 'Valid email required';
		if (form.phone && form.phone.replace(/\D/g, '').length < 7) next.phone = 'Enter a valid phone';
		if (!form.message.trim()) next.message = 'Tell us a bit about your needs';
		setErrors(next);
		return Object.keys(next).length === 0;
	}

	async function handleSubmit(e) {
		e.preventDefault();
		if (!validate()) return;
		setStatus('sending');
		try {
			// Simulate API call
			await new Promise(r => setTimeout(r, 1000));
			setStatus('success');
			setForm(initialForm);
		} catch (err) {
			console.error(err);
			setStatus('error');
		}
	}

	return (
		<section className="contact" id="contact">
			<div className="container grid contact-grid">
				<div className="panel reveal">
					<h2>Get in Touch</h2>
					<p style={{color:'var(--muted)'}}>We will get back to you as soon as we can. We look forward to hearing from you!</p>
					<div className="grid" style={{gridTemplateColumns:'1fr'}}>
						<div>
							<p><Icon name="map-pin-2-fill"/> Panchayatram, Visakhapatnam, Andhra Pradesh</p>
							<p><Icon name="phone-fill"/> +91 9848431365</p>
							<p><Icon name="mail-fill"/> info@manognapiragold.com</p>
						</div>
					</div>
				</div>
				<div className="panel reveal">
					<form className="contact-form" onSubmit={handleSubmit} noValidate>
						<div className="row">
							<div>
								<label>First name</label>
								<input className={`input ${errors.firstName ? 'error' : ''}`} value={form.firstName} onChange={e=>update('firstName', e.target.value)} placeholder="Anil"/>
								{errors.firstName && <div className="error-text">{errors.firstName}</div>}
							</div>
							<div>
								<label>Last name</label>
								<input className="input" value={form.lastName} onChange={e=>update('lastName', e.target.value)} placeholder="Kumar"/>
							</div>
						</div>

						<div className="row">
							<div>
								<label>Email</label>
								<input className={`input ${errors.email ? 'error' : ''}`} value={form.email} onChange={e=>update('email', e.target.value)} type="email" placeholder="you@company.com"/>
								{errors.email && <div className="error-text">{errors.email}</div>}
							</div>
							<div>
								<label>Phone</label>
								<input className={`input ${errors.phone ? 'error' : ''}`} value={form.phone} onChange={e=>update('phone', e.target.value)} placeholder="+91 9xxxxxxxxx"/>
								{errors.phone && <div className="error-text">{errors.phone}</div>}
							</div>
						</div>

						<div className="row">
							<div>
								<label>Company</label>
								<input className="input" value={form.company} onChange={e=>update('company', e.target.value)} placeholder="Company name"/>
							</div>
							<div>
								<label>Interest</label>
								<select value={form.interest} onChange={e=>update('interest', e.target.value)}>
									<option>Wholesale</option>
									<option>Retail</option>
									<option>Partnership</option>
									<option>Other</option>
								</select>
							</div>
						</div>

						<div>
							<label>Your message</label>
							<textarea className={`textarea ${errors.message ? 'error' : ''}`} value={form.message} onChange={e=>update('message', e.target.value)} placeholder="Share your requirements, volumes, or timeline."></textarea>
							{errors.message && <div className="error-text">{errors.message}</div>}
						</div>

						<div style={{display:'flex', alignItems:'center', gap:10}}>
							<input id="consent" type="checkbox" checked={form.consent} onChange={e=>update('consent', e.target.checked)} />
							<label htmlFor="consent" style={{color:'var(--muted)'}}>You may contact me about products and services.</label>
						</div>

						<div style={{display:'flex', gap:10, alignItems:'center', marginTop:12}}>
							<button className="btn" disabled={status==='sending'}>{status==='sending' ? 'Sending...' : 'Send Message'}</button>
							{status==='success' && <div className="success-text"><Icon name="checkbox-circle-fill"/> Sent! We will reply soon.</div>}
							{status==='error' && <div className="error-text">Something went wrong. Please try again.</div>}
						</div>
					</form>
				</div>
			</div>
		</section>
	);
}

function Footer() {
	return (
		<footer>
			<div className="container cols">
				<div>
					<div className="brand" style={{marginBottom: 12}}>
						<div className="logo"><Icon name="hexagon-fill"/></div>
						<strong>Manogna Piragold India Pvt. Ltd.</strong>
					</div>
					<p>Leading manufacturer of premium rubber products with a focus on sustainable processes and uncompromised quality.</p>
				</div>
				<div>
					<h4>Company</h4>
					<ul style={{listStyle:'none', padding:0, margin:0, lineHeight:'28px'}}>
						<li><a href="#legacy">About</a></li>
						<li><a href="#process">Manufacturing</a></li>
						<li><a href="#reports">Reports</a></li>
					</ul>
				</div>
				<div>
					<h4>Contact</h4>
					<ul style={{listStyle:'none', padding:0, margin:0, lineHeight:'28px'}}>
						<li>Panchayatram, Visakhapatnam</li>
						<li>+91 9848431365</li>
						<li>info@manognapiragold.com</li>
					</ul>
				</div>
			</div>
			<div className="container" style={{marginTop: 16, color:'var(--muted)'}}>
				<small>© {new Date().getFullYear()} Manogna Piragold India Pvt. Ltd. All rights reserved.</small>
			</div>
		</footer>
	);
}

function App() {
	useEffect(() => {
		// decorative: parallax mouse glow
		const hero = document.querySelector('.hero');
		function onMove(e) {
			const x = (e.clientX / window.innerWidth - 0.5) * 30;
			const y = (e.clientY / window.innerHeight - 0.5) * 30;
			hero.style.backgroundPosition = `${50 + x}% ${50 + y}%`;
		}
		hero?.addEventListener('pointermove', onMove);
		return () => hero?.removeEventListener('pointermove', onMove);
	}, []);

	return (
		<>
			<Header />
			<Hero />
			<Features />
			<Process />
			<ReportsBand />
			<Contact />
			<Footer />
		</>
	);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

