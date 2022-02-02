import { Modal } from '@mui/material'
import { Box } from '@mui/system'
import Button from '@mui/material/Button'

export const FormModal: React.FC<{
  openAddModal: boolean,
  handleCloseAddModal: () => void
  header: string
}> = ({ openAddModal, handleCloseAddModal, header }) => {

  return (
    <Modal data-testid="add-modal-id" open={openAddModal} onClose={handleCloseAddModal}>
      <Box className="modal-box">
        <h2>{header}</h2>
        <div className='form'>
          <form data-testid="form-id">
            <div className='form-row'>
              <label>Name:</label>
              <input type='text' placeholder='Enter your name here'/>
            </div>
            <div className='form-row'>
              <label>Description:</label>
              <input type='text' placeholder='Enter a description'/>
            </div>
            <div className='form-row'>
              <label>Rating:</label>
              <input type='number' min='0' max='5' placeholder="Enter a value between 0 and 5" />
            </div>
            <div>
              <label>Quantity:</label>
              <input type='number' min='0' placeholder='Enter the quantity here'/>
            </div>
          </form>
        </div>
        <Button variant='outlined' onClick={handleCloseAddModal}>Close</Button>
      </Box>
    </Modal>
  )
}
