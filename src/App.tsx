import React from 'react';
import { Layout } from 'antd';
import Canvas from './components/Canvas';
import SideMenu from './components/SideMenu';
import './App.css';

const { Header, Content, Sider } = Layout;

const App = () => {
    const [canvasWidth, setCanvasWidth] = React.useState(800);
    const [canvasHeight, setCanvasHeight] = React.useState(800);
    const [seed, setSeed] = React.useState((Math.random() + 1).toString(36).substring(2, 12));
    const [regularity, setRegularity] = React.useState(3);

    return (
        <div className='App'>
            <Layout style={{height: '100vh'}}>
                <Header>
                    <div style={{textAlign: 'center', color: 'white', fontSize: '22px'}}>
                        World Generator
                    </div>
                </Header>
                <Layout>
                    <Sider breakpoint={'lg'} width={400} collapsedWidth={0}>
                        <SideMenu 
                            canvasWidth={canvasWidth} 
                            canvasHeight={canvasHeight}
                            seed={seed} 
                            regularity={regularity}
                            setCanvasWidth={setCanvasWidth} 
                            setCanvasHeight={setCanvasHeight} 
                            setSeed={setSeed}
                            setRegularity={setRegularity}
                        />
                    </Sider>
                    <Content>
                        <Canvas 
                            width={canvasWidth} 
                            height={canvasHeight} 
                            seed={seed}
                            regularity={regularity}
                        />
                    </Content>
                </Layout>
            </Layout>
        </div>
    );
};

export default App;
