import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
    const bgcRef = useRef(null);
    const bodyCanvasRef = useRef(null);

    useEffect(() => {
        // Background Particles
        const bgc = bgcRef.current;
        if (bgc) {
            const bx = bgc.getContext('2d');
            let BW, BH;

            function resize() {
                BW = bgc.width = window.innerWidth;
                BH = bgc.height = window.innerHeight;
            }

            resize();
            window.addEventListener('resize', resize);

            const nodes = Array.from({ length: 38 }, () => ({
                x: Math.random(),
                y: Math.random(),
                vx: (Math.random() - 0.5) * 0.00018,
                vy: (Math.random() - 0.5) * 0.00018,
                r: Math.random() * 2 + 1,
                life: Math.random() * Math.PI * 2
            }));

            function draw() {
                bx.clearRect(0, 0, BW, BH);

                nodes.forEach(n => {
                    n.x += n.vx;
                    n.y += n.vy;

                    if (n.x < 0) n.x = 1;
                    if (n.x > 1) n.x = 0;
                    if (n.y < 0) n.y = 1;
                    if (n.y > 1) n.y = 0;
                });

                nodes.forEach(n => {
                    bx.beginPath();
                    bx.arc(n.x * BW, n.y * BH, n.r, 0, Math.PI * 2);
                    bx.fillStyle = 'rgba(46,125,107,.1)';
                    bx.fill();
                });

                requestAnimationFrame(draw);
            }

            draw();

            return () => window.removeEventListener('resize', resize);
        }
    }, []);

    useEffect(() => {
        // Hero Skeleton Placeholder
        const hc = bodyCanvasRef.current;
        if (hc) {
            const hx = hc.getContext('2d');
            const CW = 220;
            const CH = 320;

            function drawSkeleton() {
                hx.clearRect(0, 0, CW, CH);

                hx.beginPath();
                hx.arc(CW / 2, CH / 2, 40, 0, Math.PI * 2);
                hx.strokeStyle = 'rgba(46,125,107,.3)';
                hx.stroke();

                requestAnimationFrame(drawSkeleton);
            }

            drawSkeleton();
        }
    }, []);

    useEffect(() => {
        // Scroll Reveal
        const revealItems = document.querySelectorAll('.step, .organ-card, .mini-card');
        if (revealItems.length) {
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, { threshold: 0.08 });

            revealItems.forEach(el => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(18px)';
                el.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
                observer.observe(el);
            });

            return () => observer.disconnect();
        }
    }, []);

    return (
        <div className="home-wrapper">
            <canvas id="bgc" ref={bgcRef}></canvas>

            {/* HERO */}
            <section id="hero">
                <div className="hero-left">
                    <div className="hero-tag"><span className="tag-dot"></span> No App Required — WebAR</div>
                    <h1>See the body.<br /><em>Feel</em> the <span className="red">anatomy.</span></h1>
                    <p className="hero-p">
                        AR‑Anatomy brings the human body to life in augmented reality — right inside your smartphone browser.
                        Rotate organs, peel back layers, and understand anatomy spatially.
                    </p>
                    <div className="hero-btns">
                        <Link to="/learning" className="btn btn-solid">
                            Start Exploring
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                        <a href="#how" className="btn btn-outline">How it works</a>
                    </div>
                </div>

                <div className="hero-right">
                    <div className="hero-model-card">
                        <video className="hero-video" autoPlay muted loop playsInline>
                            <source src="/anatomy-demo.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <canvas id="bodyCanvas" ref={bodyCanvasRef} width="220" height="320" style={{ display: 'none' }}></canvas>
                    </div>

                    <div className="hero-mini-cards">
                        <div className="mini-card">
                            <div className="mini-num">11+</div>
                            <div className="mini-lbl">Body Systems</div>
                        </div>
                        <div className="mini-card">
                            <div className="mini-num">3D</div>
                            <div className="mini-lbl">Interactive Models</div>
                        </div>
                        <div className="mini-card">
                            <div className="mini-num">0</div>
                            <div className="mini-lbl">Apps to Install</div>
                        </div>
                        <div className="mini-card">
                            <div className="mini-num">8</div>
                            <div className="mini-lbl">AR Modules</div>
                        </div>
                    </div>
                </div>

                <div className="scroll-hint">
                    <span>Scroll</span>
                    <div className="s-line"></div>
                </div>
            </section>

            {/* HOW IT WORKS */}
            <section id="how">
                <div className="sec-eyebrow">Process</div>
                <h2 className="sec-title">Three steps into the body.</h2>
                <div className="steps-row">
                    <div className="step">
                        <div className="step-n">01</div>
                        <h3>Pick an Organ</h3>
                        <p>Choose from heart, brain, lungs, liver, kidney, and more from the AR Learning menu.</p>
                    </div>
                    <div className="step">
                        <div className="step-n">02</div>
                        <h3>Point Your Camera</h3>
                        <p>Allow camera access in your browser. Scan a flat surface and the 3D model anchors in your real space.</p>
                    </div>
                    <div className="step">
                        <div className="step-n">03</div>
                        <h3>Explore & Learn</h3>
                        <p>Rotate, tap layers to reveal anatomy, and follow the audio guide entirely at your own pace.</p>
                    </div>
                </div>
            </section>

            {/* ORGANS */}
            <section id="organs">
                <div className="sec-eyebrow">AR Modules</div>
                <h2 className="sec-title">Choose your organ.</h2>
                <div className="organs-row">
                    <Link to="/learning" className="organ-card"><span>🫀</span><span>Heart</span></Link>
                    <Link to="/learning" className="organ-card"><span>🧠</span><span>Brain</span></Link>
                    <Link to="/learning" className="organ-card"><span>👁</span><span>Eye</span></Link>
                    <Link to="/learning" className="organ-card"><span>🫁</span><span>Lungs</span></Link>
                    <Link to="/learning" className="organ-card"><span>🟤</span><span>Liver</span></Link>
                    <Link to="/learning" className="organ-card"><span>🫘</span><span>Kidney</span></Link>
                    <Link to="/learning" className="organ-card"><span>🔵</span><span>Pancreas</span></Link>
                    <Link to="/learning" className="organ-card"><span>🔄</span><span>Digestive</span></Link>
                </div>
            </section>

            {/* CTA */}
            <section id="cta">
                <h2>Ready to see<br />inside the body?</h2>
                <p>No app store. No download. Just open your browser and explore.</p>
                <Link to="/learning" className="btn-white">
                    Launch AR Experience
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </Link>
            </section>

            {/* FOOTER */}
            <footer className="main-footer">
                <Link to="/" className="logo">AR<span className="logo-dot">·</span>Anatomy</Link>
                <span>Built for medical students · Powered by WebAR</span>
                <span>© 2025 AR‑Anatomy</span>
            </footer>
        </div>
    );
}

export default Home;
