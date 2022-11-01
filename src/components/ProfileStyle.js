import styled from 'styled-components';

export const ProfileStyle = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0px;
        width: 100%;
        height: 88px;
        gap: 24px;
        position: relative;
        border-radius: 275px;
        isolation: isolate;

        #profile__img {
            width: 88px;
            height: 88px;
            border-radius: 275px;
        }
`

export const ProfileTextStyle = styled.div`

        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 30px;
        text-align: center;

        /* Gray/900 */

        color: #101828;
`

export const SlackStyle = styled.p`
display: none;
`

export const ButtonStyle = styled.button`
display: flex;
align-items: center;
justify-content: center;
        position: absolute;
        width: 40px;
        height: 40px;
        top: -1.2rem;
        right: 15%;

        /* Base/White */
        background: transparent;
        /* Gray/300 */
        border: 2px dotted lightgrey;
        border-radius: 100%;
        cursor: pointer;
        z-index: -2;
        #mobile {
            display: none; 

        }

        
        @media only screen and (max-width: 600px) {
        right: 1%;

            #web{
            display: none;
            }
            #mobile {
            display: inline;

            }
  }
`