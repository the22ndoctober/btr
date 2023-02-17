import {React, useEffect} from 'react' 
import '../../../style/footer/merch/merch.css'
import { getCartItems } from '../../../store/reducers/cards'
import { useDispatch, useSelector} from 'react-redux'

export default function Merch(){
     const { isLoading } = useSelector((state)=> state)

     const dispatch = useDispatch()

     useEffect(()=>{
          dispatch(getCartItems())
     },[])

     if(isLoading){
          return(
               <div className='merch'>
                   <h1 style={{color: '#fff'}}>LOADING...</h1> 
               </div>
          )
     }
     if(!isLoading){
          return(
               <div style={{color: '#fff'}}>
                    PISYA
               </div>
          )
     }
     


}