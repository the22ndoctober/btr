import {React, useEffect, useState} from 'react' 
import '../../../style/footer/merch/merch.css'
import { selectState } from '../../../store/reducers/cards'
import { useDispatch, useSelector} from 'react-redux'
import Card from './Card/Card'

export default function Merch(){
     const cards = useSelector(selectState)
     const [trasition, setTransition] = useState(0)

     const transitionForward = ()=>{
          setTransition(state=> state-1090)
     }

     const transitionBack = ()=>{
          setTransition(state=> state+1090)
     }

     const dispatch = useDispatch()

     return(
          <>
          <h1 className='merch_h1'>Our Merch</h1>
          <div className="merchWrapper">
               <button className='merchCard__button merchCard__backBtn' onClick={transitionBack}>
                    {'<'}
               </button>

               <div className="merchSlider">

                    <div className="merchCardHolder" style={{left: trasition}}>

                         {cards.map(card=>
                              <Card
                                   name={card.name}
                                   src={card.src}
                                   price={card.price}
                                   type={card.type}
                                   sizes={card.sizes}
                              />     
                         )}

                    </div>

               </div>
               
               <button className='merchCard__button merchCard__forwardBtn' onClick={transitionForward}>
                    {'>'}
               </button>
          </div>
          </>
     )

     
     


}