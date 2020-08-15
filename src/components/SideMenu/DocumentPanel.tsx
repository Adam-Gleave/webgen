import React from 'react';
import { Collapse, Input, InputNumber, Form } from 'antd';
import formLayout from './layout'

const { Panel } = Collapse;

type DocumentPanelProps = {
    canvasWidth: number,
    canvasHeight: number,
    seed: string,
    setCanvasWidth: (width: number) => void,
    setCanvasHeight: (width: number) => void,
    setSeed: (seed: string) => void,
};

export const DocumentPanel = (props: DocumentPanelProps) => (
    <Collapse defaultActiveKey={['1']}>
        <Panel header='Document Settings' key='1'>
            <Form 
                {...formLayout} 
                layout='horizontal'
            >
                <Form.Item label='Width (px)'>
                    <InputNumber 
                        type='number'
                        value={props.canvasWidth}
                        style={{width: '100%'}}
                        onChange={value => {
                            if (value) {
                                props.setCanvasWidth(+value)
                            }
                        }}
                    />
                </Form.Item>
                <Form.Item label='Height (px)'>
                    <InputNumber 
                        type='number'
                        value={props.canvasHeight}
                        style={{width: '100%'}} 
                        onChange={value => {
                            if (value) {
                                props.setCanvasHeight(+value);
                            }
                        }}
                    />
                </Form.Item>
                <Form.Item label='Seed'>
                    <Input
                        value={props.seed}
                        style={{width: '100%'}}
                        onChange={event => {
                            if (event.target.value) {
                                props.setSeed(event.target.value);
                            }
                        }}
                    />
                </Form.Item>
            </Form>
        </Panel>
    </Collapse>
);