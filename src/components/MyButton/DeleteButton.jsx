import React from 'react'
import { Button } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

function DeleteButton() {
  return (
    <Button className="deleteButton">
      <FontAwesomeIcon icon={faTrashCan} />
    </Button>
  )
}

export default DeleteButton
