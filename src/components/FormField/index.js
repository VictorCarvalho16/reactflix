import React from 'react';
import PropTypes from 'prop-types';

import {
  FieldWrapper, Input, InputText, LabelText,
} from './styles';

function FormField({
  label, type, name, value, onChange, suggestions,
}) {
  const fieldId = `id_${name}}`;
  const hasValue = Boolean(value.length);
  const hasSuggestion = Boolean(suggestions.length);
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
              autoComplete={hasSuggestion ? 'off' : 'on'}
              list={hasSuggestion ? `suggestionFor_${fieldId}` : undefined}
            />
          )}
        <LabelText>
          {label}
          {' '}
          :
        </LabelText>
        {hasSuggestion
          && (
          <datalist id={`suggestionFor_${fieldId}`}>
            {suggestions.map((suggestion) => (
              <option value={suggestion} key={`suggestionFor_${fieldId}_option${suggestion}`}>
                {suggestion}
              </option>
            ))}
          </datalist>
          )}
      </label>
    </FieldWrapper>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
  suggestions: [],
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  suggestions: PropTypes.arrayOf(PropTypes.string),
};

export default FormField;
