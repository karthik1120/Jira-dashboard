export const initialData = [
  {
    id: '11110',
    cards: [
      {
        title: 'Each issue can be assigned priority from lowest to highest.',
        id: '221',
      },
      {
        title: 'one value ',
        id: '332',
      },
    ],
    title: 'Backlog',
  },
  {
    id: '1',
    cards: [
      {
        title: 'You can use rich text with images in issue descriptions.',
        id: '2',
      },
      {
        title: 'one value ',
        id: '3',
      },
    ],
    title: 'In progress',
  },
  {
    id: '4',
    cards: [
      {
        id: '5',
        title: 'Issue: How to show full issue title on sprint board?',
      },
      {
        id: '6',
        title: 'This is an issue of type: Task. ',
      },
      {
        id: '7',
        title:
          'Jira will truncate based on the width of the column. You could break your board into several boards that show you just the tickets ',
      },
    ],
    title: 'Dev completed',
  },
  {
    id: '8',
    cards: [
      {
        id: '21',
        title: 'one value ',
      },
      {
        id: '300',
        title: 'two value',
      },
      {
        id: '74',
        title:
          'I had a developer complain about this, and we ended up (successfully) getting around this by making a dummy swim lane, which ended up squishing the columns just right',
      },
    ],
    title: 'ready for deployment',
  },
]

export const users = [
  {
    id: 'yoda',
    title: 'baby yoda',
    img: 'https://i.ibb.co/6n0hLML/baby-yoda.jpg',
  },
  {
    id: 'rick',
    title: 'pickle rick',
    img: 'https://i.ibb.co/7JM1P2r/picke-rick.jpg',
  },
  {
    id: 'starstruck',
    title: 'starstruck',
    img: 'https://github.githubassets.com/assets/starstruck-default-b6610abad518.png',
  },
]

export const currentUserId = 'yoda'

export const priorities = [
  {
    value: 'High',
    description: 'very urgent task',
    icon: 'arrow-up',
    color: '#cd1317',
  },
  {
    value: 'Medium',
    description: 'normal activity',
    icon: 'arrow-up',
    color: '#e97f33',
  },
  {
    value: 'Low',
    description: 'Long activity',
    icon: 'arrow-down',
    color: '#2d8738',
  },
]

// Seed cards predate the priority and assignee fields, so fall back to the
// values the board has always shown for them.
export const getCardPriority = card =>
  priorities.find(p => p.value === card?.priority) ?? priorities[0]

export const getCardAssigneeId = card =>
  card?.assignee === undefined ? users[0].id : card.assignee
