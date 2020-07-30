import styled, { css } from 'styled-components';

export const FieldWrapper = styled.div`
  position: relative;

  input[type="color"] {
    padding-left: 56px;
  }
`;

export const Input = styled.input`
  background: rgb(83, 88, 93) none repeat scroll 0% 0%;
  color: rgb(245, 245, 245);
  display: block;
  width: 100%;
  height: 57px;
  font-size: 18px;
  outline: currentcolor none 0px;
  border-color: transparent currentcolor rgb(83, 88, 93);
  border-style: solid none;
  border-width: 4px 0px;
  border-image: none 100% / 1 / 0 stretch;
  padding: 16px;
  margin-bottom: 45px;
  resize: none;
  border-radius: 4px;
  transition: border-color 0.3s ease 0s;

  &:focus {
    border-bottom-color: var(--primary);
  }
  &:focus:not([type="color"]) + span {
    transform: scale(0.6) translateY(-10px);
  }
  ${({ hasValue }) => hasValue && css`
      &:not([type="color"]) + span {
        transform: scale(0.6) translateY(-10px);
      }
    `}
`;

export const InputText = styled(Input)`
  min-height: 150px;
`;

export const LabelText = styled.span`
  color: rgb(229, 229, 229);
  height: 57px;
  position: absolute;
  top: 0px;
  left: 16px;
  display: flex;
  -moz-box-align: center;
  align-items: center;
  transform-origin: 0% 0% 0px;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  transition: all 0.1s ease-in-out 0s;
`;
