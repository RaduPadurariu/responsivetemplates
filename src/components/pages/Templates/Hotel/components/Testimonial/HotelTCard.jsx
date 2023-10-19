import React from 'react'

export const HotelTCard = (props) => {
  return (
    <>
        <div className="box">
            <i className='fa fa-quote-left'></i>
            <div className="para">
                <p>{props.desc}</p>
            </div>
            <hr />
            <div className="details flex">
                <div className="img">
                    <img src={props.profile} alt="" />
                </div>
                <div className="name">
                    <h3>{props.name}</h3>
                    <p>{props.post}</p>
                </div>
            </div>
        </div>
    </>
  )
}
