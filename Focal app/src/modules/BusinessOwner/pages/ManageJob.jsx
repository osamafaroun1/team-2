import CardManageJob from '../components/CardManageJob'
import './ManageJob.css'
import { Data } from '../components/Data_Cards'
import { useState } from 'react'
import Footer from '../../../../src/components/Footer/Footer'
import AllNav from '../../../../src/components/NavBarAll/NavBar'
import { Link } from 'react-router-dom'


function ManageJob() {
    const [s, sSet] = useState('')
    function handlechange(e) {
        sSet(e.target.value)
    }
    function pti() {
        console.log(s);
    }
    return (
        <>
            <AllNav />
            <div className='Ah-manage-job'>
                <div className='Ah-large-screen'>
                    <div className="Ah-title">
                        <h1 className='mb-4'>
                            Manage Job
                        </h1>
                        <p>
                            Find a new employee to be part of your company...
                            Add a post and manage it from here.
                        </p>
                    </div>
                    <Link to="/AddJob"  className='Ah-add-job mx-auto mt-3 mb-3' >Add New Job</Link>
                    <div className="mb-2">
                        <nav className='Ah-links d-flex justify-content-center gap-4 mb-3'>
                            <a href="#" className='Ah-active-link'>All Posts</a>
                            <a href="#">Active Posts</a>
                            <a href="#">Wating Posts</a>
                            <a href="#">Closed Posts</a>
                        </nav>
                    </div>
                    <div className="Ah-cards d-flex justify-content-center flex-wrap mt-5 gap-4 mb-4" >
                        {Data.map((card, i) =>
                            <CardManageJob
                                id={i}
                                title={card.title}
                                status={card.Status}
                                time={card.time}
                                date={card.date}
                                candidate_num={card.candidate_num}
                                views_num={card.views_num} />
                        )}
                    </div>
                </div>
            </div>
            <footer>
                <Footer />
            </footer>
        </>

    )
}

export default ManageJob