import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
// import { getBlogs, addBlog, editBlog, deleteBlog } from './redux/actions/blogs';
import {Table} from 'react-bootstrap';
import { getBlogs , editBlog , addBlog , deleteBlog } from '../../redux/actions/blogs';
import Popup from '../../Popup';
// import { getBlogs , editBlog , addBlog , deleteBlog } from '../../redux/api';
// import Popup from './Popup';




function Blog() {
  const [showBulkAdd, setShowBulkAdd] = useState(false);
  const initialState = { author: "", text: "" };
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const blogs = useSelector(state => state.blogsReducer?.blogsData?.b);

  //Edit
  const editHandler = (data) =>  {            
  dispatch(editBlog({ id: data }));
  }
  //delete
  const deleteHandler = (data) => {
    // alert(data)
    dispatch(deleteBlog({ id: data }));
  }
  useEffect(() => {
    dispatch(getBlogs())
  }, [formData ,blogs])
  
  const handleSubmit = (e) => {
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

  return (
    <div className="App">
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
        {/* <button className="userBtn" onClick={togglePopup}>Add User</button> */}
        {showBulkAdd ? (
          <Popup text="Close Me" closePopup={togglePopup} />
        ) : null}
      </div>
      <Table className="table" striped bordered hover>
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
                      onClick={togglePopup}>Edit
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