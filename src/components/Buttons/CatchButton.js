import Button from 'react-bootstrap/Button'
import CatchModal from '../Modals/CatchModal'
import { useState } from 'react'
import { CgPokemon } from 'react-icons/cg'

const CatchButton = ({ pokemon }) => {
  console.log("Render CatchButton")
  const [state, setState] = useState({
    showModal: false,
    catchStatus: false
  })
  const catchPokemon = (event) => {
    const success_rate = 0.5
    const isSuccess = Math.random() < success_rate
    if (isSuccess) {
      setState({
        showModal: true,
        catchStatus: true
      })
    } else {
      setState({
        showModal: true,
        catchStatus: false
      })
    }
  }
  const closeModal = (event) => {
    setState({
      catchStatus: false,
      showModal: false
    })
  }
  return (
    <>
      <Button
        variant="primary"
        onClick={catchPokemon}
        style={{width: "150px"}}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span>Catch</span>
          <CgPokemon size={20} />
        </div>
      </Button>
      <CatchModal
        showModal={state.showModal}
        catchStatus={state.catchStatus}
        closeModal={closeModal}
        pokemon={pokemon}
      />
    </>
  )
}

export default CatchButton
