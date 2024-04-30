import styled from 'styled-components';

export const GesturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

export const WebcamContainer = styled.div`
  width: 400px;
  height: 400px;
  border: 5px solid white;
  border-radius: 10px;
`;

export const WebcamPreview = styled.video`
  width: 100%;
  height: 100%;
`;

export const RecordButton = styled.button`
  background-color: #007bff;
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
`;
