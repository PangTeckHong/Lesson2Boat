import React from 'react';
import { ScrollView } from 'react-native';
import Boat from './Boat';

const AllBoats = () => {
    return (
        <ScrollView>
            <Boat
                name= "Sea Ray 500 Sundancer"
                description="Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away."
                picture={require('../img/sea_ray.jpg')}
            />
            <Boat
                name= "Four Winns Horizon 180"
                description="A sporty look and refined details truly set the Horizon 180 above all others."
                picture={require('../img/flipper.jpg')}
            />
            <Boat
                name= "Princess V48"
                description="There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior."
                picture={require('../img/princess.jpg')}
            />
            <Boat
                name= "Bayliner 175 Bowrider"
                description="Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance."
                picture={require('../img/bayliner.jpg')}
            />
            <Boat
                name= "Fairline Targa 47"
                description="Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit."
                picture={require('../img/fairline.jpg')}
            />
        </ScrollView>
    );
};

export default AllBoats;

