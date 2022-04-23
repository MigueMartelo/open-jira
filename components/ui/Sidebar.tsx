import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';

const menuItems: string[] = ['Inbox', 'Starred', 'Send email', 'Drafts'];

export const Sidebar = () => {
  return (
    <Drawer anchor='left' open={true} onClose={() => console.log('cerrando')}>
      <Box sx={{ width: 250 }}>
        <Box sx={{ padding: '5px 10px' }}>
          <Typography variant='h4'>Menú</Typography>
        </Box>
        <List>
          {menuItems.map((item, index) => (
            <ListItem button key={item}>
              <ListItemIcon>
                {index % 2 ? <InboxOutlinedIcon /> : <MailOutlinedIcon />}
              </ListItemIcon>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {menuItems.map((item, index) => (
            <ListItem button key={item}>
              <ListItemIcon>
                {index % 2 ? <InboxOutlinedIcon /> : <MailOutlinedIcon />}
              </ListItemIcon>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};
