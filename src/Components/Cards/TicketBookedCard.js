import classes from './Cards.module.css'

const TicketCard = () => {

    const ticket_data = [
        ['S No', '43242351223'],
        ['Ticket ID', '22-4-2021'],
        ['Train Number', 'Tambaram (TBM)'],
        ['Ticket Status', 'Vishakapatnam (VKSP)'],
        ['Seat Number', 'W/L 22 CK'],
        ['Seat Type', 'AC 3'],
        ['Date', 'AC 3'],
        ['Total Price', 'AC 3']
    ]


    return(
        <div className={classes.TicketCardContainer}>        
            <table className="highlight container">
                <tbody>
                    {ticket_data.map(info => <tr key={info[0]}><th>{info[0]}</th><td>{info[1]}</td></tr>)}
                </tbody>
            </table>
        </div>
    )
}

export default TicketCard