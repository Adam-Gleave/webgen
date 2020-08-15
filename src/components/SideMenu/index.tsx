import React from 'react';
import { DocumentPanel } from './DocumentPanel';

const sidemenuStyle: React.CSSProperties = {
    height: '100%',
    backgroundColor: 'white',
    textAlign: 'left',
};

type SideMenuProps = {
    canvasWidth: number,
    canvasHeight: number,
    seed: string,
    setCanvasWidth: (width: number) => void,
    setCanvasHeight: (width: number) => void,
    setSeed: (seed: string) => void,
};

export const SideMenu = (props: SideMenuProps) => (
    <div style={sidemenuStyle}>
        <DocumentPanel {...props} />
    </div>
);

export default SideMenu;
