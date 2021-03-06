import React from 'react';
import './QandA.css';
const QandA = () => {
    return (
        <div className='container mt-5 mb-5'>
            <div className="q-and-a shadow-lg">
                <h2 className='fw-bold'>How react works?</h2>
                
                <p>React is declarative,flexible Javascript library for building user interfaces.React goes through its virtual DOM and creates a list what those are changes that need to be made to the real DOM.And then does it all in one single process.It reads objects ans uses them to create HTML like elements on the virtual DOM,which gets synced with the real DOM.React also allows us to create reusable UI components and rendered to the browser.</p>
            </div>
            <div className="mt-4 q-and-a shadow-lg">

                <h2 className='fw-bold'>Difference between Props and State?</h2>
                <p>Props are read-only components and State are both read and write.Props are immutable and state are mutable.Props allows us to pass our data from one component to another components as an argument and State holds the information about the components.Props can be used with state and functional components and State is used for rendering dynamic changes with the component.Using Props we can make components reusable and on the otherhand State cannot make components reusable</p>
            </div>
        </div>
    );
};

export default QandA;