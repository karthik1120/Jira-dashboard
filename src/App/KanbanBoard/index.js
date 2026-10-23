import React, { useCallback, useState } from 'react'
import {
  KanbanBody,
  ClickableNav,
  BoardHeader,
  KanbanFilters,
  StyledIcon,
  InputFilter,
  StyledSearchIcon,
  AvatarFilter,
  Avatar,
  KanbanboardBody,
} from './styles'
import { fontIconCodes } from '../utils'
import KanbanDndComponent from './KanbanDndComponent'
import IssueModal from '../IssueModal'
import { initialData, users } from './db'

const KanbanBoard = () => {
  const [selectedUsers, setSelectedUsers] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [columns, setColumns] = useState(initialData)
  // `issue` stays set while the modal fades out so its content doesn't jump
  const [modal, setModal] = useState({ isOpen: false, issue: null })

  const openIssue = useCallback(issue => setModal({ isOpen: true, issue }), [])
  const closeModal = useCallback(
    () => setModal(prev => ({ ...prev, isOpen: false })),
    []
  )

  const issueStatus =
    modal.issue &&
    columns.find(col => col.cards.some(card => card.id === modal.issue.id))
      ?.title

  // Edits replace the card in place; new issues land at the bottom of the
  // leftmost column
  const handleSaveIssue = card =>
    setColumns(prev =>
      modal.issue
        ? prev.map(col => ({
            ...col,
            cards: col.cards.map(c => (c.id === card.id ? card : c)),
          }))
        : prev.map((col, i) =>
            i === 0 ? { ...col, cards: [...col.cards, card] } : col
          )
    )

  const handleSelectAvatar = id =>
    setSelectedUsers(prev =>
      prev.includes(id) ? prev.filter(u => u !== id) : [...prev, id]
    )

  return (
    <KanbanBody>
      <ClickableNav>
        Projects
        <span className="seperator">/</span>
        components
        <span className="seperator">/</span>
        Kanban board
      </ClickableNav>
      <BoardHeader>
        <div id={'boardHeader'}> Kanban board</div>
        <button onClick={() => openIssue(null)}>
          <StyledIcon code={fontIconCodes['plus']} />
          Create Issue
        </button>
      </BoardHeader>
      <KanbanFilters>
        <InputFilter>
          <StyledSearchIcon code={fontIconCodes['search']} />
          <input
            placeholder="Search issues"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
        </InputFilter>
        <AvatarFilter>
          {users.map(user => (
            <Avatar
              key={user.id}
              img={user.img}
              title={user.title}
              $selected={selectedUsers.includes(user.id)}
              onClick={() => handleSelectAvatar(user.id)}
            />
          ))}
        </AvatarFilter>
      </KanbanFilters>

      <KanbanboardBody>
        <KanbanDndComponent
          columns={columns}
          setColumns={setColumns}
          searchQuery={searchQuery}
          onOpenIssue={openIssue}
        />
      </KanbanboardBody>

      <IssueModal
        isOpen={modal.isOpen}
        issue={modal.issue}
        status={issueStatus}
        onClose={closeModal}
        onSave={handleSaveIssue}
      />
    </KanbanBody>
  )
}

export default KanbanBoard
