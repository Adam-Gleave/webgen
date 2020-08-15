import React from 'react';
import { Delaunay } from 'd3-delaunay';
import seedrandom from 'seedrandom';

type CanvasProps = {
    width: number,
    height: number,
    seed: string,
};

export const Canvas = (props: CanvasProps) => {
    const ref = React.useRef<HTMLCanvasElement>(null);

    React.useEffect(() => {
        if (ref.current) {
            const ctx = ref.current.getContext('2d');
            ctx!.fillStyle = 'black';
            ctx!.fill();
        }
    }, []);

    React.useEffect(() => {
        generateVoronoi();
    }, [props.width, props.height, props.seed]);

    const generateVoronoi = () => {
        if (ref.current) {
            const rng = seedrandom(props.seed);

            const n = 250;
            const positions = Float64Array.from({length: n * 2}, (_, i) => rng() * (i & 1 ? props.height : props.width));

            const delaunay = new Delaunay(positions);
            const voronoi = delaunay.voronoi([0, 0, props.width, props.height]);

            const ctx = ref.current.getContext('2d')!;
            
            ctx.clearRect(0, 0, props.width, props.height);
            ctx.beginPath();
            voronoi.render(ctx);
            voronoi.renderBounds(ctx);
            ctx.stroke();
        }
    };

    return (
        <div className='canvas-container' style={{width: '100%', height: '100%', position: 'relative'}}>
            <canvas id='canvas' ref={ref} width={props.width} height={props.height} />
        </div>
    );
};

export default Canvas;