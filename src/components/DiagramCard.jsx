import React from 'react';
import './Card.css';

const DiagramCard = ({ imageUrl }) => {
    return (
        <div className="card">
            <h3 className="card-title">Diagram</h3>
            <div className="placeholder-box diagram-placeholder">
                {imageUrl ? (
                    <img
                        src={imageUrl}
                        alt="Diagram"
                        style={{ width: '100%', height: '100%', borderRadius: '12px', objectFit: 'contain' }}
                    />
                ) : (
                    <span>2D Diagram Placeholder</span>
                )}
            </div>
        </div>
    );
};

export default DiagramCard;
