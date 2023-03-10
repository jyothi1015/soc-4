import React , {useEffect,useRef} from 'react';


const UseRefBasics = () => {
    const refContainer =useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(refContainer.current.value);
    };
    useEffect(()=>{
        console.log(refContainer.current);
        refContainer.current.focus();
    });

    return (
        <>
            <form className='from' onSubmit={handleSubmit}>
                <div>
                    <input type='text' ref={refContainer}/>Name
                </div>
                <button type='submit'>submit</button>
            </form>
        </>
    );
};

export default UseRefBasics;

