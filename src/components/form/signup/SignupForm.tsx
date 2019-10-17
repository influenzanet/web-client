import * as React  from 'react';
import {Button} from '@material-ui/core';
import {Field, Formik, Form} from 'formik';
import { MyField } from '../MyField';

interface Values {
    email: string;
    password: string;
}

interface Props {
    onSubmit: (values: Values) => void;
}

export const SignupForm: React.FC<Props> = ({onSubmit}) => {
    return (
        <div style={{textAlign: "center"}}>
            
        
        <Formik 
        initialValues={{email: "", password: ""}} onSubmit={(values) => {
            onSubmit(values);
        }}
        >
        {({values}) => (
            <Form>
                <div>
                    <Field 
                        name="email" 
                        placeholder="email"
                        component={MyField}
                    />
                </div>
                <div>
                <Field 
                    id="standard-password-input"
                    label="password"
                    name="password" 
                    placeholder="password"
                    type="password"
                    component={MyField}
                />
                </div>
                <div>
                <Button type="submit">
                    Submit
                </Button>
                </div>
                <pre>
                    {JSON.stringify(values, null, 2)}
                </pre>
            </Form>   
        )}
        </Formik>
        </div>
    );
    
}