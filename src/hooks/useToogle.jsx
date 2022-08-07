import { useState } from "react";

export const useToggle = () => {
    const [isToggle, setToggle] = useState(false)

    const toggleIt = () => {
        setToggle((status) => !status)
    }

    return {isToggle,toggleIt}

}