import React, { useState } from "react";

interface objInterface {
    id?: number;
    name?: string;
    add?: string
}
const UsestateComponent: React.FC = () => {
    const objData = {
        id: 1,
        name: '',
        add: ''
    }
    const obValContData : any[]=[];
    const [objVal, setObjVal] = useState<objInterface>(objData)
    const [objValCont, setObjValCont] = useState(obValContData)
    const handleObjectUpdate = () => {
        const address = "add";
        setObjVal((prevObj) =>
        (
            { ...prevObj, name: "xyz", [address]: "abbbj sknfk" }
        ))

        //----------------------
        const tmpData = {
            id: Math.random(),
            name: `kkk-${Math.random()}`,
            add: ''
        }
        
        setObjValCont((preData)=>(
            [...preData,tmpData ]
        ))
        //----------------------- sort and update
        setObjValCont((prevObjValCont) => {
            const updatedArray = [...prevObjValCont, tmpData]; // Create a new array with tmpData
            updatedArray.sort((a, b) => a.id - b.id);          // Sort by id in ascending order
            return updatedArray;                               // Return the sorted array
          });
    }

    return (
        <>
            Object val : {JSON.stringify(objVal)}
            <button onClick={handleObjectUpdate}> Handle Obj Update</button>
            ArrayObject : {objValCont.map((item)=>(                  
                <div key={Math.random()}>{JSON.stringify(item)}</div>
                 )
            )}
        </>
    )
}

export default UsestateComponent