import * as React from 'react'
import { Link } from 'gatsby'

const AboutPage = () => {
    return (
        <main>
            <title>
                About Me
            </title>
            <h1>Greetings, I'm Lindsey</h1>
            <Link to="/">Back to Home</Link>
            <p>This site is to talk about the books I am reading</p>
        </main>

    )
}

export default AboutPage