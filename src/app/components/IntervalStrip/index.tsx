import * as React from 'react';
import styled from 'styled-components';
import { includes } from 'lodash';
import * as Tonal from 'tonal';

import simplifyNoteName from '../../lib/simplifyNoteName';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    background: #aaa;
`;

const Note = styled.div`
    height: 32px;
    padding: 0 8px;
    display: flex;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    background: #333;
    color: ${ props => props.color };
`;

interface FlexColumnProps {
    isactive?: string;
}

const FlexColumn = styled.div<FlexColumnProps>`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    opacity: ${ props => props.isactive === "true" ? 1 : 0.5 };
`;

// For now, I don't mind the repeatition. 
// I doubt this will be the final way of handling the interval colors.
const chromaticColors = [
    '#FF6B6B',
    '#FF8E72',
    '#FFAF87',
    '#FFAB5E',
    '#FFE66D',
    '#DCF799',
    '#ABE188',
    '#67E5D2',
    '#67C5E5',
    '#678FE5',
    '#8267E5',
    '#EE92C2',
];

const intervals = [ 
    '1P',
    '2m',
    '2M',
    '3m',
    '3M',
    '4P',
    '5d',
    '5P',
    '6m',
    '6M',
    '7m',
    '7M',
]

const getRelativeChromaticColor = ( semitones: number ) => chromaticColors[ semitones ];

interface IntervalStripProps {
    root: any;
    activeIntervals?: string[];
}
const IntervalStrip: React.FC<IntervalStripProps> = ({ root, activeIntervals = [] }) => {
    const activeSemitones = activeIntervals.map(interval => Tonal.interval(interval).semitones);

    return (
        <Container>
        {intervals.map(interval => {
            const semitones = Tonal.interval(interval).semitones;
            const color = getRelativeChromaticColor(semitones % 12);
            const note = Tonal.transpose(root, interval);
            const isactive = includes(activeSemitones, semitones);

            // Use interval as the key prop
            return (
                <FlexColumn key={interval} isactive={isactive.toString()}>
                    <Note color={color}>{simplifyNoteName(note, '#')}</Note>
                    <Note color={color}>{interval.replace('1P', 'Root')}</Note>
                </FlexColumn>
            );
        })}
    </Container>
    );
};

export default IntervalStrip;
