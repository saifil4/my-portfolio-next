import { chakra } from '@chakra-ui/react';
import React from 'react';

const SVG = chakra('svg');

const Logo = ({ fill, dimentions }: { fill: string, dimentions: { h: string, w: string } }) => {
    return (
        <SVG fill="url(#linear-gradient)" width={dimentions.w} height={dimentions.h} viewBox="0 0 764 581" preserveAspectRatio="xMidYMid meet">
            <g fill={fill}>
                <path d="M201 578.3 c-101.7 -10.4 -173.2 -60.3 -193.6 -135.2 -3.3 -12.1 -5.2 -23.8 -6 -37.3 l-0.7 -10.8 58.1 0 58.2 0 0 7 c0 14.7 5.6 34.7 13.2 46.6 13.5 21.4 38 34.4 72.3 38.3 6.1 0.7 79.8 0.8 228.5 0.3 207.8 -0.7 219.3 -0.8 215 -2.4 -24.2 -9.1 -212.9 -77.1 -214 -77.1 -1.6 0 -7.1 -1.9 -178.5 -63.5 -64.3 -23.1 -125.3 -45 -135.5 -48.7 -23.9 -8.6 -36.4 -16.5 -55.8 -35.8 -29.7 -29.2 -43.5 -61.6 -43.5 -101.7 0.1 -39.5 13 -70.7 40.8 -98.5 16.1 -16.1 31.3 -26.3 55.2 -36.9 24.7 -11.1 53.3 -18 84.6 -20.6 8.5 -0.6 106.1 -1 287.8 -1 l274.9 0 0 74 c0 40.7 -0.2 74 -0.4 74 -0.2 0 -60.8 21.4 -134.7 47.5 -73.9 26.2 -163.3 57.8 -198.6 70.3 -35.4 12.5 -64.3 22.9 -64.3 23.2 0 0.3 89.4 32 198.8 70.5 l198.7 70.1 0.3 74.2 0.2 74.2 -278.7 -0.2 c-153.4 0 -280.4 -0.3 -282.3 -0.5z m135.2 -370.9 c50.2 -18 94.9 -33.9 99.3 -35.4 16 -5.5 214 -76.2 215.3 -76.9 1.4 -0.8 -226 -2.1 -361.2 -2.1 -85.4 0 -91.5 0.3 -106.6 5.1 -13.5 4.2 -22.9 9.7 -31.6 18.3 -12.6 12.5 -17.4 24 -17.4 41.7 0 28.3 18.6 46.9 66.3 66.6 11.8 4.8 41.3 15.2 43.4 15.3 0.7 0 42.3 -14.7 92.5 -32.6z" />
            </g>
            <linearGradient
                id="linear-gradient"
                gradientUnits="userSpaceOnUse"
                x1="1041.6901"
                y1="169.485"
                x2="1383.9301"
                y2="169.485"
                gradientTransform="matrix(1 0 0 -1 -761.14 398.97)"
            >
                <stop offset="14%" stopColor="#2f343b" stopOpacity="0%" />
                <stop offset="43%" stopColor="#337082" stopOpacity="41%" />
                <stop offset="67%" stopColor="#369fb9" stopOpacity="73%" />
                <stop offset="79%" stopColor="#37b1cf" stopOpacity="85%" />
            </linearGradient>
        </SVG>
    )
}

export default Logo