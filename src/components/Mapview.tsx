import React, { useContext } from 'react'
import { PlacesContext } from '../context'
import { Loading } from './Loading'
import { MapLibreMap } from './MapLibreMap'


export const Mapview = () => {

    const {isLoading, userLocation} = useContext(PlacesContext )

  return (
        <div>
            {isLoading ? (
                <Loading/>
            ) : (
                <>
                
                <div>{userLocation?.join(',')}</div> 

                <MapLibreMap center={userLocation}  />
                </>
            )}
        </div>
    
  )
}
