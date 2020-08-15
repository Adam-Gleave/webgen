import React from 'react';
import { DocumentPanel } from './DocumentPanel';
import { LandmassPanel } from './LandmassPanel';

const sidemenuStyle: React.CSSProperties = {
    height: '100%',
    backgroundColor: 'white',
    textAlign: 'left',
};

type SideMenuProps = {
    canvasWidth: number,
    canvasHeight: number,
    seed: string,
    regularity: number,
    setCanvasWidth: (width: number) => void,
    setCanvasHeight: (width: number) => void,
    setSeed: (seed: string) => void,
    setRegularity: (regularity: number) => void,
};

export const SideMenu = (props: SideMenuProps) => (
    <div style={sidemenuStyle}>
        <DocumentPanel {...props} />
        <LandmassPanel {...props} />
    </div>
);

export default SideMenu;
