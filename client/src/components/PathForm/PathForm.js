import React from "react"
import "./PathForm.css"


import { Divider, Select, Form, Button,InputNumber, Input, Slider, Checkbox } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const CheckboxGroup = Checkbox.Group
const villitisLocationOptions = [ "parabasal", "paraseptal", "mid parenchymal", "subchorionic"];

class TimeRelatedForm extends React.Component {
    state = {
        VillousDiscCV: 0
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, fieldsValue) => {
        if (err) {
            console.log("err: "+err)
            return;
        }
        const values = {...fieldsValue};    
        console.log('Received values of form: ', values);
        this.props.saveForm(values);
        });
    }
    validateGestationWeeks = (rule, value, cb) => {
        if( value <22 || value >42) {
            cb("Please put in a valid number")
        }
        cb()
    };
    validateplacentaWeight = (rule, value, cb) => {
        if( value <0) {
            cb("Please put in a valid number")
        }
        cb()
    };
    handleVillousDiscCVchange = (value) => {
        console.log("handlevildisc cv change: " + value)
        this.setState({
            VillousDiscCV: value
        }, ()=>console.log("state.VillousDiscCV: "+this.state.VillousDiscCV))
    };



    onChange = (checkedValues) => {
        console.log('checked = ', checkedValues);
      }



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
                    validator: this.validateplacentaWeight
                }]
            })(
                <InputNumber/>
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
                initialValue: "0"
              })(
                <Select>
                  <Option value="0">0 –None</Option>
                  <Option value="1 Subchorionitis">1 –Subchorionitis</Option>
                  <Option value="2 Chorionitis">2 –Chorioamnionitis</Option>
                  <Option value="3 Amnionitis with necrosis">3 –Amnionitis with necrosis</Option>
                </Select>
              )}
            </FormItem>

            <h5 style={{fontStyle:"italic"}}>Umbilical cord</h5>
            
            <FormItem 
            label="Fetal immune response"
            style={{maxWidth:400}}
            >
            {getFieldDecorator('umbilicalCordFIR', {
                initialValue: "0"
              })(
                <Select>
                  <Option value="0">0 –None</Option>
                  <Option value="1 Phlebitis">1 –Phlebitis</Option>
                  <Option value="2 Arteritis">2 –Arteritis</Option>
                  <Option value="2 Pan-vasculitis">2 –Pan-vasculitis</Option>
                  <Option value="2 Funisitis">2 –Funisitis</Option>
                  <Option value="3 Necrotizing funisitis">3 –Necrotizing funisitis</Option>
                </Select>
              )}
            </FormItem>

            <h5 style={{fontStyle:"italic"}}>Chorionic plate</h5>
            <FormItem 
            label="Maternal immune response"
            style={{maxWidth:400}}
            >
            {getFieldDecorator('chorionicPlateMIR', {
                initialValue: "0"
              })(
                <Select>
                  <Option value="0">0 –None</Option>
                  <Option value="1 Subchorionitis">1 –Subchorionitis</Option>
                  <Option value="2 Chorioamnionitis">2 –Chorioamnionitis</Option>
                  <Option value="3 Amnionitis with necrosis">3 –Amnionitis with necrosis</Option>
                </Select>
              )}
            </FormItem>
            <FormItem 
            label="Fetal immune response"
            style={{maxWidth:400}}
            >
            {getFieldDecorator('chorionicPlateFIR', {
                initialValue: "0"
              })(
                <Select>
                  <Option value="0">0 –None</Option>
                  <Option value="1 Chorionic vasculitis">1 –Chorionic vasculitis</Option>
                </Select>
              )}
            </FormItem>
            
            <Divider/> 
            <h4>Villitis</h4>
            <h5 style={{fontStyle:"italic"}}>Membranes</h5>
            
            <FormItem 
            label="Chronic marginating choriodeciduitis"
            style={{maxWidth:400}}
            >
            {getFieldDecorator('villitisMembranesCMC', {
                initialValue: 0
              })(
                <Select>
                  <Option value={0}>No</Option>
                  <Option value={1}>Yes</Option>
                </Select>
              )}
            </FormItem>

            <h5 style={{fontStyle:"italic"}}>Chorionic plate</h5>
            
            <FormItem 
            label="Chronic chorionitis"
            style={{maxWidth:400}}
            >
            {getFieldDecorator('villitisChorionicPlateCC', {
                initialValue: 0
              })(
                <Select>
                  <Option value={0}>No</Option>
                  <Option value={1}>Yes</Option>
                </Select>
              )}
            </FormItem>

            <FormItem 
            label="Eosinophilic T-cell vasculitis"
            style={{maxWidth:400}}
            >
            {getFieldDecorator('villitisChorionicPlateETV', {
                initialValue: 0
              })(
                <Select>
                  <Option value={0}>No</Option>
                  <Option value={1}>Yes</Option>
                </Select>
              )}
            </FormItem> 

            <h5 style={{fontStyle:"italic"}}>Villous disc</h5>
            <FormItem 
            label="Chronic villitis"
            style={{maxWidth:400}}
            >
            {getFieldDecorator('villousDiscCV', {
                initialValue: 0
              })(
                <Select onChange ={this.handleVillousDiscCVchange}>
                  <Option value={0}>No</Option>
                  <Option value={1}>Yes</Option>
                </Select>
              )}
            </FormItem>

            {this.state.VillousDiscCV !==0 && 
            <section className="villousDiscCV-details">              
              <FormItem 
                label="Villitis–largest focus"
                style={{maxWidth:400}}
                >
                {getFieldDecorator('villitisLargestFocus', {
                    initialValue: 0
                })(
                    <Slider 
                    style={{maxWidth:400}}
                    />
                )}
                </FormItem>

                <FormItem 
                label="Villitis – number of foci"
                style={{maxWidth:400}}
                >
                {getFieldDecorator('villitisNumOfFoci', {
                    initialValue: "None"
                })(
                <Select>
                    <Option value="None">None</Option>
                    <Option value="Single">Single</Option>
                    <Option value="Few">Few</Option>
                    <Option value="Many">Many</Option>
                    <Option value="Diffuse">Diffuse</Option>
                </Select>
                )}
                </FormItem>
            
                <FormItem 
                label="Location"
                style={{maxWidth:800}}
                >
                {getFieldDecorator('villitisLocation')(
                    <CheckboxGroup 
                    options={villitisLocationOptions} 
                    onChange={this.onChange} />
                )}
                </FormItem>

              <FormItem 
                label="Associated avascular villi"
                style={{maxWidth:400}}
                >
                {getFieldDecorator('villitisAVA', {
                    initialValue: 0
                })(
                    <Slider 
                    style={{maxWidth:400}}
                    />
                )}
                </FormItem>

                <FormItem 
                label="Associated stem vessel obliterative changes"
                style={{maxWidth:400}}
                >
                {getFieldDecorator('villitisASVOC', {
                    initialValue: 0
                })(
                    <Select>
                    <Option value={0}>No</Option>
                    <Option value={1}>Yes</Option>
                    </Select>
                )}
                </FormItem>
                
                <FormItem 
                label="Viral inclusions"
                style={{maxWidth:400}}
                >
                {getFieldDecorator('villitisVI', {
                    initialValue: 0
                })(
                    <Select>
                    <Option value={0}>No</Option>
                    <Option value={1}>Yes</Option>
                    </Select>
                )}
                </FormItem>

                <FormItem 
                label="CMV immunostain"
                style={{maxWidth:400}}
                >
                {getFieldDecorator('villitisCMV_I', {
                    initialValue: "NA"
                })(
                    <Select>
                    <Option value="NA">Not done</Option>
                    <Option value="negative">Negative</Option>
                    <Option value="positive">Positive</Option>
                    </Select>
                )}
                </FormItem>

                <FormItem 
                label="Toxoplasma immunostain"
                style={{maxWidth:400}}
                >
                {getFieldDecorator('villitisT_I', {
                    initialValue: "NA"
                })(
                    <Select>
                    <Option value="NA">Not done</Option>
                    <Option value="negative">Negative</Option>
                    <Option value="positive">Positive</Option>
                    </Select>
                )}
                </FormItem>

            </section>}


            <h5 style={{fontStyle:"italic"}}>Decidua</h5>
            <FormItem 
            label="Chronic deciduitis with plasma cells"
            style={{maxWidth:400}}
            >
            {getFieldDecorator('deciduaCDwPC', {
                initialValue: 0
              })(
                <Select>
                  <Option value={0}>No</Option>
                  <Option value={1}>Yes</Option>
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