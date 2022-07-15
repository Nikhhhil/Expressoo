import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import SmileIcon from "@material-ui/icons/Mood";
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";

import { deletePost,likePost } from '../../../actions/posts';
import useStyles from './styles';

const CustomColorIconButton = withStyles({
  root: {
    color: "purple"
  }
})(IconButton);



const Post = ({ post, setCurrentId }) => {
  
  const dispatch = useDispatch();
  const classes = useStyles();
  const user=JSON.parse(localStorage.getItem('profile'));

  const Likes = () => {
    if (post.likes.length > 0) {
      return post.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
        ? (
          <><SmileIcon fontSize="small" />&nbsp;{post.likes.length > 2 ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}` }</>
        ) : (
          <><SmileIcon fontSize="small" />&nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</>
        );
    }

    return <><SmileIcon fontSize="small" />&nbsp;Like</>;
  };

  return (
    <Card className={classes.card} style={{flex:1, backgroundColor:'#FFFDD0'}} >
      <CardMedia className={classes.media} height="140" image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />
      <div className={classes.overlay}>
        
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      </div>
      <div className={classes.overlay2}>
      {(user?.result?.gogleId===post?.creator || user?.result?._id===post?.creator)&& (<Button style={{ color: '#DB0F27' }} size="small" onClick={() => setCurrentId(post._id)}><MoreHorizIcon fontSize="default" /></Button>)};
      </div>
      <div className={classes.details}>
      <Typography variant="h5" color="black" component="h1">{post.name}</Typography> </div>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
      </CardContent>
      <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <CustomColorIconButton size="small" disabled={!user?.result} color="primary" onClick={()=>dispatch(likePost(post._id))}>
          <Likes/></CustomColorIconButton>
       {(user?.result?.gogleId===post?.creator || user?.result?._id===post?.creator)&&( <CustomColorIconButton size="small" color="primary" onClick={()=>dispatch(deletePost(post._id))}><DeleteIcon fontSize="small" /> Delete</CustomColorIconButton>
    )}
         </CardActions>
    </Card>
  );
};

export default Post;