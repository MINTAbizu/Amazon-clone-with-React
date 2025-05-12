import { createContext,useReducer,usecontext } from "react";



export const statecontext=createContext();


export const Stateprovider=({reducer, initialstate,chidren})=>(
    <statecontext.Provider value={useReducer({reducer,initialstate})}>

        {
            chidren
        }


    </statecontext.Provider>
);

export const usecontext=usecontext(statecontext);
