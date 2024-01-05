import React from 'react'
import './crearAfiliado.css'

export default function CrearAfiliado() {
  return (
    <div>
    <button type="button" class="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Create Profile</button>

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Registration</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body"> 
                <div className='container-datos gap-4'>
                    <div className='datos1'>   
                        <div class="col-4 mb-3">
                            <label for="recipient-name" class="col-form-label">First Name</label>
                            <input type="text" class="form-control" id="recipient-name"/>
                        </div>
                        <div class="col-2 mb-3">
                            <label for="recipient-name" class="col-form-label">Last Name</label>
                            <input type="text" class="form-control" id="recipient-name"/>
                        </div>
                        <div class="col-2 mb-3">
                            <label for="recipient-name" class="col-form-label">PATIENT ID</label>
                            <input type="text" class="form-control" id="recipient-name"/>
                        </div>
                        <div class="col-2 mb-3">
                            <label for="recipient-name" class="col-form-label">Birth Date</label>
                            <input type="date" class="form-control" id="recipient-name"/>
                        </div>
                    </div>
                    <div className='datos2'>   
                        <div class="col-2 mb-3">
                            <label for="recipient-name" class="col-form-label">Recipient</label>
                            <input type="text" class="form-control" id="recipient-name"/>
                        </div>
                        <div class="col-2 mb-3">
                            <label for="recipient-name" class="col-form-label">Address</label>
                            <input type="text" class="form-control" id="recipient-name"/>
                        </div>
                        <div class="col-4 mb-3">
                            <label for="recipient-name" class="col-form-label">Email</label>
                            <input type="mail" class="form-control" id="recipient-name"/>
                        </div> 
                        <div class="col-2 mb-3">
                            <label for="recipient-name" class="col-form-label">Sex</label>
                            <select class="form-select" aria-label="Default select example">
                            <option selected>Select</option>
                                <option value="1">Male</option>
                                <option value="2">Female</option>
                                <option value="3">Non-binary</option>
                                <option value="3">Prefer Not To Say</option>
                            </select>
                        </div>
                    </div>

                    <div className='datos3'>   
                        <div class="col-2 mb-3">
                            <label for="recipient-name" class="col-form-label"></label>
                            
                        </div>
                        <div class="col-2 mb-3">
                            <label for="recipient-name" class="col-form-label">Admit Date</label>
                            <input type="date" class="form-control" id="recipient-name"/>
                        </div>
                        <div class="col-2 mb-3">
                            <label for="recipient-name" class="col-form-label">Room No</label>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Select</option>
                                <option value="1">Room No - 1</option>
                                <option value="2">Room No - 2</option>
                                <option value="3">Room No - 3</option>
                            </select>
                        </div> 
                        <div class="col-4 mb-3">
                            <label for="recipient-name" class="col-form-label">Mobile No</label>
                            <input type="txt" class="form-control" id="recipient-name"/>
                        </div>
                    </div>


                   


                </div>
                
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                <button type="button" class="btn btn-success">Create Profile</button>
            </div>
            </div>
             </div>
</div>
    </div>
  )
}
