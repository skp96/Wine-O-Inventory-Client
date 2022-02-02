import { render, waitFor } from "@testing-library/react"
import { FormModal } from "./FormModal"

const default_props = {
    openAddModal: true,
    handleCloseAddModal: () => false
}

test("displays a header to add a wine", () => {
    const { getByText } = render(<FormModal {...default_props} header="Add Your Wine Below:" />)

    expect(getByText("Add Your Wine Below:")).toBeInTheDocument()
})

test("displays a form to create a wine", () => {
    const { getByTestId } = render(<FormModal {...default_props} header="Add Your Wine Below:" />)

    expect(getByTestId("form-id")).toBeInTheDocument()
})
