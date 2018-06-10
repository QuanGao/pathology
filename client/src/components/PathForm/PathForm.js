import React from "react"
import API from "../../utils/API"
import "./PathForm.css"
import Report from "../Report"

import { Form, DatePicker, Button,InputNumber, Input } from 'antd';
const FormItem = Form.Item;
const InputGroup = Input.Group;
class TimeRelatedForm extends React.Component {

    // state = {
    //     submitted:false,
    //     submittedData: null
    // }
    handleSubmit = (e) => {
        e.preventDefault();

        this.props.form.validateFields((err, fieldsValue) => {
        if (err) {
            return;
        }
        const values = {...fieldsValue};    
        console.log('Received values of form: ', values);
        this.props.saveForm(values);
        // API.saveFormData(values).then(response => {
        //     console.log(values);
        //     this.setState({
        //         submittedData:values,
        //         submitted: true
        //     })
        // })
        });
    }
    validateGestationWeeks = (rule, value, cb) =>{
        if( value <22 || value >42) {
            cb("Please put in a valid number")
        }
        cb()
    };
    validateGestationDays = (rule, value, cb) =>{
        if( value <0 || value >7) {
            cb("Please put in a valid number")
        }
        cb()
    };
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
       
        // return this.state.submitted? <Report data={this.state.submittedData}/>:
        
        // (<Form onSubmit={this.handleSubmit}>
        return <Form onSubmit={this.handleSubmit}>

            <FormItem
            {...formItemLayout}
            label="Sample ID"
            >
            {getFieldDecorator('sampleId')(
                <Input />
            )}
            </FormItem>

            <FormItem     
            {...formItemLayout}
            label="Gestation weeks"
            >
            {getFieldDecorator('gestationWeeks', {
                rules:[{
                    required: true, message: "Gestation week can not be blank"
                },{
                    validator: this.validateGestationWeeks
                }]
            })(
                <InputNumber/>
            )}
            <span className="ant-form-text" style={{fontStyle:"italic"}}> (weeks.days) </span>
            </FormItem>

            <FormItem
            {...formItemLayout}
            label="Placenta Weight"
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
    
        {/* </Form>) */}
        </Form>
    }
}

const PathForm = Form.create()(TimeRelatedForm);



export default PathForm 