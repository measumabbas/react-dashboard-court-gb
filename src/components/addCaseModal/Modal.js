import React from 'react'
import './modal.css'
import { AiOutlineClose } from 'react-icons/ai'
import { AiFillFolderAdd } from 'react-icons/ai'
const Modal = () => {
    return (
        <div className='modal-main'>
            <div className="modal">
                    
                <div className="modal-header">
                    <p>Add a new Case</p>
                    <AiFillFolderAdd/>
                </div>
                <div className="modal-body">
                    <form>
                        <div className="title-input">

                            <div className="input-item">
                                <label htmlFor="title">Title</label>
                                <input type="text" id='title' />
                            </div>
                            <div className="input-item">
                                <label htmlFor="desc">Description</label>
                                <textarea name="desc" id="desc"></textarea>
                            </div>
                        </div>

                        <div className="furthur-input">

                            <div className="input-item">
                                <label htmlFor="case-type">Case Type</label>
                                <select name="case-type" id="case-type">
                                    <option value="case-type-1">case-type-1</option>
                                    <option value="case-type-2">case-type-2</option>
                                    <option value="case-type-3">case-type-3</option>
                                    <option value="case-type-4">case-type-4</option>
                                </select>
                            </div>
                            <div className="input-item">

                                <label htmlFor="lawyer">Select lawyer</label>

                                <select name="lawyer" id="lawyer">
                                    <option value="Lawyer 1">Lawyer 1</option>
                                    <option value="Lawyer 2">Lawyer 2</option>
                                    <option value="Lawyer 3">Lawyer 3</option>
                                    <option value="Lawyer 4">Lawyer 4</option>
                                </select>
                            </div>

                            <div className="input-item">
                                <label htmlFor="date">Select Date</label>
                                <input type="date" id="date" name="date" />
                            </div>

                        </div>
                        <hr />
                        <div className="incase">
                            <p>In Case of any specific case</p>
                            <div className="incase-inputs">

                                <div className="input-item">
                                    <label htmlFor="input-1">option 1</label>
                                    <input type="text" id="input-1" name="input-1" />
                                </div>
                                <div className="input-item">
                                    <label htmlFor="input-2">option 2</label>
                                    <input type="text" id="input-2" name="input-2" />
                                </div>
                                <div className="input-item">
                                    <label htmlFor="input-3">option 3</label>
                                    <input type="text" id="input-3" name="input-3" />
                                </div>
                            </div>
                        </div>
                        <div className="remarks">
                            <div className="input-item">
                                <label htmlFor="remarks">Remarks</label>
                                <textarea name="remarks" id="remarks"></textarea>
                            </div>
                        </div>

                        <div className="submit-inputs">
                            <input type="reset" value='Reset Fields' style={{backgroundColor:'#DC143C',padding:'10px'}}/>
                            <input type="submit" value='Create Case' style={{backgroundColor:'#34A853',padding:'10px'}} />
                        </div>
            </form>
                </div>

        </div>
        </div>
    )
}

export default Modal