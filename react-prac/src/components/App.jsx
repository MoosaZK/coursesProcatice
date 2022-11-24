import React from 'react';
import  Calculator from './calculator';
import Heading from "./heading";
import HourGreating from './inlineStyling';
import inlineStyling from "./inlineStyling";

function App(){
    return (
        <div>

            <Heading />
            {/* Inline Styling */}
            <HourGreating />;
            <Calculator />


        </div>
    );
}

export default App;