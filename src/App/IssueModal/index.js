import React, { useEffect, useRef, useState } from 'react'
import {
  TRANSITION_MS,
  Overlay,
  ModalCard,
  ModalTitle,
  Field,
  Label,
  Control,
  Input,
  Select,
  TextArea,
  StaticValue,
  InlineRow,
  HelpText,
  PriorityHint,
  IconSelect,
  ErrorText,
  LinkButton,
  Footer,
  Button,
} from './styles'
import { StyledIcon } from '../KanbanBoard/styles'
import { fontIconCodes } from '../utils'
import {
  users,
  currentUserId,
  priorities,
  getCardPriority,
  getCardAssigneeId,
} from '../KanbanBoard/db'

const emptyForm = {
  summary: '',
  priority: 'Medium',
  assignee: '',
  description: '',
  briefScope: '',
}

const formFromIssue = issue => ({
  summary: issue.title,
  priority: getCardPriority(issue).value,
  assignee: getCardAssigneeId(issue) ?? '',
  description: issue.description ?? '',
  briefScope: issue.briefScope ?? '',
})

// Creates a new issue, or edits `issue` when one is passed
const IssueModal = ({ isOpen, issue, status, onClose, onSave }) => {
  const isEditing = Boolean(issue)
  const [isMounted, setIsMounted] = useState(isOpen)
  const [isVisible, setIsVisible] = useState(false)
  const [form, setForm] = useState(emptyForm)
  const [showErrors, setShowErrors] = useState(false)
  const summaryRef = useRef(null)

  // Keep the modal mounted while it fades out, and paint it hidden for a
  // frame before fading in so the transition runs both ways.
  useEffect(() => {
    if (isOpen) {
      setForm(issue ? formFromIssue(issue) : emptyForm)
      setShowErrors(false)
      setIsMounted(true)
      let frame = requestAnimationFrame(() => {
        frame = requestAnimationFrame(() => setIsVisible(true))
      })
      return () => cancelAnimationFrame(frame)
    }

    setIsVisible(false)
    const timer = setTimeout(() => setIsMounted(false), TRANSITION_MS)
    return () => clearTimeout(timer)
  }, [isOpen, issue])

  useEffect(() => {
    if (isVisible) summaryRef.current?.focus()
  }, [isVisible])

  useEffect(() => {
    if (!isMounted) return

    const handleKeyDown = e => {
      if (e.key === 'Escape') onClose()
    }
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isMounted, onClose])

  if (!isMounted) return null

  const errors = {
    summary: !form.summary.trim() && 'Summary is required',
    description: !form.description.trim() && 'Description is required',
  }

  const selectedPriority = priorities.find(p => p.value === form.priority)

  const updateField = field => e =>
    setForm(prev => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    if (errors.summary || errors.description) {
      setShowErrors(true)
      return
    }

    onSave({
      ...issue,
      id: issue?.id ?? String(Date.now()),
      title: form.summary.trim(),
      priority: form.priority,
      assignee: form.assignee || null,
      description: form.description.trim(),
      briefScope: form.briefScope.trim(),
    })
    onClose()
  }

  return (
    <Overlay
      $visible={isVisible}
      onMouseDown={e => e.target === e.currentTarget && onClose()}
    >
      <ModalCard
        $visible={isVisible}
        role="dialog"
        aria-modal="true"
        aria-labelledby="issue-modal-title"
        onSubmit={handleSubmit}
        noValidate
      >
        <ModalTitle id="issue-modal-title">
          {isEditing ? 'Edit Issue' : 'Create Issue'}
        </ModalTitle>

        <Field>
          <Label as="div">Project</Label>
          <StaticValue>Test Project</StaticValue>
        </Field>

        <Field>
          <Label as="div">Issue Type</Label>
          <StaticValue>
            <StyledIcon
              code={fontIconCodes['task']}
              color="#4fade6"
              size={'18px'}
            />
            Task
          </StaticValue>
        </Field>

        {isEditing && status && (
          <Field>
            <Label as="div">Status</Label>
            <StaticValue>{status}</StaticValue>
          </Field>
        )}

        <Field>
          <Label htmlFor="issue-summary">
            Summary<span className="required">*</span>
          </Label>
          <Control>
            <Input
              id="issue-summary"
              ref={summaryRef}
              value={form.summary}
              onChange={updateField('summary')}
              $invalid={showErrors && errors.summary}
            />
            {showErrors && errors.summary && (
              <ErrorText>{errors.summary}</ErrorText>
            )}
          </Control>
        </Field>

        <Field>
          <Label htmlFor="issue-priority">Priority</Label>
          <Control>
            <IconSelect>
              <StyledIcon
                code={fontIconCodes[selectedPriority.icon]}
                color={selectedPriority.color}
                size={'16px'}
              />
              <Select
                id="issue-priority"
                value={form.priority}
                onChange={updateField('priority')}
              >
                {priorities.map(({ value }) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </Select>
            </IconSelect>
            <HelpText>
              {priorities.map(({ value, description, icon, color }) => (
                <PriorityHint key={value}>
                  <StyledIcon
                    code={fontIconCodes[icon]}
                    color={color}
                    size={'14px'}
                  />
                  {value} - {description}
                </PriorityHint>
              ))}
            </HelpText>
          </Control>
        </Field>

        <Field>
          <Label htmlFor="issue-assignee">
            Assignee<span className="required">*</span>
          </Label>
          <InlineRow>
            <Select
              id="issue-assignee"
              value={form.assignee}
              onChange={updateField('assignee')}
            >
              <option value="">Automatic</option>
              {users.map(user => (
                <option key={user.id} value={user.id}>
                  {user.title}
                </option>
              ))}
            </Select>
            <LinkButton
              type="button"
              onClick={() =>
                setForm(prev => ({ ...prev, assignee: currentUserId }))
              }
            >
              Assign to me
            </LinkButton>
          </InlineRow>
        </Field>

        <Field>
          <Label htmlFor="issue-description">
            Description<span className="required">*</span>
          </Label>
          <Control>
            <TextArea
              id="issue-description"
              value={form.description}
              onChange={updateField('description')}
              $minHeight="160px"
              $invalid={showErrors && errors.description}
            />
            {showErrors && errors.description && (
              <ErrorText>{errors.description}</ErrorText>
            )}
          </Control>
        </Field>

        <Field>
          <Label htmlFor="issue-brief-scope">Brief Scope</Label>
          <TextArea
            id="issue-brief-scope"
            value={form.briefScope}
            onChange={updateField('briefScope')}
          />
        </Field>

        <Footer>
          <Button type="button" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" $primary>
            {isEditing ? 'Save' : 'Create'}
          </Button>
        </Footer>
      </ModalCard>
    </Overlay>
  )
}

export default IssueModal
