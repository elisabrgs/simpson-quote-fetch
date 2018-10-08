import  React  from  'react';

const  GenerateSimpson = ({ selectSimpson }) => {
    return (
        <div  className="GenerateSimpson">
            <button  onClick={selectSimpson} style={{marginTop:'5px'}}>Get simspon quote</button>
        </div>
    );
};

export  default  GenerateSimpson;