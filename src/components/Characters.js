import React from 'react'

export const Characters = ({characters = []}) => {
  return (
    <div className='row'>
          {
            characters.map((item, index) => (
              <div key={index} className='col mb-4'>
                <div className="card border rounded text-white bg-secondary mb-3" style={{minWidth: "200px"}}>
                  <img className="card-img-top" src={item.image} alt=""/>
                  <div className='card-body'>
                    <h5 className='card-title'> {item.name} </h5>
                    <hr/>
                    <p>ID {item.id}</p>
                    <p>Especie: {item.species}</p>
                    <p>Ubicación: {item.location.name}</p>
                    <p>Estado: {item.status}</p>                   
                  </div>
                </div>
              </div> 
            ))}
    </div>
  )
}

export default Characters 