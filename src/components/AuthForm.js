import FormGroup from "@mui/material/FormGroup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export default function AuthForm() {
    return (
        <Box
            sx={{
                p: 5,
                width: 300,
                backgroundColor: "primary.dark",
                "&:hover": {
                    backgroundColor: "primary.main",
                    opacity: [5, 6, 9]
                }
            }}
        >
            <FormGroup
                sx={{
                    display: "flex",
                    gap: 3
                }}
            >
                <TextField id="outlined-basic" label="Username" variant="outlined" />
                <TextField id="outlined-basic" label="Password" variant="outlined" />
                <Button variant="contained">Login</Button>
            </FormGroup>
        </Box>
    );
}