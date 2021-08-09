import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {Table , Button} from 'react-bootstrap';
import { getBlogs , editBlog , addBlog , deleteBlog } from '../../redux/actions/blogs';
import Modal from 'react-bootstrap/Modal'
import Popup from '../../Popup';
import Add from './Add';




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

  const handleEditSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch(editBlog(formData , editId))
    .then(res=>{
      setShouldCall(!shouldCall);
      setShow(false);
      setFormData(initialState);
    })
  }
  
  // const handleAddSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(formData);
  //   dispatch(addBlog(formData))
  //   .then(res => {
  //     setShouldCall(!shouldCall);
  //     console.log(res);
  //   })
  // }

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
          <Modal.Title>Edit Blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleEditSubmit}>
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
            >save</button>
          </form>
        </Modal.Body>
      </Modal>
      
      <div className="btn">
        <Add />       
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
                      
                      <Button className="btn2" onClick={() => deleteHandler(b._id)}>Delete</Button>
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