import React from 'react';
import ReactDOM from 'react-dom';



const user = {
    name: 'Kenneth',
    luckyNumber: luckyNumber()
}

function luckyNumber(){
    return Math.floor((Math.random() * 1000) + 1);
}

function greeting(user){
        return (
        <div className="container">
            <h1>Hi {user.name}</h1>
            <h2 className="text-muted">{user.name}, your lucky number is {user.luckyNumber}!</h2>
        </div>
        )
}
ReactDOM.render(
    <h1 className="container">{greeting(user)}</h1>,
    document.getElementById('root')
);

// greeting = user => {
//      return domElement = () => {
//         <div className="container">
//             <h1>`Hi {user.name}`</h1>
//             <h2 className="text-muted">`{user.name}, your lucky number is {user.luckyNumber}!`</h2>
//         </div>
//     }
// }