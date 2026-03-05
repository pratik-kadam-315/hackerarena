import React, { useEffect } from 'react';
import './About.css';

function About() {
    useEffect(() => {
        // Scroll Reveal
        const revealItems = document.querySelectorAll('.feat');
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
        <div className="about-wrapper">
            <section id="features">
                <div className="sec-eyebrow">Why AR‑Anatomy</div>
                <h2 className="sec-title">A smarter way to learn the body.</h2>
                <div className="feat-grid">
                    <div className="feat">
                        <div className="feat-ico">🔬</div>
                        <h3>True AR Visualization</h3>
                        <p>Project life-sized 3D organs onto your desk with WebAR. No headset, no app, no friction whatsoever.</p>
                    </div>
                    <div className="feat">
                        <div className="feat-ico">🫀</div>
                        <h3>Interactive 3D Models</h3>
                        <p>Rotate, zoom, and isolate layers. Every model is built for tactile exploration — not passive viewing.</p>
                    </div>
                    <div className="feat">
                        <div className="feat-ico">🎙️</div>
                        <h3>Audio Guided Learning</h3>
                        <p>Contextual narration explains structure, function, and clinical relevance as you explore each organ.</p>
                    </div>
                    <div className="feat">
                        <div className="feat-ico">📱</div>
                        <h3>Browser Native</h3>
                        <p>Works in Safari and Chrome on any modern smartphone. On campus or at home — always accessible.</p>
                    </div>
                    <div className="feat">
                        <div className="feat-ico">📚</div>
                        <h3>Curriculum Aligned</h3>
                        <p>Content structured around standard medical anatomy curricula to complement your studies perfectly.</p>
                    </div>
                    <div className="feat">
                        <div className="feat-ico">⚡</div>
                        <h3>Spatial Retention</h3>
                        <p>Interacting with 3D structures dramatically improves anatomical recall compared to textbook study.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
