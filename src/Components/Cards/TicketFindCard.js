import classes from './Cards.module.css'

const TicketFindCard = () => {

    const user_data = {
        name: 'NAME OF THE TRAIN',
        from: 'HERE',
        to: 'HERE',
        time: 'TIMINGS',
        pnrNumber: '726387263'
    }


    return(
        <div className={classes.TicketFindContainer}>
            <h5>{user_data.name}</h5>
            <p><strong>FROM</strong> {user_data.from} <strong>TO</strong> {user_data.to}</p>
            <p><strong>TIMINGS:</strong> {user_data.time}</p>
            <p><strong>PNR NUMBER:</strong> {user_data.pnrNumber}</p>
        </div>
    )
}

export default TicketFindCard