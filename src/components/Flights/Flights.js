import {useEffect, useState} from "react";

import Flight from "../Flight/Flight";

export default function Flights() {

    const [flights, setFlights] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(value => {
                let filter = value.filter(flight => flight.launch_year !== '2020')
                setFlights(filter);
            });
    }, []);

    return (
        <div className={'wrapper'}>
            {
                flights.map(value => <Flight key={value.flight_number} props={value}/>)
            }
        </div>
    );
};