import styled from 'styled-components';

interface OptionButtonProps {
    isselected?: string;
}

const OptionButton = styled.button<OptionButtonProps>`
    background: ${ props => props.isselected ? '#67E5D2' : '#ccc' };
    padding: 10px;
    box-sizing: border-box;
    border: 2px solid rgba( 255, 255, 255, 0.4 );
    flex-grow: 1;
    cursor: pointer;
    text-transform: capitalize;

    &:hover {
        background: ${ props => props.isselected ? '#67E5D2' : '#eee'  };
        border: 2px solid rgba( 0, 0, 0, 0.4 );
    }
`

export default OptionButton;
