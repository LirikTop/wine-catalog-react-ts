/* eslint-disable import/no-extraneous-dependencies */
import styled from 'styled-components';

export const StyledWrapper = styled.div`
  .group {
    display: flex;
    line-height: 28px;
    align-items: center;
    position: relative;
    // max-width: 190px;
  }

  .input {
    width: 100%;
    height: 40px;
    line-height: 28px;
    padding: 13px 1rem;
    padding-left: 2.5rem;
    border-radius: 100px;
    outline: none;
    transition: 0.3s ease;
  }

  .input::placeholder {
    color: #c99aa0;
  }

  .input:focus,
  input:hover {
    outline: none;
    border-color: rgba(234, 76, 137, 0.4);
    // background-color: #fff;
    box-shadow: 0 0 0 4px rgb(234 76 137 / 10%);
  }

  .icon {
    position: absolute;
    left: 1rem;
    fill: #c99aa0;
    width: 1rem;
    height: 1rem;
  }
`;
