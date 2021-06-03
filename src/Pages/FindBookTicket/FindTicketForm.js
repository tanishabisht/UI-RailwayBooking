import classes from './FindBookTicket.module.css'
import M from 'materialize-css'
import { useEffect } from 'react'

const FindTicketForm = () => {

    useEffect(() => {
        M.AutoInit()
    }, [])


    return(
        <div className={classes.CenterContainer} style={{minHeight:'90vh'}}>
            <div className={classes.FormContainer}>
                <h3 className={classes.FormTitle}>BOOK</h3>
                <p className={classes.FormTitle}>YOUR TICKET</p><br/>
                
                <div className="input-field">
                    <select defaultValue=''>
                        <option value="" disabled>Choose your option</option>
                        <option value="1">New Delhi</option>
                        <option value="2">Chennai</option>
                        <option value="3">Maharashtra</option>
                    </select>
                    <label>From</label>
                </div>

                <div className="input-field">
                    <select defaultValue=''>
                        <option value="" disabled>Choose your option</option>
                        <option value="1">New Delhi</option>
                        <option value="2">Chennai</option>
                        <option value="3">Maharashtra</option>
                    </select>
                    <label>To</label>
                </div>

                <div className="input-field">
                    <input id='date' type="text" className="datepicker" />
                    <label htmlFor="date">Choose Date ...</label>
                </div>

                <button className={`${classes.BtnWide} waves-effect waves-light btn purple darken-4`}>FIND TRAINS</button>
            </div>
        </div>
    )
}

export default FindTicketForm