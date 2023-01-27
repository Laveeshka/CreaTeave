import Stack from '@mui/material/Stack';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";
import { useNavigate } from 'react-router-dom';

function Home(){
    
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
        navigate("/create");
    }

    return (
        <StyledStack spacing={2} alignItems="center" justifyContent="flex-start">
            <Typography variant="h2" align='center' color="primary.light">Welcome to CreaTeave!</Typography>
            <StyledButton variant="contained" size="large" onClick={handleButtonClick}>Create your tea</StyledButton>
        </StyledStack>
    )
}

export default Home;  