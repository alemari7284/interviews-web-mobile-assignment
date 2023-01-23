import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Button from '@mui/material/Button'
import { TextField } from '@mui/material'
import { useRef } from 'react'

function SingleSearchbar({ getOne, setError }) {
  const cmp = useRef()

  function handleClick() {
    console.log('cerca')
    const id = cmp.current.lastChild.firstChild.value
    if (id) {
      getOne(id)
    } else {
      setError({ message: 'missing id' })
    }
  }

  return (
    <div className="singleSearchbar">
      <TextField
        type={'number'}
        ref={cmp}
        label="Enter post ID"
        variant="outlined"
      />
      <Button className="myButton" variant="contained" onClick={handleClick}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </Button>
    </div>
  )
}

export default SingleSearchbar
