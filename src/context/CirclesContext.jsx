import React, { useEffect, useState } from "react";
import { createContext } from "react";

export const CircleContext = createContext();

function CircleContextProvider({children}) {
    
    const [circleList, setCircleList] = useState([]);
    const [circle, setCircle] = useState([]);
    const [num, setNum] = useState("");

    useEffect(() =>{
        let arr = [];

        for(let i=1; i<=5; i++){
            let r = Math.floor(Math.random() * 256 >> 0);
            let b = Math.floor(Math.random() * 255 >> 0);
            let g = Math.floor(Math.random() * 254 >> 0);

            let randomColor = `rgb(${r}, ${b}, ${g})`; // generates random colors
            
            let data = {
                curr_pos : i,
                orig_pos : i,
                circleColor : randomColor
            }
            arr.push(data); //storing random circles here
        }

        setCircleList([...arr]);
    }, []);


    const handleChange = (e) =>{
        setNum(e.target.value);
    };

    const shiftLeft = () => {
        // console.log(circleList)
       for(var i=0; i<circleList.length; i++){
           var curr_circle = circleList[i];
           if(num == curr_circle.curr_pos){
                curr_circle.curr_pos = 0;
                setCircle([...circle, curr_circle]);
            // console.log(circleList[i].curr_pos, num)
           }

        }
        setNum("");
        updateList();
    }

    const updateList = () => {
        var arr = circleList.filter((item) => item.curr_pos > 0);
        arr.sort((x,y) => x.orig_pos - y.orig_pos);
        arr.map((item, id) => item.curr_pos = id + 1);
        setCircleList([...arr]);
    }

    const shiftRight = (item) => {
        setCircle([...circle.filter((e) => e.orig_pos != item.orig_pos)]);
        var arr = [...circleList, item];
        arr.sort((x,y) => x.orig_pos - y.orig_pos);
        arr.map((item, id) => item.curr_pos = id + 1);
        setCircleList([...arr]);
    }

    return (
    <CircleContext.Provider value={{circleList, circle, handleChange, shiftLeft, shiftRight, num}}>
        {children} 
    </CircleContext.Provider>
  )
}

export default CircleContextProvider;