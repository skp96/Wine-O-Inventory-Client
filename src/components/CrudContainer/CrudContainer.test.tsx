import { render, waitFor } from "@testing-library/react"
import { CrudContainer } from "./CrudContainer"
import userEvent from '@testing-library/user-event'

test(`displays an Add button`, () => {
    const { getByText } = render(<CrudContainer />)

    expect(getByText("Add")).toBeInTheDocument()
})

test('click Add button renders a modal', () => {
    const { getByText, getByTestId } = render(<CrudContainer />)

    userEvent.click(getByText('Add'))
    expect(getByTestId("add-modal-id")).toBeInTheDocument()
})

test('open modal renders a close button', () => {
    const { getByText } = render(<CrudContainer />)
    
    userEvent.click(getByText('Add'))

    expect(getByText("Close")).toBeInTheDocument()
})

test('clicking close button in open modal closes the modal', async () => {
    const { getByText, queryByText } = render(<CrudContainer />)

    userEvent.click(getByText('Add'))

    userEvent.click(getByText("Close"))

    await waitFor(() => {
        expect(queryByText("Close")).not.toBeInTheDocument()
    })
})

