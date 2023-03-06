import {React, useEffect, useState} from 'react' 
import '../../../style/footer/merch/merch.css'
import { selectState, selectCart } from '../../../store/reducers/cards'
import { useDispatch, useSelector} from 'react-redux'
import Card from './Card/Card'

export default function Merch(){
     const cards = useSelector(selectState)
     const cart = useSelector(selectCart)
     const [transition, setTransition] = useState(0)
     const [sliderButtonBackActive, setSliderButtonBackActive] = useState(1)
     const [sliderButtonForwardActive, setSliderButtonForwardActive] = useState(1)
     const imageToShow = 4
     const distanceToScroll = 1120
     const pages = Math.ceil(cards.length/imageToShow)
     

     useEffect(()=>{
          console.log(transition)
          setSliderButtonBackActive(1)
          setSliderButtonForwardActive(1)
          if(transition === 0) setSliderButtonBackActive(0.4)
          if(pages <= Math.abs(((transition/distanceToScroll)))+1) setSliderButtonForwardActive(0.4)
     },[transition])

     const transitionForward = ()=>{
          if(pages > Math.abs(((transition/distanceToScroll)))+1){
               setTransition(state=> state-distanceToScroll)
          }
     }

     const transitionBack = ()=>{
          if(transition < 0){
               setTransition(state=> state+distanceToScroll)
          }
     }

     const dispatch = useDispatch()

     return(
          <>
          <div className="cart">
               <span className="cart__amount">{cart.length}</span>
               <svg fill='#fff' viewBox="0 0 122.9 107.5"><g><path d="M3.9,7.9C1.8,7.9,0,6.1,0,3.9C0,1.8,1.8,0,3.9,0h10.2c0.1,0,0.3,0,0.4,0c3.6,0.1,6.8,0.8,9.5,2.5c3,1.9,5.2,4.8,6.4,9.1 c0,0.1,0,0.2,0.1,0.3l1,4H119c2.2,0,3.9,1.8,3.9,3.9c0,0.4-0.1,0.8-0.2,1.2l-10.2,41.1c-0.4,1.8-2,3-3.8,3v0H44.7 c1.4,5.2,2.8,8,4.7,9.3c2.3,1.5,6.3,1.6,13,1.5h0.1v0h45.2c2.2,0,3.9,1.8,3.9,3.9c0,2.2-1.8,3.9-3.9,3.9H62.5v0 c-8.3,0.1-13.4-0.1-17.5-2.8c-4.2-2.8-6.4-7.6-8.6-16.3l0,0L23,13.9c0-0.1,0-0.1-0.1-0.2c-0.6-2.2-1.6-3.7-3-4.5 c-1.4-0.9-3.3-1.3-5.5-1.3c-0.1,0-0.2,0-0.3,0H3.9L3.9,7.9z M96,88.3c5.3,0,9.6,4.3,9.6,9.6c0,5.3-4.3,9.6-9.6,9.6 c-5.3,0-9.6-4.3-9.6-9.6C86.4,92.6,90.7,88.3,96,88.3L96,88.3z M53.9,88.3c5.3,0,9.6,4.3,9.6,9.6c0,5.3-4.3,9.6-9.6,9.6 c-5.3,0-9.6-4.3-9.6-9.6C44.3,92.6,48.6,88.3,53.9,88.3L53.9,88.3z M33.7,23.7l8.9,33.5h63.1l8.3-33.5H33.7L33.7,23.7z"/></g></svg>
          </div>
          <h1 className='merch_h1'>Our Merch</h1>
          <div className="merchWrapper">
               <button className='slider__button merchCard__backBtn' onClick={transitionBack} style={{opacity: sliderButtonBackActive}}>
                    {'<'}
               </button>

               <div className="merchSlider">

                    <div className="merchCardHolder" style={{left: transition}}>

                         {cards.map(card=>
                              <Card
                                   name={card.name}
                                   src={card.src}
                                   price={card.price}
                                   type={card.type}
                                   sizes={card.sizes}
                                   amount={card.amount}
                              />     
                         )}

                    </div>

               </div>
               
               <button className='slider__button merchCard__forwardBtn' onClick={transitionForward} style={{opacity: sliderButtonForwardActive}}>
                    {'>'}
               </button>
          </div>
          </>
     )

     
     


}