import Container from '@mui/material/Container';
import MenuIcon from '@mui/icons-material/Menu';
import { Grid, Typography } from '@mui/material';
import "./styles.css"

const BatteryGUI = () => {
    return (
        <Container className='p-3'>
            <div className='d-flex align-items-center justify-content-between'>
                <h1 style={{ color: "white" }}>Welcome, Dhananjay</h1>
                <MenuIcon sx={{ color: "white" }} />
            </div>
            <div className='d-flex flex-column align-items-center'>
                <div className="batteryTop"></div>
                <div className="batteryBody">
                    <div className="batteryInner flex-fill visible"></div>
                    <div className="batteryInner flex-fill visible"></div>
                    <div className="batteryInner flex-fill visible"></div>
                    <div className="batteryInner flex-fill visible"></div>
                    <div className="batteryInner flex-fill visible"></div>
                </div>
            </div>
        </Container>
    )
}

export default BatteryGUI;