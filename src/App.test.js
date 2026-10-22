import { render, screen } from '@testing-library/react'
import App from './App/App'

test('renders the kanban board columns', () => {
  render(<App />)
  expect(screen.getByText('Backlog')).toBeInTheDocument()
  expect(screen.getByText('In progress')).toBeInTheDocument()
})
