import React, { useRef } from 'react';
import { useInView } from 'framer-motion';

const useInViewForDates = (datesArray) => {
    const refs = useRef([]);
    const inViews = [];

    refs.current = datesArray.map((_, i) => refs.current[i] ?? React.createRef());

    refs.current.forEach((ref, i) => {
        const inView = useInView(ref, { margin: '0px 0px -30% 0px' });
        inViews[i] = inView;
    });

    return [refs.current, inViews];
};

export default useInViewForDates;
