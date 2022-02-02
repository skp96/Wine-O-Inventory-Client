import { useState } from "react"
import { FormModal } from '../Modal/FormModal'
import Button from '@mui/material/Button'
import {createWine} from '../../api/wine_api'

export const CrudContainer = () => {
    const [openAddModal, setOpenAddModal] = useState(false)

    const handleOpenAddModal = () => setOpenAddModal(true)
    const handleCloseAddModal = () => setOpenAddModal(false)

    return (
        <section className='section-buttons'>
        <Button variant='outlined' onClick={handleOpenAddModal}>Add</Button>
        <FormModal
          openAddModal={openAddModal}
          handleCloseAddModal={handleCloseAddModal}
          header={"Add Your Wine!"}
          createWine={createWine}
        />
      </section>
    )
}
