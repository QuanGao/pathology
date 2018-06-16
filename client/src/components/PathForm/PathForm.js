import React from "react"
import "./PathForm.css"


import { Divider, Select, Form, Button,InputNumber, Input } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
class TimeRelatedForm extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, fieldsValue) => {
        if (err) {
            return;
        }
        const values = {...fieldsValue};    
        console.log('Received values of form: ', values);
        this.props.saveForm(values);
        });
    }
    validateGestationWeeks = (rule, value, cb) =>{
        if( value <22 || value >42) {
            cb("Please put in a valid number")
        }
        cb()
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        

        return <Form onSubmit={this.handleSubmit}>

            <FormItem           
            label="Sample ID"
            >
            {getFieldDecorator('sampleId',{
                rules:[{
                    required: true, message: "Sample ID can not be blank"
                }]
            })(
                <Input />
            )}
            </FormItem>

            <FormItem            
            label="Gestation weeks"
            >
            {getFieldDecorator('gestationWeeks', { initialValue: 40,
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
            label="Placenta Weight"
            >
            {getFieldDecorator('placentaWeight', { initialValue: 500,
                rules:[{
                    required: true, message: "Placenta Weight can not be blank"
                }] 
            })(
                <InputNumber min={0} />
            )}
            <span className="ant-form-text"> grams </span>
            </FormItem>

            <Divider/>

            <h4>Acute inflammatory pathology</h4>
            <h5 style={{fontStyle:"italic"}}>Membranes</h5>
            
            <FormItem 
            label="Maternal immune response"
            style={{maxWidth:400}}
            >
            {getFieldDecorator('membranesMIR', {
                rules: [
                  { required: true, message: 'Please select Maternal immune response for membranes' },
                ],
                initialValue: "None"
              })(
                <Select>
                  <Option value="None">0 –None</Option>
                  <Option value="Stage 1 Subchorionitis">Stage 1 –Subchorionitis</Option>
                  <Option value="Stage 2 Chorionitis">Stage 2 –Chorionitis</Option>
                  <Option value="Stage 2 Amnionitis">Stage 2 –Amnionitis</Option>
                  <Option value="Stage 3 Amnionitis with necrosis">Stage 3 –Amnionitis with necrosis</Option>
                </Select>
              )}
            </FormItem>

            <h5 style={{fontStyle:"italic"}}>Chorionic plate</h5>
            <FormItem 
            label="Maternal immune response"
            style={{maxWidth:400}}
            >
            {getFieldDecorator('chorionicPlateMIR', {
                rules: [
                  { required: true, message: 'Please select maternal immune response for chorionic plate' },
                ],
                initialValue: "None"
              })(
                <Select>
                  <Option value="None">0 –None</Option>
                  <Option value="Stage 1 Subchorionitis">Stage 1 –Subchorionitis</Option>
                  <Option value="Stage 2 Chorionitis">Stage 2 –Chorionitis</Option>
                  <Option value="Stage 2 Amnionitis">Stage 2 –Amnionitis</Option>
                  <Option value="Stage 3 Amnionitis with necrosis">Stage 3 –Amnionitis with necrosis</Option>
                </Select>
              )}
            </FormItem>
















            <FormItem
            wrapperCol={{
                xs: { span: 24, offset: 0 },
                sm: { span: 16, offset: 8 },
            }}
            style={{maxWidth:400, margin:"auto"}}
            >
            <Button type="primary" htmlType="submit">Submit</Button>
            </FormItem>
    

        </Form>
    }
}

const PathForm = Form.create()(TimeRelatedForm);



export default PathForm 