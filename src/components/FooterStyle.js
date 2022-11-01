import styled from "styled-components";

export const FooterStyle = styled.div`
    box-sizing: border-box;
    /* Auto layout */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 32px 0px 0px;
    gap: 32px;
    width: 100%;
    min-height: 64px;
    /* Gray/200 */
    border-top: 1px solid #EAECF0;
    @media only screen and (max-width: 600px){
        flex-direction: column;
        align-items: flex-start;
        
    }
`
export const FooterTextStyle = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */
    text-align: center;
    /* Gray/500 */
    color: #667085;
`

export const FooterWrapperStyle = styled.div`
/* padding:50px 8%; */
width: 80%;
margin: 0 auto;
`