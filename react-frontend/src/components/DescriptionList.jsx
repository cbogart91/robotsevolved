import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FeedbackIcon from '@material-ui/icons/Feedback'
import CloseIcon from '@material-ui/icons/Close'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import CloseIconWithOnClick from './CloseIconWithOnClick'

export default function Descriptionlist(props) {
    return(
            <List>
              {
                  props.tipsText.map((text,index) =>
                    <ListItem>
                      <div>
                        {text}
                      </div>
                      <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete">
                          <CloseIconWithOnClick index={index} handleClose={props.handleCloseToolTips}/>
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  )
              }
            </List>
    )
}