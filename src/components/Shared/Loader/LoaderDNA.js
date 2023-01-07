import React from 'react';
import { Dna } from 'react-loader-spinner';

const LoaderDNA = ({ margin }) => {
    return (
        <Dna
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperclassName={`dna-wrapper ${margin}`}
        />
    );
};

export default LoaderDNA;