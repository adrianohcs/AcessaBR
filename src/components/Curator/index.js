import React from 'react'
import '../Curator/styles.css'
import curatorPhoto from '../../images/slav-cat.png'

function CuratorItem() {
    return (
        <div className="curator__container">
            <div className="curator__photo">
                <img src={curatorPhoto} alt="Foto curador" />
            </div>
            <div className="curator__details">
                <div>
                    <h3>Nome do Curador</h3>
                    <h6>Curadoria</h6>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, corporis nam! Consequatur atque porro repudiandae perspiciatis, inventore est delectus.</p>
            </div>
        </div>
    )
}

export default CuratorItem