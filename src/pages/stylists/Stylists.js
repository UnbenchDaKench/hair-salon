import React from 'react'


//styles
import './Stylists.scss'
import Box from '@mui/material/Box'

//data
import stylists from '../../data/stylists'

const Stylists = () => {
  return (
    <div className='stylists-page'>
        <br />
        <br />
        <br />
        <h1 className='title'>Meet Our Team</h1>
        <Box className='stylists-section' sx={{
            display: 'flex',
            justifyContent: 'center'
        }}>
            
            <Box className='stylists-box' sx={{
                display: 'flex',
                flexDirection: {
                    xs: 'column',
                    md: 'row'
                },
                flexWrap:{
                    md: 'wrap'
                },
                justifyContent: {
                    md:'space-evenly',
                },
                width: {
                    xs: 320,
                    sm: 500,
                    md: 850,
                    xl: 1250

                },

                height: {
                    xs: 2100,
                    sm: 2300,
                    md:1400,
                    xl: 1200
                },
                
                backgroundColor: '#a88361',
                borderRadius: '20px'
            }}>
                

                {stylists.map((stylist, i) => (
                    <Box key={stylist.name} className='stylist' sx={{
                        width: {
                            xs: 320,
                            sm: 500,
                            md: 400,
                        },
                        height: {
                            xs:500,
                            md: 400,
                            xl: 500
                        },
                        display: 'flex',
                        flexDirection: 'column',
                        marginBottom: '5%'


                    }}>
                        <img className='stylist-img' src={stylist.picture} alt="" />
                        <Box className='stylist-description-box' sx={{
                            width: {
                                xs: '90%',
                                sm: '70%',
                                md: '90%'
                            },
                            height: {
                                xs: '50%',
                                lg: '60%'
                            },
                            marginLeft: '5%',
                            backgroundColor: '#6B5858',
                            borderRadius: '20px',
                            alignSelf: 'center'
                        }}>
                            <h3 className='stylist-name'>{stylist.name}</h3>
                            <p className='stylist-description'>{stylist.description}</p>
                        </Box>
                    </Box>
                ))}

            </Box>
        </Box>
    </div>
  )
}

export default Stylists