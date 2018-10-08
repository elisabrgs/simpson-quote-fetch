import  React  from  'react';

const  DisplaySimpson = ({ simpson }) => {

    return (
        <div  className="DisplaySimpson"> 
            <ul>
                <li><h1>{simpson.quote}</h1></li>
                <li><h2>{simpson.character}</h2></li>
            </ul>
            <img  src={simpson.image}  alt="picture"  />
        </div>
    );
};

export  default  DisplaySimpson;