import React from 'react'

export const Characters = ({characters = []}) => {


  return (
    <div className='row'>
          {
            characters.map((item, index) => (
              <div key={index} className='col mb-4'>
                <div className="card border border-primary border-3 rounded rounded-lg text-primary bg-dark mb-3" style={{minWidth: "200px", minHeight:"530px"}}>
                  <img className="card-img-top" src={item.image} alt=""/>
                  <div className='card-body fw-bold text-primary'>
                    <h5 className='card-title'> {item.name} </h5>
                    <hr/>
                     <div className='text-white'>
                        <p>ID {item.id}</p>
                        <p>Especie: {item.species}</p>
                        <p>Ubicación: {item.location.name}</p>
                        <p className="text-info">Status: {item.status}</p>       
                     </div>            
                  </div>
                </div>
              </div> 
            ))}
    </div>
  )
}

export default Characters 