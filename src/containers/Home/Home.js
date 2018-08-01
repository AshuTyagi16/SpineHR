import React, {Component} from 'react';
import classes from './Home.css';
import CardHeader from '../../components/UI/CardHeader/CardHeader';
import TeamMembers from '../Team/TeamMembers/TeamMembers';

class Home extends Component {
    render() {
        return (
            <div className={classes.OuterContainer}>
                <div className={classes.Container}>
                    <div className={classes.CardItem}>
                        <CardHeader
                            pos={1}
                            color="#708090"
                            text="Thought Of the Day"/>
                        <h1 className={classes.Quote}>"After you're gone, it wouldn't matter how you made others
                            feel."</h1>
                    </div>
                    <div className={classes.CardItem}>
                        <CardHeader
                            pos={2}
                            color="#708090"
                            text="Pending List For Approval"/>
                    </div>
                    <div className={classes.CardItem}>
                        <CardHeader
                            pos={2}
                            color="#708090"
                            text="Team's Approval"/>
                        <TeamMembers/>
                    </div>
                    <div className={classes.CardItem}>
                        <CardHeader
                            pos={3}
                            color="#708090"
                            text="My Attendance"/>
                    </div>
                    <div className={classes.CardItem}>
                        <CardHeader
                            pos={4}
                            color="#708090"
                            text="Workflow Notification"/>
                    </div>
                    <div className={classes.CardItem}>
                        <CardHeader
                            pos={5}
                            color="#708090"
                            text="Notice Board"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;