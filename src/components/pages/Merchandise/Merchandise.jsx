import React from 'react';
import TeamCard from '../Team/SponsorSection/TeamCard';
import Footer from '../../Footer';
import './Merchandise.css';

function Merchandise() {
    return (
        <div>
    <section className="merch">
        <TeamCard name="Merch Description" position="Merch" ps="" />
        <TeamCard name="Merch Description" position="Merch" ps="" />
        </section>
        <div className="merch-content">
            <span>More Amazing Merchandise</span>
            <h5>COMING SOON !</h5>
        </div>
        <Footer />
        </div>
    )
}

export default Merchandise;