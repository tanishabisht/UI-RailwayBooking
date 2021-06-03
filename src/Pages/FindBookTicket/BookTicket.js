import classes from './FindBookTicket.module.css'
import { SeatTypeCard } from '../../Components'

const BookTicket = () => {

    const ticket_info = {
        trainName: 'VIAB EXPRESS',
        from: 'Delhi',
        to: 'Chennai',
        time: '20.00pm',
        pnrNumber: '236571273523',
        type: [
            {type:'AC 3 Tier (#A)', price:'600'},
            {type:'AC 3 Tier (#A)', price:'600'},
            {type:'AC 3 Tier (#A)', price:'600'}
        ]
    }

    return(
        <div className={classes.CenterContainer} style={{minHeight:'90vh'}}>
            <div className={classes.TicketInfoContainer}>
                <h3>{ticket_info.trainName}</h3>
                <p>[{ticket_info.from} - {ticket_info.to}]</p>
                <p><strong>TIME - </strong>{ticket_info.time}</p>
                <p><strong>PNR - </strong>{ticket_info.pnrNumber}</p>
                <br/>
                <div className='row'>
                    <div className='col m4'><SeatTypeCard/></div>
                    <div className='col m4'><SeatTypeCard/></div>
                    <div className='col m4'><SeatTypeCard/></div>
                </div>
                
            </div>
        </div>
    )
}

export default BookTicket