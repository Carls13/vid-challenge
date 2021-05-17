import React from 'react'

import { ModalContainer, ModalContent } from './styles';

export const Modal = ({ children, isError, big, medium }) => {
  return (
    <ModalContainer isError={!!isError}>
      <ModalContent isBig={big} isMedium={medium}>
        {children}
      </ModalContent>
    </ModalContainer>
  )
};