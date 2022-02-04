import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";

import Car from "../../components/Car/Car";
import {getAllCars} from "../../store/car.slice";
import Form from "../../components/Form/Form";

const CarsPage = () => {
    const {cars} = useSelector(state => state.cars);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCars())
    }, [])

    return (
        <div>
            <Form/>
            <div>{cars.map(car => <Car key={car.id} car={car}/>)}</div>
        </div>
    );
}

export default CarsPage;