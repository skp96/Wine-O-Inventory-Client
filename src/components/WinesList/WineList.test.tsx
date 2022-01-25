import { render } from '@testing-library/react';
import { WineList } from "./WineList"
import { Wine } from '../../interfaces/wine_interface';


const defaultProps = {
  winesList: []
}

test('renders a title', () => {
  const { getByText } = render(<WineList {...defaultProps}/>)
  expect(getByText(/wine inventory/i)).toBeInTheDocument()
});

test('renders a wine item', () => {
  const fakeWinesList: Wine[] = [{ id: 1, name: "test wine", description: "test wine", rating: 1, quantity: 1 }]
  const { getByText } = render(<WineList winesList={fakeWinesList} />)

  expect(getByText(/test wine/i)).toBeInTheDocument()
})

test('renders a list of wine items', () => {
  const fakeWinesList: Wine[] = [
    { id: 1, name: "test wine", description: "test wine", rating: 1, quantity: 1 },
    { id: 2, name: "another test", description: "another test", rating: 2, quantity: 2 }
  ]
  const { getByText } = render(<WineList winesList={fakeWinesList} />)
  
  expect(getByText(/test wine/i)).toBeInTheDocument()
  expect(getByText(/another test/i)).toBeInTheDocument()
})

test('renders a message when list of wine items is empty', () => {
  const winesList: Wine[] = []
  const { getByText } = render(<WineList winesList={winesList} />)

  expect(getByText(/list is empty!/i)).toBeInTheDocument()
})
