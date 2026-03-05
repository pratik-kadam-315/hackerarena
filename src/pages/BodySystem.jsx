import React, { useState, useEffect, useRef } from "react";
import "./BodySystem.css";

function BodySystem() {
    const [qr, setQr] = useState(null);
    const bgcRef = useRef(null);

    useEffect(() => {
        // Particle Background (matching Home.jsx and Learning.jsx)
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

    const hotspots = [
        { name: "Heart", class: "heart", qr: "/heart_Qr.jpeg" },
        { name: "Brain", class: "brain", qr: "/brain_qr.png" },
        { name: "Lungs", class: "lungs", qr: "/eyeqr.png" }, // Using eyeqr as placeholder for lungs per Learning.jsx pattern
        { name: "Liver", class: "liver", qr: "/liver_qr.png" },
        { name: "Stomach", class: "stomach", qr: "/stomach_qr.png" },
        { name: "Pancreas", class: "pancreas", qr: "/pancreas_qr.png" },
        { name: "Kidney", class: "kidney", qr: "/kidney_qr.png" },
        { name: "Intestines", class: "intestines", qr: "/intestine_qr.png" },
        { name: "Spleen", class: "spleen", qr: "/kidney_qr.png" }, // Fallback per user snippet
    ];

    return (
        <div className="body-system-page">
            <canvas id="bgc" ref={bgcRef}></canvas>
            <div className="body-container">
                <h1 className="learning-title">Human <em>Body</em></h1>
                <p className="learning-subtitle">
                    Hover any organ to reveal its AR QR code — scan to launch the 3D model instantly.
                </p>
                <div className="body-image-wrapper">
                    <img src="/bodysystem.jpeg" alt="Human Body System" className="main-body-img" />

                    {hotspots.map((part) => (
                        <div
                            key={part.name}
                            className={`hotspot-circle ${part.class}`}
                            onMouseEnter={() => setQr(part.qr)}
                            onMouseLeave={() => setQr(null)}
                            title={part.name}
                        >
                            <div className="pulse"></div>
                        </div>
                    ))}
                </div>

                {qr && (
                    <div className="qr-popup">
                        <div className="popup-content">
                            <img src={qr} alt="Organ QR Code" className="qr-img" />
                            <div className="popup-label">Scan to view AR model</div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default BodySystem;
