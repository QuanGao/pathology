import React from "react"
import API from "../../utils/API"
import "./PathForm.css"
import Report from "../Report"

import { Form, DatePicker, Button,InputNumber, Input } from 'antd';
const FormItem = Form.Item;

class TimeRelatedForm extends React.Component {

    state = {
        submitted:false,
        submittedData: null
    }
    handleSubmit = (e) => {
        e.preventDefault();

        this.props.form.validateFields((err, fieldsValue) => {
        if (err) {
            return;
        }
        const values = {
            ...fieldsValue,
            'date': fieldsValue['date'].format('YYYY-MM-DD')
        };
        console.log('Received values of form: ', values);
        API.saveFormData(values).then(response => {
            console.log(values);
            this.setState({
                submittedData:values,
                submitted: true
            })
        })
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 8 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 },
        },
        };
        const config = {
        rules: [{ type: 'object', required: true, message: 'Please select time!' }],
        };
        
         
        return this.state.submitted? <Report data={this.state.submittedData}/>:
        (<Form onSubmit={this.handleSubmit}>
            <FormItem
            {...formItemLayout}
            label="Date"
            >
            {getFieldDecorator('date', config)(
                <DatePicker />
            )}
            </FormItem>
            <FormItem
            {...formItemLayout}
            label="Gestation"
            >
            {getFieldDecorator('gestationWeeks', { initialValue: 40 })(
                <InputNumber min={22} max={42} />
            )}
            <span className="ant-form-text"> weeks </span>
            </FormItem>
            <FormItem
            {...formItemLayout}
            label="sampleId"
            >
            {getFieldDecorator('sampleId')(
                <Input />
            )}
            </FormItem>
            <FormItem
            {...formItemLayout}
            label="PlacentaWeight"
            >
            {getFieldDecorator('placentaWeight', { initialValue: 500 })(
                    <InputNumber min={0} />
            )}
            <span className="ant-form-text"> grams </span>
            </FormItem>
            <FormItem
            wrapperCol={{
                xs: { span: 24, offset: 0 },
                sm: { span: 16, offset: 8 },
            }}
            >
            <Button type="primary" htmlType="submit">Submit</Button>
            </FormItem>
        </Form>)
    }
}

const PathForm = Form.create()(TimeRelatedForm);



export default PathForm 