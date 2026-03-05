import React, { useState, useEffect, useRef } from 'react';
import DiagramCard from './DiagramCard';
import ARCard from './ARCard';
import './BodySection.css';

const BodySection = ({ id, title = "Body Part Name", description, diagramUrl, arImageUrl }) => {
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [synth, setSynth] = useState(null);
    const [voices, setVoices] = useState([]);
    const contentRef = useRef(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const speechSynth = window.speechSynthesis;
            setSynth(speechSynth);

            const loadVoices = () => {
                const availableVoices = speechSynth.getVoices();
                setVoices(availableVoices);
            };

            // Voices are loaded asynchronously
            loadVoices();
            if (speechSynth.onvoiceschanged !== undefined) {
                speechSynth.onvoiceschanged = loadVoices;
            }
        }

        return () => {
            if (window.speechSynthesis) {
                window.speechSynthesis.cancel();
            }
        };
    }, []);

    const toggleSpeech = () => {
        if (!synth) return;

        if (isSpeaking) {
            synth.cancel();
            setIsSpeaking(false);
        } else {
            let textToRead = "";

            if (description && contentRef.current) {
                textToRead = contentRef.current.innerText;
            } else if (!description) {
                textToRead =
                    "Information Content Placeholder. This container will hold detailed anatomical information, descriptions, and medical data regarding the selected body system or part.";
            }

            if (!textToRead) return;

            const utterance = new SpeechSynthesisUtterance(textToRead);

            // Find a female voice
            const femaleVoice = voices.find(voice =>
                voice.name.toLowerCase().includes("female") ||
                voice.name.toLowerCase().includes("zira") ||      // Windows
                voice.name.toLowerCase().includes("samantha") ||  // macOS
                voice.name.toLowerCase().includes("google uk english female")
            );

            if (femaleVoice) {
                utterance.voice = femaleVoice;
            }

            utterance.lang = "en-US";
            utterance.rate = 1;
            utterance.pitch = 1;

            utterance.onend = () => setIsSpeaking(false);
            utterance.onerror = () => setIsSpeaking(false);

            synth.cancel(); // stop previous speech
            synth.speak(utterance);
            setIsSpeaking(true);
        }
    };

    return (
        <section id={id} className="body-section">
            <div className="section-container">
                {/* Left Side (60%) */}
                <div className="content-left">
                    <div className="info-container card">
                        <div className="info-header">
                            <h2 className="section-title">{title}</h2>
                            <button
                                className={`listen-btn ${isSpeaking ? 'speaking' : ''}`}
                                onClick={toggleSpeech}
                                title={isSpeaking ? "Stop Listening" : "Listen to description"}
                            >
                                {isSpeaking ? (
                                    <>
                                        <span className="icon">⏹</span> Stop
                                    </>
                                ) : (
                                    <>
                                        <span className="icon">🔊</span> Listen
                                    </>
                                )}
                            </button>
                        </div>
                        <div className="scroll-container">
                            <div className="placeholder-box info-placeholder">
                                <div className="text-content">
                                    {description ? (
                                        <div className="real-description" ref={contentRef}>
                                            {description}
                                        </div>
                                    ) : (
                                        <>
                                            <p><strong>Information Content Placeholder</strong></p>
                                            <p>This container will hold detailed anatomical information, descriptions, and medical data regarding the selected body system or part.</p>
                                            <p>It is designed to be scrollable and maintains a clean, professional dashboard aesthetic.</p>
                                            {!description && <div style={{ height: '400px' }}></div>}
                                            <p>End of scrollable content.</p>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side (40%) */}
                <div className="content-right">
                    <DiagramCard imageUrl={diagramUrl} />
                    <ARCard arImageUrl={arImageUrl} />
                </div>
            </div>
        </section>
    );
};

export default BodySection;
