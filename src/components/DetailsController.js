import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withFormik } from 'formik';
import { validationHelper } from './entities/FormikValidationHelper';
import EditDetails from './EditDetails';
import axios from 'axios';
import {
    isBarcode,
    isDescription,
    isFreight, isMedicationLookupNames,

    isMedicationStrength,
    isMedicationStrengthUnit,
    isName,
    isNzulmNumber,
    isPackSize,
    isPackSizeUnit,
    isPharmacode, isPrice,
} from './entities/entities';

import CreateUsecase from './entities/CreateUsecase';


export const mapStateToProps = state => ({

});

export function mapDispatchToProps(dispatch) {
    return {

    };
}


const validation = {
    name: isName,
    description: isDescription,
    price: isPrice,
    freight: isFreight,
};
const validate = values => validationHelper(values, validation);

export const mapPropsToValues = props => ({
    name: '',
    description: '',
    price: '',
    freight: '',
});

export async function handleSubmit(values, formikBag, createUsecase) {
    const result = await createUsecase(values, axios);
    if (!result.success) {
        formikBag.setErrors(result.errors);
        formikBag.setSubmitting(false);
        return;
    }
    formikBag.props.history.push(`/medication/${result.shortId}`);
}

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps),
    withFormik({ mapPropsToValues,
        handleSubmit: (values, formikBag) => handleSubmit(values, formikBag, CreateUsecase.run),
        validate,
        enableReinitialize: true,
        isInitialValid: false }),
)(EditDetails);
