import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: 100vw;
    margin-bottom: 5vw;
`

const Image = styled.img`
    width: 100vw;
    max-height: 100vw;
    object-fit: cover;
`

const Text = styled.div`
    box-sizing: border-box;
    background-color: #002fa7;
    color: white;
    width: 100%;
    font-family: sans-serif;
    padding: 5vw;
    font-size: 6vw;
    line-height: 8vw;
`

type FullImageLinkProps = {
    img: string
    text: string
}

const FullImageLink = ({ img, text }: FullImageLinkProps) => {
    return (
        <Container>
            <Image src={img} />
            <Text>{text}</Text>
        </Container>
    )
}

export default FullImageLink
