import React from 'react'

const Brand = ({image,name}) => {
    return (
        <li><a><p>{name}</p><img src={image} alt="apple-logo" /></a></li>
    )
}

export default Brand
