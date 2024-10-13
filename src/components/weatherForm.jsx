import React, { useState } from 'react'

// WeatherForm is a functional component that accepts a prop called onSearch. This prop is expected to be a function that will be called when the user submits the form.
export const WeatherForm = ({onSearch}) => {

    // The component uses the useState hook to create a state variable city, initialized as an empty string. This state holds the name of the city that the user inputs.
    const [city, setCity] = useState('');


        // handleSubmit is a function that is called when the form is submitted. It performs the following actions:
        // e.preventDefault() prevents the default form submission behavior, which would otherwise cause a page reload.
        // onSearch(city) calls the onSearch function passed as a prop, passing the current value of the city state as an argument. This is where the input data is processed (e.g., fetching weather data).
        // setCity('') resets the city state to an empty string, clearing the input field after submission.

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(city);
        setCity('');
    };

  return (
      <form onSubmit={handleSubmit} className='form-inlline justify-content-center'>
        <input
           type='text'
           className='form-control mr-2'
           value={city}
           onChange={(e)=> setCity(e.target.value)}
           placeholder='Enter city name'
           required
        />
        <button  type='submit' className='btn btn-primary'>
            Get Weather
        </button>

      </form>
);
};
