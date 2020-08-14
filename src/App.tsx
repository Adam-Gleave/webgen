import React from 'react';
import { Layout, Collapse, InputNumber, Form, Typography } from 'antd';
import './App.css';

const { Panel } = Collapse;
const { Header, Content, Sider } = Layout;

const sidemenuStyle: React.CSSProperties = {
    height: '100%',
    backgroundColor: 'white',
    textAlign: 'left',
};

const formLayout = {
    labelCol: {
        span: 8,
    },
    labelAlign: 'left' as 'left',
    wrapperCol: {
        flex: 'auto',
    }
}

const App = () => {
    const ref = React.useRef<HTMLCanvasElement>(null);

    const [canvasWidth, setCanvasWidth] = React.useState(1280);
    const [canvasHeight, setCanvasHeight] = React.useState(800);

    React.useEffect(() => {
        if (ref.current) {
            const ctx = ref.current.getContext('2d');
            ctx!.fillStyle = 'white';
            ctx!.fill();
        }
    }, []);

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
                        <div style={sidemenuStyle}>
                            <Collapse defaultActiveKey={['1']}>
                                <Panel header='Document Settings' key='1'>
                                    <Form 
                                        {...formLayout} 
                                        layout='horizontal'
                                    >
                                        <Form.Item label='Width (px)'>
                                            <InputNumber 
                                                type='number'
                                                value={canvasWidth}
                                                style={{width: '100%'}}
                                                onChange={value => {
                                                    if (value) {
                                                        setCanvasWidth(+value)
                                                    }
                                                }}
                                            />
                                        </Form.Item>
                                        <Form.Item label='Height (px)'>
                                            <InputNumber 
                                                type='number'
                                                value={canvasHeight}
                                                style={{width: '100%'}} 
                                                onChange={value => {
                                                    if (value) {
                                                        setCanvasHeight(+value)
                                                    }
                                                }}
                                            />
                                        </Form.Item>
                                    </Form>
                                </Panel>
                            </Collapse>
                        </div>
                    </Sider>
                    <Content>
                        <div style={{width: '100%', height: '100%', position: 'relative'}}>
                            <canvas id='canvas' ref={ref} width={canvasWidth} height={canvasHeight} />
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </div>
    );
};

export default App;
