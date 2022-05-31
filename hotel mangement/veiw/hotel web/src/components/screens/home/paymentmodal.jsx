import React from 'react'

const Paymentmodal = () => {
  return (
    <>
    <div>

        <div className="modal fade" id="Bookingdetails" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Payement Details</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Enter Payement methode</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Credit card number</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">CVV CODE </label>
                    <input type="password" class="form-control" id="exampleInputPassword1" />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">EXPIRAY DATE</label>
                    <input type="date" class="form-control" id="exampleInputPassword1" />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Name on card</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" />
                  </div>
                  

                  <button type="submit" class="btn btn-primary">Submit</button>
                </form>
              </div>

            </div>
          </div>
        </div>
      </div>

      <button data-toggle="modal" data-target="#Bookingdetails">Open</button>
    </>
  )
}

export default Paymentmodal