import React from 'react'
import { 
    Box,
    Grid,
    styled,
    Typography,
} from '@mui/material'
import Title from './Title'
import imgDetail from '../../public/finger.gif';
import imgDetail2 from '../../public/search.gif';


const GetStarted = () => {

    const CustomGridItem = styled(Grid) ({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    })
    
    const CustomTypography = styled(Typography) ({
        fontSize: '1.1rem',
        textAlign: 'start',
        lineHeight: '1.5',
        color: '#515151',
        marginTop: '1.5rem',
    })

    return (
            
        <Grid container spacing={{ xs: 4, sm: 4, md: 0 }}   
        sx={{
            py: 10,
            px: 2,
             
        }}
        >
            <CustomGridItem item xs={12} sm={8} md={6} 
            component = 'section'
           
            >
                <Box component='article'
                sx={{
                    px: 4,
                }}
                >
                    <Title
                    text={
                        'KareerNest, where opportunities truly are at your fingertips.'
                    }
                    textAlign={'start'}
                    />
                    <CustomTypography>
                    KareerNest is your gateway to a world of endless opportunities. 
                    With our platform, the vast landscape of career prospects is just a click away, ready to be explored and embraced. 
                    From job openings to professional development resources, networking events to industry insights, 
                    Whether you're a seasoned professional seeking new horizons or a recent graduate embarking on your career journey, 
                    our comprehensive array of services ensures that the opportunities you seek are always within reach.
                    </CustomTypography> 
                </Box>

            </CustomGridItem>
            
            <Grid item xs={12} sm={4} md={6}>
                <img src={imgDetail} alt="" 
                style={{
                    width: '100%',
                }}
                />
            </Grid>

            <Grid item xs={12} sm={4} md={6}
            sx={{
                order: {xs: 4, sm: 4, md: 3}
            }}
            >
                <img src={imgDetail2} alt="" 
                style={{ 
                    width: "100%",
                }}
                />
            </Grid>

            <CustomGridItem item xs={12} sm={8} md={6}
            sx={{
                order: {xs: 3, sm: 3, md: 4}
            }}
            >
                <Box component='article'
                sx={{
                    px: 4,
                }}
                >
                    <Title
                    text={
                        'KareerNest is here to streamline your path to achievement.'
                        
                    }
                    textAlign={'start'}
                    />
                    <CustomTypography>
                    In a world teeming with options and possibilities, navigating the vast expanse of opportunities can often feel overwhelming. 
                    That's where we come in. At KareerNest, we simplify the search by bringing everything together in one convenient place. 
                    Whether you're seeking employment, exploring educational opportunities, or searching for resources to advance your career, 
                    KareerNest is your comprehensive destination. 
                    With our platform, you can seamlessly access a multitude of options, streamlining your journey towards success. 
                    Say goodbye to scattered searches and endless tabs
                    </CustomTypography>
                </Box>
            </CustomGridItem>
        </Grid>
    )
}

export default GetStarted;