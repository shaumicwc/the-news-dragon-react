import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {

    const [catagories, setCatagories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/catagories')
            .then(res => res.json())
            .then(data => setCatagories(data))
            .catch(error => console.error(error))
    }, [])

    return (
        <div>
            <h4>All Category</h4>
            <div className='ps-4 '>
                {
                    catagories.map(catagoey =>
                        <p
                            key={catagoey.id}
                        >
                            <Link to={`/catagoey/${catagoey.id}`} className='text-decoration-none text-black'>{catagoey.name}</Link>

                        </p>)
                }
            </div>
        </div>
    );
};

export default LeftNav;