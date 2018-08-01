import React, {Component} from 'react';
import classes from './Home.css';
import CardHeader from '../../components/UI/CardHeader/CardHeader';

class Home extends Component {
    render() {
        return (
            <div className={classes.OuterContainer}>
                <div className={classes.Container}>
                    <div className={classes.CardItem}>
                        <CardHeader
                            pos={1}
                            color="#009900"
                            text="Thought Of the Day"/>
                    </div>
                    <div className={classes.CardItem}>
                        <CardHeader
                            pos={2}
                            color="#FF0000"
                            text="Pending List For Approval"/>
                    </div>
                    <div className={classes.CardItem}>
                        <CardHeader
                            pos={3}
                            color="#9900FF"
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
                            color="#3399FF"
                            text="Notice Board"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;