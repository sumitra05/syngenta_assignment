import React , {useContext} from 'react'
import { BodyWrapper, DivWrapper, CircleWrapper, StyledInput} from './Style.module';
import { CircleContext } from '../context/CirclesContext';

const Circles = () => {

    const {circleList, circle, handleChange, shiftLeft, shiftRight, num} = useContext(CircleContext)
  return (
    
    <BodyWrapper>
        
        <div style={{display: "grid"}}>
            <h2>Circle-container</h2>
            <DivWrapper>
                    {
                        circle.map((item, id)=>{
                        return(
                            <CircleWrapper style={{cursor:"pointer"}} key={id} circleColor={item.circleColor} onClick={ () => shiftRight(item)} ></CircleWrapper>
                        )
                        })
                    }
            </DivWrapper>
        </div>
        
        <div>
              <h2>Circle-list</h2>
                {
                    circleList.map((item,id) =>{
                        return(
                            <CircleWrapper key={id} circleColor={item.circleColor} ></CircleWrapper>
                        )
                    })
                }
         </div>
        

        <StyledInput>
            <h2>Input-section</h2>
            <input type="Number" placeholder='Enter circle number here' value={num} onChange={handleChange} />
            <button onClick={shiftLeft}>SHOOT</button>
        </StyledInput>
            
        
    </BodyWrapper>
    
    
  )
}

export default Circles;