import React, { useState, useEffect } from "react";
import {
  Mail, Linkedin, Download, ChevronDown, GraduationCap,Hotel, Users, Building, Star, Calendar,
  MapPin, Coffee, Shield, Trophy, Menu, X,
} from "lucide-react";

const FontStyle = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Montserrat:wght@300;400;500;600&display=swap');

    :root {
      --gold: #C9A84C;
      --gold-light: #E8C97A;
      --gold-dark: #8B6914;
      --cream: #F5F0E8;
      --ink: #0D0D0D;
      --charcoal: #1A1A1A;
      --warm-gray: #2A2520;
      --muted: #8A7F72;
      --card-bg: rgba(20,18,15,0.85);
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { background: var(--ink); color: var(--cream); font-family: 'Montserrat', sans-serif; }
    .font-display { font-family: 'Cormorant Garamond', serif; }

    .gold-rule { width: 60px; height: 1px; background: linear-gradient(90deg, transparent, var(--gold), transparent); }

    .reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.8s ease, transform 0.8s ease; }
    .reveal.visible { opacity: 1; transform: translateY(0); }
    .reveal-d1 { transition-delay: 0.1s; }
    .reveal-d2 { transition-delay: 0.2s; }
    .reveal-d3 { transition-delay: 0.3s; }

    .gold-card {
      background: var(--card-bg);
      border: 1px solid rgba(201,168,76,0.18);
      backdrop-filter: blur(20px);
      transition: border-color 0.4s ease, transform 0.4s ease, box-shadow 0.4s ease;
    }
    .gold-card:hover {
      border-color: rgba(201,168,76,0.5);
      transform: translateY(-4px);
      box-shadow: 0 24px 64px rgba(0,0,0,0.5), 0 0 40px rgba(201,168,76,0.05);
    }

    .nav-link {
      position: relative; font-size: 0.72rem; letter-spacing: 0.14em;
      text-transform: uppercase; color: var(--muted);
      transition: color 0.3s; padding-bottom: 3px;
      background: none; border: none; cursor: pointer;
    }
    .nav-link::after {
      content: ''; position: absolute; bottom: 0; left: 0;
      width: 0; height: 1px; background: var(--gold);
      transition: width 0.35s ease;
    }
    .nav-link:hover, .nav-link.active { color: var(--gold-light); }
    .nav-link:hover::after, .nav-link.active::after { width: 100%; }

    .hero-name {
      font-family: 'Cormorant Garamond', serif; font-weight: 300; letter-spacing: 0.04em; line-height: 1.05;
      background: linear-gradient(135deg, #F5F0E8 0%, #C9A84C 45%, #F5F0E8 100%);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
    }

    .gold-btn {
      border: 1px solid var(--gold); color: var(--gold-light);
      background: transparent; letter-spacing: 0.12em; text-transform: uppercase;
      font-size: 0.72rem; font-weight: 500; transition: all 0.35s ease;
      position: relative; overflow: hidden; cursor: pointer;
    }
    .gold-btn::before {
      content: ''; position: absolute; inset: 0;
      background: var(--gold); transform: translateX(-101%); transition: transform 0.35s ease;
    }
    .gold-btn:hover { color: var(--ink); }
    .gold-btn:hover::before { transform: translateX(0); }
    .gold-btn-inner { position: relative; z-index: 1; display: flex; align-items: center; gap: 10px; }

    .section-label { font-size: 0.64rem; letter-spacing: 0.28em; text-transform: uppercase; color: var(--gold); font-weight: 500; }

    .skill-pill {
      border: 1px solid rgba(201,168,76,0.2); background: rgba(201,168,76,0.04);
      transition: all 0.35s ease; cursor: default;
    }
    .skill-pill:hover { border-color: var(--gold); background: rgba(201,168,76,0.1); }

    .section-divider { border: none; height: 1px; background: linear-gradient(90deg, transparent, rgba(201,168,76,0.25), transparent); }

    .cert-img-wrap { position: relative; height: 180px; overflow: hidden; background: var(--warm-gray); }
    .cert-img-wrap img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease; }
    .cert-img-wrap:hover img { transform: scale(1.06); }
    .cert-overlay { position: absolute; inset: 0; background: linear-gradient(180deg, transparent 40%, rgba(13,13,13,0.85) 100%); }

    .contact-link {
      display: inline-flex; align-items: center; gap: 10px;
      padding: 14px 32px; border: 1px solid rgba(201,168,76,0.35); border-radius: 2px;
      color: var(--cream); font-size: 0.75rem; letter-spacing: 0.12em; text-transform: uppercase;
      text-decoration: none; transition: all 0.3s ease;
    }
    .contact-link:hover { background: rgba(201,168,76,0.08); border-color: var(--gold); }

    @keyframes floatSlow { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
    .float-slow { animation: floatSlow 6s ease-in-out infinite; }

    @keyframes goldPulse { 0%,100% { opacity: 0.4; transform: scale(1); } 50% { opacity: 0.7; transform: scale(1.02); } }

    ::-webkit-scrollbar { width: 3px; }
    ::-webkit-scrollbar-track { background: var(--ink); }
    ::-webkit-scrollbar-thumb { background: var(--gold-dark); }

    @media (max-width: 768px) {
      .about-grid { grid-template-columns: 1fr !important; }
      .about-left { border-right: none !important; border-bottom: 1px solid rgba(201,168,76,0.15); padding-right: 0 !important; padding-bottom: 32px; }
      .timeline-icon { display: none !important; }
      .exp-header { flex-direction: column !important; }
    }
  `}</style>
);

/* ─── EXPERIENCES — add entries here ─────────────────────── */
const EXPERIENCES = [
  {
    title: "Internship",
    company: "Hyatt Regency Lucknow",
    period: "January 2023 – June 2023",
    duration: "6 months",
    location: "Lucknow, Uttar Pradesh",
    icon: Hotel,
    highlights: [
      { icon: Users,  text: "Collaborated with Hyatt Regency team on daily front office and hospitality operations." },
      { icon: Trophy, text: "Managed high-profile IPL events at Ekana Cricket Stadium." },
      { icon: Star,   text: "Gained comprehensive hands-on experience across luxury hotel departments." },
      { icon: Shield, text: "Developed strong skills in guest relations and large-scale event coordination." },
    ],
  },
  {
    title: "Food & Beverage Associate",
    company: "Current Position",
    period: "August 2025 – Present",
    duration: "Ongoing",
    location: "Lucknow, Uttar Pradesh",
    icon: Coffee,
    highlights: [
      { icon: Star,  text: "Delivering exceptional guest service by addressing customer needs promptly and ensuring a positive dining experience." },
      { icon: Users, text: "Overseeing daily restaurant operations, coordinating with kitchen and service staff to maintain smooth and efficient workflow." },
    ],
  },
];

/* ─── Reveal hook ─────────────────────────────────────────── */
const useReveal = () => {
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
};

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useReveal();

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 60);
      const ids = ["home","about","education","experience","skills","certifications","contact"];
      const nearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 120;
      if (nearBottom) { setActiveSection("contact"); return; }
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && el.getBoundingClientRect().top <= 160) { setActiveSection(ids[i]); return; }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = id => { document.getElementById(id)?.scrollIntoView({ behavior:"smooth", block:"start" }); setMobileOpen(false); };
  const dlResume = () => { const a = document.createElement("a"); a.href="/resume/Siddharth Resume.pdf"; a.download="Siddharth Resume.pdf"; a.click(); };
  const dlCert = name => { const a = document.createElement("a"); a.href=`/certificates/${name}.pdf`; a.download=`${name}.pdf`; a.click(); };

  const navItems = ["Home","About","Education","Experience","Skills","Certifications","Contact"];

  const S = { /* inline style helpers */
    page: { minHeight:"100vh", position:"relative", background:"var(--ink)" },
    bgFixed: { position:"fixed", inset:0, zIndex:0, pointerEvents:"none" },
    nav: {
      position:"fixed", top:0, width:"100%", zIndex:50, transition:"all 0.4s ease",
      background: isScrolled ? "rgba(10,9,8,0.96)" : "transparent",
      backdropFilter: isScrolled ? "blur(24px)" : "none",
      borderBottom: isScrolled ? "1px solid rgba(201,168,76,0.12)" : "none",
    },
    navInner: { maxWidth:"1200px", margin:"0 auto", padding:"0 28px" },
    navRow: { display:"flex", justifyContent:"space-between", alignItems:"center", height:"72px" },
    logo: { cursor:"pointer" },
    logoName: { fontFamily:"'Cormorant Garamond', serif", fontSize:"1.45rem", fontWeight:300, letterSpacing:"0.08em", color:"var(--cream)" },
    logoSub: { fontSize:"0.58rem", letterSpacing:"0.3em", textTransform:"uppercase", color:"var(--muted)", marginTop:"2px" },
    desktopNav: { display:"flex", gap:"36px", alignItems:"center" },
    mobileBtn: { background:"none", border:"1px solid rgba(201,168,76,0.3)", borderRadius:"3px", padding:"8px", color:"var(--gold)", cursor:"pointer" },
    mobileDrop: { background:"rgba(10,9,8,0.97)", backdropFilter:"blur(30px)", borderTop:"1px solid rgba(201,168,76,0.15)", padding:"12px 0" },
    mobileLink: { display:"block", width:"100%", textAlign:"left", padding:"12px 0" },
    hero: { minHeight:"100vh", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", position:"relative", zIndex:10, padding:"80px 24px 60px" },
    sec: { padding:"120px 24px", position:"relative", zIndex:10 },
    inner: { maxWidth:"900px", margin:"0 auto" },
    secHead: { textAlign:"center", marginBottom:"64px" },
    secTitle: { fontFamily:"'Cormorant Garamond', serif", fontSize:"clamp(2rem,5vw,3.2rem)", fontWeight:300, color:"var(--cream)", marginTop:"12px", marginBottom:"16px" },
    iconBox: { width:"60px", height:"60px", border:"1px solid rgba(201,168,76,0.35)", borderRadius:"2px", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, background:"rgba(201,168,76,0.03)" },
  };

  return (
    <>
      <FontStyle />
      <div style={S.page}>

        {/* BG */}
        <div style={S.bgFixed}>
          <div style={{position:"absolute",top:"-5%",right:"-5%",width:"600px",height:"600px",borderRadius:"50%",background:"radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 70%)"}}/>
          <div style={{position:"absolute",bottom:"10%",left:"-8%",width:"500px",height:"500px",borderRadius:"50%",background:"radial-gradient(circle, rgba(201,168,76,0.03) 0%, transparent 70%)"}}/>
          <div style={{position:"absolute",inset:0,backgroundImage:"linear-gradient(rgba(201,168,76,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.035) 1px, transparent 1px)",backgroundSize:"80px 80px"}}/>
          {[{t:"80px",l:"36px",bt:"none",br:"none",bb:"none",bTop:"1px solid rgba(201,168,76,0.18)",bLeft:"1px solid rgba(201,168,76,0.18)"},
            {t:"80px",r:"36px",bt:"none",bl:"none",bb:"none",bTop:"1px solid rgba(201,168,76,0.18)",bRight:"1px solid rgba(201,168,76,0.18)"},
            {b:"36px",l:"36px",bBot:"1px solid rgba(201,168,76,0.18)",bLeft:"1px solid rgba(201,168,76,0.18)"},
            {b:"36px",r:"36px",bBot:"1px solid rgba(201,168,76,0.18)",bRight:"1px solid rgba(201,168,76,0.18)"},
          ].map((c,i) => (
            <div key={i} style={{position:"absolute",top:c.t,bottom:c.b,left:c.l,right:c.r,width:"56px",height:"56px",borderTop:c.bTop,borderLeft:c.bLeft,borderBottom:c.bBot,borderRight:c.bRight}}/>
          ))}
        </div>

        {/* NAV */}
        <nav style={S.nav}>
          <div style={S.navInner}>
            <div style={S.navRow}>
              <div style={S.logo} onClick={() => go("home")}>
                <div style={S.logoName}>Siddharth <span style={{color:"var(--gold)"}}>Verma</span></div>
                <div style={S.logoSub}>Hospitality Professional</div>
              </div>
              <div className="hidden md:flex" style={S.desktopNav}>
                {navItems.map(item => (
                  <button key={item} onClick={() => go(item.toLowerCase())} className={`nav-link ${activeSection===item.toLowerCase()?"active":""}`}>{item}</button>
                ))}
              </div>
              <button className="md:hidden" style={S.mobileBtn} onClick={() => setMobileOpen(!mobileOpen)}>
                {mobileOpen ? <X size={17}/> : <Menu size={17}/>}
              </button>
            </div>
            {mobileOpen && (
              <div className="md:hidden" style={S.mobileDrop}>
                {navItems.map(item => (
                  <button key={item} onClick={() => go(item.toLowerCase())} className={`nav-link ${activeSection===item.toLowerCase()?"active":""}`} style={S.mobileLink}>{item}</button>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* ── HERO ── */}
        <section id="home" style={S.hero}>
          <div className="float-slow" style={{position:"relative",marginBottom:"52px"}}>
            <div style={{position:"absolute",inset:"-18px",borderRadius:"50%",border:"1px solid rgba(201,168,76,0.18)"}}/>
            <div style={{position:"absolute",inset:"-36px",borderRadius:"50%",border:"1px solid rgba(201,168,76,0.07)"}}/>
            <div style={{width:"176px",height:"176px",borderRadius:"50%",background:"linear-gradient(145deg, #C9A84C, #8B6914, #C9A84C)",padding:"2px"}}>
              <div style={{width:"100%",height:"100%",borderRadius:"50%",overflow:"hidden",background:"var(--charcoal)"}}>
                <img src="/images/Me.png" alt="Siddharth Verma" style={{width:"100%",height:"100%",objectFit:"cover"}}
                  onError={e => { e.target.style.display="none"; e.target.nextSibling.style.display="flex"; }}/>
                <div style={{display:"none",width:"100%",height:"100%",background:"linear-gradient(135deg,#2A2520,#1A1A1A)",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                  <div className="font-display" style={{fontSize:"2.5rem",color:"var(--gold)",fontWeight:300}}>SV</div>
                </div>
              </div>
            </div>
          </div>

          <div style={{textAlign:"center",maxWidth:"680px"}}>
            <span className="section-label" style={{display:"block",marginBottom:"16px"}}>Portfolio</span>
            <h1 className="hero-name" style={{fontSize:"clamp(3rem,9vw,5.5rem)",marginBottom:"20px"}}>
              Siddharth Verma
            </h1>
            <div className="gold-rule" style={{margin:"0 auto 20px"}}/>
            <p style={{fontSize:"0.78rem",letterSpacing:"0.22em",textTransform:"uppercase",color:"var(--muted)",marginBottom:"44px",fontWeight:300}}>
              Hotel Management &amp; Hospitality Professional
            </p>
            <button className="gold-btn" onClick={dlResume} style={{padding:"14px 40px",borderRadius:"2px"}}>
              <span className="gold-btn-inner"><Download size={13}/> Download Résumé</span>
            </button>
          </div>

          <div style={{position:"absolute",bottom:"44px",left:"50%",transform:"translateX(-50%)",display:"flex",flexDirection:"column",alignItems:"center",gap:"6px",opacity:0.35}}>
            <div style={{width:"1px",height:"36px",background:"linear-gradient(180deg,transparent,var(--gold))"}}/>
            <ChevronDown size={13} style={{color:"var(--gold)"}}/>
          </div>
        </section>

        <hr className="section-divider"/>

        {/* ── ABOUT ── */}
        <section id="about" style={S.sec}>
          <div style={S.inner}>
            <div className="reveal" style={S.secHead}>
              <span className="section-label">Who I Am</span>
              <h2 style={S.secTitle}>About Me</h2>
              <div className="gold-rule" style={{margin:"0 auto"}}/>
            </div>
            <div className="reveal reveal-d1 gold-card" style={{borderRadius:"4px",padding:"52px"}}>
              <div className="about-grid" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"48px",alignItems:"center"}}>
                <div className="about-left" style={{borderRight:"1px solid rgba(201,168,76,0.12)",paddingRight:"48px"}}>
                  <div className="font-display" style={{fontSize:"7rem",fontWeight:300,lineHeight:1,color:"rgba(201,168,76,0.07)",userSelect:"none",marginBottom:"-12px"}}>01</div>
                  <div className="font-display" style={{fontSize:"1.7rem",fontWeight:300,color:"var(--gold-light)",lineHeight:1.35}}>Passionate about<br/>Hospitality</div>
                  <div style={{width:"36px",height:"1px",background:"var(--gold)",margin:"18px 0"}}/>
                  <div style={{fontSize:"0.68rem",letterSpacing:"0.18em",textTransform:"uppercase",color:"var(--muted)"}}>Lucknow, India</div>
                </div>
                <div>
                  <p style={{color:"rgba(245,240,232,0.72)",lineHeight:1.9,fontSize:"0.92rem",fontWeight:300,marginBottom:"18px"}}>
                    A hotel management professional with a strong foundation in hospitality operations and customer service excellence — committed to creating exceptional guest experiences.
                  </p>
                  <p style={{color:"rgba(245,240,232,0.55)",lineHeight:1.9,fontSize:"0.88rem",fontWeight:300}}>
                    My journey has equipped me with comprehensive skills in front office operations, culinary arts, and event management, thriving in dynamic, fast-paced hospitality environments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="section-divider"/>

        {/* ── EDUCATION ── */}
        <section id="education" style={S.sec}>
          <div style={S.inner}>
            <div className="reveal" style={S.secHead}>
              <span className="section-label">Academic Background</span>
              <h2 style={S.secTitle}>Education</h2>
              <div className="gold-rule" style={{margin:"0 auto"}}/>
            </div>
            <div className="reveal reveal-d1 gold-card" style={{borderRadius:"4px",padding:"44px",display:"flex",alignItems:"flex-start",gap:"36px"}}>
              <div style={S.iconBox}><GraduationCap size={26} style={{color:"var(--gold)"}}/></div>
              <div>
                <span className="section-label" style={{display:"block",marginBottom:"8px"}}>Bachelor's Degree</span>
                <h3 className="font-display" style={{fontSize:"1.55rem",fontWeight:400,color:"var(--cream)",marginBottom:"10px",lineHeight:1.3}}>
                  Hotel Management &amp; Catering Technology
                </h3>
                <div style={{display:"flex",alignItems:"center",gap:"8px",color:"var(--gold-light)",fontSize:"0.82rem",letterSpacing:"0.05em",marginBottom:"16px"}}>
                  <Building size={13}/> Babu Banarasi Das University (BBDU)
                </div>
                <p style={{color:"var(--muted)",fontSize:"0.85rem",lineHeight:1.85,fontWeight:300}}>
                  Comprehensive program covering hospitality management, culinary arts, front office operations, and business administration — providing a complete industry-ready foundation.
                </p>
              </div>
            </div>
          </div>
        </section>

        <hr className="section-divider"/>

        {/* ── EXPERIENCE ── */}
        <section id="experience" style={S.sec}>
          <div style={S.inner}>
            <div className="reveal" style={S.secHead}>
              <span className="section-label">Professional Journey</span>
              <h2 style={S.secTitle}>Experience</h2>
              <div className="gold-rule" style={{margin:"0 auto"}}/>
            </div>

            <div style={{position:"relative"}}>
              <div className="hidden md:block" style={{position:"absolute",left:"30px",top:"10px",bottom:"10px",width:"1px",background:"linear-gradient(180deg, rgba(201,168,76,0.45), rgba(201,168,76,0.05))"}}/>
              <div style={{display:"flex",flexDirection:"column",gap:"28px"}}>
                {EXPERIENCES.map((exp, i) => {
                  const Icon = exp.icon;
                  return (
                    <div key={i} className={`reveal ${i===0?"reveal-d1":i===1?"reveal-d2":"reveal-d3"}`} style={{display:"flex",gap:"28px",alignItems:"flex-start"}}>
                      <div className="timeline-icon hidden md:flex" style={{flexDirection:"column",alignItems:"center",flexShrink:0,width:"60px"}}>
                        <div style={{...S.iconBox,position:"relative",zIndex:2,background:"var(--charcoal)"}}>
                          <Icon size={22} style={{color:"var(--gold)"}}/>
                        </div>
                      </div>
                      <div className="gold-card" style={{flex:1,borderRadius:"4px",padding:"36px"}}>
                        <div className="exp-header" style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:"12px",marginBottom:"18px"}}>
                          <div>
                            <span className="section-label" style={{display:"block",marginBottom:"6px"}}>{exp.company}</span>
                            <h3 className="font-display" style={{fontSize:"1.45rem",fontWeight:400,color:"var(--cream)"}}>{exp.title}</h3>
                          </div>
                          <div style={{textAlign:"right"}}>
                            <div style={{fontSize:"0.74rem",color:"var(--gold-light)",letterSpacing:"0.04em",marginBottom:"4px"}}>{exp.period}</div>
                            <div style={{fontSize:"0.67rem",color:"var(--muted)",letterSpacing:"0.12em",textTransform:"uppercase"}}>{exp.duration}</div>
                          </div>
                        </div>
                        <div style={{display:"flex",alignItems:"center",gap:"6px",color:"var(--muted)",fontSize:"0.78rem",marginBottom:"22px"}}>
                          <MapPin size={11}/> {exp.location}
                        </div>
                        <div style={{width:"100%",height:"1px",background:"rgba(201,168,76,0.08)",marginBottom:"22px"}}/>
                        <div style={{display:"flex",flexDirection:"column",gap:"13px"}}>
                          {exp.highlights.map((h, j) => {
                            const HIcon = h.icon;
                            return (
                              <div key={j} style={{display:"flex",gap:"13px",alignItems:"flex-start"}}>
                                <div style={{width:"22px",height:"22px",borderRadius:"2px",background:"rgba(201,168,76,0.07)",border:"1px solid rgba(201,168,76,0.18)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,marginTop:"2px"}}>
                                  <HIcon size={11} style={{color:"var(--gold)"}}/>
                                </div>
                                <p style={{color:"rgba(245,240,232,0.62)",fontSize:"0.86rem",lineHeight:1.75,fontWeight:300}}>{h.text}</p>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <hr className="section-divider"/>

        {/* ── SKILLS ── */}
        <section id="skills" style={S.sec}>
          <div style={S.inner}>
            <div className="reveal" style={S.secHead}>
              <span className="section-label">Core Competencies</span>
              <h2 style={S.secTitle}>Skills</h2>
              <div className="gold-rule" style={{margin:"0 auto"}}/>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:"20px"}}>
              {[
                { name:"Hotel Management",        icon:Hotel,    num:"01" },
                { name:"Front Office Operations", icon:Users,    num:"02" },
                { name:"Event Management",        icon:Calendar, num:"03" },
                { name:"Hospitality Management",  icon:Coffee,   num:"04" },
              ].map((skill, i) => {
                const Icon = skill.icon;
                return (
                  <div key={i} className={`reveal ${i===0?"reveal-d1":i===1?"reveal-d2":i===2?"reveal-d3":""} skill-pill`} style={{borderRadius:"4px",padding:"32px 24px",textAlign:"center"}}>
                    <div className="font-display" style={{fontSize:"3.5rem",fontWeight:300,color:"rgba(201,168,76,0.07)",lineHeight:1,marginBottom:"4px",userSelect:"none"}}>{skill.num}</div>
                    <div style={{...S.iconBox,margin:"0 auto 16px",width:"48px",height:"48px"}}>
                      <Icon size={19} style={{color:"var(--gold)"}}/>
                    </div>
                    <div style={{fontSize:"0.75rem",letterSpacing:"0.1em",textTransform:"uppercase",color:"var(--cream)",fontWeight:500}}>{skill.name}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <hr className="section-divider"/>

        {/* ── CERTIFICATIONS ── */}
        <section id="certifications" style={S.sec}>
          <div style={S.inner}>
            <div className="reveal" style={S.secHead}>
              <span className="section-label">Achievements</span>
              <h2 style={S.secTitle}>Certifications</h2>
              <div className="gold-rule" style={{margin:"0 auto"}}/>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",gap:"24px"}}>
              {[
                { name:"Internship Certificate",      desc:"Hyatt Regency Lucknow",  image:"/certificates/certificate.png",  icon:Hotel,  file:"internship_certificate" },
                { name:"Certificate of Appreciation", desc:"Outstanding Performance", image:"/certificates/appreciation.png", icon:Trophy, file:"certificate_of_appreciation" },
                { name:"Gratitude Certificate",       desc:"Excellence in Service",   image:"/certificates/gratitude.png",    icon:Star,   file:"gratitude_certificate" },
              ].map((cert, i) => {
                const Icon = cert.icon;
                return (
                  <div key={i} className={`reveal ${i===0?"reveal-d1":i===1?"reveal-d2":"reveal-d3"} gold-card`} style={{borderRadius:"4px",overflow:"hidden"}}>
                    <div className="cert-img-wrap">
                      <img src={cert.image} alt={cert.name} onError={e => { e.target.style.display="none"; e.target.nextSibling.style.display="flex"; }}/>
                      <div style={{display:"none",width:"100%",height:"100%",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"linear-gradient(135deg,#2A2520,#1A1A1A)"}}>
                        <Icon size={36} style={{color:"var(--gold)",opacity:0.5}}/>
                      </div>
                      <div className="cert-overlay"/>
                    </div>
                    <div style={{padding:"24px"}}>
                      <span className="section-label" style={{display:"block",marginBottom:"6px"}}>{cert.desc}</span>
                      <h3 className="font-display" style={{fontSize:"1.05rem",fontWeight:400,color:"var(--cream)",marginBottom:"20px"}}>{cert.name}</h3>
                      <button className="gold-btn" onClick={() => dlCert(cert.file)} style={{width:"100%",padding:"10px",borderRadius:"2px"}}>
                        <span className="gold-btn-inner" style={{justifyContent:"center"}}><Download size={11}/> Download</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <hr className="section-divider"/>

        {/* ── CONTACT ── */}
        <section id="contact" style={{...S.sec,paddingBottom:"140px"}}>
          <div style={{...S.inner,maxWidth:"640px",textAlign:"center"}}>
            <div className="reveal">
              <span className="section-label">Get In Touch</span>
              <h2 style={S.secTitle}>Contact</h2>
              <div className="gold-rule" style={{margin:"0 auto 28px"}}/>
              <p style={{color:"var(--muted)",lineHeight:1.9,fontSize:"0.9rem",fontWeight:300,marginBottom:"44px"}}>
                Open to new opportunities and collaborations across the hospitality industry. Let's connect.
              </p>
            </div>
            <div className="reveal reveal-d1" style={{display:"flex",gap:"16px",justifyContent:"center",flexWrap:"wrap"}}>
              <a href="mailto:siddharthverma2911@gmail.com" className="contact-link">
                <Mail size={13} style={{color:"var(--gold)"}}/> Email Me
              </a>
              <a href="https://linkedin.com/in/siddharth-verma-21b365274" target="_blank" rel="noopener noreferrer" className="contact-link">
                <Linkedin size={13} style={{color:"var(--gold)"}}/> LinkedIn
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div style={{borderTop:"1px solid rgba(201,168,76,0.08)",padding:"24px",textAlign:"center"}}>
          <div className="font-display" style={{color:"rgba(201,168,76,0.25)",fontSize:"0.78rem",letterSpacing:"0.25em",textTransform:"uppercase"}}>
            Siddharth Verma · Hospitality Professional
          </div>
        </div>

      </div>
    </>
  );
}