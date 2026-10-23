import styled, { css } from 'styled-components'

export const TRANSITION_MS = 200

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 50px 16px;
  overflow-y: auto;
  background: rgba(9, 30, 66, 0.54);
  opacity: ${props => (props.$visible ? 1 : 0)};
  transition: opacity ${TRANSITION_MS}ms ease;
`

export const ModalCard = styled.form`
  width: 100%;
  max-width: 800px;
  box-sizing: border-box;
  padding: 25px 40px 30px;
  border-radius: 3px;
  background: white;
  box-shadow:
    rgba(9, 30, 66, 0.25) 0px 8px 16px -4px,
    rgba(9, 30, 66, 0.31) 0px 0px 1px;
  transform: ${props =>
    props.$visible
      ? 'translateY(0) scale(1)'
      : 'translateY(-20px) scale(0.98)'};
  transition: transform ${TRANSITION_MS}ms ease;

  @media (max-width: 600px) {
    padding: 20px;
  }
`

export const ModalTitle = styled.h2`
  margin: 0 0 25px;
  font-size: 24px;
  font-weight: normal;
  font-family: CircularStdMedium;
  color: #172b4d;
`

export const Field = styled.div`
  display: grid;
  grid-template-columns: 130px 1fr;
  column-gap: 20px;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    row-gap: 6px;
  }
`

export const Label = styled.label`
  padding-top: 8px;
  text-align: right;
  font-size: 14px;
  color: #5e6c84;

  .required {
    margin-left: 2px;
    color: #de350b;
  }

  @media (max-width: 600px) {
    padding-top: 0;
    text-align: left;
  }
`

export const Control = styled.div`
  min-width: 0;
`

const inputStyles = css`
  width: 100%;
  box-sizing: border-box;
  padding: 8px 10px;
  font-size: 14px;
  color: #172b4d;
  background: #f4f5f7;
  border: 2px solid ${props => (props.$invalid ? '#de350b' : '#dfe1e6')};
  border-radius: 3px;
  outline: none;
  transition:
    background 0.1s ease,
    border-color 0.1s ease;

  &:hover {
    background: #ebecf0;
  }

  &:focus {
    background: white;
    border-color: #4c9aff;
  }
`

export const Input = styled.input`
  ${inputStyles}
`

export const Select = styled.select`
  ${inputStyles}
  cursor: pointer;
`

export const TextArea = styled.textarea`
  ${inputStyles}
  min-height: ${props => props.$minHeight || '80px'};
  resize: vertical;
  font-family: inherit;
  line-height: 1.4;
`

export const StaticValue = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding-top: 8px;
  font-size: 14px;
  font-family: CircularStdMedium;
  color: #172b4d;
`

export const InlineRow = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`

export const HelpText = styled.div`
  margin-top: 6px;
  font-size: 12.5px;
  line-height: 1.6;
  color: #5e6c84;
`

export const PriorityHint = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`

export const IconSelect = styled.div`
  position: relative;
  max-width: 300px;

  > i {
    position: absolute;
    top: 50%;
    left: 11px;
    transform: translateY(-50%);
    pointer-events: none;
  }

  > select {
    padding-left: 34px;
  }
`

export const ErrorText = styled.div`
  margin-top: 6px;
  font-size: 12.5px;
  color: #de350b;
`

export const LinkButton = styled.button`
  padding: 0;
  border: none;
  background: none;
  font-size: 14px;
  color: #0052cc;
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 10px;
  padding-top: 20px;
  border-top: 1px solid #dfe1e6;
`

export const Button = styled.button`
  height: 32px;
  padding: 0 14px;
  border: none;
  border-radius: 3px;
  font-size: 14px;
  font-family: CircularStdBook;
  cursor: pointer;
  transition: background 0.1s ease;
  color: ${props => (props.$primary ? 'white' : '#42526e')};
  background: ${props => (props.$primary ? '#0052cc' : 'transparent')};

  &:hover {
    background: ${props => (props.$primary ? '#0065ff' : '#ebecf0')};
  }
`
