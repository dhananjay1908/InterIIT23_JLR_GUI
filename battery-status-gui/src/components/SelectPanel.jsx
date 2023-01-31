import Container from '@mui/material/Container';
import MenuIcon from '@mui/icons-material/Menu';
import { Grid, Typography } from '@mui/material';
import "./styles.css"

const SelectPanel = () => {
    return (
        <Container className='p-3'>
            <div className='d-flex align-items-center justify-content-between'>
                <h1 style={{ color: "white" }}>Welcome, Dhananjay</h1>
                <MenuIcon sx={{ color: "white" }} />
            </div>
            <Grid container className='mt-4' spacing={2}>
                <Grid item md={4} sm={6} xs={12}>
                    <div className='p-2 d-flex justify-content-center car'>
                        <Typography color="white" variant='h5'>
                            Sedan
                        </Typography>
                    </div>
                </Grid>
                <Grid item md={4} sm={6} xs={12}>
                    <div className='p-2 d-flex justify-content-center car'>
                        <Typography color="white" variant='h5'>
                            HatchBack
                        </Typography>
                    </div>
                </Grid>
                <Grid item md={4} sm={6} xs={12}>
                    <div className='p-2 d-flex justify-content-center car'>
                        <Typography color="white" variant='h5'>
                            MiniVan
                        </Typography>
                    </div>
                </Grid>
                <Grid item md={4} sm={6} xs={12}>
                    <div className='p-2 d-flex justify-content-center car'>
                        <Typography color="white" variant='h5'>
                            Pickup Truck
                        </Typography>
                    </div>
                </Grid>
                <Grid item md={4} sm={6} xs={12}>
                    <div className='p-2 d-flex justify-content-center car'>
                        <Typography color="white" variant='h5'>
                            SUV
                        </Typography>
                    </div>
                </Grid>
                <Grid item md={4} sm={6} xs={12}>
                    <div className='p-2 d-flex justify-content-center car'>
                        <Typography color="white" variant='h5'>
                            Wagon
                        </Typography>
                    </div>
                </Grid>
                <Grid item md={4} sm={6} xs={12}>
                    <div className='p-2 d-flex justify-content-center car'>
                        <Typography color="white" variant='h5'>
                            Coupe
                        </Typography>
                    </div>
                </Grid>
            </Grid>
        </Container>
    )
}

export default SelectPanel;