import './styles/index.css'
import './styles/fonts.css'
import './styles/contact.css'

import { IoMail } from "react-icons/io5";
import { Helmet } from 'react-helmet-async'
import { TextAnimate } from './components/ui/text-animate';
import { AnimatedList } from "@/components/ui/animated-list"
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import headshot from './assets/media/headshot-3.png'
// import headshot from './assets/media/headshot.png'

import { useState, type ChangeEvent, type FormEvent } from "react";

function App() {

	const initial = { fullName: "", company: "", email: "", message: "" };
	const [form, setForm] = useState(initial);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
		setForm({ ...form, [e.target.name]: e.target.value });

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(form); // swap for your API call
		setForm(initial);
	};

	const skillset = [
		"Microsoft Office Suite",
		"Google Workspace",
		"Meta Business Suite",
		"Zoho Suite",
		"Slack",
		"Zoom",
		"Calendly",
		"HubSpot",
		"Salesforce",
		"Notion",
		"Canva",
		"Xero",
		"Monday.com",
		"DocuSign",
		"SharePoint",
		"Airtable",
		"Dropbox",
		"Zendesk",
		"Zapier",
		"Asana",
		"QuickBooks",
		"Trello",
		"Loom",
		"Clockify",
		"1Password"
	];

	const experience = [
		{
			title: "Assistant to Head of HR",
			company: "Tectura Global",
			industry: "Architecture",
			start: "04 February 2026",
			end: null,
			duties: [
				"Assist with B-BBEE research, compliance documentation and reporting",
				"Research potential corporate partners, clients, sponsors and bursary providers",
				"Support skills development initiatives and identify employee training opportunities",
				"Maintain and update staff development records and administrative databases",
				"Assist with sourcing strategic corporate partnerships and skills development opportunities",
				"Support HR reporting, documentation and general administrative functions",
				"Collaborate with HR and Operations on CSR programmes, including planning, research and coordination"
			],
			summary: "I support HR, Operations and broader business development initiatives through research & administrative coordination. Everything you need, now or in the future, I make available.. I maintain employee records, updating company asset registers covering vehicles, mobile devices, tools, equipment and IT infrastructure, ensuring accurate records, monitoring and reporting. Additionally, I contribute to internal database management & procurement tracking."
		}
	]

	return (<>
		<Helmet>
			<meta charSet="utf-8" />
			<link rel="icon" type="image/x-icon" href="/favicon.png" />
			<title>Executive Virtual Assistant - Rhulani Kgosi Mogotsi</title>
		</Helmet>
		<div className='root-container'>
			<nav className='site-section'>
				<div className="nav-title">
					<TextAnimate animation="slideUp" by="line" as="h1" className='site-heading'>
						Rhulani Mogotsi
					</TextAnimate>
					<TextAnimate animation="slideUp" by="line" as="h3" className='site-heading'>
						Executive Virtual Assistant
					</TextAnimate>
				</div>
				<div className="nav-actions">
					<ul className="social-links">
						<li>
							<a href="https://www.linkedin.com/in/rhulanikgosimogotsi" target="_blank" rel="noopener noreferrer">
								<FaLinkedinIn />
							</a>
						</li>
						<li>
							<a href="https://github.com/your-handle" target="_blank" rel="noopener noreferrer">
								<FaGithub />
							</a>
						</li>
						<li>
							<a href="https://x.com/your-handle" target="_blank" rel="noopener noreferrer">
								<FaTwitter />
							</a>
						</li>
						<li>
							<a href="mailto:you@example.com">
								<IoMail />
							</a>
						</li>
						</ul>
					<a href="" id="resume" target='_blank'>
						My Resume
					</a>
				</div>
			</nav>
			<div id="intro" className='site-section'>
				<TextAnimate animation="slideUp" by="line" as="h2" className='site-heading'>
					{`Self Managing,\nDetail Oriented,\nVirtual Assistant`}
				</TextAnimate>
				<p className='description'>
					A dependable virtual assistant based in Sandton, South Africa. 
					I boast strong organizational skills, timely delivery, and 
					operational efficiency. I excel in remote task management, 
					calendar scheduling and producing detail-oriented deliverables... <span>Every Time.</span>
				</p>
			</div>
			<div id="headshot" className="site-section">
				<img src={headshot} alt="Rhulani Kgosi Mogotsi, Executive Assistant" />
			</div>
			<div id="experience" className="site-section">
				<h2 className="site-heading">My Experience</h2>
				<AnimatedList>
					{experience.map((item, idx) => (
						<div className="card" key={idx}>
							<h3 className='exp-title'>
								{item.title}
							</h3>
							<p className="exp-company">
								{item.company} • {item.industry}
							</p>
							<ul className="exp-duties">
								{item.duties.map((duty, idx) => (
									<li key={idx}>{duty}</li>
								))}
							</ul>
							<p className="exp-summary">
								{item.summary}
							</p>
							<p className="exp-time">
								<span className="start">{item.start} </span>
								-
								<span className="end"> {item.end ? `${item.end}` : "Present"}</span>
							</p>
						</div>
					))}
				</AnimatedList>
			</div>
			<div id="contact" className="site-section">
				<h2 className="site-heading">Contact Me</h2>
				    <form className="contact-form" onSubmit={handleSubmit}>
						<div className="form-block name">
							<label htmlFor="name">Name</label>
							<input
							id="fullName"
							type="text"
							name="fullName"
							value={form.fullName}
							onChange={handleChange}
							placeholder='Name'
							required
							/>
						</div>

						<div className="form-block company">
							<label htmlFor="company">Company</label>
							<input
							id="company"
							type="text"
							name="company"
							value={form.company}
							onChange={handleChange}
							placeholder='Company'
							/>
						</div>

						<div className="form-block email">
							<label htmlFor="email">Email Address</label>
							<input
							id="email"
							type="email"
							name="email"
							value={form.email}
							onChange={handleChange}
							required
							placeholder='Email'
							/>
						</div>

						<div className="form-block message">
							<label htmlFor="message">Message</label>
							<textarea
							id="message"
							name="message"
							rows={4}
							value={form.message}
							// onChange={handleChange}
							required
							placeholder='Anything I should know?'
							/>
						</div>
						<div className="form-block submit">
							<button type="submit">Send Message</button>
						</div>
						</form>
			</div>
			<div id="skillset" className="site-section">
				<h2 className="site-heading">My Skills</h2>
				<div className="skills-container">
					{skillset.map((skill, idx) => (
						<span key={idx}>{skill}</span>
					))}
				</div>
			</div>
		</div>
  </>)
}

export default App
