import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from "antd"

const styles = theme => ({})

function Homepage(props) {
    const { classes } = props

    return (
        <div>
            <div>
                <h1>
                    homepage.js
                </h1>
            </div>
            <h2>
                Hello Guest
            </h2>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                component={Link}
                to="/register"
                className={classes.submit}>
            Register
            </Button>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                component={Link}
                to="/login"
                className={classes.submit}>
            Login
            </Button>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                component={Link}
                to="/dashboard"
                className={classes.submit}>
            Dashboard
            </Button>
        </div>
    )
}

export default Homepage