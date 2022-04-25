import styled from "styled-components";
import { useEffect, useState } from 'react';

const Notes = (props : any) => {
    const [noteContent, setNoteContent] = useState<any>();

    return (
        <StyledNotes>
            <textarea onChange={(e) => {setNoteContent(e.target.value)}}></textarea>
        </StyledNotes>
    )
}

const StyledNotes = styled.section`
    height: 100%;
    background-color: ${props => props.theme.backgroundLight};
    border-top: ${props => props.theme.borderWidth} solid ${props => props.theme.border};
    textarea {
        width: 100%;
        height: 100%;
        padding: 2rem 3rem;
        border: none;
        font-size: 2rem;
        font-family: Noto;
        outline: none;
    }
`;

export default Notes;