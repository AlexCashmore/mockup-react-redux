import React from 'react';

export function InputExtraIcon(props) {
  return (
    <i role="none" className={`material-extra-icons prefix ${props.children}`} onClick={props.onClick} />
  );
}
export function InputIcon(props) {
  return (
    <i role="none" className="material-icons prefix" onClick={props.onClick}>{props.children}</i>
  );
}
