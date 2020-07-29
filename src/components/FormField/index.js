import React from 'react';
import { FieldDiv, Input, InputText, LabelSpan } from './styles'

function FormField({ label, type, name, value, onChange }) {
  return (
    <FieldDiv>
      <label>
        {type === 'textarea'? 
          <InputText
          as="textarea"
          type="text"
          name={name}
          value={value}
          onChange={onChange}
          />          
        :
          <Input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          />
        }
        <LabelSpan>
          {label} :
        </LabelSpan>
      </label>
    </FieldDiv>
  )
}

export default FormField;
