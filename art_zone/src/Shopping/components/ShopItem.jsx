import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const ShopItem = ({id, shopProfileImg, shopName, phoneNo, shopAddress}) => {
  return (
    <li className='inline-block mx-5 mb-8'>
      <Card sx={{ maxWidth: 345 }}>
        <Link to={`/shops/${id}`}>
          <CardMedia  sx={{ height: 140 }} src={`http://localhost:5000/${shopProfileImg}`}  component="img"/>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {shopName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {shopAddress} <br/>
              {phoneNo}
            </Typography>
          </CardContent>
          </Link>
      </Card>
    </li>
  )
}

export default ShopItem
