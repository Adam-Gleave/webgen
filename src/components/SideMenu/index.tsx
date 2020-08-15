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
    setCanvasWidth: (width: number) => void,
    setCanvasHeight: (width: number) => void,
};

export const SideMenu = (props: SideMenuProps) => {
    return (
        <div style={sidemenuStyle}>
            <DocumentPanel {...props} />
        </div>
    );
};

export default SideMenu;
