import { styled } from "@mui/system";

export const FormElementContainer = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(5)};
    max-width: 650px;
    margin: 0 auto ${({ theme }) => theme.spacing(7)};
`;