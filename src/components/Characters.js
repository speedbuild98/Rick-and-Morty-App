import React from 'react'


export const Characters = ({characters = []}) => {
  return(
    <div id="caracteres" className='row'>
          {
            characters.map((item, index) => (
              <div key={index} className='col mb-4 '>
                <div className="card border border-primary border-3 rounded rounded-lg text-primary bg-dark mb-3" style={{minWidth: "200px", minHeight:"530px"}}>
                  <img className="card-img-top" src={item.image} alt=""/>
                  <div className='card-body text-primary'>
                    <h4 className='card-title fw-bolder'> {item.name} </h4>
                    <hr/>
                     <div className='text-white text-capitalize  fw-bold'>
                        <p className={item.status === 'Alive' ? 'text-success' : 'text-danger'}>•{item.status}</p>  
                        <p className='text-secondary'>ID {item.id}</p>
                      </div>
                      <div className='text-white'>  
                        <p>Especie: {item.species}</p>
                        <p>Ubicación: {item.location.name}</p>                              
                     </div>            
                  </div>
                </div>
              </div> 
            ))}
    </div>
  )
}

export default Characters 