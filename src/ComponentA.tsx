import ComponentB from "./ComponentB.tsx";
import {createContext, useRef} from "react";

export const UserContext = createContext("");

function ComponentA() {

    const user = useRef("Ninny");

    return (
        <div className="box">
            <h1>ComponentA</h1>
            <h2>Hello, {user.current}</h2>
            <UserContext.Provider value={user.current}>
                <ComponentB/>
            </UserContext.Provider>
        </div>
    )
}

export default ComponentA;
