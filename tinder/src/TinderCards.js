import React,{ useState } from 'react'
import "./TinderCards.css"
import TinderCard from 'react-tinder-card'

function TinderCards() {
    const [people, setPeople]=useState([
        {
            name:'Victoria',
            url:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/fe/ac/kolkata-calcutta.jpg?w=1200&h=-1&s=1",
        },
        {
            name:'Arpan Kool',
            url:"https://image.cnbcfm.com/api/v1/image/106806377-1607090600215-gettyimages-1229893101-AFP_8WA6E2.jpeg?v=1633365296&w=929&h=523",
        },
        {
            name:'Arpita Hazra',
            url:"https://image.cnbcfm.com/api/v1/image/106806377-1607090600215-gettyimages-1229893101-AFP_8WA6E2.jpeg?v=1633365296&w=929&h=523",
        },
    ]);


    const swiped = (direction,nameToDelete)=>{
        console.log("removing "+nameToDelete);
        //setLastDirection(direction);
    }

    const outOfFrame=(name) =>{
        console.log(name + "left the screen");
    }


    return (
        <div className="tinderCard">
            <div className="tinderCards_cardContainer">
                {people.map(person => (
                        <TinderCard
                            className="swipe"
                            key={person.name}
                            preventSwipe={["up","down"]}
                            onSwipe={(dir)=>swiped(dir,person.name)}
                            onCardLeftScreen={()=>outOfFrame(person.name)}
                        >
                            <div 
                                style={{backgroundImage: `url(${person.url})`}}
                                className="card"
                            >
                                <h3>{person.name}</h3>

                            </div>
                            
                        </TinderCard>
                    ))}
            </div>
        </div>        
    );
}

export default TinderCards
