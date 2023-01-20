import React from 'react'
import { Button } from '@mui/material'
import Loading from '../Loading/loading'

function DeleteModal({ delOne, setShowModal, loading, setLoading }) {
  return (
    <div id="delModal" className="modal">
      <div className="modalContent">
        <span class="close">&times;</span>
        <h2 style={{ textAlign: 'center' }}>ARE YOU SURE?</h2>
        <div className="choiceWrapper">
          <div className="yesNo">
            <Button variant="contained" onClick={delOne}>
              YES
            </Button>
            <Button variant="contained" onClick={() => setShowModal(false)}>
              NO
            </Button>
          </div>
          {loading && <Loading />}
        </div>
      </div>
    </div>
  )
}

export default DeleteModal
