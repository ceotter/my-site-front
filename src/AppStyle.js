import styled from 'styled-components';
import pentagon from './topography.png';
import { Link } from 'react-router-dom';

export const PageStyleS = styled.div `
  position: absolute;
  background-image: url(${pentagon});
  background-repeat: repeat;
  background-color: #11001f;
  overflow: auto;
  width: 100%;
  height: 100%;
  font-family: monospace;
  color: tomato;
`
export const ContentS = styled.div`
  padding: 1.75rem;
  width: 100%;
  height: 100%;
`
export const LinkS = styled(Link)`
  color: tomato;
  font-family: monospace;
  font-size: x-large;

`
