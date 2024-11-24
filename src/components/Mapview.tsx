import React, { useContext } from 'react'
import { PlacesContext } from '../context'
import { Loading } from './Loading'

export const Mapview = () => {

    const {isLoading, userLocation} = useContext(PlacesContext )

  return (
        <div>
            {isLoading ? (
                <Loading/>
            ) : (
                <>
                
                <div>{userLocation?.join(',')}</div>   
                </>
            )}
        </div>
    
  )
}
