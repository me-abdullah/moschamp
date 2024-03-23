import React, { useState, useEffect } from 'react';

import axios from 'axios';

import {motion} from 'framer-motion';
const Rules = () => {
    const [documentData, setDocumentData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            let QUERY = '*[_type == "rules"]{heading, description}';
            let production = 'production';
            let databaseId = 'lqfv3yzx';
            const response = await axios.get(`https://${databaseId}.api.sanity.io/v1/data/query/${production}?query=${QUERY}`);
            console.log(response, "response.data")
            setDocumentData(response.data.result?.length > 0 ? response.data.result[0] : {});
            setLoading(false);
        } catch (error) {
            console.log(error, "error")
            setError(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []); 
    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <section className="text-gray-600 flex items-center justify-center h-screen relative">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="sm:text-3xl text-2xl title-font mb-4 text-[#115740] font-bold">
                        {documentData.heading}
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        {documentData.description}
                    </p>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base mt-5">
                    Offical rules for 2024 coming soon.
                    </p>
                    
                </div>
                <div className="flex justify-center lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end mt-8">
                    <motion.button className="text-white bg-green-500 border-0 py-2 px-8 focus:outline-none font-bold hover:bg-green-600 rounded text-lg" 
                    whileHover={{
                        scale: 1.1,
                        textShadow: "0px 0px 8px rgb(34,197,94)",
                        boxShadow: "0px 0px 8px rgb(34,197,94)",
                      }}>
                        <a href='https://certiport.filecamp.com/s/d/H8WEfz24of7MMnap'> Download Official Rules</a>
                    </motion.button>
                </div>
            </div>
        </section>


    );
};

export default Rules;
