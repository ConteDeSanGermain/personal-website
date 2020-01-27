import React from 'react';
import { Segment, Header, Container, Button, Grid, List, Divider } from 'semantic-ui-react';

import '../componentsCSS/Layout.css';
import '../componentsCSS/Skills.css';

const Skills = () => {
    return (
        <Segment attached inverted className='layoutSegment' id='skillsSegment'>

                <Grid stackable columns={2} id='skillsGrid' verticalAlign='middle'>

                    <Grid.Row centered>
                        <Grid.Column textAlign='center'>
                            <h1 id='segmentTitle'>As an avid learner, I am mostly self thought.</h1>
                            <p id='p'>
                                Thanks to Udemy, I have thought myself multiple technologies 
                                such as React.js, and the basics of Android development using Java.  
                                Below is a sample of what I have learned, and what I am currently learning:
                            </p>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column>
                            <Container text>
                                <div id='mobileFontSize'>
                                    <label for='learnedSkills'>Learned Skills</label>
                                    <ul id='learnedSkills'>
                                        <li>React.js & Javascript (web)</li>
                                        <li>Java (software development)</li>
                                        <li>Ui Design</li>
                                    </ul>
                                </div>
                            </Container>
                        </Grid.Column>

                        <Grid.Column>
                            <Container text>
                                <div id='mobileFontSize'>
                                    <label for='nowLearning'>Currently learning</label>
                                    <ul id='nowLearning'>
                                        <li>GraphQL, with Node.js and Appolo (Back-end)</li>
                                    </ul>
                                </div>
                            </Container>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
        
        </Segment>
    )
}

export default Skills;

// <Button 
//                     size={width <= 768 ? 'huge' : 'large'} id='notInvertedBtn'>
//                     Let's talk now!
//                 </Button>