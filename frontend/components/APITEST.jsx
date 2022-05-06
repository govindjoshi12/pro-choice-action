import Image from "next/image";
import { getReps, getForm } from "../pages/api/api";

const APITEST = () => {
    return (
        <div className="container">
            {
                console.log(getReps("senate", "tx"))
            }
            {
                // console.log(getForm(['C000880']))
            }
        </div >
    );
};

export default APITEST;
