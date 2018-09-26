import React from "react"
import "./PathForm.css"
import { Divider, Select, Form, Button,InputNumber, Input, Radio, Checkbox, Icon } from 'antd';
const RadioGroup = Radio.Group
const FormItem = Form.Item;
const Option = Select.Option;
const CheckboxGroup = Checkbox.Group
const villitisLocationOptions = [ "parabasal", "paraseptal", "mid parenchymal", "subchorionic"];

class TimeRelatedForm extends React.Component {
  state = {
    villousDiscCV: 0,
    umbVesselIntralumThrombus: 0,
    chorionVesselIntralumThrombus: "0",
    stemVesselIntralumThrombus: "0",
    vilStromVasKaryorrhexisFoci:"None",
    avascularVilliNumFoci:"None"
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
  toggleItems = (item, event) =>{
    this.setState({
      [item]: event.target.value
    }, ()=>console.log(this.state))
  }
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
        <RadioGroup>
          <Radio value="0">None</Radio>
          <Radio value="1 Chorionic vasculitis">Chorionic vasculitis</Radio>    
        </RadioGroup>
      )}
      </FormItem>
      
      <Divider/> 
      <h4>Villitis</h4>
      <h5 style={{fontStyle:"italic"}}>Membranes</h5>
      
      <FormItem 
      label="Chronic chorionitis"
      style={{maxWidth:400}}
      >
      {getFieldDecorator('villitisMembranesCC', {
        initialValue: 0
      })(
        <RadioGroup>
          <Radio value={0}>No</Radio>
          <Radio value={1}>Yes</Radio>    
        </RadioGroup>
      )}
      </FormItem>

      <FormItem 
      label="Chronic deciduitis with plasma cells"
      style={{maxWidth:400}}
      >
      {getFieldDecorator('villitisMembranesCDwPC', {
        initialValue: 0
      })(
        <RadioGroup>
          <Radio value={0}>No</Radio>
          <Radio value={1}>Yes</Radio>    
        </RadioGroup>
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
        <RadioGroup>
          <Radio value={0}>No</Radio>
          <Radio value={1}>Yes</Radio>    
        </RadioGroup>
      )}
      </FormItem>

      <FormItem 
      label="Eosinophilic T-cell vasculitis"
      style={{maxWidth:400}}
      >
      {getFieldDecorator('villitisChorionicPlateETV', {
          initialValue: 0
      })(
        <RadioGroup>
          <Radio value={0}>No</Radio>
          <Radio value={1}>Yes</Radio>    
        </RadioGroup>
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
        <RadioGroup onChange ={(event)=>this.toggleItems('villousDiscCV', event)}>
          <Radio value={0}>No</Radio>
          <Radio value={1}>Yes</Radio>    
        </RadioGroup>
      )}
      </FormItem>

      {this.state.villousDiscCV !==0 && 
      <section className="villousDiscCV-details">              
        <FormItem 
          label="Villitis–largest focus"
          style={{maxWidth:400}}
          >
          {getFieldDecorator('villitisLargestFocus', {
            initialValue:"1-4"
          })(
          <Select>
            <Option value="1-4">1-4</Option>
            <Option value="5-9">5-9</Option>
            <Option value="10-20">10-20</Option>
            <Option value="20-50">20-50</Option>
            <Option value="50-100">50-100</Option>
            <Option value=">100">>100</Option>
          </Select>
          )}
        </FormItem>

        <FormItem 
        label="Villitis – number of foci"
        style={{maxWidth:400}}
        >
        {getFieldDecorator('villitisNumOfFoci', {
          initialValue: "None"
        })(
          <RadioGroup>
            <Radio value="None">None</Radio>
            <Radio value="Single">Single</Radio>
            <Radio value="Few">Few</Radio>
            <Radio value="Many">Many</Radio>
            <Radio value="Diffuse">Diffuse</Radio>
          </RadioGroup>
          )}
        </FormItem>
      
        <FormItem 
        label="Location"
        style={{maxWidth:800}}
        >
        {getFieldDecorator('villitisLocation', {
          initialValue:[]
        })(
          <CheckboxGroup 
          options={villitisLocationOptions} 
          onChange={this.onChange} />
          )}
        </FormItem>

        <FormItem 
          label="Associated avascular villi"
          style={{maxWidth:400}}
          >
          {getFieldDecorator('villitisAAV', {
            initialValue: 0
          })(
          <RadioGroup>
            <Radio value={0}>No</Radio>
            <Radio value={1}>Yes</Radio>    
          </RadioGroup>
          )}
        </FormItem>

        <FormItem 
        label="Associated stem vessel obliterative changes"
        style={{maxWidth:400}}
        >
        {getFieldDecorator('villitisASVOC', {
          initialValue: 0
        })(
          <RadioGroup>
            <Radio value={0}>No</Radio>
            <Radio value={1}>Yes</Radio>    
          </RadioGroup>
          )}
        </FormItem>
          
        <FormItem 
        label="Viral inclusions"
        style={{maxWidth:400}}
        >
        {getFieldDecorator('villitisVI', {
          initialValue: 0
        })(
          <RadioGroup>
            <Radio value={0}>No</Radio>
            <Radio value={1}>Yes</Radio>    
          </RadioGroup>
          )}
        </FormItem>

        <FormItem 
        label="CMV immunostain"
        style={{maxWidth:400}}
        >
        {getFieldDecorator('villitisCMV_I', {
          initialValue: "NA"
        })(
          <RadioGroup>
            <Radio value="NA">Not done</Radio>
            <Radio value="negative">Negative</Radio>    
            <Radio value="positive">Positive</Radio>  
          </RadioGroup>
          )}
        </FormItem>

        <FormItem 
        label="Toxoplasma immunostain"
        style={{maxWidth:400}}
        >
        {getFieldDecorator('villitisT_I', {
          initialValue: "NA"
        })(
          <RadioGroup>
            <Radio value="NA">Not done</Radio>
            <Radio value="negative">Negative</Radio>    
            <Radio value="positive">Positive</Radio>  
          </RadioGroup>
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
        <RadioGroup>
          <Radio value={0}>No</Radio>
          <Radio value={1}>Yes</Radio>    
        </RadioGroup>
      )}
      </FormItem>

      <Divider/> 
      <h4>Fetal vascular malperfusion</h4>
      <h5 style={{fontStyle:"italic"}}>Gross features</h5>
      <FormItem 
      label="Hypercoiled umbilical cord"
      style={{maxWidth:400}}
      >
      {getFieldDecorator('hypercoiledUmbCord', {
        initialValue: 0
      })(
        <RadioGroup>
          <Radio value={0}>No</Radio>
          <Radio value={1}>Yes</Radio>    
        </RadioGroup>
      )}
      </FormItem>
        
      <h5 style={{fontStyle:"italic"}}>Umbilical cord</h5>
      <FormItem 
        label="Umbilical vessel intramural fibrin deposition:"
        style={{maxWidth:400}}
        >
        {getFieldDecorator('umbVesselIntramuFibrin', {
          initialValue: 0
        })(
        <RadioGroup>
          <Radio value={0}>None</Radio>
          <Radio value={1}>1 vessel</Radio>
          <Radio value={2}>2 vessels</Radio>
          <Radio value={3}>3 vessels</Radio>
        </RadioGroup>
        )}
      </FormItem>

      <FormItem 
        label="Umbilical vessel intraluminal thrombus:"
        style={{maxWidth:400}}
        >
        {getFieldDecorator('umbVesselIntralumThrombus', {
          initialValue: 0
        })(
        <RadioGroup onChange={(event)=>this.toggleItems('umbVesselIntralumThrombus', event)}>
          <Radio value={0}>None</Radio>
          <Radio value={1}>1 vessel</Radio>
          <Radio value={2}>2 vessels</Radio>
          <Radio value={3}>3 vessels</Radio>
        </RadioGroup>
        )}
      </FormItem>

      {this.state.umbVesselIntralumThrombus !==0 && 
      <FormItem 
        label="Obstructive"
        style={{maxWidth:400}}
        >
        {getFieldDecorator('umbVesselIntralumThrombusObs', {
          initialValue: 0
        })(
        <RadioGroup>
          <Radio value={0}>No</Radio>
          <Radio value={1}>Yes</Radio>
        </RadioGroup>
        )}
      </FormItem>}

    
      <h5 style={{fontStyle:"italic"}}>Chorionic plate</h5>
      <FormItem 
        label="Chorionic vessel intramural fibrin deposition:"
        style={{maxWidth:400}}
        >
        {getFieldDecorator('chorionVesselIntramuFibrin', {
          initialValue: "0"
        })(
        <RadioGroup>
          <Radio value="0">None</Radio>
          <Radio value="1">1 vessel</Radio>
          <Radio value="2">2 vessels</Radio>
          <Radio value="3">3 vessels</Radio>
          <Radio value=">3">>3 vessels</Radio>
        </RadioGroup>
        )}
      </FormItem>

      <FormItem 
        label="Umbilical vessel intraluminal thrombus:"
        style={{maxWidth:400}}
        >
        {getFieldDecorator('chorionVesselIntralumThrombus', {
          initialValue: "0"
        })(
        <RadioGroup onChange={(event)=>this.toggleItems('chorionVesselIntralumThrombus', event)}>
          <Radio value="0">None</Radio>
          <Radio value="1">1 vessel</Radio>
          <Radio value="2">2 vessels</Radio>
          <Radio value="3">3 vessels</Radio>
          <Radio value=">3">>3 vessels</Radio>
        </RadioGroup>
        )}
      </FormItem>

      {this.state.chorionVesselIntralumThrombus !=="0" && 
      <FormItem 
        label="Obstructive"
        style={{maxWidth:400}}
        >
        {getFieldDecorator('chorionVesselIntralumThrombusObs', {
          initialValue: 0
        })(
        <RadioGroup>
          <Radio value={0}>No</Radio>
          <Radio value={1}>Yes</Radio>
        </RadioGroup>
        )}
      </FormItem>}

      <FormItem 
        label="Chorionic vascular ectasia:"
        style={{maxWidth:400}}
        >
        {getFieldDecorator('chorionVascularEctasia', {
          initialValue: 0
        })(
        <RadioGroup>
          <Radio value={0}>No</Radio>
          <Radio value={1}>Yes</Radio>
        </RadioGroup>
        )}
      </FormItem>
    
      <h5 style={{fontStyle:"italic"}}>Disc</h5>
      <FormItem 
        label="Stem villous vessel intramural fibrin deposition:"
        style={{maxWidth:400}}
        >
        {getFieldDecorator('stemVesselIntramuFibrin', {
          initialValue: "0"
        })(
        <RadioGroup>
          <Radio value="0">None</Radio>
          <Radio value="1">1 vessel</Radio>
          <Radio value="2">2 vessels</Radio>
          <Radio value="3">3 vessels</Radio>
          <Radio value=">3">>3 vessels</Radio>
        </RadioGroup>
        )}
      </FormItem>

      <FormItem 
        label="Stem villous vessel intraluminal thrombus:"
        style={{maxWidth:400}}
        >
        {getFieldDecorator('stemVesselIntralumThrombus', {
          initialValue: "0"
        })(
        <RadioGroup onChange={(event)=>this.toggleItems('stemVesselIntralumThrombus', event)}>
          <Radio value="0">None</Radio>
          <Radio value="1">1 vessel</Radio>
          <Radio value="2">2 vessels</Radio>
          <Radio value="3">3 vessels</Radio>
          <Radio value=">3">>3 vessels</Radio>
        </RadioGroup>
        )}
      </FormItem>

      {this.state.stemVesselIntralumThrombus !=="0" && 
      <FormItem 
        label="Obstructive"
        style={{maxWidth:400}}
        >
        {getFieldDecorator('stemVesselIntralumThrombusObs', {
          initialValue: 0
        })(
        <RadioGroup>
          <Radio value={0}>No</Radio>
          <Radio value={1}>Yes</Radio>
        </RadioGroup>
        )}
      </FormItem>}

      <FormItem 
        label="Stem villous vessel obliteration:"
        style={{maxWidth:400}}
        >
        {getFieldDecorator('stemVillousVesselObliteration', {
          initialValue: 0
        })(
        <RadioGroup>
          <Radio value={0}>No</Radio>
          <Radio value={1}>Yes</Radio>
        </RadioGroup>
        )}
      </FormItem>

      <FormItem 
        label="Villous stromal vascular karyorrhexis - number of foci:"
        style={{maxWidth:400}}
        >
        {getFieldDecorator('vilStromVasKaryorrhexisFoci', {
          initialValue: "None"
        })(
        <RadioGroup onChange={(event)=>this.toggleItems('vilStromVasKaryorrhexisFoci', event)}>
          <Radio value="None">None</Radio>
          <Radio value="Few">Few</Radio>
          <Radio value="Many">Many</Radio>
          <Radio value="Diffuse">Diffuse</Radio>
        </RadioGroup>
        )}
      </FormItem>

      {this.state.vilStromVasKaryorrhexisFoci !=="None" &&
      <FormItem 
        label="Villous stromal vascular karyorrhexis - largest focus:"
        style={{maxWidth:400}}
        >
        {getFieldDecorator('vilStromVasKaryorrhexisLargestfocus', {
          initialValue: "3"
        })(
        <RadioGroup>
          <Radio value="3">3</Radio>
          <Radio value="4-9">4-9</Radio>
          <Radio value="10-25">10-25</Radio>
          <Radio value="26-50">26-50</Radio>
          <Radio value=">50">>50</Radio>
          <Radio value="Regional">Regional</Radio>
        </RadioGroup>
        )}
      </FormItem>}
 
      <FormItem 
        label="Avascular villi (not associated with chronic vilitis) - number of foci:"
        style={{maxWidth:400}}
        >
        {getFieldDecorator('avascularVilliNumFoci', {
          initialValue: "None"
        })(
        <RadioGroup onChange={(event)=>this.toggleItems("avascularVilliNumFoci", event)}>
          <Radio value="None">None</Radio>
          <Radio value="Few">Few</Radio>
          <Radio value="Many">Many</Radio>
          <Radio value="Diffuse">Diffuse</Radio>
        </RadioGroup>
        )}
      </FormItem>


      {this.state.avascularVilliNumFoci !=="None" &&
      <section>
        <FormItem 
          label="Avascular villi - largest focus:"
          style={{maxWidth:400}}
          >
          {getFieldDecorator('avascularVilliLargestfocus', {
            initialValue: "3"
          })(
          <RadioGroup>
            <Radio value="3">3</Radio>
            <Radio value="4-9">4-9</Radio>
            <Radio value="10-25">10-25</Radio>
            <Radio value="26-50">26-50</Radio>
            <Radio value=">50">>50</Radio>
            <Radio value="Regional">Regional</Radio>
          </RadioGroup>
          )}
        </FormItem>
        <FormItem 
        label="Avascular vlli - total number of avascular villi:"
        style={{maxWidth:400}}
        >
        {getFieldDecorator('avascularVilliTotalNum', {
          initialValue: "<45"
        })(
          <RadioGroup>
            <Radio value="<45">less than 45 </Radio>
            <Radio value=">45">>45</Radio>
          </RadioGroup>
        )}
        </FormItem>
      </section>}

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