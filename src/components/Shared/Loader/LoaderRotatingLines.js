import React from 'react';
import { RotatingLines } from 'react-loader-spinner';

const LoaderRotatingLines = ({ margin }) => {

    return (
        <RotatingLines
            strokeColor="grey"
            strokeWidth="3"
            animationDuration="0.75"
            width="60"
            visible={true}
            // wrapperStyle={{}}
            wrapperclassName="dna-wrapper block mx-auto"
        />
    );
};

export default LoaderRotatingLines;