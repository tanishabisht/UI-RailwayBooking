import classes from './Cards.module.css'
import { NavLink } from 'react-router-dom'

const SeatTypeCard = () => {

    return(
            <div className="card purple darken-4">
                <h6><span className={classes.CostPill}>$ 600</span></h6>
                <div className="card-content white-text" style={{padding:'0.5rem 1rem'}}>
                    <p>AC 3 Tier (#A)</p>
                    <p>Train on time</p>
                </div>
                <div className="card-action center" style={{padding:'0.5rem'}}>
                    <NavLink className='white-text' to="/">Book Now</NavLink>
                </div>
            </div>
    )
}

export default SeatTypeCard



              
// <div className={classes.SeatTypeContainer}>
// <p>sdufhskjdfd</p>
// <p>sdufhskjdfd</p>
// <button>BOOK NOW</button>
// </div>