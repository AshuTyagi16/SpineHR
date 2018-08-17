import React from 'react';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List'
import {grey400, lightBlack} from 'material-ui/styles/colors';
import classes from './TeamMembers.css';

const teamMembers = (props) => {
    return (
        <div className={classes.Container}>
            <List>
                <ListItem
                    hoverColor="#E8E8E8"
                    leftAvatar={<Avatar src="https://www.w3schools.com/howto/img_avatar.png"/>}
                    primaryText={<p className={classes.ListItemPrimaryText}>Ashu Tyagi</p>}
                    secondaryText={<p style={{
                        color: lightBlack,
                        textAlign: 'start'
                    }}>534</p>}/>
                <Divider style={{backgroundColor: grey400}}/>
                <ListItem
                    hoverColor="#E8E8E8"
                    leftAvatar={<Avatar src="https://www.w3schools.com/howto/img_avatar.png"/>}
                    primaryText={<p className={classes.ListItemPrimaryText}>Ashu Tyagi</p>}
                    secondaryText={<p style={{
                        color: lightBlack,
                        textAlign: 'start'
                    }}>534</p>}/>
                <Divider style={{backgroundColor: grey400}}/>
                <ListItem
                    hoverColor="#E8E8E8"
                    leftAvatar={<Avatar src="https://www.w3schools.com/howto/img_avatar.png"/>}
                    primaryText={<p className={classes.ListItemPrimaryText}>Ashu Tyagi</p>}
                    secondaryText={<p style={{
                        color: lightBlack,
                        textAlign: 'start'
                    }}>534</p>}/>
                <Divider style={{backgroundColor: grey400}}/>
                <ListItem
                    hoverColor="#E8E8E8"
                    leftAvatar={<Avatar src="https://www.w3schools.com/howto/img_avatar.png"/>}
                    primaryText={<p className={classes.ListItemPrimaryText}>Ashu Tyagi</p>}
                    secondaryText={<p style={{
                        color: lightBlack,
                        textAlign: 'start'
                    }}>534</p>}/>
                <Divider style={{backgroundColor: grey400}}/>
                <ListItem
                    hoverColor="#E8E8E8"
                    leftAvatar={<Avatar src="https://www.w3schools.com/howto/img_avatar.png"/>}
                    primaryText={<p className={classes.ListItemPrimaryText}>Ashu Tyagi</p>}
                    secondaryText={<p style={{
                        color: lightBlack,
                        textAlign: 'start'
                    }}>534</p>}/>
                <Divider style={{backgroundColor: grey400}}/>
                <ListItem
                    hoverColor="#E8E8E8"
                    leftAvatar={<Avatar src="https://www.w3schools.com/howto/img_avatar.png"/>}
                    primaryText={<p className={classes.ListItemPrimaryText}>Ashu Tyagi</p>}
                    secondaryText={<p style={{
                        color: lightBlack,
                        textAlign: 'start'
                    }}>534</p>}/>
                <Divider style={{backgroundColor: grey400}}/>
                <ListItem
                    hoverColor="#E8E8E8"
                    leftAvatar={<Avatar src="https://www.w3schools.com/howto/img_avatar.png"/>}
                    primaryText={<p className={classes.ListItemPrimaryText}>Ashu Tyagi</p>}
                    secondaryText={<p style={{
                        color: lightBlack,
                        textAlign: 'start'
                    }}>534</p>}/>
                <Divider style={{backgroundColor: grey400}}/>
            </List>
        </div>
    )
};

export default teamMembers;