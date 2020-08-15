import React from 'react';
import { Delaunay, Voronoi } from 'd3-delaunay';
import seedrandom from 'seedrandom';

type CanvasProps = {
    width: number,
    height: number,
    seed: string,
    regularity: number,
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
    }, [props.width, props.height, props.seed, props.regularity]);

    const approximateRelaxation = (
        positions: Float64Array
    ): { 
        delaunay: Delaunay<{}>, 
        voronoi: Voronoi<{}> 
    } => {
        let delaunay = new Delaunay(positions);
        let voronoi = delaunay.voronoi([0, 0, props.width, props.height]);

        for (let i = 1; i < props.regularity; i++) {
            let positionIndex = 0;
            const polygons = voronoi.cellPolygons();

            while (positionIndex < positions.length) {
                const cellIter = polygons.next();

                if (cellIter.done) {
                    break;
                } else {
                    const cell = cellIter.value;

                    if (cell.length) {
                        const average = [0, 0];

                        cell.forEach(corner => {
                            average[0] += corner[0];
                            average[1] += corner[1];
                        });

                        average[0] /= cell.length;
                        average[1] /= cell.length;

                        const offset = positionIndex * 2;
                        positions[offset ] = average[0];
                        positions[offset + 1] = average[1];
                    }
                }

                positionIndex++;
            }

            delaunay = new Delaunay(positions);
            voronoi = delaunay.voronoi([0, 0, props.width, props.height]);
        };

        return { delaunay, voronoi };
    }

    const generateVoronoi = () => {
        if (ref.current) {
            const n = 250;
            const rng = seedrandom(props.seed);

            let positions = Float64Array.from({length: n * 2}, (_, i) => rng() * (i & 1 ? props.height : props.width));

            let { voronoi } = approximateRelaxation(positions);

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