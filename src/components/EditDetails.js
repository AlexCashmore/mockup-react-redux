import React from 'react';
import {Card, Button, Row} from 'react-materialize';
import FormInputs from './FormInputs';


export default function EditDetails(props) {
    const {
        handleSubmit,
        isSubmitting,
        isValid,
    } = props;
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h3 className="center-align">Create Product</h3>
                <Card
                    className="z-depth-3"
                    actions={[
                        <Row>
                            <Button flat waves="light" type="submit" className="right" disabled={!isValid}>
                                Create
                            </Button>
                        </Row>,
                    ]}
                >
                    <FormInputs {...props} />
                </Card>
            </form>
        </div>
    );
}
/**
 * Created by cashm on 27/09/2018.
 */
