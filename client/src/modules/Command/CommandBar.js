import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Examblecommand from './ExambleCommand';

export default function FixedContainer() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container fixed>
                <h1
                    style={{
                        textAlign: 'center',
                        marginTop: '10px',
                        marginBottom: '10px',

                    }}
                >
                </h1>

                <Box
                    sx={{
                        width: 2000,
                        maxWidth: '100%',
                        boxSizing: 'border-box',
                        display: 'flex',
                    }}
                >
                    <TextField fullWidth id="fullWidth" />
                    <Button
                        variant="outlined"
                        color="inherit"
                        style={{
                            marginTop: '10px',
                            marginBottom: '10px',
                            marginLeft: '10px',
                        }}
                        size="medium"
                    >
                        Find
                    </Button>
                </Box>

                <Examblecommand />
                
            </Container>
        </React.Fragment>
    );
}