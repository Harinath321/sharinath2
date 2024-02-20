import React, { useState, useEffect } from 'react';

function Education() {

    const [qualification, setqualification] = useState([]);

    useEffect(() => {

        const fetchqualification = async () => {

            try {

                const response = await fetch('https://bhavana1109.github.io/bhavana/Qualification.json');

                if (!response.ok) {

                    throw new Error('Failed to fetch students');

                }
                const data = await response.json();

                setqualification(data);

            } catch (error) {

                console.error('Error fetching Students:', error);

            }

        };
        fetchqualification();

    }, []);

    return (

        <div>

            <div >
            <h4>Education</h4>
                <ol>
                {qualification.map((Qualification) => (
                    <>
                    <li style={{textAlign:"left"}}>{Qualification.qualification}</li>
                    </>

                    ))}
                </ol>
                </div>
        </div>

    );

}

export default Education;