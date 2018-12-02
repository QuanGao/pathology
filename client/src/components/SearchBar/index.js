import React from "react";
import { Form, Row, Col, Input, Button } from 'antd';
import API from "../../utils/API";
import PDFwrapper from "../PDFwrapper";

const FormItem = Form.Item;

class SearchForm extends React.Component {
    state = {
        searchSubmitted: false,
        searchResult: {},
    };

    handleSearch = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (err) throw err;
            API.findFormById(values.sampleId).then(
                response => this.setState({
                    searchResult: response.data, 
                    searchSubmitted: true
                })
            );
        });
    };

    handleReset = () => {
        this.props.form.resetFields();
    };

    renderSearchError = () => (
        <h1> sample ID does not exist </h1> 
    );

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Form
                    className="ant-advanced-search-form"
                    onSubmit={this.handleSearch}
                >
                    <Row gutter={24}>
                        <Col span={24} style={{ display:'block'}}>
                            <FormItem label={`Sample ID`}>
                                {getFieldDecorator(`sampleId`, {
                                    rules: [{
                                        required: true,
                                        message: 'Sample ID is required',
                                    }],
                                })(
                                <Input />
                                )}
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24} style={{ textAlign: 'right' }}>
                            <Button type="primary" htmlType="submit">
                                Search
                            </Button>
                            <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
                                Clear
                            </Button>
                        </Col>
                    </Row>
                </Form>

                {this.state.searchSubmitted && 
                    <div className="search-result-list">
                        {this.state.searchResult ? <PDFwrapper PDFdata={this.state.searchResult} /> : this.renderSearchError()}    
                    </div>
                }
            </div>
        );
    }
}

const WrappedSearchForm = Form.create()(SearchForm);

const SearchBar = () => <div><WrappedSearchForm /></div>
    
export default SearchBar
