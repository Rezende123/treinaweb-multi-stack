import { TextField } from "@mui/material";
import { styled } from "@mui/system";

export const TextFieldStyled = styled(TextField)`
    .MuiInputBase-root {
        background-color: ${({ theme }) => theme.palette.grey[50]};
    }

    .MuiOutlinedInput-notCheckedOutline {
        border-color: ${({ theme }) => theme.palette.grey[100]};
    }
`;