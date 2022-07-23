import React from "react";

export default function createAnimationStyle (animationName: string, size: number, parentSize: number, startX: number, startY: number): React.CSSProperties {

    let styleSheet = document.styleSheets[0];

    const keyframes =
        `@keyframes ${animationName} {
        0%{transform: rotate(0deg)
                       translate(${startX}px, ${startY}px)
                       rotate(0deg);} 
        100%{transform: rotate(360deg)
                         translate(${startX}px, ${startY}px)
                         rotate(-360deg);} 
    }`;

    let style = {
        animationName: animationName,
        animationTimingFunction: 'linear',
        animationDuration: '10s',
        animationIterationCount: 'infinite',
        width: size,
        height: size,
        borderRadius: '50%',
        overflow: 'hidden',
        position: 'absolute',
        top: (parentSize - size) / 2,
        left: (parentSize - size) / 2,
        backgroundColor: '#fff',
    } as React.CSSProperties

    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

    return style;
}