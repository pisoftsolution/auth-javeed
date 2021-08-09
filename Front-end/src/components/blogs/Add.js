import React, { useState , useEffect } from 'react';

import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux'
import { addBlog , getBlogs } from '../../redux/actions/blogs';
import './Add.css';

function Add() {
    const [modalAdd, setModalAdd] = useState(false);
    const [shouldCall, setShouldCall] = useState(false);
    const initialState = { author: "", text: "" };
    const [formData, setFormData] = useState(initialState);
    const dispatch = useDispatch();
    const blogs = useSelector(state => state.blogsReducer?.blogsData?.b);

    const handleAddSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        dispatch(addBlog(formData, blogs))
        .then(res => {
            console.log(formData);
            setShouldCall(!shouldCall);
        })

    }
    useEffect(() => {
        dispatch(getBlogs())
    }, [shouldCall])
    return (
        <div className="addpart">
            <button type="button" className="btn btn-primary" onClick={() => setModalAdd(true)}>ADD Name</button>
            <Modal isOpen={modalAdd}>
                <div>
                    <div class="addhead"><h1>ADD USER</h1></div>
                    <form onSubmit={handleAddSubmit}>
                        <input
                            name="author"
                            placeholder="Author Name"
                            type="text"
                            onChange={(e) => {
                                setFormData({
                                    ...formData,
                                    [e.target.name]: e.target.value,
                                })
                            }}
                            required
                        /><br /><br />
                        <textarea
                            name="text"
                            placeholder="Enter Blog Here"
                            onChange={(e) => {
                                setFormData({
                                    ...formData,
                                    [e.target.name]: e.target.value,

                                })
                            }}
                            required
                        /><br /><br />
                        <button className="save "
                            type="submit"
                        >Save</button>
                        <button className="exit" onClick={() => setModalAdd(false)}  >Close</button>
                    </form>
                </div>
            </Modal>

        </div>
    )
}


export default Add;