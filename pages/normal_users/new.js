import React, { useEffect } from 'react';

const NewPage = () => {

    useEffect(()=>{
        console.log('hi');
    }, [])
    
    return(
        <div>
            회원가입
        </div>
    )
}

export default NewPage;