import React, {useState} from 'react'
import { Modal } from '@mui/material'
import { Box } from '@mui/system'
import Button from '@mui/material/Button'
import { WineData} from '../../interfaces/wine_interface'

export const FormModal: React.FC<{
  openAddModal: boolean,
  handleCloseAddModal: () => void
  header: string
  createWine: (wineData: WineData) => Promise<any>
}> = ({ openAddModal, handleCloseAddModal, header, createWine }) => {

  const [wineValues, setWineValues] = useState<WineData>({
    name: "",
    description: "",
    rating: 0,
    quantity: 0
  })

  const [message, setMessage] = useState("")
  const [errors, setErrors] = useState<string[]>([])

  const onChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    setWineValues({...wineValues, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    await createWine(wineValues).then(response => {
      setWineValues({ name: "", description: "", rating: 0, quantity: 0 })
      setMessage("Successfully added a wine!")
    })
      .catch(error => {
        setMessage("")
        const errorData = error.response.data.errors
        const formattedErrors = formatErrors(errorData)
        setErrors(formattedErrors)
    })
  }

  const formatErrors = (errors: any) => {
    const errorKeys = Object.keys(errors)

    const formattedErrors = errorKeys.map((errorKey: string) => `${errorKey} ${errors[errorKey]}`)

    return formattedErrors
  }

  const renderErrors = () => errors.map((error) => <li>{ error }</li>)

  const handleCloseModal = () => {
    setWineValues({ name: "", description: "", rating: 0, quantity: 0 })
    setMessage("")
    setErrors([])
    handleCloseAddModal()
  }

  return (
    <Modal data-testid="add-modal-id" open={openAddModal} onClose={handleCloseModal}>
      <Box className="modal-box">
        <h2>{header}</h2>
        {message ? (<p data-testid='submit-success-id'>{message}</p>) : null}
        {errors ? (<ol className='error-list' data-testid='submit-error-id'>{renderErrors()}</ol>) : null}
        <div className='form'>
          <form data-testid="form-id" onSubmit={handleSubmit}>
            <div className='form-row'>
              <label>Name:</label>
              <input
                type='text'
                placeholder='Enter your name here'
                name="name"
                value={wineValues.name}
                onChange={onChange}
                data-testid='form-name-id' />
            </div>
            <div className='form-row'>
              <label>Description:</label>
              <input
                type='text'
                placeholder='Enter a description'
                name="description"
                value={wineValues.description}
                onChange={onChange}
                data-testid='form-description-id' />
            </div>
            <div className='form-row'>
              <label>Rating:</label>
              <input
                type='number'
                min='0'
                max='5'
                placeholder="Enter a value between 0 and 5"
                name="rating"
                value={wineValues.rating}
                onChange={onChange}
                data-testid='form-rating-id' />
            </div>
            <div>
              <label>Quantity:</label>
              <input
                type='number'
                min='0'
                placeholder='Enter the quantity here'
                name="quantity"
                value={wineValues.quantity}
                onChange={onChange}
                data-testid='form-quantity-id' />
            </div>
            <Button  type='submit' variant='outlined'>Submit</Button>
          </form>
        </div>
        <div className='form-buttons'>
          <Button variant='outlined' onClick={handleCloseModal}>Close</Button>
        </div>
      </Box>
    </Modal>
  )
}
