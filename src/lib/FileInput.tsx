import React from 'react';
import { useDropzone } from 'react-dropzone';
import styled from '@emotion/styled';
import { Flex } from './Flex';

// TODO: What states do we want for this component?
const getColor = (props) =>
  props.isDragAccept
    ? '#00e676'
    : props.isDragReject
    ? '#ff1744'
    : props.isDragActive
    ? '#2196f3'
    : '#eeeeee';

const InputContainer = styled(Flex)(
  {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 4,
    borderWidth: 2,
    borderRadius: 2,
    borderStyle: 'dashed',
    height: '100%',
    width: '100%',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border 0.24s ease-in-out',
  },
  props => ({
    borderColor: getColor(props),
  }),
);

export const FileInput = ({ children }) => {
  const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = useDropzone({
    accept: 'image/*',
  });

  return (
    <InputContainer {...getRootProps({ isDragActive, isDragAccept, isDragReject })}>
      <input {...getInputProps()} />
      {children}
    </InputContainer>
  );
};
