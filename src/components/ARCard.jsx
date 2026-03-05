import React from 'react';
import './Card.css';

const ARCard = ({ arImageUrl }) => {
    return (
        <div className="card">
            <h3 className="card-title">AR Scanner</h3>
            <div className="placeholder-box ar-placeholder">
                {arImageUrl ? (
                    <img
                        src={arImageUrl}
                        alt="AR Marker"
                        style={{ width: '100%', height: '100%', borderRadius: '12px', objectFit: 'cover' }}
                    />
                ) : (
                    <div className="ar-content">
                        <p>AR Scanner Iframe Placeholder</p>
                        <button className="btn-start-ar">Start AR</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ARCard;
