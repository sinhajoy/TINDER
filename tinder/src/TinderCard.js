import React,{ useState } from 'react'
import "./TinderCard.css"

function TinderCard() {
    const [people, setPeople]=useState([
        {
            name:'Joy Sinha',
            url:"https://image.cnbcfm.com/api/v1/image/106806377-1607090600215-gettyimages-1229893101-AFP_8WA6E2.jpeg?v=1633365296&w=929&h=523",
        }
    ]);

    return (
        <div className="tinderCard">
            
        </div>
    );
}

export default TinderCard
