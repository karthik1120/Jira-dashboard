import {
  render,
  screen,
  fireEvent,
  within,
  waitForElementToBeRemoved,
} from '@testing-library/react'
import App from './App/App'

test('renders the kanban board columns', () => {
  render(<App />)
  expect(screen.getByText('Backlog')).toBeInTheDocument()
  expect(screen.getByText('In progress')).toBeInTheDocument()
})

test('filters cards by title', () => {
  render(<App />)
  fireEvent.change(screen.getByPlaceholderText('Search issues'), {
    target: { value: 'RICH TEXT' },
  })
  expect(
    screen.getByText('You can use rich text with images in issue descriptions.')
  ).toBeInTheDocument()
  expect(
    screen.queryByText(
      'Each issue can be assigned priority from lowest to highest.'
    )
  ).not.toBeInTheDocument()
})

test('opens the create issue modal and adds the issue to the board', async () => {
  render(<App />)
  fireEvent.click(screen.getByRole('button', { name: /create issue/i }))

  const dialog = await screen.findByRole('dialog')
  expect(
    within(dialog).getByRole('heading', { name: 'Create Issue' })
  ).toBeInTheDocument()

  fireEvent.click(within(dialog).getByRole('button', { name: 'Create' }))
  expect(within(dialog).getByText('Summary is required')).toBeInTheDocument()
  expect(
    within(dialog).getByText('Description is required')
  ).toBeInTheDocument()

  fireEvent.change(within(dialog).getByLabelText(/summary/i), {
    target: { value: 'Brand new ticket' },
  })
  fireEvent.change(within(dialog).getByLabelText(/description/i), {
    target: { value: 'Some details' },
  })
  fireEvent.click(within(dialog).getByRole('button', { name: 'Create' }))

  expect(screen.getByText('Brand new ticket')).toBeInTheDocument()
  await waitForElementToBeRemoved(() => screen.queryByRole('dialog'))
})

test('opens a ticket in the modal and saves edits', async () => {
  render(<App />)
  fireEvent.click(screen.getByText('two value'))

  const dialog = await screen.findByRole('dialog')
  expect(
    within(dialog).getByRole('heading', { name: 'Edit Issue' })
  ).toBeInTheDocument()
  expect(within(dialog).getByText('ready for deployment')).toBeInTheDocument()

  const summary = within(dialog).getByLabelText(/summary/i)
  expect(summary).toHaveValue('two value')
  fireEvent.change(summary, { target: { value: 'two value, edited' } })
  fireEvent.change(within(dialog).getByLabelText(/description/i), {
    target: { value: 'Now with details' },
  })
  fireEvent.click(within(dialog).getByRole('button', { name: 'Save' }))

  expect(screen.getByText('two value, edited')).toBeInTheDocument()
  expect(screen.queryByText('two value')).not.toBeInTheDocument()
  await waitForElementToBeRemoved(() => screen.queryByRole('dialog'))
})
