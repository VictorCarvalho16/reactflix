import React from 'react';
import PropTypes from 'prop-types';

import {
  FieldWrapper, Input, InputText, LabelText,
} from './styles';

function FormField({
  label, type, name, value, onChange,
}) {
  const fieldId = `id_${name}}`;
  const hasValue = Boolean(value.length);
  return (
    <FieldWrapper>
      <label htmlFor={fieldId}>
        {type === 'textarea'
          ? (
            <InputText
              id={fieldId}
              as="textarea"
              type="text"
              name={name}
              hasValue={hasValue}
              value={value}
              onChange={onChange}
            />
          )
          : (
            <Input
              id={fieldId}
              type={type}
              name={name}
              value={value}
              hasValue={hasValue}
              onChange={onChange}
            />
          )}
        <LabelText>
          {label}
          {' '}
          :
        </LabelText>
      </label>
    </FieldWrapper>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default FormField;
