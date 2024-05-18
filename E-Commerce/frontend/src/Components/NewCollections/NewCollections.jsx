import React from 'react'
import './NewCollections.css'
import new_collection from '../Assets/new_collections'
import new_collections from '../Assets/new_collections'
export const NewCollections = () => {
    return (
        <div className='new-collections'>
            <h1>NEW COLLECTIONS</h1>
            <hr />
            <div className="collections">
                {new_collections.map((item, i) => {
                    return <item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>
        </div>
    )
}
