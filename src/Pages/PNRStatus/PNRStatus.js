import classes from './PNRStatus.module.css'
import { useEffect } from 'react'
import M from 'materialize-css'


const PNRStatus = () => {


    const pnr_data = [
        ['PNR Number', '43242351223'],
        ['Date of Journey', '22-4-2021'],
        ['From', 'Tambaram (TBM)'],
        ['To', 'Vishakapatnam (VKSP)'],
        ['Train Number', '12664'],
        ['Booking Status', 'W/L 22 CK'],
        ['Class', 'AC 3']
    ]
    
    useEffect(() => {
        M.AutoInit()
    }, [])

    return(
        <div className={classes.CenterContainer} style={{height:'100vh'}}>
            <div className={classes.FormContainer}>
                <p className={classes.FormTitle}>CHECK YOUR</p>
                <h3 className={classes.FormTitle}>PNR STATUS</h3><br/><br/>

                <div className="input-field">
                    <input id='pnr' type="number" className={`${classes.InputField} validate`} />
                    <label htmlFor="pnr">Enter PNR number ...</label>
                    <span><button className='waves-effect waves-light btn purple darken-4'>FIND TRAINS</button></span>
                </div>

                <table className="highlight container">
                    <tbody>
                        {pnr_data.map(info => <tr key={info[0]}><th>{info[0]}</th><td>{info[1]}</td></tr>)}
                    </tbody>
                </table>

                
            </div>
        </div>
    )
}

export default PNRStatus