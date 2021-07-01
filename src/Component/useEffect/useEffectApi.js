import React, { useEffect, useState } from 'react'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
const UseEffectApi = () => {

    const [users, setUsers] = useState([]);
    const getUser = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos');
        setUsers(await response.json());

    }

    useEffect(() => {
        getUser();
    }, []);

    return (
        <>
            <h2>List of Github User </h2>
            <div className="container-fluid mt-5">
                <div className="row text-center">

                    {
                        users.map((curElem) => {
                            return (
                                <React.Fragment>

                                    <div className="col-10 col-md-4 mt-5" key={curElem.id}>
                                        <div className="card p-2">
                                            <div className="d-flex align-item-center">
                                                <div className="img"><img src={curElem.thumbnailUrl} className="rounded w-155" /> </div>
                                                <div className="ml-3 w-100">
                                                    <h4 className="mb-0 mt-0 textLeft">Swati Singh</h4>
                                                    <span className="textLeft"> {curElem.title}</span>
                                                    <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                                                        <div className="d-flex flex-column">
                                                            <span className="articles">Articles</span>
                                                            <span className="number1">38</span>
                                                        </div>
                                                        <div className="d-flex flex-column">
                                                            <span className="followers">followers</span>
                                                            <span className="number2">980</span>
                                                        </div>
                                                        <div className="d-flex flex-column">
                                                            <span className="rating">Rating</span>
                                                            <span className="number3">8.9</span>
                                                        </div>
                                                    </div>


                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    </React.Fragment>
                            )
                        })
                    }

                </div>

            </div>

        </>



    )

}
export default UseEffectApi;