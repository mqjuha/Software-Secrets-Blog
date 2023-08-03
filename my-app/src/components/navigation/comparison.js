import { Fragment } from "react";
import ReactLogo from './../../logo.svg';

import './comparison.css'
import { Typography } from "@mui/material";

export default function ComparisonDiagram ({variant = "comp2"|"comp3", titles = [], contents = []}){

    const renderContent = () => {
        switch (variant) {
            case 'comp2':
                return (
                    <div className="container">
                        <div className="circle first">
                            <Typography>{titles[0]}</Typography>
                            <Typography>{contents[0]}</Typography>
                        </div>
                        <div className="circle second">
                            <Typography>{titles[1]}</Typography>
                            <Typography>{contents[1]}</Typography>
                        </div>
                    </div>
                );
            case 'comp3':
                return (
                    <div className="container higher">
                        <div className="circle first">
                            <Typography>{titles[0]}</Typography>
                            <Typography>{contents[0]}</Typography>
                        </div>
                        <div className="circle second">
                            <Typography>{titles[1]}</Typography>
                            <Typography>{contents[1]}</Typography>
                        </div>
                        <div className="circle third">
                            <Typography>{titles[1]}</Typography>
                            <Typography>{contents[1]}</Typography>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    }

    return (
        <div className="comparison">
            <Fragment>
                {renderContent()}
            </Fragment>
        </div>

    );
}
