import React from 'react';
import { Collapse, Input, InputNumber, Form } from 'antd';
import formLayout from './layout'

const { Panel } = Collapse;

type LandmassPanelProps = {
    seed: string,
    regularity: number,
    setSeed: (seed: string) => void,
    setRegularity: (regularity: number) => void,
};

export const LandmassPanel = (props: LandmassPanelProps) => (
    <Collapse defaultActiveKey={['2']}>
        <Panel header='Landmass Properties' key='2'>
            <Form
                {...formLayout} 
                layout='horizontal'
            >
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
                <Form.Item label='Regularity'>
                    <InputNumber 
                        type='number'
                        value={props.regularity}
                        style={{width: '100%'}}
                        min={1}
                        max={10}
                        onChange={value => {
                            if (value) {
                                props.setRegularity(+value);
                            }
                        }}
                    />
                </Form.Item>
            </Form>
        </Panel>
    </Collapse>
);