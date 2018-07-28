import React from "react"
import "./SearchBar.css"
import { Form, Row, Col, Input, Button } from 'antd';
import API from "../../utils/API"
import Report from "../Report"

const FormItem = Form.Item;

class AdvancedSearchForm extends React.Component {
  state = {
    searchSubmit: false,
    searchResult: {}
  };

  handleSearch = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
        console.log('Received values of form: ', values);
        API.findFormById(values.sampleId).then(
            result => this.setState({
                searchResult: result.data, 
                searchSubmit:true
            }, ()=>console.log("state in search bar", 
            this.state.searchResult))
        )
    });
  }

  handleReset = () => {
    this.props.form.resetFields();
  }

  getFields() {
    const { getFieldDecorator } = this.props.form;
    return(
        <Col span={24} style={{ display:'block'}}>
          <FormItem label={`Sample ID`}>
            {getFieldDecorator(`sampleId`, {
              rules: [{
                required: true,
                message: 'Input something!',
              }],
            })(
              <Input />
            )}
          </FormItem>
        </Col>
      );
    }

  render() {
    return (
        <div>
            <Form
                className="ant-advanced-search-form"
                onSubmit={this.handleSearch}
            >
                <Row gutter={24}>{this.getFields()}</Row>
                <Row>
                <Col span={24} style={{ textAlign: 'right' }}>
                    <Button type="primary" htmlType="submit">Search</Button>
                    <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
                    Clear
                    </Button>
                </Col>
                </Row>
            </Form>
            {this.state.searchSubmit && 
                <div className="search-result-list">
                    {this.state.searchResult?<Report data = {this.state.searchResult}/>:
                    <h1> sample ID does not exist </h1> 
                    }
            </div>}
        </div>
    );
  }
}

const WrappedAdvancedSearchForm = Form.create()(AdvancedSearchForm);
const SearchBar = () => 
    <div>
        <WrappedAdvancedSearchForm />        
    </div>
export default SearchBar