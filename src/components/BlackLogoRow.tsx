import React from "react";
import styled from "styled-components";

const Container = styled.div`
    position: relative;
    display: flex;
`;

const Image = styled.img`
    width: 100vw;
`;

type BlackLogoRowProps = {
    offset: number;
    count?: 1 | 2 | 3 | 4 | 5 | 6;
};

const BlackLogoRow = ({ offset, count = 1 }: BlackLogoRowProps) => {
    return (
        <Container style={{ left: `${offset}px` }}>
            {new Array(count).fill(
                <Image src="assets/logos/black-logo-no-text.svg" />
            )}
        </Container>
    );
};

export default BlackLogoRow;
