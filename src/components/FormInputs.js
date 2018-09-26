import React, { Component } from 'react';
import { Input, Row, Col } from 'react-materialize';
import FormInputArea from './entities/FormInputArea';
import FormInputField from './entities/FormInputField';
import { InputExtraIcon, InputIcon } from './entities/PrefixIcon';
import { maxDescriptionLength } from './entities/entities';

export default class FormInputs extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {
            values,
            errors,
            touched,
            setFieldValue,
            setFieldTouched,
            isSubmitting,
            showErrorsOnLoad,
        } = this.props;
        console.log(this.props);
        return (<Row>
            <Col s={12} m={6} l={6}>
                <FormInputField
                    disabled={isSubmitting}
                    onChange={setFieldValue}
                    onBlur={setFieldTouched}
                    touched={touched.name || showErrorsOnLoad}
                    value={values.name}
                    error={errors.name}
                    name="name"
                    type="text"
                    label="Name"
                    icon={<InputIcon>label</InputIcon>}
                />
                <FormInputArea
                    disabled={isSubmitting}
                    onChange={setFieldValue}
                    onBlur={setFieldTouched}
                    touched={touched.description || showErrorsOnLoad}
                    value={values.description}
                    error={errors.description}
                    name="description"
                    label="Description"
                    icon={<InputIcon>edit</InputIcon>}
                    maxLength={maxDescriptionLength}
                    s={12}
                    m={12}
                    l={12}
                />
            </Col>
            <Col s={12} m={6} l={6}>
                <Row>
                    <Col s={12}>
                        <FormInputField
                            disabled={isSubmitting}
                            onChange={setFieldValue}
                            onBlur={setFieldTouched}
                            touched={touched.price || showErrorsOnLoad}
                            value={values.price}
                            error={errors.price}
                            name="price"
                            type="text"
                            label="Price"
                            s={3}
                            m={3}
                            l={3}
                            icon={<InputIcon>attach_money</InputIcon>}
                        />
                    </Col>
                </Row>
                        <Row>
                            <Col s={12} >
                        <FormInputField
                            disabled={isSubmitting}
                            onChange={setFieldValue}
                            onBlur={setFieldTouched}
                            touched={touched.freight || showErrorsOnLoad}
                            value={values.freight}
                            error={errors.freight}
                            name="freight"
                            type="text"
                            label="Freight"
                            s={3}
                            m={3}
                            l={3}
                            icon={<InputIcon>attach_money</InputIcon>}
                        />
                            </Col>
                        </Row>

                <Row>
                </Row>
                <Row>
                    <Col s={6}>
                        <Input
                            name="subsidised"
                            type="checkbox"
                            label="Subsidised "
                            checked={values.subsidised}
                            onChange={e => setFieldValue(e.target.name, e.target.checked)}
                            disabled={isSubmitting}
                        />
                    </Col>
                </Row>
                        </Col>
        </Row>);
    }
}
/**
 * Created by cashm on 27/09/2018.
 */
