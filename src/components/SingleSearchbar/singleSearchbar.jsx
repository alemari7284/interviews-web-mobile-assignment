import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Button from '@mui/material/Button'
import { TextField } from '@mui/material'
import { useState, useRef } from 'react'

function SingleSearchbar({ getOne }) {
  const element = <FontAwesomeIcon icon={faMagnifyingGlass} />

  const cmp = useRef()

  function handleClick() {
    getOne(cmp.current.lastChild.firstChild.value)
  }

  return (
    <div className="singleSearchbar">
      <TextField
        type={'number'}
        ref={cmp}
        label="Enter post ID"
        variant="outlined"
      />
      <Button variant="contained" onClick={handleClick}>
        {element}
      </Button>
    </div>
  )
}

export default SingleSearchbar
