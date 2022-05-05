import Image from "next/image";
import { getReps, getForm } from "../pages/api/api";

const APITEST = () => {
    return (
        <div className="container">
            {console.log(getReps("house", "tx"))}
        </div >
    );
};

export default APITEST;
