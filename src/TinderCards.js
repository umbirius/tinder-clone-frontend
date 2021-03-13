import React, { useState } from 'react'
import './TinderCards.css'
import TinderCard from 'react-tinder-card'
import { SwipeableDrawer } from '@material-ui/core'

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: 'Chuckee Cheese',
            url: "https://media2.fdncms.com/metrotimes/imager/u/blog/24545547/screen_shot_2020-05-18_at_11.17.38_am.png?cb=1589832349"
        },
        {
            name: 'Dinosaur',
            url: "https://i.insider.com/5f08b7e5f34d053f663fbada"
        },
    ])

    const swiped = (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete)
        // setLastDirection(direction)
    }

    const outOfFrame = (name) => {
        console.log(name + ' left the screen!')
    }



    return <div className="tinderCards">
        <div className="tinderCards__cardContainer">
            {people.map(person => (
                <TinderCard
                    className="swipe"
                    key={person.name}
                    prevenetSwipe={["up", "down"]}
                    onSwipe={(dir) => swiped(dir, person.name)}
                    onCardLeftScreen={() => outOfFrame(person.name)}
                >
                    <div
                        style={{ backgroundImage: `url(${person.url})` }}
                        className="card">
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}

        </div>
    </div>
}

export default TinderCards
