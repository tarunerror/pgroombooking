import React from 'react';
import './Deals.css';

const Deals = () => {
    return (
        <div className="deals">
            <div className="deal-item">
                <img src="/sign-up-offer.png" alt="Sign up offer" />
                <p>Sign up & Get ₹1500</p>
            </div>
            <div className="deal-item">
                <img src="/monthly-deal.png" alt="Monthly Deal" />
                <p>Deal of the month: Up to 45% off</p>
            </div>
            <div className="deal-item">
                <img src="/long-stay.png" alt="Long Stay" />
                <p>Long Stay: Up to 55% Off</p>
            </div>
        </div>
    );
};

export default Deals;
