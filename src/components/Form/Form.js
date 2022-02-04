import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {joiResolver} from "@hookform/resolvers/joi";

import {updateCarById} from "../../store/car.slice";
import {carValidator} from "../../validators/car.validator";

const Form = () => {
    const {handleSubmit, reset, setValue, register, formState: {errors}} = useForm({resolver: joiResolver(carValidator), mode: 'onTouched'});
    const {carForUpdate} = useSelector(state => state.cars);
    const dispatch = useDispatch();

    const submit = (data) => {
        dispatch(updateCarById({id: carForUpdate.id, car: data}))
        reset();
    }

    useEffect(() => {
        if (carForUpdate) {
            setValue('model', carForUpdate.model)
            setValue('price', carForUpdate.price)
            setValue('year', carForUpdate.year)
        }
    }, [carForUpdate])

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type={'text'} placeholder={'model'} {...register('model')}/>
            <input type={'text'} placeholder={'price'} {...register('price')}/>
            <input type={'text'} placeholder={'year'} {...register('year')}/>
            <button>Update</button>
            <div>{errors.model && <span>{errors.model.message}</span>}</div>
            <div>{errors.price && <span>{errors.price.message}</span>}</div>
            <div>{errors.year && <span>{errors.year.message}</span>}</div>
        </form>
    )
}

export default Form;