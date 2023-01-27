import Stack from '@mui/material/Stack';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";
import { useNavigate } from 'react-router-dom';

function ErrorPage() {
    
    //component styles
    const StyledStack = styled(Stack)( ({ theme }) => ({
        margin: "2rem",
        height: "100%",
        paddingTop: "25vh"
    })
    );

    const StyledButton = styled(Button)( ({ theme }) => ({
        color: theme.palette.secondary.dark,
        backgroundColor: theme.palette.primary,
        borderRadius: "2rem",
        padding: "0.75rem 1.5rem",
        width: "max-content"
    })
    );

    const navigate = useNavigate();

    //OnClickEventHandler
    const handleButtonClick = () => {
        navigate("/");
    }

    return (
        <StyledStack spacing={2} alignItems="center" justifyContent="flex-start">
            <Typography variant="h2" align='center' color="primary.light">You went off the beaten path!</Typography>
            <StyledButton variant="contained" size="large" onClick={handleButtonClick}>Go home</StyledButton>
        </StyledStack>
    )
}

export default ErrorPage;