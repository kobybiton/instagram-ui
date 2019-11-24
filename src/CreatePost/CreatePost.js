import React, {Component} from 'react';
import './CreatePost.scss';
import { Form as BootstrapForm, Button } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import postModel from '../models/post.model';

class CreatePost extends Component {

    submit(values) {
        console.log(values)
    }

    render() {
        return (
            <div>
                <h2>Create Post</h2>
                <Formik initialValues={{image: '', title: '', tags: ''}}
                        validationSchema={postModel}
                        onSubmit={this.submit.bind(this)}>
                    <Form>
                        <BootstrapForm.Group controlId="formBasicEmail">
                            <BootstrapForm.Label>Image:</BootstrapForm.Label><br/>
                            <Field type="file" name="image"/>
                            <ErrorMessage className="alert alert-danger form-control" name="image" component="div" />
                        </BootstrapForm.Group>
                        <BootstrapForm.Group controlId="formBasicPassword">
                            <BootstrapForm.Label>Title:</BootstrapForm.Label>
                            <Field type="text" name="title" placeholder="Enter title.."  className="form-control"/>
                            <ErrorMessage className="alert alert-danger form-control" name="title" component="div" />
                        </BootstrapForm.Group>
                        <BootstrapForm.Group controlId="formBasicPassword">
                            <BootstrapForm.Label>Tags:</BootstrapForm.Label>
                            <Field type="text" name="tags" placeholder="Enter tags..." className="form-control"/>
                            <ErrorMessage className="alert alert-danger form-control" name="tags" component="div" />
                        </BootstrapForm.Group>
                        <Button variant="primary" type="submit">
                            Share
                        </Button>
                    </Form>
                </Formik>
            </div>
        );
    }
}

export default CreatePost;