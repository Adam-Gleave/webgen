import React from 'react';

type CanvasProps = {
    width: number,
    height: number,
};

export const Canvas = (props: CanvasProps) => {
    const ref = React.useRef<HTMLCanvasElement>(null);

    React.useEffect(() => {
        if (ref.current) {
            const ctx = ref.current.getContext('2d');
            ctx!.fillStyle = 'white';
            ctx!.fill();
        }
    }, []);

    return (
        <div style={{width: '100%', height: '100%', position: 'relative'}}>
            <canvas id='canvas' ref={ref} width={props.width} height={props.height} />
        </div>
    );
};

export default Canvas;