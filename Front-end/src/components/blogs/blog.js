import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
// import { getBlogs, addBlog, editBlog, deleteBlog } from './redux/actions/blogs';
import {Table} from 'react-bootstrap';
import { getBlogs , editBlog , addBlog , deleteBlog } from '../../redux/actions/blogs';
import Modal from 'react-bootstrap/Modal'
import Popup from '../../Popup';
// import { getBlogs , editBlog , addBlog , deleteBlog } from '../../redux/api';
// import Popup from './Popup';


function Blog() {
  const [showBulkAdd, setShowBulkAdd] = useState(false);
  const initialState = { author: "", text: "" };
  const [formData, setFormData] = useState(initialState);
  const [editId, setEditId] = useState("");
  const [shouldCall, setShouldCall] = useState(false);
  const dispatch = useDispatch();
  const blogs = useSelector(state => state.blogsReducer?.blogsData?.b);

  //Edit
  const editHandler = (data) => {
    dispatch(editBlog());
  }
  //delete
  const deleteHandler = (data) => {
    dispatch(deleteBlog({ id: data }))
    .then(res=>{
      setShouldCall(!shouldCall);
    })
  }
  useEffect(()=>{
    dispatch(getBlogs())
  },[shouldCall])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch(editBlog(formData , editId))
    .then(res=>{
      setShouldCall(!shouldCall);
      setShow(false);
      setFormData(initialState);
    })
  }
  
  const handlSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch(addBlog(formData))
    .then(res => {
      console.log(res);
    })
  }

  function togglePopup() {
    setShowBulkAdd(!showBulkAdd);
  }
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (id, author, text) => {
    setEditId(id)
    setFormData({
      author : author,
      text : text
    })
    setShow(true);
  }


  return (
    <div className="App">
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form onSubmit={handleSubmit , handlSubmit}>
            <input 
                name="author"
                placeholder="Author Name"
                type="text"
                className=""
                value={formData.author}
                onChange={(e)=>{
                  setFormData({
                    ...formData,
                    [e.target.name] : e.target.value,
                  })
                }}
             required 
             /><br/><br/>
             <textarea
                name="text"
                placeholder="Enter Blog Here"
                value={formData.text}
                onChange={(e)=>{
                  setFormData({
                    ...formData,
                    [e.target.name] : e.target.value,
                  })
                }}
             required 
             /><br/><br/>
             <button
              type="submit"
            >
               save</button>
          </form>
        </Modal.Body>
      </Modal>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            name="author"
            placeholder="Author Name"
            type="text"
            className=""
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
          <button type="submit">save</button>
        </form>
        {/* <button className="userBtn" onClick={togglePopup}>Add User</button>
        {showBulkAdd ? (
          <Popup text="Close Me" closePopup={togglePopup} />
        ) : null} */}
      </div>
      <Table striped bordered hover>
        <tr>
          <th>Author</th>
          <th >Text</th>
          <th >Actions</th>
        </tr>
        {blogs && blogs.length > 0 ?
          blogs.map(b => {
            return (
              <>
                <tr key={b._id}>
                  <td>{b.author}</td>
                  <td>{b.text}</td>
                  <td>
                    <div>
                    <button
                      className="btn1" onClick={()=>editHandler(b._id)}
                      onClick={()=>handleShow(b._id , b.author , b.text)}>Edit
                   </button>
                  {showBulkAdd ? (
                    <Popup closePopup={togglePopup} />
                      ) : null}
                      {/* <button className="btn2" mr-2>Edit</button> */}
                      <button className="btn2" onClick={() => deleteHandler(b._id)}>Delete</button>
                    </div>
                  </td>
                </tr>
              </>
            )
          }) : ''}
      </Table>
    </div>
  )
}
export default Blog;